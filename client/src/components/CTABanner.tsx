/*
  DESIGN: Nordic Workshop — Scandinavian Industrial
  CTA Banner: Full-width amber/orange section with strong call-to-action
*/

import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTABanner() {
  return (
    <section className="relative py-16 md:py-20 bg-amber overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
          Nepieciešama riepu maiņa?
        </h2>
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Zvaniet mums jau tagad vai brauciet klātienē — strādājam arī sestdienās un svētdienās!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-charcoal hover:bg-charcoal-light text-white font-bold text-base px-8 h-13 shadow-xl transition-all hover:scale-[1.02]"
          >
            <a href="tel:29741779">
              <Phone className="w-5 h-5 mr-2" />
              Zvanīt: 29 741 779
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/40 text-white hover:bg-white/15 font-semibold text-base px-8 h-13 bg-white/10"
          >
            <a
              href="https://maps.google.com/?q=Kleistu+iela+41+Riga+Latvia"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kā nokļūt
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
