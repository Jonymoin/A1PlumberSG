import { CtaButtons } from "./CtaButtons";
import { site } from "@/lib/site";

export function CtaBand({
  title = "Need a plumber today?",
  text = "Tell us what is happening and we will give you a straight answer on timing and cost.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="section-y">
      <div className="container-page">
        <div className="rounded-3xl bg-secondary px-6 py-12 text-secondary-foreground md:px-12 md:py-14">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl">
              <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
              <p className="mt-3 text-secondary-foreground/75">{text}</p>
              <p className="mt-4 font-display text-xl font-bold text-primary">
                {site.phoneDisplay}
              </p>
            </div>
            <CtaButtons />
          </div>
        </div>
      </div>
    </section>
  );
}
