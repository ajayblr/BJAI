import { avatar } from "./images";

export interface Member {
  name: string;
  role: string;
  photo: string;
  bio: string;
}

export const members: Member[] = [
  {
    name: "Dr. Deepak Kumar",
    role: "President",
    photo: "/images/members/drdeepakkumar.avif",
    bio: "Deepak was born in Bihar and grew up in Munger and Deoghar. He moved to Ireland in 2004 and now lives in Naas, County Kildare, with his wife Mona Sood, a pharmacist, and their two children. He specialises in audio-vestibular care and is delighted to be part of the BJAI family, where he looks forward to celebrating regional festivals and cultural traditions with the community.",
  },
  {
    name: "Abhishek Thakur",
    role: "Treasurer",
    photo: "/images/members/abhishekthakur.avif",
    bio: "Abhishek is from Patna, Bihar, and moved to Ireland in 2008. He currently lives in Naas, County Kildare, with his wife and two children. He works as a Senior Software Engineer and holds a Master’s degree in Computing from South East Technological University, Waterford, formerly WIT, along with a B.Tech. degree from SASTRA University, Tamil Nadu. He speaks Maithali, Hindi, and English. His hobbies include meeting new people, travelling, and cooking. Abhishek is delighted to connect with the Bihar and Jharkhand community in Ireland and looks forward to participating in BJAI events while contributing to the growth of the community.",
  },
  {
    name: "Durgesh Tiwari",
    role: "Team Member",
    photo: "/images/members/durgeshtiwari.avif",
    bio: "Durgesh Tiwari is from Gopalganj, Bihar, and moved to Ireland in 2011. He currently lives in Dundalk with his family and works as a Senior Software Engineer at Prometic. In his free time, Durgesh enjoys playing chess, cricket, and badminton.",
  },
  { name: "To be Added", role: "Cultural Coordinator",  photo: "", bio: "" },
  { name: "To be Added", role: "Youth Coordinator",    photo: "", bio: "" },
  { name: "To be Added", role: "Charity Coordinator",  photo: "", bio: "" },
  { name: "To be Added", role: "Event Coordinator",    photo: "", bio: "" },
  { name: "To be Added", role: "Media Coordinator",    photo: "", bio: "" },
  { name: "To be Added", role: "Community Volunteer",  photo: "", bio: "" },
  { name: "To be Added", role: "Community Volunteer",  photo: "", bio: "" },
  { name: "To be Added", role: "Community Volunteer",  photo: "", bio: "" },
];
