import { Stethoscope, Flower2, Apple, BadgeCheck } from "lucide-react";
import heroBg from "../assets/images/Pippa-Manicom.webp";

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
        className="relative flex min-h-[78vh] items-center overflow-hidden rounded-b-[56px] bg-cover bg-[position:center_right] pt-24 md:min-h-[92vh] md:rounded-b-[80px]"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-lavender via-lavender/80 to-lavender/10" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-lavender to-transparent" />

        <div className="relative mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
          <div className="max-w-xl">
            <p className="mb-4 inline-flex rounded-full bg-white/75 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-pink md:text-xs md:tracking-[0.14em]">
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
        </div>
      </section>

      <div className="relative z-10 mx-auto mt-10 max-w-5xl px-6 md:-mt-12">
        <div className="grid grid-cols-1 gap-4 rounded-[32px] bg-white p-6 shadow-[0_16px_50px_rgba(43,47,56,0.09)] sm:grid-cols-3 md:gap-2 md:p-8">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex items-center gap-4 px-2 md:px-6"
            >
              <span className="flex shrink-0 items-center justify-center rounded-2xl bg-cloud p-3.5 text-green">
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
