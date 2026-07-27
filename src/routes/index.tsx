import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Plane,
  Sparkles,
  Crown,
  Compass,
  ShieldCheck,
  ArrowUpRight,
  Star,
  MapPin,
} from "lucide-react";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { Reveal, SectionHeading } from "@/components/site/primitives";
import { destinationGroups, img } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Luxe Nomad — Asia Pacific's Leading Luxury Vacation Rental Management" },
      {
        name: "description",
        content:
          "Bespoke luxury travel curated across Dubai, Asia Pacific, Europe & beyond. Villas, private jets, cultural immersions and destination management by The Luxe Nomad.",
      },
      { property: "og:title", content: "The Luxe Nomad — Luxury Travel & Villa Management" },
      { property: "og:description", content: "Asia Pacific's leading luxury vacation rental management." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const experiences = [
  { icon: Crown, title: "Private Villas", copy: "Handpicked estates with dedicated concierge, chefs and butlers across 20+ destinations." },
  { icon: Plane, title: "Private Aviation", copy: "Seamless jet charters, helicopter transfers and yacht rendezvous — arranged in hours." },
  { icon: Sparkles, title: "Curated Journeys", copy: "Bespoke itineraries designed by destination specialists who live where you travel." },
  { icon: Compass, title: "Cultural Access", copy: "After-hours museums, royal audiences and Michelin tables — beyond the guidebook." },
];

const stats = [
  { k: "18+", v: "Years Curating" },
  { k: "40", v: "Destinations" },
  { k: "1,200", v: "Private Villas" },
  { k: "97%", v: "Return Guests" },
];

const testimonials = [
  { quote: "Every detail arranged before we asked. From the private terminal in Dubai to the villa in Bali — flawless.", author: "Amara S.", role: "Family of six · Southeast Asia" },
  { quote: "The Luxe Nomad turned a corporate retreat into something our board still talks about a year later.", author: "Rohan D.", role: "CEO, Financial Services" },
  { quote: "Honeymoon in the Maldives followed by Kyoto in cherry blossom. Poetry in logistics.", author: "Isabelle & Marc", role: "Newlyweds, Paris" },
];

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  return (
    <section ref={ref} className="relative min-h-svh w-full overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <div
          className="absolute inset-0 animate-ken-burns bg-cover bg-center"
          style={{ backgroundImage: `url(/images/home/hero.webp)` }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/70 via-background/30 to-background" />
        <div className="absolute inset-0 bg-linear-to-r from-background/60 via-transparent to-background/40" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        
        className="relative z-10 flex min-h-svh flex-col justify-center pt-35 sm:pt-45 lg:pt-45 pb-12"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(2.75rem,8vw,8rem)] leading-[0.95] tracking-tight"
          >
            The world, <br className="hidden sm:block" />
            <span className="italic shimmer-text">quietly rearranged</span>{" "}
            <br className="hidden sm:block" />
            around you.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.9 }}
            className="mt-6 sm:mt-10 max-w-2xl text-sm sm:text-base md:text-lg text-foreground/75 leading-relaxed"
          >
            Private villas, curated journeys and destination management from Dubai to
            Bali — designed by specialists who live where you travel.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.9 }}
            className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4"
          >
            <Link
              to="/destinations"
              className="group inline-flex items-center gap-2 sm:gap-3 rounded-full bg-primary px-6 sm:px-8 py-3 sm:py-4 text-[11px] sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.2em] text-primary-foreground hover:shadow-gold transition-all"
            >
              Explore Destinations
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 sm:gap-3 rounded-full border border-primary/40 px-6 sm:px-8 py-3 sm:py-4 text-[11px] sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.2em] text-primary hover:bg-primary/10 transition-all"
            >
              Speak with a Curator
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function Marquee() {
  const items = ["Dubai", "Maldives", "Bali", "Kyoto", "Santorini", "Swiss Alps", "Marrakech", "Phuket", "Paris", "Cape Town"];
  const row = [...items, ...items];
  return (
    <section className="relative border-y border-border py-6 sm:py-8 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee w-max">
        {row.map((c, i) => (
          <span key={i} className="mx-6 sm:mx-10 font-display text-2xl sm:text-4xl md:text-5xl text-foreground/40">
            {c} <span className="text-primary mx-2 sm:mx-4">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-32">
      <Reveal>
        <SectionHeading
          eyebrow="Why The Luxe Nomad"
          title={<>Travel, <em className="italic text-gold-gradient">reimagined</em> as a private affair.</>}
          tail="Eighteen years, forty destinations, one unwavering standard. We craft journeys with the discretion of a family office and the taste of an atelier."
        />
      </Reveal>
      <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {experiences.map((e, i) => (
          <Reveal key={e.title} delay={i * 0.08}>
            <div className="group relative h-full glass rounded-sm p-6 sm:p-8 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1">
              <e.icon className="h-7 w-7 sm:h-8 sm:w-8 text-primary mb-4 sm:mb-6 transition-transform duration-500 group-hover:scale-110" />
              <h3 className="font-display text-xl sm:text-2xl mb-2 sm:mb-3">{e.title}</h3>
              <p className="text-sm leading-relaxed text-foreground/70">{e.copy}</p>
              <div className="mt-5 gold-hairline opacity-40 group-hover:opacity-100 transition-opacity" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function FeaturedDestinations() {

  const featured = destinationGroups
    .flatMap((g) => g.countries)
    .slice(0, 8);

  return (

    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-32">

      <Reveal>

        <SectionHeading
          eyebrow="Destinations"
          title={
            <>
              Forty corners of the world,
              <em className="italic text-gold-gradient">
                {" "}known personally.
              </em>
            </>
          }
          tail="Every property inspected. Every guide vetted. Every table booked by someone who has sat at it."
        />

      </Reveal>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">

        {featured.map((d, i) => (

          <Reveal key={d.id} delay={(i % 4) * 0.08}>

            <Link
              to="/destinations"
              className="group relative block overflow-hidden rounded-sm aspect-3/4"
            >

              <img
                src={img(d.image)}
                alt={d.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.6s] group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-6">

                <div className="flex items-end justify-between gap-2">

                  <h3 className="font-display text-xl sm:text-2xl md:text-3xl leading-none truncate">
                    {d.name}
                  </h3>

                  <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all" />

                </div>

                <div className="mt-3 h-px w-0 bg-primary group-hover:w-full transition-all duration-700" />

              </div>

            </Link>

          </Reveal>

        ))}

      </div>

      <div className="mt-10 sm:mt-12 text-center">

        <Link
          to="/destinations"
          className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.2em] text-primary hover:gap-3 transition-all"
        >
          View all destinations
          <ArrowUpRight className="h-4 w-4" />
        </Link>

      </div>

    </section>

  );
}

function Split() {
  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
        <Reveal>
          <div className="relative aspect-4/5 overflow-hidden rounded-sm">
            <img
              src={img("/images/home/Luxury-villa.webp")}
              alt="Luxury villa"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-primary/20" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mb-3 sm:mb-4 text-[10px] sm:text-xs uppercase tracking-[0.4em] text-primary">✦ The Studio</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.95] mb-6 sm:mb-8">
            A private studio for <em className="italic text-gold-gradient">discerning</em> travellers.
          </h2>
          <p className="text-foreground/75 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
            Headquartered in Dubai with curators in Singapore, Bali and beyond, The Luxe Nomad
            is a destination management company for those who prefer their travel handled — completely.
          </p>
          <p className="text-foreground/75 leading-relaxed mb-8 sm:mb-10 text-sm sm:text-base">
            We do not sell packages. We author journeys. Each one begins with a conversation, not a catalogue.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              { icon: ShieldCheck, t: "24/7 Concierge", c: "One number, every timezone." },
              { icon: Crown, t: "Vetted Estates", c: "Every villa personally inspected." },
              { icon: Compass, t: "Local Curators", c: "Specialists on the ground." },
              { icon: Sparkles, t: "Signature Access", c: "Doors that don't open publicly." },
            ].map((f) => (
              <div key={f.t} className="flex gap-3">
                <f.icon className="h-5 w-5 text-primary shrink-0 mt-1" />
                <div className="min-w-0">
                  <p className="font-display text-lg">{f.t}</p>
                  <p className="text-sm text-foreground/60">{f.c}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="relative border-y border-border py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
        {stats.map((s, i) => (
          <Reveal key={s.v} delay={i * 0.08}>
            <div className="text-center md:text-left">
              <p className="font-display text-5xl sm:text-6xl md:text-7xl text-gold-gradient leading-none">{s.k}</p>
              <p className="mt-2 sm:mt-3 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-foreground/60">{s.v}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="relative py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="From Our Guests"
            title={<>Whispered <em className="italic text-gold-gradient">across drawing rooms.</em></>}
          />
        </Reveal>
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 0.1}>
              <figure className="glass rounded-sm p-6 sm:p-8 h-full flex flex-col">
                <div className="flex gap-1 mb-5 sm:mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="font-display text-lg sm:text-xl leading-snug mb-5 sm:mb-6 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="gold-hairline mb-3 sm:mb-4" />
                <figcaption>
                  <p className="text-sm font-medium">{t.author}</p>
                  <p className="text-xs text-foreground/60 mt-1">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-sm">
            <img
              src={img("/images/home/hero.webp")}
              alt="Dubai skyline"
              className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
            />
            <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
            <div className="relative px-6 sm:px-12 py-16 sm:py-24 md:py-32 text-center">
              <p className="mb-4 sm:mb-6 text-[10px] sm:text-xs uppercase tracking-[0.4em] text-primary">
                ✦ Begin the Conversation
              </p>
              <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.95] max-w-3xl mx-auto">
                Tell us where you dream of being,{" "}
                <em className="italic text-gold-gradient">we will handle the rest.</em>
              </h2>
              <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm uppercase tracking-[0.2em] text-primary-foreground hover:shadow-gold transition-all"
                >
                  Start Planning
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
              <div className="mt-10 sm:mt-12 flex flex-wrap justify-center gap-4 sm:gap-8 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-foreground/60">
                <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Dubai</span>
                <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Singapore</span>
                <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Bali</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Home() {
  return (
    <main className="relative">
      <SiteNav />
      <Hero />
      <Marquee />
      <WhyUs />
      <FeaturedDestinations />
      <Split />
      <Stats />
      <Testimonials />
      <CTA />
      <SiteFooter />
    </main>
  );
}
