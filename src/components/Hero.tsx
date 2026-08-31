import { Salad, HeartPulse, Sprout } from "lucide-react";
import Photo from "./Photo";

const PILLARS = [
  { icon: HeartPulse, title: "Health", desc: "Physical and mental" },
  { icon: Sprout, title: "Wellness", desc: "Sustainable habits" },
  { icon: Salad, title: "Food", desc: "Balanced, everyday meals" },
];

const BADGES = ["HPCSA registered", "20+ years' experience", "UCT qualified"];

export default function Hero() {
  return (
    <>
      <section id="top" className="scroll-mt-24" aria-label="Pippa Manicom, registered dietitian in Constantia, Cape Town">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-14 pt-24 md:px-8 md:pb-20 md:pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="eyebrow">Registered dietitian · Constantia, Cape Town</p>
            <h1 className="mt-4 text-[2.5rem] leading-[1.06] sm:max-w-[15ch] sm:text-5xl lg:text-[3.35rem]">
              Nutrition care that fits your real life
            </h1>
            <p className="mt-5 max-w-md text-base text-body">
              One-on-one, evidence-based care from a registered dietitian in
              Constantia. Weight, medical conditions, everyday eating. In person
              or online, anywhere in South Africa.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="rounded-full bg-pink-dark px-7 py-3 text-sm font-semibold text-white transition-all hover:brightness-110"
              >
                Book a consultation
              </a>
              <a
                href="tel:+27846167000"
                className="rounded-full border border-ink/30 px-7 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-cream"
              >
                Call 084 616 7000
              </a>
            </div>

            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-5 text-sm text-body">
              {BADGES.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-honey" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* photo collage */}
          <div className="relative mx-auto mt-4 w-full max-w-sm sm:max-w-md lg:mt-0 lg:max-w-none">
            <div className="absolute -right-5 -top-6 h-40 w-40 rounded-full bg-honey/25 sm:h-52 sm:w-52" />
            <div className="relative overflow-hidden rounded-[2rem] border border-line bg-sage">
              <Photo
                imageKey="pippa.portrait"
                priority
                sizes="(min-width: 1024px) 42vw, 90vw"
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-7 -left-5 w-40 overflow-hidden rounded-2xl border-4 border-cream shadow-xl sm:-left-9 sm:w-56">
              <Photo
                imageKey="hero.produce"
                sizes="224px"
                className="aspect-[5/4] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* pillars band */}
      <div className="bg-ink text-cream">
        <div className="sprigs">
          <ul className="mx-auto grid max-w-6xl gap-px px-5 md:grid-cols-3 md:px-8">
            {PILLARS.map(({ icon: Icon, title, desc }) => (
              <li key={title} className="flex items-center gap-4 py-6 md:justify-center md:border-l md:border-cream/15 md:first:border-l-0">
                <Icon size={26} className="shrink-0 text-honey" />
                <div>
                  <p className="font-display text-lg text-cream">{title}</p>
                  <p className="text-sm text-cream/70">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
