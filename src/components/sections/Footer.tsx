import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";

import { Logo } from "@/components/Logo";

const links = {
  programs: [
    { label: "Kids & Teens", href: "#programs" },
    { label: "Adult Conversational", href: "#programs" },
    { label: "Business & HSK Prep", href: "#programs" },
    { label: "IELTS Coaching", href: "#programs" },
  ],
  learn: [
    { label: "Methodology", href: "#methodology" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Free Trial", href: "#cta" },
  ],
};

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: MessageCircle, href: "https://wa.me/628111333886", label: "WhatsApp" },
];

export function Footer() {
  return (
    <footer className="bg-brand-cream pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:gap-14">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-foreground/65">
              Mandarin learning center and private tutoring — where every student finds
              their voice in a new language.
            </p>
            <p className="mt-5 font-hanzi text-base text-brand-red/80">一起学中文</p>
          </div>

          {/* Programs */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-wider text-foreground/55">
              Programs
            </p>
            <ul className="flex flex-col gap-2.5">
              {links.programs.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-foreground/75 transition-colors hover:text-brand-red"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-wider text-foreground/55">
              Quick Links
            </p>
            <ul className="flex flex-col gap-2.5">
              {links.learn.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-foreground/75 transition-colors hover:text-brand-red"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-wider text-foreground/55">
              Contact
            </p>
            <ul className="flex flex-col gap-3 text-sm text-foreground/75">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
                <a href="https://wa.me/628111333886" className="hover:text-brand-red">
                  0811 133 3886
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
                <a href="mailto:hello@starlightmandarin.id" className="hover:text-brand-red">
                  hello@starlightmandarin.id
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
                <span>Ruko Golden 8 Blok E No 1</span>
              </li>
            </ul>

            <div className="mt-5 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-red/15 text-brand-red transition-all hover:bg-brand-red hover:text-white"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-brand-red/10 pt-7 text-xs text-foreground/55 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Starlight Mandarin. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-brand-red">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-brand-red">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
