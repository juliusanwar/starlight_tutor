import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "default" | "light";
}

export function Logo({ className, variant = "default" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-brand-red-dark";

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      {/* Red circular badge with a 5-point gold star */}
      <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-brand-red shadow-md ring-2 ring-brand-red/20">
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6 fill-brand-gold"
          aria-hidden="true"
        >
          <path d="M12 2 L14.7 9 L22 9.6 L16.4 14.3 L18.2 21.5 L12 17.6 L5.8 21.5 L7.6 14.3 L2 9.6 L9.3 9 Z" />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-lg font-extrabold tracking-tight",
            textColor,
          )}
        >
          STARLIGHT
        </span>
        <span
          className={cn(
            "font-display text-xs italic tracking-wide",
            variant === "light" ? "text-white/85" : "text-brand-red",
          )}
        >
          Mandarin
        </span>
      </div>
    </div>
  );
}
