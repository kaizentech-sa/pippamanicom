import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/Pippa_Manicom_logo.png";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#conditions", label: "Conditions" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#" className="shrink-0">
          <img src={logo} alt="Pippa Manicom Logo" className="h-14 w-auto" />
        </a>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium text-ink">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-pink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

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
        <nav className="border-t border-lavender md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4 text-sm font-medium text-ink">
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
          </ul>
        </nav>
      )}
    </header>
  );
}
