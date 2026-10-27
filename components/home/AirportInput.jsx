'use client'

import { useState, useEffect, useRef } from 'react'
import { Plane } from 'lucide-react'

const defaultInputClass = 'h-11 w-full rounded-md border border-slate-200 bg-white px-3 text-md text-slate-800 outline-none transition placeholder:text-slate-400 hover:border-blue-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100'

export default function AirportInput({
    name,
    value = '',
    onChange,
    placeholder = 'Start Searching...',
    required = false,
    className,
    ...rest
}) {
    const [isOpen, setIsOpen] = useState(false)
    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [activeIndex, setActiveIndex] = useState(-1)

    const containerRef = useRef(null)
    const listRef = useRef(null)
    const abortControllerRef = useRef(null)
    const hasSelectedRef = useRef(false)

    function selectAirport(airport) {
        const display = airport.iataCode
            ? `${airport.name} (${airport.iataCode})`
            : airport.name
        hasSelectedRef.current = true
        setIsOpen(false)
        setActiveIndex(-1)
        setResults([])
        if (onChange) {
            onChange({ target: { name, value: display } })
        }
    }

    function handleInputChange(e) {
        hasSelectedRef.current = false
        const nextVal = e.target.value
        if (nextVal.trim().length < 2) {
            if (abortControllerRef.current) {
                abortControllerRef.current.abort()
                abortControllerRef.current = null
            }
            setResults([])
            setIsLoading(false)
            setIsOpen(false)
            setActiveIndex(-1)
        }
        if (onChange) {
            onChange(e)
        }
    }

    function handleKeyDown(e) {
        if (!isOpen) {
            if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && results.length > 0) {
                e.preventDefault()
                setIsOpen(true)
                setActiveIndex(0)
            }
            return
        }

        if (e.key === 'ArrowDown') {
            e.preventDefault()
            setActiveIndex((prev) => {
                if (results.length === 0) return -1
                return prev < results.length - 1 ? prev + 1 : 0
            })
        } else if (e.key === 'ArrowUp') {
            e.preventDefault()
            setActiveIndex((prev) => {
                if (results.length === 0) return -1
                return prev > 0 ? prev - 1 : results.length - 1
            })
        } else if (e.key === 'Enter') {
            if (activeIndex >= 0 && results[activeIndex]) {
                e.preventDefault()
                selectAirport(results[activeIndex])
            }
        } else if (e.key === 'Escape') {
            e.preventDefault()
            setIsOpen(false)
            setActiveIndex(-1)
        }
    }

    // Debounce & fetch suggestions
    useEffect(() => {
        if (hasSelectedRef.current) {
            return
        }

        const query = (value || '').trim()
        if (query.length < 2) {
            return
        }

        const timer = setTimeout(async () => {
            setIsLoading(true)
            setIsOpen(true)
            setActiveIndex(-1)

            if (abortControllerRef.current) {
                abortControllerRef.current.abort()
            }
            const controller = new AbortController()
            abortControllerRef.current = controller

            try {
                const res = await fetch(`/api/airports?q=${encodeURIComponent(query)}`, {
                    signal: controller.signal,
                })
                if (!res.ok) {
                    throw new Error(`HTTP ${res.status}`)
                }
                const data = await res.json()
                setResults(Array.isArray(data?.results) ? data.results : [])
            } catch (err) {
                if (err.name !== 'AbortError') {
                    setResults([])
                }
            } finally {
                if (!controller.signal.aborted) {
                    setIsLoading(false)
                }
            }
        }, 300)

        return () => {
            clearTimeout(timer)
        }
    }, [value])

    // Scroll active item into view
    useEffect(() => {
        if (activeIndex >= 0 && listRef.current) {
            const activeEl = listRef.current.children[activeIndex]
            if (activeEl && typeof activeEl.scrollIntoView === 'function') {
                activeEl.scrollIntoView({ block: 'nearest' })
            }
        }
    }, [activeIndex])

    // Click outside to close
    useEffect(() => {
        function handleClickOutside(event) {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false)
                setActiveIndex(-1)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    // Cleanup abort controller on unmount
    useEffect(() => {
        return () => {
            if (abortControllerRef.current) {
                abortControllerRef.current.abort()
            }
        }
    }, [])

    const isRightAlignedOnMobile = name === 'destination' || name === 'secondDestination'

    return (
        <div ref={containerRef} className={`relative mt-2 ${isOpen ? 'z-40' : 'z-10'}`}>
            <input
                type="text"
                name={name}
                value={value}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                required={required}
                autoComplete="off"
                className={className || defaultInputClass}
                {...rest}
            />
            {isOpen && (
                <div
                    ref={listRef}
                    role="listbox"
                    className={`absolute top-full z-50 mt-1.5 max-h-80 w-[340px] sm:w-[420px] max-w-[calc(100vw-2.5rem)] overflow-y-auto rounded-lg border border-slate-200 bg-white py-1.5 shadow-2xl ${
                        isRightAlignedOnMobile ? 'max-sm:right-0 max-sm:left-auto left-0 sm:left-0' : 'left-0'
                    }`}
                >
                    {isLoading ? (
                        <div className="flex items-center gap-2.5 px-4 py-3 text-sm text-slate-500">
                            <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
                            <span className="font-medium">Searching airports...</span>
                        </div>
                    ) : results.length === 0 ? (
                        <div className="px-4 py-3 text-sm text-slate-500">
                            No airports found
                        </div>
                    ) : (
                        results.map((airport, index) => {
                            const isSelected = index === activeIndex
                            const location = [airport.cityName, airport.countryName].filter(Boolean).join(', ')
                            return (
                                <div
                                    key={airport.id || `${airport.iataCode}-${index}`}
                                    role="option"
                                    aria-selected={isSelected}
                                    onMouseDown={(e) => {
                                        e.preventDefault()
                                        selectAirport(airport)
                                    }}
                                    onMouseEnter={() => setActiveIndex(index)}
                                    className={`flex items-center gap-3 cursor-pointer px-3.5 py-2.5 text-left transition-colors ${
                                        isSelected
                                            ? 'bg-blue-50 text-blue-900'
                                            : 'text-slate-800 hover:bg-blue-50/70'
                                    }`}
                                >
                                    <span
                                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                                            isSelected ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-500'
                                        }`}
                                    >
                                        <Plane className="h-4 w-4 -rotate-45" />
                                    </span>
                                    <div className="min-w-0 flex-1">
                                        <div className="flex items-center justify-between gap-2">
                                            <span className="truncate text-sm sm:text-base font-semibold text-slate-800" title={airport.name}>
                                                {airport.name}
                                            </span>
                                            {airport.iataCode && (
                                                <span className="shrink-0 rounded bg-blue-100 px-2 py-0.5 text-xs font-bold text-blue-800">
                                                    {airport.iataCode}
                                                </span>
                                            )}
                                        </div>
                                        {location && (
                                            <div className="mt-0.5 truncate text-xs sm:text-sm text-slate-500">
                                                {location}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )
                        })
                    )}
                </div>
            )}
        </div>
    )
}
