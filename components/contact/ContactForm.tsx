"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

/** 生成一道简单加法验证题（防止群发垃圾消息） */
function makeChallenge() {
  const a = Math.floor(Math.random() * 8) + 1; // 1-8
  const b = Math.floor(Math.random() * 8) + 1; // 1-8
  return { a, b, answer: a + b };
}

/**
 * 询盘表单（阶段1确认：Formspree，提交后直接发邮件到指定邮箱，无需后端）。
 * 上线前在 lib/site.ts 中填入真实 formspreeId 即可启用。
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [challenge, setChallenge] = useState({ a: 0, b: 0, answer: 0 });
  const [captcha, setCaptcha] = useState("");
  const [captchaError, setCaptchaError] = useState(false);

  const { formspreeId } = site.thirdParty;
  const configured = !formspreeId.includes("PLACEHOLDER");
  const endpoint = `https://formspree.io/f/${formspreeId}`;

  // 客户端生成验证题（避免 SSR 水合不一致）
  useEffect(() => {
    setChallenge(makeChallenge());
  }, []);

  function refreshChallenge() {
    setChallenge(makeChallenge());
    setCaptcha("");
    setCaptchaError(false);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    // 反垃圾第一层：蜜罐字段（人类不可见，机器人常会填写）
    const honeypot = (form.elements.namedItem("company_website") as HTMLInputElement)?.value;
    if (honeypot) {
      // 静默判定为垃圾，伪装成功不实际提交
      setStatus("success");
      form.reset();
      return;
    }

    // 反垃圾第二层：人工加法验证
    if (Number(captcha) !== challenge.answer) {
      setCaptchaError(true);
      return;
    }
    setCaptchaError(false);

    if (!configured) {
      // 骨架阶段：未配置 Formspree ID 时给出提示，不实际提交
      setStatus("error");
      return;
    }
    setStatus("submitting");
    const data = new FormData(form);
    data.delete("company_website");
    data.delete("captcha");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
        refreshChallenge();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="surface flex flex-col items-center justify-center p-10 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-500/15 text-2xl text-brand-500">
          ✓
        </div>
        <h3 className="mt-4 font-display text-xl font-bold text-white">
          Thank you!
        </h3>
        <p className="mt-2 text-sm text-steel-400">
          Your inquiry has been sent. Our team will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-ghost mt-6"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="surface space-y-5 p-6 sm:p-8">
      {!configured && (
        <p className="rounded-lg border border-brand-500/40 bg-brand-500/10 px-4 py-3 text-xs text-brand-100">
          {/* TODO(上线前): 在 lib/site.ts 填入真实 Formspree formId 以启用提交 */}
          表单骨架已就绪。上线前在 <code>lib/site.ts</code> 填入 Formspree
          form ID 即可自动发送到邮箱。
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Company" name="company" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone / WhatsApp" name="phone" />
      </div>
      <Field label="Material & capacity (e.g. plastic, 2 t/h)" name="requirement" />

      <div>
        <label className="mb-1.5 block text-sm font-medium text-steel-200">
          Message <span className="text-brand-500">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project, waste type, target output…"
          className="w-full rounded-xl border border-ink-700 bg-ink-900 px-4 py-3 text-sm text-white placeholder:text-steel-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
        />
      </div>

      {/* 蜜罐字段：对真人隐藏，机器人若填写则判定为垃圾邮件 */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label>
          Do not fill this field
          <input
            type="text"
            name="company_website"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      {/* 人工验证：简单加法，阻止群发脚本 */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-steel-200">
          Anti-spam verification <span className="text-brand-500">*</span>
        </label>
        <div className="flex items-center gap-3">
          <span className="flex h-12 items-center rounded-xl border border-ink-700 bg-ink-800 px-4 font-display text-base font-semibold text-white">
            {challenge.a} + {challenge.b} = ?
          </span>
          <input
            type="number"
            inputMode="numeric"
            value={captcha}
            onChange={(e) => {
              setCaptcha(e.target.value);
              setCaptchaError(false);
            }}
            required
            aria-label="Answer to the verification question"
            className="h-12 w-24 rounded-xl border border-ink-700 bg-ink-900 px-4 text-sm text-white focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
          />
          <button
            type="button"
            onClick={refreshChallenge}
            className="text-xs text-steel-400 underline-offset-2 hover:text-white hover:underline"
          >
            Refresh
          </button>
        </div>
        {captchaError && (
          <p className="mt-2 text-sm text-red-400">
            Incorrect answer. Please solve the sum to continue.
          </p>
        )}
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400">
          {configured
            ? "Something went wrong. Please try again or email us directly."
            : "表单尚未配置 Formspree ID，暂无法提交。"}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Inquiry"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-steel-200">
        {label} {required && <span className="text-brand-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-xl border border-ink-700 bg-ink-900 px-4 py-3 text-sm text-white placeholder:text-steel-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
      />
    </div>
  );
}
