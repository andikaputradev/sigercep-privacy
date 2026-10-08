import Link from "next/link";
import { appConfig, routes } from "@/lib/config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-4xl px-5 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-foreground">
              {appConfig.appName}
            </p>
            <p className="mt-1 max-w-sm text-sm text-muted-foreground">
              {appConfig.shortDescription}
            </p>
          </div>

          <div className="flex flex-col gap-1.5 text-sm">
            <Link
              href={routes.privacyPolicy}
              className="text-muted-foreground hover:text-foreground"
            >
              Kebijakan Privasi
            </Link>
            <Link
              href={routes.deleteAccount}
              className="text-muted-foreground hover:text-foreground"
            >
              Penghapusan Akun
            </Link>
            <a
              href={appConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              Kontak: {appConfig.phoneDisplay}
            </a>
          </div>
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          {year} {appConfig.appName}. Seluruh konten pada halaman ini disusun
          untuk keperluan kepatuhan privasi aplikasi.
        </p>
      </div>
    </footer>
  );
}
