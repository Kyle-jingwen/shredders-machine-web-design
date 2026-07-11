"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { value: "5+", label: "Product lines" },
  { value: "50–5000", label: "kg/h capacity" },
  { value: "8", label: "Waste applications" },
  { value: "24h", label: "Waste-to-fertilizer" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* 背景：网格线 + 品牌辉光 */}
      <div className="pointer-events-none absolute inset-0 bg-grid-lines [background-size:44px_44px] opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-brand-glow" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />

      <div className="container-x relative grid gap-12 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        {/* 左：文案 */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-ink-700 bg-ink-800/60 px-4 py-1.5 text-xs font-medium text-steel-300"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand-500" />
            Industrial Recycling Equipment Manufacturer
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Shred, Dewater &amp; <span className="text-brand-500">Recycle</span>{" "}
            Any Waste
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-5 max-w-xl text-lg leading-relaxed text-steel-400"
          >
            TIMO designs and manufactures industrial shredders, dewatering screw
            presses and integrated systems for food, medical, municipal,
            slaughterhouse and pulp &amp; paper waste — built for low-speed,
            high-torque reliability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link href="/products" className="btn-primary">
              Explore Products
              <span aria-hidden>→</span>
            </Link>
            <Link href="/contact" className="btn-ghost">
              Request a Quote
            </Link>
          </motion.div>

          {/* 统计条 */}
          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26 }}
            className="mt-12 grid grid-cols-2 gap-6 border-t border-ink-800 pt-8 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-2xl font-bold text-white">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs text-steel-400">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* 右：主视觉 — 真实设备图 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-brand-500/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-black/50">
            <Image
              src="/images/hero/two-shaft-banner.jpg"
              alt="TIMO Industrial Two-Shaft Shredder"
              width={800}
              height={600}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
          {/* 悬浮小卡：一体机细节 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute -bottom-6 -left-6 hidden w-48 overflow-hidden rounded-xl border border-ink-700 shadow-xl shadow-black/60 sm:block"
          >
            <Image
              src="/images/products/combo-aio-main.png"
              alt="Shredder & Screw Press AIO detail"
              width={200}
              height={200}
              className="h-auto w-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* 底部物料标签滚动条 */}
      <div className="relative border-y border-ink-800 bg-ink-900/50">
        <div className="container-x flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-5 text-sm text-steel-400">
          <span className="text-xs uppercase tracking-widest text-steel-400">
            Handles:
          </span>
          {[
            "Organic waste",
            "Plastic",
            "Metal",
            "Wood",
            "Medical waste",
            "Glass",
            "Paper",
            "RDF",
          ].map((m) => (
            <span key={m} className="font-medium text-steel-300">
              {m}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
