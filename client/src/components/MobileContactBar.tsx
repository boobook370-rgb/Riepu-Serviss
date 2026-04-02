/*
  DESIGN: Nordic Workshop — Scandinavian Industrial
  Mobile Contact Bar: Sticky bottom bar visible only on mobile
  One-tap call and directions
*/

import { Phone, MapPin } from "lucide-react";

export default function MobileContactBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-charcoal/95 backdrop-blur-md border-t border-white/10 safe-area-bottom">
      <div className="grid grid-cols-2 divide-x divide-white/10">
        <a
          href="tel:29741779"
          className="flex items-center justify-center gap-2 py-3.5 text-white font-semibold text-sm active:bg-white/10 transition-colors"
        >
          <Phone className="w-4 h-4 text-amber" />
          Zvanīt
        </a>
        <a
          href="https://maps.google.com/?q=Kleistu+iela+41+Riga+Latvia"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3.5 text-white font-semibold text-sm active:bg-white/10 transition-colors"
        >
          <MapPin className="w-4 h-4 text-amber" />
          Kā nokļūt
        </a>
      </div>
    </div>
  );
}
