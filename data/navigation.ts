export interface NavItem {
  label: string;
  href: string;
}

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Mission", href: "/mission-vision" },
  { label: "Culture", href: "/culture-heritage" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Members", href: "/members" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
];

export const moreNav: NavItem[] = [
  { label: "Community Rules & Guidelines", href: "/community-guidelines" },
  { label: "Membership", href: "/membership" },
  { label: "Volunteer", href: "/charity-volunteering" },
  { label: "Donate", href: "/donate" },
  { label: "Youth Programmes", href: "/youth-programmes" },
  { label: "Business & Professional Network", href: "/business-network" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
];

export const socialLinks = {
  facebook: "https://www.facebook.com/bjaireland",
  instagram: "https://www.instagram.com/bjaireland",
  twitter: "https://x.com/bja_ireland",
  youtube: "https://youtube.com/",
  whatsapp: "https://forms.gle/STx5WrbQqvY3MtLw6",
};

export const contactInfo = {
  email: "bjaireland@gmail.com",
  phone: "+353 00 000 0000",
  location: "Ireland",
};
