import { resolveMx } from 'node:dns/promises'
import { isDisposableEmail, validateEmail, validatePhone } from './validationRules.js'

export { isDisposableEmail, validateEmail, validatePhone }

export async function emailDomainOk(email) {
    if (typeof email !== 'string') return false
    const domain = email.slice(email.lastIndexOf('@') + 1)
    if (!domain) return false

    let timeoutId
    const timeout = new Promise((resolve) => {
        timeoutId = setTimeout(() => resolve(null), 3000)
    })

    try {
        const records = await Promise.race([resolveMx(domain), timeout])
        return records === null || records.length > 0
    } catch (error) {
        return error?.code !== 'ENOTFOUND' && error?.code !== 'ENODATA'
    } finally {
        clearTimeout(timeoutId)
    }
}
