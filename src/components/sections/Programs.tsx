import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

type Tier = {
  name: string;
  hanzi: string;
  tagline: string;
  audience: string;
  price: string;
  priceUnit: string;
  features: string[];
  featured?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Kids & Teens",
    hanzi: "儿童",
    tagline: "Fun, foundational",
    audience: "TK / SD · SMP / SMA",
    price: "Rp 450K",
    priceUnit: "/ month",
    features: [
      "Game-based lessons & songs",
      "Pinyin and basic character writing",
      "Storytelling & roleplay activities",
      "Weekly parent progress reports",
      "Holiday cultural workshops",
    ],
  },
  {
    name: "Adult Conversational",
    hanzi: "成人",
    tagline: "Travel & daily life",
    audience: "Umum · Beginner to Intermediate",
    price: "Rp 750K",
    priceUnit: "/ month",
    features: [
      "Real-life dialogue practice",
      "Travel, dining & shopping scenarios",
      "Tone & pronunciation coaching",
      "Flexible evening & weekend slots",
      "Optional 1-on-1 conversation hours",
    ],
    featured: true,
  },
  {
    name: "Business & HSK Prep",
    hanzi: "商务",
    tagline: "Rigorous, professional",
    audience: "HSK 1–6 · IELTS Pretest available",
    price: "Rp 1.2M",
    priceUnit: "/ month",
    features: [
      "Full HSK 1–6 exam pathway",
      "Business email & meeting Mandarin",
      "Mock exams with detailed feedback",
      "Industry-specific vocabulary modules",
      "Certificate of completion",
    ],
  },
];

export function Programs() {
  return (
    <section id="programs" className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="brand-splash h-[420px] w-[420px] -left-32 top-0 opacity-50" aria-hidden="true" />

      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
            Our Programs · 课程
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-foreground md:text-5xl text-balance">
            Find the path that fits your goals.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-foreground/65 md:text-lg">
            Three tracks, one outcome: speaking Mandarin with confidence. Start anywhere
            — switch tracks as you grow.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-7">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={`relative flex flex-col rounded-3xl p-8 transition-all duration-300 ${
                tier.featured
                  ? "bg-brand-red text-white shadow-2xl lg:-translate-y-3 lg:scale-[1.02]"
                  : "border border-brand-red/12 bg-white text-foreground hover:-translate-y-1 hover:border-brand-red/30 hover:shadow-xl"
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-yellow px-4 py-1 text-xs font-bold uppercase tracking-wider text-brand-red-dark shadow-md">
                  Most Popular
                </span>
              )}

              <div className="flex items-start justify-between">
                <div>
                  <p
                    className={`text-xs font-semibold uppercase tracking-wider ${
                      tier.featured ? "text-brand-yellow" : "text-brand-red"
                    }`}
                  >
                    {tier.tagline}
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-bold tracking-tight">
                    {tier.name}
                  </h3>
                </div>
                <span
                  className={`font-hanzi text-4xl font-bold ${
                    tier.featured ? "text-white/30" : "text-brand-coral/50"
                  }`}
                  aria-hidden="true"
                >
                  {tier.hanzi}
                </span>
              </div>

              <p
                className={`mt-1 text-sm ${
                  tier.featured ? "text-white/75" : "text-foreground/60"
                }`}
              >
                {tier.audience}
              </p>

              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="font-display text-4xl font-bold">{tier.price}</span>
                <span
                  className={`text-sm ${tier.featured ? "text-white/70" : "text-foreground/55"}`}
                >
                  {tier.priceUnit}
                </span>
              </div>

              <div
                className={`my-6 h-px w-full ${
                  tier.featured ? "bg-white/20" : "bg-brand-red/10"
                }`}
              />

              <ul className="flex flex-col gap-3.5">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <span
                      className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        tier.featured
                          ? "bg-brand-yellow text-brand-red-dark"
                          : "bg-brand-coral-light text-brand-red"
                      }`}
                    >
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span
                      className={tier.featured ? "text-white/90" : "text-foreground/75"}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-2">
                <Button
                  asChild
                  className={`w-full ${
                    tier.featured
                      ? "bg-white text-brand-red shadow-md hover:bg-brand-yellow hover:text-brand-red-dark"
                      : ""
                  }`}
                  variant={tier.featured ? "default" : "outline"}
                  size="lg"
                >
                  <Link href="#cta">
                    Learn More
                    <ArrowRight />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-foreground/55">
          Also offered: <span className="font-semibold text-foreground/75">IELTS</span> &{" "}
          <span className="font-semibold text-foreground/75">IELTS Pretest</span> coaching.{" "}
          <Link href="#cta" className="font-semibold text-brand-red underline-offset-4 hover:underline">
            Ask about combo discounts →
          </Link>
        </p>
      </div>
    </section>
  );
}
