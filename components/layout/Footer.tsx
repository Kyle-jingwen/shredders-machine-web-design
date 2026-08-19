import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { products } from "@/lib/products";
import { applications } from "@/lib/applications";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-800 bg-ink-900">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* 品牌区 */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center" aria-label={`${site.brand} home`}>
              <Image
                src="/images/logo.png"
                alt="TIMO Shredding & Dewatering"
                width={200}
                height={80}
                className="h-14 w-auto sm:h-16"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-steel-400">
              {site.description}
            </p>

            <div className="mt-6 space-y-2 text-sm text-steel-400">
              <p className="flex items-start gap-2">
                <span className="mt-0.5 text-brand-500">✉</span>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="hover:text-white"
                >
                  {site.contact.email}
                </a>
              </p>
              <p className="flex items-start gap-2">
                <span className="mt-0.5 text-brand-500">⚲</span>
                <span>{site.contact.address}</span>
              </p>
            </div>

            {/* 社交 */}
            <div className="mt-6 flex gap-3">
              <a
                href={site.social.youtube}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-700 text-steel-400 transition-colors hover:border-brand-500 hover:text-white"
                aria-label="YouTube"
              >
                YT
              </a>
              <a
                href={site.social.vimeo}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-700 text-steel-400 transition-colors hover:border-brand-500 hover:text-white"
                aria-label="Vimeo"
              >
                V
              </a>
            </div>
          </div>

          {/* 产品 */}
          <FooterCol title="Products">
            {products.map((p) => (
              <FooterLink key={p.slug} href={`/products/${p.slug}`}>
                {p.name.split("(")[0].trim()}
              </FooterLink>
            ))}
            <FooterLink href="/products">All products →</FooterLink>
          </FooterCol>

          {/* 应用 */}
          <FooterCol title="Applications">
            {applications.slice(0, 6).map((a) => (
              <FooterLink key={a.slug} href={`/applications/${a.slug}`}>
                {a.name}
              </FooterLink>
            ))}
          </FooterCol>

          {/* 公司 */}
          <FooterCol title="Company">
            <FooterLink href="/about">About TIMO</FooterLink>
            <FooterLink href="/video">Video</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
            <FooterLink href="/contact">Request a Quote</FooterLink>
          </FooterCol>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-800 pt-6 text-xs text-steel-400 sm:flex-row">
          <p>
            © {year} {site.brand}. All rights reserved. · {site.domain}
          </p>
          <p className="text-steel-400">
            Industrial Shredder &amp; Dewatering Screw Press Manufacturer
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
        {title}
      </h4>
      <ul className="space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-steel-400 transition-colors hover:text-brand-500"
      >
        {children}
      </Link>
    </li>
  );
}
