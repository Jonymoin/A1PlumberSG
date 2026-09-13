import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const Route = createFileRoute("/terms-and-condition")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions | A1PlumberSG" },
      {
        name: "description",
        content:
          "The terms and conditions that apply to plumbing services provided by A1PlumberSG in Singapore, including quotations, payment and liability.",
      },
      { property: "og:title", content: "Terms and Conditions | A1PlumberSG" },
      {
        property: "og:description",
        content: "Terms governing our plumbing services in Singapore.",
      },
    ],
  }),
  component: Terms,
});

const sections = [
  {
    h: "1. Scope of services",
    p: [
      "A1PlumberSG provides plumbing repair, maintenance and installation services in Singapore. The specific work to be carried out is the work described in the quotation or agreed with you before the job begins.",
    ],
  },
  {
    h: "2. Quotations and pricing",
    p: [
      "Quotations are based on the information available at the time and on what can be seen during inspection. If additional faults are discovered once work has started, we will inform you and obtain your agreement before carrying out any additional work or incurring extra cost.",
    ],
  },
  {
    h: "3. Appointments and access",
    p: [
      "You are responsible for providing safe and reasonable access to the work area at the agreed time. If access cannot be provided, the appointment may need to be rescheduled.",
      "We will inform you as early as possible if our arrival time changes due to an earlier job overrunning or an emergency call-out.",
    ],
  },
  {
    h: "4. Payment",
    p: [
      "Payment is due on completion of the work unless another arrangement has been agreed in writing. Accepted payment methods will be confirmed at the time of booking.",
    ],
  },
  {
    h: "5. Materials and parts",
    p: [
      "Parts supplied by A1PlumberSG are covered by the manufacturer's warranty where one applies. Where you supply your own parts or fixtures, we will install them but cannot accept responsibility for defects in those items.",
    ],
  },
  {
    h: "6. Existing conditions",
    p: [
      "Plumbing systems in older properties may have pre-existing corrosion, previous unauthorised alterations or concealed defects. We are not responsible for faults that arise elsewhere in an aged system as a result of normal work carried out on it, though we will always advise you of any risk we identify before starting.",
    ],
  },
  {
    h: "7. Limitation of liability",
    p: [
      "Our liability is limited to the cost of rectifying defective workmanship carried out by us. We are not liable for indirect or consequential losses. Nothing in these terms excludes liability that cannot be excluded under Singapore law.",
    ],
  },
  {
    h: "8. Cancellations",
    p: [
      "Please give us as much notice as possible if you need to cancel or reschedule so that the slot can be offered to another customer.",
    ],
  },
  {
    h: "9. Website content",
    p: [
      "Information on this website is provided for general guidance only and does not replace an on-site assessment of your specific plumbing situation.",
    ],
  },
  {
    h: "10. Contact",
    p: [
      `Questions about these terms can be directed to A1PlumberSG at ${site.phoneDisplay} or ${site.email}.`,
    ],
  },
];

function Terms() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms and Conditions"
        description="The terms that apply when you engage A1PlumberSG for plumbing work."
      />
      <section className="section-y">
        <div className="container-page max-w-3xl">
          {sections.map((s) => (
            <div key={s.h} className="mb-8">
              <h2 className="text-xl font-bold">{s.h}</h2>
              {s.p.map((t) => (
                <p key={t} className="mt-3 leading-relaxed text-muted-foreground">
                  {t}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
