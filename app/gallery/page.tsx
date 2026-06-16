import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import GalleryGrid from "@/components/shared/GalleryGrid";
import { galleryItems } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse photos and videos from BJAI events — festivals, cultural programmes, youth camps, charity drives, and community gatherings across Ireland.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="Moments from our festivals, cultural programmes, youth camps, charity drives and community gatherings."
      />

      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GalleryGrid items={galleryItems} />
        </div>
      </section>
    </>
  );
}
