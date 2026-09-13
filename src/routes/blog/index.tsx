import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { posts } from "@/lib/blog";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Plumbing Blog Singapore | A1PlumberSG" },
      {
        name: "description",
        content:
          "Plumbing guides for Singapore homes: preventing blocked drains, common plumbing problems, when to call a plumber and what causes a leaking tap.",
      },
      { property: "og:title", content: "Plumbing Blog Singapore | A1PlumberSG" },
      {
        property: "og:description",
        content: "Practical plumbing articles written for Singapore households.",
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Plumbing guides for Singapore homes"
        description="Clear, practical articles on the plumbing problems we see most often."
      />

      <section className="section-y">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
            >
              <div className="aspect-[16/9] overflow-hidden bg-muted">
                <img
                  src={p.image}
                  alt={p.imageAlt}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs text-muted-foreground">{p.readTime}</p>
                <h2 className="mt-2 text-lg font-semibold">{p.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
