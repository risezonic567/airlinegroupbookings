'use client'

import { useRef, useState } from 'react'
import { MessageCircle, Phone } from 'lucide-react'
import contactDetails from '../../data/contact'

export default function ContactFab() {
    const [isOpen, setIsOpen] = useState(false)
    const closeTimer = useRef(null)

    const keepOpen = () => {
        clearTimeout(closeTimer.current)
        setIsOpen(true)
    }

    const scheduleClose = () => {
        clearTimeout(closeTimer.current)
        closeTimer.current = setTimeout(() => setIsOpen(false), 180)
    }

    return <div className="fixed bottom-6 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-8 sm:right-6" aria-label="Contact us">
        <div onMouseEnter={keepOpen} onMouseLeave={scheduleClose} className={`flex flex-col items-end gap-3 transition-all duration-200 ${isOpen ? 'visible translate-x-0 opacity-100' : 'invisible translate-x-3 opacity-0'}`}>
            <a href={contactDetails.whatsappHref} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" tabIndex={isOpen ? 0 : -1} className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-md font-semibold text-white shadow-lg transition hover:bg-[#20bd5a] focus:outline-none focus:ring-4 focus:ring-green-200">WhatsApp <MessageCircle className="h-5 w-5" aria-hidden="true" /></a>
            <a href={contactDetails.phoneHref} aria-label={`Call ${contactDetails.phoneDisplay}`} tabIndex={isOpen ? 0 : -1} className="inline-flex items-center gap-3 rounded-full bg-blue-700 px-4 py-3 text-md font-semibold text-white shadow-lg transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200">Call us <Phone className="h-5 w-5" aria-hidden="true" /></a>
        </div>
        <button type="button" aria-label="Show WhatsApp and phone contact options" aria-expanded={isOpen} onMouseEnter={keepOpen} onMouseLeave={scheduleClose} onFocus={keepOpen} onBlur={(event) => { if (!event.currentTarget.parentElement.contains(event.relatedTarget)) scheduleClose() }} onClick={() => setIsOpen(true)} className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-105 hover:bg-[#20bd5a] focus:outline-none focus:ring-4 focus:ring-green-200"><MessageCircle className="h-7 w-7" aria-hidden="true" /></button>
    </div>
}
