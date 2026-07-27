import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { PageHero, Reveal } from "@/components/site/primitives";
import { galleryImages, img } from "@/lib/site-data";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — The Luxe Nomad" },
      { name: "description", content: "A visual field notebook of villas, vistas and journeys curated by The Luxe Nomad across six continents." },
      { property: "og:title", content: "Gallery — The Luxe Nomad" },
      { property: "og:description", content: "A visual field notebook of curated journeys." },
    ],
  }),
  component: Page,
});

function Page() {
  const heights = ["aspect-[3/4]", "aspect-[4/5]", "aspect-square", "aspect-[3/4]", "aspect-[4/5]", "aspect-square"];
  return (
    <main>
      <SiteNav />
      <PageHero
        eyebrow="Gallery"
        title={<>A visual <em className="italic text-gold-gradient">field notebook.</em></>}
        subtitle="Moments from journeys curated across six continents — every image, a doorway."
        imageId="/images/destinations/japan.webp"
      />
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 sm:gap-4 [column-fill:balance]">
          {galleryImages.map((id, i) => (
            <Reveal key={id} delay={(i % 4) * 0.06}>
              <div className={`mb-3 sm:mb-4 break-inside-avoid overflow-hidden rounded-sm ${heights[i % heights.length]}`}>
                <img
                  src={img(id)}
                  alt="Curated destination"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.6s] hover:scale-110"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
