import { Stethoscope, Flower2, Apple } from "lucide-react";
import heroBg from "../assets/images/Pippa-Manicom.webp";

const FEATURES = [
  { icon: Stethoscope, title: "Health", desc: "Physical and mental" },
  { icon: Flower2, title: "Wellness", desc: "Inside and out" },
  { icon: Apple, title: "Food", desc: "Optimal nutrition" },
];

export default function Hero() {
  return (
    <>
      <section
        className="relative flex min-h-[60vh] items-center overflow-hidden rounded-b-[56px] bg-cover bg-[position:center_right] pt-20 md:min-h-[70vh] md:rounded-b-[80px]"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-lavender via-lavender/60 to-transparent" />

        <div className="relative mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
          <div className="max-w-xl">
            <h1 className="text-4xl font-semibold leading-tight text-ink md:text-[50px]">
              Your journey to healthy living starts here
            </h1>
            <a
              href="#contact"
              className="mt-6 inline-block rounded-full bg-pink px-8 py-3 text-sm font-semibold tracking-wide text-white transition-transform hover:scale-105"
            >
              Book a Consultation
            </a>
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
