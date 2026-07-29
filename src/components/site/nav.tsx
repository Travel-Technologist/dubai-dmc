import { Link, useLocation } from "@tanstack/react-router";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";
import { navLinks } from "@/lib/site-data";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const solid = scrolled;

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${solid
          ? "py-2 sm:py-3 bg-black/60 backdrop-blur-2xl border-b border-white/10 shadow-2xl"
          : "py-4 sm:py-6 bg-transparent"
          }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
          <Link to="/" className="group flex shrink-0 items-center gap-3">
            <img
              src="/logo.png"
              alt="The Luxe Nomad"
              className="h-16 sm:h-20 lg:h-24 xl:h-28 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              style={{ filter: "drop-shadow(0 2px 12px oklch(0.78 0.11 80 / 0.35))" }}
            />
          </Link>

          <nav className="hidden xl:flex items-center gap-7">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="group relative text-[11px] uppercase tracking-[0.22em] text-foreground/80 hover:text-primary transition-colors"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 xl:gap-5">

            <a
              href="https://wa.me/917383998945"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-2 text-[11px] uppercase tracking-[0.22em] text-primary hover:bg-primary hover:text-background transition-all"
            >
              <FaWhatsapp className="h-5 w-5 shrink-0" />
              <span className="whitespace-nowrap font-medium">
                +91 7383998945
              </span>
            </a>

            <Link
              to="/contact"
              className="hidden xl:inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-2 text-[11px] uppercase tracking-[0.22em] text-primary hover:bg-primary hover:text-background transition-all"
            >
              Plan Journey <ArrowUpRight className="h-3 w-3" />
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="xl:hidden rounded-full border border-border p-2 sm:p-2.5"
            >
              <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <motion.div
        initial={false}
        animate={{ x: open ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 260, damping: 32 }}
        className="fixed inset-0 z-60 xl:hidden"
        style={{ pointerEvents: open ? "auto" : "none" }}
      >
        <div
          className="absolute inset-0 bg-background/95 backdrop-blur-2xl"
          onClick={() => setOpen(false)}
        />
        <aside className="absolute right-0 top-0 h-full w-[92vw] max-w-95 bg-background/95 backdrop-blur-2xl border-l border-border px-8 py-6 flex flex-col overflow-y-auto">
          <div className="flex items-center justify-between mb-10">
            <img src="/logo.png" alt="The Luxe Nomad" className="h-12 w-auto" />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="rounded-full border border-border p-2"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-4">
            {navLinks.map((l, i) => (
              <motion.div
                key={l.to}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: open ? 1 : 0, x: open ? 0 : 30 }}
                transition={{ delay: 0.08 + i * 0.04 }}
              >
                <Link
                  to={l.to}
                  className="block font-display text-2xl sm:text-3xl leading-none hover:text-primary transition-colors"
                  activeProps={{ className: "text-primary" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </nav>
          <div className="mt-auto pt-8 border-t border-border">
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Reach us</p>

            <a href="https://wa.me/917383998945"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center gap-2 text-primary text-sm"
            >
              <FaWhatsapp className="h-5 w-5" />
              <span className="font-medium">+91 7383998945</span>
            </a>

            <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Dubai
            </p>
          </div>
        </aside>
      </motion.div>
    </>
  );
}
