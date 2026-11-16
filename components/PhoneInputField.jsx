'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import PhoneInput, { getCountryCallingCode, parsePhoneNumber } from 'react-phone-number-input'
import flags from 'react-phone-number-input/flags'
import 'react-phone-number-input/style.css'

const PRIORITY_COUNTRIES = ['US', 'CA', 'GB', 'IN', 'AU', 'AE']

/** Map known dial codes to a default ISO country (shared codes like +1 → US). */
function dialToCountry(countryCode) {
    const map = {
        '+1': 'US',
        '+44': 'GB',
        '+91': 'IN',
        '+61': 'AU',
        '+971': 'AE',
    }
    return map[countryCode] || 'US'
}

function buildE164(countryCode, phone, country) {
    const digits = String(phone || '').replace(/\D/g, '')
    if (!digits) return undefined
    const dial = countryCode?.startsWith('+')
        ? countryCode
        : `+${countryCode || getCountryCallingCode(country || 'US')}`
    return `${dial}${digits}`
}

function sortOptions(options) {
    const priority = []
    const rest = []
    const seen = new Set()

    for (const code of PRIORITY_COUNTRIES) {
        const match = options.find((option) => option.value === code && !option.divider)
        if (match) {
            priority.push(match)
            seen.add(code)
        }
    }

    for (const option of options) {
        if (option.divider || !option.value || seen.has(option.value)) continue
        rest.push(option)
    }

    rest.sort((a, b) => String(a.label).localeCompare(String(b.label)))
    return priority.length ? [...priority, { divider: true, label: '────────' }, ...rest] : rest
}

/**
 * Compact searchable country select (replaces dense native <select>).
 * Props match react-phone-number-input countrySelectComponent API.
 */
function SearchableCountrySelect({
    value,
    onChange,
    options = [],
    disabled,
    readOnly,
    iconComponent: Icon,
    arrowComponent: Arrow,
    className,
    'aria-label': ariaLabel,
}) {
    const [open, setOpen] = useState(false)
    const [query, setQuery] = useState('')
    const rootRef = useRef(null)
    const searchRef = useRef(null)

    const sorted = useMemo(() => sortOptions(options), [options])
    const selected = useMemo(
        () => options.find((option) => option.value === value) || options.find((option) => option.value) || null,
        [options, value],
    )

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase()
        if (!q) return sorted
        return sorted.filter((option) => {
            if (option.divider || !option.value) return false
            const dial = `+${getCountryCallingCode(option.value)}`
            return (
                String(option.label).toLowerCase().includes(q)
                || option.value.toLowerCase().includes(q)
                || dial.includes(q)
            )
        })
    }, [sorted, query])

    useEffect(() => {
        if (!open) return undefined

        function onPointerDown(event) {
            if (rootRef.current && !rootRef.current.contains(event.target)) {
                setOpen(false)
                setQuery('')
            }
        }

        function onKeyDown(event) {
            if (event.key === 'Escape') {
                setOpen(false)
                setQuery('')
            }
        }

        document.addEventListener('mousedown', onPointerDown)
        document.addEventListener('keydown', onKeyDown)
        const focusTimer = window.setTimeout(() => searchRef.current?.focus(), 0)

        return () => {
            document.removeEventListener('mousedown', onPointerDown)
            document.removeEventListener('keydown', onKeyDown)
            window.clearTimeout(focusTimer)
        }
    }, [open])

    function selectCountry(code) {
        onChange(code || undefined)
        setOpen(false)
        setQuery('')
    }

    return (
        <div className="PhoneInputCountry PhoneInputCountry--searchable" ref={rootRef}>
            <button
                type="button"
                className={`PhoneInputCountrySelect PhoneInputCountrySelect--button ${className || ''}`.trim()}
                aria-label={ariaLabel || 'Country calling code'}
                aria-expanded={open}
                aria-haspopup="listbox"
                disabled={disabled || readOnly}
                onClick={() => {
                    if (disabled || readOnly) return
                    setOpen((current) => !current)
                }}
            >
                <span className="sr-only">{selected?.label || 'Country'}</span>
            </button>

            {selected && Icon ? (
                <Icon aria-hidden country={value} label={selected.label} />
            ) : null}
            {Arrow ? <Arrow /> : <div className="PhoneInputCountrySelectArrow" aria-hidden />}
            {value ? (
                <span className="PhoneInputCountryDialCode" aria-hidden="true">
                    +{getCountryCallingCode(value)}
                </span>
            ) : null}

            {open && (
                <div className="PhoneInputCountryDropdown" role="listbox" aria-label={ariaLabel || 'Countries'}>
                    <input
                        ref={searchRef}
                        type="search"
                        className="PhoneInputCountrySearch"
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder="Search country or code"
                        autoComplete="off"
                        aria-label="Search country or code"
                    />
                    <div className="PhoneInputCountryList">
                        {filtered.length === 0 && (
                            <div className="PhoneInputCountryEmpty">No countries found</div>
                        )}
                        {filtered.map((option, index) => {
                            if (option.divider) {
                                return <div key={`divider-${index}`} className="PhoneInputCountryDivider" aria-hidden />
                            }
                            const dial = option.value ? `+${getCountryCallingCode(option.value)}` : ''
                            const active = option.value === value
                            return (
                                <button
                                    key={option.value || `opt-${index}`}
                                    type="button"
                                    role="option"
                                    aria-selected={active}
                                    className={`PhoneInputCountryOption${active ? ' is-active' : ''}`}
                                    onClick={() => selectCountry(option.value)}
                                >
                                    {Icon ? (
                                        <Icon aria-hidden country={option.value} label={option.label} />
                                    ) : null}
                                    <span className="PhoneInputCountryOptionLabel">{option.label}</span>
                                    <span className="PhoneInputCountryOptionDial">{dial}</span>
                                </button>
                            )
                        })}
                    </div>
                </div>
            )}
        </div>
    )
}

