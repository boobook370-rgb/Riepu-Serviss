/*
  DESIGN: Nordic Workshop — Scandinavian Industrial
  Contact section: Working hours, address, phone, map embed
  Strong CTA for calling
*/

import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Navigation, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const hours = [
  { day: "Pirmdiena – Piektdiena", time: "09:00 – 19:00" },
  { day: "Sestdiena", time: "09:00 – 17:00" },
  { day: "Svētdiena", time: "10:00 – 16:00" },
];

export default function Contact() {
  return (
    <section id="kontakti" className="py-20 md:py-28 bg-warm-gray">
      <div className="container">
        {/* Section header */}
        <div className="max-w-2xl mb-14">
          <span className="text-amber font-semibold text-sm uppercase tracking-widest mb-3 block">
            Kontakti
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-charcoal tracking-tight mb-4">
            Apmeklējiet mūs vai{" "}
            <span className="text-amber">zvaniet</span>
          </h2>
          <p className="text-slate-text text-lg leading-relaxed">
            Esam pieejami katru dienu. Zvaniet vai brauciet klātienē — mēs palīdzēsim!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Contact info card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" as const }}
            className="bg-white rounded-2xl p-7 shadow-sm border border-border"
          >
            <h3 className="text-lg font-bold text-charcoal mb-6">Kontaktinformācija</h3>

            {/* Phone */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-11 h-11 rounded-lg bg-amber/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-amber" />
              </div>
              <div>
                <div className="text-xs text-slate-text uppercase tracking-wider font-medium mb-1">
                  Telefons
                </div>
                <a
                  href="tel:29741779"
                  className="text-charcoal font-bold text-xl hover:text-amber transition-colors"
                >
                  29 741 779
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-11 h-11 rounded-lg bg-amber/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-amber" />
              </div>
              <div>
                <div className="text-xs text-slate-text uppercase tracking-wider font-medium mb-1">
                  Adrese
                </div>
                <div className="text-charcoal font-bold">Kleistu iela 41</div>
                <div className="text-slate-text text-sm">Rīga, Latvija</div>
              </div>
            </div>

            {/* Areas served */}
            <div className="flex items-start gap-4 mb-8">
              <div className="w-11 h-11 rounded-lg bg-amber/10 flex items-center justify-center shrink-0">
                <Navigation className="w-5 h-5 text-amber" />
              </div>
              <div>
                <div className="text-xs text-slate-text uppercase tracking-wider font-medium mb-1">
                  Apkalpojamie rajoni
                </div>
                <div className="text-charcoal font-semibold text-sm">
                  Imanta · Bolderāja · Iļģuciems
                </div>
              </div>
            </div>

            {/* CTA */}
            <Button
              asChild
              className="w-full bg-amber hover:bg-amber-dark text-white font-bold h-12 shadow-lg shadow-amber/20 transition-all hover:shadow-xl hover:shadow-amber/30"
            >
              <a href="tel:29741779">
                <Phone className="w-5 h-5 mr-2" />
                Zvanīt tagad
              </a>
            </Button>
          </motion.div>

          {/* Working hours card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" as const }}
            className="bg-white rounded-2xl p-7 shadow-sm border border-border"
          >
            <h3 className="text-lg font-bold text-charcoal mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber" />
              Darba laiks
            </h3>

            <div className="space-y-0">
              {hours.map((item, i) => (
                <div
                  key={item.day}
                  className={`flex items-center justify-between py-4 ${
                    i < hours.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <span className="text-charcoal font-medium">{item.day}</span>
                  <span className="text-amber font-bold text-lg">{item.time}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-amber/5 border border-amber/15 rounded-xl p-4">
              <p className="text-sm text-slate-text leading-relaxed">
                <span className="text-amber font-semibold">Ērti sasniedzams</span> — atrodamies Imantā, netālu no Kurzemes prospekta. Ērti piebraucams no Bolderājas un Iļģuciema.
              </p>
            </div>

            {/* Google Maps link */}
            <a
              href="https://maps.google.com/?q=Kleistu+iela+41+Riga+Latvia"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-2 text-amber hover:text-amber-dark font-medium text-sm transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Atvērt Google Maps
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" as const }}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border min-h-[400px] lg:min-h-0"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2176.0!2d23.9875!3d56.9525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfb0b0b0b0b0%3A0x0!2sKleistu%20iela%2041%2C%20R%C4%ABga!5e0!3m2!1slv!2slv!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Riepu serviss atrašanās vieta"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
