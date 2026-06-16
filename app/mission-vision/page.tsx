import type { Metadata } from "next";
import { Target, Eye, Users, HeartHandshake, GraduationCap, Globe2 } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import GoalsGrid from "@/components/shared/GoalsGrid";
import { goals } from "@/data/goals";

export const metadata: Metadata = {
  title: "Mission & Vision",
  description:
    "Discover BJAI's mission, vision, and key goals for the next two years — and how our community comes together in Ireland.",
};

const involvementAreas = [
  {
    icon: Users,
    title: "Families & Individuals",
    description:
      "Bringing families, students, professionals, and seniors together through regular events and gatherings.",
  },
  {
    icon: HeartHandshake,
    title: "Charity & Welfare",
    description:
      "Supporting charitable causes in Bihar, Jharkhand, and Ireland through fundraising and volunteering.",
  },
  {
    icon: GraduationCap,
    title: "Education & Mentoring",
    description:
      "Mentoring students and young professionals to help them settle, study and grow in Ireland.",
  },
  {
    icon: Globe2,
    title: "Cultural Exchange",
    description:
      "Sharing the rich culture and traditions of Bihar and Jharkhand with the wider Irish community.",
  },
];

export default function MissionVisionPage() {
  return (
    <>
      <PageHero
        title="Mission & Vision"
        subtitle="Why BJAI exists, and where we are headed together."
      />

      {/* Mission & Vision */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl bg-gradient-to-br from-deepgreen to-[#0a3322] p-8 text-white shadow-lg sm:p-10">
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10">
                  <Target className="h-7 w-7 text-gold" />
                </span>
                <h2 className="mt-5 font-heading text-2xl font-bold sm:text-3xl">
                  Our Mission
                </h2>
                <p className="mt-4 text-base leading-relaxed text-cream/90 sm:text-lg">
                  To carry out, promote, and coordinate philanthropic,
                  educational, cultural, and voluntary activities serving
                  physically and economically disadvantaged people in Bihar
                  and Jharkhand, while integrating Indian people across
                  Ireland.
                </p>
                <p className="mt-4 text-base leading-relaxed text-cream/90 sm:text-lg">
                  We are committed to creating a supportive, inclusive
                  environment where every member of our community &mdash;
                  regardless of age, profession, or background &mdash; can
                  find friendship, support, and a sense of belonging.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full rounded-2xl bg-gradient-to-br from-royalblue to-[#10224a] p-8 text-white shadow-lg sm:p-10">
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10">
                  <Eye className="h-7 w-7 text-gold" />
                </span>
                <h2 className="mt-5 font-heading text-2xl font-bold sm:text-3xl">
                  Our Vision
                </h2>
                <p className="mt-4 text-base leading-relaxed text-cream/90 sm:text-lg">
                  To build on the past achievements of BJAI and strengthen
                  both the charitable and cultural vision of the
                  organisation, creating a strong, united, and future-ready
                  community for generations to come.
                </p>
                <p className="mt-4 text-base leading-relaxed text-cream/90 sm:text-lg">
                  We envision a thriving BJAI that connects generations,
                  celebrates our heritage proudly, gives back to those in
                  need, and stands as a model community organisation within
                  Ireland&apos;s multicultural landscape.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Key Goals */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Looking Ahead"
            title="Key Goals for the Next Two Years"
            subtitle="A roadmap of 14 priorities that will guide BJAI's growth, culture, charity, and community programmes."
          />
          <div className="mt-10">
            <GoalsGrid goals={goals} />
          </div>
        </div>
      </section>

      {/* Community involvement */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Together We Grow"
            title="Our Community Involvement"
            subtitle="BJAI's mission comes to life through the everyday involvement of our community across these areas."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {involvementAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Reveal key={area.title} delay={(index % 4) * 0.08}>
                  <div className="flex h-full flex-col gap-3 rounded-2xl bg-cream p-6 text-center shadow-sm ring-1 ring-foreground/5">
                    <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-festive text-white">
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
    </>
  );
}
