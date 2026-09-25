import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";
import { services } from "@/lib/services";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact A1PlumberSG | Call or WhatsApp +65 8413 0016" },
      {
        name: "description",
        content:
          "Contact A1PlumberSG for plumbing help anywhere in Singapore. Call +65 8413 0016, WhatsApp us or email a1plumbersg@gmail.com.",
      },
      { property: "og:title", content: "Contact A1PlumberSG | Plumbing Services Singapore" },
      {
        property: "og:description",
        content: "Call, WhatsApp or email A1PlumberSG for fast plumbing help in Singapore.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to A1PlumberSG"
        description="The fastest way to reach us is a call or a WhatsApp message with a photo of the problem."
      />

      <section className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-bold">Contact details</h2>
            <ul className="mt-6 space-y-4">
              <li className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
                <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  Company
                </p>
                <p className="mt-1 font-display text-lg font-bold">{site.name}</p>
              </li>
              <li>
                <a
                  href={site.phoneLink}
                  className="flex items-center gap-3 rounded-2xl bg-primary px-5 py-4 font-semibold text-primary-foreground shadow-[var(--shadow-lime)] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <Phone className="size-5" aria-hidden="true" />
                  Call {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 font-semibold shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary"
                >
                  <MessageCircle className="size-5" aria-hidden="true" />
                  WhatsApp {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={site.emailLink}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 font-semibold shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary"
                >
                  <Mail className="size-5" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] md:p-8">
              <h2 className="text-2xl font-bold">Send us your details</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                This form is not connected to a mailbox yet, so for anything urgent please call or
                WhatsApp us directly.
              </p>

              <form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="problem" className="text-sm font-medium">
                    Plumbing problem
                  </label>
                  <select
                    id="problem"
                    name="problem"
                    defaultValue=""
                    className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
                  >
                    <option value="" disabled>
                      Select the closest match
                    </option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.slug}>
                        {s.title}
                      </option>
                    ))}
                    <option value="other">Something else</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
                    placeholder="Describe what is happening and where in your home."
                  />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-[var(--shadow-lime)] transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
                  >
                    Submit details
                  </button>
                  {submitted && (
                    <p role="status" className="mt-4 text-sm text-muted-foreground">
                      Thanks — your details are captured in this form only. To reach us right now,
                      call {site.phoneDisplay} or send a WhatsApp message.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
