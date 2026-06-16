import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Banknote, HeartPulse, GraduationCap, HandCoins } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support BJAI's charitable work in Bihar, Jharkhand and Ireland — healthcare, education, and community support initiatives funded by donations.",
};

const impactAreas = [
  {
    icon: HeartPulse,
    title: "Healthcare Support",
    description:
      "Funding healthcare initiatives and medical camps for disadvantaged communities in Bihar and Jharkhand.",
  },
  {
    icon: GraduationCap,
    title: "Education & Skills",
    description:
      "Supporting education, mentoring and skill-development programmes for young people in India and Ireland.",
  },
  {
    icon: HandCoins,
    title: "Community Welfare",
    description:
      "Helping families and individuals in need, both in Bihar and Jharkhand and within our community in Ireland.",
  },
];

export default function DonatePage() {
  return (
    <>
      <PageHero
        title="Donate"
        subtitle="Your generosity helps BJAI support communities in Bihar, Jharkhand and Ireland."
      />

      {/* Why donate */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-saffron">
              Make a Difference
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Every Contribution Counts
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              BJAI's charitable activities are entirely funded by the
              generosity of our community. Donations directly support
              healthcare, education, and welfare initiatives for
              disadvantaged communities in Bihar and Jharkhand, as well as
              community support programmes here in Ireland.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Impact areas */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Where It Goes" title="Your Donation's Impact" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {impactAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Reveal key={area.title} delay={(index % 3) * 0.08}>
                  <div className="flex h-full flex-col gap-3 rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-foreground/5">
                    <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-festive text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="font-heading text-base font-bold text-foreground">
                      {area.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{area.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to donate */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="How to Donate" title="Ways to Give" />
          <Reveal delay={0.1}>
            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4 rounded-2xl bg-cream p-6 shadow-sm ring-1 ring-foreground/5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-festive text-white">
                  <Banknote className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-heading text-base font-bold text-foreground">
                    Bank Transfer
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Bank account details for direct donations will be shared
                    here soon. In the meantime, please contact us to arrange
                    a bank transfer.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl bg-cream p-6 shadow-sm ring-1 ring-foreground/5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-festive text-white">
                  <HandCoins className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-heading text-base font-bold text-foreground">
                    Online Donation (Coming Soon)
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    We are working on setting up secure online donation
                    options, including card and PayPal payments. Check back
                    soon, or contact us for the latest update.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl bg-cream p-6 shadow-sm ring-1 ring-foreground/5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-festive text-white">
                  <HeartPulse className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-heading text-base font-bold text-foreground">
                    Event Fundraisers
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Many BJAI events, such as our Charity Fundraiser Gala,
                    include opportunities to donate directly. Visit our{" "}
                    <Link href="/events" className="text-royalblue hover:underline">
                      Events
                    </Link>{" "}
                    page to see what&apos;s coming up.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-festive py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center text-white sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Want to Know More?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/90 sm:text-lg">
            Get in touch with our Charity Committee to learn more about our
            current campaigns and how your donation will be used.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              render={<Link href="/contact" />}
              size="lg"
              className="bg-white text-maroon hover:bg-white/90"
            >
              Contact the Charity Committee <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              render={<Link href="/charity-volunteering" />}
              size="lg"
              variant="outline"
              className="border-white/70 bg-white/10 text-white hover:bg-white/20"
            >
              Our Charity Work
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
