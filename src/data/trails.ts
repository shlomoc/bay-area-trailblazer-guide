export type TrailType = 'mountain' | 'coast' | 'urban' | 'park';
export type Difficulty = 'easy' | 'moderate' | 'hard';
export type AccessibilityFeature = 'pet-friendly' | 'kid-friendly' | 'wheelchair-accessible';
export type Transportation = 'walking' | 'driving' | 'shuttle' | 'public-transport';
export type ParkingAvailability = 'ample' | 'limited' | 'difficult' | 'reservation-required';
export type TrailCondition = 'excellent' | 'good' | 'fair' | 'poor' | 'closed';
export type TrailStatus = 'open' | 'closed' | 'partially-closed';

export interface Trail {
  id: string;
  name: string;
  subtitle: string;
  type: TrailType;
  hikeType: 'day';
  difficulty: Difficulty;
  reservationRequired: boolean;
  distance: number; // in miles
  time: number; // in minutes
  elevationGain: number; // in feet
  maxElevation: number; // in feet
  description: string;
  transportation: Transportation[];
  accessibility: AccessibilityFeature[];
  imageUrl: string;
  reservationUrl?: string;
  // Enhanced trail details
  fullDescription?: string;
  parking: ParkingAvailability;
  trailCondition: TrailCondition;
  seasonalConsiderations?: string;
  trailheadLat?: number; // Latitude for Google Maps
  trailheadLng?: number; // Longitude for Google Maps
  trailheadAddress?: string; // Address for Google Maps
  // New fields
  status: TrailStatus;
  bestVisitingTime?: string;
  publicTransportInfo?: string;
  localTips?: string[];
  // Sunset/Sunrise attributes
  sunset_spot?: boolean;
  sunrise_spot?: boolean;
}

