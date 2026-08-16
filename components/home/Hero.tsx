"use client";

import Link from "next/link";
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

      <div className="container-x relative py-14 lg:py-16">
        <div className="mx-auto max-w-3xl text-center">
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
            className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Shred, Dewater &amp; <span className="text-brand-500">Recycle</span>{" "}
            Any Waste
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-4 text-base leading-relaxed text-steel-400 sm:text-lg"
          >
            TIMO designs and manufactures industrial shredders, dewatering screw
            presses and integrated systems for food, medical, municipal,
            slaughterhouse and pulp &amp; paper waste.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-7 flex flex-wrap justify-center gap-3"
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

        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.26 }}
          className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-6 border-t border-ink-800 pt-8 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="font-display text-2xl font-bold text-white">
                {s.value}
              </dt>
              <dd className="mt-1 text-xs text-steel-400">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <div className="border-t border-ink-800 bg-ink-900/50">
        <div className="container-x flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-4 text-sm text-steel-400">
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
