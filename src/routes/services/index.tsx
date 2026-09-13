import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/CtaBand";
import { CtaButtons } from "@/components/CtaButtons";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Plumbing Services Singapore | A1PlumberSG" },
      {
        name: "description",
        content:
          "All plumbing services from A1PlumberSG: leaking pipes, blocked drains, clogged toilets, low water pressure, burst pipes, water heaters and more across Singapore.",
      },
      { property: "og:title", content: "Plumbing Services Singapore | A1PlumberSG" },
      {
        property: "og:description",
        content: "Every plumbing problem we repair across Singapore, with detailed guidance on each.",
      },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Plumbing services across Singapore"
        description="Pick the problem that matches yours. Each page explains the likely causes, the warning signs and how we repair it."
      >
        <CtaButtons className="mt-8" />
      </PageHero>

      <section className="section-y">
        <div className="container-page grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
