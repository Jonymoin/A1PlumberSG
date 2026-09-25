import { Link } from "@tanstack/react-router";
import { Mail, MessageCircle, Phone, Wrench } from "lucide-react";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-8 bg-secondary text-secondary-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
               <img
    src="/images/logoa1.png"
    alt=""
    className="size-9 shrink-0 object-contain"
  />
            </span>
            <span className="font-display text-lg font-extrabold">A1PlumberSG</span>
          </div>
          <p className="mt-4 text-sm text-secondary-foreground/70">
            Reliable, affordable plumbing repairs and installations across Singapore — homes,
            condos, HDB flats and small businesses.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase">Popular services</h3>
          <ul className="mt-4 space-y-2 text-sm text-secondary-foreground/70">
            {services.slice(0, 7).map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="transition-colors hover:text-primary"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase">Company</h3>
          <ul className="mt-4 space-y-2 text-sm text-secondary-foreground/70">
            {[
              { to: "/about", label: "About us" },
              { to: "/services", label: "All services" },
              { to: "/reviews", label: "Reviews" },
              { to: "/tips", label: "Plumbing tips" },
              { to: "/blog", label: "Blog" },
              { to: "/contact", label: "Contact" },
              { to: "/privacy-policy", label: "Privacy Policy" },
              { to: "/terms-and-condition", label: "Terms & Conditions" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase">Get in touch</h3>
          <ul className="mt-4 space-y-3 text-sm text-secondary-foreground/80">
            <li>
              <a href={site.phoneLink} className="flex items-center gap-2 hover:text-primary">
                <Phone className="size-4" aria-hidden="true" /> {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={site.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary"
              >
                <MessageCircle className="size-4" aria-hidden="true" /> WhatsApp chat
              </a>
            </li>
            <li>
              <a href={site.emailLink} className="flex items-center gap-2 hover:text-primary">
                <Mail className="size-4" aria-hidden="true" /> {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-secondary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} A1PlumberSG. All rights reserved.</p>
          <p>Plumbing services across Singapore.</p>
        </div>
      </div>
    </footer>
  );
}
