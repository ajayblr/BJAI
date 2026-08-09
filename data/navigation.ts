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
  { label: "Members", href: "/members" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
];

export const moreNav: NavItem[] = [
  { label: "Community Rules & Guidelines", href: "/community-guidelines" },
  { label: "Donate", href: "/donate" },
];

export const socialLinks = {
  facebook: "https://www.facebook.com/bjaireland",
  instagram: "https://www.instagram.com/bjaireland",
  twitter: "https://x.com/bja_ireland",
  youtube: "https://www.youtube.com/@bjaireland",
};

export const contactInfo = {
  email: "bjaireland@gmail.com",
  location: "Ireland",
};