/**
 * Flag + searchable country dial picker.
 * Keeps parent API shape: countryCode like "+1" and national phone digits.
 */
export default function PhoneInputField({
    id,
    countryCode,
    phone,
    onCountryCodeChange,
    onPhoneChange,
    onBlur,
    required = false,
    invalid = false,
    disabled = false,
    placeholder = 'Phone number',
    describedBy,
}) {
    const [country, setCountry] = useState(() => dialToCountry(countryCode))

    const value = useMemo(
        () => buildE164(countryCode, phone, country),
        [countryCode, phone, country],
    )

    function handleCountryChange(nextCountry) {
        if (!nextCountry) return
        setCountry(nextCountry)
        onCountryCodeChange(`+${getCountryCallingCode(nextCountry)}`)
    }

    function handleChange(next) {
        if (!next) {
            onPhoneChange('')
            return
        }

        const parsed = parsePhoneNumber(next)
        if (parsed) {
            if (parsed.country) setCountry(parsed.country)
            onCountryCodeChange(`+${parsed.countryCallingCode}`)
            onPhoneChange(parsed.nationalNumber)
            return
        }

        const dial = `+${getCountryCallingCode(country)}`
        const national = next.startsWith(dial)
            ? next.slice(dial.length)
            : next.replace(/\D/g, '')
        onPhoneChange(String(national).replace(/\D/g, ''))
    }

    return (
        <div className="PhoneInputField mt-2">
            <PhoneInput
                id={id}
                flags={flags}
                international={false}
                countryCallingCodeEditable={false}
                defaultCountry="US"
                country={country}
                countryOptionsOrder={[...PRIORITY_COUNTRIES, '|', '...']}
                countrySelectComponent={SearchableCountrySelect}
                onCountryChange={handleCountryChange}
                value={value}
                onChange={handleChange}
                onBlur={onBlur}
                disabled={disabled}
                placeholder={placeholder}
                numberInputProps={{
                    name: 'phone',
                    required,
                    autoComplete: 'tel-national',
                    'aria-invalid': invalid || undefined,
                    'aria-describedby': describedBy,
                }}
                countrySelectProps={{
                    'aria-label': 'Country calling code',
                }}
            />
        </div>
    )
}
