import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Video",
  description:
    "Watch TIMO industrial shredders, dewatering screw presses and recycling systems in action.",
};

/** 14 条与旧站 /video/ 一一对应：链接跟旧站，封面用旧站机器图。 */
const videos: {
  title: string;
  description: string;
  cover: string;
  youtubeId?: string;
  vimeoId?: string;
}[] = [
  {
    title: "Food Waste Convert To Fertilizer",
    description:
      "Organic food waste convert to fertilizer: bin-lifter feeds waste to sorting platform → worker sorts impurities → integrated shredder & dewatering squeezer combo shreds and dewaters → auger conveyor feeds to fermentation machine → rich fertilizer output after 24 hours.",
    cover: "/images/video/01-food-waste-convert-to-fertilizer.jpg",
    youtubeId: "YhHDrv0EO7o",
  },
  {
    title: "Food Waste Composting Pretreatment System",
    description:
      "Food waste composting pretreatment system for more efficient composting/fermentation: 120L or 240L bin-lifter → Manual sorting table → Industrial shredder & dewatering squeezer combo machine → Auger conveyor.",
    cover: "/images/video/02-food-waste-composting-pretreatment.jpg",
    youtubeId: "S2DNiE2croQ",
  },
  {
    title: "Shredder & Screw Press HM800",
    description:
      "Shredder & Screw Press model HM800 processing household waste. Final shredded flake size 20–30 mm, moisture content less than 30%.",
    cover: "/images/video/03-shredder-screw-press-hm800.jpg",
    youtubeId: "wEtSoJsM_H8",
  },
  {
    title: "Kitchen Waste Shredding & Dewatering",
    description:
      "Kitchen waste shredding and dewatering machine makes foodstuffs suitable for processing by the animal feed and biogas industries.",
    cover: "/images/video/04-kitchen-waste-shredding-dewatering.jpg",
    youtubeId: "2cfddMMDDZw",
  },
  {
    title: "Packaged Drink Waste Depackaging & Solid-Liquid Separating",
    description:
      "Model HM200 automatically separates packaged drink waste — destroying the packaging and separating the liquid from packaging material without manual handling.",
    cover: "/images/video/05-packaged-drink-depackaging.jpg",
    vimeoId: "225530759",
  },
  {
    title: "Food Waste Composting Machine",
    description:
      "Integrated industrial shredder and dewatering machine reduces food waste to 20–30 mm. Organic liquid stored for fluid fertilizer; organic solid stored in fermentation tank for solid fertilizer. Broken down into natural organic compost within 24–48 hours.",
    cover: "/images/video/06-food-waste-composting-machine.jpg",
    vimeoId: "226412773",
  },
  {
    title: "Trash & Waste Compactor PM500",
    description:
      "TIMO trash/waste compactor PM500 with two working chambers — while one chamber presses, the other is being loaded for continuous high-efficiency operation. Customizable up to 4 pressing chambers.",
    cover: "/images/video/07-trash-waste-compactor-pm500.png",
    youtubeId: "59OrJuTR01w",
  },
  {
    title: "EPS (Expanded Polystyrene) Compactor",
    description:
      "TIMO EPS compactors reduce expanded polystyrene foam volume for easier storage and transport. EPS is 98% air — compacting it means you stop paying to transport air to landfill.",
    cover: "/images/video/08-eps-compactor.jpg",
    youtubeId: "4i65NiIlf-4",
  },
  {
    title: "Household Waste Dewatering Screw Press",
    description:
      "Dewatering screw press model MSD450 separates water from household waste — moisture content reduced to as low as 3%. Dry output can be mixed with wood flakes to make RDF fuel.",
    cover: "/images/video/09-household-waste-dewatering.jpg",
    youtubeId: "cryiz63Q-YE",
  },
  {
    title: "Herbs Residue Washing & Dewatering",
    description:
      "Dirty herbal medicine residue washed in stainless steel tank, then squeezed against the screen by the screw press for solid-liquid separation — producing clean, dehydrated herb output.",
    cover: "/images/video/10-herbs-residue-washing-dewatering.jpg",
    youtubeId: "Qad-Bh7kQ3o",
  },
  {
    title: "Two-Stage Shredding Medical Waste Shredder",
    description:
      "Medical waste recycling system at 2–3 tons/hr: Autoclave sterilizer → 660L bin-lifter → Primary shredder (60–200 mm particle) → Conveyor belt → Two-stage medical waste shredder (10–30 mm) → Discharge auger conveyor.",
    cover: "/images/video/11-two-stage-medical-waste.jpg",
    youtubeId: "QodAawcXpXo",
  },
  {
    title: "Organic Waste Shredding & Dewatering",
    description:
      "Processes biological and biogenic waste — from green/garden waste to food waste, expired packaged goods and slaughterhouse waste — generating an optimal substrate for biogas plants or composting.",
    cover: "/images/video/12-organic-waste-shredding-dewatering.jpg",
    youtubeId: "O65A_uQJ01c",
  },
  {
    title: "Food Waste → Fertilizer: Shredding, Dewatering & Fermentation",
    description:
      "Complete line FPS200 + AFT2000 fermenter (2–3 t/hr): 120/240L bin-lifter → manual sorting table → integrated shredder & dewatering screw press → auger conveyor → aerobic fermenter (2–3 tons/day output).",
    cover: "/images/video/13-food-waste-fertilizer-fermentation.png",
    youtubeId: "OUWp1YyxF-E",
  },
  {
    title: "Food Waste Shredding, Dewatering & Fertilizing",
    description:
      "Feed fruits, vegetables and other organic/food waste into the integrated shredder and dewatering squeezer machine → shredded & dewatered output conveyed to fermenter → finished fertilizer in 24 hours.",
    cover: "/images/video/14-food-waste-shredding-dewatering-fertilizing.jpg",
    youtubeId: "5484qr-tDzw",
  },
];

