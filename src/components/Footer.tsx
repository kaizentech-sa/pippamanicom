import { Mail, Phone, MapPin } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "./SocialIcons";
import logo from "../assets/images/Pippa_Manicom_logo.png";

const SOCIALS = [
  {
    icon: FacebookIcon,
    href: "https://www.facebook.com/pippa.manicom/",
    label: "Facebook",
    color: "#557dbc",
  },
  {
    icon: InstagramIcon,
    href: "https://www.instagram.com/pippa_dietitian/",
    label: "Instagram",
    color: "#8a3ab9",
  },
  {
    icon: LinkedinIcon,
    href: "https://za.linkedin.com/in/pippa-manicom-a64b5b331",
    label: "Linkedin",
    color: "#1c86c6",
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <img src={logo} alt="Pippa Manicom Logo" className="mb-4 h-16 w-auto" />
          <div className="flex gap-3">
            {SOCIALS.map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full transition-opacity hover:opacity-80"
                style={{ backgroundColor: color }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/60">
            More Information
          </h2>
          <ul className="text-sm">
            <li>
              <a href="/privacy-policy" className="hover:text-pink">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/60">
            Contact
          </h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-pink" />
              <a href="mailto:hello@pippamanicom.co.za" className="hover:text-pink">
                hello@pippamanicom.co.za
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-pink" />
              084 616 7000
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-pink" />
              Willow Road, Constantia
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        Copyright © {new Date().getFullYear()} Pippa Manicom Registered
        Dietician
      </div>
    </footer>
  );
}
