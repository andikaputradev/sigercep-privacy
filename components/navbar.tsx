import Link from "next/link";
import { LogoMark } from "@/components/logo-mark";
import { appConfig, routes } from "@/lib/config";

const navLinks = [
  { href: routes.privacyPolicy, label: "Kebijakan Privasi" },
  { href: routes.deleteAccount, label: "Penghapusan Akun" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-5">
        <Link
          href={routes.privacyPolicy}
          className="flex items-center gap-2.5"
        >
          <LogoMark className="h-8 w-8 shrink-0" />
          <span className="text-[15px] font-semibold tracking-tight text-foreground">
            {appConfig.appName}
          </span>
        </Link>

        <nav aria-label="Navigasi utama" className="hidden items-center gap-6 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={appConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Kontak
          </a>
        </nav>

        <details className="relative sm:hidden">
          <summary
            aria-label="Buka menu navigasi"
            className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-md border border-border text-foreground [&::-webkit-details-marker]:hidden"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 4.5H16M2 9H16M2 13.5H16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </summary>
          <nav
            aria-label="Navigasi mobile"
            className="absolute right-0 top-11 flex w-52 flex-col gap-1 rounded-lg border border-border bg-card p-2 shadow-sm"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={appConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
            >
              Kontak
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
