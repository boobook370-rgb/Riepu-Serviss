/*
  DESIGN: Nordic Workshop — Scandinavian Industrial
  Hero: Asymmetric split-screen (text left, image right on desktop)
  Dark overlay on image, bold headline, prominent CTA
  Mobile: stacked with image as background
*/

import { Phone, ArrowRight, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663356969818/Vt6Kett4BeZdA2XvobB6dR/hero-tire-service-mxYaEuWVC4kFEUPFkxDxuF.webp";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-charcoal">
      {/* Background image for mobile */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          backgroundImage: `url(${HERO_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-charcoal/80" />
      </div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-5 gap-0 min-h-[85vh] md:min-h-[75vh] items-center">
          {/* Text content — left side */}
          <div className="md:col-span-3 py-16 md:py-20 md:pr-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-amber/15 border border-amber/30 rounded-full px-4 py-1.5 mb-6">
                <Star className="w-4 h-4 text-amber fill-amber" />
                <span className="text-amber text-sm font-medium">
                  Uzticams serviss kopš dibināšanas
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6">
                Profesionāls{" "}
                <span className="text-amber">riepu serviss</span>{" "}
                Rīgā
              </h1>

              <p className="text-white/70 text-lg md:text-xl max-w-xl mb-4 leading-relaxed">
                Riepu maiņa, remonts, balansēšana un savirzes regulēšana vieglajiem auto, kravas transportam un industriālajai tehnikai.
              </p>

              {/* Price highlight */}
              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-amber font-black text-5xl md:text-6xl">30</span>
                <div className="leading-tight">
                  <span className="text-white/90 text-lg font-semibold block">EUR</span>
                  <span className="text-white/50 text-sm">riepu maiņa no</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <Button
                  asChild
                  size="lg"
                  className="bg-amber hover:bg-amber-dark text-white font-bold text-base px-8 h-13 shadow-xl shadow-amber/25 transition-all hover:shadow-2xl hover:shadow-amber/35 hover:scale-[1.02]"
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
                  className="border-white/30 text-white hover:bg-white/10 font-semibold text-base px-8 h-13 bg-white/5"
                >
                  <a href="#pakalpojumi">
                    Skatīt pakalpojumus
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-6 text-white/60 text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-amber" />
                  <span>Darba kvalitātes garantija</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-amber" />
                  <span>Karstā vulkanizācija</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image — right side (desktop only) */}
          <div className="hidden md:block md:col-span-2 relative h-full">
            <div
              className="absolute inset-0 -right-32"
              style={{
                backgroundImage: `url(${HERO_IMAGE})`,
                backgroundSize: "cover",
                backgroundPosition: "center left",
              }}
            />
            {/* Diagonal overlay */}
            <div
              className="absolute inset-0 -left-20"
              style={{
                background:
                  "linear-gradient(105deg, oklch(0.2 0.01 260) 0%, oklch(0.2 0.01 260) 30%, transparent 70%)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Bottom diagonal cut */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24">
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
