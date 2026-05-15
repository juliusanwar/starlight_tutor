"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#programs", label: "Programs" },
  { href: "#methodology", label: "Methodology" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/85 backdrop-blur-md shadow-[0_1px_0_0_rgba(183,28,42,0.08)]"
          : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between md:h-20">
        <Link href="/" aria-label="Starlight Mandarin home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/75 transition-colors hover:text-brand-red"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="default">
            <Link href="#cta">Book Free Trial</Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-red/20 text-brand-red md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-brand-red/10 bg-white md:hidden">
          <nav className="container flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-brand-coral-light hover:text-brand-red"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild size="lg" className="mt-2 w-full">
              <Link href="#cta" onClick={() => setOpen(false)}>
                Book Free Trial
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
