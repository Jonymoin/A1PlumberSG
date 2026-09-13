import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { ReviewCard } from "@/components/ReviewCard";
import { reviews } from "@/lib/reviews";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews | A1PlumberSG Singapore" },
      {
        name: "description",
        content:
          "Read what Singapore homeowners say about A1PlumberSG — leak repairs, blocked drains, toilets and taps fixed quickly with honest pricing.",
      },
      { property: "og:title", content: "Customer Reviews | A1PlumberSG Singapore" },
      {
        property: "og:description",
        content: "Feedback from customers across Singapore on our plumbing repairs.",
      },
    ],
  }),
  component: Reviews,
});

function Reviews() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="What our customers say"
        description="Feedback from households across Singapore after everyday repairs and urgent call-outs."
      />

      <section className="section-y">
        <div className="container-page grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <ReviewCard key={r.name} review={r} />
          ))}
        </div>
      </section>

      <CtaBand title="Want the same result at your place?" />
    </>
  );
}
