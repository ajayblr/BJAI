import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ArrowRight,
  Sparkles,
  Sun as SunIcon,
  GraduationCap,
  HeartHandshake,
  Users,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import EventCard from "@/components/shared/EventCard";
import Reveal from "@/components/shared/Reveal";
import { picsum } from "@/data/images";
import { events } from "@/data/events";

export const metadata: Metadata = {
  title: "Youth Programmes",
  description:
    "BJAI's youth programmes connect the next generation with their culture through mentoring, summer camps, leadership and volunteering opportunities.",
};

const offerings = [
  {
    icon: Sparkles,
    title: "Cultural Learning",
    description:
      "Hindi language sessions, Madhubani art, traditional music and dance — helping young people connect with their roots.",
  },
  {
    icon: SunIcon,
    title: "Summer Camps",
    description:
      "A week-long summer camp packed with games, crafts, talent shows and friendships that last a lifetime.",
  },
  {
    icon: GraduationCap,
    title: "Mentoring",
    description:
      "Students and young professionals are paired with experienced mentors for guidance on education, careers, and life in Ireland.",
  },
  {
    icon: HeartHandshake,
    title: "Volunteering",
    description:
      "Young people get involved in BJAI's charity drives, gaining experience while giving back to the community.",
  },
  {
    icon: Users,
    title: "Social Networking",
    description:
      "A space for the younger generation to make friends, build connections, and feel part of a wider community.",
  },
  {
    icon: Trophy,
    title: "Leadership",
    description:
      "Opportunities to lead activities, organise events, and develop confidence and teamwork skills.",
  },
];

const youthEvents = events.filter((e) => e.category === "Youth" && e.status === "upcoming");

export default function YouthProgrammesPage() {
  return (
    <>
      <PageHero
        title="Youth Programmes"
        subtitle="Youth, Culture and the Next Generation — helping young BJAI members thrive in Ireland while staying connected to their roots."
      />

      {/* Intro */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-saffron">
                Our Commitment
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Youth, Culture and the Next Generation
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                The young people of our community are growing up between two
                worlds &mdash; the culture of Bihar and Jharkhand, and the
                life they know in Ireland. BJAI's youth programmes are
                designed to help them embrace both, building confidence,
                friendships, and a strong sense of identity.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Through cultural learning, mentoring, volunteering, and social
                activities, we aim to engage BJAI kids and young adults in
                meaningful ways &mdash; helping them stay connected to their
                heritage while building the skills and networks they need for
                the future.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={picsum("bjai-youth-programmes", 1000, 750)}
                  alt="BJAI youth programme activities"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Offer"
            title="Programmes for Every Young Member"
            subtitle="From summer camps to mentoring and leadership, there's something for every age group."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map((offering, index) => {
              const Icon = offering.icon;
              return (
                <Reveal key={offering.title} delay={(index % 3) * 0.08}>
                  <div className="flex h-full flex-col gap-3 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-foreground/5 transition-all hover:-translate-y-1 hover:shadow-lg">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-festive text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="font-heading text-base font-bold text-foreground">
                      {offering.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {offering.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming youth events */}
      {youthEvents.length > 0 && (
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Get Involved"
              title="Upcoming Youth Events"
            />
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {youthEvents.map((event, i) => (
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
            Get Your Family Involved
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/90 sm:text-lg">
            Whether you're a parent, student, or young professional, there's
            a place for you in BJAI's youth community.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              render={<Link href="/membership" />}
              size="lg"
              className="bg-white text-maroon hover:bg-white/90"
            >
              Join BJAI <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              render={<Link href="/contact" />}
              size="lg"
              variant="outline"
              className="border-white/70 bg-white/10 text-white hover:bg-white/20"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
