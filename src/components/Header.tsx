import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "../assets/images/Pippa_Manicom_logo.png";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#conditions", label: "Conditions" },
  { href: "#work", label: "Experience" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-white/95 shadow-[0_1px_20px_rgba(43,47,56,0.07)] backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <a href="#" className="shrink-0">
          <img
            src={logo}
            alt="Pippa Manicom - Registered Dietitian in Constantia, Cape Town"
            width={500}
            height={288}
            className={`w-auto transition-all duration-300 ${
              scrolled ? "h-14 md:h-16" : "h-20 md:h-24"
            }`}
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <nav>
            <ul className="flex items-center gap-6 text-sm font-medium tracking-wide text-ink">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="relative py-1 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-pink after:transition-transform hover:text-pink hover:after:scale-x-100"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="tel:+27846167000"
            className="hidden shrink-0 items-center gap-2 rounded-full border-2 border-pink px-5 py-2 text-sm font-semibold text-pink transition-colors hover:bg-pink hover:text-white lg:flex"
          >
            <Phone size={15} />
            084 616 7000
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Main menu toggle"
          aria-expanded={open}
          className="rounded-full bg-lavender p-2 text-ink md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-lavender bg-white md:hidden">
          <ul className="flex flex-col divide-y divide-lavender px-6 text-sm font-medium text-ink">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="tel:+27846167000"
                className="flex items-center gap-2 py-3 font-semibold text-pink"
              >
                <Phone size={16} />
                Call 084 616 7000
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
