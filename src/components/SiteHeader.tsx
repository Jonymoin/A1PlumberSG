import { Link } from "@tanstack/react-router";
import { Menu, Phone, Wrench, X } from "lucide-react";
import { useState } from "react";
import { site } from "@/lib/site";

const nav = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Reviews", to: "/reviews" },
  { label: "Tips", to: "/tips" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="container-page flex h-17 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Wrench className="size-5" aria-hidden="true" />
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight">
            A1Plumber<span className="text-muted-foreground">SG</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "bg-muted text-foreground" }}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneLink}
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-lime)] transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
          >
            <Phone className="size-4" aria-hidden="true" />
            {site.phoneDisplay}
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-xl border border-border text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-border bg-background lg:hidden">
          <div className="container-page flex flex-col py-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-foreground" }}
                className="rounded-lg px-2 py-3 text-base font-medium text-muted-foreground"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.phoneLink}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 font-semibold text-primary-foreground"
            >
              <Phone className="size-4" aria-hidden="true" /> Call {site.phoneDisplay}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
