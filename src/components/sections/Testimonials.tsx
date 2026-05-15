import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "I went from zero Mandarin to ordering at restaurants in Beijing in eight months. The tutors actually make you talk from day one — it’s a game-changer.",
    name: "Sarah L.",
    role: "Adult Conversational · Jakarta",
    initial: "S",
    accent: "bg-brand-red",
  },
  {
    quote:
      "My daughter (age 9) used to dread language class. Now she begs for her Mandarin sessions. The teachers turn vocabulary into games she remembers.",
    name: "Andi P.",
    role: "Parent · Kids & Teens Track",
    initial: "A",
    accent: "bg-brand-blue",
  },
  {
    quote:
      "Passed HSK 5 on my first attempt thanks to their mock exam system. The business Mandarin module helped me land a regional role.",
    name: "Mei C.",
    role: "Business & HSK Prep",
    initial: "M",
    accent: "bg-brand-gold",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-brand-coral-light/70 py-20 md:py-28"
    >
      <div className="brand-splash h-[400px] w-[500px] right-[-100px] top-12 opacity-50" aria-hidden="true" />

      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
            Testimonials · 学生评价
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-foreground md:text-5xl text-balance">
            Real students. Real progress.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-foreground/65 md:text-lg">
            Don&apos;t take our word for it — here&apos;s what learners across our programs
            have to say.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="relative flex flex-col rounded-3xl border border-white bg-white/85 p-7 shadow-md backdrop-blur-sm transition-transform hover:-translate-y-1"
              style={{ transform: `rotate(${(i - 1) * 0.6}deg)` }}
            >
              <Quote
                className="absolute right-5 top-5 h-8 w-8 text-brand-coral/60"
                aria-hidden="true"
              />

              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="h-4 w-4 fill-brand-gold text-brand-gold"
                  />
                ))}
              </div>

              <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-foreground/80">
                “{t.quote}”
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-brand-red/10 pt-5">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full font-display text-lg font-bold text-white shadow ${t.accent}`}
                >
                  {t.initial}
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-foreground">{t.name}</p>
                  <p className="text-xs text-foreground/55">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
