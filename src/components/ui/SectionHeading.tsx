type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className = "",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  const eyebrowClasses =
    tone === "dark"
      ? "bg-white/10 text-white"
      : "bg-primary-50 text-primary-700";
  const titleClasses = tone === "dark" ? "text-white" : "text-neutral-900";
  const descriptionClasses =
    tone === "dark" ? "text-primary-200" : "text-neutral-600";

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignment} ${className}`}>
      {eyebrow ? (
        <span
          className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-wide ${eyebrowClasses}`}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${titleClasses}`}>
        {title}
      </h2>
      {description ? (
        <p className={`text-base leading-relaxed sm:text-lg ${descriptionClasses}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
