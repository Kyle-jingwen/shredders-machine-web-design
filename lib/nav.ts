/**
 * 主导航结构。
 * Products 10 项 / Applications 8 项 顺序与旧站一致（含 PUR Compactor）。
 * 带 children 的项在桌面端显示为下拉菜单。
 */
export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; desc?: string }[];
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "/products",
    children: [
      {
        label: "Industrial Shredder & Dewatering Screw Press",
        href: "/products/shredder-dewatering-combo",
        desc: "All-in-one size reduction & solid-liquid separation",
      },
      {
        label: "Industrial Shredders",
        href: "/products/industrial-shredder",
        desc: "Two & four shaft, low speed high torque",
      },
      {
        label: "Dewatering Screw Press",
        href: "/products/dewatering-screw-press",
        desc: "Continuous solid-liquid separation",
      },
      {
        label: "Food Waste Industrial Composter",
        href: "/products/food-waste-composter",
        desc: "Waste to fertilizer in 24 hours",
      },
      {
        label: "Medical Waste Shredder",
        href: "/products/medical-waste-shredder",
        desc: "Compact cabinet-type on-site unit",
      },
      {
        label: "Hospital Waste Integrated Shredder And Sterilizer",
        href: "/products/hospital-waste-shredder-sterilizer",
        desc: "Shredding + sterilization in one process",
      },
      {
        label: "Glass Bottle Crusher",
        href: "/products/glass-bottle-crusher",
        desc: "Compact hand-fed glass bottle crusher",
      },
      {
        label: "Vertical Hydraulic Baler",
        href: "/products/vertical-hydraulic-baler",
        desc: "5:1 compression for paper, film, cans",
      },
      {
        label: "EPS Compactor",
        href: "/products/eps-compactor",
        desc: "Compact expanded polystyrene foam for reuse",
      },
      {
        label: "PUR (Polyurethane) Compactor",
        href: "/products/pur-compactor",
        desc: "Compact PUR foam waste for recycling",
      },
    ],
  },
  {
    label: "Applications",
    href: "/applications",
    children: [
      {
        label: "Convert Food/Kitchen/Organic Waste To Fertilizer",
        href: "/applications/organic-food-waste",
        desc: "Pre-treatment system + fermenter",
      },
      {
        label: "Food/Organic/Kitchen Waste Shredding & Dewatering System",
        href: "/applications/food-waste-shredding-dewatering",
        desc: "Solid–liquid split for biogas & compost",
      },
      {
        label: "Large Capacity Food Waste Composting System",
        href: "/applications/large-capacity-food-waste-composting",
        desc: "Bag breaker, windrow turner & trommel",
      },
      {
        label: "Food Waste Depackaging Machine",
        href: "/applications/food-waste-depackaging",
        desc: "Organics vs packaging — 90–97% purity",
      },
      {
        label: "Medical Waste",
        href: "/applications/medical-waste",
        desc: "50 kg – 5000 kg/h size reduction",
      },
      {
        label: "Pulp & Paper Waste",
        href: "/applications/pulp-paper-waste",
        desc: "Ragger wire shredding & dewatering",
      },
      {
        label: "Slaughterhouse Waste",
        href: "/applications/slaughterhouse-waste",
        desc: "Animal by-product rendering prep",
      },
      {
        label: "Municipal Waste",
        href: "/applications/municipal-waste",
        desc: "MSW & domestic waste shredding",
      },
    ],
  },
  { label: "Video", href: "/video" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
