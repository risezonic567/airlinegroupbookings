'use client'

import { useEffect } from 'react'
import { pageTranslateLanguageCodes } from '../../data/languagesAndCurrencies'

const SCRIPT_ID = 'google-translate-script'
const MOUNT_ID = 'google_translate_element'
const HOST_ID = 'google-translate-host'
const STYLE_ID = 'agb-hide-gt-banner'

const BANNER_CSS = `
body > .skiptranslate:not(#${HOST_ID}),
body > .goog-te-banner-frame,
.goog-te-banner-frame,
.goog-te-banner-frame.skiptranslate,
iframe.goog-te-banner-frame {
  display: none !important;
  visibility: hidden !important;
  opacity: 0 !important;
  height: 0 !important;
  max-height: 0 !important;
  width: 0 !important;
  border: 0 !important;
  pointer-events: none !important;
  position: absolute !important;
  top: -9999px !important;
  left: -9999px !important;
}
#goog-gt-tt,
.goog-te-balloon-frame,
.goog-tooltip,
.goog-tooltip:hover {
  display: none !important;
}
html, body {
  top: 0 !important;
  position: static !important;
  margin-top: 0 !important;
}
`

function ensureBannerCss() {
    if (document.getElementById(STYLE_ID)) return
    const style = document.createElement('style')
    style.id = STYLE_ID
    style.textContent = BANNER_CSS
    document.head.appendChild(style)
}

function resetBodyOffset() {
    if (document.body) {
        document.body.style.setProperty('top', '0px', 'important')
        document.body.style.setProperty('position', 'static', 'important')
        document.body.style.setProperty('margin-top', '0px', 'important')
    }
    document.documentElement.style.setProperty('top', '0px', 'important')
}

/** True when Google Translate cookie is active (non-English). */
export function hasActiveGoogTransCookie() {
    if (typeof document === 'undefined') return false
    const match = document.cookie.match(/(?:^|; )googtrans=([^;]*)/)
    if (!match) return false
    const value = decodeURIComponent(match[1] || '').trim()
    if (!value) return false
    const parts = value.split('/').filter(Boolean)
    const target = parts[parts.length - 1] || ''
    return Boolean(target) && target.toLowerCase() !== 'en'
}

function clearGoogTransCookies() {
    const hostname = window.location.hostname
    const expire = 'Thu, 01 Jan 1970 00:00:00 GMT'
    ;['/', window.location.pathname].forEach((path) => {
        document.cookie = `googtrans=;expires=${expire};path=${path}`
        document.cookie = `googtrans=;expires=${expire};path=${path};domain=${hostname}`
        document.cookie = `googtrans=;expires=${expire};path=${path};domain=.${hostname}`
    })
}

function setGoogTransCookie(langCode) {
    clearGoogTransCookies()
    if (!langCode || langCode === 'en') return

    const value = `/en/${langCode}`
    document.cookie = `googtrans=${value};path=/`

    const hostname = window.location.hostname
    if (hostname && hostname !== 'localhost' && !hostname.startsWith('127.')) {
        document.cookie = `googtrans=${value};path=/;domain=.${hostname}`
    }
}

/**
 * Apply page translation via cookie + reload (reliable, no live DOM thrash).
 */
export function applyGoogleTranslate(langCode) {
    setGoogTransCookie(langCode)
    window.location.reload()
    return true
}

function ensureHost() {
    let host = document.getElementById(HOST_ID)
    if (!host) {
        host = document.createElement('div')
        host.id = HOST_ID
        host.className = 'google-translate-engine skiptranslate'
        host.setAttribute('aria-hidden', 'true')
        host.innerHTML = `<div id="${MOUNT_ID}"></div>`
        document.body.appendChild(host)
    } else if (!document.getElementById(MOUNT_ID)) {
        host.innerHTML = `<div id="${MOUNT_ID}"></div>`
    }
    return host
}

function initTranslateElement() {
    if (!window.google?.translate?.TranslateElement) return
    const mount = document.getElementById(MOUNT_ID)
    if (!mount || mount.getAttribute('data-ready') === '1') return

    // eslint-disable-next-line no-new
    new window.google.translate.TranslateElement(
        {
            pageLanguage: 'en',
            includedLanguages: pageTranslateLanguageCodes,
            layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
            autoDisplay: false,
        },
        MOUNT_ID,
    )
    mount.setAttribute('data-ready', '1')

    // One-shot body offset fix after Google injects banner (CSS hides banner)
    resetBodyOffset()
    window.setTimeout(resetBodyOffset, 300)
    window.setTimeout(resetBodyOffset, 1200)
}

function loadGoogleTranslateScript() {
    ensureBannerCss()
    ensureHost()

    window.googleTranslateElementInit = initTranslateElement

    if (document.getElementById(SCRIPT_ID)) {
        if (window.google?.translate?.TranslateElement) initTranslateElement()
        return
    }

    const script = document.createElement('script')
    script.id = SCRIPT_ID
    script.src =
        'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    script.async = true
    document.body.appendChild(script)
}

/**
 * Lazy Google Translate engine.
 * Loads script only when `active` (user opened locale UI) OR cookie already set.
 * No MutationObserver / setInterval — those made the site heavy.
 */
export default function GoogleTranslate({ active = false }) {
    useEffect(() => {
        ensureBannerCss()

        const shouldLoad = active || hasActiveGoogTransCookie()
        if (!shouldLoad) return undefined

        loadGoogleTranslateScript()
        return undefined
    }, [active])

    return null
}
