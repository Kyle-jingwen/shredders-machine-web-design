/**
 * 应用场景数据源（阶段3真实内容版）。
 * imageSrc 字段对应 /public/images/applications/ 下的真实图片。
 */

export type Application = {
  slug: string;
  name: string;
  tagline: string;
  description: string[];
  relatedProducts: string[];
  process: string[];
  imageSrc: {
    cover: string;
    gallery: string[];
  };
};

export const applications: Application[] = [
  // ① Convert Food/Kitchen/Organic Waste To Fertilizer
  {
    slug: "organic-food-waste",
    name: "Convert Food/Kitchen/Organic Waste To Fertilizer",
    tagline:
      "Pre-treatment system plus fermenter to convert waste into fertilizer within 24 hours.",
    description: [
      "TIMO provides a reliable food/organic/kitchen waste recycling system for composting applications. The system includes a waste composting pre-treatment system and a fermenter. The pre-treatment system includes a bin-lifter, manual sorting platforms, industrial shredders, dewatering machine and discharge auger conveyor.",
      "The industrial shredder & dewatering squeezer combo machine integrates a industrial shredder with a dewatering squeezer in one machine. The shredder on top cuts waste to ~36×12 mm, then the dewatering squeezer squeezes out liquid through a 2 mm stainless steel screen. The shredded, dewatered organic waste is then conveyed to the fermentation tank, where oil heating converts it to organic fertilizer within 24 hours.",
    ],
    relatedProducts: [
      "shredder-dewatering-combo",
      "food-waste-composter",
      "dewatering-screw-press",
    ],
    process: [
      "120L / 240L bin-lifter tips waste onto manual sorting table",
      "Operators sort out foreign objects (metal, plastic bags)",
      "Integrated shredder & dewatering squeezer shreds waste to ~36 mm and squeezes out liquid",
      "Auger conveyor feeds shredded & dewatered waste to aerobic fermenter",
      "Fermenter converts organic waste to organic fertilizer within 24 hours",
    ],
    imageSrc: {
      cover: "/images/applications/food-organic-cover.jpg",
      gallery: [
        "/images/applications/food-organic-app-1.jpg",
        "/images/hero/composting-banner.jpg",
      ],
    },
  },
  // ② Food/Organic/Kitchen Waste Shredding & Dewatering System
  {
    slug: "food-waste-shredding-dewatering",
    name: "Food/Organic/Kitchen Waste Shredding & Dewatering System",
    tagline:
      "Integrated shredding and dewatering line for solid-liquid separation of food and organic waste.",
    description: [
      "TIMO's integrated shredder and dewatering squeezer system handles food, organic and kitchen waste in a continuous, fully automatic process — shredding waste into uniform strips and immediately squeezing out liquid to reduce weight and volume.",
      "The system can be configured as a standalone shredding line or combined with bin-lifters, conveyors and manual sorting platforms for a complete pre-treatment solution ahead of composting, anaerobic digestion or RDF production.",
    ],
    relatedProducts: [
      "shredder-dewatering-combo",
      "dewatering-screw-press",
      "industrial-shredder",
    ],
    process: [
      "Feed food / organic / kitchen waste via hopper or bin-lifter",
      "Low-speed high-torque shredder reduces waste to uniform strips",
      "Dewatering screw press squeezes out liquid continuously",
      "Dry fraction discharged for composting or anaerobic digestion",
      "Liquid fraction collected for biogas or disposal",
    ],
    imageSrc: {
      cover: "/images/applications/food-organic-app-1.jpg",
      gallery: [
        "/images/applications/food-organic-cover.jpg",
        "/images/hero/composting-banner.jpg",
      ],
    },
  },
  // ③ Large Capacity Food Waste Composting System
  {
    slug: "large-capacity-food-waste-composting",
    name: "Large Capacity Food Waste Composting System",
    tagline:
      "High-volume aerobic fermentation system for municipal, canteen and industrial-scale food waste.",
    description: [
      "For large-scale food waste treatment, TIMO provides a complete high-capacity composting system: pre-treatment line (shredding + dewatering) plus the XY-5000 food waste industrial composter with high-temperature aerobic microbial fermentation technology.",
      "The system integrates biological engineering, mechanical and electrical engineering and environmental engineering. High-temperature aerobic microorganisms operate at 60 °C, effectively killing pathogens including African swine fever virus. Organic matter is fully transformed into stable humus (organic fertilizer) within 24 hours, with a reduction rate exceeding 85%.",
    ],
    relatedProducts: [
      "food-waste-composter",
      "shredder-dewatering-combo",
      "dewatering-screw-press",
    ],
    process: [
      "Large-volume waste collected and conveyed to pre-treatment line",
      "Shredding & dewatering to prepare fermentation substrate",
      "High-temperature aerobic fermentation in XY-5000 composter",
      "Pathogens killed at sustained 60 °C operating temperature",
      "Stable organic fertilizer output within 24 hours, reduction rate >85%",
    ],
    imageSrc: {
      cover: "/images/hero/composting-banner.jpg",
      gallery: [
        "/images/applications/food-organic-cover.jpg",
        "/images/applications/food-organic-app-1.jpg",
      ],
    },
  },
  // ④ Food Waste Depackaging Machine
  {
    slug: "food-waste-depackaging",
    name: "Food Waste Depackaging Machine",
    tagline:
      "Destroy packaging and automatically separate food waste from packaging material.",
    description: [
      "TIMO's integrated industrial shredder and dewatering squeezer HM series destroys packaging and separates packaging material from the food or liquid inside automatically. High efficiency and reliable operation saves time and labour compared to manual sorting.",
      "The FDS series integrated shredder and grinder separator separates food/organic waste from mixed MSW or supermarket waste — mixed grocery waste, coffee pods, bakery waste, canned vegetables, bottled drinks, and more. 90–99% clean organic/food waste can be separated. The machine can also separate detergent from plastic packing with 88–95% purity.",
    ],
    relatedProducts: ["shredder-dewatering-combo", "dewatering-screw-press"],
    process: [
      "Feed packaged food or MSW waste into hopper",
      "Integrated shredder cuts waste to ~55×12 mm",
      "Depacker/grinder separator separates organics from packaging",
      "Organic pulp / liquid passes through screen",
      "Packaging fraction discharged for RDF or recycling",
    ],
    imageSrc: {
      cover: "/images/applications/depackaging-main.jpg",
      gallery: [
        "/images/applications/depackaging-main.jpg",
        "/images/applications/food-organic-cover.jpg",
      ],
    },
  },
  // ⑤ Medical Waste
  {
    slug: "medical-waste",
    name: "Medical Waste",
    tagline:
      "Universal & cabinet-type shredders for 50 kg to 10 t/hr medical waste processing.",
    description: [
      "TIMO offers a full range of equipment to process medical waste. Slow-speed, high-torque shredders easily reduce the toughest medical-grade materials — from fabrics to glass, plastics and stainless steel instruments. After shredding, the material is ideal for thermal destruction or can be sterilised and disposed of with regular waste.",
      "A two-stage shredding system provides a complete medical waste recycling line: autoclave sterilizer → 660L bin-lifter → primary shredder (60–200 mm) → conveyor → two-stage shredder (10–30 mm) → discharge auger conveyor. Capacity 2–3 t/hr.",
    ],
    relatedProducts: [
      "medical-waste-shredder",
      "hospital-waste-shredder-sterilizer",
    ],
    process: [
      "Medical waste placed into autoclave sterilizer for sterilization",
      "660L bin-lifter tips sterilized waste into primary shredder (60–200 mm)",
      "Conveyor belt carries primary shredded waste to two-stage shredder",
      "Two-stage shredder reduces to final size 10–30 mm",
      "Discharge auger conveyor to truck for landfill or further processing",
    ],
    imageSrc: {
      cover: "/images/applications/medical-waste-cover.jpg",
      gallery: [
        "/images/applications/medical-waste-app-1.jpg",
        "/images/applications/medical-waste-app.jpg",
        "/images/products/medical-shredder-small.jpg",
      ],
    },
  },
  // ⑥ Pulp & Paper Waste
  {
    slug: "pulp-paper-waste",
    name: "Pulp & Paper Waste",
    tagline:
      "Shred ragger wire and dewater plastic reject from pulp & paper mills.",
    description: [
      "TIMO high-performance industrial paper shredders process waste paper, cardboard, and pulp waste. Low to mid-range speed, high-torque shredders provide effective, durable and reliable size reduction for all paper waste and pulper ropes.",
      "Pulper ropes (ragger wire) consist of plastic films, tapes, labels, hemp rope, steel wires and other raw materials — compressed and extremely tough to shred. TIMO provides low-speed, high-torque shredders plus separators to recycle pulper ropes into valuable secondary steel wire and alternative fuel (plastic film, paper, tapes, labels).",
    ],
    relatedProducts: ["industrial-shredder", "dewatering-screw-press"],
    process: [
      "Shred ragger wire / reject waste in low-speed high-torque shredder",
      "Magnetic separation to recover steel wire",
      "Dewater plastic reject fraction",
      "Shredded material used as RDF or recycled material",
    ],
    imageSrc: {
      cover: "/images/applications/pulp-paper-cover.jpg",
      gallery: [
        "/images/applications/pulp-paper-main.jpg",
        "/images/applications/pulp-paper-rope.jpg",
        "/images/applications/pulp-paper-app-1.jpg",
      ],
    },
  },
  // ⑦ Slaughterhouse Waste
  {
    slug: "slaughterhouse-waste",
    name: "Slaughterhouse Waste",
    tagline:
      "Shred poultry, bone, offal and whole dead animals for biogas and rendering.",
    description: [
      "Slaughterhouse waste (abattoir waste) treatment is a major environmental challenge. TIMO provides size-reduction equipment capable of handling 2–25 t/day of slaughterhouse waste with a required particle size at output of 10–15 mm.",
      "The dead animal shredder AS2000 is especially designed for whole carcasses of cattle, horses and pigs as well as offal and bones. AS2000 can process a whole cattle, horse or pig in 20 seconds. Capacity up to 7–10 t/hr. Special seals prevent contamination. Anaerobic digestion of this processed waste generates energy-rich biogas and reduces greenhouse gas emissions.",
    ],
    relatedProducts: ["industrial-shredder"],
    process: [
      "Feed animal by-products into shredder via hopper (W1200×L2600 mm)",
      "Heavy-duty AS2000 shredder reduces whole carcasses in ~20 seconds",
      "Mesh cage contains the shredding area for safety",
      "10–15 mm output discharged for rendering, biogas or compost",
    ],
    imageSrc: {
      cover: "/images/applications/slaughterhouse-cover.jpg",
      gallery: [
        "/images/applications/slaughterhouse-main.jpg",
        "/images/applications/slaughterhouse-cattle.jpg",
        "/images/applications/slaughterhouse-app-1.jpg",
      ],
    },
  },
  // ⑧ Municipal Waste
  {
    slug: "municipal-waste",
    name: "Municipal Waste",
    tagline:
      "Two shaft, four shaft and RDF shredders for MSW size reduction — 0.3 to 50 t/hr.",
    description: [
      "Municipal waste refers to solid waste generated in daily life. TIMO manufactures primary shredders, industrial two-shaft shredders, industrial four-shaft shredders and RDF shredders for municipal solid waste (MSW) size reduction — from 0.3 to 50 t/hr production capacity, and 10 mm to 300 mm final output size.",
      "TIMO's two-shaft shredders are well-received for stable performance and low maintenance cost. Four-shaft shredders include an integrated sizing screen keeping materials in the shredding area until the desired size is reached, ensuring uniform final flakes.",
    ],
    relatedProducts: ["industrial-shredder", "vertical-hydraulic-baler"],
    process: [
      "Feed municipal / domestic waste into primary shredder",
      "Reduce to uniform pieces — 10–300 mm depending on application",
      "Optional magnetic separation, RDF preparation or baling",
      "Shredded material used as RDF fuel or landfill",
    ],
    imageSrc: {
      cover: "/images/applications/municipal-cover.jpg",
      gallery: [
        "/images/applications/municipal-waste.jpg",
        "/images/applications/municipal-app-1.jpg",
      ],
    },
  },
];

export function getApplication(slug: string) {
  return applications.find((a) => a.slug === slug);
}
