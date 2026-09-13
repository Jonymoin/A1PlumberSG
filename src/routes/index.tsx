import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award,
  BadgeCheck,
  CalendarClock,
  Clock,
  HandCoins,
  MessageSquare,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  ThumbsUp,
  Truck,
  Wrench,
} from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { CtaButtons } from "@/components/CtaButtons";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ReviewCard } from "@/components/ReviewCard";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { posts } from "@/lib/blog";
import { reviews } from "@/lib/reviews";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import { tips } from "@/lib/tips";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "A1PlumberSG | Professional Plumbing Services in Singapore" },
      {
        name: "description",
        content:
          "Reliable, affordable plumbing services in Singapore. Leaking pipes, blocked drains, clogged toilets, taps and water heaters. Call or WhatsApp +65 8413 0016.",
      },
      { property: "og:title", content: "A1PlumberSG | Professional Plumbing Services in Singapore" },
      {
        property: "og:description",
        content:
          "Same-day plumbing repairs across Singapore. Transparent pricing, experienced plumbers, fast response.",
      },
    ],
  }),
  component: Home,
});

const whyChooseUs = [
  { icon: Clock, title: "Fast Response", text: "We answer quickly and give you a realistic arrival time, not a vague promise." },
  { icon: Wrench, title: "Experienced Plumbers", text: "Everyday Singapore plumbing — HDB, condo and landed — handled day in, day out." },
  { icon: HandCoins, title: "Transparent Pricing", text: "You hear the cost before work starts. No surprises added at the end." },
  { icon: BadgeCheck, title: "Professional Workmanship", text: "Repairs done properly with the right fittings, not temporary patches." },
  { icon: ShieldCheck, title: "Reliable Service", text: "If we say we are coming, we come — and we tell you if anything changes." },
  { icon: Sparkles, title: "Quality Parts", text: "We use durable components so the same fault does not return next month." },
  { icon: CalendarClock, title: "Same-Day Service", text: "Most common repairs can be attended to on the same day you call." },
  { icon: ThumbsUp, title: "Customer Focused", text: "Clear explanations, tidy work areas and no pressure to buy extras." },
];

const steps = [
  { icon: PhoneCall, title: "Contact Us", text: "Call or WhatsApp us at any time with your plumbing problem." },
  { icon: MessageSquare, title: "Explain the Problem", text: "Describe what is happening — a photo or video helps us prepare." },
  { icon: Truck, title: "Plumber Arrives", text: "We arrive with the tools and parts most likely needed for the job." },
  { icon: Award, title: "Problem Fixed", text: "The repair is completed, tested and the area left clean." },
];

const faqs = [
  { q: "How quickly can a plumber arrive?", a: "For most areas in Singapore we can usually attend the same day. Call or WhatsApp us and we will give you a realistic time based on our current jobs." },
  { q: "Do you provide emergency plumbing services?", a: "Yes. Burst pipes, uncontrolled leaks and blocked toilets in single-bathroom homes are treated as urgent. Contact us and we will tell you honestly how soon we can be there." },
  { q: "How much does plumbing repair cost?", a: "It depends on the fault and the parts required. We give you the price before starting work, so you can decide with full information." },
  { q: "Do you provide same-day plumbing service?", a: "In most cases yes, subject to our schedule on the day and where you are located." },
  { q: "Do you repair leaking pipes?", a: "Yes — from a weeping joint under a sink to concealed pipe leaks behind walls and ceilings." },
  { q: "Do you repair blocked drains?", a: "Yes. We clear kitchen sinks, bathroom floor traps, toilets and outdoor drains mechanically rather than relying on chemicals." },
  { q: "Do you provide plumbing services throughout Singapore?", a: "Yes, we cover HDB flats, condominiums, landed homes and small commercial units island-wide." },
  { q: "Can I contact you through WhatsApp?", a: `Yes. Message us at ${site.phoneDisplay} and send photos of the problem if you can — it helps us come prepared.` },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-secondary text-secondary-foreground">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/hero-plumber.webp"
            alt="Professional plumber working on pipework in a Singapore home"
            className="size-full object-cover opacity-35"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/40" />
        </div>

        <div className="container-page grid gap-10 py-20 md:py-28 lg:grid-cols-12">
          <div className="animate-fade-up lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary uppercase">
              Singapore plumbing specialists
            </span>
            <h1 className="mt-5 text-4xl leading-[1.05] font-extrabold sm:text-5xl lg:text-6xl">
              Professional Plumbing Services in Singapore
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-secondary-foreground/80 sm:text-lg">
              A1PlumberSG provides reliable, affordable and professional plumbing work for homes and
              businesses — leak repairs, blocked drains, toilets, taps, pipes and water heaters,
              done properly the first time.
            </p>
            <CtaButtons className="mt-8" />

            <dl className="mt-10 grid max-w-lg grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { t: "Fast Response", d: "Same-day where possible" },
                { t: "Professional Service", d: "Neat, tested repairs" },
                { t: "Transparent Pricing", d: "Quoted before we start" },
              ].map((b) => (
                <div
                  key={b.t}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                >
                  <dt className="text-sm font-semibold text-primary">{b.t}</dt>
                  <dd className="mt-1 text-xs text-secondary-foreground/70">{b.d}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-y bg-[var(--surface)]">
        <div className="container-page">
          <SectionHeading
            eyebrow="Plumbing problems we solve"
            title="Tell us what's wrong — we've fixed it before"
            description="Choose the problem closest to yours to see how we diagnose and repair it."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why choose us"
            title="Why homeowners call A1PlumberSG back"
            center
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((w) => (
              <div
                key={w.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/20">
                  <w.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-y bg-[var(--surface)]">
        <div className="container-page">
          <SectionHeading eyebrow="How it works" title="Four simple steps" center />
          <ol className="relative mt-12 grid gap-6 md:grid-cols-4">
            <div
              className="absolute top-11 right-[12%] left-[12%] hidden border-t-2 border-dashed border-border md:block"
              aria-hidden="true"
            />
            {steps.map((s, i) => (
              <li key={s.title} className="relative z-10 text-center">
                <span className="mx-auto flex size-16 items-center justify-center rounded-full border-4 border-[var(--surface)] bg-primary text-primary-foreground shadow-[var(--shadow-lime)]">
                  <s.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-semibold">
                  {i + 1}. {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-y">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Reviews" title="What our customers say" />
            <Link
              to="/reviews"
              className="text-sm font-semibold underline underline-offset-4 hover:text-muted-foreground"
            >
              Read more reviews
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {reviews.slice(0, 6).map((r) => (
              <ReviewCard key={r.name} review={r} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-y bg-[var(--surface)]">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="FAQ"
              title="Common questions"
              description="Still unsure? Call or WhatsApp us and ask directly."
            />
          </div>
          <div className="lg:col-span-8">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="section-y">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Plumbing tips" title="Simple advice that saves repairs" />
            <Link
              to="/tips"
              className="text-sm font-semibold underline underline-offset-4 hover:text-muted-foreground"
            >
              All tips
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {tips.slice(0, 3).map((t) => (
              <div
                key={t.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
              >
                <h3 className="text-base font-semibold">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog preview */}
      <section className="section-y bg-[var(--surface)]">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="From the blog" title="Plumbing guides for Singapore homes" />
            <Link
              to="/blog"
              className="text-sm font-semibold underline underline-offset-4 hover:text-muted-foreground"
            >
              Visit the blog
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {posts.slice(0, 3).map((p) => (
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
                  <h3 className="mt-2 text-base font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
