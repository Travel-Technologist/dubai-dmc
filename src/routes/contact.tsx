import { createFileRoute } from "@tanstack/react-router";
import { API_URL } from "@/config/api";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
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
  { city: "Dubai", addr: "202 + 201, Insurance Building Plot No. 57-0, AL Rega, Dubai, UAE" },
];

function Page() {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    destination: "",
    travelDate: "",
    travellers: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert("✅ Thank you! Your enquiry has been sent successfully.");

        setFormData({
          fullName: "",
          email: "",
          phone: "",
          destination: "",
          travelDate: "",
          travellers: "",
          message: "",
        });
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error(error);

      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
                      href="mailto:Luxenomadtravels@gmail.com   "
                      className="flex items-start gap-4 text-foreground/80 hover:text-primary transition-colors"
                    >
                      <Mail className="h-5 w-5 text-primary shrink-0 mt-1" />

                      <span className="wrap-break-word">
                        Luxenomadtravels@gmail.com 
                      </span>

                    </a>

                    <a
                      href="tel:+971 505403871"
                      className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors"
                    >
                      <Phone className="h-5 w-5 text-primary shrink-0" />

                      <span>+971 505403871</span>

                    </a>

                    <div className="flex items-start gap-4 text-foreground/80">

                      <Clock className="h-5 w-5 text-primary shrink-0 mt-1" />

                      <span>
                        24/7 Support
                        <br />
                        Immediate Response
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
                onSubmit={handleSubmit}
              >

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  <Field
                    label="Full name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                  />

                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  <Field
                    label="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />

                  <Field
                    label="Destination in mind"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                  />

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  <Field
                    label="Travel dates"
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleChange}
                  />

                  <Field
                    label="Travellers"
                    name="travellers"
                    value={formData.travellers}
                    onChange={handleChange}
                  />

                </div>

                <div>

                  <label className="block text-[10px] uppercase tracking-[0.3em] text-primary mb-3">
                    Tell us about your journey
                  </label>

                  <textarea
                    rows={7}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full min-h-45 rounded-xl border border-border bg-transparent px-5 py-4 text-base outline-none focus:border-primary resize-none"
                    placeholder="Tell us about your journey..."
                  />

                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-auto min-w-60 h-14 rounded-full bg-primary px-10 font-semibold uppercase tracking-[0.2em] text-background transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send to a Curator"}
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

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-[10px] uppercase tracking-[0.3em] text-primary mb-2"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
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
