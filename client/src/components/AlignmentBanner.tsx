/*
  DESIGN: Nordic Workshop — Scandinavian Industrial
  Small banner/announcement for wheel alignment service
  Preserves the original site's reference to savirzesregulēšana.lv
*/

import { ArrowRight, Gauge } from "lucide-react";

export default function AlignmentBanner() {
  return (
    <div className="bg-charcoal/5 border-y border-border">
      <div className="container py-3 flex items-center justify-center gap-3 text-sm">
        <Gauge className="w-4 h-4 text-amber shrink-0" />
        <span className="text-charcoal font-medium">
          Mēs regulējam arī savirzi!
        </span>
        <a
          href="https://www.savirzesregulēšana.lv"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber hover:text-amber-dark font-semibold flex items-center gap-1 transition-colors"
        >
          Uzzināt vairāk
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
