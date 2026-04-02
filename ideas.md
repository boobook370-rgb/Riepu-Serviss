# Riepuserviss.lv Redesign — Design Brainstorm

## Current Site Audit

The existing riepuserviss.lv website suffers from several key issues:
- **Dark, dated aesthetic** with black backgrounds, green/orange accents that feel early-2000s
- **Poor visual hierarchy** — all content competes for attention equally
- **No clear CTA** — the phone number and booking path are buried
- **Low trust signals** — no reviews, no certifications, no professional photography
- **Cluttered layout** — text, images, and navigation overlap without breathing room
- **Weak mobile experience** — the site is not responsive
- **No structured service presentation** — services are listed as plain text links

---

<response>
## Idea 1: "Nordic Workshop" — Scandinavian Industrial

<text>

**Design Movement:** Scandinavian Industrial — merging Nordic minimalism with raw workshop authenticity

**Core Principles:**
1. Functional clarity over decoration — every element earns its place
2. Material honesty — exposed textures (concrete, steel, rubber) as design elements
3. Generous whitespace as a trust signal — clean = professional
4. Strong typographic hierarchy drives scanning

**Color Philosophy:**
- Primary: Deep charcoal (#1C1C1E) for authority and seriousness
- Accent: Warm amber/orange (#E8720C) — nods to the existing brand while feeling premium
- Background: Warm off-white (#F7F5F2) — softer than pure white, feels approachable
- Supporting: Cool slate (#64748B) for secondary text
- The warmth of amber against cool neutrals creates a "reliable workshop" feeling

**Layout Paradigm:**
- Asymmetric split-screen hero (60/40) with bold text left, atmospheric image right
- Card-based service grid with generous gaps
- Alternating full-width and contained sections for rhythm
- Sticky contact bar on mobile for instant calling

**Signature Elements:**
1. Diagonal cut sections using CSS clip-path — suggests motion/speed
2. Subtle tire-tread texture pattern as section dividers
3. Bold number callouts (e.g., "30 EUR", "6 dienās") in oversized type

**Interaction Philosophy:**
- Purposeful, not playful — hover reveals additional info on service cards
- Smooth scroll with section snapping on desktop
- Phone number always one tap away on mobile

**Animation:**
- Entrance animations: elements slide up with slight opacity fade (staggered 100ms)
- Service cards: subtle scale(1.02) on hover with box-shadow deepening
- CTA buttons: gentle pulse animation on the primary action
- Section transitions: parallax-lite on hero background image
- No bouncy or elastic animations — everything is smooth and measured

**Typography System:**
- Display: "DM Sans" Bold (700) — geometric, modern, authoritative
- Body: "DM Sans" Regular (400) — clean readability
- Accent numbers: "DM Sans" Black (900) — for prices and stats
- Hierarchy: 56px hero → 36px section titles → 20px card titles → 16px body

</text>
<probability>0.08</probability>
</response>

---

<response>
## Idea 2: "European Precision" — Swiss-Inspired Technical

<text>

**Design Movement:** Swiss/International Style — precision, grid discipline, technical confidence

**Core Principles:**
1. Grid-based precision communicates technical competence
2. Information density without clutter — structured, not sparse
3. Color as functional signal, not decoration
4. Typography as the primary design element

**Color Philosophy:**
- Primary: Deep navy (#0F172A) — professional, trustworthy, European
- Accent: Vivid orange (#F97316) — high-visibility CTA, safety/automotive association
- Background: Pure white (#FFFFFF) with light gray sections (#F8FAFC)
- Supporting: Medium slate (#475569) for body text
- Navy + orange = classic automotive service palette, elevated

**Layout Paradigm:**
- Strong 12-column grid with visible structure
- Hero: full-width with left-aligned text block overlapping a dark image
- Services in a tight 3-column grid with icon + title + one-line description
- Contact section as a bold, dark full-width band
- Footer with structured columns

**Signature Elements:**
1. Thin orange accent lines as section separators and card borders
2. Icon system using outlined automotive icons (wrench, tire, oil drop)
3. "Badge" style trust indicators (years of experience, guarantee text)

**Interaction Philosophy:**
- Efficient and direct — minimal steps to contact
- Hover states reveal service details in expandable cards
- Mobile: bottom sticky bar with Call + Directions buttons

**Animation:**
- Minimal, functional animations only
- Fade-in on scroll for content sections (IntersectionObserver)
- Button hover: background color shift with 200ms ease
- Card hover: left-border accent grows from 0 to 4px
- No decorative motion — every animation serves information delivery

**Typography System:**
- Display: "Space Grotesk" Bold — technical, geometric, modern
- Body: "Inter" Regular — maximum readability at small sizes
- Monospace accents: "Space Mono" for prices and phone numbers
- Hierarchy: 48px hero → 32px sections → 18px cards → 15px body

</text>
<probability>0.06</probability>
</response>

---

<response>
## Idea 3: "Trusted Garage" — Warm Professional

<text>

**Design Movement:** Contemporary Craft — warm professionalism meets modern web standards

**Core Principles:**
1. Warmth builds trust — approachable without being casual
2. Visual proof over claims — show, don't just tell
3. Clear action paths — every section leads to contact
4. Local identity matters — feel like a real Riga business, not a template

**Color Philosophy:**
- Primary: Rich dark teal (#0D3B3E) — trustworthy, different from generic blue
- Accent: Energetic orange-red (#E54B2A) — urgency, warmth, action
- Background: Warm cream (#FAF8F5) with white cards
- Supporting: Warm gray (#6B7280) for secondary text
- Teal + warm orange = unique in the automotive space, memorable

**Layout Paradigm:**
- Full-width hero with large background image, centered headline, and prominent CTA
- Services in a 2-column offset grid (cards slightly staggered vertically)
- Testimonial/trust section with large quote and rating stars
- Map + contact as a split section (info left, embedded map right)
- Rounded corners throughout for approachability

**Signature Elements:**
1. Soft rounded cards with subtle warm shadows
2. Hand-drawn style icons for services (tire, wrench, oil can)
3. "Open now" live indicator badge in the header

**Interaction Philosophy:**
- Friendly and inviting — hover effects feel tactile (slight lift on cards)
- Scroll-triggered counters for stats (years, services completed)
- WhatsApp/call floating button on mobile

**Animation:**
- Entrance: gentle fade-up with 300ms duration, staggered by 80ms per element
- Cards: translateY(-4px) + shadow expansion on hover
- Hero: slow Ken Burns zoom on background image (20s cycle)
- Stats: count-up animation when section enters viewport
- CTA button: subtle gradient shift on hover
- Overall feel: warm and alive, not static

**Typography System:**
- Display: "Outfit" SemiBold — friendly geometric, modern but warm
- Body: "Outfit" Regular — consistent family, great readability
- Accent: "Outfit" Bold for prices and key numbers
- Hierarchy: 52px hero → 34px sections → 20px cards → 16px body

</text>
<probability>0.07</probability>
</response>
