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
        className="relative flex min-h-[70vh] items-center overflow-hidden rounded-b-[56px] bg-cover bg-[position:center_right] pt-20 md:min-h-[88vh] md:rounded-b-[80px]"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-lavender via-lavender/60 to-transparent" />

        <div className="relative mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
          <div className="max-w-4xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-pink">
              Registered Dietitian in Constantia, Cape Town
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-ink md:text-[52px]">
              Your journey to healthy living starts here
            </h1>
            <a
              href="#contact"
              className="mt-6 inline-block rounded-full bg-pink px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-transform hover:scale-105"
            >
              Book a Consultation
            </a>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {TRUST_BADGES.map((badge) => (
                <li
                  key={badge}
                  className="flex items-center gap-1.5 text-sm font-medium text-ink"
                >
                  <BadgeCheck size={16} className="text-green" />
                  {badge}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-12 sm:grid-cols-3 md:py-16">
        {FEATURES.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex items-start gap-4">
            <span className="flex shrink-0 items-center justify-center rounded-full bg-cloud p-3.5 text-green">
              <Icon size={24} />
            </span>
            <div>
              <h3 className="mb-1 font-semibold text-ink">{title}</h3>
              <p className="text-sm text-body">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
