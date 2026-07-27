import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { PageHero, Reveal, SectionHeading } from "@/components/site/primitives";
import { img } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Luxe Nomad" },
      { name: "description", content: "The Luxe Nomad is Asia Pacific's leading luxury vacation rental management, headquartered in Dubai with curators across the region." },
      { property: "og:title", content: "About — The Luxe Nomad" },
      { property: "og:description", content: "Eighteen years curating private journeys across Asia Pacific and beyond." },
    ],
  }),
  component: Page,
});

const milestones = [
  { y: "2007", t: "Founded in Bali as a private villa curator." },
  { y: "2013", t: "Regional office opened in Singapore." },
  { y: "2017", t: "Dubai headquarters established." },
  { y: "2021", t: "1,000th vetted villa added to portfolio." },
  { y: "2026", t: "Forty destinations under active curation." },
];

const values = [
  { t: "Discretion", c: "Every conversation, every itinerary — handled with the confidentiality of a family office." },
  { t: "Craft", c: "We author, we do not assemble. Each journey is designed line by line." },
  { t: "Proximity", c: "Curators who live where you travel. No middlemen, no scripts." },
  { t: "Longevity", c: "97% of our guests return. We build careers around clients, not seasons." },
];

function Page() {
  return (
    <main>
      <SiteNav />
      <PageHero
        eyebrow="About"
        title={<>Eighteen years, <em className="italic text-gold-gradient">one standard.</em></>}
        subtitle="The Luxe Nomad began in a Bali beach house in 2007. Nearly two decades later, we curate journeys across forty destinations for families, founders and heads of state."
        imageId="/images/home/about-1.webp"
      />

      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-32 grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
        <Reveal>
          <div className="relative aspect-4/5 overflow-hidden rounded-sm">
            <img src={img("/images/home/hero.webp")} alt="Founder" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mb-3 text-[10px] sm:text-xs uppercase tracking-[0.4em] text-primary">✦ Our Story</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.95] mb-6">
            A quiet <em className="italic text-gold-gradient">rebellion</em> against packaged travel.
          </h2>
          <p className="text-foreground/75 leading-relaxed mb-4 text-sm sm:text-base">
            We were founded on a simple idea — that the most exceptional places are found through people,
            not portals. Our specialists live where you travel: they know the estate owners, the pilots,
            the private guides, the maître d' who saves the corner table.
          </p>
          <p className="text-foreground/75 leading-relaxed text-sm sm:text-base">
            Today, from Dubai to Bali, we curate journeys for those who prefer their travel authored,
            not assembled.
          </p>
        </Reveal>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-32">
        <Reveal>
          <SectionHeading eyebrow="Values" title={<>Four <em className="italic text-gold-gradient">non-negotiables.</em></>} />
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {values.map((v, i) => (
            <Reveal key={v.t} delay={i * 0.08}>
              <div className="glass rounded-sm p-6 sm:p-8 h-full">
                <p className="font-mono text-xs text-primary mb-4">0{i + 1}</p>
                <h3 className="font-display text-2xl mb-3">{v.t}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{v.c}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-4xl px-4 sm:px-6 py-20 sm:py-32">
        <Reveal>
          <SectionHeading eyebrow="Timeline" title={<>Milestones, <em className="italic text-gold-gradient">softly marked.</em></>} />
        </Reveal>
        <div className="border-l border-border pl-6 sm:pl-8 space-y-8 sm:space-y-10">
          {milestones.map((m, i) => (
            <Reveal key={m.y} delay={i * 0.06}>
              <div className="relative">
                <div className="absolute -left-8.25 sm:-left-10.25 top-2 h-3 w-3 rounded-full bg-primary shadow-gold" />
                <p className="font-display text-3xl sm:text-4xl text-gold-gradient">{m.y}</p>
                <p className="mt-2 text-sm sm:text-base text-foreground/75">{m.t}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
