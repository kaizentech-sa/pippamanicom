import { useState, type FormEvent } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";
import peppers from "../assets/images/Pippa-Manicom-peppers.webp";

const INTERESTS = [
  "Private Consultations",
  "Corporate Wellness",
  "Nutrition Talks",
  "Something else",
];

const CONTACT_METHODS = [
  {
    icon: Phone,
    iconClass: "text-pink",
    href: "tel:+27846167000",
    label: "084 616 7000",
    external: false,
  },
  {
    icon: MessageCircle,
    iconClass: "text-green",
    href: "https://wa.me/27846167000",
    label: "WhatsApp",
    external: true,
  },
  {
    icon: Mail,
    iconClass: "text-pink",
    href: "mailto:hello@pippamanicom.co.za",
    label: "Email",
    external: false,
  },
];

const fieldClass =
  "w-full rounded-lg border border-lavender bg-cloud px-4 py-2.5 text-sm text-ink outline-none placeholder:text-body/70 focus:border-pink focus:ring-2 focus:ring-pink/30";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="relative bg-cover bg-center py-20 md:py-24"
      style={{ backgroundImage: `url(${peppers})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/40" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 px-6 md:grid-cols-[1fr_1.1fr] md:gap-16">
        <div className="md:pt-4">
          <h2 className="text-3xl font-semibold text-ink md:text-[40px] md:leading-tight">
            Interested? Get In Touch
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-body">
            Book a dietitian consultation in Constantia, Cape Town, or online —
            no referral needed.
          </p>

          <ul className="mt-8 space-y-3">
            {CONTACT_METHODS.map(({ icon: Icon, iconClass, href, label, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="flex items-center gap-3 rounded-2xl bg-white px-5 py-3.5 text-sm font-semibold text-ink shadow-sm transition-shadow hover:shadow-md"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cloud">
                    <Icon size={16} className={iconClass} />
                  </span>
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-xs leading-relaxed text-body/80">
            HPCSA registered · No referral needed · Your information stays
            private.
          </p>
        </div>

        <div className="rounded-[32px] bg-white p-7 shadow-[0_18px_60px_rgba(43,47,56,0.12)] md:p-10">
          {sent ? (
            <div className="py-10 text-center text-body">
              Thanks for reaching out — Pippa will be in touch soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="mb-1 block text-sm font-medium text-ink">
                  First Name <span className="text-pink">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="E.g. John"
                  autoComplete="name"
                  className={fieldClass}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-ink">
                    Email Address <span className="text-pink">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="E.g. john@doe.com"
                    autoComplete="email"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-ink">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="E.g. +27 82 428 4374"
                    className={fieldClass}
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-ink">
                  I want to know more about...
                </label>
                <select className={fieldClass}>
                  <option value="">Select an option</option>
                  {INTERESTS.map((i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-ink">
                  Message
                </label>
                <textarea
                  maxLength={180}
                  rows={4}
                  placeholder="Enter your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`resize-none ${fieldClass}`}
                />
                <div className="mt-1 text-right text-xs text-body/70">
                  {message.length} / 180
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-pink py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-pink-dark"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
