/** Old slug -> new slug maps for permanent redirects + GT label helper */
export const groupTravelSlugRedirects = {
  "delta-airlines-group-booking": "delta-airlines-group-booking",
  "el-al-group-booking": "el-al-airlines-group-booking",
  "klm-group-booking": "klm-airlines-group-booking",
  "southwest-airlines-group-travel-booking": "southwest-airlines-group-booking",
  "british-airways-group-travel-booking": "british-airways-airlines-group-booking",
  "finnair-group-travel-flight-booking": "finnair-airlines-group-booking",
  "alaska-airlines-group-travel": "alaska-airlines-group-booking",
  "jetblue-group-travel-flight-booking": "jetblue-airlines-group-booking",
  "qatar-airways-group-travel": "qatar-airways-airlines-group-booking",
  "avianca-airlines-group-travel": "avianca-airlines-group-booking",
  "emirates-group-travel-flight-booking": "emirates-airlines-group-booking",
  "air-france-group-booking": "air-france-airlines-group-booking",
  "american-airlines-group-booking": "american-airlines-group-booking",
  "lufthansa-group-booking": "lufthansa-airlines-group-booking",
  "swiss-air-group-booking": "swiss-air-airlines-group-booking",
  "spirit-airlines-group-booking": "spirit-airlines-group-booking",
  "aeromexico-group-booking-and-reservations": "aeromexico-airlines-group-booking",
  "frontier-airlines-group-booking": "frontier-airlines-group-booking",
  "copa-airlines-group-booking": "copa-airlines-group-booking"
}

export const businessClassSlugRedirects = {
  "american-airlines-business-class-travel-flight-booking": "american-airlines",
  "delta-airlines-business-class-travel": "delta-airlines",
  "alaska-airlines-business-class-travel": "alaska-airlines",
  "lufthansa-airlines-business-class-travel": "lufthansa-airlines",
  "klm-business-class-travel-experience": "klm",
  "el-al-business-class-travel": "el-al",
  "united-airlines-business-class-travel": "united-airlines",
  "british-airways-business-class-travel": "british-airways",
  "aeromexico-clase-premier-business-class": "aeromexico-clase-premier",
  "qatar-airways-business-class-travel": "qatar-airways",
  "emirates-airlines-business-class-travel": "emirates-airlines",
  "air-france-business-class-travel": "air-france",
  "turkish-airlines-business-class-travel": "turkish-airlines",
  "singapore-airlines-business-class-travel": "singapore-airlines",
  "swiss-airlines-business-class-travel": "swiss-airlines",
  "japan-airlines-business-class-travel": "japan-airlines",
  "hawaiian-airlines-business-class-flights-travel": "hawaiian-airlines",
  "copa-airlines-business-class-flights": "copa-airlines",
  "etihad-airways-business-class-flights": "etihad-airways",
  "eva-air-business-class-flights-and-tickets": "eva-air",
  "cathay-pacific-business-class-flights": "cathay-pacific",
  "finnair-business-class": "finnair",
  "air-canada-business-class-flights": "air-canada",
  "iberia-airlines-business-class-flights": "iberia-airlines",
  "aer-lingus-business-class-flights": "aer-lingus",
  "all-nippon-airways-business-class-flights": "all-nippon-airways",
  "fiji-airways-business-class-flights": "fiji-airways",
  "southwest-airlines-business-class-flights": "southwest-airlines",
  "avianca-airlines-business-class-flights": "avianca-airlines",
  "spirit-airlines-business-class-flights": "spirit-airlines",
  "thai-airways-business-class-flights": "thai-airways",
  "qantas-airways-business-class-flights": "qantas-airways",
  "tap-air-portugal-business-class-flights": "tap-air-portugal",
  "latam-airlines-business-class-flights": "latam-airlines",
  "tarom-airlines-business-class-flights": "tarom-airlines",
  "icelandair-business-class-flights": "icelandair",
  "bulgaria-air-business-class-flights": "bulgaria-air",
  "aerolineas-argentinas-business-class": "aerolineas-argentinas"
}

export function withAirlinesName(name) {
  if (/air\s*lines/i.test(name)) return name
  return `${name} Airlines`
}
