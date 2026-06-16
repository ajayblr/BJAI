export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  category: string;
  items: FaqItem[];
}

export const faqCategories: FaqCategory[] = [
  {
    category: "About BJAI",
    items: [
      {
        question: "What is BJAI?",
        answer:
          "BJAI (Bihar Jharkhand Association of Ireland) is a community organisation that brings together people of Bihar and Jharkhand origin living across Ireland. We focus on cultural celebration, charity, youth engagement, professional networking, and community support.",
      },
      {
        question: "Where is BJAI based?",
        answer:
          "BJAI is based in Ireland and welcomes members from across the country. Our events are typically held in Dublin and surrounding areas, with plans to grow our presence nationwide.",
      },
      {
        question: "Is BJAI affiliated with any political or religious organisation?",
        answer:
          "No. BJAI is a non-political, non-religious community and cultural organisation open to everyone with a connection to Bihar and Jharkhand, regardless of background or belief.",
      },
    ],
  },
  {
    category: "Membership",
    items: [
      {
        question: "Who can become a BJAI member?",
        answer:
          "Anyone of Bihar or Jharkhand origin living in Ireland — along with their families and friends — can become a BJAI member. We welcome families, students, professionals, business owners, and senior community members.",
      },
      {
        question: "How can I join BJAI?",
        answer:
          "You can join BJAI by filling out the membership form on our Membership page, or by contacting us directly through the Contact Us page. A member of our team will get in touch with the next steps.",
      },
      {
        question: "Is there a membership fee?",
        answer:
          "Membership fee details are being finalised and will be published on our Membership page. Please contact us for the latest information.",
      },
    ],
  },
  {
    category: "Events",
    items: [
      {
        question: "How can I participate in events?",
        answer:
          "All BJAI events are listed on our Events page. You can view event details, dates, and locations, and use the registration or contact option on each event page to confirm your attendance.",
      },
      {
        question: "Are BJAI events open to non-members?",
        answer:
          "Most BJAI events are open to the wider community, including friends and family who may not be Bihar or Jharkhand origin. Some events may be members-only — this will be noted on the event page.",
      },
      {
        question: "How do I find out about upcoming events?",
        answer:
          "Upcoming events are listed on our Events page, and announcements are also shared via our social media channels and member communications.",
      },
    ],
  },
  {
    category: "Volunteering",
    items: [
      {
        question: "How can I volunteer?",
        answer:
          "You can express interest in volunteering through our Charity and Volunteering page or the Contact Us page. We have opportunities for events support, youth mentoring, charity drives, and more.",
      },
      {
        question: "Do I need experience to volunteer?",
        answer:
          "No experience is necessary — just enthusiasm and willingness to help. BJAI volunteers support a wide range of activities suited to different skills and availability.",
      },
      {
        question: "Can students and young people volunteer?",
        answer:
          "Yes! BJAI actively encourages students and young people to volunteer as part of our youth development and community engagement programmes.",
      },
    ],
  },
  {
    category: "Donations",
    items: [
      {
        question: "How can I support charitable activities?",
        answer:
          "You can support BJAI's charitable work through donations via our Donate page, or by participating in and contributing to our charity fundraisers and campaigns.",
      },
      {
        question: "Where do donations go?",
        answer:
          "Donations support healthcare, education, and skill-development initiatives in Bihar and Jharkhand, as well as community support programmes here in Ireland.",
      },
      {
        question: "Can I donate items instead of money?",
        answer:
          "Yes, in-kind donations are sometimes accepted for specific campaigns. Please contact us to discuss in-kind contributions before your campaign of choice.",
      },
    ],
  },
  {
    category: "Youth Activities",
    items: [
      {
        question: "How can students and youth get involved?",
        answer:
          "Students and youth can get involved through our Youth Programmes — including summer camps, mentoring sessions, cultural learning, and volunteering opportunities. Visit our Youth Programmes page to learn more.",
      },
      {
        question: "What age groups do youth programmes cater for?",
        answer:
          "Our youth programmes cater for children, teenagers, and young adults, with activities tailored to different age groups, from cultural camps for younger children to mentoring and networking for young professionals.",
      },
    ],
  },
  {
    category: "Cultural Programmes",
    items: [
      {
        question: "What cultural events does BJAI organise?",
        answer:
          "BJAI organises a range of cultural events including Chhath Puja, Holi Milan, Diwali Celebration, Bihar Diwas, and Jharkhand Foundation Day, alongside community picnics and cultural showcases throughout the year.",
      },
      {
        question: "Can I perform or showcase my talent at BJAI events?",
        answer:
          "Yes! We welcome community members of all ages to perform, showcase art, or share talents at our cultural events. Please contact our Cultural Coordinator via the Contact Us page.",
      },
    ],
  },
  {
    category: "Contact and Support",
    items: [
      {
        question: "How can I contact the BJAI team?",
        answer:
          "You can reach us through the Contact Us page using our contact form, or via our social media channels listed in the footer of this website.",
      },
      {
        question: "How quickly will I get a response?",
        answer:
          "We aim to respond to all enquiries as quickly as possible, usually within a few days. For urgent matters relating to an upcoming event, please mention this in your message.",
      },
    ],
  },
];
