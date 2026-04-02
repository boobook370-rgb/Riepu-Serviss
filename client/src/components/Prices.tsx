/*
  DESIGN: Nordic Workshop — Scandinavian Industrial
  Prices section: Quick pricing overview to boost conversion
  Shows key starting prices in a clean, scannable format
*/

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const prices = [
  {
    service: "Riepu maiņa (vieglie auto)",
    price: "30",
    unit: "EUR",
    note: "no",
  },
  {
    service: "Riepu balansēšana",
    price: "—",
    unit: "",
    note: "iekļauts",
  },
  {
    service: "Savirzes regulēšana",
    price: "—",
    unit: "",
    note: "zvanīt",
  },
  {
    service: "Eļļas maiņa",
    price: "—",
    unit: "",
    note: "zvanīt",
  },
];

export default function Prices() {
  return (
    <section id="cenas" className="py-16 md:py-20 bg-warm-gray">
      <div className="container">
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          {/* Left: pricing info */}
          <div className="lg:col-span-3">
            <span className="text-amber font-semibold text-sm uppercase tracking-widest mb-3 block">
              Cenas
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-charcoal tracking-tight mb-4">
              Adekvātas cenas,{" "}
              <span className="text-amber">augsta kvalitāte</span>
            </h2>
            <p className="text-slate-text text-lg leading-relaxed mb-8">
              Piedāvājam konkurētspējīgas cenas ar profesionālu servisu. Precīzas cenas atkarīgas no riepu izmēra un darba apjoma — zvaniet, lai uzzinātu vairāk.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" as const }}
              className="bg-white rounded-xl border border-border overflow-hidden"
            >
              <div className="divide-y divide-border">
                {prices.map((item) => (
                  <div
                    key={item.service}
                    className="flex items-center justify-between px-6 py-4 hover:bg-warm-gray/50 transition-colors"
                  >
                    <span className="text-charcoal font-medium">{item.service}</span>
                    <div className="flex items-baseline gap-1">
                      {item.note === "no" && (
                        <span className="text-xs text-slate-text mr-1">no</span>
                      )}
                      {item.price === "—" ? (
                        <span className="text-sm text-slate-text italic">{item.note}</span>
                      ) : (
                        <>
                          <span className="text-2xl font-black text-amber">{item.price}</span>
                          <span className="text-sm font-semibold text-charcoal">{item.unit}</span>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" as const }}
            className="lg:col-span-2"
          >
            <div className="bg-charcoal rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-amber/20 rounded-full flex items-center justify-center mx-auto mb-5">
                <Phone className="w-7 h-7 text-amber" />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">
                Vēlaties precīzu cenu?
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                Cena atkarīga no riepu izmēra, tipa un nepieciešamā darba apjoma. Zvaniet — pastāstīsim precīzi!
              </p>
              <Button
                asChild
                className="w-full bg-amber hover:bg-amber-dark text-white font-bold h-12 shadow-lg shadow-amber/20 transition-all hover:shadow-xl hover:shadow-amber/30"
              >
                <a href="tel:29741779">
                  <Phone className="w-5 h-5 mr-2" />
                  Zvanīt: 29 741 779
                </a>
              </Button>
              <p className="text-white/30 text-xs mt-4">
                Darba dienās 09:00–19:00 · Sestdienās 09:00–17:00
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
