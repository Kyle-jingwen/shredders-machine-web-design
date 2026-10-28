/**
 * 首页 Hero 轮播数据 — 与旧站 shredding-machine.com 首页 Banner 一一对应。
 */

export type HeroSlide = {
  title: string;
  description: string;
  href: string;
  cta: string;
  image: string;
};

export const heroSlides: HeroSlide[] = [
  {
    title: "Shredder & Dewatering Combined Machine",
    description:
      "This unit features an industrial shredder mounted on top and a dewatering screw‑press located at the bottom. It shreds and dewaters organic and kitchen waste to prepare feedstock for compost and fertilizer production.",
    href: "/products/shredder-dewatering-combo",
    cta: "View Product",
    image: "/images/hero/banner-1.jpg",
  },
  {
    title: "Food/Kitchen/Organic Waste Convert To Fertilizer System",
    description:
      "This food‑waste composting system converts food and organic waste into fertilizer within a 24‑hour aerobic fermentation cycle. It features a pre‑treatment unit (bin lifter, manual sorting table, industrial shredder, screw‑press dewatering machine and auger conveyors) and an aerobic fermentation composter with degrading compost bacteria.",
    href: "/applications/organic-food-waste",
    cta: "Explore Solution",
    image: "/images/hero/banner-2.jpg",
  },
  {
    title: "Robust Two Shaft Industrial Shredder",
    description:
      "Manufacturing industrial single shaft shredder, two shaft shredder, four shaft shredder for municipal solid waste size reduction, including plastic waste, wooden waste, metal waste, glass waste, RDF waste, paper mill factory waste etc.",
    href: "/products/industrial-shredder",
    cta: "View Product",
    image: "/images/hero/banner-3.jpg",
  },
  {
    title: " Food Waste Depackaging Machine",
    description:
      "Food waste depackaging systems extract organics from mixed packaged waste, achieving 90‑97% recovery for composting or biogas production. Suitable for supermarket, restaurant, expired food and fruit‑vegetable waste with packaging.",
    href: "/applications/food-waste-depackaging",
    cta: "Explore Solution",
    image: "/images/hero/banner-4.jpg",
  },
  {
    title: "Dewatering Screw Press",
    description:
      "Standard and custom‑tailored continuous‑mode dewatering screw presses: Sanitary high‑capacity liquid‑solid separation for organic & food materials, Φ240‑700 mm screw diameter available.",
    href: "/products/dewatering-screw-press",
    cta: "View Product",
    image: "/images/hero/banner-5.jpg",
  },
];
