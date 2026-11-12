/** Old slug -> new slug maps for permanent redirects + GT label helper */
export const groupTravelSlugRedirects = {
  "delta-airlines-group-booking": "delta-airlines",
  "el-al-group-booking": "el-al-airlines",
  "el-al-airlines-group-booking": "el-al-airlines",
  "klm-group-booking": "klm-airlines",
  "klm-airlines-group-booking": "klm-airlines",
  "southwest-airlines-group-travel-booking": "southwest-airlines",
  "southwest-airlines-group-booking": "southwest-airlines",
  "british-airways-group-travel-booking": "british-airways-airlines",
  "british-airways-airlines-group-booking": "british-airways-airlines",
  "finnair-group-travel-flight-booking": "finnair-airlines",
  "finnair-airlines-group-booking": "finnair-airlines",
  "alaska-airlines-group-travel": "alaska-airlines",
  "alaska-airlines-group-booking": "alaska-airlines",
  "jetblue-group-travel-flight-booking": "jetblue-airlines",
  "jetblue-airlines-group-booking": "jetblue-airlines",
  "qatar-airways-group-travel": "qatar-airways-airlines",
  "qatar-airways-airlines-group-booking": "qatar-airways-airlines",
  "avianca-airlines-group-travel": "avianca-airlines",
  "avianca-airlines-group-booking": "avianca-airlines",
  "emirates-group-travel-flight-booking": "emirates-airlines",
  "emirates-airlines-group-booking": "emirates-airlines",
  "air-france-group-booking": "air-france-airlines",
  "air-france-airlines-group-booking": "air-france-airlines",
  "american-airlines-group-booking": "american-airlines",
  "lufthansa-group-booking": "lufthansa-airlines",
  "lufthansa-airlines-group-booking": "lufthansa-airlines",
  "swiss-air-group-booking": "swiss-air-airlines",
  "swiss-air-airlines-group-booking": "swiss-air-airlines",
  "aeromexico-group-booking-and-reservations": "aeromexico-airlines",
  "aeromexico-airlines-group-booking": "aeromexico-airlines",
  "frontier-airlines-group-booking": "frontier-airlines",
  "copa-airlines-group-booking": "copa-airlines"
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

/** Home /airlines/* demo slugs → real Group Travel slugs (null = GT listing only) */
export const airlinesSlugToGroupTravel = {
  'american-airlines': 'american-airlines',
  'delta-air-lines': 'delta-airlines',
  'united-airlines': null,
  lufthansa: 'lufthansa-airlines',
  'alaska-airlines': 'alaska-airlines',
  jetblue: 'jetblue-airlines',
  'southwest-airlines': 'southwest-airlines',
  'qatar-airways': 'qatar-airways-airlines',
}

export function groupTravelPathForAirlinesSlug(slug) {
  const mapped = airlinesSlugToGroupTravel[slug]
  return mapped ? `/group-travel/${mapped}` : '/group-travel'
}
