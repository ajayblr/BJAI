import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/shared/PageHero";
import FaqAccordion from "@/components/shared/FaqAccordion";
import { faqCategories } from "@/data/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about BJAI — membership, events, volunteering, donations, youth activities, cultural programmes, and more.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about BJAI, membership, events, and getting involved."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FaqAccordion categories={faqCategories} />

          <div className="mt-12 rounded-2xl bg-cream p-8 text-center shadow-sm ring-1 ring-foreground/5">
            <h2 className="font-heading text-xl font-bold text-foreground">
              Still have questions?
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Can&apos;t find what you&apos;re looking for? Get in touch and
              we&apos;ll be happy to help.
            </p>
            <Button
              render={<Link href="/contact" />}
              className="mt-5 bg-saffron text-white hover:bg-saffron/90"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
