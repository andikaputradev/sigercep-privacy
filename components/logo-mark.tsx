export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x="1"
        y="1"
        width="30"
        height="30"
        rx="7"
        fill="var(--color-primary)"
      />
      <path
        d="M16 7.5C12.5 7.5 10 10.1 10 13.4C10 17.6 16 24.5 16 24.5C16 24.5 22 17.6 22 13.4C22 10.1 19.5 7.5 16 7.5Z"
        stroke="var(--color-primary-foreground)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="13.4" r="2.4" fill="var(--color-primary-foreground)" />
    </svg>
  );
}
