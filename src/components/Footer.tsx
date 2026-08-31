import { FacebookIcon, InstagramIcon, LinkedinIcon } from "./SocialIcons";
import { img } from "../assets/imagery";

const logo = img("logo.footer");

const SOCIALS = [
  { icon: FacebookIcon, href: "https://www.facebook.com/pippa.manicom/", label: "Facebook" },
  { icon: InstagramIcon, href: "https://www.instagram.com/pippa_dietitian/", label: "Instagram" },
  { icon: LinkedinIcon, href: "https://za.linkedin.com/in/pippa-manicom-a64b5b331", label: "Linkedin" },
];

const NAV = [
  { href: "#services", label: "Services" },
  { href: "#conditions", label: "Conditions" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Experience" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 pb-28 md:px-8 md:pb-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <span className="inline-block rounded-xl bg-cream p-3">
              <img
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                loading="lazy"
                className="h-auto w-40 object-contain"
              />
            </span>
            <p className="mt-5 max-w-xs text-sm text-cream/70">
              Registered dietitian in Constantia, Cape Town, seeing clients in
              person and online.
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/25 transition-colors hover:border-cream"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer">
            <h2 className="label text-cream/60">Explore</h2>
            <ul className="mt-3 space-y-2 text-sm text-cream/85">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-cream">{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="label text-cream/60">Contact</h2>
            <address className="mt-3 space-y-2 text-sm not-italic text-cream/85">
              <p>
                <a href="mailto:hello@pippamanicom.co.za" className="hover:text-cream">
                  hello@pippamanicom.co.za
                </a>
              </p>
              <p>
                <a href="tel:+27846167000" className="hover:text-cream">084 616 7000</a>
              </p>
              <p>Willow Road, Constantia, Cape Town</p>
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/15 pt-6 text-xs text-cream/60">
          <p>
            <span className="text-cream/80">Serving:</span> Constantia, Tokai,
            Bishopscourt, Meadowridge, Wynberg, Claremont, Kenilworth, Newlands,
            Rondebosch, Plumstead, Bergvliet, Kirstenbosch, Muizenberg, Hout Bay
            and the greater Cape Town Southern Suburbs. Online consultations
            available nationwide.
          </p>
          <div className="mt-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <p>
              Copyright © {new Date().getFullYear()} Pippa Manicom Registered Dietician
            </p>
            <p>
              Website designed and hosted by{" "}
              <a
                href="https://www.kaizentech.co.za"
                target="_blank"
                rel="noopener"
                className="text-cream/80 underline decoration-cream/30 underline-offset-2 hover:text-cream"
              >
                Kaizen Technology
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
