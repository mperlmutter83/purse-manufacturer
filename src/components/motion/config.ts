/*
  ╔════════════════════════════════════════════════════════════════════════╗
  ║  EDIT ME — every word of homepage copy and every brand color for the   ║
  ║  scroll-motion homepage lives here. You never need to touch engine.ts  ║
  ║  or motion.css. HTML is allowed in title strings (<br>, <em>).         ║
  ╚════════════════════════════════════════════════════════════════════════╝
*/

export const SITE = {
  /* ── COLORS ─────────────────────────────────────────────────────────── */
  colors: {
    primary: '#e09900', // brand gold (logo, --color-gold): buttons, tint, accents
    onPrimary: '#0e0c19', // text on primary buttons
    accent: '#f2c45a', // light logo gold: eyebrows, highlights, stats
    ink: '#0e0c19', // brand navy (logo background): page background / glass base
    text: '#f6f1e9', // main text (ivory, matches the bag)
    muted: '#c4c0cc', // secondary text
  },

  /* ── CINEMATIC LOOK (0 = off) ───────────────────────────────────────── */
  look: {
    tintStrength: 0.3, // brand-primary color wash over the film (0 to 0.6)
    tintBlend: 'soft-light', // "soft-light" (subtle), "color" (strong recolor), "overlay"
    vignette: 0.7, // edge darkening (0 to 1)
    grain: 0.08, // film grain opacity (0 to 0.2)
  },

  /* ── FONTS (the site's next/font variables from app/layout.tsx) ─────── */
  fonts: {
    display: "var(--font-abril), Georgia, 'Times New Roman', serif",
    body: 'var(--font-poppins), Helvetica, Arial, sans-serif',
    emphasis: 'normal', // <em> in headings: "normal" (gold color only) or "italic"
  },

  /* ── BUSINESS ───────────────────────────────────────────────────────── */
  brand: {
    name: 'Purse Manufacturers',
    logoFull: '/motion/logo-full.webp', // full logo on the loading screen
    phone: '(818) 855-5821',
    phoneHref: 'tel:+18188555821',
    ctaUrl: '/contact-us',
  },

  loader: 'Loading the film',

  /* ── HERO ───────────────────────────────────────────────────────────── */
  hero: {
    eyebrow: 'Crafting Your Vision into Reality',
    title: 'Custom Purse<br><em>Manufacturing</em>',
    sub: 'From concept to production. We transform your handbag concepts into high-quality products, ready for market success.',
    ctaPrimary: 'Get a Quote',
    ctaSecondary: 'Explore Services',
    caption: 'Pictured: ivory python-textured top-handle bag with gold hardware, built by our team.',
    scrollCue: 'Scroll to take it apart',
  },

  /* ── ABOUT ──────────────────────────────────────────────────────────── */
  about: {
    eyebrow: 'About Us',
    title: 'End-to-end purse<br>manufacturing.',
    body: [
      'Purse Manufacturers offers a comprehensive suite of services for brands, entrepreneurs, and retailers. We guide you from the initial idea through to the final product, ensuring quality and efficiency at every stage.',
      'Our team is dedicated to helping you create handbags that stand out in the market. With expertise in design, prototyping, and production, we are your trusted partner in bringing your vision to life.',
    ],
    stats: [
      { value: '17', label: 'Specialized manufacturing services' },
      { value: '4', label: 'Stages: design, prototype, production, fulfillment' },
      { value: 'Any', label: 'Batch size, from small runs to large-scale' },
    ],
  },

  /* ── SERVICES ───────────────────────────────────────────────────────── */
  services: {
    eyebrow: 'Services',
    title: 'Our comprehensive services.',
    intro:
      "Our comprehensive services cover every aspect of purse manufacturing, ensuring that your brand's vision is brought to life with precision and quality.",
    items: [
      { name: 'Design & Development', desc: 'From concept creation to material sourcing, we provide detailed tech packs to bring your ideas to life.' },
      { name: 'Prototyping', desc: 'We produce samples and refine designs to ensure your product meets the highest standards.' },
      { name: 'Manufacturing', desc: 'Our facilities handle both small and large batch production with rigorous quality control.' },
      { name: 'Fulfillment Support', desc: "We offer packaging and shipping coordination to streamline your product's journey to market." },
    ],
    moreTitle: 'Every specialty',
    more: [
      { name: 'Custom Handbag Design', href: '/services/custom-handbag-design' },
      { name: 'Product Development & Prototyping', href: '/services/product-development-prototyping' },
      { name: 'Private Label Manufacturing', href: '/services/private-label-manufacturing' },
      { name: 'Small-Batch Purse Production', href: '/services/small-batch-purse-production' },
      { name: 'Large-Scale Manufacturing', href: '/services/large-scale-manufacturing' },
      { name: 'Leather Handbag Manufacturing', href: '/services/leather-handbag-manufacturing' },
      { name: 'Vegan & Alternative Materials', href: '/services/vegan-alternative-material-manufacturing' },
      { name: 'Material & Hardware Sourcing', href: '/services/material-hardware-sourcing' },
      { name: 'Pattern Making & Technical Development', href: '/services/pattern-making-technical-development' },
      { name: 'Sample & Prototype Manufacturing', href: '/services/sample-prototype-manufacturing' },
      { name: 'Custom Logo & Branding', href: '/services/custom-logo-branding-application' },
      { name: 'Custom Hardware Development', href: '/services/custom-hardware-development' },
      { name: 'Design Modification & Repurposing', href: '/services/design-modification-repurposing' },
      { name: 'Quality Control & Inspection', href: '/services/quality-control-inspection' },
      { name: 'Packaging & Presentation', href: '/services/packaging-presentation' },
      { name: 'Production Consulting', href: '/services/production-consulting' },
      { name: 'Collection Development', href: '/services/collection-development' },
    ],
  },

  /* ── CALL TO ACTION ─────────────────────────────────────────────────── */
  cta: {
    eyebrow: 'Get Started Today',
    title: 'Ready to Transform Your Vision?',
    body: 'Share your vision and requirements with us to kickstart the creation of your unique handbag.',
    primary: 'Get a Quote',
    secondaryPrefix: 'or call',
  },
};

/* ═══════════════════════ END OF EDITABLE SECTION ═══════════════════════ */

export type SiteConfig = typeof SITE;
