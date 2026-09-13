import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Lightbulb } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { tips } from "@/lib/tips";

export const Route = createFileRoute("/tips")({
  head: () => ({
    meta: [
      { title: "Plumbing Tips & Advice Singapore | A1PlumberSG" },
      {
        name: "description",
        content:
          "Practical plumbing tips for Singapore homes: preventing blocked drains, handling leaks, maintaining your water heater and spotting pipes that need replacing.",
      },
      { property: "og:title", content: "Plumbing Tips & Advice Singapore | A1PlumberSG" },
      {
        property: "og:description",
        content: "Simple maintenance advice that prevents most household plumbing call-outs.",
      },
    ],
  }),
  component: Tips,
});

function Tips() {
  return (
    <>
      <PageHero
        eyebrow="Plumbing tips"
        title="Advice that prevents most plumbing problems"
        description="Small habits stop the majority of leaks and blockages we are called out to. Here are the ones that matter most."
      />

      <section className="section-y">
        <div className="container-page grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tips.map((t) => (
            <article
              key={t.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary/20">
                <Lightbulb className="size-5" aria-hidden="true" />
              </span>
              <h2 className="mt-4 text-base font-semibold">{t.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
              {t.postSlug && (
                <Link
                  to="/blog/$slug"
                  params={{ slug: t.postSlug }}
                  className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold"
                >
                  Read the guide
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              )}
              {t.serviceSlug && (
                <Link
                  to="/services/$slug"
                  params={{ slug: t.serviceSlug }}
                  className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold"
                >
                  See the service
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>

      <CtaBand title="Already have a problem?" />
    </>
  );
}
