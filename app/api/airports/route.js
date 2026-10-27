export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url)
        const q = searchParams.get('q')

        if (!q || q.trim().length < 2) {
            return Response.json({ results: [] })
        }

        const token = process.env.FLIGHT_SEARCH_TOKEN
        if (!token) {
            return Response.json(
                { results: [], error: 'Flight search token not configured' },
                { status: 500 }
            )
        }

        const duffelUrl = `https://api.duffel.com/places/suggestions?query=${encodeURIComponent(q.trim())}`
        const res = await fetch(duffelUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Duffel-Version': 'v2',
                'Accept': 'application/json',
            },
            cache: 'no-store',
        })

        if (!res.ok) {
            return Response.json(
                { results: [], error: `Duffel API returned ${res.status}` },
                { status: res.status }
            )
        }

        const json = await res.json()
        const places = Array.isArray(json?.data) ? json.data : []
        const rawList = []

        for (const place of places) {
            if (!place) continue

            if (place.type === 'city' && Array.isArray(place.airports) && place.airports.length > 0) {
                for (const apt of place.airports) {
                    if (!apt) continue
                    const aptIata = apt.iata_code || apt.iata_city_code
                    rawList.push({
                        id: apt.id || `${place.id}_${aptIata || apt.name}`,
                        type: apt.type || 'airport',
                        name: apt.name || '',
                        iataCode: aptIata ? aptIata.toUpperCase() : null,
                        cityName: apt.city_name || apt.city?.name || place.name || '',
                        countryName: apt.country_name || apt.country?.name || place.country_name || place.country?.name || apt.iata_country_code || place.iata_country_code || '',
                    })
                }

                const cityIata = place.iata_code || place.iata_city_code
                rawList.push({
                    id: place.id,
                    type: place.type,
                    name: place.name || '',
                    iataCode: cityIata ? cityIata.toUpperCase() : null,
                    cityName: place.city_name || place.name || '',
                    countryName: place.country_name || place.country?.name || place.iata_country_code || '',
                })
            } else {
                const iata = place.iata_code || place.iata_city_code
                rawList.push({
                    id: place.id,
                    type: place.type || 'airport',
                    name: place.name || '',
                    iataCode: iata ? iata.toUpperCase() : null,
                    cityName: place.city_name || place.city?.name || (place.type === 'city' ? place.name : '') || '',
                    countryName: place.country_name || place.country?.name || place.iata_country_code || '',
                })
            }
        }

        const dedupedMap = new Map()
        for (const item of rawList) {
            const code = item.iataCode?.toUpperCase()
            if (!code) {
                if (!dedupedMap.has(item.id)) {
                    dedupedMap.set(item.id, item)
                }
                continue
            }

            if (!dedupedMap.has(code)) {
                dedupedMap.set(code, item)
            } else {
                const existing = dedupedMap.get(code)
                if (existing.type === 'city' && item.type === 'airport') {
                    dedupedMap.set(code, item)
                }
            }
        }

        const results = Array.from(dedupedMap.values()).slice(0, 8)
        return Response.json({ results })
    } catch {
        return Response.json(
            { results: [], error: 'Failed to fetch airport suggestions' },
            { status: 500 }
        )
    }
}
