import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About A1PlumberSG | Plumbing Company in Singapore" },
      {
        name: "description",
        content:
          "A1PlumberSG is a Singapore plumbing service focused on reliable response, transparent communication and quality workmanship for HDB, condo and landed homes.",
      },
      { property: "og:title", content: "About A1PlumberSG | Plumbing Company in Singapore" },
      {
        property: "og:description",
        content: "Who we are and how we work — professional plumbing across Singapore.",
      },
    ],
  }),
  component: About,
});

const values = [
  {
    title: "Professional service",
    text: "We turn up prepared, work neatly and treat your home the way we would want ours treated.",
  },
  {
    title: "Reliable response",
    text: "You get a realistic arrival time and a message if anything changes on the day.",
  },
  {
    title: "Transparent communication",
    text: "We explain what is wrong in plain language and quote before starting the work.",
  },
  {
    title: "Quality workmanship",
    text: "Proper fittings, correct methods and testing afterwards — not a temporary patch.",
  },
  {
    title: "Customer-focused approach",
    text: "We recommend the repair that suits your situation, not the most expensive option.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A plumbing service Singapore homes can rely on"
        description="A1PlumberSG handles the everyday plumbing problems that disrupt a household — leaks, blockages, failing taps and toilets, and pipework that has reached the end of its life."
      />

      <section className="section-y">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-border bg-muted shadow-[var(--shadow-soft)]">
            <img
              src="/images/plumber-service.webp"
              alt="A1PlumberSG plumber repairing pipework under a sink in a Singapore home"
              loading="lazy"
              className="aspect-[4/3] size-full object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Who we are"
              title="Straightforward plumbing, done properly"
            />
            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                We work across HDB flats, condominiums, landed properties and small commercial
                units throughout Singapore. Most of our work is repair rather than replacement —
                finding the actual cause of a leak or blockage and fixing that, instead of selling
                a bigger job than the situation needs.
              </p>
              <p>
                Every visit starts with an inspection and a clear quote. If a repair will hold, we
                repair. If a run of pipework is genuinely finished, we say so and show you why.
              </p>
              <p>
                You can reach us by phone or WhatsApp. Sending a photo or short video of the
                problem helps us arrive with the right parts on the first visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-[var(--surface)]">
        <div className="container-page">
          <SectionHeading eyebrow="How we work" title="What you can expect from us" center />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1"
              >
                <h3 className="text-base font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
