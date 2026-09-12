/**
 * 产品数据源（阶段3真实内容版）。
 * imageSrc.cover 对应 /public/images/products/ 下的真实图片；
 * imageSrc.gallery 为产品详情页图集路径。
 */

export type ProductCategory =
  | "Shredders"
  | "Dewatering"
  | "Composting"
  | "Medical"
  | "Crushers"
  | "Balers"
  | "Compactors";

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  tagline: string;
  description: string[];
  features: string[];
  handles: string[];
  specs: { label: string; value: string }[];
  imageSrc: {
    cover: string;
    gallery: string[];
  };
  /** 旧站 How it works 步骤，有则详情页单独成块 */
  howItWorks?: string[];
  /** 旧站流程 / 对比 / 参数大图 */
  figures?: { src: string; caption: string }[];
};

export const productCategories: { id: ProductCategory | "All"; label: string }[] =
  [
    { id: "All", label: "All Products" },
    { id: "Shredders", label: "Industrial Shredders" },
    { id: "Dewatering", label: "Dewatering Screw Press" },
    { id: "Composting", label: "Composting Systems" },
    { id: "Medical", label: "Medical Waste" },
    { id: "Crushers", label: "Glass Crushers" },
    { id: "Balers", label: "Balers" },
    { id: "Compactors", label: "Compactors" },
  ];

