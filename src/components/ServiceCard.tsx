import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/services";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <Link
      to="/services/$slug"
      params={{ slug: service.slug }}
      className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[var(--shadow-lift)]"
    >
      <span className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-foreground transition-colors duration-300 group-hover:bg-primary">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-base font-semibold">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{service.short}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold">
        Learn more
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
