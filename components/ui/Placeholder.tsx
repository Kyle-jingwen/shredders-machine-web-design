import type { ReactNode } from "react";

type PlaceholderProps = {
  /**
   * 明确标注此处需要放置的本地资料库图片。
   * 阶段3将据此回填真实图片。
   */
  label: string;
  /** 期望的宽高比，例如 "16/9" | "4/3" | "1/1" | "3/4" */
  ratio?: string;
  className?: string;
  children?: ReactNode;
};

/**
 * 阶段2占位图组件。
 * 渲染一个带虚线边框与说明文字的占位区块，
 * 明确标注该位置在阶段3需要回填的本地资料图片。
 */
export function Placeholder({
  label,
  ratio = "16/9",
  className = "",
}: PlaceholderProps) {
  return (
    <div
      className={`placeholder-media ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <div className="pointer-events-none flex flex-col items-center gap-2 px-6 py-8">
        <svg
          className="h-8 w-8 text-ink-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="m21 15-5-5L5 21" />
        </svg>
        <span className="text-xs font-semibold uppercase tracking-widest text-ink-600">
          IMAGE PLACEHOLDER
        </span>
        <span className="max-w-xs text-[13px] leading-relaxed text-steel-400">
          {/* 阶段3回填提示 */}
          此处需放置本地资料库中关于「{label}」的图片
        </span>
      </div>
    </div>
  );
}
