/*
  DESIGN: Nordic Workshop — Scandinavian Industrial
  Trust / Why Us section: Quality guarantees and differentiators
  Uses the original site's quality points as trust signals
*/

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Award, Sparkles } from "lucide-react";

const qualityPoints = [
  {
    icon: Sparkles,
    title: "Riteņu mazgāšana",
    description: "Riteņu mazgāšana pirms balansēšanas — nodrošina precīzu balansēšanas kvalitāti.",
  },
  {
    icon: CheckCircle2,
    title: "Diska borta tīrīšana",
    description: "Rūpīga diska borta tīrīšana garantē kvalitatīvu montāžu un hermētiskumu.",
  },
  {
    icon: ShieldCheck,
    title: "Ventīļu pārbaude",
    description: "Ventīļa hermētiskuma kontrole — katrs ritenis tiek pārbaudīts pirms atdošanas.",
  },
  {
    icon: Award,
    title: "Precīza pievilkšana",
    description: "Uzgriežņi pievilkti ar nomērīto spēku — droši un atbilstoši ražotāja prasībām.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function WhyUs() {
  return (
    <section id="par-mums" className="py-20 md:py-28 bg-charcoal relative overflow-hidden">
      {/* Top diagonal */}
      <div className="absolute top-0 left-0 right-0 h-16 md:h-24 -mt-1">
        <svg
          viewBox="0 0 1440 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0L1440 96V0H0Z"
            fill="oklch(0.97 0.005 80)"
          />
        </svg>
      </div>

      <div className="container relative z-10 pt-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: text content */}
          <div>
            <span className="text-amber font-semibold text-sm uppercase tracking-widest mb-3 block">
              Kāpēc izvēlēties mūs
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6">
              Kvalitāte, kurai var{" "}
              <span className="text-amber">uzticēties</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Mūsu serviss garantē darbu kvalitāti — pie mums mainītas riepas nelaidīs gaisu vismaz līdz nākamajai riepu maiņai, ja vien riepas nav caurdurtas ekspluatācijas laikā.
            </p>

            {/* Guarantee badge */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber/20 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-amber" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Karstā vulkanizācija</h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Riepu remonta jomā, servisa rīcībā ir karstās vulkanizācijas iekārta, kura ļauj remontēt riepu sānu griezumus — pakalpojums, ko piedāvā tikai profesionāli servisi.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional services note */}
            <p className="text-white/50 text-sm">
              Skrūvju smerēšana pieejama pēc pieprasījuma — rūpējamies par katru detaļu.
            </p>
          </div>

          {/* Right: quality points grid */}
          <motion.div
            className="grid sm:grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {qualityPoints.map((point) => (
              <motion.div
                key={point.title}
                variants={itemVariants}
                className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/8 hover:border-amber/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-amber/15 flex items-center justify-center mb-4">
                  <point.icon className="w-5 h-5 text-amber" />
                </div>
                <h3 className="text-white font-bold mb-2">{point.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom diagonal */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 -mb-1">
        <svg
          viewBox="0 0 1440 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 96L1440 0V96H0Z"
            fill="oklch(0.97 0.005 80)"
          />
        </svg>
      </div>
    </section>
  );
}
