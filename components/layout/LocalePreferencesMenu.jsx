'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { ChevronDown, Globe } from 'lucide-react'
import {
    currencies,
    defaultCurrencyCode,
    defaultPageLanguageCode,
    pageTranslateLanguages,
} from '../../data/languagesAndCurrencies'
import GoogleTranslate, {
    applyGoogleTranslate,
    hasActiveGoogTransCookie,
} from './GoogleTranslate'

const CURRENCY_KEY = 'agb_preferred_currency'
const LANG_KEY = 'agb_page_language'
const selectClass =
    'h-9 w-full cursor-pointer rounded-lg border border-slate-200 bg-white px-2.5 text-xs font-semibold text-slate-700 outline-none transition focus:border-blue-400'

/**
 * Single header control: EN · USD
 * Google script loads only when needed (cookie / panel open / non-EN lang).
 */
export default function LocalePreferencesMenu({ variant = 'nav' }) {
    const [open, setOpen] = useState(false)
    const [currencyCode, setCurrencyCode] = useState(defaultCurrencyCode)
    const [langCode, setLangCode] = useState(defaultPageLanguageCode)
    const [engineActive, setEngineActive] = useState(false)
    const rootRef = useRef(null)
    const closeTimer = useRef(null)
    const panelId = useId()

    function clearCloseTimer() {
        if (closeTimer.current) {
            window.clearTimeout(closeTimer.current)
            closeTimer.current = null
        }
    }

    function openMenu() {
        clearCloseTimer()
        setOpen(true)
        setEngineActive(true)
    }

    function scheduleClose() {
        clearCloseTimer()
        closeTimer.current = window.setTimeout(() => setOpen(false), 120)
    }

    useEffect(() => () => clearCloseTimer(), [])

    useEffect(() => {
        try {
            const savedCurrency = window.localStorage.getItem(CURRENCY_KEY)
            if (savedCurrency && currencies.some((item) => item.code === savedCurrency)) {
                setCurrencyCode(savedCurrency)
            }

            const savedLang = window.localStorage.getItem(LANG_KEY)
            if (savedLang && pageTranslateLanguages.some((item) => item.code === savedLang)) {
                setLangCode(savedLang)
                if (savedLang !== 'en') setEngineActive(true)
            }
        } catch {
            // ignore
        }

        if (hasActiveGoogTransCookie()) setEngineActive(true)
    }, [])

    useEffect(() => {
        if (!open) return undefined

        setEngineActive(true)

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

    const selectedCurrency =
        currencies.find((item) => item.code === currencyCode) || currencies[0]
    const selectedLang =
        pageTranslateLanguages.find((item) => item.code === langCode) ||
        pageTranslateLanguages[0]

    function chooseCurrency(nextCode) {
        setCurrencyCode(nextCode)
        try {
            window.localStorage.setItem(CURRENCY_KEY, nextCode)
        } catch {
            // ignore
        }
    }

    function chooseLanguage(nextCode) {
        setLangCode(nextCode)
        try {
            window.localStorage.setItem(LANG_KEY, nextCode)
        } catch {
            // ignore
        }
        applyGoogleTranslate(nextCode)
    }

    function toggle() {
        setOpen((current) => !current)
    }

    const isNav = variant === 'nav'
    const triggerClass = isNav
        ? 'inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-white/35 bg-white/5 px-2.5 py-2 text-xs font-bold text-white transition hover:bg-white/10'
        : 'inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-xs font-bold text-slate-700 transition hover:border-blue-300'

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
                aria-controls={panelId}
                aria-haspopup="dialog"
                onClick={toggle}
            >
                <Globe className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                <span>
                    {selectedLang.short} · {selectedCurrency.label}
                </span>
                <ChevronDown
                    className={`h-3.5 w-3.5 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                />
            </button>

            <GoogleTranslate active={engineActive} />

            {open && (
                <div
                    id={panelId}
                    role="dialog"
                    aria-label="Language and currency"
                    className="absolute right-0 z-[70] mt-1 w-64 rounded-xl border border-slate-200 bg-white p-3 text-left shadow-xl"
                >
                    <div className="mb-3">
                        <label
                            htmlFor="agb-page-language"
                            className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wide text-slate-500"
                        >
                            Page language
                        </label>
                        <select
                            id="agb-page-language"
                            value={langCode}
                            onChange={(event) => chooseLanguage(event.target.value)}
                            className={selectClass}
                        >
                            {pageTranslateLanguages.map((language) => (
                                <option key={language.code} value={language.code}>
                                    {language.label}
                                </option>
                            ))}
                        </select>
                        <p className="mt-1 text-[10px] text-slate-400">
                            Machine translated by Google.
                        </p>
                    </div>

                    <div>
                        <label
                            htmlFor="agb-currency-select"
                            className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wide text-slate-500"
                        >
                            Currency
                        </label>
                        <select
                            id="agb-currency-select"
                            value={selectedCurrency.code}
                            onChange={(event) => chooseCurrency(event.target.value)}
                            className={selectClass}
                        >
                            {currencies.map((currency) => (
                                <option key={currency.code} value={currency.code}>
                                    {currency.symbol} {currency.label} — {currency.name}
                                </option>
                            ))}
                        </select>
                        <p className="mt-1 text-[10px] text-slate-400">
                            Display preference only.
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}
