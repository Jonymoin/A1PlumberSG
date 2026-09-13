import { MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type Props = { className?: string; size?: "md" | "lg" };

export function CtaButtons({ className, size = "lg" }: Props) {
  const pad = size === "lg" ? "px-7 py-3.5 text-base" : "px-5 py-2.5 text-sm";
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      <a
        href={site.phoneLink}
        className={cn(
          "inline-flex items-center gap-2 rounded-full bg-primary font-semibold text-primary-foreground shadow-[var(--shadow-lime)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none",
          pad,
        )}
      >
        <Phone className="size-4" aria-hidden="true" />
        Call Now
      </a>
      <a
        href={site.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex items-center gap-2 rounded-full border border-border bg-card font-semibold text-foreground shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none",
          pad,
        )}
      >
        <MessageCircle className="size-4" aria-hidden="true" />
        WhatsApp Us
      </a>
    </div>
  );
}
