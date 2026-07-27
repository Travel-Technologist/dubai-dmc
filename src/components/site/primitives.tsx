import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { img } from "@/lib/site-data";

export function Reveal({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  imageId,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  imageId: string;
}) {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-start">
      <div
        className="absolute inset-0 animate-ken-burns bg-cover bg-center"
        style={{ backgroundImage: `url(${img(imageId)})` }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-background/70 via-background/40 to-background" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 pt-24 sm:pt-28 lg:pt-32 pb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-5 text-[10px] sm:text-xs uppercase tracking-[0.35em] sm:tracking-[0.4em] text-primary"
        >
          ✦ {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="font-display text-[clamp(2.5rem,7vw,6.5rem)] leading-[0.95] tracking-tight max-w-5xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-foreground/75 leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  tail,
}: {
  eyebrow: string;
  title: ReactNode;
  tail?: string;
}) {
  return (
    <div className="mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
      <div>
        <p className="mb-3 sm:mb-4 text-[10px] sm:text-xs uppercase tracking-[0.35em] sm:tracking-[0.4em] text-primary">
          ✦ {eyebrow}
        </p>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] max-w-3xl">
          {title}
        </h2>
      </div>
      {tail && (
        <p className="max-w-sm text-sm sm:text-base text-foreground/70 leading-relaxed">
          {tail}
        </p>
      )}
    </div>
  );
}
