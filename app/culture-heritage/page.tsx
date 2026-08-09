import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";

export const metadata: Metadata = {
  title: "Culture & Heritage",
  description:
    "Explore the rich history, culture, festivals and traditions of Bihar and Jharkhand — the heritage that BJAI celebrates and preserves in Ireland.",
};

const festivals = [
  {
    name: "Chhath Puja",
    origin: "Bihar",
    description:
      "A four-day festival of sun worship, deeply rooted in Bihar, where devotees offer prayers to the Sun God at sunrise and sunset on riverbanks.",
  },
  {
    name: "Holi Milan",
    origin: "Bihar & Jharkhand",
    description:
      "The festival of colours, celebrated with music, sweets and gulal — a joyful occasion that brings the whole community together.",
  },
  {
    name: "Sama-Chakeva",
    origin: "Bihar (Mithila)",
    description:
      "A unique folk festival of Mithila celebrating the bond between brothers and sisters, marked by clay idols, songs and rituals.",
  },
  {
    name: "Sarhul",
    origin: "Jharkhand",
    description:
      "The spring festival of Jharkhand's tribal communities, honouring the Sal tree and nature as the giver of life, marking the start of the new year.",
  },
  {
    name: "Karma (Karam) Puja",
    origin: "Jharkhand",
    description:
      "A harvest festival where the Karam tree is worshipped for prosperity, accompanied by traditional Jhumar and Karma dances and songs.",
  },
  {
    name: "Bihar Diwas & Jharkhand Diwas",
    origin: "Bihar & Jharkhand",
    description:
      "Annual celebrations marking the foundation of Bihar (22 March) and Jharkhand (15 November), honouring the history and identity of both states.",
  },
  {
    name: "Makar Sankranti",
    origin: "Bihar & Jharkhand",
    description:
      "A harvest festival marking the sun's transition into Capricorn, celebrated with til-gud sweets, kite flying, and traditional dishes like khichdi and chura-dahi.",
  },
];

export default function CultureHeritagePage() {
  return (
    <>
      <PageHero
        title="Culture & Heritage"
        subtitle="The history, traditions and identity of Bihar and Jharkhand that BJAI proudly celebrates and preserves in Ireland."
      />

      {/* Bihar */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-saffron">
                Bihar
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                The Historical and Cultural Importance of Bihar
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Bihar is one of the oldest continuously inhabited regions in
                the world and holds a place of immense significance in Indian
                and world history. The ancient kingdom of Magadha, with its
                capital at Patliputra (modern-day Patna), was the heart of
                some of India&apos;s greatest empires &mdash; including the
                Mauryan Empire under Chandragupta Maurya and Emperor Ashoka,
                and later the Gupta Empire, often described as the
                &ldquo;Golden Age&rdquo; of India.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Bihar is also the spiritual birthplace of Buddhism and
                Jainism. It was at Bodh Gaya that Siddhartha Gautama attained
                enlightenment and became the Buddha, while Vaishali and
                Pawapuri hold deep significance for Jain tradition. The
                ancient universities of Nalanda and Vikramshila attracted
                scholars from across Asia, making Bihar a global centre of
                learning over a thousand years before modern universities
                existed.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Culturally, Bihar is home to the languages and literary
                traditions of Bhojpuri, Maithili, Magahi and Angika, the
                intricate Madhubani (Mithila) folk paintings, and festivals
                such as Chhath Puja &mdash; one of the most distinctive forms
                of sun worship anywhere in the world. From the flavours of
                litti-chokha and sattu to the warmth of its people, Bihar&apos;s
                heritage continues to shape the identity of millions of
                people across the globe, including our own BJAI community.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/images/culture/gangadip.png"
                  alt="Ganga Aarti, a cultural heritage tradition of Bihar"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Jharkhand */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <Reveal className="lg:order-2">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-saffron">
                Jharkhand
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                The Cultural Importance of Jharkhand
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Jharkhand, meaning &ldquo;the land of forests,&rdquo; was
                formed on 15 November 2000 and is renowned for its rich
                natural landscapes, mineral wealth, and the deep cultural
                traditions of its tribal communities, including the Santhal,
                Munda, Oraon, and Ho peoples. These communities have lived in
                close harmony with nature for centuries, expressed through
                sacred groves (Sarna), forest worship, and a strong oral
                tradition of folklore, music, and dance.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Jharkhand&apos;s cultural calendar is marked by vibrant
                festivals such as Sarhul, which welcomes spring and honours
                the Sal tree, and Karma (Karam) Puja, a harvest festival
                celebrated with the energetic Jhumar and Karma dances. The
                region is also closely associated with Chhau dance, a
                semi-classical dance form recognised by UNESCO, and with the
                legacy of tribal leaders such as Birsa Munda, who remains a
                symbol of courage and identity for the people of Jharkhand.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Beyond its tribal heritage, Jharkhand shares many of the
                broader cultural traditions of the wider Bihar region &mdash;
                including Chhath Puja, Holi, and Diwali &mdash; while bringing
                its own distinct identity, music, and crafts. For BJAI, the
                cultures of Bihar and Jharkhand together form a rich, shared
                heritage that we are proud to celebrate as one community in
                Ireland.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="lg:order-1">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/images/culture/hundru.jpg"
                  alt="Hundru Falls, one of Jharkhand's most iconic natural landmarks"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Festivals & traditions */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Festivals & Traditions"
            title="Celebrations That Bring Us Together"
            subtitle="BJAI celebrates the festivals of Bihar and Jharkhand throughout the year, keeping our traditions alive in Ireland."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {festivals.map((festival, index) => (
              <Reveal key={festival.name} delay={(index % 3) * 0.08}>
                <div className="flex h-full flex-col gap-2 rounded-2xl bg-cream p-6 shadow-sm ring-1 ring-foreground/5">
                  <span className="inline-flex w-fit rounded-full bg-gradient-festive px-3 py-1 text-xs font-semibold text-white">
                    {festival.origin}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    {festival.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {festival.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
