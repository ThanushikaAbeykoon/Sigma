const avatars = [
  { initials: "AK", className: "bg-secondary-400" },
  { initials: "JM", className: "bg-primary-400" },
  { initials: "RS", className: "bg-secondary-300" },
  { initials: "TL", className: "bg-primary-300" },
];

export default function AboutDropdownVisual() {
  return (
    <div className="relative hidden w-64 shrink-0 flex-col justify-between gap-6 overflow-hidden bg-gradient-to-br from-primary-800 via-primary-700 to-secondary-600 p-6 text-white lg:flex">
      <div
        className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-2xl"
        aria-hidden
      />
      <div className="relative">
        <p className="text-xs font-semibold uppercase tracking-wide text-white/80">
          Life at Sigma
        </p>
        <p className="mt-2 text-lg font-bold leading-snug">
          A team built to get you funded faster
        </p>
      </div>

      <div className="relative flex flex-col gap-3">
        <div className="flex -space-x-3">
          {avatars.map((avatar) => (
            <span
              key={avatar.initials}
              className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-primary-700 text-xs font-bold text-primary-950 ${avatar.className}`}
            >
              {avatar.initials}
            </span>
          ))}
        </div>
        <p className="text-xs leading-relaxed text-white/70">
          Real people, real expertise — no call centres, no scripts.
        </p>
      </div>
    </div>
  );
}
