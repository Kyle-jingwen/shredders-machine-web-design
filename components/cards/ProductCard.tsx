import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group surface flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/50 hover:shadow-2xl hover:shadow-black/40"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-ink-800">
        <Image
          src={product.imageSrc.cover}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand-500">
          {product.category}
        </span>
        <h3 className="mt-2 font-display text-lg font-bold leading-snug text-white group-hover:text-brand-500">
          {product.name}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-steel-400">
          {product.tagline}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-steel-200 group-hover:text-brand-500">
          View details
          <span className="transition-transform group-hover:translate-x-1" aria-hidden>
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
