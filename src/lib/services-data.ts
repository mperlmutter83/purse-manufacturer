export interface ServiceItem {
  slug: string;
  title: string;
  /** Short blurb shown on the /services index cards. */
  short: string;
  /** SEO meta description for the individual page. */
  metaDescription: string;
  /** Hero subtext on the individual page. */
  heroSubtext: string;
  /** Opening paragraphs on the individual page. */
  intro: string[];
  /** "What's Included" bullet list. */
  includes: string[];
  /** Closing section heading + paragraph before the CTA. */
  closingHeading: string;
  closingText: string;
}

export const services: ServiceItem[] = [
  {
    slug: 'custom-handbag-design',
    title: 'Custom Handbag Design',
    short:
      'Develop original purse and handbag designs based on your concept, sketches, inspiration, target customer, and brand aesthetic.',
    metaDescription:
      'Custom handbag design services — we turn your concept, sketches, and brand aesthetic into original, production-ready purse designs.',
    heroSubtext:
      'Original purse and handbag designs built around your concept, your customer, and your brand.',
    intro: [
      'Every great handbag starts with a strong design. Our custom handbag design service takes whatever you bring to the table — a rough sketch, a mood board, a reference bag, or just an idea — and develops it into a complete, original design that is ready for prototyping and production.',
      'We design with your target customer and brand aesthetic in mind from day one, so the finished product does not just look good on paper — it sells.',
    ],
    includes: [
      'Design consultation to understand your concept, customer, and price point',
      'Original sketches and design concepts for review and revision',
      'Material, color, and hardware direction matched to your brand',
      'Dimension and proportion development for real-world usability',
      'Design refinement based on your feedback until approval',
      'Production-ready design package handed off to our pattern and sampling team',
    ],
    closingHeading: 'From Idea to Icon',
    closingText:
      'Whether you are launching your first bag or adding to an established line, our designers work as an extension of your brand. You keep full ownership of the final design — we are here to make it real.',
  },
  {
    slug: 'product-development-prototyping',
    title: 'Product Development & Prototyping',
    short:
      'Turn an idea into a production-ready handbag through pattern development, material selection, sample creation, fit testing, and design refinement.',
    metaDescription:
      'Handbag product development and prototyping — patterns, materials, samples, fit testing, and refinement to make your design production-ready.',
    heroSubtext:
      'A complete development path from first idea to a production-ready handbag.',
    intro: [
      'Product development is where ideas become real products. We manage the full development cycle for your handbag — pattern development, material selection, sample creation, fit and function testing, and design refinement — so that by the time production starts, there are no surprises.',
      'This service is ideal for designers and brands who have a concept but need an experienced manufacturing partner to engineer it for production.',
    ],
    includes: [
      'Pattern development and construction engineering',
      'Material and hardware selection for function, look, and budget',
      'Physical sample creation in final or near-final materials',
      'Fit, capacity, and usability testing of the sample',
      'Design refinement rounds based on sample evaluation',
      'Final production specification package ready for manufacturing',
    ],
    closingHeading: 'De-Risk Your Production Run',
    closingText:
      'Brands that skip development pay for it during production. Our structured prototyping process catches construction, material, and proportion issues early — when they are cheap to fix.',
  },
  {
    slug: 'private-label-manufacturing',
    title: 'Private Label Manufacturing',
    short:
      'Manufacture handbags under your own brand name, including custom labels, logos, packaging, hardware, and other branded details.',
    metaDescription:
      'Private label handbag manufacturing — your brand name on every detail: labels, logos, hardware, lining, and packaging.',
    heroSubtext:
      'Your brand on every stitch, plate, and box — manufactured start to finish under your name.',
    intro: [
      'Private label manufacturing lets you sell handbags under your own brand name without building a factory. We handle the entire manufacturing process while every visible detail — labels, logos, hardware, lining, packaging — carries your branding.',
      'You get a fully branded product ready for retail, e-commerce, or wholesale, built to your specifications.',
    ],
    includes: [
      'Manufacturing under your brand name with full confidentiality',
      'Custom woven and printed labels with your logo',
      'Branded hardware: logo plates, zipper pulls, clasps, and feet',
      'Custom branded lining and interior details',
      'Private label packaging: dust bags, boxes, tags, and tissue',
      'White-label production suitable for retail and wholesale channels',
    ],
    closingHeading: 'Your Brand, Our Factory',
    closingText:
      'From boutique labels to national retailers, we produce private label handbags at the quality level your brand promises. You bring the brand — we bring the craftsmanship behind it.',
  },
  {
    slug: 'small-batch-purse-production',
    title: 'Small-Batch Purse Production',
    short:
      'Produce limited quantities for emerging designers, boutiques, startups, special collections, and product launches without requiring extremely large production runs.',
    metaDescription:
      'Small-batch purse production for emerging designers, boutiques, and startups — limited runs without huge minimum orders.',
    heroSubtext:
      'Limited-quantity production for designers, boutiques, and launches — without massive minimums.',
    intro: [
      'You should not need to order thousands of units to launch a handbag. Our small-batch production service is built for emerging designers, boutiques, startups, special collections, and product launches that need limited quantities made to full production quality.',
      'Small runs get the same craftsmanship, materials, and quality control as our largest orders — just scaled to what your business actually needs.',
    ],
    includes: [
      'Low minimum order quantities suited to new and growing brands',
      'Full-quality construction on every unit, regardless of run size',
      'Ideal for test launches, market validation, and capsule collections',
      'Flexible material and hardware options for smaller budgets',
      'Easy re-ordering and scaling when your batch sells through',
      'A clear upgrade path to larger production volumes',
    ],
    closingHeading: 'Start Small, Scale Smart',
    closingText:
      'Many of our largest clients started with a small batch. Prove your concept, learn what your customers love, then scale with a manufacturing partner who already knows your product inside and out.',
  },
  {
    slug: 'large-scale-manufacturing',
    title: 'Large-Scale Manufacturing',
    short:
      'Handle higher-volume handbag production with consistent construction, quality standards, materials, and finishing across every unit.',
    metaDescription:
      'Large-scale handbag manufacturing — high-volume production with consistent construction, materials, and finishing on every unit.',
    heroSubtext:
      'High-volume handbag production with consistent quality from unit one to unit ten thousand.',
    intro: [
      'When your brand is ready for volume, consistency becomes everything. Our large-scale manufacturing service handles higher-volume handbag production while holding the same construction, quality standards, materials, and finishing across every single unit.',
      'Structured production planning, staged quality control, and experienced line management keep large orders on spec and on schedule.',
    ],
    includes: [
      'High-volume production capacity for growing and established brands',
      'Standardized construction specifications for unit-to-unit consistency',
      'Staged quality control checkpoints throughout the production run',
      'Material planning and bulk sourcing to hold quality at scale',
      'Production scheduling with defined milestones and delivery targets',
      'Finishing, inspection, and packing handled in one coordinated flow',
    ],
    closingHeading: 'Volume Without Variance',
    closingText:
      'Retailers and customers notice when the thousandth bag does not match the first. Our production systems are built so they never have to.',
  },
  {
    slug: 'leather-handbag-manufacturing',
    title: 'Leather Handbag Manufacturing',
    short:
      'Produce premium leather purses using a variety of leather types, finishes, stitching techniques, linings, hardware, and construction methods.',
    metaDescription:
      'Premium leather handbag manufacturing — full-grain, top-grain, and specialty leathers with expert stitching, linings, and hardware.',
    heroSubtext:
      'Premium leather purses crafted with the right hides, stitching, hardware, and construction.',
    intro: [
      'Leather is unforgiving — it rewards skilled hands and exposes every shortcut. Our leather handbag manufacturing service produces premium purses using a variety of leather types, finishes, stitching techniques, linings, hardware, and construction methods matched to your design and price point.',
      'From structured totes to soft slouchy silhouettes, we build leather goods that look better with age.',
    ],
    includes: [
      'Full-grain, top-grain, corrected, suede, and specialty leather options',
      'Finish selection: pebbled, smooth, distressed, embossed, and more',
      'Expert stitching techniques including saddle and edge detailing',
      'Leather-appropriate linings, reinforcements, and edge finishing',
      'Hardware selection and setting suited to leather construction',
      'Construction methods matched to the hide weight and bag style',
    ],
    closingHeading: 'Crafted in Real Leather',
    closingText:
      'Leather handbags live or die by material selection and workmanship. We help you choose the right hide for your design — then build it the way leather deserves to be built.',
  },
  {
    slug: 'vegan-alternative-material-manufacturing',
    title: 'Vegan & Alternative Material Manufacturing',
    short:
      'Create handbags using vegan leather, recycled textiles, canvas, nylon, sustainable materials, and other non-animal alternatives.',
    metaDescription:
      'Vegan and sustainable handbag manufacturing — vegan leather, recycled textiles, canvas, nylon, and other animal-free materials.',
    heroSubtext:
      'Beautiful handbags in vegan leather, recycled textiles, canvas, and sustainable materials.',
    intro: [
      'Demand for animal-free and sustainable handbags keeps growing — and the materials keep getting better. We manufacture handbags using vegan leather, recycled textiles, canvas, nylon, and other non-animal alternatives, with construction methods tuned to each material.',
      'Your customers get the look and durability they expect; your brand gets a product that matches its values.',
    ],
    includes: [
      'PU and plant-based vegan leather options in a range of finishes',
      'Recycled and sustainable textiles for eco-conscious collections',
      'Canvas, nylon, and technical fabric construction',
      'Material-specific construction methods for durability and structure',
      'Animal-free glues, linings, and components on request',
      'Guidance on material trade-offs: cost, hand-feel, wear, and care',
    ],
    closingHeading: 'Values-Driven Manufacturing',
    closingText:
      'Alternative materials are not a compromise when they are chosen and constructed correctly. We help you pick materials your customers will love and your brand can stand behind.',
  },
  {
    slug: 'material-hardware-sourcing',
    title: 'Material & Hardware Sourcing',
    short:
      'Source leather, fabrics, zippers, clasps, chains, buckles, handles, linings, thread, and specialty hardware based on the product\u2019s design and budget.',
    metaDescription:
      'Handbag material and hardware sourcing — leather, fabrics, zippers, clasps, chains, handles, linings, and specialty hardware.',
    heroSubtext:
      'The right leather, fabric, zipper, and hardware for your design — sourced to your budget.',
    intro: [
      'A handbag is only as good as what goes into it. Our sourcing team finds the leather, fabrics, zippers, clasps, chains, buckles, handles, linings, thread, and specialty hardware your design calls for — at a quality and price that fit your budget.',
      'Because we source for production every day, we know which suppliers deliver consistency and which ones cause problems.',
    ],
    includes: [
      'Leather and fabric sourcing matched to your design and target cost',
      'Zippers, clasps, chains, buckles, rings, and magnetic closures',
      'Handles, straps, and strap hardware in stock or custom options',
      'Linings, interfacings, and internal structure materials',
      'Specialty hardware sourcing for distinctive designs',
      'Sample swatches and hardware options for your approval before production',
    ],
    closingHeading: 'Sourced Right, Built Right',
    closingText:
      'Great sourcing is invisible — the bag simply feels right and lasts. Let our supply relationships and material knowledge work for your product.',
  },
  {
    slug: 'pattern-making-technical-development',
    title: 'Pattern Making & Technical Development',
    short:
      'Create professional handbag patterns, measurements, construction specifications, and technical documentation needed for accurate production.',
    metaDescription:
      'Professional handbag pattern making and technical development — patterns, measurements, construction specs, and tech packs for accurate production.',
    heroSubtext:
      'Professional patterns, measurements, and technical documentation for accurate production.',
    intro: [
      'Accurate production starts with accurate documentation. Our pattern making and technical development service creates the professional patterns, measurements, construction specifications, and technical documentation your handbag needs to be built correctly — by us or any factory.',
      'A proper technical package eliminates guesswork, miscommunication, and costly production errors.',
    ],
    includes: [
      'Professional pattern drafting for every panel and component',
      'Complete measurement specifications and tolerances',
      'Construction specifications: seams, reinforcements, and assembly order',
      'Bill of materials covering every fabric, hardware piece, and trim',
      'Technical documentation (tech pack) ready for any manufacturer',
      'Pattern corrections and updates through the sampling process',
    ],
    closingHeading: 'The Blueprint of Your Bag',
    closingText:
      'The tech pack is the single source of truth for your product. Invest in getting it right, and every sample and production run that follows gets easier.',
  },
  {
    slug: 'sample-prototype-manufacturing',
    title: 'Sample & Prototype Manufacturing',
    short:
      'Produce physical samples before full production so clients can evaluate size, appearance, functionality, construction, and materials.',
    metaDescription:
      'Handbag sample and prototype manufacturing — hold your design in your hands and evaluate size, function, and construction before production.',
    heroSubtext:
      'Physical samples you can hold, test, and approve before committing to production.',
    intro: [
      'Never approve a production run from a drawing. Our sample and prototype manufacturing service produces physical samples of your handbag so you can evaluate size, appearance, functionality, construction, and materials before a single production unit is cut.',
      'Samples can be photographed for pre-sales, shown to buyers, and tested in the real world — then refined until they are exactly right.',
    ],
    includes: [
      'Physical samples built to your approved patterns and specifications',
      'Evaluation of size, proportion, and silhouette in real materials',
      'Functional testing: straps, closures, pockets, and capacity',
      'Construction and stitching quality review on the actual sample',
      'Material and hardware approval in hand, not on a screen',
      'Revision rounds until the sample is production-approved',
    ],
    closingHeading: 'Approve With Confidence',
    closingText:
      'The sample is your insurance policy. When you sign off on one of ours, you know exactly what your production run will deliver.',
  },
  {
    slug: 'custom-logo-branding-application',
    title: 'Custom Logo & Branding Application',
    short:
      'Add embossed logos, metal logo plates, printed branding, woven labels, custom zipper pulls, branded lining, and other signature elements.',
    metaDescription:
      'Custom logo and branding application for handbags — embossing, metal logo plates, woven labels, branded lining, zipper pulls, and more.',
    heroSubtext:
      'Embossed logos, metal plates, woven labels, branded lining — your mark on every detail.',
    intro: [
      'Branding is what turns a handbag into your handbag. We apply custom logos and branding throughout the product: embossed logos, metal logo plates, printed branding, woven labels, custom zipper pulls, branded lining, and other signature elements that make the bag unmistakably yours.',
      'Done well, branding elevates perceived value. Done poorly, it cheapens the product — we make sure it is done well.',
    ],
    includes: [
      'Embossed and debossed logo application on leather and vegan leather',
      'Metal logo plates, badges, and medallions',
      'Woven and printed interior labels',
      'Custom zipper pulls and branded hardware details',
      'Branded lining fabrics with repeating logos or custom prints',
      'Placement guidance so branding enhances rather than overwhelms the design',
    ],
    closingHeading: 'Signature Details, Done Right',
    closingText:
      'The strongest brands are built from consistent details. We help you develop a branding system for your bags that customers recognize at a glance.',
  },
  {
    slug: 'custom-hardware-development',
    title: 'Custom Hardware Development',
    short:
      'Design or source specialized clasps, buckles, chains, rings, closures, logo plates, feet, and other hardware for a distinctive finished product.',
    metaDescription:
      'Custom handbag hardware development — specialized clasps, buckles, chains, closures, logo plates, and feet designed for your product.',
    heroSubtext:
      'Distinctive clasps, buckles, chains, and closures designed or sourced for your bag.',
    intro: [
      'Hardware is the jewelry of a handbag — and custom hardware is what makes a design truly distinctive. We design or source specialized clasps, buckles, chains, rings, closures, logo plates, feet, and other hardware built specifically for your product.',
      'From a signature turn-lock to a custom chain strap, custom hardware gives your bag details no competitor can copy off a shelf.',
    ],
    includes: [
      'Custom clasp, closure, and turn-lock design and production',
      'Buckles, rings, adjusters, and strap hardware to your specification',
      'Custom chain straps in your choice of link style, weight, and finish',
      'Branded logo plates and decorative hardware',
      'Bag feet, corner protectors, and functional metal details',
      'Finish matching across all hardware: gold, silver, gunmetal, matte, and more',
    ],
    closingHeading: 'Details Nobody Else Has',
    closingText:
      'Custom hardware is an investment in distinction. We guide you through design, sampling, and finish selection so every metal detail feels intentional.',
  },
  {
    slug: 'design-modification-repurposing',
    title: 'Design Modification & Repurposing',
    short:
      'Update existing handbags by changing straps, hardware, materials, proportions, embellishments, or construction details.',
    metaDescription:
      'Handbag design modification and repurposing — update existing bags with new straps, hardware, materials, proportions, and details.',
    heroSubtext:
      'Give an existing handbag new life with updated straps, hardware, materials, and details.',
    intro: [
      'Sometimes the fastest path to a new product is improving an existing one. Our design modification and repurposing service updates existing handbags by changing straps, hardware, materials, proportions, embellishments, or construction details.',
      'It is a smart way to refresh a best-seller, adapt a design to a new market, or turn a vintage silhouette into a modern product.',
    ],
    includes: [
      'Strap and handle redesign: lengths, styles, and attachment methods',
      'Hardware upgrades and finish changes',
      'Material swaps: new leathers, fabrics, or linings on an existing pattern',
      'Proportion and size adjustments to the original design',
      'Embellishment additions or removals: studs, stitching, logos, trims',
      'Construction detail improvements for durability or cost',
    ],
    closingHeading: 'New Bag, Familiar Bones',
    closingText:
      'Modification projects move fast because the foundation already exists. Bring us a bag you want to improve and we will show you what is possible.',
  },
  {
    slug: 'quality-control-inspection',
    title: 'Quality Control & Inspection',
    short:
      'Inspect finished handbags for stitching, construction, hardware operation, material consistency, measurements, finishing, and overall craftsmanship.',
    metaDescription:
      'Handbag quality control and inspection — stitching, construction, hardware, materials, measurements, and finishing checked on every order.',
    heroSubtext:
      'Every handbag inspected for stitching, construction, hardware, and finishing before it ships.',
    intro: [
      'Quality is not a promise — it is a process. Our quality control and inspection service checks finished handbags for stitching, construction, hardware operation, material consistency, measurements, finishing, and overall craftsmanship before anything leaves the facility.',
      'Inspections follow documented standards tied to your approved sample, so "acceptable quality" is defined, not debated.',
    ],
    includes: [
      'Stitching inspection: tension, spacing, and seam integrity',
      'Construction checks against the approved sample and specifications',
      'Hardware operation testing: zippers, clasps, magnets, and closures',
      'Material consistency review across the production run',
      'Measurement verification against specification tolerances',
      'Finishing inspection: edges, threads, lining, and overall presentation',
    ],
    closingHeading: 'Nothing Ships on Hope',
    closingText:
      'A single bad batch can damage a brand for years. Our inspection process exists so your customers only ever see your product at its best.',
  },
  {
    slug: 'packaging-presentation',
    title: 'Packaging & Presentation',
    short:
      'Provide branded dust bags, boxes, tissue paper, tags, protective packaging, and retail-ready presentation.',
    metaDescription:
      'Handbag packaging and presentation — branded dust bags, boxes, tissue, tags, and retail-ready protective packaging.',
    heroSubtext:
      'Branded dust bags, boxes, and tags — a retail-ready unboxing for every handbag.',
    intro: [
      'The experience of your product starts before the bag is touched. Our packaging and presentation service provides branded dust bags, boxes, tissue paper, tags, protective packaging, and retail-ready presentation that make your handbag feel premium from the moment it arrives.',
      'Good packaging protects the product in transit, elevates perceived value, and turns delivery into a brand moment.',
    ],
    includes: [
      'Custom branded dust bags in cotton, flannel, or non-woven fabrics',
      'Rigid and folding gift boxes with your branding',
      'Branded tissue paper, stickers, and box inserts',
      'Hang tags, care cards, and product information tags',
      'Protective packaging: stuffing, wrap, and structure retention',
      'Retail-ready presentation suitable for stores and e-commerce',
    ],
    closingHeading: 'Unbox Your Brand',
    closingText:
      'Customers photograph great packaging and remember it. We build presentation packages that protect your product and promote your brand at the same time.',
  },
  {
    slug: 'production-consulting',
    title: 'Production Consulting',
    short:
      'Help designers and brands determine materials, manufacturing methods, pricing targets, minimum quantities, timelines, and the best approach for bringing a collection to market.',
    metaDescription:
      'Handbag production consulting — materials, methods, pricing, minimums, and timelines. The right plan for bringing your collection to market.',
    heroSubtext:
      'Expert guidance on materials, methods, pricing, minimums, and timelines — before you spend on production.',
    intro: [
      'The most expensive manufacturing mistakes are made before production starts. Our production consulting service helps designers and brands determine materials, manufacturing methods, pricing targets, minimum quantities, timelines, and the best overall approach for bringing a collection to market.',
      'You get honest, experienced answers to the questions that determine whether a product succeeds or stalls.',
    ],
    includes: [
      'Material and manufacturing method recommendations for your product',
      'Pricing target analysis: what your bag costs vs. what it can sell for',
      'Minimum quantity planning matched to your budget and channel',
      'Realistic production timelines from development through delivery',
      'Go-to-market manufacturing strategy for first collections',
      'A clear roadmap of next steps, whether you produce with us or not',
    ],
    closingHeading: 'Plan Before You Produce',
    closingText:
      'An hour of consulting can save thousands in production. Bring us your concept and your questions — leave with a plan.',
  },
  {
    slug: 'collection-development',
    title: 'Collection Development',
    short:
      'Develop coordinated handbag collections, including totes, clutches, crossbody bags, shoulder bags, backpacks, wallets, and accessories built around a consistent brand aesthetic.',
    metaDescription:
      'Handbag collection development — coordinated totes, clutches, crossbody bags, backpacks, wallets, and accessories in one brand aesthetic.',
    heroSubtext:
      'Coordinated collections — totes, clutches, crossbodies, wallets, and more — in one consistent aesthetic.',
    intro: [
      'A collection is more than a group of bags — it is a system. Our collection development service develops coordinated handbag collections including totes, clutches, crossbody bags, shoulder bags, backpacks, wallets, and accessories, all built around a consistent brand aesthetic.',
      'Shared materials, hardware, colors, and design language across styles give your line a professional, intentional feel — and make production more efficient.',
    ],
    includes: [
      'Collection planning: which styles, in which order, for which customer',
      'Coordinated design language across every style in the line',
      'Totes, clutches, crossbody bags, shoulder bags, and backpacks',
      'Wallets, card cases, and small leather goods to complete the range',
      'Shared materials, colors, and hardware for visual consistency',
      'Development and production scheduling for multi-style launches',
    ],
    closingHeading: 'Build a Line, Not Just a Bag',
    closingText:
      'Brands grow on collections. We help you plan a line that covers your customer\u2019s needs, photographs beautifully together, and produces efficiently.',
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return services.find((s) => s.slug === slug);
}
