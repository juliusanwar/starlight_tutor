import { GraduationCap, Users, Award, Globe2 } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Native & Certified Tutors",
    hanzi: "老师",
    body:
      "Every instructor is a native Mandarin speaker with formal TCSOL or equivalent teaching certification — and an obsession with making lessons click.",
    accent: "bg-brand-red",
  },
  {
    icon: Users,
    title: "Small Class Sizes",
    hanzi: "小班",
    body:
      "Six students or fewer per group — so every learner speaks every session. Or go fully 1-on-1 for laser-focused progress.",
    accent: "bg-brand-blue",
  },
  {
    icon: Award,
    title: "HSK Preparation",
    hanzi: "考试",
    body:
      "Structured pathways from HSK 1 through HSK 6, with mock exams, targeted vocabulary drills, and a 98% first-attempt pass rate.",
    accent: "bg-brand-gold",
  },
  {
    icon: Globe2,
    title: "Cultural Immersion",
    hanzi: "文化",
    body:
      "Go beyond grammar — calligraphy nights, cooking workshops, film clubs, and Lunar New Year events build real-world fluency.",
    accent: "bg-brand-red-soft",
  },
];

export function Methodology() {
  return (
    <section id="methodology" className="relative bg-brand-cream py-20 md:py-28">
      {/* Subtle decorative paper grain */}
      <div className="grain absolute inset-0" aria-hidden="true" />

      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
            Our Methodology · 方法
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-foreground md:text-5xl text-balance">
            Why students <span className="squiggle">actually stick</span> with us.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-foreground/65 md:text-lg">
            A learning system built on four pillars — proven to take beginners from zero
            to confident conversation.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <article
              key={f.title}
              className="group relative flex flex-col rounded-2xl border border-brand-red/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/30 hover:shadow-xl"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Decorative hanzi watermark */}
              <span
                className="pointer-events-none absolute right-4 top-3 font-hanzi text-5xl font-bold text-brand-coral/25 transition-colors group-hover:text-brand-coral/40"
                aria-hidden="true"
              >
                {f.hanzi}
              </span>

              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-md ${f.accent}`}
              >
                <f.icon className="h-6 w-6" strokeWidth={2.25} />
              </div>

              <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-foreground">
                {f.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-foreground/65">{f.body}</p>

              <div className="mt-6 h-1 w-10 rounded-full bg-brand-yellow transition-all duration-300 group-hover:w-20" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
