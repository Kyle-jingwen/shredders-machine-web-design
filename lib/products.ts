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
      "For kitchen waste and fluid-state materials, we equip an automatic feeding system with a protective cover on the hopper to prevent splashing. For large-capacity applications, multiple dewatering screw presses can be arranged in parallel — each independently controlled.",
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
      "Hook shear blades manufactured of high-alloy heat-treated steel are mounted on hexagonal shafts. The number of hooks, reach and blade thickness are determined by the material being reduced. The shredders offer outstanding performance and reliability, handling organic waste, kitchen waste, metal, plastic, steel drums, wood pallets, cardboard and much more.",
      "Combination shredding systems compose an industrial shredder with a conveyor and a dewatering screw press — fully automatic from first cut to final dewatered product.",
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
      "High-capacity, sanitary press for continuous dewatering and juicing of organic and food products. An independently driven rotor and regulated cone section provide instantaneous pressure regulation — just the right squeeze for the material. We offer small screw press with Φ240 mm up to big models with screws that are Φ700 mm in diameter.",
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
      { label: "Large model", value: "Φ700 mm diameter" },
      { label: "Capacity (max)", value: "Up to 6 t/hr" },
      { label: "Mode", value: "Continuous" },
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
      "Food/Organic Waste Industrial Composter model XY-5000 uses high-temperature aerobic microbial treatment technology, integrating biological engineering, mechanical and electrical engineering, and environmental engineering. High-temperature aerobic complex microbial strains carry out fermentation in the XY-5000 to completely transform unstable organic matter into stable humus — such as organic fertilizer.",
      "The composting system includes a stored ground hopper, conveyor, integrated shredder & dewatering squeezer machine, fermenter and deodorization system, converting food/kitchen/organic waste to fertilizer in 24 hours.",
    ],
    features: [
      "Wide applications: catering, kitchen waste, fresh and fruit/vegetable four-in-one disposal",
      "No need to adjust grease and pH before treatment",
      "Degradation completed within 24 hours — reduction rate >85%",
      "Excellent high-temperature aerobic strains — one-time input, no need to add repeatedly",
      "Equipment temperature maintained at 60 °C — kills pathogens including African swine fever",
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
        "/images/hero/composting-banner.jpg",
        "/images/applications/food-organic-cover.jpg",
      ],
    },
  },
  {
    slug: "medical-waste-shredder",
    name: "Cabinet-Type Small Medical Waste Shredder",
    category: "Medical",
    tagline:
      "Compact, safe on-site shredding for bio-medical waste and expired medicine.",
    description: [
      "TIMO offers 3 models of cabinet-type small medical waste shredder utilizing the latest shredding technologies. The shredders occupy only 0.6–0.7 m³ working space — plug and play — mounted on heavy casters for easy mobility.",
      "Equipped with a gravity-feed input chute and high-strength alloy cutting blades that rotate in two directions to reduce size and volume of medical waste down to 50%. Offers an efficient, safe, economical solution for pharmacies, clinics, hospitals and medical supply rooms.",
      "Industrial medical waste shredders are also available with capacity ranging from 200 kg/hr to 10 tons/hr for medical waste treatment centres.",
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
      { label: "Models", value: "MW220 / MW250 / MW053" },
      { label: "Footprint", value: "0.6 – 0.7 m³" },
      { label: "Power (small)", value: "1.5 – 3 kW" },
      { label: "Volume reduction", value: "Down to 50%" },
      { label: "Industrial capacity", value: "200 kg/hr – 10 t/hr" },
      { label: "Industrial models", value: "HW300 / HW800 / HW1000" },
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
      "The steam type (AS30 & AS75) are suitable for laboratories, dialysis centres, clinics and hospitals. Using only steam and electricity to process highly infectious waste on-site — the entire process is automatic except for manually loading. Total cycle time as fast as 15–40 minutes, processing 30–75 litres of medical waste.",
      "The disinfectant liquid type (PS150 & PS750) uses four-shaft cyclic crushing plus chemical disinfectant liquid spray. Output flakes <8 mm, reduces volume by 70%, effective against 99.9% of germs. No waste gas or wastewater produced.",
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
      { label: "Microbial inactivation", value: "99.99%" },
      { label: "Volume reduction", value: "60–80% (steam) / 70% (disinfectant)" },
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
      "A compact crusher for on-site processing of glass bottle waste — beer & beverage bottles, medicine bottles, infusion bottles, ampoules, penicillin and vaccine small bottles.",
      "The ideal hand-fed crusher for small recycling and business applications, from under-counter units for boutique bars to larger multi-feed crushers for hotels and restaurants. Simple, safe and reliable.",
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
      { label: "Models", value: "GB200 / GB210 / GB220 / GB400" },
      { label: "Feed", value: "Hand-fed" },
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
      "For space-limited situations, balers are designed with upper feed opening and a double-chamber structure — one chamber presses while the other is loaded, greatly increasing efficiency.",
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
      "TIMO EPS compactors are specifically designed to reduce the size of expanded polystyrene foam for easier storage and transportation. EPS is 98% air — transporting loose EPS to landfill means paying for air.",
      "EPS is non-biodegradable. The compactor packs EPS into tight blocks (density up to 300 kg/m³ from ~10 kg/m³) that can be reused for products such as picture frames, improving pollution and resource conditions.",
      "We also make diesel engine-driven EPS compactors — load one into a truck, drive around your region to collect EPS waste, and compact on-site. Compact ratio up to 50:1.",
    ],
    features: [
      "Pre-crusher in the hopper — automatically breaks up larger pieces",
      "Up to 50:1 compaction — 98% volume reduction",
      "Output density: 300 kg/m³ (from ~10 kg/m³)",
      "Easily loaded by hand or via conveyor",
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
      gallery: ["/images/products/eps-compactor.png"],
    },
  },
  {
    slug: "pur-compactor",
    name: "PUR (Polyurethane) Compactor",
    category: "Compactors",
    tagline: "Volume reduction and compaction for polyurethane foam waste.",
    description: [
      "The PUR compactor is designed to reduce and compact polyurethane foam waste, minimizing volume for efficient storage, handling and downstream recycling.",
    ],
    features: [
      "Compacts polyurethane foam efficiently",
      "Reduces storage and transport volume",
      "Robust, easy-to-operate design",
    ],
    handles: ["Polyurethane (PUR) foam"],
    specs: [{ label: "Material", value: "Polyurethane foam" }],
    imageSrc: {
      cover: "/images/products/pur-ys360.png",
      gallery: [
        "/images/products/pur-compactor.png",
        "/images/products/pur-compactor-2.png",
        "/images/products/pur-process.png",
        "/images/products/pur-compare.png",
      ],
    },
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
