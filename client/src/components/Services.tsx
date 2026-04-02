/*
  DESIGN: Nordic Workshop — Scandinavian Industrial
  Services: Card-based grid with icons, clear hierarchy
  Each card has icon, title, brief description
*/

import { motion } from "framer-motion";
import {
  CircleDot,
  Wrench,
  Gauge,
  Truck,
  Tractor,
  Droplets,
  Cog,
  Disc,
  ShoppingBag,
  CircleDashed,
} from "lucide-react";

const services = [
  {
    icon: CircleDot,
    title: "Riepu maiņa",
    description:
      "Kvalitatīva riepu maiņa vieglajiem auto. Riteņu mazgāšana, diska borta tīrīšana, ventīļu pārbaude un uzgriežņu pievilkšana ar nomērīto spēku.",
    highlight: "no 30 EUR",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663356969818/Vt6Kett4BeZdA2XvobB6dR/hero-tire-service-mxYaEuWVC4kFEUPFkxDxuF.webp",
  },
  {
    icon: Wrench,
    title: "Riepu remonts",
    description:
      "Profesionāls riepu remonts, tai skaitā sānu griezumu labošana ar karstās vulkanizācijas iekārtu.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663356969818/Vt6Kett4BeZdA2XvobB6dR/service-tire-repair-aGxREap7tSyP3Fqaapzegc.webp",
  },
  {
    icon: Gauge,
    title: "Savirzes regulēšana",
    description:
      "Savirzes un sagāzuma regulēšana — svarīga procedūra katram auto drošai un vienmērīgai riepu nolietošanai.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663356969818/Vt6Kett4BeZdA2XvobB6dR/service-wheel-alignment-N9qA9gmYw3rU7hcWbMah2n.webp",
  },
  {
    icon: Droplets,
    title: "Eļļas maiņa",
    description:
      "Motoreļļas un eļļas filtru maiņa uz vietas. Kvalitatīva eļļa un filtri jūsu automašīnai.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663356969818/Vt6Kett4BeZdA2XvobB6dR/service-oil-change-MwsNb9VSdmkYmGUfSeivXk.webp",
  },
  {
    icon: Truck,
    title: "Kravas riepu serviss",
    description:
      "Riepu serviss kravas automašīnām — maiņa, remonts un balansēšana liela izmēra transportam.",
  },
  {
    icon: Tractor,
    title: "Traktoru un industriālās tehnikas serviss",
    description:
      "Riepu serviss traktoriem un industriālajai tehnikai ar specializētu aprīkojumu.",
  },
  {
    icon: Cog,
    title: "Ritošās daļas remonts",
    description:
      "Ritošās daļas diagnostika un remonts — rūpējamies par jūsu auto drošību un komfortu.",
  },
  {
    icon: Disc,
    title: "Disku remonts",
    description:
      "Disku valcēšana un metināšana — atjaunojam bojātos diskus līdz darba kārtībai.",
  },
  {
    icon: CircleDashed,
    title: "Bremžu kluču maiņa",
    description:
      "Bremžu kluču maiņa — nodrošinām drošu un efektīvu bremzēšanu jūsu transportlīdzeklim.",
  },
  {
    icon: ShoppingBag,
    title: "Autodetaļas",
    description:
      "Autodetaļu pārdošana un disku centrējošie gredzeni — plašs sortiments pieejams uz vietas.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Services() {
  return (
    <section id="pakalpojumi" className="py-20 md:py-28">
      <div className="container">
        {/* Section header */}
        <div className="max-w-2xl mb-14">
          <span className="text-amber font-semibold text-sm uppercase tracking-widest mb-3 block">
            Pakalpojumi
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-charcoal tracking-tight mb-4">
            Pilns riepu servisa pakalpojumu klāsts
          </h2>
          <p className="text-slate-text text-lg leading-relaxed">
            No riepu maiņas līdz savirzes regulēšanai — viss vienā vietā. Apkalpojam vieglos auto, kravas transportu un industriālo tehniku.
          </p>
        </div>

        {/* Featured services — top row with images */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 mb-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {services.slice(0, 2).map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative bg-white rounded-xl overflow-hidden border border-border hover:border-amber/30 transition-all duration-300 hover:shadow-xl hover:shadow-amber/5"
            >
              {service.image && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-amber/10 flex items-center justify-center shrink-0">
                    <service.icon className="w-5 h-5 text-amber" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-charcoal mb-1 group-hover:text-amber transition-colors">
                      {service.title}
                    </h3>
                    {service.highlight && (
                      <span className="inline-block bg-amber/10 text-amber font-bold text-sm px-3 py-0.5 rounded-full mb-2">
                        {service.highlight}
                      </span>
                    )}
                    <p className="text-slate-text text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Second row — alignment + oil with images */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 mb-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {services.slice(2, 4).map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative bg-white rounded-xl overflow-hidden border border-border hover:border-amber/30 transition-all duration-300 hover:shadow-xl hover:shadow-amber/5"
            >
              {service.image && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-amber/10 flex items-center justify-center shrink-0">
                    <service.icon className="w-5 h-5 text-amber" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-charcoal mb-1 group-hover:text-amber transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-text text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Remaining services — compact grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {services.slice(4).map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group bg-white rounded-xl p-5 border border-border hover:border-amber/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber/5"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber/10 flex items-center justify-center shrink-0">
                  <service.icon className="w-5 h-5 text-amber" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-charcoal mb-1 group-hover:text-amber transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-text text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
