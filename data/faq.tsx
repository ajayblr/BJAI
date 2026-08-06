import type { ReactNode } from "react";

export interface FaqItem {
  question: string;
  answer: ReactNode;
}

export interface FaqCategory {
  category: string;
  items: FaqItem[];
}

interface GlobalNetworkAssociation {
  name: string;
  note?: string;
  website?: string;
  social?: string;
}

interface GlobalNetworkCountry {
  country: string;
  flag: string;
  associations: GlobalNetworkAssociation[];
}

function displayUrl(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

const globalNetworkCountries: GlobalNetworkCountry[] = [
  {
    country: "Australia",
    flag: "🇦🇺",
    associations: [
      {
        name: "Bihar Jharkhand Sabha of Australia and New Zealand",
        note: "Incorporated in NSW, Victoria and WA",
        website: "https://www.bjsm.org/",
      },
      {
        name: "Bihar Jharkhand Medical Association of Australia & New Zealand",
        website: "https://bjma.org.au/",
      },
    ],
  },
  {
    country: "Bahrain",
    flag: "🇧🇭",
    associations: [
      {
        name: "Bihar & Jharkhand Association of Bahrain – BAJAB",
        social: "https://www.facebook.com/Bajabahrain",
      },
    ],
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    associations: [
      {
        name: "Bihar and Jharkhand Association of Canada",
        website: "https://bajaca.org/",
      },
    ],
  },
  {
    country: "Finland",
    flag: "🇫🇮",
    associations: [
      {
        name: "Bihar Jharkhand Finland",
        social:
          "https://www.facebook.com/p/Bihar-Jharkhand-Parishad-Finland-100077217810118",
      },
    ],
  },
  {
    country: "Ireland",
    flag: "🇮🇪",
    associations: [
      {
        name: "Bihar Jharkhand Association of Ireland – BJAI",
        website: "https://www.bjaireland.com/",
      },
    ],
  },
  {
    country: "Japan",
    flag: "🇯🇵",
    associations: [
      {
        name: "Bihar & Jharkhand Association of Japan",
        website: "https://bijaj.com/",
      },
    ],
  },
  {
    country: "Kenya",
    flag: "🇰🇪",
    associations: [
      {
        name: "Bihar & Jharkhand Association of Kenya",
        social: "https://www.facebook.com/groups/326979264318135",
      },
    ],
  },
  {
    country: "New Zealand",
    flag: "🇳🇿",
    associations: [
      {
        name: "Bihar Jharkhand Sabha of Australia and New Zealand",
        note: "Incorporated in Auckland",
        website: "https://www.bjsm.org/",
      },
      {
        name: "Bihar Jharkhand Medical Association of Australia & New Zealand",
        website: "https://bjma.org.au/",
      },
    ],
  },
  {
    country: "Nigeria",
    flag: "🇳🇬",
    associations: [
      {
        name: "Bhojpuri Pariwar Global Foundation – Nigeria",
        social: "https://www.facebook.com/BhojpuriPariwarNigeria",
      },
    ],
  },
  {
    country: "Republic of Korea",
    flag: "🇰🇷",
    associations: [
      {
        name: "Friends of Bihar & Jharkhand in Republic of Korea",
        social: "https://www.facebook.com/BiharinKorea",
      },
      {
        name: "Bihar Jharkhand Association of Korea",
        social: "https://www.facebook.com/groups/3732053733555490",
      },
    ],
  },
  {
    country: "Russia",
    flag: "🇷🇺",
    associations: [
      {
        name: "Overseas Bihar Association – OBA",
        website: "http://obarussia.com/",
      },
    ],
  },
  {
    country: "Scotland",
    flag: "🇬🇧",
    associations: [
      {
        name: "Bihari Community of Scotland",
        social: "https://www.facebook.com/BihariInScotland",
      },
    ],
  },
  {
    country: "Singapore",
    flag: "🇸🇬",
    associations: [
      { name: "BiJhar Singapore", website: "https://www.bijhar.org/" },
    ],
  },
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    associations: [
      {
        name: "Bihar Jharkhand Medical Association UK",
        website: "https://bjma.org.uk/",
      },
      {
        name: "Bihari Connect UK",
        website: "https://www.bihariconnect.uk/",
      },
    ],
  },
  {
    country: "United States",
    flag: "🇺🇸",
    associations: [
      {
        name: "American Association of Bihar and Jharkhand – AABAJ",
        website: "https://www.aabaj.org/",
      },
      {
        name: "Bihar-Jharkhand Association of North America – BJANA",
        website: "https://bjana.org/",
      },
      {
        name: "Bihar Jharkhand Association of United States / Bihar Jharkhand Community Chicago",
        website: "https://bjus.org/",
      },
      {
        name: "Bihar Association of North America – BANA",
        website: "https://www.banahouston.org/",
      },
      {
        name: "Bihar Jharkhand Association of New England – BJANE",
        website: "https://www.bjane.us/",
      },
    ],
  },
  {
    country: "Vietnam",
    flag: "🇻🇳",
    associations: [{ name: "Akhand Bihar Jharkhand Saigon" }],
  },
];

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
    category: "Pandit Ji in Ireland",
    items: [
      {
        question: "Who can I contact for Pandit Ji services in Ireland?",
        answer: (
          <>
            <p>
              For community members looking to organise puja, religious
              ceremonies, or Hindu rituals in Ireland, the following Pandit
              Jis may be contacted directly for their availability and
              services.
            </p>

            <p className="mt-4 font-semibold text-foreground">
              Contact Details of Pandit Jis in Ireland
            </p>

            <div className="mt-3 space-y-4">
              <div>
                <p className="font-semibold text-foreground">Jayesh Joshi</p>
                <p>Originally from Dwarka, Gujarat, and currently living in Dublin</p>
                <p>
                  Phone:{" "}
                  <a href="tel:+353894883689">+353 89 488 3689</a>
                </p>
              </div>

              <div>
                <p className="font-semibold text-foreground">Parth Joshi</p>
                <p>Originally from Haridwar and currently living in Dublin</p>
                <p>
                  Phone:{" "}
                  <a href="tel:+353892406933">+353 89 240 6933</a>
                </p>
                <p>
                  Website:{" "}
                  <a
                    href="https://modernworldastrology.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    modernworldastrology.com
                  </a>
                </p>
              </div>

              <div>
                <p className="font-semibold text-foreground">Rawin Putteeraj</p>
                <p>Originally from Mauritius and currently living in Dublin</p>
                <p>
                  Phone:{" "}
                  <a href="tel:+353857502746">+353 85 750 2746</a>
                </p>
              </div>

              <div>
                <p className="font-semibold text-foreground">Sudaxina Rawal</p>
                <p>
                  Originally from Ujjain, Madhya Pradesh, and currently
                  living in Dublin
                </p>
                <p>
                  Phone:{" "}
                  <a href="tel:+353899761317">+353 89 976 1317</a>
                </p>
              </div>
            </div>

            <p className="mt-4 font-semibold text-foreground">
              Important Note
            </p>
            <p>
              The above contact details are shared for the convenience of
              the community. Permission has been obtained before publishing
              these contact numbers. Community members are requested to
              contact the Pandit Jis directly to check their availability,
              services, charges, and suitability for specific puja or
              religious requirements.
            </p>
          </>
        ),
      },
    ],
  },
  {
    category: "Global Network",
    items: [
      {
        question: "Is BJAI part of a wider global network?",
        answer: (
          <>
            <p>
              BJAI is proud to be part of a wider global network of Bihar
              and Jharkhand community organisations. These associations
              bring together people of Bihar and Jharkhand origin across
              the world to celebrate culture, preserve heritage, support
              community activities, promote social connection, and
              strengthen links with India.
            </p>
            <p>
              This page provides links to social pages and websites of
              Bihar and Jharkhand community organisations across different
              countries.
            </p>

            <p className="mt-4 font-semibold text-foreground">
              Social Pages and Websites of Global Bihar and Jharkhand
              Network
            </p>

            <div className="mt-3 space-y-2">
              {globalNetworkCountries.map((country) => (
                <div
                  key={country.country}
                  className="rounded-lg bg-cream/60 p-3"
                >
                  <div className="font-semibold text-foreground">
                    {country.flag} {country.country}
                  </div>
                  <div className="mt-1">
                    {country.associations.map((association, index) => (
                      <div key={index} className={index > 0 ? "mt-4" : undefined}>
                        <div className="font-semibold text-foreground">
                          {association.name}
                        </div>
                        {association.note && <div>{association.note}</div>}
                        {association.website && (
                          <div>
                            Website:{" "}
                            <a
                              href={association.website}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {displayUrl(association.website)}
                            </a>
                          </div>
                        )}
                        {association.social && (
                          <div>
                            Social Page:{" "}
                            <a
                              href={association.social}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {displayUrl(association.social)}
                            </a>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-4 font-semibold text-foreground">
              Add or Update an Association
            </p>
            <p>
              If you wish to register, update, or remove an association
              from this Global Bihar and Jharkhand Network page, please
              contact BJAI through the Contact Us page.
            </p>
            <p className="mt-2">Please include the following details:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Association name</li>
              <li>Country</li>
              <li>Website link</li>
              <li>
                Facebook, Instagram, LinkedIn, or other social media links
              </li>
              <li>Contact person or official email address</li>
              <li>Short description of the association</li>
            </ul>
            <p className="mt-4">
              BJAI will review the submitted details before publishing or
              updating the information on this page.
            </p>
          </>
        ),
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
