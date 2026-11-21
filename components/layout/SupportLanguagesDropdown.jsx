'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import {
    supportLanguages,
    supportLanguagesHeadline,
} from '../../data/languagesAndCurrencies'

/**
 * Trust dropdown — languages agents speak on calls (not page translation).
 * Desktop: open on hover. Mobile: click to toggle.
 */
export default function SupportLanguagesDropdown({ variant = 'light' }) {
    const [open, setOpen] = useState(false)
    const rootRef = useRef(null)
    const closeTimer = useRef(null)
    const menuId = useId()

    function clearCloseTimer() {
        if (closeTimer.current) {
            window.clearTimeout(closeTimer.current)
            closeTimer.current = null
        }
    }

    function openMenu() {
        clearCloseTimer()
        setOpen(true)
    }

    function scheduleClose() {
        clearCloseTimer()
        closeTimer.current = window.setTimeout(() => setOpen(false), 120)
    }

    useEffect(() => () => clearCloseTimer(), [])

    useEffect(() => {
        if (!open) return undefined

        function onPointerDown(event) {
            if (rootRef.current && !rootRef.current.contains(event.target)) {
                setOpen(false)
            }
        }

        function onKeyDown(event) {
            if (event.key === 'Escape') setOpen(false)
        }

        document.addEventListener('mousedown', onPointerDown)
        document.addEventListener('keydown', onKeyDown)
        return () => {
            document.removeEventListener('mousedown', onPointerDown)
            document.removeEventListener('keydown', onKeyDown)
        }
    }, [open])

    const triggerClass =
        variant === 'cta'
            ? 'inline-flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-xl bg-gradient-to-r from-blue-700 via-blue-800 to-blue-950 px-3 py-2 text-xs font-bold text-white shadow-md shadow-blue-900/30 transition hover:from-blue-800 hover:to-blue-950 xl:px-4 xl:text-sm'
            : variant === 'dark'
              ? 'inline-flex cursor-pointer items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.06em] text-white/90 hover:text-white sm:text-[11px]'
              : 'inline-flex cursor-pointer items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.06em] text-slate-600 hover:text-blue-800 sm:text-[11px]'

    return (
        <div
            className="relative notranslate"
            ref={rootRef}
            onMouseEnter={openMenu}
            onMouseLeave={scheduleClose}
        >
            <button
                type="button"
                className={triggerClass}
                aria-expanded={open}
                aria-controls={menuId}
                aria-haspopup="listbox"
                onClick={() => setOpen((current) => !current)}
            >
                <span className="whitespace-nowrap">{supportLanguagesHeadline}</span>
                <ChevronDown
                    className={`h-3.5 w-3.5 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                />
            </button>

            {open && (
                <ul
                    id={menuId}
                    role="listbox"
                    aria-label="Languages we speak"
                    className="absolute right-0 z-[70] mt-1 max-h-64 w-52 overflow-y-auto rounded-xl border border-slate-200 bg-white py-1 text-left shadow-xl"
                >
                    {supportLanguages.map((language) => (
                        <li
                            key={language.code}
                            role="option"
                            className="flex items-center gap-2.5 border-b border-slate-100 px-3 py-2.5 text-xs font-bold uppercase tracking-wide text-blue-800 last:border-b-0"
                        >
                            <span aria-hidden="true" className="text-base leading-none">
                                {language.flag}
                            </span>
                            <span>{language.label}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
