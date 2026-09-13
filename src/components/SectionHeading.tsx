export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="text-xs font-bold tracking-[0.18em] text-muted-foreground uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl md:text-4xl">{title}</h2>
      {description && (
        <p className="mt-3 leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
