import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { photos } from "../assets/imagery";

const logo = photos.logoHeader;

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

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-transparent">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#" className="shrink-0">
          <img
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className="h-24 w-auto md:h-28"
          />
        </a>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-7 text-base font-medium text-pink">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-pink-dark">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="tel:+27846167000"
          className="hidden shrink-0 items-center gap-2 rounded-full bg-pink px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105 lg:flex"
        >
          <Phone size={15} />
          084 616 7000
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Main menu toggle"
          aria-expanded={open}
          className="text-ink md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-lavender bg-white md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4 text-sm font-medium text-pink">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="tel:+27846167000"
                className="flex items-center gap-2 py-2 font-semibold text-ink"
              >
                <Phone size={16} className="text-pink" />
                Call 084 616 7000
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
