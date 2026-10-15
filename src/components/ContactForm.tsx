"use client";

import { useState, type FormEvent } from "react";
import { Loader2, Check, AlertCircle, Send } from "lucide-react";
import { useT } from "@/lib/i18n/LocaleProvider";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-[rgba(10,10,20,0.14)] bg-[rgba(10,10,20,0.05)] px-3.5 py-2.5 text-[14.5px] text-ink-primary placeholder:text-ink-quaternary transition-colors focus:border-brand-indigo/60 focus:outline-none focus:ring-2 focus:ring-brand-indigo/30";

const labelClass =
  "mb-1.5 block text-[13px] font-semibold tracking-tightish text-ink-secondary";

export function ContactForm() {
  const t = useT();
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      business: formData.get("business"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (res.ok && data.ok) {
        setStatus("success");
        setFeedback(data.message ?? t("contactForm.success.default"));
        form.reset();
      } else {
        setStatus("error");
        setFeedback(data.error ?? t("contactForm.error.default"));
      }
    } catch {
      setStatus("error");
      setFeedback(t("contactForm.error.network"));
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-[rgba(34,197,94,0.3)] bg-[rgba(34,197,94,0.07)] p-10 text-center backdrop-blur-md">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(34,197,94,0.18)] text-success">
          <Check className="h-6 w-6" strokeWidth={2.4} />
        </span>
        <div>
          <p className="font-display text-[16px] font-bold tracking-tightish text-ink-primary">
            {t("contactForm.success.title")}
          </p>
          <p className="mt-1.5 text-[14px] text-ink-tertiary">{feedback}</p>
        </div>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-[13.5px] font-semibold text-brand-violet transition-colors hover:text-brand-hover"
        >
          {t("contactForm.success.again")}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-[rgba(10,10,20,0.1)] bg-[rgba(10,10,20,0.04)] p-7 backdrop-blur-md sm:p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            {t("contactForm.name")}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder={t("contactForm.namePh")}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="business" className={labelClass}>
            {t("contactForm.business")}
          </label>
          <input
            id="business"
            name="business"
            type="text"
            autoComplete="organization"
            placeholder={t("contactForm.businessPh")}
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="email" className={labelClass}>
          {t("contactForm.email")}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder={t("contactForm.emailPh")}
          className={inputClass}
        />
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelClass}>
          {t("contactForm.message")}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder={t("contactForm.messagePh")}
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="mt-4 flex items-center gap-2 text-[13.5px] text-red-400"
        >
          <AlertCircle className="h-4 w-4 shrink-0" />
          {feedback}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-gradient px-6 text-[15px] font-semibold tracking-tightish text-white shadow-[0_4px_18px_-2px_rgba(124,58,237,0.55),inset_0_1px_0_rgba(255,255,255,0.25)] transition-all hover:shadow-[0_8px_30px_-2px_rgba(124,58,237,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            {t("contactForm.sending")}
          </>
        ) : (
          <>
            {t("contactForm.send")}
            <Send className="h-4 w-4" />
          </>
        )}
      </button>

      <p className="mt-4 text-center text-[12.5px] text-ink-quaternary">
        {t("contactForm.fast")}
      </p>
    </form>
  );
}
