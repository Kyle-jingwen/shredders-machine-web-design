import Link from "next/link";
import { products } from "@/lib/products";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/cards/ProductCard";
import { RevealStagger, RevealItem } from "@/components/ui/Reveal";

export function ProductsShowcase() {
  const featured = products;

  return (
    <section className="container-x py-20 lg:py-28">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Our Equipment"
          title={
            <>
              A complete range of{" "}
              <span className="text-brand-500">recycling machines</span>
            </>
          }
          description="From heavy-duty two shaft shredders to precision dewatering screw presses and compact medical waste units — engineered for demanding, continuous operation."
        />
        <Link href="/products" className="btn-ghost shrink-0">
          View all products →
        </Link>
      </div>

      <RevealStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {featured.map((product) => (
          <RevealItem key={product.slug} className="h-full">
            <ProductCard product={product} />
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}
