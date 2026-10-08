import { appConfig } from "@/lib/config";

export function WhatsAppButton() {
  return (
    <a
      href={appConfig.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Hubungi tim pengelola ${appConfig.appName} melalui WhatsApp di nomor ${appConfig.phoneDisplay}`}
      className="inline-flex items-center gap-2.5 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 2C6.48 2 2 6.34 2 11.7c0 1.87.55 3.62 1.5 5.11L2 22l5.4-1.42a10.2 10.2 0 0 0 4.6 1.1c5.52 0 10-4.34 10-9.98C22 6.34 17.52 2 12 2Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 10.2c.6 2.6 2.7 4.6 5.3 5.2.9.2 1.6-.5 2-1.2.1-.3 0-.6-.3-.8l-1.6-1c-.3-.2-.6-.1-.8.1l-.4.5a5 5 0 0 1-2.4-2.4l.5-.4c.2-.2.3-.5.1-.8l-1-1.6c-.2-.3-.5-.4-.8-.3-.7.4-1.4 1.1-1.2 2Z"
          fill="currentColor"
        />
      </svg>
      Hubungi via WhatsApp
    </a>
  );
}
