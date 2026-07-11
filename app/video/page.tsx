import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Placeholder } from "@/components/ui/Placeholder";
import { RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Video",
  description:
    "Watch TIMO industrial shredders, dewatering screw presses and recycling systems in action.",
};

/**
 * 14 个视频与旧站 /video/ 页面完全对应。
 * youtubeId / vimeoId 字段在阶段3回填真实视频 ID 后，
 * 将替换为嵌入式 <iframe> 播放器。
 */
const videos: {
  title: string;
  description: string;
  /** 阶段3回填：封面占位标注（对应本地图片或截图） */
  coverLabel: string;
  /** 阶段3回填：YouTube 视频 ID（从 youtube.com/@liphilip8232 频道获取） */
  youtubeId: string | null;
}[] = [
  {
    title: "Food Waste Convert To Fertilizer",
    description:
      "Organic food waste convert to fertilizer: bin-lifter feeds waste to sorting platform → worker sorts impurities → integrated shredder & dewatering squeezer combo shreds and dewaters → auger conveyor feeds to fermentation machine → rich fertilizer output after 24 hours.",
    coverLabel:
      "Application-Food-Kitchen（食品废物转肥料流程视频封面）",
    youtubeId: null,
  },
  {
    title: "Food Waste Composting Pretreatment System",
    description:
      "Food waste composting pretreatment system for more efficient composting/fermentation: 120L or 240L bin-lifter → Manual sorting table → Industrial shredder & dewatering squeezer combo machine → Auger conveyor.",
    coverLabel:
      "Shredding & Dewatering（预处理系统整线视频封面）",
    youtubeId: null,
  },
  {
    title: "Shredder & Screw Press HM800",
    description:
      "Shredder & Screw Press model HM800 processing household waste. Final shredded flake size 20–30 mm, moisture content less than 30%.",
    coverLabel:
      "shredder & screw press（HM800破碎脱水机视频封面）",
    youtubeId: null,
  },
  {
    title: "Kitchen Waste Shredding & Dewatering",
    description:
      "Kitchen waste shredding and dewatering machine makes foodstuffs suitable for processing by the animal feed and biogas industries.",
    coverLabel:
      "Organic & Food waste（厨余破碎脱水视频封面）",
    youtubeId: null,
  },
  {
    title: "Packaged Drink Waste Depackaging & Solid-Liquid Separating",
    description:
      "Model HM200 automatically separates packaged drink waste — destroying the packaging and separating the liquid from packaging material without manual handling.",
    coverLabel:
      "Food waste depackaging machine（饮料包装拆包分离视频封面）",
    youtubeId: null,
  },
  {
    title: "Food Waste Composting Machine",
    description:
      "Integrated industrial shredder and dewatering machine reduces food waste to 20–30 mm. Organic liquid stored for fluid fertilizer; organic solid stored in fermentation tank for solid fertilizer. Broken down into natural organic compost within 24–48 hours.",
    coverLabel:
      "Shredding Dewatering Composting Banner（堆肥机视频封面）",
    youtubeId: null,
  },
  {
    title: "Trash & Waste Compactor PM500",
    description:
      "TIMO trash/waste compactor PM500 with two working chambers — while one chamber presses, the other is being loaded for continuous high-efficiency operation. Customizable up to 4 pressing chambers.",
    coverLabel:
      "vertical hydraulic baler（废物压实机PM500视频封面）",
    youtubeId: null,
  },
  {
    title: "EPS (Expanded Polystyrene) Compactor",
    description:
      "TIMO EPS compactors reduce expanded polystyrene foam volume for easier storage and transport. EPS is 98% air — compacting it means you stop paying to transport air to landfill.",
    coverLabel:
      "EPS Compator（EPS泡沫压实机视频封面）",
    youtubeId: null,
  },
  {
    title: "Household Waste Dewatering Screw Press",
    description:
      "Dewatering screw press model MSD450 separates water from household waste — moisture content reduced to as low as 3%. Dry output can be mixed with wood flakes to make RDF fuel.",
    coverLabel:
      "dewatering screw press（家庭废物脱水螺旋机视频封面）",
    youtubeId: null,
  },
  {
    title: "Herbs Residue Washing & Dewatering",
    description:
      "Dirty herbal medicine residue washed in stainless steel tank, then squeezed against the screen by the screw press for solid-liquid separation — producing clean, dehydrated herb output.",
    coverLabel:
      "dewatering screw press（草药残渣洗涤脱水视频封面）",
    youtubeId: null,
  },
  {
    title: "Two-Stage Shredding Medical Waste Shredder",
    description:
      "Medical waste recycling system at 2–3 tons/hr: Autoclave sterilizer → 660L bin-lifter → Primary shredder (60–200 mm particle) → Conveyor belt → Two-stage medical waste shredder (10–30 mm) → Discharge auger conveyor.",
    coverLabel:
      "Medical Waste（两段式医疗废物破碎系统视频封面）",
    youtubeId: null,
  },
  {
    title: "Organic Waste Shredding & Dewatering",
    description:
      "Processes biological and biogenic waste — from green/garden waste to food waste, expired packaged goods and slaughterhouse waste — generating an optimal substrate for biogas plants or composting.",
    coverLabel:
      "Organic & Food waste（有机废物破碎脱水视频封面）",
    youtubeId: null,
  },
  {
    title: "Food Waste → Fertilizer: Shredding, Dewatering & Fermentation",
    description:
      "Complete line FPS200 + AFT2000 fermenter (2–3 t/hr): 120/240L bin-lifter → manual sorting table → integrated shredder & dewatering screw press → auger conveyor → aerobic fermenter (2–3 tons/day output).",
    coverLabel:
      "Shredding Dewatering Composting Banner（完整堆肥线视频封面）",
    youtubeId: null,
  },
  {
    title: "Food Waste Shredding, Dewatering & Fertilizing",
    description:
      "Feed fruits, vegetables and other organic/food waste into the integrated shredder and dewatering squeezer machine → shredded & dewatered output conveyed to fermenter → finished fertilizer in 24 hours.",
    coverLabel:
      "Application-Food-Kitchen（食物废物破碎脱水施肥视频封面）",
    youtubeId: null,
  },
];

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
        {/* YouTube 频道入口 */}
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

        {/* 14 个视频卡片 */}
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
    <div className="surface group flex flex-col overflow-hidden">
      <div className="relative">
        {/*
         * 阶段3回填：将 <Placeholder> 替换为真实的 YouTube iframe 嵌入器。
         * 格式：
         * <iframe
         *   src={`https://www.youtube.com/embed/${video.youtubeId}`}
         *   title={video.title}
         *   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         *   allowFullScreen
         *   className="aspect-video w-full"
         * />
         * 视频 ID 从 youtube.com/@liphilip8232 对应视频的 URL 中获取。
         */}
        <Placeholder
          label={video.coverLabel}
          ratio="16/9"
          className="rounded-none border-0"
        />
        {/* 播放按钮 */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-500/90 text-white shadow-lg transition-transform group-hover:scale-110">
            ▶
          </span>
        </div>
        {/* 序号角标 */}
        <span className="absolute left-3 top-3 rounded-full bg-ink-950/80 px-2.5 py-1 text-xs font-bold text-steel-300">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-base font-bold leading-snug text-white">
          {video.title}
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-steel-400">
          {video.description}
        </p>
      </div>
    </div>
  );
}
