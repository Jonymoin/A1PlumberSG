import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-secondary text-secondary-foreground">
      <div className="container-page py-16 md:py-20">
        {eyebrow && (
          <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 max-w-3xl text-3xl font-extrabold sm:text-4xl md:text-5xl">{title}</h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-secondary-foreground/75">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
