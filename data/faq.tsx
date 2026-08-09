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

            <div className="mt-3">
              <div>
                <div className="font-semibold text-foreground">Jayesh Joshi</div>
                <div>Originally from Dwarka, Gujarat, and currently living in Dublin</div>
                <div>
                  Phone:{" "}
                  <a href="tel:+353894883689">+353 89 488 3689</a>
                </div>
              </div>

              <div className="mt-4">
                <div className="font-semibold text-foreground">Parth Joshi</div>
                <div>Originally from Haridwar and currently living in Dublin</div>
                <div>
                  Phone:{" "}
                  <a href="tel:+353892406933">+353 89 240 6933</a>
                </div>
                <div>
                  Website:{" "}
                  <a
                    href="https://modernworldastrology.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    modernworldastrology.com
                  </a>
                </div>
              </div>

              <div className="mt-4">
                <div className="font-semibold text-foreground">Rawin Putteeraj</div>
                <div>Originally from Mauritius and currently living in Dublin</div>
                <div>
                  Phone:{" "}
                  <a href="tel:+353857502746">+353 85 750 2746</a>
                </div>
              </div>

              <div className="mt-4">
                <div className="font-semibold text-foreground">Sudaxina Rawal</div>
                <div>
                  Originally from Ujjain, Madhya Pradesh, and currently
                  living in Dublin
                </div>
                <div>
                  Phone:{" "}
                  <a href="tel:+353899761317">+353 89 976 1317</a>
                </div>
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
    category: "Irish Naturalisation",
    items: [
      {
        question:
          "What documents are needed for Irish Naturalisation based on 5-year residency?",
        answer: (
          <>
            <p className="font-semibold text-foreground">
              Documents for Irish Naturalisation Based on 5-Year Residency
            </p>

            <p className="mt-4 font-semibold text-foreground">
              Important Notes
            </p>
            <p>
              This information is provided for general community guidance
              only and does not constitute legal advice. Immigration and
              citizenship requirements may change from time to time.
              Applicants should always check the latest official guidance
              from Immigration Service Delivery (ISD) before applying.
            </p>
            <p className="mt-2">
              Official website:{" "}
              <a
                href="https://www.irishimmigration.ie/"
                target="_blank"
                rel="noopener noreferrer"
              >
                irishimmigration.ie
              </a>
            </p>
            <p className="mt-2">
              If required, applicants should consult a qualified solicitor
              or immigration adviser before submitting their application.
            </p>
            <p className="mt-2">
              Applicants are encouraged to maintain proper records from the
              beginning of their stay in Ireland, especially documents that
              clearly show their name, Irish address, and dates of
              residence. Where possible:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Keep formal lease agreements and RTB registration letters.</li>
              <li>
                Ensure both spouses or partners are included on utility
                bills, where applicable.
              </li>
              <li>Maintain individual or joint bank accounts.</li>
              <li>
                Keep annual Revenue, employment, tenancy, mortgage, utility,
                and banking records.
              </li>
              <li>
                Ensure documents clearly show the applicant&apos;s full
                name, Irish address, and relevant dates.
              </li>
            </ul>

            <p className="mt-4 font-semibold text-foreground">
              Documents Required
            </p>
            <p>
              For naturalisation based on 5-year residency, applicants
              generally need documents to prove:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Identity</li>
              <li>Residency in Ireland</li>
              <li>Immigration permission, where applicable</li>
              <li>Birth details</li>
              <li>Reckonable residence</li>
            </ul>
            <p className="mt-2">
              Applicants are generally required to meet the required points
              under the citizenship scorecard system for both identity and
              residency.
            </p>

            <p className="mt-4 font-semibold text-foreground">
              1. Identity Proof
            </p>
            <p>
              Applicants must prove their identity using acceptable
              documents under the citizenship identity scorecard. A
              certified colour copy of the biometric page of a valid,
              in-date passport from the applicant&apos;s country of origin
              is currently worth 150 points, which may satisfy the identity
              requirement.
            </p>
            <p className="mt-3 font-semibold text-foreground">
              Common Identity Documents
            </p>
            <p>Common identity documents may include:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Certified colour copy of valid passport biometric page</li>
              <li>Irish Residence Permit card, where applicable</li>
              <li>Driving licence, where applicable</li>
              <li>
                Other identity documents listed in the official Citizenship
                Guidance Document
              </li>
            </ul>
            <p className="mt-2">
              If an applicant does not have a valid passport, the
              application may become more complex, but it may still be
              possible to reach the required identity points using other
              acceptable documents. Applicants should refer to the latest
              Citizenship Guidance Document on the Irish Immigration
              website. Please note that Immigration Service Delivery may
              still request the original passport at any stage of the
              application process.
            </p>

            <p className="mt-4 font-semibold text-foreground">
              2. Residency Proof
            </p>
            <p>
              Applicants must provide proof of residency for each year of
              residence being claimed. For each year of residency claimed,
              applicants generally need documents adding up to 150 points.
              Residency proof is normally made up of:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Type A documents, generally worth 100 points</li>
              <li>Type B documents, generally worth 50 points</li>
            </ul>
            <p className="mt-2">
              Applicants should generally provide one acceptable Type A
              document and one acceptable Type B document for each year of
              residency claimed, unless the official guidance allows
              otherwise. Each residency document should clearly show:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Applicant&apos;s name</li>
              <li>Irish home address</li>
              <li>Relevant date or period</li>
              <li>Issuing organisation or authority</li>
            </ul>

            <p className="mt-4 font-semibold text-foreground">
              Type A Residency Documents
            </p>
            <p>
              Type A documents are generally worth 100 points. Applicants
              may use different combinations of Type A documents across the
              five years, depending on what documents are available and
              accepted under the latest guidance. Examples of Type A
              documents may include:
            </p>

            <p className="mt-3 font-semibold text-foreground">
              1. Employment Detail Summary / P60, Where Applicable
            </p>
            <p>
              Applicants may provide an Employment Detail Summary from
              Revenue for the relevant years. In older cases, a P60 may
              also be relevant, where applicable. If an applicant is
              applying in the middle of a year and does not yet have the
              current year&apos;s full Employment Detail Summary, they may
              need to use another acceptable Type A document for that year.
            </p>

            <p className="mt-3 font-semibold text-foreground">
              2. Bank Statements
            </p>
            <p>Bank statements may be used where they meet the official requirements. Where using bank statements:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Provide three consecutive months of bank statements for the relevant year.</li>
              <li>Ensure the statements show the applicant&apos;s name and Irish address.</li>
              <li>Ensure the statements show activity in Ireland.</li>
              <li>
                It is advisable to include regular point-of-sale or
                day-to-day transactions in Ireland.
              </li>
            </ul>

            <p className="mt-3 font-semibold text-foreground">
              3. Department of Social Protection Contribution Statement
            </p>
            <p>
              A Department of Social Protection contribution statement may
              be used where applicable. This can usually be requested
              through the relevant official government service.
            </p>

            <p className="mt-3 font-semibold text-foreground">
              4. Medical Practitioner Employment History Summary, Where
              Applicable
            </p>
            <p>
              A Medical Practitioner Employment History Summary may be
              accepted in certain cases, particularly for doctors employed
              in the HSE or voluntary hospitals, where applicable.
              Applicants should confirm the latest accepted document types
              on the official Irish Immigration website before relying on
              this document.
            </p>

            <p className="mt-4 font-semibold text-foreground">
              Type B Residency Documents
            </p>
            <p>
              Type B documents are generally worth 50 points. Examples of
              Type B documents may include:
            </p>

            <p className="mt-3 font-semibold text-foreground">
              1. Rent Agreement
            </p>
            <p>
              A rent agreement should ideally be supported by an RTB
              registration letter. If using rent documents for multiple
              years, it is useful to keep bank statements showing regular
              rent payments.
            </p>

            <p className="mt-3 font-semibold text-foreground">
              2. Mortgage Statement
            </p>
            <p>Mortgage statements may be used where applicable.</p>

            <p className="mt-3 font-semibold text-foreground">
              3. Utility Bills
            </p>
            <p>Utility bills may include:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Electricity</li>
              <li>Gas</li>
              <li>Internet</li>
              <li>Landline</li>
              <li>Waste or bin collection</li>
              <li>TV licence or similar household services, where accepted</li>
            </ul>

            <p className="mt-3 font-semibold text-foreground">
              4. Credit Card Statement
            </p>
            <p>
              Credit card statements may be used if they meet the official
              requirements and show the applicant&apos;s name, Irish
              address, and relevant dates.
            </p>

            <p className="mt-4 font-semibold text-foreground">
              Common Document Combination
            </p>
            <p>In many cases, applicants may use:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Employment Detail Summary / P60, where applicable, as Type
                A proof
              </li>
              <li>
                Utility bill, rent agreement, mortgage statement, or
                similar household document as Type B proof
              </li>
            </ul>
            <p className="mt-2">
              However, any acceptable combination of documents may be used,
              provided the required points are met for each year and the
              documents satisfy the latest official requirements.
            </p>

            <p className="mt-4 font-semibold text-foreground">
              If a Document Is Missing
            </p>
            <p>
              If an applicant is unable to provide a required or expected
              document for a particular year, they should clearly explain
              the reason in a covering letter. Affidavits or declarations
              should only be used where appropriate and generally in
              exceptional circumstances where the applicant cannot
              reasonably provide sufficient documentary proof.
            </p>
            <p className="mt-2">
              For residency proof, the official Residency Affidavit should
              only be used where an applicant cannot reach the required 150
              points for one or more years of residence. Applicants should
              always refer to the latest official forms and guidance before
              preparing or submitting an affidavit, as incorrect use of
              affidavits, declarations, or supporting documents may delay
              the application or result in refusal.
            </p>

            <p className="mt-4 font-semibold text-foreground">
              Additional Documents Commonly Required
            </p>
            <p>
              In addition to identity and residency proof, applicants may
              also need the following documents, depending on their
              nationality, immigration category, and personal
              circumstances.
            </p>

            <p className="mt-3 font-semibold text-foreground">
              1. Naturalisation Residency Calculator
            </p>
            <p>
              Non-EU, non-EEA and non-Swiss nationals should use the
              official Naturalisation Residency Calculator to check whether
              they meet the reckonable residence requirement. Official
              website:{" "}
              <a
                href="https://www.irishimmigration.ie/"
                target="_blank"
                rel="noopener noreferrer"
              >
                irishimmigration.ie
              </a>
              . UK, EU, EEA and Swiss nationals should not use the
              Naturalisation Residency Calculator. Instead, they must
              submit documents proving the length of their residence in
              Ireland, as per the official guidance.
            </p>

            <p className="mt-3 font-semibold text-foreground">
              2. Irish Residence Permit Card
            </p>
            <p>
              Applicants from outside the EU, EEA, Switzerland and the UK
              may need to provide a certified copy of their Irish
              Residence Permit card, where applicable.
            </p>

            <p className="mt-3 font-semibold text-foreground">
              3. Passport
            </p>
            <p>
              Applicants should provide a certified colour copy of the
              biometric page of their valid, in-date passport. Immigration
              Service Delivery may request the original passport at any
              stage of the application.
            </p>

            <p className="mt-3 font-semibold text-foreground">
              4. Birth Certificate
            </p>
            <p>
              Applicants should provide a certified copy of their birth
              certificate in English. If the birth certificate is not in
              English, an official translation may be required. Indian
              applicants may also check with the Embassy of India for
              relevant birth certificate or consular documentation options,
              where applicable.
            </p>

            <p className="mt-4 font-semibold text-foreground">
              Certified / Attested Copies
            </p>
            <p>
              Where certified copies are required, applicants should print
              or copy the original document and have it certified by an
              authorised person, such as:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Commissioner for Oaths</li>
              <li>Peace Commissioner</li>
              <li>Notary Public</li>
              <li>Practising Solicitor</li>
            </ul>
            <p className="mt-2">
              Applicants should always check the latest Irish Immigration
              guidance to confirm who can certify documents and what
              certification wording, stamp, or format is required.
            </p>

            <p className="mt-4 font-semibold text-foreground">
              After Submission
            </p>
            <p>
              After submitting the application, applicants should regularly
              check their application status through the official Irish
              Immigration portal. Applicants should also:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Keep copies of all documents submitted.</li>
              <li>
                Monitor their email for communication from Immigration
                Service Delivery.
              </li>
              <li>
                Respond promptly if further information or original
                documents are requested.
              </li>
              <li>
                Keep their immigration permission valid while the
                application is being processed, where applicable.
              </li>
            </ul>

            <p className="mt-4 font-semibold text-foreground">
              Disclaimer
            </p>
            <p>
              This document is only a general community guidance note. It
              is not an exhaustive checklist and does not guarantee
              application approval. Immigration Service Delivery may
              request additional information or documents depending on the
              applicant&apos;s individual circumstances. Applicants should
              always refer to the latest official guidance available at:{" "}
              <a
                href="https://www.irishimmigration.ie/"
                target="_blank"
                rel="noopener noreferrer"
              >
                irishimmigration.ie
              </a>
              .
            </p>
          </>
        ),
      },
      {
        question:
          "What documents are needed for Irish Naturalisation based on marriage or civil partnership with an Irish citizen?",
        answer: (
          <>
            <p className="font-semibold text-foreground">
              Documents for Irish Naturalisation Based on Marriage or Civil
              Partnership with an Irish Citizen
            </p>

            <p className="mt-4 font-semibold text-foreground">
              Important Notes
            </p>
            <p>
              This information is provided for general community guidance
              only and does not constitute legal advice. Immigration and
              citizenship requirements may change from time to time.
              Applicants should always check the latest official guidance
              from Immigration Service Delivery (ISD) before applying.
            </p>
            <p className="mt-2">
              If required, applicants should consult a qualified solicitor
              or immigration adviser before submitting their application.
            </p>
            <p className="mt-2">
              This guidance applies to applicants applying for Irish
              citizenship by naturalisation on the basis of being married
              to, or in a civil partnership with, an Irish citizen. If the
              spouse or civil partner is an EU, EEA or Swiss citizen but
              not an Irish citizen, applicants should check the correct
              application category on the Irish Immigration website before
              applying.
            </p>

            <p className="mt-4 font-semibold text-foreground">
              Eligibility Overview
            </p>
            <p>
              To apply for Irish citizenship through marriage or civil
              partnership with an Irish citizen, an applicant must
              generally meet the following conditions:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Be 18 years of age or over.</li>
              <li>Be able to prove their identity.</li>
              <li>
                Be married to, or in a civil partnership with, an Irish
                citizen for at least 3 years.
              </li>
              <li>The marriage or civil partnership must be genuine and enduring.</li>
              <li>
                Be living with the Irish spouse or civil partner at the
                time of application and at the time citizenship is
                granted.
              </li>
              <li>
                Have lived legally on the island of Ireland for 3 out of
                the previous 5 years before applying.
              </li>
              <li>
                Have 1 full year of continuous residence immediately before
                the application.
              </li>
              <li>Meet the relevant residence requirements.</li>
              <li>Provide proof of residence for each year being claimed.</li>
              <li>
                Intend to reside on the island of Ireland after becoming an
                Irish citizen.
              </li>
              <li>
                Be willing to attend a citizenship ceremony and make the
                declaration of fidelity.
              </li>
              <li>Be of good character.</li>
            </ul>

            <p className="mt-4 font-semibold text-foreground">
              Residence Requirement
            </p>
            <p>
              Applicants applying on the basis of marriage or civil
              partnership with an Irish citizen must generally show that
              they have lived legally on the island of Ireland for 3 years
              out of the last 5 years before applying. This must include:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>The 12 months immediately before the application.</li>
              <li>Two other years within the previous 4 years.</li>
            </ul>
            <p className="mt-2">
              For non-EU, non-EEA and non-Swiss nationals, the
              Naturalisation Residency Calculator may be used to check
              reckonable residence. For this category, the residency
              calculator target is generally 1095 or 1096 days over 5
              years. UK, EU, EEA and Swiss nationals should not use the
              residency calculator. Instead, they must submit documents
              proving the length of their residence in Ireland.
            </p>

            <p className="mt-4 font-semibold text-foreground">
              Documents Required
            </p>
            <p>
              The exact documents required may depend on the
              applicant&apos;s nationality, immigration history, personal
              circumstances, and the current Irish Immigration guidance.
              Applicants should generally prepare the following documents.
            </p>

            <p className="mt-3 font-semibold text-foreground">
              1. Online Application Form
            </p>
            <p>
              Applicants should complete the online naturalisation
              application form through the official Irish Immigration
              online portal. The application form should be completed
              carefully, and all required documents should be uploaded in
              the correct format.
            </p>

            <p className="mt-3 font-semibold text-foreground">
              2. Applicant&apos;s Birth Certificate
            </p>
            <p>
              Provide a certified copy of the applicant&apos;s birth
              certificate. If the birth certificate is not in English, an
              official translation may be required. Indian applicants may
              also check with the Embassy of India for relevant birth
              certificate or consular documentation options, where
              applicable.
            </p>

            <p className="mt-3 font-semibold text-foreground">
              3. Marriage or Civil Partnership Certificate
            </p>
            <p>
              Provide a certified copy of the marriage certificate or civil
              partnership certificate. The marriage or civil partnership
              must be legally recognised under Irish law. If the marriage
              or civil partnership took place outside Ireland, applicants
              should ensure that the certificate is legally valid and
              acceptable for Irish naturalisation purposes.
            </p>

            <p className="mt-3 font-semibold text-foreground">
              4. Proof That the Spouse or Civil Partner Is an Irish Citizen
            </p>
            <p>
              Applicants must provide certified proof that their spouse or
              civil partner is an Irish citizen. This may include one of
              the following, depending on how the spouse or civil partner
              obtained Irish citizenship:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Certified copy of the Irish passport biometric/photo page.</li>
              <li>Irish birth certificate, where applicable.</li>
              <li>Irish naturalisation certificate, where applicable.</li>
              <li>Foreign Births Register certificate, where applicable.</li>
              <li>Other official proof of Irish citizenship, where applicable.</li>
            </ul>

            <p className="mt-3 font-semibold text-foreground">
              5. Applicant&apos;s Passport
            </p>
            <p>
              Provide a certified colour copy of the biometric page of the
              applicant&apos;s valid, in-date passport. A certified colour
              copy of the biometric page of a valid passport may satisfy
              the identity scorecard requirement where it reaches the
              required identity points. Immigration Service Delivery may
              request the original passport at any stage during the
              application process.
            </p>

            <p className="mt-3 font-semibold text-foreground">
              6. Irish Residence Permit Card
            </p>
            <p>
              Non-EU, non-EEA and non-Swiss applicants should provide a
              certified copy of their Irish Residence Permit card, where
              applicable. Applicants should ensure their immigration
              permission remains valid while the application is being
              processed, where applicable.
            </p>

            <p className="mt-3 font-semibold text-foreground">
              7. Naturalisation Residency Calculator
            </p>
            <p>
              Non-EU, non-EEA and non-Swiss nationals should use the
              official Naturalisation Residency Calculator to check whether
              they meet the reckonable residence requirement. For
              applicants applying as the spouse or civil partner of an
              Irish citizen, the calculator target is generally 1095 or
              1096 days over 5 years. The application date entered in the
              calculator should be before the current immigration
              permission expires. UK, EU, EEA and Swiss nationals should
              not use the calculator and should instead provide documentary
              proof of residence.
            </p>

            <p className="mt-3 font-semibold text-foreground">
              8. Spousal or Civil Partner Statutory Declaration
            </p>
            <p>
              The Irish spouse or civil partner must complete the relevant
              statutory declaration confirming the relationship. This
              declaration confirms that:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>The marriage or civil partnership is genuine.</li>
              <li>The couple are still together.</li>
              <li>The couple live in the same home.</li>
            </ul>
            <p className="mt-2">
              The declaration must be signed in front of an authorised
              witness, such as:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Practising solicitor</li>
              <li>Commissioner for Oaths</li>
              <li>Peace Commissioner</li>
              <li>Notary Public</li>
            </ul>
            <p className="mt-2">
              Applicants should use the latest statutory declaration form
              available from Irish Immigration.
            </p>

            <p className="mt-3 font-semibold text-foreground">
              9. Proof That the Couple Live Together
            </p>
            <p>
              Applicants must provide proof that they and their Irish
              spouse or civil partner live together. The latest Irish
              Immigration guidance requires three different documents for
              both the applicant and the Irish spouse or civil partner
              showing that they lived at the same address for the 3 months
              immediately before the application. Examples may include:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Utility bills, such as gas, electricity, phone, internet or TV</li>
              <li>Bank statements</li>
              <li>Rent agreement</li>
              <li>Mortgage statement</li>
              <li>Letter from employer</li>
              <li>Revenue correspondence</li>
              <li>Social Welfare correspondence</li>
              <li>Other official documents showing name, address and date</li>
            </ul>
            <p className="mt-2">Documents should clearly show:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Name of the applicant or spouse/civil partner</li>
              <li>Same residential address</li>
              <li>Date of issue</li>
              <li>Issuing organisation</li>
            </ul>
            <p className="mt-2">
              Where possible, applicants should include documents in joint
              names as well as individual documents for each spouse or
              civil partner.
            </p>

            <p className="mt-3 font-semibold text-foreground">
              10. Proof of Residence for the Applicant
            </p>
            <p>
              Applicants must provide proof of residence for each year
              being claimed. For this category, the applicant must
              generally prove residence for 3 years out of the last 5
              years, including the full year immediately before applying.
              Residency proof should meet the Irish Immigration citizenship
              scorecard requirements. Applicants generally need documents
              adding up to 150 points for each year of residence claimed.
              Residency proof usually includes:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Type A documents, generally worth 100 points</li>
              <li>Type B documents, generally worth 50 points</li>
            </ul>
            <p className="mt-2">
              Applicants should normally provide at least one strong
              official document and supporting documents for each year
              claimed, as per the latest Irish Immigration guidance.
              Examples may include:
            </p>
            <p className="mt-2 font-semibold text-foreground">
              Type A / Strong Official Documents
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Employment Detail Summary from Revenue</li>
              <li>Bank statements meeting the required criteria</li>
              <li>Department of Social Protection contribution statement</li>
              <li>Other strong official documents listed in the latest guidance</li>
            </ul>
            <p className="mt-2 font-semibold text-foreground">
              Type B / Supporting Documents
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Utility bills</li>
              <li>Rent agreement with RTB registration letter, where applicable</li>
              <li>Mortgage statement</li>
              <li>Credit card statement</li>
              <li>
                Official correspondence from government departments or
                recognised institutions
              </li>
              <li>Other supporting documents listed in the latest guidance</li>
            </ul>
            <p className="mt-2">Each document should clearly show:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Applicant&apos;s name</li>
              <li>Irish address</li>
              <li>Relevant date or period</li>
              <li>Issuing organisation</li>
            </ul>

            <p className="mt-3 font-semibold text-foreground">
              11. Proof of Residence for the Irish Spouse or Civil Partner
            </p>
            <p>
              In addition to the applicant&apos;s own proof of residence,
              applicants must also provide proof of residence for the
              Irish spouse or civil partner. This is required to support
              the application based on marriage or civil partnership with
              an Irish citizen. Documents should show that the Irish
              spouse or civil partner was resident at the relevant address
              and should clearly show:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Spouse or civil partner&apos;s name</li>
              <li>Irish address</li>
              <li>Relevant date or period</li>
              <li>Issuing organisation</li>
            </ul>
            <p className="mt-2">Examples may include:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Utility bills</li>
              <li>Bank statements</li>
              <li>Rent or mortgage documents</li>
              <li>Employment letters</li>
              <li>Revenue documents</li>
              <li>Social Welfare correspondence</li>
              <li>Other official residence documents</li>
            </ul>

            <p className="mt-3 font-semibold text-foreground">
              12. Relationship Evidence, Where Required
            </p>
            <p>
              Applicants may be asked to provide additional evidence
              showing that the marriage or civil partnership is genuine and
              enduring. This may include:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Joint address documents</li>
              <li>Joint bank account statements</li>
              <li>Joint lease or mortgage documents</li>
              <li>Utility bills in joint names</li>
              <li>Evidence of shared family life</li>
              <li>Evidence of living together</li>
              <li>Other documents requested by Immigration Service Delivery</li>
            </ul>
            <p className="mt-2">
              Applicants should only submit relevant and appropriate
              documents and should avoid submitting unnecessary personal
              information unless requested.
            </p>

            <p className="mt-4 font-semibold text-foreground">
              If a Document Is Missing
            </p>
            <p>
              If an applicant cannot provide a required or expected
              document, they should clearly explain the reason in a
              covering letter. Affidavits or statutory declarations should
              only be used where appropriate and in line with the latest
              Irish Immigration guidance. Incorrect or incomplete
              documentation may delay the application or result in
              refusal.
            </p>

            <p className="mt-4 font-semibold text-foreground">
              Certified / Attested Copies
            </p>
            <p>
              Where certified copies are required, applicants should copy
              or print the original document and have it certified by an
              authorised person, such as:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Commissioner for Oaths</li>
              <li>Peace Commissioner</li>
              <li>Notary Public</li>
              <li>Practising Solicitor</li>
            </ul>
            <p className="mt-2">
              Applicants should always check the latest Irish Immigration
              guidance to confirm who can certify documents and what
              certification wording, stamp or format is required.
            </p>

            <p className="mt-4 font-semibold text-foreground">
              After Submission
            </p>
            <p>
              After submitting the application, applicants should regularly
              check their application status through the official Irish
              Immigration portal. Applicants should also:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Keep copies of all documents submitted.</li>
              <li>
                Monitor their email for communication from Immigration
                Service Delivery.
              </li>
              <li>
                Respond promptly if further information or original
                documents are requested.
              </li>
              <li>
                Inform Citizenship Division if their address or email
                changes.
              </li>
              <li>
                Keep immigration permission valid while the application is
                being processed, where applicable.
              </li>
            </ul>

            <p className="mt-4 font-semibold text-foreground">
              Disclaimer
            </p>
            <p>
              This document is only a general community guidance note. It
              is not an exhaustive checklist and does not guarantee
              application approval. Immigration Service Delivery may
              request additional information or documents depending on the
              applicant&apos;s individual circumstances. Applicants should
              always refer to the latest official guidance available on
              the Irish Immigration website before applying.
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
