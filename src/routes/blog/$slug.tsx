import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CtaBand } from "@/components/CtaBand";
import { getPost, posts } from "@/lib/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { slug: post.slug, metaTitle: post.metaTitle, excerpt: post.excerpt };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: loaderData.metaTitle },
          { name: "description", content: loaderData.excerpt },
          { property: "og:title", content: loaderData.metaTitle },
          { property: "og:description", content: loaderData.excerpt },
          { property: "og:type", content: "article" },
        ]
      : [{ title: "Not found" }, { name: "robots", content: "noindex" }],
  }),
  component: BlogPost,
});

function BlogPost() {
  const { slug } = Route.useParams();
  const post = getPost(slug)!;
  const others = posts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="bg-secondary text-secondary-foreground">
          <div className="container-page py-14 md:py-18">
            <nav aria-label="Breadcrumb" className="text-sm text-secondary-foreground/60">
              <Link to="/" className="hover:text-primary">
                Home
              </Link>
              <span className="px-2">/</span>
              <Link to="/blog" className="hover:text-primary">
                Blog
              </Link>
            </nav>
            <h1 className="mt-5 max-w-3xl text-3xl font-extrabold sm:text-4xl md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 max-w-2xl text-secondary-foreground/75">{post.excerpt}</p>
            <p className="mt-3 text-xs text-secondary-foreground/60">{post.readTime}</p>
          </div>
        </header>

        <div className="container-page py-12 md:py-16">
          <div className="mx-auto max-w-3xl">
            <div className="overflow-hidden rounded-3xl border border-border bg-muted shadow-[var(--shadow-soft)]">
              <img
                src={post.image}
                alt={post.imageAlt}
                loading="lazy"
                className="aspect-[16/9] size-full object-cover"
              />
            </div>

            {post.sections.map((s) => (
              <section key={s.heading} className="mt-10">
                <h2 className="text-2xl font-bold">{s.heading}</h2>
                {s.body.map((p) => (
                  <p key={p} className="mt-4 leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
                {s.list && (
                  <ul className="mt-4 space-y-2">
                    {s.list.map((li) => (
                      <li key={li} className="flex gap-3 text-muted-foreground">
                        <span
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                          aria-hidden="true"
                        />
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <div className="mt-12 border-t border-border pt-8">
              <h2 className="text-lg font-semibold">More reading</h2>
              <ul className="mt-4 space-y-2 text-sm">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link
                      to="/blog/$slug"
                      params={{ slug: o.slug }}
                      className="text-muted-foreground underline underline-offset-4 hover:text-foreground"
                    >
                      {o.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>

      <CtaBand />
    </>
  );
}
