"use client";

import Script from "next/script";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/lib/site";

/**
 * 即时聊天模块（阶段1确认：WhatsApp 悬浮按钮 + Tawk.to 双渠道）。
 *
 * - WhatsApp：始终显示的悬浮按钮，号码在 lib/site.ts 中配置（当前为占位号码）。
 * - Tawk.to：仅当 lib/site.ts 中填入真实 Property/Widget ID 后自动加载脚本。
 */
export function LiveChat() {
  const [expanded, setExpanded] = useState(false);

  const { whatsapp } = site.contact;
  const { tawkPropertyId, tawkWidgetId } = site.thirdParty;

  const tawkReady =
    !tawkPropertyId.includes("PLACEHOLDER") &&
    !tawkWidgetId.includes("PLACEHOLDER");

  const waHref = `https://wa.me/${whatsapp}?text=${encodeURIComponent(
    "Hi TIMO, I'm interested in your shredding & dewatering machines."
  )}`;

  return (
    <>
      {/* 悬浮操作区 */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="w-64 overflow-hidden rounded-2xl border border-ink-700 bg-ink-800 p-4 shadow-2xl shadow-black/50"
            >
              <p className="text-sm font-semibold text-white">
                Chat with our team
              </p>
              <p className="mt-1 text-xs text-steel-400">
                Get a fast reply about specs, capacity and pricing.
              </p>

              <a
                href={waHref}
                target="_blank"
                rel="noreferrer"
                className="mt-3 flex items-center gap-3 rounded-xl bg-[#25D366] px-3 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp Us
              </a>

              <a
                href={`mailto:${site.contact.email}`}
                className="mt-2 flex items-center gap-3 rounded-xl border border-ink-600 px-3 py-2.5 text-sm font-semibold text-steel-200 transition-colors hover:border-brand-500 hover:text-white"
              >
                <span className="text-base">✉</span>
                Email Us
              </a>

              {/* 阶段4提示：Tawk.to 未配置时的说明（仅开发可见语义） */}
              {!tawkReady && (
                <p className="mt-3 text-[10px] leading-snug text-steel-400">
                  {/* TODO(上线前): 在 lib/site.ts 填入 Tawk.to Property/Widget ID 以启用实时客服 */}
                  Live agent chat will activate once Tawk.to ID is configured.
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-label="Open chat options"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-500 text-white shadow-lg shadow-brand-500/30 transition-all hover:scale-105 hover:bg-brand-600"
        >
          <AnimatePresence mode="wait" initial={false}>
            {expanded ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                className="text-2xl leading-none"
              >
                ×
              </motion.span>
            ) : (
              <motion.span
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <ChatIcon className="h-6 w-6" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Tawk.to 脚本：仅在配置真实 ID 后加载 */}
      {tawkReady && (
        <Script id="tawk-to" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{},Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/${tawkPropertyId}/${tawkWidgetId}';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      )}
    </>
  );
}

function ChatIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.2 0 4.27.86 5.82 2.42a8.19 8.19 0 0 1 2.42 5.82c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24Zm4.52 9.87c-.25-.13-1.47-.72-1.7-.8-.22-.09-.39-.13-.55.13-.16.25-.63.8-.77.96-.14.16-.28.18-.53.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.28.37-.42.13-.14.17-.25.25-.41.08-.16.04-.31-.02-.44-.06-.13-.55-1.34-.76-1.83-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.42.06-.64.31-.22.25-.84.82-.84 2s.86 2.32.98 2.48c.13.16 1.7 2.59 4.11 3.63.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  );
}
