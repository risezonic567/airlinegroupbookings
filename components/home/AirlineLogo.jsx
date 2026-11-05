'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function AirlineLogo({ src, alt }) {
    const [failed, setFailed] = useState(false)

    if (failed) {
        return <svg className="h-7 w-7 text-blue-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label={`${alt} logo unavailable`}>
            <path d="m2 16 8.5-2.5L7 5l2-.7 6.5 7.5L21 10a1.5 1.5 0 0 1 1 2.8l-11 6.2L8 18l-4 1z" />
        </svg>
    }

    return <Image src={src} alt="" width={40} height={40} className="h-10 w-10 object-contain" onError={() => setFailed(true)} />
}
