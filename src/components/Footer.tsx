import { FacebookIcon, InstagramIcon, LinkedinIcon } from "./SocialIcons";
import logo from "../assets/images/Pippa_Manicom_logo.png";

const SOCIALS = [
  {
    icon: FacebookIcon,
    href: "https://www.facebook.com/pippa.manicom/",
    label: "Facebook",
  },
  {
    icon: InstagramIcon,
    href: "https://www.instagram.com/pippa_dietitian/",
    label: "Instagram",
  },
  {
    icon: LinkedinIcon,
    href: "https://za.linkedin.com/in/pippa-manicom-a64b5b331",
    label: "Linkedin",
  },
];

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <img
            src={logo}
            alt="Pippa Manicom Registered Dietitian - Constantia, Cape Town"
            width={500}
            height={288}
            loading="lazy"
            className="h-40 w-auto"
          />
        </div>

        <div>
          <div className="mb-6 flex gap-3">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate transition-opacity hover:opacity-80"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
          <h3 className="mb-3 text-lg font-semibold text-ink">
            More Information
          </h3>
          <a href="/privacy-policy" className="text-sm text-slate hover:text-pink">
            Privacy Policy
          </a>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-semibold text-ink">Contact</h3>
          <address className="space-y-2 text-sm not-italic text-slate">
            <p>
              <span className="font-semibold text-ink">Email: </span>
              <a href="mailto:hello@pippamanicom.co.za" className="hover:text-pink">
                hello@pippamanicom.co.za
              </a>
            </p>
            <p>
              <span className="font-semibold text-ink">Cell: </span>
              <a href="tel:+27846167000" className="hover:text-pink">
                084 616 7000
              </a>
            </p>
            <p>
              <span className="font-semibold text-ink">Address: </span>
              Willow Road, Constantia, Cape Town
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-lavender">
        <div className="mx-auto max-w-6xl px-6 py-6 text-center text-xs text-slate md:text-left">
          <p>
            <span className="font-semibold text-ink">Serving: </span>
            Constantia, Tokai, Bishopscourt, Meadowridge, Wynberg, Claremont,
            Kenilworth, Newlands, Rondebosch, Plumstead, Bergvliet,
            Kirstenbosch, Muizenberg, Hout Bay &amp; the greater Cape Town
            Southern Suburbs — online consultations available nationwide.
          </p>
        </div>
      </div>

      <div className="border-t border-lavender">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-5 text-center text-xs text-slate md:flex-row md:text-left">
          <p>
            Copyright © {new Date().getFullYear()} Pippa Manicom Registered
            Dietician
          </p>
          <p>
            Made with <span className="text-pink">❤</span> by{" "}
            <a
              href="https://www.kaizentech.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink hover:text-pink"
            >
              Kaizen Technology
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
