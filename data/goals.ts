export interface Goal {
  title: string;
  description: string;
  icon: string;
}

/**
 * Key Goals for the Next Two Years.
 * `icon` refers to a lucide-react icon name (see components/shared/GoalsGrid.tsx).
 */
export const goals: Goal[] = [
  {
    title: "Volunteering Across Bihar, Jharkhand and Ireland",
    description:
      "Continue providing a platform where BJAI kids and adults can volunteer in Bihar, Jharkhand, and Ireland.",
    icon: "HeartHandshake",
  },
  {
    title: "Social Platform for the New Generation",
    description:
      "Develop BJAI as a platform for social interaction among the newer generation.",
    icon: "Users",
  },
  {
    title: "Business & Professional Networking",
    description:
      "Create a networking platform for business owners and professionals.",
    icon: "Briefcase",
  },
  {
    title: "Global Bihar & Jharkhand Connections",
    description:
      "Engage with global Bihar and Jharkhand communities around the world.",
    icon: "Globe2",
  },
  {
    title: "Grow Charitable & Cultural Participation",
    description:
      "Increase membership and attendance in charitable and cultural events.",
    icon: "TrendingUp",
  },
  {
    title: "Global BJAI Events",
    description: "Organise global BJAI events that bring our community together.",
    icon: "CalendarHeart",
  },
  {
    title: "Mentorship for Students",
    description:
      "Provide mentorship to students in Bihar, Jharkhand, and Ireland.",
    icon: "GraduationCap",
  },
  {
    title: "Healthcare Support",
    description: "Continue healthcare support in Bihar and Jharkhand.",
    icon: "HeartPulse",
  },
  {
    title: "Community Support in Ireland",
    description: "Help and support the community in Ireland.",
    icon: "ShieldCheck",
  },
  {
    title: "Skill-Based Help in India",
    description: "Provide skill-based help in India.",
    icon: "Wrench",
  },
  {
    title: "Engaging BJAI Kids",
    description:
      "Engage the next generation of BJAI kids in cultural activities and charities.",
    icon: "Sparkles",
  },
  {
    title: "Member Directory",
    description: "Maintain an updated directory of BJAI members.",
    icon: "BookUser",
  },
  {
    title: "Grand Get-Together",
    description:
      "Develop a plan for a grand get-together of Bihar and Jharkhand associations in Ireland.",
    icon: "PartyPopper",
  },
  {
    title: "Next-Generation Mentoring Programmes",
    description: "Start mentoring programmes for the next generation.",
    icon: "Lightbulb",
  },
];
