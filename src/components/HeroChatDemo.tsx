"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Send } from "lucide-react";
import { useT, useLocale } from "@/lib/i18n/LocaleProvider";

type Msg = {
  from: "user" | "ai";
  text: string;
  delay?: number;
};

export function HeroChatDemo() {
  const t = useT();
  const { locale } = useLocale();
  const ref = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  const [shown, setShown] = useState<Msg[]>([]);
  const [typing, setTyping] = useState(false);
  const [scriptDone, setScriptDone] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const script: Msg[] = [
    { from: "user", text: t("chat.msg1"), delay: 600 },
    { from: "ai", text: t("chat.msg2"), delay: 1400 },
    { from: "user", text: t("chat.msg3"), delay: 1300 },
    { from: "ai", text: t("chat.msg4"), delay: 1600 },
  ];

  useEffect(() => {
    if (!inView) return;
    let cancelled = false;
    setShown([]);
    setTyping(false);
    setScriptDone(false);

    const run = async () => {
      for (const msg of script) {
        if (cancelled) return;
        if (msg.from === "ai") setTyping(true);
        await new Promise((r) => setTimeout(r, msg.delay ?? 1000));
        if (cancelled) return;
        setTyping(false);
        setShown((cur) => [...cur, msg]);
      }
      if (!cancelled) setScriptDone(true);
    };

    run();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, locale]);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [shown, typing]);

  const sendMessage = async () => {
    const text = inputValue.trim();
    if (!text || loading) return;

    setInputValue("");
    setShown((cur) => [...cur, { from: "user", text }]);
    setLoading(true);
    setTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      setTyping(false);
      setShown((cur) => [
        ...cur,
        { from: "ai", text: data.reply ?? "Sorry, something went wrong." },
      ]);
    } catch {
      setTyping(false);
      setShown((cur) => [
        ...cur,
        { from: "ai", text: "Sorry, I'm having trouble connecting right now." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div
      ref={ref}
      className="relative mx-auto w-full max-w-md overflow-hidden rounded-[28px] border border-[rgba(10,10,20,0.1)] bg-white shadow-[0_30px_80px_-20px_rgba(10,10,20,0.18)] backdrop-blur-xl"
    >
      {/* Glow halo behind the card */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 rounded-[28px]"
        style={{
          background:
            "radial-gradient(120% 80% at 50% -10%, rgba(124,58,237,0.18), transparent 60%)",
        }}
      />

      {/* Header */}
      <div className="flex items-center gap-3 border-b border-[rgba(10,10,20,0.08)] px-4 py-3">
        <div className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-[rgba(20,184,166,0.5)]">
          <Image
            src="/avatars/ava.png"
            alt="Ava"
            fill
            sizes="36px"
            className="object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col">
          <span className="text-[13.5px] font-bold tracking-tightish text-ink-primary">
            Ava
          </span>
          <span className="flex items-center gap-1.5 text-[11.5px] text-ink-tertiary">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
            </span>
            {t("chat.online")}
          </span>
        </div>
        <span className="rounded-full bg-[rgba(20,184,166,0.12)] px-2 py-0.5 text-[10.5px] font-bold uppercase tracking-[0.1em] text-[#14b8a6]">
          {t("chat.live")}
        </span>
      </div>

      {/* Messages */}
      <div className="flex h-[340px] flex-col gap-2.5 overflow-y-auto bg-[rgba(10,10,20,0.02)] px-4 py-4">
        <AnimatePresence initial={false}>
          {shown.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[78%] rounded-2xl px-3.5 py-2.5 text-[13.5px] leading-relaxed ${
                  m.from === "user"
                    ? "rounded-br-md border border-[rgba(10,10,20,0.08)] bg-white text-ink-primary"
                    : "rounded-bl-md bg-brand-gradient text-white shadow-[0_4px_14px_-4px_rgba(124,58,237,0.45)]"
                }`}
              >
                {m.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {typing && (
          <div className="flex justify-start">
            <div className="flex items-center gap-1 rounded-2xl rounded-bl-md border border-[rgba(10,10,20,0.08)] bg-white px-3.5 py-3">
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink-tertiary [animation-delay:-0.3s]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink-tertiary [animation-delay:-0.15s]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink-tertiary" />
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input — read-only during script, live after */}
      <div className="flex items-center gap-2 border-t border-[rgba(10,10,20,0.08)] bg-white px-3 py-2.5">
        {scriptDone ? (
          <>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading}
              placeholder={t("chat.input")}
              className="flex-1 bg-transparent text-[12.5px] text-ink-primary outline-none placeholder:text-ink-quaternary disabled:opacity-50"
              autoFocus={false}
            />
            <button
              type="button"
              onClick={sendMessage}
              disabled={loading || !inputValue.trim()}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-gradient text-white shadow-[0_2px_10px_-2px_rgba(124,58,237,0.55)] transition-opacity disabled:opacity-40"
            >
              <Send className="h-4 w-4" strokeWidth={2.2} />
            </button>
          </>
        ) : (
          <>
            <input
              readOnly
              value={t("chat.input")}
              className="flex-1 bg-transparent text-[12.5px] text-ink-tertiary outline-none placeholder:text-ink-quaternary"
            />
            <button
              type="button"
              tabIndex={-1}
              aria-hidden
              className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-gradient text-white shadow-[0_2px_10px_-2px_rgba(124,58,237,0.55)]"
            >
              <Send className="h-4 w-4" strokeWidth={2.2} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
