import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ArrowRight,
  Sparkles,
  Users,
  HeartHandshake,
  Briefcase,
  GraduationCap,
  PartyPopper,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";

export const metadata: Metadata = {
  title: "About BJAI",
  description:
    "Learn about BJAI — Bihar Jharkhand Association of Ireland, a community organisation bringing together people of Bihar and Jharkhand origin living across Ireland.",
};

const activities = [
  {
    icon: Sparkles,
    title: "Cultural Celebrations",
    description:
      "Festivals such as Chhath Puja, Holi Milan, Diwali, Bihar Diwas and Jharkhand Foundation Day, celebrated together as one big family.",
  },
  {
    icon: HeartHandshake,
    title: "Charity & Welfare",
    description:
      "Fundraising and welfare initiatives that support disadvantaged communities in Bihar, Jharkhand, and Ireland.",
  },
  {
    icon: Users,
    title: "Social Interaction",
    description:
      "A warm, welcoming space for families, students, professionals and seniors to meet, connect and build lasting friendships.",
  },
  {
    icon: GraduationCap,
    title: "Youth & Mentoring",
    description:
      "Programmes that engage the next generation through mentoring, cultural learning, summer camps and leadership opportunities.",
  },
  {
    icon: Briefcase,
    title: "Professional Networking",
    description:
      "A growing network connecting business owners and professionals of Bihari and Jharkhandi origin across Ireland.",
  },
  {
    icon: PartyPopper,
    title: "Community Events",
    description:
      "Picnics, get-togethers and social gatherings that bring our community together throughout the year.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About BJAI"
        subtitle="Aapka Apna Parivar — a family away from home for the Bihar and Jharkhand community in Ireland."
      />

      {/* Who we are */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-saffron">
                Who We Are
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                A community organisation built on togetherness
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                BJAI &mdash; Bihar Jharkhand Association of Ireland is a
                community organisation dedicated to bringing together people
                of Bihar and Jharkhand origin living across Ireland. BJAI
                provides a platform for cultural celebration, social
                interaction, charity, volunteering, youth engagement,
                professional networking, and community support.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                BJAI aims to preserve and promote the cultural identity of
                Bihar and Jharkhand while encouraging integration, friendship,
                and collaboration within Irish society. From students who
                have just arrived to families who have called Ireland home
                for years, BJAI welcomes everyone &mdash; regardless of
                background &mdash; who wants to be part of our community.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Our members come from all walks of life: families, students,
                working professionals, business owners, and senior community
                members. Together, we organise festivals, support charitable
                causes, mentor young people, and create opportunities for our
                community to thrive in Ireland while staying rooted in our
                shared heritage.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl bg-cream p-12 shadow-xl">
                <Image
                  src="/images/bjai-logo.avif"
                  alt="BJAI logo"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-contain p-12"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Do"
            title="A platform for everyone in our community"
            subtitle="BJAI's activities span culture, charity, youth development, networking, and community life."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <Reveal key={activity.title} delay={(index % 3) * 0.08}>
                  <div className="flex h-full flex-col gap-3 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-foreground/5 transition-all hover:-translate-y-1 hover:shadow-lg">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-festive text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="font-heading text-base font-bold text-foreground">
                      {activity.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {activity.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our values */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-saffron">
              Our Story
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Aapka Apna Parivar &mdash; Your Own Family
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              BJAI was born out of a simple idea &mdash; that no one from
              Bihar or Jharkhand should feel alone while building a new life
              in Ireland. What started as informal gatherings between friends
              and families grew into a structured community organisation,
              with a committee, regular events, and a clear mission to serve
              our people both here in Ireland and back home.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Today, BJAI continues to grow &mdash; welcoming new members,
              organising vibrant cultural celebrations, supporting charitable
              causes, and creating opportunities for the next generation. We
              are proud of where we come from, and proud of the community we
              are building together in Ireland.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button
                render={<Link href="/mission-vision" />}
                size="lg"
                className="bg-deepgreen text-white hover:bg-deepgreen/90"
              >
                Our Mission &amp; Vision <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                render={<Link href="/membership" />}
                size="lg"
                variant="outline"
              >
                Join BJAI
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
