import { createPageSchema } from '../../lib/seo'
import JsonLd from './JsonLd'

export default function PageStructuredData(props) {
    return <JsonLd data={createPageSchema(props)} />
}
