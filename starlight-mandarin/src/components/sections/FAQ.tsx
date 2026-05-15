import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do I need any prior experience with Mandarin?",
    a: "Absolutely not. The majority of our students start at zero. Our placement assessment is friendly, free, and takes about 15 minutes — we’ll recommend the right starting point.",
  },
  {
    q: "How are classes delivered — online or in-person?",
    a: "Both. We offer in-person sessions at our Ruko Golden 8 location, fully online classes over Zoom, and hybrid arrangements. Most students mix modes based on their week.",
  },
  {
    q: "What is HSK and which level should I aim for?",
    a: "HSK is the official Chinese proficiency exam, with six levels. HSK 3 is conversational; HSK 4 is generally required for university; HSK 5–6 are professional/native-equivalent. We’ll help you set a target based on your goals.",
  },
  {
    q: "Can I switch tracks once I’ve started?",
    a: "Yes. Students often start in Adult Conversational and move into HSK Prep, or vice versa. We pro-rate the difference and you keep all your progress.",
  },
  {
    q: "What does the free trial include?",
    a: "A 45-minute private session with a native tutor, a placement test, and a personalized study roadmap. No commitment, no card required.",
  },
  {
    q: "Do you offer IELTS preparation too?",
    a: "Yes. We run dedicated IELTS and IELTS Pretest tracks for students who need both Mandarin and English proficiency for university or work abroad.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-white py-20 md:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
              FAQ · 常见问题
            </p>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-foreground md:text-5xl text-balance">
              Questions, answered.
            </h2>
            <p className="mt-5 text-base text-foreground/65 md:text-lg">
              Can&apos;t find what you&apos;re looking for? Reach out via WhatsApp — we
              reply within a few hours during business days.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-brand-red/15 bg-brand-cream px-5 py-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-red text-lg font-bold text-white">
                ?
              </div>
              <div className="text-sm">
                <p className="font-semibold text-foreground">Still curious?</p>
                <a
                  href="https://wa.me/628111333886"
                  className="text-brand-red hover:underline"
                >
                  Chat on WhatsApp →
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
              {faqs.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger>{item.q}</AccordionTrigger>
                  <AccordionContent>{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
