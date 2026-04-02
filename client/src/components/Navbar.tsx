/*
  DESIGN: Nordic Workshop — Scandinavian Industrial
  Navbar: Clean, functional top bar with brand + nav links + CTA
  Sticky on scroll with backdrop blur
*/

import { useState, useEffect } from "react";
import { Phone, Menu, X, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Pakalpojumi", href: "#pakalpojumi" },
  { label: "Cenas", href: "#cenas" },
  { label: "Par mums", href: "#par-mums" },
  { label: "Kontakti", href: "#kontakti" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top info bar */}
      <div className="bg-charcoal text-white/80 text-sm hidden md:block">
        <div className="container flex items-center justify-between py-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber" />
              Kleistu iela 41, Rīga
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber" />
              Darba dienās 09:00–19:00
            </span>
          </div>
          <a
            href="tel:29741779"
            className="flex items-center gap-1.5 text-amber hover:text-amber-light transition-colors font-medium"
          >
            <Phone className="w-3.5 h-3.5" />
            29 741 779
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="container flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-amber rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-lg">RS</span>
            </div>
            <div className="leading-tight">
              <span className="text-charcoal font-bold text-lg tracking-tight block">
                RIEPU<span className="text-amber">SERVISS</span>
              </span>
              <span className="text-slate-text text-[11px] tracking-wider uppercase hidden sm:block">
                Kleistu iela
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-charcoal-light hover:text-amber transition-colors font-medium text-[15px] relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-amber after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              className="bg-amber hover:bg-amber-dark text-white font-semibold px-6 shadow-lg shadow-amber/20 transition-all hover:shadow-xl hover:shadow-amber/30"
            >
              <a href="tel:29741779">
                <Phone className="w-4 h-4 mr-2" />
                Zvanīt tagad
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-charcoal"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-border animate-in slide-in-from-top-2 duration-200">
            <div className="container py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 px-4 text-charcoal font-medium hover:bg-warm-gray rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-border mt-2">
                <div className="flex items-center gap-2 px-4 py-2 text-sm text-slate-text">
                  <MapPin className="w-4 h-4 text-amber" />
                  Kleistu iela 41, Rīga
                </div>
                <div className="flex items-center gap-2 px-4 py-2 text-sm text-slate-text">
                  <Clock className="w-4 h-4 text-amber" />
                  Darba dienās 09:00–19:00
                </div>
              </div>
              <Button
                asChild
                className="w-full bg-amber hover:bg-amber-dark text-white font-semibold mt-3 shadow-lg shadow-amber/20"
              >
                <a href="tel:29741779">
                  <Phone className="w-4 h-4 mr-2" />
                  Zvanīt: 29 741 779
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
