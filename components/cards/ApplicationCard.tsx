import Link from "next/link";
import Image from "next/image";
import type { Application } from "@/lib/applications";

export function ApplicationCard({ application }: { application: Application }) {
  return (
    <Link
      href={`/applications/${application.slug}`}
      className="group relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-2xl border border-ink-700/80 lg:min-h-[360px]"
    >
      <Image
        src={application.imageSrc.cover}
        alt={application.name}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {/* 渐变遮罩，保证文字可读 */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/60 to-transparent" />

      <div className="relative p-6">
        <h3 className="font-display text-xl font-bold text-white">
          {application.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-steel-300">
          {application.tagline}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-500">
          Explore solution
          <span className="transition-transform group-hover:translate-x-1" aria-hidden>
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
