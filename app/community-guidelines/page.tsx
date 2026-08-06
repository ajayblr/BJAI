import type { Metadata } from "next";
import {
  HeartHandshake,
  ShieldCheck,
  Baby,
  HandHelping,
  MessageSquare,
  Award,
  Banknote,
  Lock,
  Scale,
  Users,
} from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/shared/Reveal";

export const metadata: Metadata = {
  title: "Community Rules & Guidelines",
  description:
    "BJAI's community rules and guidelines — covering respect, conduct, child safety, volunteering, social media, branding, donations, privacy and more.",
};

const guidelines = [
  {
    icon: HeartHandshake,
    title: "Respect & Inclusion",
    description:
      "BJAI welcomes everyone with a connection to Bihar and Jharkhand, regardless of background, religion, gender, age, or profession. All members and guests are expected to treat one another with respect, courtesy, and kindness at all times.",
  },
  {
    icon: ShieldCheck,
    title: "Code of Conduct at Events",
    description:
      "Members and guests attending BJAI events are expected to behave appropriately, follow venue rules, and respect BJAI Executive Committee Members and volunteers. Disruptive, offensive, or unsafe behaviour will not be tolerated.",
  },
  {
    icon: Baby,
    title: "Child Safety & Family-Friendly Environment",
    description:
      "BJAI events are family-friendly. Parents and guardians are responsible for supervising their children. Volunteers working with children will be briefed on appropriate conduct to ensure a safe environment for all.",
  },
  {
    icon: HandHelping,
    title: "Volunteering Expectations",
    description:
      "Volunteers are the backbone of BJAI. We ask volunteers to be reliable, communicate clearly with coordinators, and represent BJAI positively. Volunteering is open to all ages with appropriate supervision for younger volunteers.",
  },
  {
    icon: MessageSquare,
    title: "Social Media & Online Conduct",
    description:
      "When engaging with BJAI's social media channels or community groups, members are asked to keep discussions respectful and constructive. Personal attacks, spam, and inappropriate content will be removed.",
  },
  {
    icon: Award,
    title: "Use of the BJAI Name & Branding",
    description:
      "The BJAI name, logo, and branding represent our entire community. Use of BJAI's name or branding for personal, commercial, or political purposes requires prior approval from the committee.",
  },
  {
    icon: Banknote,
    title: "Financial Transparency",
    description:
      "Funds raised through donations, membership fees, and events are managed by the Treasurer and committee with transparency. Summaries of how funds are used will be shared with members periodically.",
  },
  {
    icon: Lock,
    title: "Privacy & Data Protection",
    description:
      "BJAI respects your privacy. Personal information shared with us — including through our Contact and Membership forms — is handled in line with GDPR and is never shared with third parties without consent.",
  },
  {
    icon: Scale,
    title: "Conflict Resolution",
    description:
      "Disagreements or concerns should be raised respectfully with a committee member. BJAI is committed to resolving conflicts fairly, privately, and in a way that preserves community harmony.",
  },
  {
    icon: Users,
    title: "Membership Responsibilities",
    description:
      "Members are encouraged to stay engaged, attend events where possible, support fellow members, and uphold the values of BJAI both within the community and in the wider Irish society.",
  },
];

export default function CommunityGuidelinesPage() {
  return (
    <>
      <PageHero
        title="Community Rules & Guidelines"
        subtitle="Guidelines that help keep BJAI a safe, welcoming and respectful community for everyone."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              BJAI is a community built on trust, respect and togetherness.
              These guidelines apply to all members, volunteers, and guests
              participating in BJAI activities &mdash; whether in person or
              online &mdash; and help us maintain a positive environment for
              everyone, especially families and children.
            </p>
          </Reveal>

          <div className="mt-10 space-y-5">
            {guidelines.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={(index % 5) * 0.06}>
                  <div className="flex gap-4 rounded-2xl bg-cream p-6 shadow-sm ring-1 ring-foreground/5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-festive text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-heading text-base font-bold text-foreground">
                        {index + 1}. {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
