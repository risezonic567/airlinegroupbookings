// [city, airport name, country, isIndia]
const raw = [
  ["Delhi", "Indira Gandhi International Airport", "India", true],
  ["Mumbai", "Chhatrapati Shivaji Maharaj International Airport", "India", true],
  ["Bengaluru", "Kempegowda International Airport", "India", true],
  ["Chennai", "Chennai International Airport", "India", true],
  ["Kolkata", "Netaji Subhas Chandra Bose International Airport", "India", true],
  ["Hyderabad", "Rajiv Gandhi International Airport", "India", true],
  ["Ahmedabad", "Sardar Vallabhbhai Patel International Airport", "India", true],
  ["Pune", "Pune Airport", "India", true],
  ["Goa", "Dabolim Airport", "India", true],
  ["Jaipur", "Jaipur International Airport", "India", true],
  ["Lucknow", "Chaudhary Charan Singh International Airport", "India", true],
  ["Kochi", "Cochin International Airport", "India", true],
  ["Thiruvananthapuram", "Thiruvananthapuram International Airport", "India", true],
  ["Guwahati", "Lokpriya Gopinath Bordoloi International Airport", "India", true],
  ["Chandigarh", "Chandigarh International Airport", "India", true],
  ["Patna", "Jay Prakash Narayan Airport", "India", true],
  ["Nagpur", "Dr. Babasaheb Ambedkar International Airport", "India", true],
  ["Indore", "Devi Ahilyabai Holkar Airport", "India", true],
  ["Dubai", "Dubai International Airport", "United Arab Emirates", false],
  ["Abu Dhabi", "Zayed International Airport", "United Arab Emirates", false],
  ["Doha", "Hamad International Airport", "Qatar", false],
  ["Singapore", "Singapore Changi Airport", "Singapore", false],
  ["Bangkok", "Suvarnabhumi Airport", "Thailand", false],
  ["London", "London Heathrow Airport", "United Kingdom", false],
  ["New York", "John F. Kennedy International Airport", "United States", false],
  ["Kuala Lumpur", "Kuala Lumpur International Airport", "Malaysia", false],
  ["Hong Kong", "Hong Kong International Airport", "Hong Kong", false],
  ["Colombo", "Bandaranaike International Airport", "Sri Lanka", false],
  ["Kathmandu", "Tribhuvan International Airport", "Nepal", false],
  ["Dhaka", "Hazrat Shahjalal International Airport", "Bangladesh", false],
];

export const airports = raw
  .map(([city, name, country, isIndia]) => ({ city, name, country, isIndia }))
  .sort((a, b) => a.name.localeCompare(b.name));

// "Popular Airports" row mein jo cities dikhani hain
export const popularCities = [
  "Delhi",
  "Mumbai",
  "Bengaluru",
  "Chennai",
  "Dubai",
  "Singapore",
  "London",
  "Hong Kong",
];