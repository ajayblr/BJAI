import Link from "next/link";
import {
  ArrowRight,
  HeartHandshake,
  Sparkles,
  Users,
  Target,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSlider from "@/components/shared/HeroSlider";
import SectionHeading from "@/components/shared/SectionHeading";
import EventCard from "@/components/shared/EventCard";
import GoalsGrid from "@/components/shared/GoalsGrid";
import Reveal from "@/components/shared/Reveal";
import { heroSlides } from "@/data/hero";
import { featuredEvents } from "@/data/events";
import { goals } from "@/data/goals";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <HeroSlider slides={heroSlides} />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center text-white">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-gold sm:text-base">
            Welcome to BJAI
          </p>
          <h1 className="mt-3 max-w-4xl text-3xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Bihar Jharkhand Association of Ireland
          </h1>
          <p className="mt-2 text-xl italic text-gold sm:text-2xl">
            Aapka Apna Parivar
          </p>
          <p className="mt-5 max-w-2xl text-sm text-white/90 sm:text-base lg:text-lg">
            BJAI is a vibrant community platform for people from Bihar and
            Jharkhand living in Ireland. We bring families, students,
            professionals, business owners, and the younger generation
            together to celebrate culture, support charitable causes, promote
            Indian heritage, and strengthen community bonds across Ireland.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              render={<Link href="/membership" />}
              size="lg"
              className="bg-saffron text-white hover:bg-saffron/90"
            >
              Join BJAI
            </Button>
            <Button
              render={<Link href="/events" />}
              size="lg"
              className="bg-white text-maroon hover:bg-white/90"
            >
              View Events
            </Button>
            <Button
              render={<Link href="/charity-volunteering" />}
              size="lg"
              variant="outline"
              className="border-white/60 bg-white/10 text-white hover:bg-white/20"
            >
              Become a Volunteer
            </Button>
            <Button
              render={<Link href="/contact" />}
              size="lg"
              variant="outline"
              className="border-white/60 bg-white/10 text-white hover:bg-white/20"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <p className="font-heading text-2xl font-bold text-maroon sm:text-3xl">
              More than a community organisation. It is a family away from
              home.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              We bring together people from Bihar and Jharkhand living in
              Ireland to celebrate our culture, preserve our heritage,
              support charitable causes, mentor the next generation, and
              build meaningful connections across families, students,
              professionals, and business owners.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Through festivals, cultural programmes, volunteering,
              mentoring, charity, and social engagement, BJAI continues to
              strengthen the bond between our roots in India and our lives in
              Ireland.
            </p>
          </Reveal>
        </div>
      </section>

      {/* About preview */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-saffron">
                About BJAI
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                A platform for culture, charity, and community
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
                and collaboration within Irish society.
              </p>
              <Button
                render={<Link href="/about" />}
                className="mt-6 bg-deepgreen text-white hover:bg-deepgreen/90"
              >
                Learn More About BJAI <ArrowRight className="h-4 w-4" />
              </Button>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center gap-2 rounded-2xl bg-gradient-festive p-6 text-center text-white shadow-md">
                  <HeartHandshake className="h-8 w-8" />
                  <p className="font-heading text-lg font-bold">Charity</p>
                  <p className="text-sm text-white/90">
                    Supporting communities in Bihar, Jharkhand &amp; Ireland
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2 rounded-2xl bg-royalblue p-6 text-center text-white shadow-md">
                  <Users className="h-8 w-8" />
                  <p className="font-heading text-lg font-bold">Community</p>
                  <p className="text-sm text-white/90">
                    Families, students, professionals &amp; seniors together
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2 rounded-2xl bg-deepgreen p-6 text-center text-white shadow-md">
                  <Sparkles className="h-8 w-8" />
                  <p className="font-heading text-lg font-bold">Culture</p>
                  <p className="text-sm text-white/90">
                    Festivals, heritage &amp; traditions of Bihar and
                    Jharkhand
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2 rounded-2xl bg-maroon p-6 text-center text-white shadow-md">
                  <Target className="h-8 w-8" />
                  <p className="font-heading text-lg font-bold">Youth</p>
                  <p className="text-sm text-white/90">
                    Mentoring &amp; developing the next generation
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision teaser */}
      <section className="bg-gradient-to-br from-deepgreen via-royalblue to-maroon py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why BJAI Exists"
            title="Our Mission & Vision"
            light
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
                <Target className="h-10 w-10 text-gold" />
                <h3 className="mt-4 font-heading text-xl font-bold text-white">
                  Our Mission
                </h3>
                <p className="mt-3 text-cream/90">
                  To carry out, promote, and coordinate philanthropic,
                  educational, cultural, and voluntary activities serving
                  physically and economically disadvantaged people in Bihar
                  and Jharkhand, while integrating Indian people across
                  Ireland.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
                <Eye className="h-10 w-10 text-gold" />
                <h3 className="mt-4 font-heading text-xl font-bold text-white">
                  Our Vision
                </h3>
                <p className="mt-3 text-cream/90">
                  To build on the past achievements of BJAI and strengthen
                  both the charitable and cultural vision of the
                  organisation, creating a strong, united, and future-ready
                  community for generations to come.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="mt-8 text-center">
            <Button
              render={<Link href="/mission-vision" />}
              size="lg"
              className="bg-gold text-deepgreen hover:bg-gold/90"
            >
              Read Our Full Mission &amp; Vision
            </Button>
          </div>
        </div>
      </section>

      {/* Featured events */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Don't Miss Out"
            title="Featured Events"
            subtitle="From cultural festivals to charity galas and youth camps — there's always something happening at BJAI."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredEvents.map((event, i) => (
              <Reveal key={event.slug} delay={i * 0.08}>
                <EventCard event={event} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button render={<Link href="/events" />} size="lg" variant="outline">
              View All Events <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Key goals */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Looking Ahead"
            title="Key Goals for the Next Two Years"
            subtitle="BJAI is committed to growing our community, culture, charity, and networks across Ireland and beyond."
          />
          <div className="mt-10">
            <GoalsGrid goals={goals.slice(0, 6)} />
          </div>
          <div className="mt-10 text-center">
            <Button render={<Link href="/mission-vision" />} size="lg" variant="outline">
              View All Our Goals <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-gradient-festive py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center text-white sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Become Part of Our BJAI Family
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/90 sm:text-lg">
            Whether you want to celebrate culture, volunteer your time,
            support a cause, or simply connect with the community &mdash;
            there&apos;s a place for you at BJAI.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              render={<Link href="/membership" />}
              size="lg"
              className="bg-white text-maroon hover:bg-white/90"
            >
              Join BJAI
            </Button>
            <Button
              render={<Link href="/donate" />}
              size="lg"
              variant="outline"
              className="border-white/70 bg-white/10 text-white hover:bg-white/20"
            >
              Donate
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