export const trails: Trail[] = [
  {
    id: "muir-woods",
    name: "Muir Woods Loop",
    subtitle: "Direct Access from Parking Lot",
    type: "park",
    hikeType: "day",
    difficulty: "easy",
    reservationRequired: true,
    distance: 3.5,
    time: 120,
    elevationGain: 400,
    maxElevation: 1500,
    description: "An easy scenic walk through the giant redwoods of Muir Woods. Perfect for families and first-time visitors. The main trail is paved and wheelchair accessible.",
    transportation: ["driving", "shuttle", "public-transport"],
    accessibility: ["kid-friendly"],
    imageUrl: "images/caleb-jones-J3JMyXWQHXU-unsplash.jpg",
    reservationUrl: "https://gomuirwoods.com/",
    fullDescription: "Muir Woods National Monument is home to a pristine forest of old-growth coast redwoods, some of the tallest trees on Earth. The Muir Woods Loop takes you through the heart of this majestic forest, alongside a gentle creek, and offers multiple bridge crossings to create shorter or longer loops. This trail has a boardwalk and paved sections making parts of it accessible to wheelchairs and strollers.",
    parking: "reservation-required",
    trailCondition: "excellent",
    seasonalConsiderations: "Busiest during summer weekends and holidays. Winter can bring muddy conditions after rain, but the redwood canopy offers good protection from light rain. Fall offers the most peaceful experience with fewer crowds.",
    trailheadLat: 37.8912,
    trailheadLng: -122.5713,
    trailheadAddress: "1 Muir Woods Rd, Mill Valley, CA 94941",
    status: "open",
    bestVisitingTime: "Fall (September-November) for fewer crowds and mild weather; early morning (before 9am) on weekdays to avoid tour buses.",
    publicTransportInfo: "Muir Woods Shuttle (Route 66) runs from Sausalito Ferry Terminal on weekends and holidays. $3 per person (cash only).",
    localTips: [
      "The back trails beyond the main boardwalk are less crowded and equally beautiful.",
      "Pack layers, as the temperature under the redwood canopy can be 10-15°F cooler than surrounding areas.",
      "Visit the gift shop for the special Muir Woods cancellation stamp for National Park enthusiasts."
    ]
  },
  {
    id: "half-moon-bay",
    name: "Half Moon Bay Coastal Trail",
    subtitle: "Ocean Views and Beach Access",
    type: "coast",
    hikeType: "day",
    difficulty: "easy",
    reservationRequired: false,
    distance: 4.0,
    time: 90,
    elevationGain: 50,
    maxElevation: 100,
    description: "A flat, easy coastal walk with stunning Pacific Ocean views. Great for spotting marine wildlife and catching the sunset.",
    transportation: ["driving", "public-transport"],
    accessibility: ["pet-friendly", "kid-friendly", "wheelchair-accessible"],
    imageUrl: "https://images.unsplash.com/photo-1620839954165-1713d1c7cdfc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    parking: "ample",
    trailCondition: "good",
    status: "open",
    bestVisitingTime: "Spring (April-May) for wildflowers or Fall (September-October) for warm, fog-free days. Sunset is spectacular year-round.",
    publicTransportInfo: "SamTrans Route 17 runs along Highway 1 with stops near trail access points. Weekend service is limited.",
    localTips: [
      "The Ritz Carlton section has free public access to bathrooms and water fountains.",
      "Pillar Point Harbor (north end) has the best tidepools at low tide.",
      "Best whale watching is January-March; bring binoculars!"
    ],
    sunset_spot: true
  },
  {
    id: "lands-end",
    name: "Lands End Trail",
    subtitle: "Golden Gate Bridge Views",
    type: "urban",
    hikeType: "day",
    difficulty: "moderate",
    reservationRequired: false,
    distance: 3.0,
    time: 100,
    elevationGain: 350,
    maxElevation: 400,
    description: "Historic ruins, wildflower-covered hills, and stunning views of the Golden Gate Bridge. One of San Francisco's most scenic urban hikes.",
    transportation: ["driving", "walking", "public-transport"],
    accessibility: ["pet-friendly"],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/88/Coastal_Trail_and_Golden_Gate_Bridge%2C_April_2019.JPG",
    parking: "limited",
    trailCondition: "good",
    status: "open",
    bestVisitingTime: "Clear days after winter rainstorms for best bridge views; summer mornings before fog rolls in (before 11am).",
    publicTransportInfo: "MUNI 38 Geary bus to Point Lobos Ave/48th Ave. Also accessible via the 5, 5R, and 31 lines.",
    localTips: [
      "The hidden Sutro Baths labyrinth is just north of the main parking lot.",
      "Mile Rock Beach has the best secluded views and is often overlooked by tourists.",
      "Go during King Tides in winter to see spectacular wave action along the cliffs."
    ],
    sunset_spot: true
  },
  {
    id: "mission-peak",
    name: "Mission Peak Summit",
    subtitle: "Challenging Climb with Panoramic Views",
    type: "mountain",
    hikeType: "day",
    difficulty: "hard",
    reservationRequired: false,
    distance: 6.2,
    time: 180,
    elevationGain: 2100,
    maxElevation: 2500,
    description: "A challenging hike to the iconic peak with panoramic views of the entire Bay Area. Popular for sunrise and sunset hikes.",
    transportation: ["driving", "public-transport"],
    accessibility: [],
    imageUrl: "images/mission-peak.jpg",
    parking: "difficult",
    trailCondition: "good",
    status: "open",
    bestVisitingTime: "Spring (March-May) for green hillsides and wildflowers; sunrise hikes for cooler temperatures and best photography.",
    publicTransportInfo: "AC Transit Route 251 stops at Ohlone College, where an alternative (and less crowded) trailhead is located.",
    localTips: [
      "The Hidden Valley Trail from Ohlone College is longer but far less crowded than the Stanford Avenue route.",
      "Bring trekking poles for the steep descent which can be hard on knees.",
      "Start no later than 3 hours before sunset to avoid hiking down in the dark."
    ],
    sunset_spot: true,
    sunrise_spot: true
  },
  {
    id: "golden-gate-park",
    name: "Golden Gate Park Gardens",
    subtitle: "Botanical Garden and Japanese Tea Garden",
    type: "park",
    hikeType: "day",
    difficulty: "easy",
    reservationRequired: false,
    distance: 2.5,
    time: 90,
    elevationGain: 50,
    maxElevation: 100,
    description: "A peaceful stroll through San Francisco's beautiful botanical gardens, including the historic Japanese Tea Garden and Conservatory of Flowers.",
    transportation: ["driving", "walking", "public-transport"],
    accessibility: ["kid-friendly", "wheelchair-accessible"],
    imageUrl: "images/mason-c-36k-_65ZCU8-unsplash.jpg",
    parking: "limited",
    trailCondition: "excellent",
    status: "open",
    bestVisitingTime: "Spring (April-May) for cherry blossoms and tulips; weekday mornings to avoid crowds.",
    publicTransportInfo: "MUNI N-Judah line stops at 9th & Irving, close to several park entrances. Multiple bus lines (5, 7, 29, 44) serve the park perimeter.",
    localTips: [
      "SF residents get free admission to the Botanical Garden (bring ID).",
      "The Shakespeare Garden is a hidden gem for quiet reflection.",
      "Free park shuttle runs on weekends, connecting major attractions within the park."
    ]
  },
  {
    id: "angel-island",
    name: "Angel Island Perimeter Trail",
    subtitle: "360° Bay Views from Ferry-Access Island",
    type: "coast",
    hikeType: "day",
    difficulty: "moderate",
    reservationRequired: false,
    distance: 5.5,
    time: 180,
    elevationGain: 400,
    maxElevation: 780,
    description: "A scenic loop around Angel Island with incredible 360-degree views of San Francisco, Marin County, Oakland, and beyond. Accessible only by ferry.",
    transportation: ["shuttle", "public-transport"],
    accessibility: ["pet-friendly"],
    imageUrl: "images/nathan-barteau--Lzspf-YnKE-unsplash.jpg",
    parking: "limited",
    trailCondition: "good",
    status: "open",
    bestVisitingTime: "Fall (September-October) for clear skies and best visibility of surrounding Bay Area; weekdays to avoid crowds.",
    publicTransportInfo: "Take the Blue & Gold Fleet ferry from San Francisco or the Angel Island Tiburon Ferry. Public transportation to both ferry terminals available.",
    localTips: [
      "Rent bikes at the island dock to cover more ground (call ahead for reservations).",
      "The Sunset Trail has better views but more climbing than the Perimeter Trail.",
      "Pack a picnic to enjoy at East Garrison, where tables have the best views."
    ],
    sunset_spot: true
  },
  {
    id: "mt-tamalpais",
    name: "Mt. Tamalpais East Peak",
    subtitle: "Marin County's Highest Peak",
    type: "mountain",
    hikeType: "day",
    difficulty: "hard",
    reservationRequired: false,
    distance: 4.5,
    time: 150,
    elevationGain: 1300,
    maxElevation: 2570,
    description: "Climb to the highest peak in Marin County for breathtaking views of the Bay Area, Pacific Ocean, and even the Sierra Nevada on clear days.",
    transportation: ["driving"],
    accessibility: [],
    imageUrl: "https://thebubblybay.com/wp-content/uploads/2013/04/mt_tamalpais.jpg",
    parking: "limited",
    trailCondition: "good",
    status: "partially-closed",
    bestVisitingTime: "Winter (Dec-Feb) after rain clears the air for best long-distance views; spring (April-May) for wildflowers.",
    publicTransportInfo: "",
    localTips: [
      "The fire lookout tower at the summit is staffed by volunteers who offer fascinating information about the mountain's history.",
      "West Point Inn (accessible only by foot) offers pancake breakfasts one Sunday per month.",
      "Fog often covers the mountain in summer; check webcams before going."
    ],
    sunrise_spot: true,
    sunset_spot: true
  },
  {
    id: "sutro-baths",
    name: "Sutro Baths Ruins",
    subtitle: "Historic Bath House Ruins by the Sea",
    type: "urban",
    hikeType: "day",
    difficulty: "easy",
    reservationRequired: false,
    distance: 1.0,
    time: 45,
    elevationGain: 100,
    maxElevation: 200,
    description: "Explore the ruins of the historic Sutro Baths, once the world's largest indoor swimming pool complex. Now a fascinating seaside archaeological site.",
    transportation: ["driving", "walking", "public-transport"],
    accessibility: ["kid-friendly"],
    imageUrl: "https://www.nps.gov/common/uploads/cropped_image/primary/FD5D4F5E-032F-59D2-5AC828EDAD88DF53.jpg?width=1600&quality=90&mode=crop",
    parking: "limited",
    trailCondition: "good",
    status: "open",
    bestVisitingTime: "Winter for dramatic storm waves; sunset for incredible photography opportunities.",
    publicTransportInfo: "MUNI 38 Geary bus to the end of the line (Ocean Beach). Also accessible via the 5 and 31 lines.",
    localTips: [
      "Look for the hidden tunnel on the south end of the ruins that leads to a secret beach.",
      "The nearby Cliff House restaurant has been replaced with a lookout area offering excellent views.",
      "At low tide, you can see remnants of ships that wrecked along this stretch of coast."
    ],
    sunset_spot: true
  },
  {
    id: "tilden-park",
    name: "Tilden Regional Park Trails",
    subtitle: "Berkeley's Wilderness Retreat",
    type: "park",
    hikeType: "day",
    difficulty: "moderate",
    reservationRequired: false,
    distance: 4.0,
    time: 120,
    elevationGain: 600,
    maxElevation: 1500,
    description: "A network of beautiful trails through Berkeley's backyard wilderness. Includes botanical garden, lake for swimming, and a vintage carousel for kids.",
    transportation: ["driving", "public-transport"],
    accessibility: ["pet-friendly", "kid-friendly"],
    imageUrl: "https://www.marinmommies.com/sites/default/files/styles/full-width_column_827/public/stories/tilden-trains.jpg",
    parking: "ample",
    trailCondition: "good",
    status: "open",
    bestVisitingTime: "Late spring (May) for wildflowers in bloom or early fall (September) for warm, clear days without summer crowds.",
    publicTransportInfo: "AC Transit Line 67 runs from downtown Berkeley BART to the Regional Parks Botanic Garden in Tilden.",
    localTips: [
      "The Little Farm animal sanctuary welcomes visitors with celery or lettuce to feed the animals.",
      "South Park Drive closes November through March to protect migrating newts.",
      "The Brazil Room area has free outdoor BBQ pits, but reserve them early in summer months."
    ]
  },
]; 