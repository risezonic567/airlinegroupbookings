/**
 * Header helpers — support languages (We speak…) + currencies.
 * Edit this file to add/remove items; UI will read from here.
 */

/** Languages our team can support on calls (trust dropdown). */
export const supportLanguages = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'es', label: 'Spanish', flag: '🇪🇸' },
    { code: 'hi', label: 'Hindi', flag: '🇮🇳' },
    { code: 'pt', label: 'Portuguese', flag: '🇵🇹' },
    { code: 'fr', label: 'French', flag: '🇫🇷' },
    { code: 'ar', label: 'Arabic', flag: '🇸🇦' },
    { code: 'it', label: 'Italian', flag: '🇮🇹' },
    { code: 'de', label: 'German', flag: '🇩🇪' },
    { code: 'zh', label: 'Chinese', flag: '🇨🇳' },
]

/** Currencies shown in the header selector (display / preference). */
export const currencies = [
    { code: 'USD', label: 'USD', symbol: '$', name: 'US Dollar' },
    { code: 'EUR', label: 'EUR', symbol: '€', name: 'Euro' },
    { code: 'GBP', label: 'GBP', symbol: '£', name: 'British Pound' },
    { code: 'CAD', label: 'CAD', symbol: 'C$', name: 'Canadian Dollar' },
    { code: 'AUD', label: 'AUD', symbol: 'A$', name: 'Australian Dollar' },
    { code: 'INR', label: 'INR', symbol: '₹', name: 'Indian Rupee' },
    { code: 'AED', label: 'AED', symbol: 'د.إ', name: 'UAE Dirham' },
    { code: 'JPY', label: 'JPY', symbol: '¥', name: 'Japanese Yen' },
]

export const defaultCurrencyCode = 'USD'

export const supportLanguagesCount = supportLanguages.length

export const supportLanguagesHeadline = `We speak ${supportLanguagesCount} languages`

/** Page languages for Google Translate (machine translation). */
export const pageTranslateLanguages = [
    { code: 'en', label: 'English', short: 'EN' },
    { code: 'es', label: 'Spanish', short: 'ES' },
    { code: 'hi', label: 'Hindi', short: 'HI' },
    { code: 'fr', label: 'French', short: 'FR' },
    { code: 'de', label: 'German', short: 'DE' },
    { code: 'pt', label: 'Portuguese', short: 'PT' },
    { code: 'ar', label: 'Arabic', short: 'AR' },
    { code: 'it', label: 'Italian', short: 'IT' },
    { code: 'zh-CN', label: 'Chinese', short: 'ZH' },
    { code: 'ja', label: 'Japanese', short: 'JA' },
    { code: 'ko', label: 'Korean', short: 'KO' },
    { code: 'nl', label: 'Dutch', short: 'NL' },
    { code: 'pl', label: 'Polish', short: 'PL' },
    { code: 'sv', label: 'Swedish', short: 'SV' },
    { code: 'tr', label: 'Turkish', short: 'TR' },
]

export const defaultPageLanguageCode = 'en'

export const pageTranslateLanguageCodes = pageTranslateLanguages
    .map((item) => item.code)
    .join(',')