export const products: Product[] = [
  {
    slug: "shredder-dewatering-combo",
    name: "Industrial Shredder & Dewatering Screw Press (Combo)",
    category: "Dewatering",
    tagline:
      "All-in-one machine combining size reduction and solid-liquid separation in a single step.",
    description: [
      "Shredder & Screw press AIO (All In One Machine) integrates an industrial shredder with a dewatering screw press. The all-in-one design combines size reduction and solid-liquid separation in one step — no conveying needed between stages.",
      "Widely used in waste-to-energy (RDF) processing, biodegradable organic waste composting, and commercial liquid food waste processed into biodiesel. The weight and volume of waste after treatment are greatly reduced, saving transport cost.",
      "For kitchen waste and fluid-state materials, we equip an automatic feeding system with a protective cover on the hopper to prevent splashing. For large-capacity applications, several dewatering screw presses can run in parallel — each independently controlled, so you can run one or two units when throughput is lower and save power.",
    ],
    features: [
      "Low-speed shredding for both hard and soft materials",
      "Shredding and dewatering integration — saves working space, reduces costs",
      "Shredder and screw press can be independently disassembled for easy maintenance",
      "High-quality European alloy cutting blades with strong wear and impact resistance",
      "Intelligent automatic reversal to clear jammed material",
      "Stainless steel wetted parts",
      "Spring or pneumatic back-pressure device",
      "Multiple sizes for any capacity",
    ],
    handles: [
      "Kitchen waste",
      "Organic waste",
      "Domestic waste",
      "Residue of herbal medicine",
      "Sea food",
      "Cooking oil",
      "RDF material",
    ],
    specs: [
      { label: "Type", value: "AIO — Shredder + Screw Press" },
      { label: "Shredded size", value: "~20–30 mm flakes" },
      { label: "Moisture content (out)", value: "<30%" },
      { label: "Operation", value: "Continuous, fully automatic" },
      { label: "Model series", value: "HM200 / HM800 / HM1000" },
    ],
    imageSrc: {
      cover: "/images/products/combo-aio-main.png",
      gallery: [
        "/images/products/combo-aio-hm1000.png",
        "/images/products/combo-aio-feature.png",
        "/images/products/combo-auto-feed.jpg",
        "/images/hero/banner-1.jpg",
      ],
    },
  },
  {
    slug: "industrial-shredder",
    name: "Industrial Shredders (Two / Four Shaft)",
    category: "Shredders",
    tagline:
      "Low-speed, high-torque two & four shaft shredders for multiple solid waste materials.",
    description: [
      "With our broad range of industrial shredders we provide the capability to efficiently shred multiple solid waste materials. TIMO builds double shaft industrial shredders with single or double motors to meet your application requirements. Double shaft shredders feature low speed and high torque.",
      "Hook shear blades manufactured of high-alloy heat-treated steel are mounted on hexagonal shafts. The number of hooks, reach and blade thickness are determined by the material being reduced. The shredders offer outstanding performance and reliability, handling organic waste, kitchen waste, metal, plastic, steel drums, wood pallets, cardboard and much more — with low noise, sparking, dust or heat rise.",
      "Combination shredding systems compose an industrial shredder with a conveyor and a dewatering screw press. The shredder first reduces waste into uniform strips; the conveyor carries material to the screw press for continuous dewatering. The whole line runs fully automatically.",
    ],
    features: [
      "Overload protection with automatic reversal",
      "Advanced multi-barrier bearing protection system",
      "Counter-rotating shafts at different speeds for efficient shear & tear",
      "Low noise and non-ballistic operation — no dust or flying particles",
      "Severe shock protection — cushion drive absorbs minor shock loads",
      "High-alloy heat-treated cutter for extra-long life, anti-corrosive & wear-resistant",
      "NSK tapered roller bearings, hexagonal cutter shafts for extra durability",
      "Simple operation with automatic reverse-start to clear cutters",
    ],
    handles: [
      "Kitchen waste",
      "Plastic waste",
      "Organic waste",
      "Paper waste",
      "Medical waste",
      "Wood waste",
      "Electric waste",
      "Tyre waste",
      "Metal waste",
      "Domestic waste",
    ],
    specs: [
      { label: "Configuration", value: "Single / double / four-shaft" },
      { label: "Drive", value: "Single or double motor" },
      { label: "Feature", value: "Low speed, high torque" },
      { label: "Capacity", value: "0.3 – 50 t/hr" },
      { label: "Output size", value: "10 – 300 mm" },
      { label: "Model series", value: "HM600 / HM1000 / AS2000" },
    ],
    imageSrc: {
      cover: "/images/products/shredder-hm1000.png",
      gallery: [
        "/images/products/shredder-hm600.png",
        "/images/products/shredder-feature.png",
        "/images/products/shredder-cutting-chamber.png",
        "/images/products/shredder-customized.jpg",
        "/images/products/combination-shredding-systems.jpg",
        "/images/hero/two-shaft-banner.jpg",
      ],
    },
  },
  {
    slug: "dewatering-screw-press",
    name: "Dewatering Screw Press",
    category: "Dewatering",
    tagline:
      "Continuous solid-liquid separation — squeeze liquid out of organic material.",
    description: [
      "TIMO specializes in the design, engineering and manufacture of screw presses — machines that squeeze liquid out of organic material, operating in a continuous (not batch) mode. Dewatering screw press can be used in an extremely wide variety of liquid-solid separation applications.",
      "High-capacity, sanitary press for continuous dewatering and juicing of organic and food products. An independently driven rotor and regulated cone section provide instantaneous pressure regulation — just the right squeeze for the material. We offer small screw press with Φ240 mm up to big models with screws that are Φ600–700 mm in diameter.",
      "The press squeezes material against a screen; liquid is collected through the screen while solids continue along the screw. It is a simple, slow-moving mechanical device. Different materials need different screw speeds, screw configurations and screens — we design the press that is best for your feedstock.",
    ],
    features: [
      "Continuous (non-batch) operation",
      "Stainless steel wetted parts for abrasive waste",
      "Peak values in dry matter content",
      "Heavy duty construction",
      "Hydraulic backpressure cone device",
      "Two-piece screen design — easy cleaning and maintenance",
      "Accepts widely varying flow rates",
      "Custom designed for every application",
    ],
    handles: [
      "Food waste",
      "Organic waste",
      "Pulp and paper industries",
      "Food processing & agriculture",
      "Chemical industry",
      "Municipal biosolids",
    ],
    specs: [
      { label: "Small model", value: "Φ240 mm diameter" },
      { label: "Large model", value: "Φ600–700 mm diameter" },
      { label: "Capacity (max)", value: "Up to 6 t/hr" },
      { label: "Mode", value: "Continuous gravitational drainage" },
    ],
    imageSrc: {
      cover: "/images/products/dewatering-main.png",
      gallery: [
        "/images/products/dewatering-feature.png",
        "/images/products/combo-aio-feature.png",
      ],
    },
  },
  {
    slug: "food-waste-composter",
    name: "Food Waste Industrial Composter",
    category: "Composting",
    tagline:
      "Convert food / kitchen / organic waste into fertilizer within 24 hours.",
    description: [
      "Food/Organic Waste Industrial Composter model XY-5000 uses high-temperature aerobic microbial treatment technology, integrating biological engineering, mechanical and electrical engineering, and environmental engineering. Selected high-temperature aerobic complex microbial strains ferment in the XY-5000 so unstable organic matter in kitchen/food waste is fully transformed into stable humus — organic fertilizer.",
      "The strain package is composed of 7 beneficial microbial complex bacteria. It stays dormant at room temperature, then grows rapidly at about 60 °C and decomposes kitchen waste to feed itself. Once charged, strains self-propagate — no need to add or change them during processing. Guangdong Institute of Microbiology testing confirms genetic stability, efficient degradation, and that the strain is safe and harmless to the environment.",
      "A complete composting line can include a stored ground hopper, conveyor, integrated shredder & dewatering squeezer, fermenter and deodorization system, converting food/kitchen/organic waste to fertilizer in 24 hours. Oily wastewater can be separated and reprocessed into biodiesel.",
    ],
    features: [
      "Wide applications: catering, kitchen waste, fresh and fruit/vegetable four-in-one disposal",
      "No need to adjust grease and pH before treatment",
      "Degradation completed within 24 hours — reduction rate >85%",
      "Excellent high-temperature aerobic strains — one-time input, no need to add repeatedly",
      "Equipment temperature maintained at 60 °C — kills pathogens including African swine fever",
      "Low unit energy consumption — high-efficiency heating, insulation and patented energy-saving control",
      "Integrated deodorization system",
    ],
    handles: ["Food waste", "Kitchen waste", "Organic waste", "Restaurant waste"],
    specs: [
      { label: "Model", value: "XY-5000" },
      { label: "Cycle", value: "~24 hours" },
      { label: "Reduction rate", value: ">85%" },
      { label: "Operating temperature", value: "60 °C" },
      { label: "Output", value: "Organic fertilizer" },
    ],
    imageSrc: {
      cover: "/images/products/composter-xy5000.png",
      gallery: [
        "/images/products/composter-xy5000-2.png",
        "/images/products/composter-xy5000-site.jpg",
        "/images/hero/composting-banner.jpg",
      ],
    },
    figures: [
      {
        src: "/images/products/xy5000-tech-table.png",
        caption: "Technical data of XY-5000",
      },
    ],
  },
  {
    slug: "medical-waste-shredder",
    name: "Cabinet-Type Small Medical Waste Shredder",
    category: "Medical",
    tagline:
      "Compact, safe on-site shredding for bio-medical waste and expired medicine.",
    description: [
      "TIMO provides two types of medical waste shredder. The cabinet-type small shredder is for hospitals and clinics that need to dispose of small volumes on-site in time. The industrial shredder is for medical waste treatment centres handling high daily volumes. A small vertical steam sterilizer or a large autoclave can work together with either type.",
      "Cabinet-type: 3 models occupying only 0.6–0.7 m³ — plug and play, mounted on heavy casters. Gravity-feed chute and high-strength alloy blades that rotate in two directions cut volume down to 50%. Quiet enough for office or factory. Handles medicine bottles, saline bottles and tubes, blister packs, catheters, syringes, glucose bottles, blood bags, ampoules and used needles.",
      "Industrial: standard and custom models from 200 kg/hr to 10 t/hr. Slow-speed, high-torque machines reduce fabrics, glass, soiled dressings, surgical gowns, plastics and stainless steel instruments to a non-reusable, unrecognizable state — from single-bag processing to autoclave-cart batch loading. Shredded, sterilized waste can go to landfill with MSW or be used as substitute fuel.",
    ],
    features: [
      "Operating in slow speed and high torque — shreds rigid and flexible waste",
      "Lighted viewing window on top for supervising operation",
      "Low noise 60–70 dB(A) and low energy consumption 1.5–2.2 kW",
      "High hardness alloy steel blades — wear and impact resistant",
      "Automatic reverse to clear stuck material",
      "Safety switch on feeding chute — auto-stops if cover opened accidentally",
      "Heavy casters for easy mobility",
    ],
    handles: [
      "Medicine bottles (saline, glucose, blood bags)",
      "Saline tubes",
      "Blister packs & catheters",
      "Syringes and sharps",
      "Ampoules & vaccine bottles",
      "Plastic, glass & stainless steel instruments",
    ],
    specs: [
      { label: "Cabinet models", value: "MW220 (1.5 kW) / MW250 (2.2 kW) / MW053 (3 kW)" },
      { label: "Cabinet footprint", value: "0.6 – 0.7 m³" },
      { label: "Volume reduction (cabinet)", value: "Down to 50%" },
      { label: "Industrial models", value: "HW300 / HW800 / HW1000" },
      { label: "Industrial capacity", value: "200 kg/hr – 10 t/hr" },
      { label: "Industrial motors", value: "7.5 kW up to 22+22 kW" },
    ],
    imageSrc: {
      cover: "/images/products/medical-mw220.png",
      gallery: [
        "/images/products/medical-shredder-small.jpg",
        "/images/applications/medical-waste-cover.jpg",
      ],
    },
  },
  {
    slug: "hospital-waste-shredder-sterilizer",
    name: "Hospital Waste Integrated Shredder & Sterilizer",
    category: "Medical",
    tagline:
      "Integrated shredding and sterilization for hospital & clinical waste streams.",
    description: [
      "TIMO offers two types of integrated shredder and sterilizer for hospital waste — steam sterilization type (AS30 & AS75) and disinfectant liquid type (PS150 & PS750).",
      "Steam type (AS30 & AS75) is for laboratories, dialysis centres, clinics and hospitals. Using only steam and electricity, it processes highly infectious waste on-site — bags, cardboard or rigid containers with sharps, gloves, labware, glass, tubing and filters — without emitting harmful substances. The cycle is automatic except for moving sterilized waste to the shredder. Total cycle 15–40 minutes, 30–75 litres per batch. After treatment the waste is fragmented, non-toxic and safe as regular municipal waste. High-grade stainless steel vessel (Pressure Equipment Directive); cross-cut two-shaft shredder with auto-reverse; internal steam generator and drain as standard.",
      "Disinfectant liquid type (PS150 & PS750) uses four-shaft cyclic crushing plus chemical spray. Whole bags of used medical waste go in for crushing, deformation and chemical sterilization. Output flakes <8 mm, 70% volume reduction, 99.9% germ kill. No waste gas or wastewater. Height does not exceed 1.65 m — for small clinics, hospital departments and on-site treatment.",
    ],
    features: [
      "Shredding + sterilization integrated in one machine",
      "Steam type: 99.99% microbial inactivation at ≥0.2 MPa / 134 °C",
      "Disinfectant type: four-shaft cyclic crushing + chemical spray",
      "Safe, enclosed processing — auto-stops if cover opened",
      "Touch-screen operation",
      "Compact — height does not exceed 1.65 m",
    ],
    handles: ["Hospital waste", "Clinical waste", "Infectious waste", "Sharps"],
    specs: [
      { label: "Steam type models", value: "AS30 / AS75" },
      { label: "Disinfectant type models", value: "PS150 / PS750" },
      { label: "Sterilization temp (steam)", value: "+5 – 134 °C" },
      { label: "Sterilization pressure", value: "≥0.2 – 0.3 MPa" },
      { label: "Microbial inactivation", value: "99.99% (steam) / 99.9% (liquid)" },
      { label: "Volume reduction", value: "60–80% (steam) / 70% (disinfectant)" },
      { label: "Rated power (steam)", value: "2.2+3 kW / 7.5+3 kW" },
      { label: "Max height (liquid type)", value: "1.65 m" },
    ],
    imageSrc: {
      cover: "/images/products/hospital-as30.png",
      gallery: [
        "/images/products/hospital-as30-as75.png",
        "/images/products/hospital-ps150-ps750.png",
      ],
    },
  },
  {
    slug: "glass-bottle-crusher",
    name: "Glass Bottle Waste Crusher",
    category: "Crushers",
    tagline:
      "Compact hand-fed crusher for beverage, medicine and infusion glass bottles.",
    description: [
      "TIMO provides two types of industrial crusher for glass waste. Larger multi-feed crushers (GB800 / GB400) accept batch feeding by conveyor for high-capacity recycling. Cabinet-type crushers are the hand-fed option for bars, hotels and restaurants — compact, simple and safe.",
      "GB800 (22 kW) crushes about 5,000–10,000 bottles/hr; GB400 (7.5 kW) about 1,000–2,000 bottles/hr. Custom cutters and spacers cut efficiently with little wear. After crushing, flakes are about 10–50 mm.",
      "GB210 is the quiet under-counter unit for boutique bars and hotels: 1.5 kW, 160 mm feeding mouth with a thick plastic cover to stop flakes bouncing out and keep dust in. Optional screens can take flakes down to ~1 mm (sand-like). GB200 is for ampoules, penicillin and vaccine vials — 200×200 mm mouth and a Z-type chute that protects the operator's hand. GB220 is a compact bar/hotel crusher with optional 8–15 mm screens.",
    ],
    features: [
      "Compact, hand-fed design",
      "Simple and safe to use",
      "Reliable long-life performance",
      "Multiple models for different volumes",
    ],
    handles: [
      "Beer / beverage bottles",
      "Medicine bottles",
      "Infusion bottles",
      "Ampoules & vaccine bottles",
    ],
    specs: [
      { label: "Multi-feed models", value: "GB800 (22 kW, 5–10k pcs/hr) / GB400 (7.5 kW, 1–2k pcs/hr)" },
      { label: "Cabinet models", value: "GB210 / GB220 / GB200" },
      { label: "Flake size (multi-feed)", value: "10–50 mm" },
      { label: "Flake size (GB200)", value: "~10 mm" },
      { label: "Feed", value: "Hand-fed or conveyor batch" },
    ],
    imageSrc: {
      cover: "/images/products/glass-crusher.png",
      gallery: [
        "/images/products/glass-crusher-gb400.png",
        "/images/products/glass-crusher-gb800.png",
      ],
    },
  },
  {
    slug: "vertical-hydraulic-baler",
    name: "Vertical Hydraulic Baler",
    category: "Balers",
    tagline:
      "Compress paper, film, cans and plastic at a 5:1 ratio to cut storage & transport cost.",
    description: [
      "TIMO vertical hydraulic balers compress paper, garbage, cans, film and plastic bottles at up to a 5:1 ratio. Strapping after compression greatly reduces storage space, eases transport and lowers processing cost.",
      "Fixing a trash bag around the outside of the chamber avoids bag damage common in traditional loading — especially suitable for material with poor rebound and high hardness.",
      "For space-limited sites, balers are designed with an upper feed opening (lower machine height), a mobile workbench and a double-chamber structure — one chamber presses while the other is loaded, so work can run in turn and throughput rises.",
    ],
    features: [
      "Up to 5:1 compression ratio",
      "Automatic chain bale ejector — quick and easy bale removal",
      "Compact dimensions — can be placed against a wall or corner",
      "Ram stops when feeding gate is opened for safe operation",
      "Euro and US standard anti-rebound gate structure",
      "Easy operation with push-button controls",
    ],
    handles: [
      "Paper waste",
      "Plastic film",
      "Plastic cans",
      "Cloths",
      "Cartons",
      "Bags",
      "Metal",
      "Domestic waste",
    ],
    specs: [
      { label: "Compression", value: "Up to 5:1" },
      { label: "Models", value: "PM500 / PM550 / PM800" },
      { label: "Type", value: "Vertical hydraulic" },
    ],
    imageSrc: {
      cover: "/images/products/baler-scene.png",
      gallery: [
        "/images/products/baler-pm500.jpg",
        "/images/products/baler-pm550.jpg",
      ],
    },
  },
  {
    slug: "eps-compactor",
    name: "EPS Foam Compactor",
    category: "Compactors",
    tagline:
      "Reduce expanded polystyrene foam volume up to 50:1 for easier storage, transport and reuse.",
    description: [
      "TIMO EPS cold compactors use auger compaction. The operator puts used EPS blocks (Styrofoam) into the hopper. Knives shred the foam into flakes; an auger pushes flakes into the compaction chamber and squeezes the air out as the foam bubbles shear. A pressure adjustment at the end of the chamber sets the volume-reduction ratio.",
      "Widely used in fish processing plants, electronics factories, supermarkets and farming. Light EPS scrap is densified up to 50:1, reaching densities up to 400 kg/m³ (from ~7–10 kg/m³). Logs take far less storage space, transport costs drop, and residual value of the scrap rises. The machine is energy-saving, generates no odor, and is convenient for on-and-off operation.",
      "EPS is 98% air and non-biodegradable. Hauling loose EPS to landfill means paying to transport air. Compacted blocks can be reused for plastic products such as picture frames. Diesel engine-driven models can be loaded on a truck for mobile collection around a region.",
    ],
    features: [
      "Pre-crusher in the hopper — automatically breaks up larger pieces",
      "Up to 50:1 compaction — 98% volume reduction",
      "Output density: 300–400 kg/m³ (from ~7–10 kg/m³)",
      "Easily loaded by hand or via conveyor",
      "Variable block sizes depending on machine",
      "Compacted blocks take up only 2–5% of original space",
      "Diesel model available for off-site mobile collection",
    ],
    handles: ["EPS foam", "Expanded polystyrene packaging"],
    specs: [
      { label: "Compaction ratio", value: "Up to 50:1" },
      { label: "Output density", value: "~300 kg/m³" },
      { label: "Feed", value: "Hand / conveyor / diesel mobile" },
    ],
    imageSrc: {
      cover: "/images/products/eps-esp220.png",
      gallery: [
        "/images/products/eps-compactor.png",
        "/images/products/eps-cp250.png",
        "/images/products/eps-blocks.png",
      ],
    },
    howItWorks: [
      "Throw EPS scraps into the machine hopper",
      "The pre-breaker breaks foam blocks into smaller flakes",
      "An auger compactor presses the foam into compacted logs",
      "Stack the logs onto pallets",
      "Result: ~7 kg/m³ scrap densified up to 400 kg/m³",
    ],
    figures: [
      {
        src: "/images/products/eps-recycling-flow.jpg",
        caption: "EPS recycling flow",
      },
      {
        src: "/images/products/eps-compact-blocks.png",
        caption: "How the compactor turns EPS into blocks",
      },
    ],
  },
  {
    slug: "pur-compactor",
    name: "PUR (Polyurethane) Compactor",
    category: "Compactors",
    tagline:
      "Break and compact PUR foam waste into cylinder blocks — 5–10:1, ready for recycling instead of landfill.",
    description: [
      "Recycled PUR foam typically comes from daily goods, automobiles, mattresses, carpet padding, sofas and insulation for walls, panels, industrial buildings and cold stores. PUR foam waste recycling is especially important in Europe, where landfill space is shrinking and disposal costs are rising.",
      "TIMO screw compactor YS360 breaks and compacts PUR foam into a cylinder-shaped block at 320–350 kg/m³. Compacted material can go to PUR recycling centres instead of landfill. Foam can be compacted directly into endless plastic bags, so poisonous PUR dust is encapsulated for transport.",
      "A pre-crusher is optional for whole PUR plates; small pieces can be fed into the hopper directly. At refrigerator/freezer recycling centres the YS360 can sit under a silo of collected PUR pieces. Production dust can be vacuum-absorbed and blown to the compactor via a silo with cell lock.",
    ],
    features: [
      "Compaction ratio 5–10:1",
      "Screw compaction — safe to operate",
      "Custom feeding hopper options",
      "Small footprint, energy saving",
      "Compacted foam will not bounce back",
      "Matches German-technology production lines",
      "No explosion risk — gas is sucked away during compaction",
    ],
    handles: [
      "PUR foam plates and pieces",
      "Mattress & sofa foam",
      "Carpet padding",
      "Building / cold-store insulation",
      "Refrigerator recycling foam",
      "PUR production dust",
    ],
    specs: [
      { label: "Model", value: "YS360" },
      { label: "Compaction ratio", value: "5–10:1" },
      { label: "Output density", value: "320–350 kg/m³" },
      { label: "From", value: "~7 kg/m³ densified toward 70+ kg/m³ in bagged output" },
      { label: "Pre-crusher", value: "Optional" },
      { label: "Discharge", value: "Endless plastic bags / cylinder blocks" },
    ],
    imageSrc: {
      cover: "/images/products/pur-ys360.png",
      gallery: [
        "/images/products/pur-compactor.png",
        "/images/products/pur-compactor-2.png",
      ],
    },
    howItWorks: [
      "Throw PUR foam waste into the hopper",
      "Optional pre-crusher breaks whole plates into pieces (small pieces can skip this)",
      "A screw compactor presses the foam into compacted flakes",
      "Material can be compacted directly into endless plastic bags",
      "Result: ~7 kg/m³ waste densified up to ~70 kg/m³",
    ],
    figures: [
      {
        src: "/images/products/pur-process.png",
        caption: "PUR recycling process — foam in, compacted rolls out, value recovered",
      },
      {
        src: "/images/products/pur-compare.png",
        caption: "Volume comparison before and after compaction",
      },
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
