import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProductExplorer } from "@/components/products/ProductExplorer";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Industrial shredders, dewatering screw presses, composting systems, medical waste shredders, balers and compactors.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Products"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
        title="Industrial recycling equipment"
        description="Browse our full range of shredding, dewatering and compaction machines. Filter by category or search by material to find the right fit."
      />
      <ProductExplorer />
    </>
  );
}
