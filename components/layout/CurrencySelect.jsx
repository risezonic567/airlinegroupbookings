'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { currencies, defaultCurrencyCode } from '../../data/languagesAndCurrencies'

const STORAGE_KEY = 'agb_preferred_currency'

export default function CurrencySelect() {
    const [open, setOpen] = useState(false)
    const [code, setCode] = useState(defaultCurrencyCode)
    const rootRef = useRef(null)
    const menuId = useId()

    useEffect(() => {
        try {
            const saved = window.localStorage.getItem(STORAGE_KEY)
            if (saved && currencies.some((item) => item.code === saved)) {
                setCode(saved)
            }
        } catch {
            // ignore storage errors
        }
    }, [])

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

    const selected = currencies.find((item) => item.code === code) || currencies[0]

    function choose(nextCode) {
        setCode(nextCode)
        setOpen(false)
        try {
            window.localStorage.setItem(STORAGE_KEY, nextCode)
        } catch {
            // ignore storage errors
        }
    }

    return (
        <div className="relative" ref={rootRef}>
            <button
                type="button"
                className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-bold text-slate-700 transition hover:border-blue-300 hover:text-blue-800"
                aria-expanded={open}
                aria-controls={menuId}
                aria-haspopup="listbox"
                onClick={() => setOpen((current) => !current)}
            >
                <span>
                    {selected.symbol} {selected.label}
                </span>
                <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                />
            </button>

            {open && (
                <ul
                    id={menuId}
                    role="listbox"
                    aria-label="Currency"
                    className="absolute right-0 z-[60] mt-2 max-h-64 w-48 overflow-y-auto rounded-xl border border-slate-200 bg-white py-1 shadow-xl"
                >
                    {currencies.map((currency) => {
                        const active = currency.code === selected.code
                        return (
                            <li key={currency.code} role="option" aria-selected={active}>
                                <button
                                    type="button"
                                    className={`flex w-full items-center justify-between gap-2 px-3 py-2.5 text-left text-xs font-semibold transition hover:bg-blue-50 ${
                                        active ? 'bg-blue-50 text-blue-800' : 'text-slate-700'
                                    }`}
                                    onClick={() => choose(currency.code)}
                                >
                                    <span>
                                        {currency.symbol} {currency.label}
                                    </span>
                                    <span className="font-normal text-slate-400">{currency.name}</span>
                                </button>
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}
