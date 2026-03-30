"use client";

import { useState } from "react";

export function ComingSoon() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("sent");
    setEmail("");
  }

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <div
        className="pointer-events-none absolute -left-[20%] -top-[30%] h-[70vmin] w-[70vmin] rounded-full bg-indigo-600/20 blur-[100px] animate-float"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-[20%] -right-[15%] h-[60vmin] w-[60vmin] rounded-full bg-violet-600/15 blur-[90px] animate-float"
        style={{ animationDelay: "-6s" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[40vmin] w-[40vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-[80px] animate-pulse-soft"
        aria-hidden
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,#050508_100%)] opacity-80" />

      <header className="relative z-10 flex items-center justify-center px-6 pt-10 sm:justify-start sm:px-10 sm:pt-12">
        <span className="font-mono text-xs uppercase tracking-[0.35em] text-zinc-500">
          SGE
        </span>
      </header>

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-20 pt-8 sm:px-10">
        <div className="mx-auto max-w-lg text-center">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-xs text-zinc-400 backdrop-blur-sm">
            <span
              className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.5)]"
              aria-hidden
            />
            In ontwikkeling
          </p>
          <h1 className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl sm:leading-tight">
            Binnenkort beschikbaar
          </h1>
          <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
            We bouwen aan een nieuwe ervaring. Laat je e-mail achter en we
            laten het weten zodra we live gaan.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-10 flex w-full flex-col gap-3 sm:flex-row sm:items-stretch"
          >
            <label htmlFor="notify-email" className="sr-only">
              E-mailadres
            </label>
            <input
              id="notify-email"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="jij@voorbeeld.nl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 w-full flex-1 rounded-lg border border-zinc-800 bg-zinc-950/80 px-4 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none ring-indigo-500/40 transition-[border-color,box-shadow] focus:border-indigo-500/50 focus:ring-2"
            />
            <button
              type="submit"
              className="h-12 shrink-0 rounded-lg bg-zinc-100 px-6 text-sm font-medium text-zinc-950 transition-[transform,box-shadow] hover:bg-white active:scale-[0.98] sm:w-auto"
            >
              Houd me op de hoogte
            </button>
          </form>
          {status === "sent" && (
            <p className="mt-3 text-sm text-emerald-400/90">
              Bedankt — je staat op de lijst.
            </p>
          )}
          <p className="mt-4 text-xs text-zinc-600">
            Demo: dit formulier slaat niets op; alleen ter illustratie.
          </p>
        </div>
      </main>

      <footer className="relative z-10 border-t border-zinc-900/80 px-6 py-6 text-center sm:px-10">
        <p className="text-xs text-zinc-600">
          © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
