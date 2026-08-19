"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { heroSlides } from "@/lib/heroSlides";

const AUTOPLAY_MS = 6000;

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((i: number) => {
    setIndex((i + heroSlides.length) % heroSlides.length);
  }, []);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [next, paused]);

  const slide = heroSlides[index];

  return (
    <section
      className="relative w-full overflow-hidden bg-ink-950"
      aria-roledescription="carousel"
      aria-label="Featured products"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* 轮播高度：桌面 480px，移动端 360px */}
      <div className="relative h-[380px] sm:h-[460px] lg:h-[560px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* 整体暗化，保证文字可读 */}
            <div className="absolute inset-0 bg-gradient-to-r from-ink-950/70 via-ink-950/30 to-ink-950/50" />
          </motion.div>
        </AnimatePresence>

        {/* 文字浮层 — 参考旧站右侧半透明黑框 */}
        <div className="container-x relative flex h-full items-center justify-end">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.title}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.45 }}
              className="w-full max-w-2xl rounded-lg border border-white/10 bg-black/55 px-6 py-6 backdrop-blur-sm sm:px-8 sm:py-8 lg:px-10 lg:py-10"
            >
              <h2 className="font-display text-2xl font-bold leading-snug text-white sm:text-3xl lg:text-[2.1rem]">
                {slide.title}
              </h2>
              <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-steel-200 sm:text-base">
                {slide.description}
              </p>
              <Link
                href={slide.href}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-400 transition-colors hover:text-brand-300"
              >
                {slide.cta}
                <span aria-hidden>→</span>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 左右箭头 */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60 sm:left-5 sm:h-12 sm:w-12"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60 sm:right-5 sm:h-12 sm:w-12"
        >
          ›
        </button>
      </div>

      {/* 底部指示点 */}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all ${
              i === index
                ? "w-8 bg-brand-500"
                : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
