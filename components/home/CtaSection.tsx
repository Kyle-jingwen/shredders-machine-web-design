import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export function CtaSection() {
  return (
    <section className="container-x py-20 lg:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-ink-700 bg-ink-800 px-6 py-14 text-center sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-brand-glow opacity-80" />
          <div className="pointer-events-none absolute inset-0 bg-grid-lines [background-size:36px_36px] opacity-30" />

          <div className="relative mx-auto max-w-3xl">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Need a solution or a quotation for your application?
            </h2>
            <p className="mt-4 text-base text-steel-300">
              Tell us your material, capacity and moisture target — our engineers
              will recommend the right machine or system.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn-primary">
                Get a Free Quote
              </Link>
              <a href={`mailto:${site.contact.email}`} className="btn-ghost">
                {site.contact.email}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
