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
    <section className="relative flex min-h-[70svh] sm:min-h-[80svh] lg:min-h-screen w-full overflow-hidden items-center">
      <div
        className="absolute inset-0 animate-ken-burns bg-cover bg-center"
        style={{ backgroundImage: `url(${img(imageId)})` }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-background/70 via-background/40 to-background" />
      <div className="relative z-10 mx-auto w-full max-w-360 px-5 sm:px-6
md:px-8
lg:px-10
xl:px-16

pt-24
sm:pt-28
md:pt-32
lg:pt-36

pb-16
md:pb-20
lg:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-5 text-xs
sm:text-sm

tracking-[0.25em]
sm:tracking-[0.35em] uppercase text-primary"
        >
          ✦ {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="font-display text-4xl
sm:text-5xl
md:text-6xl
lg:text-7xl
xl:text-8xl

leading-[0.92]

max-w-4xl
lg:max-w-5xl tracking-tight"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="mt-6 max-w-2xl
lg:max-w-2xl

text-base
md:text-lg
xl:text-xl

leading-8 text-foreground/75"
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
    <div className="mb-10
sm:mb-12
lg:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
      <div>
        <p className="mb-3 sm:mb-4 text-[10px] sm:text-xs uppercase tracking-[0.35em] sm:tracking-[0.4em] text-primary">
          ✦ {eyebrow}
        </p>
        <h2 className="font-display text-3xl
sm:text-4xl
md:text-5xl
lg:text-6xl
xl:text-7xl leading-[0.95] max-w-3xl">
          {title}
        </h2>
      </div>
      {tail && (
        <p className="max-w-md

text-base

leading-8 sm:text-base text-foreground/70">
          {tail}
        </p>
      )}
    </div>
  );
}
