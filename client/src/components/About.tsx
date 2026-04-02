/*
  DESIGN: Nordic Workshop — Scandinavian Industrial
  About section: Company description with workshop image
  Preserves original business content
*/

import { motion } from "framer-motion";
import { MapPin, Users, Wrench } from "lucide-react";

const WORKSHOP_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663356969818/Vt6Kett4BeZdA2XvobB6dR/about-workshop-UqaRGRVUUJLqqkw5r89aSa.webp";

const stats = [
  { icon: MapPin, label: "Atrašanās vieta", value: "Imanta, Rīga" },
  { icon: Users, label: "Apkalpojam", value: "Bolderāja, Iļģuciems, Imanta" },
  { icon: Wrench, label: "Specializācija", value: "Vieglie, kravas, traktori" },
];

export default function About() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={WORKSHOP_IMAGE}
                alt="Riepu serviss darbnīca"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 md:right-6 bg-amber text-white rounded-xl p-5 shadow-xl shadow-amber/20">
              <div className="text-3xl font-black leading-none">Kleistu</div>
              <div className="text-sm font-medium text-white/80 mt-1">iela 41, Rīga</div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          >
            <span className="text-amber font-semibold text-sm uppercase tracking-widest mb-3 block">
              Par uzņēmumu
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-charcoal tracking-tight mb-6">
              Riepu serviss{" "}
              <span className="text-amber">"Kleistu"</span>
            </h2>
            <div className="space-y-4 text-slate-text text-base leading-relaxed mb-8">
              <p>
                Uzņēmums galvenokārt piedāvā visa veida riepu servisa pakalpojumus. Mēs veicam riepu maiņu vieglajām transportam, mums ir riepu serviss kravas auto apkalpošanai. Tāpat piedāvājam riepu servisu traktoru un industriālajai tehnikai.
              </p>
              <p>
                Mūsu mērķis ir radīt un pastāvīgi pilnveidot riepu servisu tīklu, piedāvājot izcilas kvalitātes riepu maiņas un remonta pakalpojumus.
              </p>
            </div>

            {/* Stats */}
            <div className="space-y-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-4 bg-warm-gray rounded-xl p-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber/10 flex items-center justify-center shrink-0">
                    <stat.icon className="w-5 h-5 text-amber" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-text uppercase tracking-wider font-medium">
                      {stat.label}
                    </div>
                    <div className="text-charcoal font-bold">{stat.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
