import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-brand-red py-20 text-white md:py-28">
      {/* Decorative giant hanzi */}
      <span
        className="pointer-events-none absolute -right-12 -top-12 select-none font-hanzi text-[18rem] font-bold text-white/[0.06] leading-none"
        aria-hidden="true"
      >
        学
      </span>
      <span
        className="pointer-events-none absolute -left-10 -bottom-20 select-none font-hanzi text-[14rem] font-bold text-white/[0.06] leading-none"
        aria-hidden="true"
      >
        中
      </span>

      {/* Soft yellow splash */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 30% 40%, rgba(251,192,45,0.4) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
            <span>开始吧</span>
            <span className="opacity-60">·</span>
            <span>Let&apos;s begin</span>
          </div>

          <h2 className="font-display text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl text-balance">
            Ready to say{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-brand-yellow">Nǐ hǎo</span>
              <span
                className="absolute inset-x-0 bottom-1 h-3 -skew-x-6 rounded-sm bg-brand-yellow/25"
                aria-hidden="true"
              />
            </span>{" "}
            to your new language skills?
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base text-white/80 md:text-lg">
            Book your free consultation today — a 45-minute session with a native
            tutor and a personalized roadmap. No card. No pressure.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button
              asChild
              size="lg"
              className="w-full bg-brand-yellow text-brand-red-dark shadow-2xl hover:bg-white hover:text-brand-red sm:w-auto"
            >
              <Link href="https://wa.me/628111333886">
                <Calendar className="h-5 w-5" />
                Schedule Your Free Consultation
                <ArrowRight />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full border-white/40 bg-transparent text-white hover:bg-white hover:text-brand-red sm:w-auto"
            >
              <Link href="#programs">View Programs</Link>
            </Button>
          </div>

          <p className="mt-8 text-sm text-white/65">
            Or WhatsApp us directly at{" "}
            <a href="https://wa.me/628111333886" className="font-semibold text-brand-yellow underline-offset-4 hover:underline">
              0811 133 3886
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
