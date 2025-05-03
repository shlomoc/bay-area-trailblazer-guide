export type TrailType = 'mountain' | 'coast' | 'urban' | 'park';
export type Difficulty = 'easy' | 'moderate' | 'hard';
export type AccessibilityFeature = 'pet-friendly' | 'kid-friendly' | 'wheelchair-accessible';
export type Transportation = 'walking' | 'driving' | 'shuttle';
export type ParkingAvailability = 'ample' | 'limited' | 'difficult' | 'reservation-required';
export type TrailCondition = 'excellent' | 'good' | 'fair' | 'poor' | 'closed';

export interface Trail {
  id: string;
  name: string;
  subtitle: string;
  type: TrailType;
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
  // New fields for enhanced trail details
  fullDescription?: string;
  parking: ParkingAvailability;
  trailCondition: TrailCondition;
  seasonalConsiderations?: string;
  trailheadLat?: number; // Latitude for Google Maps
  trailheadLng?: number; // Longitude for Google Maps
  trailheadAddress?: string; // Address for Google Maps
}

export const trails: Trail[] = [
  {
    id: "muir-woods",
    name: "Muir Woods Loop",
    subtitle: "Direct Access from Parking Lot",
    type: "mountain",
    difficulty: "easy",
    reservationRequired: true,
    distance: 3.5,
    time: 120,
    elevationGain: 400,
    maxElevation: 1500,
    description: "An easy scenic walk through the giant redwoods of Muir Woods. Perfect for families and first-time visitors. The main trail is paved and wheelchair accessible.",
    transportation: ["driving", "shuttle"],
    accessibility: ["kid-friendly"],
    imageUrl: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
    reservationUrl: "https://gomuirwoods.com/",
    fullDescription: "Muir Woods National Monument is home to a pristine forest of old-growth coast redwoods, some of the tallest trees on Earth. The Muir Woods Loop takes you through the heart of this majestic forest, alongside a gentle creek, and offers multiple bridge crossings to create shorter or longer loops. This trail has a boardwalk and paved sections making parts of it accessible to wheelchairs and strollers.",
    parking: "reservation-required",
    trailCondition: "excellent",
    seasonalConsiderations: "Busiest during summer weekends and holidays. Winter can bring muddy conditions after rain, but the redwood canopy offers good protection from light rain. Fall offers the most peaceful experience with fewer crowds.",
    trailheadLat: 37.8912,
    trailheadLng: -122.5713,
    trailheadAddress: "1 Muir Woods Rd, Mill Valley, CA 94941"
  },
  {
    id: "half-moon-bay",
    name: "Half Moon Bay Coastal Trail",
    subtitle: "Ocean Views and Beach Access",
    type: "coast",
    difficulty: "easy",
    reservationRequired: false,
    distance: 4.0,
    time: 90,
    elevationGain: 50,
    maxElevation: 100,
    description: "A flat, easy coastal walk with stunning Pacific Ocean views. Great for spotting marine wildlife and catching the sunset.",
    transportation: ["driving"],
    accessibility: ["pet-friendly", "kid-friendly", "wheelchair-accessible"],
    imageUrl: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
  },
  {
    id: "lands-end",
    name: "Lands End Trail",
    subtitle: "Golden Gate Bridge Views",
    type: "urban",
    difficulty: "moderate",
    reservationRequired: false,
    distance: 3.0,
    time: 100,
    elevationGain: 350,
    maxElevation: 400,
    description: "Historic ruins, wildflower-covered hills, and stunning views of the Golden Gate Bridge. One of San Francisco's most scenic urban hikes.",
    transportation: ["driving", "walking"],
    accessibility: ["pet-friendly"],
    imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
  },
  {
    id: "mission-peak",
    name: "Mission Peak Summit",
    subtitle: "Challenging Climb with Panoramic Views",
    type: "mountain",
    difficulty: "hard",
    reservationRequired: false,
    distance: 6.2,
    time: 180,
    elevationGain: 2100,
    maxElevation: 2500,
    description: "A challenging hike to the iconic peak with panoramic views of the entire Bay Area. Popular for sunrise and sunset hikes.",
    transportation: ["driving"],
    accessibility: [],
    imageUrl: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3",
  },
  {
    id: "golden-gate-park",
    name: "Golden Gate Park Gardens",
    subtitle: "Botanical Garden and Japanese Tea Garden",
    type: "park",
    difficulty: "easy",
    reservationRequired: false,
    distance: 2.5,
    time: 90,
    elevationGain: 50,
    maxElevation: 100,
    description: "A peaceful stroll through San Francisco's beautiful botanical gardens, including the historic Japanese Tea Garden and Conservatory of Flowers.",
    transportation: ["driving", "walking"],
    accessibility: ["kid-friendly", "wheelchair-accessible"],
    imageUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
  },
  {
    id: "angel-island",
    name: "Angel Island Perimeter Trail",
    subtitle: "360° Bay Views from Ferry-Access Island",
    type: "coast",
    difficulty: "moderate",
    reservationRequired: false,
    distance: 5.5,
    time: 180,
    elevationGain: 400,
    maxElevation: 780,
    description: "A scenic loop around Angel Island with incredible 360-degree views of San Francisco, Marin County, Oakland, and beyond. Accessible only by ferry.",
    transportation: ["shuttle"],
    accessibility: ["pet-friendly"],
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },
  {
    id: "mt-tamalpais",
    name: "Mt. Tamalpais East Peak",
    subtitle: "Marin County's Highest Peak",
    type: "mountain",
    difficulty: "hard",
    reservationRequired: false,
    distance: 4.5,
    time: 150,
    elevationGain: 1300,
    maxElevation: 2570,
    description: "Climb to the highest peak in Marin County for breathtaking views of the Bay Area, Pacific Ocean, and even the Sierra Nevada on clear days.",
    transportation: ["driving"],
    accessibility: [],
    imageUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
  },
  {
    id: "sutro-baths",
    name: "Sutro Baths Ruins",
    subtitle: "Historic Bath House Ruins by the Sea",
    type: "urban",
    difficulty: "easy",
    reservationRequired: false,
    distance: 1.0,
    time: 45,
    elevationGain: 100,
    maxElevation: 200,
    description: "Explore the ruins of the historic Sutro Baths, once the world's largest indoor swimming pool complex. Now a fascinating seaside archaeological site.",
    transportation: ["driving", "walking"],
    accessibility: ["kid-friendly"],
    imageUrl: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
  },
  {
    id: "tilden-park",
    name: "Tilden Regional Park Trails",
    subtitle: "Berkeley's Wilderness Retreat",
    type: "park",
    difficulty: "moderate",
    reservationRequired: false,
    distance: 4.0,
    time: 120,
    elevationGain: 600,
    maxElevation: 1500,
    description: "A network of beautiful trails through Berkeley's backyard wilderness. Includes botanical garden, lake for swimming, and a vintage carousel for kids.",
    transportation: ["driving"],
    accessibility: ["pet-friendly", "kid-friendly"],
    imageUrl: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
  },
];
