import { picsum } from "./images";

export type GalleryCategory =
  | "Cultural"
  | "Charity"
  | "Youth"
  | "Festival"
  | "Community"
  | "Networking";

export interface GalleryItem {
  id: string;
  type: "photo" | "video";
  image: string;
  caption: string;
  event: string;
  year: number;
  category: GalleryCategory;
  likes: number;
  comments: number;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    type: "photo",
    image: picsum("gallery-diwali-1", 900, 700),
    caption: "Lighting diyas together at the Diwali Celebration",
    event: "Diwali Celebration",
    year: 2025,
    category: "Festival",
    likes: 128,
    comments: 14,
  },
  {
    id: "g2",
    type: "video",
    image: picsum("gallery-diwali-2", 900, 700),
    caption: "Highlights reel from our Diwali dance performances",
    event: "Diwali Celebration",
    year: 2025,
    category: "Festival",
    likes: 96,
    comments: 9,
  },
  {
    id: "g3",
    type: "photo",
    image: picsum("gallery-holi-1", 900, 700),
    caption: "Splashes of colour at Holi Milan",
    event: "Holi Milan",
    year: 2026,
    category: "Festival",
    likes: 154,
    comments: 21,
  },
  {
    id: "g4",
    type: "photo",
    image: picsum("gallery-chhath-1", 900, 700),
    caption: "Community gathered for evening Arghya at Chhath Puja",
    event: "Chhath Puja Celebration",
    year: 2025,
    category: "Cultural",
    likes: 142,
    comments: 11,
  },
  {
    id: "g5",
    type: "photo",
    image: picsum("gallery-summer-camp-1", 900, 700),
    caption: "Kids showing off their Madhubani art at Summer Camp",
    event: "BJAI Summer Camp",
    year: 2025,
    category: "Youth",
    likes: 87,
    comments: 6,
  },
  {
    id: "g6",
    type: "video",
    image: picsum("gallery-summer-camp-2", 900, 700),
    caption: "A day in the life at BJAI Summer Camp",
    event: "BJAI Summer Camp",
    year: 2025,
    category: "Youth",
    likes: 73,
    comments: 5,
  },
  {
    id: "g7",
    type: "photo",
    image: picsum("gallery-charity-1", 900, 700),
    caption: "Volunteers at our Charity Fundraiser Gala",
    event: "Charity Fundraiser Gala",
    year: 2025,
    category: "Charity",
    likes: 110,
    comments: 8,
  },
  {
    id: "g8",
    type: "photo",
    image: picsum("gallery-health-1", 900, 700),
    caption: "Free health check-ups at the Health Support Campaign",
    event: "Health Support Campaign",
    year: 2026,
    category: "Charity",
    likes: 65,
    comments: 4,
  },
  {
    id: "g9",
    type: "photo",
    image: picsum("gallery-picnic-1", 900, 700),
    caption: "Families enjoying games at the Community Picnic",
    event: "Community Picnic",
    year: 2025,
    category: "Community",
    likes: 99,
    comments: 12,
  },
  {
    id: "g10",
    type: "photo",
    image: picsum("gallery-networking-1", 900, 700),
    caption: "Connecting at the Professional Networking Meet",
    event: "Professional Networking Meet",
    year: 2025,
    category: "Networking",
    likes: 58,
    comments: 3,
  },
  {
    id: "g11",
    type: "photo",
    image: picsum("gallery-bihar-diwas-1", 900, 700),
    caption: "Folk performances celebrating Bihar Diwas",
    event: "Bihar Diwas",
    year: 2026,
    category: "Cultural",
    likes: 121,
    comments: 10,
  },
  {
    id: "g12",
    type: "photo",
    image: picsum("gallery-jharkhand-1", 900, 700),
    caption: "Traditional dance celebrating Jharkhand Foundation Day",
    event: "Jharkhand Foundation Day",
    year: 2025,
    category: "Cultural",
    likes: 102,
    comments: 7,
  },
  {
    id: "g13",
    type: "photo",
    image: picsum("gallery-youth-mentoring-1", 900, 700),
    caption: "Mentors and students connecting at a Youth Mentoring Session",
    event: "Youth Mentoring Session",
    year: 2025,
    category: "Youth",
    likes: 54,
    comments: 2,
  },
  {
    id: "g14",
    type: "photo",
    image: picsum("gallery-community-1", 900, 700),
    caption: "Welcoming new members to the BJAI family",
    event: "Community Gathering",
    year: 2024,
    category: "Community",
    likes: 88,
    comments: 6,
  },
  {
    id: "g15",
    type: "photo",
    image: picsum("gallery-cultural-program-1", 900, 700),
    caption: "Children performing a traditional dance at a cultural evening",
    event: "Cultural Evening",
    year: 2024,
    category: "Cultural",
    likes: 134,
    comments: 15,
  },
  {
    id: "g16",
    type: "video",
    image: picsum("gallery-charity-2", 900, 700),
    caption: "Thank you message from our charity partners in Bihar",
    event: "Charity Fundraiser Gala",
    year: 2024,
    category: "Charity",
    likes: 77,
    comments: 5,
  },
];

export const galleryYears = Array.from(
  new Set(galleryItems.map((g) => g.year))
).sort((a, b) => b - a);

export const galleryCategories = Array.from(
  new Set(galleryItems.map((g) => g.category))
);
