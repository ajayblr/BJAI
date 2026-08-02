import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import MemberCard from "@/components/shared/MemberCard";
import Reveal from "@/components/shared/Reveal";
import { members } from "@/data/members";

export const metadata: Metadata = {
  title: "Members & Committee",
  description:
    "Meet the BJAI committee — the dedicated team of volunteers leading our community's cultural, charity, youth and networking activities across Ireland.",
};

const leadership = members.slice(0, 3);
const executiveCommitteeMembers = members.slice(3);

export default function MembersPage() {
  return (
    <>
      <PageHero
        title="Members & Committee"
        subtitle="Meet the dedicated volunteers who lead and support BJAI's activities throughout the year."
      />

      {/* Leadership */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Leadership"
            title="Office Bearers"
            subtitle="The team guiding BJAI's strategy, operations, culture, youth, charity and events."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((member, i) => (
              <Reveal key={`leader-${i}`} delay={(i % 3) * 0.08}>
                <MemberCard member={member} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Committee Members */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Committee" title="Executive Committee Members" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {executiveCommitteeMembers.map((member, i) => (
              <Reveal key={`member-${i}`} delay={(i % 4) * 0.08}>
                <MemberCard member={member} showRole={false} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-festive py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center text-white sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Want to Get Involved?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/90 sm:text-lg">
            BJAI is always looking for enthusiastic volunteers to help with
            events, culture, charity, and youth programmes. Join us and be
            part of the team.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              render={<Link href="/charity-volunteering" />}
              size="lg"
              className="bg-white text-maroon hover:bg-white/90"
            >
              Become a Volunteer <ArrowRight className="h-4 w-4" />
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
