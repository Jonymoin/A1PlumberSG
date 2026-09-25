
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/services";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <Link
      to="/services/$slug"
      params={{ slug: service.slug }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-950 p-6 text-white shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:shadow-[0_15px_45px_rgba(37,99,235,0.20)]"
    >
      {/* Subtle background glow */}
      <span
        className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-blue-500/10 blur-3xl transition-all duration-500 group-hover:bg-blue-500/20 group-hover:scale-125"
        aria-hidden="true"
      />

      {/* Icon */}
      <span className="relative flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-blue-400 transition-all duration-300 group-hover:border-blue-400/30 group-hover:bg-blue-500/10 group-hover:text-blue-300">
        <Icon className="size-5" aria-hidden="true" />
      </span>

      {/* Title */}
      <h3 className="relative mt-4 text-base font-semibold text-white">
        {service.title}
      </h3>

      {/* Description */}
      <p className="relative mt-2 flex-1 text-sm leading-relaxed text-slate-400">
        {service.short}
      </p>

      {/* Learn more */}
      <span className="relative mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 transition-colors duration-300 group-hover:text-blue-300">
        Learn more
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
