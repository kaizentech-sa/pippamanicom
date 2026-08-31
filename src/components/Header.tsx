import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { img } from "../assets/imagery";

const logo = img("logo.header");

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#conditions", label: "Conditions" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Experience" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-3 md:px-8">
        <a href="#top" className="shrink-0" aria-label="Pippa Manicom — home">
          <img
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className="h-14 w-auto md:h-16"
          />
        </a>

        <nav className="hidden lg:block" aria-label="Primary">
          <ul className="flex items-center gap-8 text-[0.95rem] font-medium text-ink">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="border-b-2 border-transparent pb-1 transition-colors hover:border-honey hover:text-honey"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+27846167000"
            className="hidden items-center gap-2 rounded-full border border-ink/25 px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-ink hover:bg-ink hover:text-cream md:flex"
          >
            <Phone size={14} />
            084 616 7000
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="text-ink lg:hidden"
          >
            <Menu size={26} />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-cream lg:hidden">
          <div className="flex items-center justify-between border-b border-line px-5 py-3">
            <img src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className="h-14 w-auto" />
            <button type="button" onClick={() => setOpen(false)} aria-label="Close menu" className="text-ink">
              <X size={26} />
            </button>
          </div>
          <nav aria-label="Primary" className="flex flex-1 flex-col gap-1 px-6 py-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-4 font-display text-2xl text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+27846167000"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center gap-2 self-start rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream"
            >
              <Phone size={15} />
              Call 084 616 7000
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
