import { picsum } from "./images";

export type EventCategory =
  | "Cultural"
  | "Charity"
  | "Youth"
  | "Festival"
  | "Community"
  | "Networking";

export interface BjaiEvent {
  slug: string;
  title: string;
  category: EventCategory;
  status: "upcoming" | "past";
  featured: boolean;
  image: string;
  gallery: string[];
  date: string;
  time: string;
  location: string;
  shortDescription: string;
  description: string[];
  organiser: string;
  contactEmail: string;
}

export const events: BjaiEvent[] = [
  {
    slug: "chhath-puja-celebration-2026",
    title: "Chhath Puja Celebration",
    category: "Festival",
    status: "upcoming",
    featured: true,
    image: picsum("bjai-chhath-puja", 1200, 800),
    gallery: [
      picsum("bjai-chhath-puja-1", 800, 600),
      picsum("bjai-chhath-puja-2", 800, 600),
      picsum("bjai-chhath-puja-3", 800, 600),
    ],
    date: "7 November 2026",
    time: "5:00 PM – 8:30 PM",
    location: "Riverside Park, Dublin",
    shortDescription:
      "Join the BJAI family for a beautiful evening of Chhath Puja rituals, prayers to the setting sun, and community celebration by the water.",
    description: [
      "Chhath Puja is one of the most spiritually significant festivals for the people of Bihar and Jharkhand, dedicated to the Sun God (Surya) and Chhathi Maiya. BJAI is proud to bring this cherished tradition to our community here in Ireland.",
      "The evening will include traditional Arghya rituals by the river, devotional songs, prasad distribution, and a community gathering where families can come together to celebrate this beautiful festival away from home.",
      "Families are welcome to bring their own offerings (Thekua, fruits, sugarcane) for the rituals. Traditional attire is encouraged. Volunteers will be on hand to guide first-time participants through the rituals.",
    ],
    organiser: "BJAI Cultural Committee",
    contactEmail: "culture@bjai.ie",
  },
  {
    slug: "holi-milan-2026",
    title: "Holi Milan",
    category: "Festival",
    status: "past",
    featured: false,
    image: picsum("bjai-holi-milan", 1200, 800),
    gallery: [
      picsum("bjai-holi-1", 800, 600),
      picsum("bjai-holi-2", 800, 600),
      picsum("bjai-holi-3", 800, 600),
    ],
    date: "8 March 2026",
    time: "1:00 PM – 5:00 PM",
    location: "Community Hall, Tallaght, Dublin",
    shortDescription:
      "A joyful afternoon of colours, music, dance, and traditional Holi sweets celebrating the arrival of spring with the whole BJAI family.",
    description: [
      "Holi Milan brought together families, students, and friends for an afternoon filled with colour, music, and laughter. The event celebrated the festival of colours in true Bihar and Jharkhand style.",
      "Highlights included traditional Holi songs, a colour-throwing session for all ages, folk dance performances by our youth group, and a spread of festive sweets including gujiya and thandai.",
      "Thank you to everyone who joined us and helped make this one of our most colourful community gatherings yet.",
    ],
    organiser: "BJAI Cultural Committee",
    contactEmail: "culture@bjai.ie",
  },
  {
    slug: "diwali-celebration-2025",
    title: "Diwali Celebration",
    category: "Festival",
    status: "past",
    featured: false,
    image: picsum("bjai-diwali", 1200, 800),
    gallery: [
      picsum("bjai-diwali-1", 800, 600),
      picsum("bjai-diwali-2", 800, 600),
      picsum("bjai-diwali-3", 800, 600),
    ],
    date: "1 November 2025",
    time: "6:00 PM – 10:00 PM",
    location: "Clayton Hotel, Dublin",
    shortDescription:
      "A grand evening of lights, music, dance performances, and festive dinner celebrating Diwali with the entire BJAI community.",
    description: [
      "Our annual Diwali Celebration lit up the evening with diyas, rangoli, cultural performances, and a festive dinner enjoyed by families from across the community.",
      "The programme featured dance performances by BJAI youth, devotional songs, a fashion showcase of traditional attire, and a Lakshmi Puja ceremony followed by a community feast.",
      "A heartfelt thank you to our volunteers, performers, and sponsors who made this our biggest Diwali celebration to date.",
    ],
    organiser: "BJAI Events Team",
    contactEmail: "events@bjai.ie",
  },
  {
    slug: "bihar-diwas-2027",
    title: "Bihar Diwas",
    category: "Cultural",
    status: "upcoming",
    featured: false,
    image: picsum("bjai-bihar-diwas", 1200, 800),
    gallery: [
      picsum("bjai-bihar-diwas-1", 800, 600),
      picsum("bjai-bihar-diwas-2", 800, 600),
      picsum("bjai-bihar-diwas-3", 800, 600),
    ],
    date: "22 March 2027",
    time: "4:00 PM – 8:00 PM",
    location: "Crowne Plaza, Dublin",
    shortDescription:
      "Celebrating the formation of Bihar with cultural programmes, Madhubani art displays, and stories of Bihar's proud heritage.",
    description: [
      "Bihar Diwas marks the formation of the state of Bihar and is a proud moment for our community to celebrate the rich history, culture, and achievements of Bihar.",
      "The evening will include a showcase of Madhubani art, performances of Bihari folk music and dance, talks on Bihar's historical legacy from Nalanda to Bodh Gaya, and traditional Bihari cuisine.",
      "This event is open to all members of the community as well as friends who wish to learn more about Bihar's incredible heritage.",
    ],
    organiser: "BJAI Cultural Committee",
    contactEmail: "culture@bjai.ie",
  },
  {
    slug: "jharkhand-foundation-day-2026",
    title: "Jharkhand Foundation Day",
    category: "Cultural",
    status: "upcoming",
    featured: false,
    image: picsum("bjai-jharkhand-day", 1200, 800),
    gallery: [
      picsum("bjai-jharkhand-1", 800, 600),
      picsum("bjai-jharkhand-2", 800, 600),
      picsum("bjai-jharkhand-3", 800, 600),
    ],
    date: "15 November 2026",
    time: "5:00 PM – 9:00 PM",
    location: "Community Hall, Tallaght, Dublin",
    shortDescription:
      "Honouring Jharkhand's tribal heritage, folk dances, and natural beauty with an evening of music, dance, and storytelling.",
    description: [
      "Jharkhand Foundation Day celebrates the formation of the state of Jharkhand and its rich tribal heritage, traditions, and connection with nature.",
      "The evening programme will feature traditional Jharkhandi folk dances, music performances, handicraft displays, and presentations on the culture and history of Jharkhand's indigenous communities.",
      "Join us to celebrate the strength, simplicity, and unity that define the cultural identity of Jharkhand.",
    ],
    organiser: "BJAI Cultural Committee",
    contactEmail: "culture@bjai.ie",
  },
  {
    slug: "bjai-summer-camp-2026",
    title: "BJAI Summer Camp",
    category: "Youth",
    status: "upcoming",
    featured: true,
    image: picsum("bjai-summer-camp", 1200, 800),
    gallery: [
      picsum("bjai-summer-camp-1", 800, 600),
      picsum("bjai-summer-camp-2", 800, 600),
      picsum("bjai-summer-camp-3", 800, 600),
    ],
    date: "20 – 24 July 2026",
    time: "9:00 AM – 4:00 PM (daily)",
    location: "BJAI Community Centre, Dublin",
    shortDescription:
      "A week-long summer camp for BJAI kids and teens featuring cultural learning, games, crafts, leadership activities, and new friendships.",
    description: [
      "The BJAI Summer Camp is a week-long programme designed to help our younger generation connect with their cultural roots while having fun, making friends, and building new skills.",
      "Activities include Hindi and cultural learning sessions, traditional arts and crafts (including Madhubani painting), team games, leadership workshops, talent shows, and a closing celebration with families.",
      "Open to BJAI kids aged 6-16. Places are limited, so early registration is recommended. Volunteers and mentors from our youth committee will be present throughout the camp.",
    ],
    organiser: "BJAI Youth Committee",
    contactEmail: "youth@bjai.ie",
  },
  {
    slug: "charity-fundraiser-2026",
    title: "Charity Fundraiser Gala",
    category: "Charity",
    status: "upcoming",
    featured: true,
    image: picsum("bjai-charity-gala", 1200, 800),
    gallery: [
      picsum("bjai-charity-1", 800, 600),
      picsum("bjai-charity-2", 800, 600),
      picsum("bjai-charity-3", 800, 600),
    ],
    date: "12 September 2026",
    time: "6:30 PM – 11:00 PM",
    location: "Clayton Hotel, Dublin",
    shortDescription:
      "An evening of dinner, entertainment, and giving — all proceeds support healthcare and education initiatives in Bihar and Jharkhand.",
    description: [
      "The BJAI Charity Fundraiser Gala brings our community together for an unforgettable evening in support of healthcare, education, and skill-development initiatives in Bihar and Jharkhand.",
      "The evening will include a three-course dinner, live cultural performances, a charity auction, and presentations from partner organisations on the ground in India.",
      "Tickets and sponsorship opportunities are available — every contribution helps us reach more disadvantaged families and children in Bihar and Jharkhand.",
    ],
    organiser: "BJAI Charity Committee",
    contactEmail: "charity@bjai.ie",
  },
  {
    slug: "youth-mentoring-session-2026",
    title: "Youth Mentoring Session",
    category: "Youth",
    status: "upcoming",
    featured: false,
    image: picsum("bjai-youth-mentoring", 1200, 800),
    gallery: [
      picsum("bjai-mentoring-1", 800, 600),
      picsum("bjai-mentoring-2", 800, 600),
      picsum("bjai-mentoring-3", 800, 600),
    ],
    date: "9 August 2026",
    time: "2:00 PM – 5:00 PM",
    location: "BJAI Community Centre, Dublin",
    shortDescription:
      "Students and young professionals connect with experienced mentors for guidance on education, careers, and settling into life in Ireland.",
    description: [
      "BJAI's Youth Mentoring Sessions pair students and young professionals with experienced community members for guidance on education choices, career planning, and adapting to life in Ireland.",
      "The session includes small-group mentoring circles, a panel discussion with professionals from various fields, and one-to-one mentor matching for ongoing support.",
      "Open to secondary school students, college students, and early-career professionals of Bihar and Jharkhand origin.",
    ],
    organiser: "BJAI Youth Committee",
    contactEmail: "youth@bjai.ie",
  },
  {
    slug: "community-picnic-2026",
    title: "Community Picnic",
    category: "Community",
    status: "upcoming",
    featured: false,
    image: picsum("bjai-community-picnic", 1200, 800),
    gallery: [
      picsum("bjai-picnic-1", 800, 600),
      picsum("bjai-picnic-2", 800, 600),
      picsum("bjai-picnic-3", 800, 600),
    ],
    date: "23 August 2026",
    time: "11:00 AM – 5:00 PM",
    location: "Phoenix Park, Dublin",
    shortDescription:
      "A relaxed family day out with games, food, music, and plenty of opportunities to connect with fellow community members.",
    description: [
      "The BJAI Community Picnic is a wonderful chance for families to relax, connect, and enjoy a fun day outdoors together at Phoenix Park.",
      "The day will include games for children and adults, a potluck-style spread of homemade dishes, music, and informal networking for new members to meet the wider community.",
      "Bring a chair, a blanket, and your favourite dish to share. Everyone is welcome — members and newcomers alike.",
    ],
    organiser: "BJAI Community Engagement Team",
    contactEmail: "community@bjai.ie",
  },
  {
    slug: "professional-networking-meet-2026",
    title: "Professional Networking Meet",
    category: "Networking",
    status: "upcoming",
    featured: false,
    image: picsum("bjai-networking-meet", 1200, 800),
    gallery: [
      picsum("bjai-networking-1", 800, 600),
      picsum("bjai-networking-2", 800, 600),
      picsum("bjai-networking-3", 800, 600),
    ],
    date: "11 July 2026",
    time: "6:00 PM – 8:30 PM",
    location: "Dublin City Centre Venue",
    shortDescription:
      "An evening for business owners and professionals from the Bihar and Jharkhand community to connect, collaborate, and grow together.",
    description: [
      "The BJAI Professional Networking Meet brings together business owners, entrepreneurs, and professionals of Bihar and Jharkhand origin living in Ireland.",
      "The evening includes short introductions from attendees, an open networking session, and a guest talk from an established business leader within the community.",
      "Whether you're exploring new opportunities, looking to grow your business, or simply want to connect with like-minded professionals, this event is for you.",
    ],
    organiser: "BJAI Business & Professional Network",
    contactEmail: "network@bjai.ie",
  },
  {
    slug: "health-support-campaign-2026",
    title: "Health Support Campaign",
    category: "Charity",
    status: "past",
    featured: false,
    image: picsum("bjai-health-campaign", 1200, 800),
    gallery: [
      picsum("bjai-health-1", 800, 600),
      picsum("bjai-health-2", 800, 600),
      picsum("bjai-health-3", 800, 600),
    ],
    date: "18 April 2026",
    time: "10:00 AM – 3:00 PM",
    location: "Community Hall, Tallaght, Dublin",
    shortDescription:
      "A community health awareness event raising funds and awareness for healthcare initiatives in Bihar and Jharkhand.",
    description: [
      "Our Health Support Campaign brought together community members for a day focused on health awareness, fundraising, and education.",
      "The event featured free basic health check-ups in partnership with local volunteers, informational sessions on health initiatives BJAI supports in Bihar and Jharkhand, and a fundraising drive that exceeded its target.",
      "Funds raised will go directly towards healthcare support programmes run by BJAI's charity partners in Bihar and Jharkhand. Thank you to everyone who contributed.",
    ],
    organiser: "BJAI Charity Committee",
    contactEmail: "charity@bjai.ie",
  },
];

export function getEventBySlug(slug: string): BjaiEvent | undefined {
  return events.find((event) => event.slug === slug);
}

export const upcomingEvents = events.filter((e) => e.status === "upcoming");
export const pastEvents = events.filter((e) => e.status === "past");
export const featuredEvents = events.filter((e) => e.featured);
