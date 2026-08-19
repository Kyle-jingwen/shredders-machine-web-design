import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealStagger, RevealItem } from "@/components/ui/Reveal";

const features = [
  {
    title: "Overload Auto-Reversal",
    desc: "Electronic protection automatically stops and reverses shredding on overload, then clears itself and resumes.",
    icon: "↺",
  },
  {
    title: "Low Speed · High Torque",
    desc: "Counter-rotating shafts turn at slightly different speeds for efficient shear & tear with low noise.",
    icon: "⚙",
  },
  {
    title: "High-Alloy Cutters",
    desc: "Heat-treated, anti-corrosive and wear-resistant cutters mounted on hexagonal shafts for long life.",
    icon: "◆",
  },
  {
    title: "Advanced Bearing Seal",
    desc: "Multiple barriers of mechanical labyrinth and conventional seals protect costly bearings.",
    icon: "◎",
  },
  {
    title: "Shock Protection",
    desc: "Cushion drive absorbs shock loads and stops on non-shreddable items entering the chamber.",
    icon: "⛨",
  },
  {
    title: "Energy Efficient",
    desc: "Robust cutting chamber and efficient drive system designed for low maintenance cost.",
    icon: "⚡",
  },
];

export function Features() {
  return (
    <section className="container-x py-20 lg:py-28">
      <SectionHeading
        eyebrow="Why TIMO"
        title={
          <>
            Built to run, <span className="text-brand-500">built to last</span>
          </>
        }
        description="Every machine is engineered around reliability, safety and low total cost of ownership."
      />

      <RevealStagger className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink-700 bg-ink-700 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <RevealItem key={f.title}>
            <div className="group h-full bg-ink-900 p-8 transition-colors hover:bg-ink-800">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-2xl text-brand-500 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                {f.icon}
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-white">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-steel-400">
                {f.desc}
              </p>
            </div>
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}
