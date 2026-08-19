import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { applications, getApplication } from "@/lib/applications";
import { getProduct } from "@/lib/products";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/Reveal";

export function generateStaticParams() {
  return applications.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const application = getApplication(slug);
  if (!application) return { title: "Application not found" };
  return { title: application.name, description: application.tagline };
}

export default async function ApplicationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const application = getApplication(slug);
  if (!application) notFound();

  const related = application.relatedProducts
    .map((s) => getProduct(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <PageHeader
        eyebrow="Application"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Applications", href: "/applications" },
          { label: application.name },
        ]}
        title={application.name}
        description={application.tagline}
      />

      <section className="container-x py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={application.imageSrc.cover}
                alt={application.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            {application.imageSrc.gallery.length > 0 && (
              <div className="mt-4 grid grid-cols-3 gap-3">
                {application.imageSrc.gallery.slice(0, 6).map((g, i) => (
                  <div
                    key={i}
                    className="relative aspect-square overflow-hidden rounded-xl bg-ink-800"
                  >
                    <Image
                      src={g}
                      alt={`${application.name} — detail ${i + 1}`}
                      fill
                      sizes="33vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </Reveal>

          <Reveal from="left">
            <div className="space-y-4">
              {application.description.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-steel-300">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="font-display text-lg font-bold text-white">
                Process flow
              </h3>
              <ol className="mt-4 space-y-3">
                {application.process.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-sm font-bold text-brand-500">
                      {i + 1}
                    </span>
                    <span className="pt-0.5 text-sm text-steel-300">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-8">
              <Link href="/contact" className="btn-primary">
                Discuss your project
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 推荐设备 */}
      {related.length > 0 && (
        <section className="border-t border-ink-800 bg-ink-900/40">
          <div className="container-x py-16">
            <h2 className="mb-8 font-display text-2xl font-bold text-white">
              Recommended equipment
            </h2>
            <RevealStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <RevealItem key={p.slug}>
                  <Link
                    href={`/products/${p.slug}`}
                    className="group surface flex h-full overflow-hidden transition-all hover:-translate-y-1 hover:border-brand-500/50"
                  >
                    <div className="relative w-2/5 shrink-0 bg-ink-900">
                      <Image
                        src={p.imageSrc.cover}
                        alt={p.name}
                        fill
                        sizes="20vw"
                        className="object-contain p-2"
                      />
                    </div>
                    <div className="flex flex-col p-4">
                      <h3 className="font-display text-sm font-bold text-white group-hover:text-brand-500">
                        {p.name}
                      </h3>
                      <p className="mt-1 line-clamp-3 text-xs text-steel-400">
                        {p.tagline}
                      </p>
                    </div>
                  </Link>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </section>
      )}
    </>
  );
}
