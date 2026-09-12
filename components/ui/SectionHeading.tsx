import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={`${align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-4xl"} ${className}`}
    >
      {eyebrow && (
        <span className="eyebrow mb-3">
          <span className="h-px w-6 bg-brand-500" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[3.25rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-steel-400 sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
