import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

// Floating decorative Chinese characters — echoing the brochure's playful classroom illustration
const floatingChars = [
  { char: "学", className: "top-[8%] left-[6%] text-7xl rotate-[-8deg] animate-float-slow text-brand-red/30" },
  { char: "中", className: "top-[18%] right-[10%] text-5xl rotate-[6deg] animate-float-medium text-brand-blue/40" },
  { char: "文", className: "bottom-[18%] left-[12%] text-6xl rotate-[5deg] animate-float-medium text-brand-red/25" },
  { char: "好", className: "bottom-[26%] right-[6%] text-7xl rotate-[-4deg] animate-float-slow text-brand-blue/35" },
  { char: "你", className: "top-[42%] right-[28%] text-4xl rotate-[10deg] animate-float-medium text-brand-red/20" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-yellow-soft via-brand-yellow/60 to-brand-cream pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Hand-drawn brochure splashes */}
      <div className="brand-splash h-[480px] w-[480px] -left-32 top-20 opacity-80" />
      <div className="brand-splash h-[360px] w-[420px] right-[-80px] top-40 opacity-60" />

      {/* Floating hanzi backdrop */}
      <div className="absolute inset-0 hidden font-hanzi font-bold md:block" aria-hidden="true">
        {floatingChars.map((c, i) => (
          <span key={i} className={`absolute select-none ${c.className}`} style={{ animationDelay: `${i * 0.4}s` }}>
            {c.char}
          </span>
        ))}
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow pill */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-brand-red/15 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-red shadow-sm backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            <span>一起学中文 · Let&apos;s Learn Mandarin Together</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground text-balance md:text-6xl lg:text-7xl">
            Master Mandarin.
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-brand-red">Unlock a New World</span>
              <span className="absolute inset-x-0 -bottom-1 h-3 -skew-x-6 rounded-sm bg-brand-yellow/70" aria-hidden="true" />
            </span>
            <span className="text-brand-red">.</span>
          </h1>

          {/* Sub-headline */}
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-foreground/70 md:text-xl text-balance">
            Expert native tutors, an interactive curriculum, and flexible schedules — built for
            kids, adults, and business professionals.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="#cta">
                Start Your Free Trial
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <Link href="#programs">Explore Programs</Link>
            </Button>
          </div>

          {/* Trust strip */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-foreground/55">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              <span>500+ Students Taught</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
              <span>HSK 1–6 Certified Curriculum</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
              <span>Native Tutors from Beijing &amp; Shanghai</span>
            </div>
          </div>
        </div>

        {/* Hero visual — illustrated classroom card echoing the brochure */}
        <div className="relative mx-auto mt-16 max-w-5xl md:mt-20">
          <div className="absolute -inset-4 rotate-[-1deg] rounded-[2rem] bg-brand-coral/40" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[1.75rem] border-4 border-white bg-white shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left: classroom scene */}
              <div className="relative aspect-[5/4] bg-gradient-to-br from-brand-yellow-soft to-brand-cream md:aspect-auto">
                {/* Whiteboard */}
                <div className="absolute right-6 top-6 rounded-md border-4 border-foreground/15 bg-white px-6 py-5 shadow-sm md:right-10 md:top-10 md:px-10 md:py-8">
                  <p className="font-hanzi text-2xl font-bold text-foreground md:text-4xl">大家好!</p>
                </div>
                {/* Floor */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-coral-light to-transparent" />
                {/* Decorative student-circle illustration stand-ins */}
                <div className="absolute bottom-10 left-8 flex items-end gap-3">
                  <div className="h-16 w-12 rounded-t-full bg-brand-red shadow-md" />
                  <div className="h-20 w-14 rounded-t-full bg-brand-blue shadow-md" />
                  <div className="h-14 w-12 rounded-t-full bg-brand-gold shadow-md" />
                  <div className="h-[72px] w-12 rounded-t-full bg-brand-coral shadow-md" />
                </div>
                <div className="absolute right-8 bottom-6 h-12 w-12 rounded-full bg-green-700/80" aria-hidden="true" />
              </div>

              {/* Right: stats / quick info */}
              <div className="flex flex-col justify-center gap-5 bg-white p-8 md:p-12">
                <div className="grid grid-cols-2 gap-5">
                  <div className="rounded-2xl bg-brand-cream p-5">
                    <p className="font-display text-3xl font-bold text-brand-red">98%</p>
                    <p className="mt-1 text-sm text-foreground/60">HSK pass rate</p>
                  </div>
                  <div className="rounded-2xl bg-brand-coral-light p-5">
                    <p className="font-display text-3xl font-bold text-brand-red">1:6</p>
                    <p className="mt-1 text-sm text-foreground/60">Avg. class size</p>
                  </div>
                  <div className="rounded-2xl bg-brand-yellow/30 p-5">
                    <p className="font-display text-3xl font-bold text-brand-red-dark">30+</p>
                    <p className="mt-1 text-sm text-foreground/60">Native tutors</p>
                  </div>
                  <div className="rounded-2xl bg-brand-coral-light/60 p-5">
                    <p className="font-display text-3xl font-bold text-brand-red">4.9★</p>
                    <p className="mt-1 text-sm text-foreground/60">Student rating</p>
                  </div>
                </div>
                <p className="border-l-4 border-brand-yellow pl-4 text-sm italic text-foreground/65">
                  &ldquo;The first language program that actually got me speaking — within weeks, not years.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
