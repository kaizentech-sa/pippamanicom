import { useState, type FormEvent } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";
import Photo from "./Photo";

const INTERESTS = [
  "Private Consultations",
  "Corporate Wellness",
  "Nutrition Talks",
  "Something else",
];

const CONTACT_METHODS = [
  { icon: Phone, label: "Call", value: "084 616 7000", href: "tel:+27846167000" },
  { icon: MessageCircle, label: "WhatsApp", value: "084 616 7000", href: "https://wa.me/27846167000", external: true },
  { icon: Mail, label: "Email", value: "hello@pippamanicom.co.za", href: "mailto:hello@pippamanicom.co.za" },
];

const fieldClass =
  "w-full rounded-lg border border-line bg-cream px-4 py-2.5 text-sm text-ink outline-none placeholder:text-body/60 focus:border-pink focus:ring-1 focus:ring-pink";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const name = String(d.get("name") ?? "");
    const body = [
      `Name: ${name}`,
      `Email: ${d.get("email") ?? ""}`,
      d.get("phone") ? `Phone: ${d.get("phone")}` : "",
      d.get("interest") ? `Interested in: ${d.get("interest")}` : "",
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");
    window.location.href = `mailto:hello@pippamanicom.co.za?subject=${encodeURIComponent(
      `Website enquiry — ${name || "new client"}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="contact" className="bg-sand">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <div>
            <p className="label">Get started</p>
            <h2 className="mt-3 text-4xl">Book a consultation</h2>
            <p className="mt-4 max-w-sm text-base text-body">
              In Constantia, across Cape Town, or online — no referral needed.
            </p>

            <ul className="mt-8 space-y-4">
              {CONTACT_METHODS.map(({ icon: Icon, label, value, href, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex items-center gap-4 text-ink"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-cream text-pink-dark">
                      <Icon size={17} />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wide text-body">{label}</span>
                      <span className="font-semibold">{value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <Photo
              imageKey="contact.produce"
              sizes="(min-width: 768px) 40vw, 90vw"
              className="mt-10 hidden w-full rounded-[1.5rem] border border-line object-cover md:block"
            />
            <p className="mt-6 text-xs text-body">
              HPCSA registered · No referral needed · Your information stays private.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-line bg-cream p-6 md:p-8">
            {sent ? (
              <p className="text-base text-body">
                Thanks for reaching out — your email app should now be open with
                your message ready to send. Pippa will be in touch soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="c-name" className="mb-1 block text-sm font-medium text-ink">
                    First Name <span className="text-pink-dark">*</span>
                  </label>
                  <input id="c-name" name="name" type="text" required autoComplete="given-name" placeholder="E.g. John" className={fieldClass} />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="c-email" className="mb-1 block text-sm font-medium text-ink">
                      Email Address <span className="text-pink-dark">*</span>
                    </label>
                    <input id="c-email" name="email" type="email" required autoComplete="email" placeholder="E.g. john@doe.com" className={fieldClass} />
                  </div>
                  <div>
                    <label htmlFor="c-phone" className="mb-1 block text-sm font-medium text-ink">
                      Phone Number
                    </label>
                    <input id="c-phone" name="phone" type="tel" autoComplete="tel" placeholder="E.g. +27 82 428 4374" className={fieldClass} />
                  </div>
                </div>
                <div>
                  <label htmlFor="c-interest" className="mb-1 block text-sm font-medium text-ink">
                    I want to know more about...
                  </label>
                  <select id="c-interest" name="interest" defaultValue="" className={fieldClass}>
                    <option value="">Select an option</option>
                    {INTERESTS.map((i) => (
                      <option key={i} value={i}>{i}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="c-message" className="mb-1 block text-sm font-medium text-ink">
                    Message
                  </label>
                  <textarea
                    id="c-message"
                    name="message"
                    maxLength={180}
                    rows={4}
                    placeholder="Enter your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`resize-none ${fieldClass}`}
                  />
                  <div className="mt-1 text-right text-xs text-body">{message.length} / 180</div>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-pink-dark py-3 text-sm font-semibold text-white transition-all hover:brightness-110"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
