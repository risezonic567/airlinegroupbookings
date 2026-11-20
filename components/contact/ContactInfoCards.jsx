import { Clock3, Mail, MapPin, Phone } from 'lucide-react'
import contactDetails from '../../data/contact'

const cards = [
    {
        key: 'call',
        title: 'Call our team',
        detail: contactDetails.phoneDisplay,
        href: contactDetails.phoneHref,
        Icon: Phone,
    },
    {
        key: 'email',
        title: 'Email support',
        detail: contactDetails.email,
        href: `mailto:${contactDetails.email}`,
        Icon: Mail,
    },
    {
        key: 'usa-office',
        title: 'USA office',
        detail: contactDetails.offices[0]?.address || 'United States',
        Icon: MapPin,
    },
    {
        key: 'support',
        title: 'Group travel support',
        detail: contactDetails.supportHours || '24/7 group booking support',
        Icon: Clock3,
    },
]

function Card({ title, detail, href, Icon }) {
    const inner = (
        <>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="min-w-0">
                <span className="block text-sm font-semibold text-slate-900">{title}</span>
                <span className="mt-1 block break-words text-sm leading-6 text-slate-600">{detail}</span>
            </span>
        </>
    )

    const className =
        'flex h-full items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-300 hover:shadow-md'

    if (href) {
        return (
            <a href={href} className={className}>
                {inner}
            </a>
        )
    }

    return <div className={className}>{inner}</div>
}

export default function ContactInfoCards() {
    return (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {cards.map((card) => (
                <Card key={card.key} {...card} />
            ))}
        </div>
    )
}
