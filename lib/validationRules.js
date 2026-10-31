import { getCountries, getCountryCallingCode, parsePhoneNumberFromString } from 'libphonenumber-js'

const countries = new Set(getCountries())
const callingCodes = new Set([...countries].map((country) => getCountryCallingCode(country)))
const disposableDomains = new Set([
    '10minutemail.com',
    'dispostable.com',
    'fakeinbox.com',
    'getnada.com',
    'guerrillamail.com',
    'maildrop.cc',
    'mailinator.com',
    'sharklasers.com',
    'temp-mail.org',
    'tempmail.com',
    'throwawaymail.com',
    'yopmail.com',
])

const invalidPhone = { valid: false, e164: null, country: null }

export function validatePhone(countryCode, phone) {
    if (typeof countryCode !== 'string' || typeof phone !== 'string') return invalidPhone

    const code = countryCode.trim()
    const input = phone.trim()
    if (!code || !input || !/^\+?[0-9 -]+$/.test(input)) return invalidPhone

    let expectedCountry = null
    let expectedCallingCode

    if (/^[a-z]{2}$/i.test(code)) {
        expectedCountry = code.toUpperCase()
        if (!countries.has(expectedCountry)) return invalidPhone
        expectedCallingCode = getCountryCallingCode(expectedCountry)
    } else {
        expectedCallingCode = code.startsWith('+') ? code.slice(1) : code
        if (!/^\d{1,3}$/.test(expectedCallingCode) || !callingCodes.has(expectedCallingCode)) return invalidPhone
    }

    const parsed = input.startsWith('+')
        ? parsePhoneNumberFromString(input)
        : expectedCountry
            ? parsePhoneNumberFromString(input, expectedCountry)
            : parsePhoneNumberFromString(`+${expectedCallingCode}${input.replace(/\D/g, '')}`)

    if (
        !parsed
        || !parsed.isValid()
        || parsed.countryCallingCode !== expectedCallingCode
        || (expectedCountry && parsed.country !== expectedCountry)
    ) {
        return invalidPhone
    }

    return {
        valid: true,
        e164: parsed.number,
        country: parsed.country || expectedCountry,
    }
}

export function validateEmail(email) {
    return typeof email === 'string'
        && email.length <= 254
        && !email.includes('..')
        && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)
}

export function isDisposableEmail(email) {
    if (typeof email !== 'string') return false
    const domain = email.slice(email.lastIndexOf('@') + 1).toLowerCase()
    return [...disposableDomains].some((blocked) => domain === blocked || domain.endsWith(`.${blocked}`))
}

export function sanitizePhoneInput(value) {
    const allowed = String(value).replace(/[^\d +-]/g, '')
    const trimmed = allowed.trimStart()
    return trimmed.startsWith('+')
        ? `+${trimmed.slice(1).replace(/\+/g, '')}`
        : allowed.replace(/\+/g, '')
}
