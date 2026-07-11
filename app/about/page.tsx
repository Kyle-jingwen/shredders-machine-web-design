import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { Placeholder } from "@/components/ui/Placeholder";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "TIMO is a manufacturer of industrial shredders, dewatering screw presses and integrated waste recycling systems.",
};

const values = [
  {
    title: "Engineering-led",
    desc: "Machines designed around low-speed, high-torque reliability and real material behavior.",
  },
  {
    title: "Application-first",
    desc: "Solutions tailored to your material, capacity and moisture targets — not one-size-fits-all.",
  },
  {
    title: "Built to last",
    desc: "High-alloy heat-treated cutters, NSK bearings and robust cutting chambers for long service life.",
  },
  {
    title: "Global support",
    desc: "From single machines to full turnkey lines, with guidance across the whole process.",
  },
];

const milestones = [
  { year: "Core", label: "Industrial shredder & screw press manufacturing" },
  { year: "Range", label: "5+ product lines across shredding, dewatering, compaction" },
  { year: "Reach", label: "Solutions for 6 major waste-stream industries" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About TIMO"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        title="Industrial shredding & dewatering, engineered right"
        description="TIMO manufactures industrial shredders, dewatering screw presses, bin-lifters, conveyors, separators and customized machines for waste recycling worldwide."
      />

      {/* 简介 + 图 */}
      <section className="container-x py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            {/* 阶段3回填：公司/工厂/车间图 */}
            <Placeholder
              label="公司/工厂/生产车间实拍图（如有可用 Home 系列或车间照片）"
              ratio="4/3"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Who we are"
              title="A partner for waste size-reduction & separation"
              description="We provide industrial shredders, dewatering squeezers, bin-lifters, manual sorting tables, auger / chain-pan / belt conveyors and customized machines for a wide range of applications — from food and organic waste to medical, municipal, slaughterhouse and pulp & paper waste."
            />
            <RevealStagger className="mt-8 grid grid-cols-3 gap-4">
              {milestones.map((m) => (
                <RevealItem key={m.year}>
                  <div className="surface p-4 text-center">
                    <p className="font-display text-sm font-bold text-brand-500">
                      {m.year}
                    </p>
                    <p className="mt-1 text-xs text-steel-400">{m.label}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </div>
      </section>

      {/* 价值观 */}
      <section className="border-y border-ink-800 bg-ink-900/40">
        <div className="container-x py-16 lg:py-20">
          <SectionHeading
            align="center"
            eyebrow="Our approach"
            title="What we stand for"
          />
          <RevealStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <RevealItem key={v.title}>
                <div className="surface h-full p-6">
                  <div className="mb-4 h-1 w-10 rounded-full bg-brand-500" />
                  <h3 className="font-display text-lg font-bold text-white">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm text-steel-400">{v.desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-16 text-center">
        <Reveal>
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Let&apos;s find the right machine for your waste
          </h2>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/products" className="btn-primary">
              Browse Products
            </Link>
            <Link href="/contact" className="btn-ghost">
              Contact Us
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
