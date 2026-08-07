import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import logoAsset from "@/assets/luxe-nomad-logo.webp.asset.json";
import { navLinks } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <img
              src="/logo.webp"
              alt="The Luxe Nomad"
              className="h-14 sm:h-16 w-auto animate-float-slow"
              style={{ filter: "drop-shadow(0 4px 20px oklch(0.78 0.11 80 / 0.3))" }}
            />

            <div className="mt-6 flex gap-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full border border-border p-2.5 text-foreground/70 hover:border-primary hover:text-primary transition-all"
              >
                <FaInstagram className="h-4 w-4" />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/971505403871"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="rounded-full border border-border p-2.5 text-foreground/70 hover:border-primary hover:text-primary transition-all"
              >
                <FaWhatsapp className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-5">Explore</p>
            <ul className="space-y-3 text-sm text-foreground/70">
              {navLinks.slice(1).map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-5">Contact</p>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li className="flex items-start gap-2 break-all">
                <Mail className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>Luxenomadtravels@gmail.com </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary shrink-0" /> +971 505403871
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" /> 202 + 201, Insurance Building Plot No. 57-0, AL Rega, Dubai, UAE
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-foreground/50">
          <p>© {new Date().getFullYear()} The Luxe Nomad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
