import { useState, type FormEvent } from "react";
import peppers from "../assets/images/Pippa-Manicom-peppers.webp";

const INTERESTS = [
  "Private Consultations",
  "Corporate Wellness",
  "Nutrition Talks",
  "Something else",
];

const fieldClass =
  "w-full rounded-lg border-0 bg-black/5 px-4 py-2.5 text-sm text-ink outline-none placeholder:text-body/70 focus:ring-2 focus:ring-pink";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="bg-cover bg-bottom pb-24 pt-20 md:pb-40"
      style={{ backgroundImage: `url(${peppers})` }}
    >
      <div className="mx-auto max-w-xl px-6 text-center">
        <h2 className="mb-8 text-3xl font-semibold text-ink">
          Interested? Get In Touch
        </h2>

        {sent ? (
          <div className="rounded-2xl bg-white p-8 text-body shadow-lg">
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
                className={`resize-none ${fieldClass}`}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-pink py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
