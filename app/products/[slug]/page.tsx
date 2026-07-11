import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { products, getProduct } from "@/lib/products";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product not found" };
  return { title: product.name, description: product.tagline };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <>
      <PageHeader
        eyebrow={product.category}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: product.name },
        ]}
        title={product.name}
        description={product.tagline}
      />

      <section className="container-x py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* 左：图集 */}
          <div className="space-y-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={product.imageSrc.cover}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            {product.imageSrc.gallery.length > 0 && (
              <div className="grid grid-cols-3 gap-3">
                {product.imageSrc.gallery.slice(0, 3).map((g, i) => (
                  <div
                    key={i}
                    className="relative aspect-square overflow-hidden rounded-xl"
                  >
                    <Image
                      src={g}
                      alt={`${product.name} — gallery ${i + 1}`}
                      fill
                      sizes="33vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 右：正文 */}
          <div>
            <Reveal>
              <div className="space-y-4">
                {product.description.map((p, i) => (
                  <p key={i} className="text-base leading-relaxed text-steel-300">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>

            {/* 规格亮点 */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-ink-700">
              <div className="border-b border-ink-700 bg-ink-800 px-5 py-3">
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
                  Specifications
                </h3>
              </div>
              <dl className="divide-y divide-ink-800">
                {product.specs.map((s) => (
                  <div
                    key={s.label}
                    className="flex justify-between gap-4 px-5 py-3 text-sm"
                  >
                    <dt className="text-steel-400">{s.label}</dt>
                    <dd className="text-right font-medium text-steel-200">
                      {s.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Request a Quote
              </Link>
              <a href={`mailto:${site.contact.email}`} className="btn-ghost">
                Ask an Engineer
              </a>
            </div>
          </div>
        </div>

        {/* 特性 + 适用物料 */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="surface p-7">
            <h3 className="font-display text-lg font-bold text-white">
              Key features
            </h3>
            <ul className="mt-4 space-y-3">
              {product.features.map((f) => (
                <li key={f} className="flex gap-3 text-sm text-steel-300">
                  <span className="mt-1 text-brand-500">◆</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="surface p-7">
            <h3 className="font-display text-lg font-bold text-white">
              Handles
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {product.handles.map((h) => (
                <span
                  key={h}
                  className="rounded-full border border-ink-600 bg-ink-800 px-3 py-1.5 text-sm text-steel-300"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RelatedProducts currentSlug={product.slug} category={product.category} />
    </>
  );
}

function RelatedProducts({
  currentSlug,
  category,
}: {
  currentSlug: string;
  category: string;
}) {
  const related = products
    .filter((p) => p.slug !== currentSlug && p.category === category)
    .slice(0, 3);

  const fallback = products.filter((p) => p.slug !== currentSlug).slice(0, 3);
  const list = related.length > 0 ? related : fallback;

  return (
    <section className="border-t border-ink-800 bg-ink-900/40">
      <div className="container-x py-16">
        <h2 className="mb-8 font-display text-2xl font-bold text-white">
          Related products
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {list.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="group surface overflow-hidden transition-all hover:-translate-y-1 hover:border-brand-500/50"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={p.imageSrc.cover}
                  alt={p.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-white group-hover:text-brand-500">
                  {p.name}
                </h3>
                <p className="mt-1 line-clamp-2 text-sm text-steel-400">
                  {p.tagline}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
