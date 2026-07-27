import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { PageHero, Reveal } from "@/components/site/primitives";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — The Luxe Nomad" },
      { name: "description", content: "Speak with a curator. The Luxe Nomad concierge answers within four hours, in every timezone." },
      { property: "og:title", content: "Contact — The Luxe Nomad" },
      { property: "og:description", content: "Speak with a curator. Concierge answers within four hours." },
    ],
  }),
  component: Page,
});

const offices = [
  { city: "Dubai", addr: "DIFC, Gate Village 4, Level 3", tel: "+971 4 000 0000" },
  { city: "Singapore", addr: "One Raffles Quay, North Tower", tel: "+65 6000 0000" },
  { city: "Bali", addr: "Seminyak · By appointment", tel: "+62 361 000 000" },
];

function Page() {
  return (
    <main>
      <SiteNav />
      <PageHero
        eyebrow="Contact"
        title={<>Tell us where you <em className="italic text-gold-gradient">dream of being.</em></>}
        subtitle="Every journey begins with a conversation, not a form field. Share a sketch of what you have in mind — we'll take it from there."
        imageId="/images/home/contact.webp"
      />
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20 items-start">

  {/* LEFT SIDE */}

  <div className="lg:col-span-4">

    <Reveal>

      <div className="space-y-10 lg:sticky lg:top-28 max-w-sm">

        <div>

          <p className="text-[10px] uppercase tracking-[0.3em] text-primary mb-3">
            Direct
          </p>

          <div className="space-y-4 text-base">

            <a
              href="mailto:hello@theluxenomad.com"
              className="flex items-start gap-4 text-foreground/80 hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5 text-primary shrink-0 mt-1" />

              <span className="wrap-break-word">
                hello@theluxenomad.com
              </span>

            </a>

            <a
              href="tel:+97140000000"
              className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors"
            >
              <Phone className="h-5 w-5 text-primary shrink-0" />

              <span>+971 4 000 0000</span>

            </a>

            <div className="flex items-start gap-4 text-foreground/80">

              <Clock className="h-5 w-5 text-primary shrink-0 mt-1" />

              <span>
                24/7 Concierge
                <br />
                Every Timezone
              </span>

            </div>

          </div>

        </div>

        <div className="space-y-8">

          <p className="text-[10px] uppercase tracking-[0.3em] text-primary">
            Studios
          </p>

          {offices.map((o) => (

            <div
              key={o.city}
              className="pb-6 border-b border-border last:border-0"
            >

              <h3 className="font-display text-3xl">
                {o.city}
              </h3>

              <div className="mt-3 flex items-start gap-3 text-foreground/60">

                <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />

                <span>{o.addr}</span>

              </div>

              <div className="mt-2 flex items-center gap-3 text-foreground/60">

                <Phone className="h-5 w-5 text-primary shrink-0" />

                <span>{o.tel}</span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </Reveal>

  </div>

  {/* RIGHT SIDE */}

  <div className="lg:col-span-8">

    <Reveal delay={0.1}>

      <form
        className="glass w-full rounded-3xl border border-border p-8 md:p-10 xl:p-14 space-y-8"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Thank you. A curator will be in touch within four hours.");
        }}
      >

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <Field label="Full name" name="name" />

          <Field label="Email" name="email" type="email" />

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <Field label="Phone" name="phone" />

          <Field label="Destination in mind" name="destination" />

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <Field label="Travel dates" name="dates" />

          <Field label="Travellers" name="travellers" />

        </div>

        <div>

          <label className="block text-[10px] uppercase tracking-[0.3em] text-primary mb-3">
            Tell us about your journey
          </label>

          <textarea
            rows={7}
            className="w-full min-h-45 rounded-xl border border-border bg-transparent px-5 py-4 text-base outline-none focus:border-primary resize-none"
            placeholder="Tell us about your journey..."
          />

        </div>

        <button
          type="submit"
          className="w-full md:w-auto min-w-60 h-14 rounded-full bg-primary px-10 font-semibold uppercase tracking-[0.2em] text-background transition-all duration-300 hover:scale-105"
        >
          Send to a Curator
        </button>

      </form>

    </Reveal>

  </div>

</div>
      </section>
      <SiteFooter />
    </main>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-[10px] uppercase tracking-[0.3em] text-primary mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="w-full
h-14
rounded-xl
border
border-border
bg-transparent
px-5
text-base
focus:border-primary
outline-none
transition-all"
      />
    </div>
  );
}
