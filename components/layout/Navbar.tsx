"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { mainNav, type NavItem } from "@/lib/nav";
import { site } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 路由切换时关闭移动菜单
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-ink-700/60 bg-ink-950/85 backdrop-blur-md"
          : "border-b border-transparent bg-gradient-to-b from-ink-950/80 to-transparent"
      }`}
      style={{ ["--nav-h" as string]: "72px" }}
    >
      <nav className="container-x flex h-[72px] items-center justify-between">
        {/* Logo：阶段2用文字占位，阶段3回填 TIMO 官方Logo图片 */}
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500 font-display text-lg font-bold text-white">
            T
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold tracking-tight text-white">
              {site.brand}
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-steel-400">
              Shredding &amp; Dewatering
            </span>
          </span>
        </Link>

        {/* 桌面导航 */}
        <ul className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => (
            <DesktopNavItem key={item.label} item={item} active={isActive(item.href)} />
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/contact" className="btn-primary">
            Get a Quote
          </Link>
        </div>

        {/* 移动端汉堡 */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-700 text-steel-200 lg:hidden"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-5 bg-current transition-transform ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-opacity ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-transform ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* 移动端抽屉菜单 */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-ink-700/60 bg-ink-950 lg:hidden"
          >
            <ul className="container-x flex flex-col gap-1 py-4">
              {mainNav.map((item) => (
                <li key={item.label}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className={`flex-1 py-2.5 text-base font-medium ${
                        isActive(item.href) ? "text-brand-500" : "text-steel-200"
                      }`}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        type="button"
                        aria-label={`Toggle ${item.label}`}
                        onClick={() =>
                          setOpenDropdown((v) =>
                            v === item.label ? null : item.label
                          )
                        }
                        className="p-2 text-steel-400"
                      >
                        <svg
                          className={`h-4 w-4 transition-transform ${
                            openDropdown === item.label ? "rotate-180" : ""
                          }`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>
                    )}
                  </div>
                  {item.children && openDropdown === item.label && (
                    <ul className="ml-3 border-l border-ink-700 pl-3">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block py-2 text-sm text-steel-400 hover:text-white"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="pt-3">
                <Link href="/contact" className="btn-primary w-full">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function DesktopNavItem({ item, active }: { item: NavItem; active: boolean }) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <li>
        <Link
          href={item.href}
          className={`relative px-4 py-2 text-sm font-medium transition-colors ${
            active ? "text-white" : "text-steel-400 hover:text-white"
          }`}
        >
          {item.label}
          {active && (
            <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-brand-500" />
          )}
        </Link>
      </li>
    );
  }

  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href}
        className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${
          active ? "text-white" : "text-steel-400 hover:text-white"
        }`}
      >
        {item.label}
        <svg
          className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18 }}
            className="absolute left-0 top-full w-80 pt-3"
          >
            <div className="surface overflow-hidden p-2 shadow-2xl shadow-black/40">
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="group flex flex-col gap-0.5 rounded-xl px-4 py-3 transition-colors hover:bg-ink-700/60"
                >
                  <span className="text-sm font-semibold text-steel-200 group-hover:text-white">
                    {child.label}
                  </span>
                  {child.desc && (
                    <span className="text-xs text-steel-400">{child.desc}</span>
                  )}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
