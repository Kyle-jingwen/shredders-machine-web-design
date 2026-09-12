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
    <section className="relative overflow-hidden border-b border-ink-800">
      <div className="pointer-events-none absolute inset-0 bg-grid-lines [background-size:44px_44px] opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-brand-glow opacity-60" />

      <div className="container-x relative py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
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
              className="mt-6 font-display text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.25rem]"
            >
              Shred, Dewater &amp;{" "}
              <span className="text-brand-500">Recycle</span> Any Waste
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-steel-400 sm:text-lg lg:text-xl"
            >
              TIMO designs and manufactures industrial shredders, dewatering screw
              presses and integrated systems for food, medical, municipal,
              slaughterhouse and pulp &amp; paper waste.
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
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative overflow-hidden rounded-2xl border border-ink-700 bg-ink-900 shadow-2xl shadow-black/40"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/process/combination-line.jpg"
                alt="TIMO combination shredding and dewatering system"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950 via-ink-950/55 to-transparent p-5">
                <p className="text-sm font-semibold text-white">
                  Combination shredding &amp; dewatering line
                </p>
                <p className="mt-1 text-xs text-steel-300">
                  Hopper → two-shaft shredder → screw press, fully automatic
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.26 }}
          className="mt-14 grid grid-cols-2 gap-6 border-t border-ink-800 pt-10 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <dt className="font-display text-3xl font-bold text-white lg:text-4xl">
                {s.value}
              </dt>
              <dd className="mt-1 text-sm text-steel-400">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <div className="border-t border-ink-800 bg-ink-900/50">
        <div className="container-x flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-5 text-sm text-steel-400">
          <span className="text-xs uppercase tracking-[0.2em] text-steel-400">
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
            <span key={m} className="font-medium text-steel-200">
              {m}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
