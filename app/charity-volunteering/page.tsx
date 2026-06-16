import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ArrowRight,
  HeartHandshake,
  HeartPulse,
  Wrench,
  ShieldCheck,
  TrendingUp,
  Globe2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import EventCard from "@/components/shared/EventCard";
import Reveal from "@/components/shared/Reveal";
import { picsum } from "@/data/images";
import { events } from "@/data/events";

export const metadata: Metadata = {
  title: "Charity & Volunteering",
  description:
    "BJAI supports charitable causes in Bihar, Jharkhand and Ireland through volunteering, fundraising, healthcare support and skill-based help.",
};

const focusAreas = [
  {
    icon: HeartHandshake,
    title: "Volunteering Across Bihar, Jharkhand & Ireland",
    description:
      "We provide a platform where BJAI members of all ages can volunteer their time for causes in Bihar, Jharkhand, and here in Ireland.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Support",
    description:
      "Continued healthcare support programmes for disadvantaged communities in Bihar and Jharkhand, funded through community fundraising.",
  },
  {
    icon: Wrench,
    title: "Skill-Based Help",
    description:
      "Members share their professional skills — medical, technical, educational — to support development projects in India.",
  },
  {
    icon: ShieldCheck,
    title: "Community Support in Ireland",
    description:
      "Practical help and support for community members in Ireland, especially newcomers settling into life here.",
  },
  {
    icon: TrendingUp,
    title: "Growing Participation",
    description:
      "We're working to increase membership and attendance at our charitable and cultural events year on year.",
  },
  {
    icon: Globe2,
    title: "Global Connections",
    description:
      "Connecting with Bihar and Jharkhand communities around the world to amplify the impact of our charitable work.",
  },
];

const charityEvents = events.filter(
  (e) => e.category === "Charity" && e.status === "upcoming"
);

export default function CharityVolunteeringPage() {
  return (
    <>
      <PageHero
        title="Charity & Volunteering"
        subtitle="Giving back to our communities in Bihar, Jharkhand and Ireland — together, we make a difference."
      />

      {/* Intro */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-saffron">
                Why It Matters
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Giving Back, Together
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Charity sits at the heart of BJAI&apos;s mission. From
                healthcare initiatives in Bihar and Jharkhand to supporting
                community members settling into life in Ireland, our
                charitable work is powered entirely by the generosity and
                volunteering spirit of our members.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Whether you can offer a few hours at an event, donate to a
                fundraiser, or contribute your professional skills to a
                project back home, every contribution helps us reach more
                families and individuals in need.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={picsum("bjai-charity-volunteering", 1000, 750)}
                  alt="BJAI charity and volunteering activities"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Focus Areas"
            title="How BJAI Gives Back"
            subtitle="Our charitable and volunteering efforts span communities in Bihar, Jharkhand and Ireland."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Reveal key={area.title} delay={(index % 3) * 0.08}>
                  <div className="flex h-full flex-col gap-3 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-foreground/5 transition-all hover:-translate-y-1 hover:shadow-lg">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-festive text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="font-heading text-base font-bold text-foreground">
                      {area.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {area.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming charity events */}
      {charityEvents.length > 0 && (
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Get Involved"
              title="Upcoming Charity Events"
            />
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {charityEvents.map((event, i) => (
                <Reveal key={event.slug} delay={(i % 3) * 0.08}>
                  <EventCard event={event} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-gradient-festive py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center text-white sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Become a Volunteer
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/90 sm:text-lg">
            Have a few hours to give, a skill to share, or a cause close to
            your heart? Get in touch and let's make a difference together.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              render={<Link href="/contact" />}
              size="lg"
              className="bg-white text-maroon hover:bg-white/90"
            >
              Register Interest <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              render={<Link href="/donate" />}
              size="lg"
              variant="outline"
              className="border-white/70 bg-white/10 text-white hover:bg-white/20"
            >
              Donate
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
