import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Crumb = { label: string; href?: string };

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  breadcrumbs?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-ink-800">
      <div className="pointer-events-none absolute inset-0 bg-grid-lines [background-size:44px_44px] opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-brand-glow" />

      <div className="container-x relative py-14 lg:py-20">
        {breadcrumbs && (
          <nav className="mb-5 flex flex-wrap items-center gap-2 text-xs text-steel-400">
            {breadcrumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-2">
                {c.href ? (
                  <Link href={c.href} className="hover:text-brand-500">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-steel-300">{c.label}</span>
                )}
                {i < breadcrumbs.length - 1 && <span>/</span>}
              </span>
            ))}
          </nav>
        )}

        <Reveal>
          {eyebrow && (
            <span className="eyebrow mb-3">
              <span className="h-px w-6 bg-brand-500" />
              {eyebrow}
            </span>
          )}
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-steel-400">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
