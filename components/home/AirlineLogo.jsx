const logoFiles = {
    'American Airlines': '/airline-logos/american.png',
    'Delta Air Lines': '/airline-logos/delta.png',
    'United Airlines': '/airline-logos/united.png',
    Lufthansa: '/airline-logos/lufthansa.png',
    'Alaska Airlines': '/airline-logos/alaska.png',
    JetBlue: '/airline-logos/jetblue.png',
    'Southwest Airlines': '/airline-logos/southwest.png',
    'Qatar Airways': '/airline-logos/qatar.png',
}

export default function AirlineLogo({ name, alt }) {
    const src = logoFiles[name]
    const label = alt || name || 'Airline'

    if (!src) {
        return (
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xs font-bold text-blue-700">
                {label.slice(0, 2).toUpperCase()}
            </span>
        )
    }

    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            src={src}
            alt={label}
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
            loading="lazy"
        />
    )
}
