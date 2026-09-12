import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { ProcessFlowchart } from "./ProcessFlowchart";

const steps = [
  {
    n: "01",
    title: "Feeding",
    desc: "Waste is loaded via hopper, bin-lifter or conveyor into the shredding chamber.",
  },
  {
    n: "02",
    title: "Shredding",
    desc: "Low-speed high-torque shafts reduce material into uniform strips.",
  },
  {
    n: "03",
    title: "Separation",
    desc: "Optional magnetic / manual separation removes metal and unwanted fractions.",
  },
  {
    n: "04",
    title: "Dewatering",
    desc: "Screw press squeezes out liquid, cutting weight, volume and transport cost.",
  },
];

export function ProcessSection() {
  return (
    <section className="relative border-t border-ink-800 bg-ink-900/40">
      <div className="container-x py-20 lg:py-28">
        <div className="grid gap-12 xl:grid-cols-[0.9fr_1.1fr] xl:items-center">
          <div>
            <SectionHeading
              eyebrow="How It Works"
              title={
                <>
                  A fully automatic{" "}
                  <span className="text-brand-500">recycling line</span>
                </>
              }
              description="Combine size reduction and solid-liquid separation in a continuous, fully automatic process — from raw waste to reduced, reusable output."
            />

            <RevealStagger className="mt-10 space-y-2">
              {steps.map((s) => (
                <RevealItem key={s.n}>
                  <div className="flex gap-5 rounded-xl p-4 transition-colors hover:bg-ink-800/60">
                    <span className="font-display text-2xl font-bold text-brand-500">
                      {s.n}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-white">
                        {s.title}
                      </h3>
                      <p className="mt-1 text-sm text-steel-400">{s.desc}</p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>

          <Reveal from="left">
            <ProcessFlowchart />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
