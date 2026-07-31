import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  CalendarDays,
  Clock,
  MapPin,
  Mail,
  User,
  ExternalLink,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/shared/Reveal";
import { events, getEventBySlug } from "@/data/events";
import { cn } from "@/lib/utils";

const categoryStyles: Record<string, string> = {
  Cultural: "bg-saffron text-white",
  Charity: "bg-maroon text-white",
  Youth: "bg-royalblue text-white",
  Festival: "bg-gold text-deepgreen",
  Community: "bg-deepgreen text-white",
  Networking: "bg-royalblue-light text-white",
};

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    return { title: "Event Not Found" };
  }

  return {
    title: event.title,
    description: event.shortDescription,
  };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-6 sm:pt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-md">
            <Image
              src={event.image}
              alt={event.title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-hero-overlay" />
            <div className="absolute inset-0 z-10 flex flex-col items-start justify-end p-6 sm:p-8">
              <Badge
                className={cn(
                  "px-3 py-1 text-xs font-semibold shadow",
                  categoryStyles[event.category]
                )}
              >
                {event.category}
              </Badge>
              <h1 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-5xl">
                {event.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-sm font-semibold text-royalblue hover:text-royalblue/80"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Events
          </Link>

          <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-3">
            <Reveal className="lg:col-span-2">
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {event.description.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {/* Gallery */}
              <div className="mt-10">
                <h2 className="font-heading text-xl font-bold text-foreground">
                  Event Gallery
                </h2>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {event.gallery.map((image, i) => (
                    <div
                      key={i}
                      className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-sm"
                    >
                      <Image
                        src={image}
                        alt={`${event.title} photo ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                {event.facebookUrl && (
                  <a
                    href={event.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-royalblue hover:underline"
                  >
                    <ExternalLink className="h-4 w-4" /> View on Facebook
                  </a>
                )}
              </div>

              {/* Map placeholder */}
              <div className="mt-10">
                <h2 className="font-heading text-xl font-bold text-foreground">
                  Location
                </h2>
                <div className="mt-4 flex h-56 w-full flex-col items-center justify-center gap-2 rounded-2xl bg-cream text-center ring-1 ring-foreground/5">
                  <MapPin className="h-8 w-8 text-maroon" />
                  <p className="font-semibold text-foreground">{event.location}</p>
                  <p className="text-sm text-muted-foreground">
                    Map preview coming soon
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Sidebar */}
            <Reveal delay={0.1}>
              <div className="space-y-6 rounded-2xl bg-cream p-6 shadow-sm ring-1 ring-foreground/5 sm:p-8">
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    Event Details
                  </h3>
                  <div className="mt-4 space-y-3 text-sm text-foreground/80">
                    <div className="flex items-start gap-3">
                      <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-saffron" />
                      <div>
                        <p className="font-semibold text-foreground">Date</p>
                        <p>{event.date}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="mt-0.5 h-5 w-5 shrink-0 text-saffron" />
                      <div>
                        <p className="font-semibold text-foreground">Time</p>
                        <p>{event.time}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-saffron" />
                      <div>
                        <p className="font-semibold text-foreground">Location</p>
                        <p>{event.location}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <User className="mt-0.5 h-5 w-5 shrink-0 text-saffron" />
                      <div>
                        <p className="font-semibold text-foreground">Organiser</p>
                        <p>{event.organiser}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="mt-0.5 h-5 w-5 shrink-0 text-saffron" />
                      <div>
                        <p className="font-semibold text-foreground">Contact</p>
                        <a
                          href={`mailto:${event.contactEmail}`}
                          className="break-all text-royalblue hover:underline"
                        >
                          {event.contactEmail}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {event.status === "upcoming" ? (
                  <Button
                    render={<Link href="/contact" />}
                    className="w-full bg-saffron text-white hover:bg-saffron/90"
                  >
                    Register Your Interest
                  </Button>
                ) : (
                  <div className="rounded-xl bg-white px-4 py-3 text-center text-sm font-medium text-muted-foreground ring-1 ring-foreground/5">
                    This event has taken place. Thank you to everyone who
                    joined us!
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
