import type { Metadata } from "next";
import {
  Users,
  CalendarHeart,
  HeartHandshake,
  GraduationCap,
  Briefcase,
  BadgeCheck,
} from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import MembershipForm from "@/components/shared/MembershipForm";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Join BJAI — Bihar Jharkhand Association of Ireland. Become part of a vibrant community celebrating culture, charity, and connection across Ireland.",
};

const benefits = [
  {
    icon: CalendarHeart,
    title: "Festivals & Celebrations",
    description:
      "Be part of Chhath Puja, Holi Milan, Diwali, Bihar Diwas, Jharkhand Foundation Day and more.",
  },
  {
    icon: Users,
    title: "Community Connection",
    description:
      "Meet families, students, professionals and seniors from Bihar and Jharkhand across Ireland.",
  },
  {
    icon: HeartHandshake,
    title: "Charity & Volunteering",
    description:
      "Get involved in fundraising and charitable initiatives that support Bihar, Jharkhand and Ireland.",
  },
  {
    icon: GraduationCap,
    title: "Youth & Mentoring",
    description:
      "Access mentoring, summer camps and youth programmes for the next generation.",
  },
  {
    icon: Briefcase,
    title: "Professional Network",
    description:
      "Connect with business owners and professionals through our networking events.",
  },
  {
    icon: BadgeCheck,
    title: "A Sense of Belonging",
    description:
      "Find your home away from home — Aapka Apna Parivar.",
  },
];

const steps = [
  {
    step: "1",
    title: "Fill in the Form",
    description: "Complete the membership form below with your details and area of interest.",
  },
  {
    step: "2",
    title: "We'll Be in Touch",
    description: "A member of the BJAI committee will reach out to welcome you and share next steps.",
  },
  {
    step: "3",
    title: "Get Involved",
    description: "Start attending events, volunteering, and connecting with the BJAI community.",
  },
];

export default function MembershipPage() {
  return (
    <>
      <PageHero
        title="Join BJAI"
        subtitle="Become part of Aapka Apna Parivar — your own family away from home."
      />

      {/* Benefits */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Join"
            title="What You'll Be Part Of"
            subtitle="BJAI membership connects you to culture, community, charity, and opportunity."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Reveal key={benefit.title} delay={(index % 3) * 0.08}>
                  <div className="flex h-full flex-col gap-3 rounded-2xl bg-cream p-6 shadow-sm ring-1 ring-foreground/5">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-festive text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="font-heading text-base font-bold text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to join */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Getting Started" title="How to Join" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {steps.map((item, index) => (
              <Reveal key={item.step} delay={(index % 3) * 0.08}>
                <div className="flex h-full flex-col gap-3 rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-foreground/5">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-festive font-heading text-lg font-bold text-white">
                    {item.step}
                  </span>
                  <h3 className="font-heading text-base font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Membership form */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Become a Member"
            title="Membership Interest Form"
            subtitle="Fill in your details below and we'll get back to you with everything you need to know."
          />
          <div className="mt-10 rounded-2xl bg-cream p-6 shadow-sm ring-1 ring-foreground/5 sm:p-10">
            <MembershipForm />
          </div>
        </div>
      </section>
    </>
  );
}
