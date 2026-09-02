import { Stethoscope, Flower2, Apple, BadgeCheck } from "lucide-react";
import heroImage from "../assets/images/Pippa-Manicom.webp";

const FEATURES = [
  { icon: Stethoscope, title: "Health", desc: "Physical and mental" },
  { icon: Flower2, title: "Wellness", desc: "Inside and out" },
  { icon: Apple, title: "Food", desc: "Optimal nutrition" },
];

const TRUST_BADGES = [
  "HPCSA Registered Dietitian",
  "20+ Years Experience",
  "UCT Qualified",
];

export default function Hero() {
  return (
    <>
      <section
        aria-label="Pippa Manicom, registered dietitian in Constantia, Cape Town"
        className="relative overflow-hidden rounded-b-[56px] bg-gradient-to-b from-lavender via-lavender/70 to-white pb-24 pt-28 md:rounded-b-[80px] md:pb-32 md:pt-32"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-periwinkle/30 blur-3xl"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-green/10 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-[1.05fr_1fr] md:gap-14">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-pink">
              Registered Dietitian in Constantia, Cape Town
            </p>
            <h1 className="text-4xl font-semibold leading-[1.08] text-ink md:text-[56px]">
              Your journey to healthy living starts here
            </h1>

            <ul className="mt-8 space-y-3">
              {TRUST_BADGES.map((badge) => (
                <li
                  key={badge}
                  className="flex items-center gap-2.5 text-sm font-medium text-ink"
                >
                  <BadgeCheck size={18} className="shrink-0 text-green" />
                  {badge}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-9 inline-block rounded-full bg-pink px-9 py-3.5 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-pink/25 transition-colors hover:bg-pink-dark"
            >
              Book a Consultation
            </a>
          </div>

          <div className="relative">
            <span
              aria-hidden="true"
              className="absolute -bottom-5 -left-5 hidden h-full w-full rounded-[48px] border-2 border-pink/25 md:block"
            />
            <img
              src={heroImage}
              alt="Pippa Manicom, registered dietitian in Constantia, Cape Town"
              width={1200}
              height={800}
              fetchPriority="high"
              className="relative aspect-[4/3] w-full rounded-[48px] object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      <div className="mx-auto -mt-14 max-w-5xl px-6 md:-mt-16">
        <div className="grid grid-cols-1 gap-4 rounded-[32px] bg-white p-6 shadow-[0_16px_50px_rgba(43,47,56,0.09)] sm:grid-cols-3 md:gap-2 md:p-8">
          {FEATURES.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`flex items-center gap-4 px-2 sm:flex-col sm:text-center md:px-6 ${
                i > 0 ? "sm:border-l sm:border-lavender" : ""
              }`}
            >
              <span className="flex shrink-0 items-center justify-center rounded-2xl bg-cloud p-3.5 text-green sm:mb-1">
                <Icon size={24} />
              </span>
              <div>
                <h3 className="mb-0.5 font-semibold text-ink">{title}</h3>
                <p className="text-sm text-body">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
