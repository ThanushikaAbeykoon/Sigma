type IconProps = { className?: string };

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.9.25-1.5 1.5-1.5H16.5V4.3C16.2 4.26 15.2 4.17 14 4.17c-2.5 0-4.2 1.53-4.2 4.34V10.5H7.3v3H9.8V21h3.7Z" />
    </svg>
  );
}

export function LinkedinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M6.94 8.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM5.19 20V10.2h3.5V20h-3.5Zm5.9 0V10.2h3.35v1.34h.05c.47-.87 1.6-1.79 3.3-1.79 3.53 0 4.18 2.32 4.18 5.34V20h-3.5v-4.4c0-1.05-.02-2.4-1.47-2.4-1.47 0-1.7 1.15-1.7 2.33V20h-3.21Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className} aria-hidden>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17.1" cy="6.9" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}
