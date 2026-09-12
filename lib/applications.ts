/**
 * 应用场景数据源。
 * 对应旧站 Application + Separation 共 8 页。
 */

export type ApplicationGroup = "separation" | "application";

export type Application = {
  slug: string;
  name: string;
  group: ApplicationGroup;
  tagline: string;
  description: string[];
  relatedProducts: string[];
  process: string[];
  imageSrc: {
    cover: string;
    gallery: string[];
  };
  parts?: { name: string; image: string }[];
  figures?: { src: string; caption: string }[];
};

export const applicationGroups: { id: ApplicationGroup; label: string; intro: string }[] =
  [
    {
      id: "separation",
      label: "Separation",
      intro:
        "Solid–liquid separation and depackaging for food, kitchen and organic waste — preparing a clean substrate for digestion, composting or RDF.",
    },
    {
      id: "application",
      label: "Applications",
      intro:
        "Complete lines for composting, medical, pulp & paper, slaughterhouse and municipal waste — shredders, presses, conveyors and custom systems.",
    },
  ];

export const applications: Application[] = [
  {
    slug: "organic-food-waste",
    name: "Convert Food/Kitchen/Organic Waste To Fertilizer",
    group: "application",
    tagline:
      "Pre-treatment system plus aerobic fermenter to convert waste into fertilizer within 24 hours.",
    description: [
      "Food, kitchen or organic waste — including pieces still in packaging — must be shredded to prepare an optimal substrate for fermentation. TIMO provides a complete recycling system: a pre-treatment line plus a compostor (aerobic fermentation machine).",
      "The pre-treatment line includes a 120L/240L bin-lifter, a manual sorting table (2–4 operators), an integrated industrial shredder & dewatering screw press, and a discharge auger conveyor. The shredder uses two parallel counter-rotating cutters at low speed and high torque to cut, shear and tear waste into strips or chips. The screw press underneath squeezes liquid through a 2 mm stainless-steel screen. Incoming moisture is typically 30–80%; after pressing it is about 20–40% — you cannot squeeze water out by hand.",
      "Shredded, dewatered solids are conveyed to the compostor. Oil heating holds tank temperature so the waste becomes fertilizer in 24 hours. Composter capacity can be customized to the site.",
    ],
    relatedProducts: [
      "shredder-dewatering-combo",
      "food-waste-composter",
      "dewatering-screw-press",
    ],
    process: [
      "Bin-lifter loads a 120L or 240L bin onto the manual sorting table",
      "Waste travels on a moving belt; operators pick out metal, plastic bags and other foreign objects",
      "Integrated shredder cuts mixed waste to about 36×12 mm; the screw press underneath squeezes liquid through a 2 mm screen",
      "Liquid drains from the trough (pipe or pump); solids discharge between the cone and press shell",
      "Crosswise then side auger conveyors feed solids to the compostor for 24-hour aerobic fermentation",
    ],
    imageSrc: {
      cover: "/images/applications/food-organic-cover.jpg",
      gallery: [
        "/images/applications/convert-food-waste-to-fertilizer.jpg",
        "/images/applications/fertilizer-after-composting.png",
        "/images/applications/part-after-processing.jpg",
      ],
    },
    parts: [
      { name: "120L / 240L Bin-Lifter", image: "/images/applications/part-bin-lifter.jpg" },
      { name: "Manual Sorting Table", image: "/images/applications/part-sorting-table.jpg" },
      { name: "Integrated Shredder & Press", image: "/images/products/combo-aio-main.png" },
      { name: "Aerobic Fermenter", image: "/images/products/composter-xy5000.png" },
    ],
    figures: [
      {
        src: "/images/applications/organic-food-waste-recycling-system.png",
        caption:
          "Layout: 1. Bin-lifter → 2. Sorting table → 3. Shredder → 4. Dewatering screw press → 5. Auger conveyor → 6. Composter",
      },
    ],
  },
  {
    slug: "food-waste-shredding-dewatering",
    name: "Food/Organic/Kitchen Waste Shredding & Dewatering System",
    group: "separation",
    tagline:
      "Shred, depack and dewater food waste — solid–liquid separation for biogas, compost or RDF.",
    description: [
      "Food, kitchen and organic waste sent to landfill emit greenhouse gas as they decompose. TIMO offers a recycle line for expired packaged food, fruit & vegetable waste mixed with plastic, supermarket leftovers and similar streams.",
      "Working process: a two-shaft shredder crushes collected waste → a paddle depackaging machine separates organic from inorganic and grinds organics to pulp → inorganic (bags, film, cardboard) can go to RDF → a dewatering screw press splits the pulp into solid organics and liquid. Liquid can be heat-sterilized, fermented and refined into biofuel or biogas; residue after refining can be used for insect farming.",
      "Single or twin-screw presses are configured to the material — continuous or interrupted flight, hydraulic or pneumatic cone. The integrated shredder + press first increases surface area, then squeezes liquid through the screen against a back-pressure cone. Horizontal shaft depackagers at wet AD plants typically recover about 90% of the feed at ~97% purity (excluding glass).",
    ],
    relatedProducts: [
      "shredder-dewatering-combo",
      "dewatering-screw-press",
      "industrial-shredder",
    ],
    process: [
      "Collected food / kitchen / organic waste is crushed by a two-shaft shredder",
      "Paddle depackager separates organic from inorganic and grinds organics to pulp / mash",
      "Inorganic fraction (plastic, film, cardboard) discharged as RDF feedstock",
      "Dewatering screw press splits organic pulp into solid and liquid",
      "Liquid goes to sterilization / fermentation / biogas; solids to compost or digestion",
    ],
    imageSrc: {
      cover: "/images/applications/organic-waste-before.jpg",
      gallery: [
        "/images/applications/organic-waste-after.jpg",
        "/images/applications/food-waste-shredding-depackaging.jpg",
        "/images/hero/banner-1.jpg",
        "/images/applications/hm1000c.png",
      ],
    },
    figures: [
      {
        src: "/images/applications/anaerobic-digestion-process.jpg",
        caption: "Anaerobic digestion process after shredding and dewatering",
      },
      {
        src: "/images/applications/depackaging-pulping-system.jpg",
        caption: "Food-waste depackaging and pulping line",
      },
    ],
  },
  {
    slug: "large-capacity-food-waste-composting",
    name: "Large Capacity Food Waste Composting System",
    group: "application",
    tagline:
      "7–10 t/hr bag-breaker, windrow composting and trommel screening for supermarket, factory and kerbside organics.",
    description: [
      "TIMO’s large-capacity composting system handles supermarket leftovers, food-factory remains, door-to-door organics and expired packaged food at about 7–10 tons/hr. After processing, food/organic/kitchen waste becomes fertilizer; inorganics such as plastic bags, bottles, stone and cardboard are separated.",
      "The line has three stages. Stage 1 — bag breaking: a SUS304 storing & feeding hopper (twin screws) → SUS304 chain-plate conveyor → bag breaker (counter-rotating drums tear bags without destroying the contents) → discharging conveyor (typical 1.6 m discharge height, customizable). A loader tips waste into the hopper; the bag breaker handles MSW fractions up to 300–400 mm, organics and mixed bagged material.",
      "Stage 2 — aerobic composting: a self-propelled windrow turner with four wheels and an automatic liquid-spray device adds microbial strains while turning. Turning lowers pile temperature, adds oxygen and prevents poisonous gases — turning mixed waste into loose, dry fertilizer.",
      "Stage 3 — fertilizer & packaging separation: a SUS304 auger hopper (over 5 m³) feeds a compost trommel (5–50 t/hr). Undersize fertilizer passes the screen onto a horizontal conveyor; oversize (bags, bottles, stone, cardboard) exits along the spiral guide rail. Enclosed, low-dust design; SUS304 screen.",
    ],
    relatedProducts: ["industrial-shredder", "shredder-dewatering-combo"],
    process: [
      "Loader tips waste into the automatic storing & feeding hopper; twin screws meter it onto the chain-plate conveyor",
      "Bag breaker tears bags at high volume without damaging contents; discharge conveyor stacks mixed waste on the ground",
      "Self-propelled compost turner windrows the mix, spraying microbial strains and adding oxygen",
      "Dried, loosened fertilizer is loaded into the trommel feed hopper",
      "Trommel screens fertilizer through; oversize inorganics exit the other end of the drum",
    ],
    imageSrc: {
      cover: "/images/applications/compost-turner.jpg",
      gallery: [
        "/images/applications/bag-breaker-system.png",
        "/images/applications/trommel-screen-system.png",
      ],
    },
    figures: [
      {
        src: "/images/applications/bag-breaker-system.png",
        caption: "Bag-breaker system: hopper → chain-plate conveyor → bag breaker → discharge",
      },
      {
        src: "/images/applications/trommel-screen-system.png",
        caption: "Trommel screen system: auger feed → rotating drum → fertilizer vs oversize outlets",
      },
    ],
  },
  {
    slug: "food-waste-depackaging",
    name: "Food Waste Depackaging Machine",
    group: "separation",
    tagline:
      "One input, two outputs — recover organics at 90–97% purity and reject packaging.",
    description: [
      "A food-waste depackager separates organics from heterogeneous feedstock. One input; two outputs: the extract (food scraps / organics for composting or wet AD) and the reject (packaging). TIMO systems apply the least force needed to open packs without splintering them.",
      "Accepted streams include mixed fruit & vegetable waste, supermarket waste, packaged produce, restaurant waste and expired daily food — beverage cartons and cans, wrappers, bags, styrofoam, yogurt pots, plastic bottles and jars, foil and cardboard. Recovery and purity typically sit in the 90–97% range, depending how much food remains on the packaging.",
      "The HM series integrated shredder & dewatering squeezer destroys packaging and splits liquid from pack material. The FDS series shredder + grinder separator splits food/organic from mixed MSW or supermarket waste (coffee pods, bakery, canned vegetables, bottled drinks and more). Detergent can be separated from plastic packing at 88–95% purity.",
    ],
    relatedProducts: ["shredder-dewatering-combo", "dewatering-screw-press"],
    process: [
      "Feed packaged food, SSO or mixed supermarket waste into the hopper",
      "Separating paddles open packs with controlled force; optional water spray for sticky solids",
      "Organics (extract) pass the drum screen as a clean organic flow",
      "Packaging (reject) discharges for RDF or recycling",
      "Liquid streams (beverages) can be split from bottles the same way",
    ],
    imageSrc: {
      cover: "/images/applications/depackaging-cover.jpg",
      gallery: [
        "/images/applications/depackaging-machine.png",
        "/images/applications/fds-depaker.png",
        "/images/applications/mixed-supermarket-waste.jpg",
        "/images/applications/bakery-waste.jpg",
      ],
    },
    parts: [
      { name: "Beverage cartons", image: "/images/applications/beverage-cartons.jpg" },
      { name: "Canned food", image: "/images/applications/canned-food.jpg" },
      { name: "Kerbside / SSO", image: "/images/applications/kerbside-waste.jpg" },
      { name: "Restaurant waste", image: "/images/applications/restaurant-waste.jpg" },
      { name: "Clean organic flow", image: "/images/applications/clean-organic-waste.jpg" },
      { name: "Bakery waste", image: "/images/applications/bakery-waste.jpg" },
    ],
    figures: [
      {
        src: "/images/applications/depackaging-pulping-system.jpg",
        caption: "Food-waste depackaging & pulping system",
      },
    ],
  },
  {
    slug: "medical-waste",
    name: "Medical Waste",
    group: "application",
    tagline:
      "Cabinet-type and industrial shredders — 50 kg/hr to 10 t/hr — plus a two-stage 2–3 t/hr recycling line.",
    description: [
      "TIMO offers a full range of medical-waste equipment. Slow-speed, high-torque shredders reduce fabrics, glass, plastics and stainless-steel instruments. After shredding, material is ready for thermal destruction, or it can be sterilized and disposed of with regular waste.",
      "Two-stage recycling line (about 2–3 t/hr): autoclave sterilizer → 660L bin-lifter → primary shredder (60–200 mm) → conveyor → vertical two-stage two-shaft shredder (10–30 mm) → discharge auger to truck. The worker pulls the 660L bin from the autoclave, rolls it into the lifter, and the line runs from there.",
      "Cabinet-type units take 0.6–0.7 m³ and roll on casters for pharmacies and clinics (pill bottles, syringes, blister packs). Industrial models from 200 kg/hr to 10 t/hr accept bag or autoclave-cart batch loading and render waste unrecognizable — volume down as much as 70% before landfill.",
    ],
    relatedProducts: [
      "medical-waste-shredder",
      "hospital-waste-shredder-sterilizer",
    ],
    process: [
      "Waste is sterilized in the autoclave chamber",
      "660L bin is drawn out and rolled into the bin-lifter",
      "Primary shredder reduces material to 60–200 mm",
      "Conveyor feeds the vertical two-stage shredder (final 10–30 mm)",
      "Discharge auger loads a truck for landfill or further recycling",
    ],
    imageSrc: {
      cover: "/images/applications/medical-waste-cover.jpg",
      gallery: [
        "/images/applications/two-stage-medical-system.png",
        "/images/applications/old-medical-waste.jpg",
        "/images/applications/pharmacy-pill-bottle.jpg",
        "/images/applications/medical-final-particles.png",
      ],
    },
    parts: [
      { name: "Autoclave sterilizer", image: "/images/applications/autoclave-sterilizer.png" },
      { name: "Two-stage shredder line", image: "/images/applications/two-stage-medical-system.png" },
      { name: "Normal medical waste", image: "/images/applications/old-medical-waste.jpg" },
      { name: "Pharmacy pill bottles", image: "/images/applications/pharmacy-pill-bottle.jpg" },
    ],
  },
  {
    slug: "pulp-paper-waste",
    name: "Pulp & Paper Waste",
    group: "application",
    tagline:
      "Shred ragger wire / pulper rejects and dewater plastic reject from paper mills.",
    description: [
      "TIMO industrial paper shredders process waste paper, cardboard and pulp waste. Low to mid-speed, high-torque machines give durable size reduction for paper waste and pulper ropes. Shredded material can become RDF or new products; in-feed/discharge conveyors and magnetic separation can be integrated.",
      "Pulper ropes (ragger wire / pulper tail) are plastic films, tapes, labels, hemp rope and steel wire twisted into a compressed tail — about 45% steel and 55% post-consumer waste. They must be pulled from the pulper and are extremely tough to shred. Pulper rejects are simpler: films, paper, tapes and labels only.",
      "With a low-speed high-torque shredder plus separator, ropes and rejects become secondary steel wire and alternative fuel (film, paper, tapes, labels). Cardboard can be almost 100% recycled; shredders deliver consistent cross-cut in a single pass for paper, tubes, webs and production waste.",
    ],
    relatedProducts: ["industrial-shredder", "dewatering-screw-press"],
    process: [
      "Shred ragger wire or pulper reject in a low-speed, high-torque shredder",
      "Magnetic separation recovers steel wire from pulper ropes",
      "Dewater the plastic / film reject fraction",
      "Shredded paper and film go to RDF or recycling",
    ],
    imageSrc: {
      cover: "/images/applications/pulp-paper-cover.jpg",
      gallery: [
        "/images/applications/pulper-rejects.jpg",
        "/images/applications/paper-cardboard-waste.jpg",
        "/images/applications/pulp-paper-main.jpg",
      ],
    },
  },
  {
    slug: "slaughterhouse-waste",
    name: "Slaughterhouse Waste",
    group: "application",
    tagline:
      "AS2000 shreds poultry, bone, offal and whole cattle, horses or pigs in about 20 seconds.",
    description: [
      "Slaughterhouse (abattoir) waste is a major environmental challenge. Beneficial routes include biogas, fertilizer and animal feed; anaerobic digestion yields energy-rich biogas and cuts greenhouse gases. Size reduction before pasteurization makes the process easier and more efficient.",
      "TIMO shredders handle 2–25 t/day with 10–15 mm output. Special seals cope with bones and whole carcasses. AS2000 is built for complete cattle, horse and pig carcasses plus offal and bones, ahead of rendering. A whole animal in about 20 seconds; capacity 7–10 t/hr. It is installed as the first stage of a rendering plant, before crushers and mincers. Rotor and stator knives are hard-faced; motor size and shaft speed are matched to capacity.",
      "Features include automatic reverse on overload, labyrinth + conventional bearing seals, a mesh cage around the base (three sides permanent, one door with safety switch), IP65 stainless cabinet, NSK tapered rollers, hexagonal shafts, a maintenance platform, and a W1200×L2600 mm hopper with W650×L2000 mm chamber — large enough for a whole carcass. 37 kW motor and high-strength cast sideboards.",
    ],
    relatedProducts: ["industrial-shredder"],
    process: [
      "Feed carcasses or by-products into the W1200×L2600 mm hopper",
      "AS2000 reduces a whole cattle, horse or pig in about 20 seconds",
      "Mesh cage and door safety switch keep the shredding area contained",
      "10–15 mm output goes to rendering, biogas or compost",
    ],
    imageSrc: {
      cover: "/images/applications/slaughterhouse-cover.jpg",
      gallery: [
        "/images/applications/slaughterhouse-waste.jpg",
        "/images/applications/as2000-site.png",
        "/images/applications/slaughterhouse-cattle.jpg",
      ],
    },
    parts: [
      { name: "Mash cage", image: "/images/applications/as2000-mash-cage.png" },
      { name: "Cutting chamber", image: "/images/applications/as2000-chamber.png" },
    ],
  },
  {
    slug: "municipal-waste",
    name: "Municipal Waste",
    group: "application",
    tagline:
      "Two-shaft, four-shaft and RDF shredders for MSW — 0.3 to 50 t/hr, 10–300 mm output.",
    description: [
      "Municipal waste is solid waste from daily life — recyclable, kitchen, harmful and other fractions. TIMO builds primary shredders, two-shaft and four-shaft industrial shredders, and RDF shredders for MSW: 0.3–50 t/hr and 10–300 mm final size. Cutters and surface treatment are matched to the material for wear life and throughput.",
      "Two-shaft shredders are valued for stable performance and low maintenance. Four-shaft machines include an integrated sizing screen that keeps material in the chamber until it reaches the target size, so flakes are uniform. Double-motor two-shaft units are available where extra torque is needed.",
    ],
    relatedProducts: ["industrial-shredder", "vertical-hydraulic-baler"],
    process: [
      "Feed municipal / domestic waste into the primary shredder",
      "Reduce to uniform pieces — 10–300 mm depending on the line",
      "Optional magnetic separation, RDF preparation or baling",
      "Shredded material used as RDF or sent to landfill",
    ],
    imageSrc: {
      cover: "/images/applications/municipal-cover.jpg",
      gallery: [
        "/images/applications/two-shaft-shredder.jpg",
        "/images/applications/four-shaft-shredder.jpg",
        "/images/hero/two-shaft-banner.jpg",
      ],
    },
  },
];

export function getApplication(slug: string) {
  return applications.find((a) => a.slug === slug);
}

export function applicationsByGroup(group: ApplicationGroup) {
  return applications.filter((a) => a.group === group);
}
