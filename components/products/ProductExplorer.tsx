"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  products,
  productCategories,
  type ProductCategory,
} from "@/lib/products";
import { ProductCard } from "@/components/cards/ProductCard";

/**
 * 产品动态筛选 + 即时搜索。
 * 阶段2实现纯前端关键词匹配（名称/概述/物料）；
 * 后续阶段可平滑升级为 RAG 智能语义搜索。
 */
export function ProductExplorer() {
  const [category, setCategory] = useState<ProductCategory | "All">("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchCat = category === "All" || p.category === category;
      if (!matchCat) return false;
      if (!q) return true;
      const haystack = [
        p.name,
        p.tagline,
        p.category,
        ...p.handles,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [category, query]);

  return (
    <div className="container-x py-12 lg:py-16">
      {/* 搜索框 */}
      <div className="mx-auto mb-8 max-w-xl">
        <div className="relative">
          <svg
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-steel-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search machines, materials (e.g. plastic, medical, dewatering)…"
            className="w-full rounded-full border border-ink-700 bg-ink-800 py-3.5 pl-12 pr-4 text-sm text-white placeholder:text-steel-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
          />
        </div>
      </div>

      {/* 分类筛选 */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {productCategories.map((c) => {
          const active = category === c.id;
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => setCategory(c.id)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                active
                  ? "border-brand-500 bg-brand-500 text-white"
                  : "border-ink-700 text-steel-300 hover:border-brand-500/60 hover:text-white"
              }`}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      {/* 结果计数 */}
      <p className="mb-6 text-center text-sm text-steel-400">
        Showing <span className="font-semibold text-white">{filtered.length}</span>{" "}
        {filtered.length === 1 ? "product" : "products"}
      </p>

      {/* 网格 */}
      {filtered.length > 0 ? (
        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((product) => (
              <motion.div
                key={product.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="rounded-2xl border border-dashed border-ink-600 py-20 text-center">
          <p className="text-steel-400">
            No products match “{query}”. Try another keyword or clear the filter.
          </p>
        </div>
      )}
    </div>
  );
}
