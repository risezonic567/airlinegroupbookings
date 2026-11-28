// [city, airport name, country, isIndia]
const raw = [
  // United States
  ["New York", "John F. Kennedy International Airport", "United States", false],
  ["Newark", "Newark Liberty International Airport", "United States", false],
  ["Los Angeles", "Los Angeles International Airport", "United States", false],
  ["Chicago", "O'Hare International Airport", "United States", false],
  ["Atlanta", "Hartsfield-Jackson Atlanta International Airport", "United States", false],
  ["Dallas", "Dallas/Fort Worth International Airport", "United States", false],
  ["Miami", "Miami International Airport", "United States", false],
  ["San Francisco", "San Francisco International Airport", "United States", false],
  ["Washington, D.C.", "Washington Dulles International Airport", "United States", false],
  ["Boston", "Boston Logan International Airport", "United States", false],
  ["Seattle", "Seattle-Tacoma International Airport", "United States", false],
  ["Las Vegas", "Harry Reid International Airport", "United States", false],
  ["Orlando", "Orlando International Airport", "United States", false],
  ["Houston", "George Bush Intercontinental Airport", "United States", false],
  ["Denver", "Denver International Airport", "United States", false],
  ["Phoenix", "Phoenix Sky Harbor International Airport", "United States", false],
  ["Philadelphia", "Philadelphia International Airport", "United States", false],
  ["Charlotte", "Charlotte Douglas International Airport", "United States", false],
  ["Minneapolis", "Minneapolis-Saint Paul International Airport", "United States", false],
  ["Detroit", "Detroit Metropolitan Wayne County Airport", "United States", false],
  ["San Diego", "San Diego International Airport", "United States", false],
  ["Honolulu", "Daniel K. Inouye International Airport", "United States", false],
  ["Fort Lauderdale", "Fort Lauderdale-Hollywood International Airport", "United States", false],
  ["Tampa", "Tampa International Airport", "United States", false],
  ["Austin", "Austin-Bergstrom International Airport", "United States", false],
  ["Nashville", "Nashville International Airport", "United States", false],
  ["New Orleans", "Louis Armstrong New Orleans International Airport", "United States", false],
  ["Salt Lake City", "Salt Lake City International Airport", "United States", false],
  ["Portland", "Portland International Airport", "United States", false],
  ["Baltimore", "Baltimore/Washington International Airport", "United States", false],
  ["Anchorage", "Ted Stevens Anchorage International Airport", "United States", false],

  // Canada, Mexico & Latin America
  ["Toronto", "Toronto Pearson International Airport", "Canada", false],
  ["Vancouver", "Vancouver International Airport", "Canada", false],
  ["Montreal", "Montréal-Trudeau International Airport", "Canada", false],
  ["Mexico City", "Benito Juárez International Airport", "Mexico", false],
  ["Cancún", "Cancún International Airport", "Mexico", false],
  ["São Paulo", "São Paulo/Guarulhos International Airport", "Brazil", false],

  // Europe
  ["London", "London Heathrow Airport", "United Kingdom", false],
  ["Paris", "Paris Charles de Gaulle Airport", "France", false],
  ["Frankfurt", "Frankfurt Airport", "Germany", false],
  ["Amsterdam", "Amsterdam Airport Schiphol", "Netherlands", false],
  ["Madrid", "Adolfo Suárez Madrid-Barajas Airport", "Spain", false],
  ["Rome", "Leonardo da Vinci-Fiumicino Airport", "Italy", false],
  ["Dublin", "Dublin Airport", "Ireland", false],
  ["Zurich", "Zurich Airport", "Switzerland", false],
  ["Istanbul", "Istanbul Airport", "Türkiye", false],

  // Middle East
  ["Dubai", "Dubai International Airport", "United Arab Emirates", false],
  ["Abu Dhabi", "Zayed International Airport", "United Arab Emirates", false],
  ["Doha", "Hamad International Airport", "Qatar", false],

  // Asia-Pacific
  ["Singapore", "Singapore Changi Airport", "Singapore", false],
  ["Tokyo", "Tokyo Haneda Airport", "Japan", false],
  ["Seoul", "Incheon International Airport", "South Korea", false],
  ["Hong Kong", "Hong Kong International Airport", "Hong Kong", false],
  ["Bangkok", "Suvarnabhumi Airport", "Thailand", false],
  ["Sydney", "Sydney Kingsford Smith Airport", "Australia", false],

  // Africa
  ["Johannesburg", "O.R. Tambo International Airport", "South Africa", false],
];

export const airports = raw
  .map(([city, name, country, isIndia]) => ({ city, name, country, isIndia }))
  .sort((a, b) => a.name.localeCompare(b.name));

// "Popular Airports" row mein jo cities dikhani hain
export const popularCities = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Miami",
  "San Francisco",
  "Toronto",
  "London",
  "Dubai",
];