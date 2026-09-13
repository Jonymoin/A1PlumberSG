import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, CircleAlert, Phone } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { CtaButtons } from "@/components/CtaButtons";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getService, services } from "@/lib/services";
import { site } from "@/lib/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { slug: service.slug, title: service.title, metaTitle: service.metaTitle, short: service.short };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: loaderData.metaTitle },
          { name: "description", content: `${loaderData.short} A1PlumberSG repairs ${loaderData.title.toLowerCase()} across Singapore. Call ${site.phoneDisplay}.` },
          { property: "og:title", content: loaderData.metaTitle },
          { property: "og:description", content: loaderData.short },
        ]
      : [],
  }),
  component: ServicePage,
});

const steps = [
  { title: "Contact & description", text: "You tell us what is happening; we ask a few questions to understand the fault." },
  { title: "On-site inspection", text: "We check the fixture, the pipework and the surrounding area before touching anything." },
  { title: "Clear quote", text: "You get the price and the options before any work begins." },
  { title: "Repair & testing", text: "We complete the repair, test it under normal use and tidy the work area." },
];

function ServicePage() {
  const { slug } = Route.useParams();
  const service = getService(slug)!;
  const Icon = service.icon;
  const related = services.filter((s) => s.slug !== slug).slice(0, 6);

  return (
    <>
      <section className="bg-secondary text-secondary-foreground">
        <div className="container-page py-16 md:py-20">
          <nav aria-label="Breadcrumb" className="text-sm text-secondary-foreground/60">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
            <span className="px-2">/</span>
            <Link to="/services" className="hover:text-primary">
              Services
            </Link>
            <span className="px-2">/</span>
            <span className="text-secondary-foreground/90">{service.title}</span>
          </nav>

          <div className="mt-6 flex items-start gap-4">
            <span className="hidden size-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground sm:flex">
              <Icon className="size-7" aria-hidden="true" />
            </span>
            <div>
              <h1 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
                {service.title} Repair in Singapore
              </h1>
              <p className="mt-4 max-w-2xl leading-relaxed text-secondary-foreground/75">
                {service.short}
              </p>
            </div>
          </div>
          <CtaButtons className="mt-8" />
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2 className="text-2xl font-bold sm:text-3xl">Understanding the problem</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{service.intro}</p>

            <h2 className="mt-12 text-2xl font-bold sm:text-3xl">Common causes</h2>
            <ul className="mt-5 space-y-3">
              {service.causes.map((c) => (
                <li key={c} className="flex gap-3 text-muted-foreground">
                  <CircleAlert className="mt-0.5 size-5 shrink-0 text-foreground" aria-hidden="true" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-2xl font-bold sm:text-3xl">Signs and symptoms</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {service.signs.map((s) => (
                <li
                  key={s}
                  className="rounded-2xl border border-border bg-card p-4 text-sm text-muted-foreground shadow-[var(--shadow-soft)]"
                >
                  {s}
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-2xl font-bold sm:text-3xl">
              How A1PlumberSG can help
            </h2>
            <ul className="mt-5 space-y-3">
              {service.help.map((h) => (
                <li key={h} className="flex gap-3 text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-foreground" aria-hidden="true" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-2xl font-bold sm:text-3xl">
              Why professional repair matters
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{service.why}</p>

            <h2 className="mt-12 text-2xl font-bold sm:text-3xl">Our service process</h2>
            <ol className="mt-5 grid gap-4 sm:grid-cols-2">
              {steps.map((s, i) => (
                <li
                  key={s.title}
                  className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]"
                >
                  <span className="font-display text-sm font-bold text-muted-foreground">
                    Step {i + 1}
                  </span>
                  <h3 className="mt-1 text-base font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </li>
              ))}
            </ol>

            <h2 className="mt-12 text-2xl font-bold sm:text-3xl">
              {service.title} — frequently asked
            </h2>
            <div className="mt-5">
              <FaqAccordion items={service.faqs} />
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl bg-secondary p-6 text-secondary-foreground shadow-[var(--shadow-lift)]">
                <h2 className="text-lg font-bold">Need this fixed today?</h2>
                <p className="mt-2 text-sm text-secondary-foreground/75">
                  Call or WhatsApp and describe the problem — we will tell you the likely cost and
                  how soon we can attend.
                </p>
                <a
                  href={site.phoneLink}
                  className="mt-5 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <Phone className="size-4" aria-hidden="true" /> {site.phoneDisplay}
                </a>
                <a
                  href={site.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 font-semibold transition-colors hover:border-primary"
                >
                  WhatsApp us
                </a>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
                <h2 className="text-base font-semibold">Related plumbing services</h2>
                <ul className="mt-4 space-y-2 text-sm">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        to="/services/$slug"
                        params={{ slug: r.slug }}
                        className="group inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
                      >
                        {r.title}
                        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="mt-4 inline-block text-sm font-semibold underline underline-offset-4"
                >
                  View all services
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand title={`Get your ${service.title.toLowerCase()} sorted`} />
    </>
  );
}
