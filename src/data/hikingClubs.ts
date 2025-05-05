
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
    name: "Hiking & Activities Club (Bay Area)",
    description: "A welcoming group offering weekly hikes across the Bay Area, from casual walks to challenging climbs.",
    type: "Casual",
    location: "Penninsula",
    frequency: "Bi-weekly",
    link: "https://www.meetup.com/mid-peninsula-hiking-activities-group",
    image: "https://secure.meetupstatic.com/photos/event/a/8/e/4/clean_511663236.webp"
  },
  {
    id: "sierra-club",
    name: "Sierra Club — SF Bay Chapter",
    description: "Organizes hikes, nature walks, and outdoor adventures focused on conservation and community activism.",
    type: "Eco-Conservation",
    location: "San Francisco, Marin, East Bay",
    frequency: "Weekly",
    link: "https://www.sierraclub.org/san-francisco-bay",
    image: "https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?q=80&w=400&h=300&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "hiking-wellness",
    name: "Bay Area Hiking, Walking, Wellness Club",
    description: "Where Healthy Living Meets Lifelong Friendships and Love!",
    type: "Casual",
    location: "Bay Area-wide",
    frequency: "Weekly",
    link: "https://www.meetup.com/bay-area-hiking-walking-wellness-club",
    image: "https://secure.meetupstatic.com/photos/event/4/a/d/6/clean_526699158.webp"
  },
  {
    id: "teds-hikes",
    name: "Teds Hikes SF/Marin",
    description: "Environmental Friendly hiking group, using public transportation and carpooling to hiking trails throughout Marin and San Francisco counties.",
    type: "Casual",
    location: "San Francisco, Marin",
    frequency: "Bi-weekly",
    link: "https://www.meetup.com/san-francisco-hiking-meetup-7-12-miles-slow-paced",
    image: "https://secure.meetupstatic.com/photos/event/e/3/f/8/clean_527338360.webp"
  }
];
