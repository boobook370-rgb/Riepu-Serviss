/*
  DESIGN: Nordic Workshop — Scandinavian Industrial
  Footer: Clean, structured footer with contact info and links
*/

import { Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white/70">
      <div className="container py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-amber rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-sm">RS</span>
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                RIEPU<span className="text-amber">SERVISS</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Profesionāls riepu serviss, riepu maiņa un eļļas maiņa Imantā. Apkalpojam Bolderāju, Iļģuciemu un Imantu.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold mb-4">Pakalpojumi</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#pakalpojumi" className="hover:text-amber transition-colors">
                  Riepu maiņa
                </a>
              </li>
              <li>
                <a href="#pakalpojumi" className="hover:text-amber transition-colors">
                  Riepu remonts
                </a>
              </li>
              <li>
                <a href="#pakalpojumi" className="hover:text-amber transition-colors">
                  Savirzes regulēšana
                </a>
              </li>
              <li>
                <a href="#pakalpojumi" className="hover:text-amber transition-colors">
                  Eļļas maiņa
                </a>
              </li>
              <li>
                <a href="#pakalpojumi" className="hover:text-amber transition-colors">
                  Kravas riepu serviss
                </a>
              </li>
              <li>
                <a href="#pakalpojumi" className="hover:text-amber transition-colors">
                  Disku remonts
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Kontakti</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber shrink-0" />
                <a href="tel:29741779" className="hover:text-amber transition-colors font-medium">
                  29 741 779
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-amber shrink-0" />
                <span>Kleistu iela 41, Rīga</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                <div>
                  <div>Darba dienās: 09:00–19:00</div>
                  <div>Sestdienās: 09:00–17:00</div>
                  <div>Svētdienās: 10:00–16:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <span>© {currentYear} Riepu Serviss "Kleistu". Visas tiesības aizsargātas.</span>
          <span>Kleistu iela 41, Rīga, Latvija</span>
        </div>
      </div>
    </footer>
  );
}
