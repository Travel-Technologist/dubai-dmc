import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { PageHero, Reveal, SectionHeading } from "@/components/site/primitives";
import { destinationGroups, img } from "@/lib/site-data";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Destinations — The Luxe Nomad" },
      { name: "description", content: "Forty destinations across the UAE, Asia, Europe, the USA, Africa and Oceania — curated by specialists on the ground." },
      { property: "og:title", content: "Destinations — The Luxe Nomad" },
      { property: "og:description", content: "Forty destinations across six continents, curated by local specialists." },
    ],
  }),
  component: Page,
});

function Page() {
  const [selectedRegion, setSelectedRegion] = useState("All");

  const [selectedCountry, setSelectedCountry] =
    useState<typeof destinationGroups[number]["countries"][number] | null>(null);

  const [selectedPlace, setSelectedPlace] = useState<{
    name: string;
    nights: string;
    image: string;
  } | null>(null);

  const regions = [
    "All",
    ...destinationGroups.map((group) => group.region),
  ];

  const countries =
    selectedRegion === "All"
      ? destinationGroups.flatMap((group) => group.countries)
      : destinationGroups.find(
        (group) => group.region === selectedRegion
      )?.countries ?? [];

  const displayCountries =
    selectedCountry ? [selectedCountry] : countries;

  return (
    <main>
      <SiteNav />
      <PageHero
        eyebrow="Destinations"
        title={<>Six continents, <em className="italic text-gold-gradient">one unwavering standard.</em></>}
        subtitle="From the UAE to Southeast Asia, Europe to the USA — every destination we curate is known personally by a specialist who lives it daily."
        imageId="/images/home/destination.webp"
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12">

        <Reveal>

          <SectionHeading
            eyebrow="Luxury Collection"
            title={
              <>
                Explore Our{" "}
                <span className="italic text-gold-gradient">
                  Destinations
                </span>
              </>
            }
          />

          <p className="mt-6 max-w-3xl text-muted-foreground">
            Choose a region and country to discover our handcrafted luxury journeys.
          </p>

        </Reveal>

      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-10">

        <div className="flex gap-3 overflow-x-auto pb-3">

          {regions.map((region) => (

            <button
              key={region}
              onClick={() => {
                setSelectedRegion(region);
                setSelectedCountry(null);
              }}
              className={`whitespace-nowrap rounded-full border px-5 py-2 transition-all duration-300 ${selectedRegion === region
                ? "bg-primary text-background"
                : "border-primary text-primary hover:bg-primary/10"
                }`}
            >
              {region}
            </button>

          ))}

        </div>

      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-16">

        <div className="flex gap-3 overflow-x-auto pb-3">

          {countries.map((country) => (

            <button
              key={country.id}
              onClick={() => setSelectedCountry(country)}
              className={`whitespace-nowrap rounded-full border px-5 py-2 transition-all duration-300 ${selectedCountry?.id === country.id
                ? "bg-primary text-background"
                : "border-border hover:border-primary"
                }`}
            >
              {country.name}
            </button>

          ))}

        </div>

      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-24">

        <div className="space-y-20">

          {displayCountries.map((country) => (

            <div key={country.id}>

              <div className="mb-10">

                <p className="uppercase tracking-[0.35em] text-primary text-xs">

                  Luxury Packages

                </p>

                <h2 className="font-display text-5xl mt-2">

                  {country.name}

                </h2>

                <p className="mt-4 text-muted-foreground max-w-3xl">

                  {country.description}

                </p>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 gap-8">

                {country.places.map((place) => (

                  <div
                    key={place.name}
                    className="group isolate overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-primary hover:shadow-2xl"
                  >

                    <div className="relative h-80 overflow-hidden rounded-t-2xl">

                      <div className="h-full w-full transition-transform duration-700 group-hover:scale-[1.03]">
                        <img
                          src={img(place.image)}
                          alt={place.name}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

                      <div className="absolute left-5 top-5">

                        <span className="rounded-full bg-black/60 px-4 py-2 text-xs uppercase tracking-[0.25em] text-primary backdrop-blur">

                          Luxury Escape

                        </span>

                      </div>

                      <div className="absolute bottom-5 left-5 right-5">

                        <h3 className="font-display text-3xl text-white">

                          {place.name}

                        </h3>

                        <p className="mt-2 text-white/80">

                          {place.nights}

                        </p>

                      </div>

                    </div>

                    <div className="space-y-5 p-6">

                      <ul className="space-y-2 text-sm text-muted-foreground">

                        <li>✓ Luxury Hotels</li>

                        <li>✓ Sightseeing Included</li>

                        <li>✓ Private Transfers</li>

                      </ul>

                      <div className="flex gap-3">

                        <Link
                          to="/contact"
                          className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 font-semibold text-background transition-all hover:opacity-90"
                        >
                          Book Now
                        </Link>

                        <button
                          onClick={() => setSelectedPlace(place)}
                          className="flex-1 rounded-full border border-primary py-3 text-primary transition hover:bg-primary hover:text-background"
                        >
                          Details
                        </button>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

      </section>

      <SiteFooter />

      {selectedPlace && (

        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/80 p-4 md:p-8"
          onClick={() => setSelectedPlace(null)}
        >

          <div
            className="relative mx-auto my-10 w-full max-w-5xl overflow-hidden rounded-3xl bg-card"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              onClick={() => setSelectedPlace(null)}
              className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-xl text-white transition hover:bg-primary hover:text-black"
            >
              ✕
            </button>

            <img
              src={img(selectedPlace.image)}
              alt={selectedPlace.name}
              className="h-56 sm:h-72 md:h-96 lg:h-105 w-full object-cover"
            />

            <div className="p-5 sm:p-8 lg:p-10">

              <p className="uppercase tracking-[0.35em] text-primary text-xs">

                United Arab Emirates

              </p>

              <h2 className="mt-3 font-display text-5xl">

                {selectedPlace.name}

              </h2>

              <p className="mt-5 text-muted-foreground">

                Duration :
                {" "}
                {selectedPlace.nights}

              </p>

              <p className="mt-6 leading-8 text-muted-foreground">

                Experience luxury holidays in {selectedPlace.name}. Our premium
                itinerary includes luxury accommodation, sightseeing, airport
                transfers, curated experiences and personalized assistance
                throughout your journey.

              </p>

              <div className="mt-10 grid gap-4 md:grid-cols-2">

                <div className="rounded-xl border border-border p-5">

                  ✓ Luxury Hotels

                </div>

                <div className="rounded-xl border border-border p-5">

                  ✓ Private Transfers

                </div>

                <div className="rounded-xl border border-border p-5">

                  ✓ Guided Sightseeing

                </div>

                <div className="rounded-xl border border-border p-5">

                  ✓ 24×7 Travel Support

                </div>

              </div>

              <div className="mt-10 flex gap-4">

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 font-semibold text-background transition-all hover:opacity-90"
                >
                  Book Now
                </Link>

                <button
                  onClick={() => setSelectedPlace(null)}
                  className="rounded-full border border-primary px-8 py-4 text-primary"
                >
                  Close
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </main >
  );
}
