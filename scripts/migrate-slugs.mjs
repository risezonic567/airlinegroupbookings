import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')

function withAirlinesName(name) {
    if (/air\s*lines/i.test(name)) return name
    return `${name} Airlines`
}

function toGroupSlug(name) {
    const label = withAirlinesName(name)
    return (
        label
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/air\s+lines/g, 'airlines')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '') + '-group-booking'
    )
}

function shortenBusinessSlug(slug) {
    return slug.replace(/-business-class.*$/, '')
}

const gt = (await import('../data/groupTravelAirlines.js')).default
const bc = (await import('../data/businessClassAirlines.js')).default

const gtMap = {}
for (const a of gt) {
    gtMap[a.slug] = { newSlug: toGroupSlug(a.name), label: withAirlinesName(a.name) }
    console.log(`GT ${a.slug} => ${gtMap[a.slug].newSlug}`)
}

const bcMap = {}
for (const a of bc) {
    bcMap[a.slug] = { newSlug: shortenBusinessSlug(a.slug) }
    console.log(`BC ${a.slug} => ${bcMap[a.slug].newSlug}`)
}

const redirectModule = `/** Old slug -> new slug maps for permanent redirects + GT label helper */
export const groupTravelSlugRedirects = ${JSON.stringify(
    Object.fromEntries(Object.entries(gtMap).map(([o, v]) => [o, v.newSlug])),
    null,
    2,
)}

export const businessClassSlugRedirects = ${JSON.stringify(
    Object.fromEntries(Object.entries(bcMap).map(([o, v]) => [o, v.newSlug])),
    null,
    2,
)}

export function withAirlinesName(name) {
  if (/air\\s*lines/i.test(name)) return name
  return \`\${name} Airlines\`
}
`

fs.writeFileSync(path.join(root, 'data/slugRedirects.js'), redirectModule)

function replaceSlugs(content, map) {
    let out = content
    // Replace longer old slugs first to avoid partial collisions
    const entries = Object.entries(map).sort((a, b) => b[0].length - a[0].length)
    for (const [oldSlug, { newSlug }] of entries) {
        if (oldSlug === newSlug) continue
        out = out.split(`"${oldSlug}"`).join(`"${newSlug}"`)
        out = out.split(`'${oldSlug}'`).join(`'${newSlug}'`)
    }
    return out
}

const gtPath = path.join(root, 'data/groupTravelAirlines.js')
const bcPath = path.join(root, 'data/businessClassAirlines.js')
const seoPath = path.join(root, 'data/pageSeo.js')

fs.writeFileSync(gtPath, replaceSlugs(fs.readFileSync(gtPath, 'utf8'), gtMap))
fs.writeFileSync(bcPath, replaceSlugs(fs.readFileSync(bcPath, 'utf8'), bcMap))
fs.writeFileSync(
    seoPath,
    replaceSlugs(replaceSlugs(fs.readFileSync(seoPath, 'utf8'), gtMap), bcMap),
)

console.log('Migration complete')
