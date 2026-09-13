import { Phone } from "lucide-react";
import { site } from "@/lib/site";

export function FloatingCta() {
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3 sm:right-6 sm:bottom-6">
      {/* WhatsApp */}
      <a
        href={site.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with A1PlumberSG on WhatsApp"
        className="flex size-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow-lift)] transition-transform duration-300 hover:scale-105"
      >
        <svg
          viewBox="0 0 24 24"
          className="size-7"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.48 0 .13 5.35.13 11.93c0 2.1.55 4.15 1.6 5.96L.03 24l6.25-1.64a11.93 11.93 0 0 0 5.76 1.47h.01c6.57 0 11.92-5.35 11.92-11.93 0-3.18-1.24-6.17-3.45-8.42ZM12.05 21.85h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.71.97.99-3.62-.23-.37a9.88 9.88 0 0 1-1.52-5.31c0-5.48 4.46-9.94 9.95-9.94 2.65 0 5.14 1.03 7.01 2.91a9.9 9.9 0 0 1 2.91 7.03c0 5.48-4.46 9.94-9.94 9.94Zm5.45-7.45c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
        </svg>
      </a>

      {/* Phone */}
      <a
        href={site.phoneLink}
        aria-label={`Call A1PlumberSG at ${site.phoneDisplay}`}
        className="flex size-13 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-lime)] transition-transform duration-300 hover:scale-105"
      >
        <Phone className="size-6" aria-hidden="true" />
      </a>
    </div>
  );
}