function watchUrl(video: (typeof videos)[number]) {
  return video.youtubeId
    ? `https://www.youtube.com/watch?v=${video.youtubeId}`
    : `https://vimeo.com/${video.vimeoId}`;
}

export default function VideoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Video"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Video" }]}
        title="See our machines in action"
        description="14 real-world demonstrations of shredding, dewatering and recycling equipment running on-site."
      />

      <section className="container-x py-12 lg:py-16">
        <div className="mb-10 flex flex-col items-start gap-4 rounded-2xl border border-ink-700 bg-ink-800/60 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-lg font-bold text-white">
              TIMO on YouTube
            </h2>
            <p className="mt-1 text-sm text-steel-400">
              Subscribe to our channel for the latest equipment demonstrations.
            </p>
          </div>
          <a
            href={site.social.youtube}
            target="_blank"
            rel="noreferrer"
            className="btn-primary shrink-0"
          >
            Visit YouTube Channel →
          </a>
        </div>

        <RevealStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, i) => (
            <RevealItem key={i}>
              <VideoCard video={video} index={i} />
            </RevealItem>
          ))}
        </RevealStagger>
      </section>
    </>
  );
}

function VideoCard({
  video,
  index,
}: {
  video: (typeof videos)[number];
  index: number;
}) {
  return (
    <a
      href={watchUrl(video)}
      target="_blank"
      rel="noreferrer"
      className="surface group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/50 hover:shadow-2xl hover:shadow-black/40"
    >
      <div className="relative aspect-video overflow-hidden bg-ink-950">
        <img
          src={video.cover}
          alt={video.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-ink-950/80 px-2.5 py-1 text-xs font-bold text-steel-300">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-base font-bold leading-snug text-white group-hover:text-brand-500">
          {video.title}
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-steel-400">
          {video.description}
        </p>
      </div>
    </a>
  );
}
