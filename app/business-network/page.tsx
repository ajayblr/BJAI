import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ArrowRight,
  Briefcase,
  Globe2,
  BookUser,
  PartyPopper,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import EventCard from "@/components/shared/EventCard";
import Reveal from "@/components/shared/Reveal";
import { picsum } from "@/data/images";
import { events } from "@/data/events";

export const metadata: Metadata = {
  title: "Business & Professional Network",
  description:
    "Connect with business owners and professionals from the Bihar and Jharkhand community across Ireland through BJAI's professional network.",
};

const benefits = [
  {
    icon: Briefcase,
    title: "Business & Professional Networking",
    description:
      "A dedicated platform connecting business owners, entrepreneurs and professionals of Bihari and Jharkhandi origin across Ireland.",
  },
  {
    icon: Globe2,
    title: "Global Connections",
    description:
      "Links to Bihar and Jharkhand business communities around the world, opening doors to new opportunities and collaborations.",
  },
  {
    icon: BookUser,
    title: "Member Directory",
    description:
      "An updated directory of BJAI members and businesses, making it easier to find and support each other within the community.",
  },
  {
    icon: PartyPopper,
    title: "Grand Get-Togethers",
    description:
      "Larger networking events bringing together Bihar and Jharkhand associations and professionals from across Ireland.",
  },
];

const networkingEvents = events.filter(
  (e) => e.category === "Networking" && e.status === "upcoming"
);

export default function BusinessNetworkPage() {
  return (
    <>
      <PageHero
        title="Business & Professional Network"
        subtitle="Connect, collaborate and grow with business owners and professionals from our community across Ireland."
      />

      {/* Intro */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-saffron">
                Why Network with BJAI
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Building a Stronger Professional Community
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                From small business owners to professionals working across
                healthcare, technology, finance and beyond, our community has
                a wealth of talent and experience. BJAI's Business &amp;
                Professional Network exists to bring this talent together
                &mdash; for support, collaboration, and growth.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Whether you're starting a new business, looking for career
                advice, or simply want to meet like-minded professionals from
                Bihar and Jharkhand living in Ireland, this network is for
                you.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={picsum("bjai-business-network", 1000, 750)}
                  alt="BJAI business and professional networking event"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What's on Offer"
            title="Benefits of Joining the Network"
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Reveal key={benefit.title} delay={(index % 4) * 0.08}>
                  <div className="flex h-full flex-col gap-3 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-foreground/5 transition-all hover:-translate-y-1 hover:shadow-lg">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-festive text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="font-heading text-base font-bold text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming networking events */}
      {networkingEvents.length > 0 && (
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Connect in Person"
              title="Upcoming Networking Events"
            />
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {networkingEvents.map((event, i) => (
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
            Join the Network
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/90 sm:text-lg">
            Get in touch to be added to our business and professional
            directory, and stay informed about upcoming networking events.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              render={<Link href="/contact" />}
              size="lg"
              className="bg-white text-maroon hover:bg-white/90"
            >
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              render={<Link href="/membership" />}
              size="lg"
              variant="outline"
              className="border-white/70 bg-white/10 text-white hover:bg-white/20"
            >
              Join BJAI
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
