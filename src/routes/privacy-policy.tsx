import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | A1PlumberSG" },
      {
        name: "description",
        content:
          "How A1PlumberSG collects, uses and protects the personal data you share when requesting plumbing services in Singapore.",
      },
      { property: "og:title", content: "Privacy Policy | A1PlumberSG" },
      {
        property: "og:description",
        content: "Our privacy practices for customer data in Singapore.",
      },
    ],
  }),
  component: Privacy,
});

const sections = [
  {
    h: "1. Information we collect",
    p: [
      "When you contact A1PlumberSG we may collect your name, phone number, email address, service address and a description of the plumbing problem you are reporting. We collect this information only so that we can respond to your enquiry and carry out the work you request.",
    ],
  },
  {
    h: "2. How we use your information",
    p: [
      "Your information is used to arrange appointments, quote for work, complete plumbing services, issue receipts and follow up on completed jobs. We may also contact you about a job already in progress.",
      "We do not use your details for unrelated marketing without your consent.",
    ],
  },
  {
    h: "3. Disclosure to third parties",
    p: [
      "We do not sell or rent your personal data. Information may be shared with a supplier or subcontractor only where it is necessary to complete your job, or where disclosure is required by Singapore law.",
    ],
  },
  {
    h: "4. Data retention",
    p: [
      "We retain job records and contact details for as long as needed to service warranties, resolve disputes and meet accounting and legal obligations, after which the records are securely disposed of.",
    ],
  },
  {
    h: "5. Protection of your data",
    p: [
      "We take reasonable steps to protect the information we hold against loss, misuse and unauthorised access. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.",
    ],
  },
  {
    h: "6. Cookies and website usage",
    p: [
      "This website may use basic cookies and analytics to understand how visitors use the site. You can disable cookies in your browser settings without losing access to the content.",
    ],
  },
  {
    h: "7. Your rights",
    p: [
      "Under the Singapore Personal Data Protection Act you may request access to the personal data we hold about you, request correction of inaccurate data, or withdraw consent to further use of your data.",
    ],
  },
  {
    h: "8. Contact us",
    p: [
      `For any question about this policy or about the data we hold, contact A1PlumberSG at ${site.phoneDisplay} or ${site.email}.`,
    ],
  },
];

function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How we handle the personal information you share with A1PlumberSG."
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
