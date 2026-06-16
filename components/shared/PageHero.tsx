interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-deepgreen via-royalblue to-maroon py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -top-10 -left-10 h-72 w-72 rounded-full bg-saffron blur-3xl" />
        <div className="absolute -bottom-16 right-0 h-80 w-80 rounded-full bg-gold blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-base text-cream/90 sm:text-lg">
            {subtitle}
          </p>
        )}
        <div className="mx-auto mt-5 h-1.5 w-24 rounded-full bg-gradient-festive" />
      </div>
    </section>
  );
}
