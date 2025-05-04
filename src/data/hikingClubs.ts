
export interface HikingClub {
  id: string;
  name: string;
  description: string;
  type: string;
  location: string;
  frequency: string;
  link: string;
  image: string;
}

export const hikingClubs: HikingClub[] = [
  {
    id: "bay-area-hikers",
    name: "Bay Area Hikers Meetup",
    description: "A welcoming group offering weekly hikes across the Bay Area, from casual walks to challenging climbs.",
    type: "Casual",
    location: "San Francisco, Penninsula",
    frequency: "Weekly",
    link: "https://www.meetup.com/mid-peninsula-hiking-activities-group",
    image: "https://source.unsplash.com/featured/?hiking,group"
  },
  {
    id: "sierra-club",
    name: "Sierra Club — SF Bay Chapter",
    description: "Organizes hikes, nature walks, and outdoor adventures focused on conservation and community activism.",
    type: "Eco-Conservation",
    location: "San Francisco, Marin, East Bay",
    frequency: "Weekly",
    link: "https://www.sierraclub.org/san-francisco-bay",
    image: "https://source.unsplash.com/featured/?forest,hiking"
  },
  {
    id: "latino-outdoors",
    name: "Latino Outdoors",
    description: "Cultural connections and outdoor adventures for Latino communities throughout the Bay Area.",
    type: "Family-Friendly",
    location: "Bay Area-wide",
    frequency: "Monthly",
    link: "https://latinooutdoors.org/",
    image: "https://source.unsplash.com/featured/?mountains,hiking"
  },
  {
    id: "trail-sisters",
    name: "Trail Sisters SF",
    description: "Women-focused hiking and trail running group with events for all experience levels.",
    type: "Women-Only",
    location: "San Francisco",
    frequency: "Bi-weekly",
    link: "https://trailsisters.net/",
    image: "https://source.unsplash.com/featured/?women,hiking"
  },
  {
    id: "east-bay-hikes",
    name: "East Bay Hike Explorers",
    description: "Weekend adventures across the hidden trails and nature reserves of the East Bay.",
    type: "Challenging",
    location: "Oakland, Berkeley, Richmond",
    frequency: "Weekly",
    link: "https://www.meetup.com/bay-area-hiking-club",
    image: "https://source.unsplash.com/featured/?trail,hiking"
  },
  {
    id: "sunset-hikers",
    name: "Sunset Hikers",
    description: "Evening and sunset hikes with breathtaking views across Bay Area peaks and coastal trails.",
    type: "Casual",
    location: "Marin, San Francisco",
    frequency: "Weekly",
    link: "https://www.meetup.com/sunset-hikers",
    image: "https://source.unsplash.com/featured/?sunset,hiking"
  },
  {
    id: "peninsula-trekkers",
    name: "Peninsula Trail Trekkers",
    description: "Family-friendly hikes exploring the diverse natural beauty of the Peninsula.",
    type: "Family-Friendly",
    location: "Redwood City, Palo Alto, Mountain View",
    frequency: "Bi-weekly",
    link: "https://www.meetup.com/peninsula-hiking",
    image: "https://source.unsplash.com/featured/?family,hiking"
  },
  {
    id: "morning-trails",
    name: "Morning Trail Runners",
    description: "Early morning trail running and hiking for fitness enthusiasts and nature lovers.",
    type: "Challenging",
    location: "Berkeley, Oakland",
    frequency: "Weekly",
    link: "https://www.strava.com/clubs/morning-trails",
    image: "https://source.unsplash.com/featured/?running,trail"
  }
];
