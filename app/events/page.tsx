import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import EventCard from "@/components/shared/EventCard";
import Reveal from "@/components/shared/Reveal";
import { upcomingEvents, pastEvents, getEventBySlug } from "@/data/events";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Discover upcoming and past BJAI events — festivals, cultural celebrations, youth programmes, charity fundraisers, and community gatherings across Ireland.",
};

const latestHighlightSlugs = [
  "fici-community-champion-award-2026",
  "bjai-summer-picnic-2026",
];
const latestHighlights = latestHighlightSlugs
  .map((slug) => getEventBySlug(slug))
  .filter((e): e is NonNullable<typeof e> => Boolean(e));
const pastEventsExcludingHighlights = pastEvents.filter(
  (e) => !latestHighlightSlugs.includes(e.slug)
);

export default function EventsPage() {
  return (
    <>
      <PageHero
        title="Events"
        subtitle="Festivals, cultural celebrations, charity galas, youth programmes and community gatherings — there's always something happening at BJAI."
      />

      {/* Latest highlights */}
      {latestHighlights.length > 0 && (
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Just Happened"
              title="Latest Event Highlights"
              align="left"
            />
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {latestHighlights.map((event, i) => (
                <Reveal key={event.slug} delay={i * 0.08}>
                  <EventCard event={event} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Upcoming events */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Mark Your Calendar"
            title="Upcoming Events"
            align="left"
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event, i) => (
              <Reveal key={event.slug} delay={(i % 3) * 0.08}>
                <EventCard event={event} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Past events */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Looking Back"
            title="Past Events"
            align="left"
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pastEventsExcludingHighlights.map((event, i) => (
              <Reveal key={event.slug} delay={(i % 3) * 0.08}>
                <EventCard event={event} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
