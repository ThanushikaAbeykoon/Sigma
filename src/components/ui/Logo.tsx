import Link from "next/link";

export default function Logo({
  className = "",
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  const nameColor = variant === "dark" ? "text-white" : "text-primary-900";
  const subColor = variant === "dark" ? "text-neutral-400" : "text-neutral-500";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="Sigma Business Finance — home"
    >
      <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-700 to-secondary-500 text-lg font-bold text-white shadow-sm shadow-primary-700/30">
        Σ
      </span>
      <span className="flex flex-col leading-none">
        <span className={`text-lg font-bold tracking-tight ${nameColor}`}>
          Sigma
        </span>
        <span className={`text-[11px] font-semibold uppercase tracking-wider ${subColor}`}>
          Business Finance
        </span>
      </span>
    </Link>
  );
}
