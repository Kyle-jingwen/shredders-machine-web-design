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
    title: "Integrated Industrial Shredder And Dewatering Squeezer Machine",
    description:
      "The machine integrated industrial shredder with dewatering squeezer in one machine which can shredding, depacking, dewatering the organic/food/kitchen waste for preparing to make compost or fertilizer.",
    href: "/products/shredder-dewatering-combo",
    cta: "View Product",
    image: "/images/hero/banner-1.jpg",
  },
  {
    title: "Food/Kitchen/Organic Waste Convert To Fertilizer System",
    description:
      "The system including stored ground hopper, conveyor, integrated shredder and dewatering squeezer machine, fermenter, deodorization system which can convert food/kitchen/organic waste to fertilizer in 24 hours.",
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
];
