import { useState } from "react";
import ServiceModal from "./ServiceModal";
import grapefruit from "../assets/images/pippa-manicom-grapefruit-private-consultations.webp";
import produce from "../assets/images/pippa-manicom-fresh-produce-corporate-wellness.webp";
import raspberries from "../assets/images/pippa-manicom-raspberries-nutrition-talks.webp";
import avocado from "../assets/images/pippa-manicom-avocado-consultation-rates.webp";
import greenApples from "../assets/images/pippa-manicom-green-apples-corporate-wellness.webp";

type Service = {
  image: string;
  alt: string;
  title: string;
  desc: string;
  modal?: "private" | "corporate";
  detailsLabel?: string;
  detailsClass?: string;
  cta: string;
  ctaClass: string;
};

const SERVICES: Service[] = [
  {
    image: grapefruit,
    alt: "Grapefruit and citrus slices with rosemary - private dietitian consultations in Constantia, Cape Town",
    title: "Private Consultations",
    desc: "My personalised approach takes into account your unique lifestyle, preferences, and challenges, ensuring that we create a path to wellness that works for you, can be done in person or online.",
    modal: "private",
    detailsLabel: "Details & Rates",
    detailsClass: "text-green",
    cta: "Book a Consultation",
    ctaClass: "bg-pink text-white hover:bg-pink-dark",
  },
  {
    image: produce,
    alt: "Kale, carrot, cucumber, beetroot, apple and citrus laid out on white - corporate wellness nutrition programmes in Cape Town",
    title: "Corporate Wellness",
    desc: "With over 20 years of experience in working with corporates, I understand the challenges of keeping a work-life balance. I can help increase productivity in a healthier, happier working environment.",
    modal: "corporate",
    detailsLabel: "Details",
    detailsClass: "text-pink",
    cta: "Book a Wellness Session",
    ctaClass: "bg-green text-white hover:bg-green-bright",
  },
  {
    image: raspberries,
    alt: "Fresh raspberries with scattered mint leaves - nutrition talks and presentations for Cape Town schools and businesses",
    title: "Nutrition Talks",
    desc: "Talks and presentations are available for all age groups - from primary and high school students to university students and older adults - on topics related to healthy, balanced eating.",
    cta: "Book a Talk",
    ctaClass: "bg-pink text-white hover:bg-pink-dark",
  },
];

export default function Services() {
  const [modal, setModal] = useState<"private" | "corporate" | null>(null);

  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="grid grid-cols-1 gap-6 border-b border-lavender pb-10 md:grid-cols-[1fr_1fr] md:items-end md:gap-16">
        <h2 className="text-3xl font-semibold text-ink md:text-[40px] md:leading-tight">
          Dietitian Services in Cape Town
        </h2>
        <p className="text-sm leading-relaxed text-body md:pb-2">
          Private consultations, corporate wellness programmes and nutrition
          talks — available in Constantia, across Cape Town, or online.
        </p>
      </div>

      <div className="mt-12 space-y-8">
        <article className="group grid grid-cols-1 overflow-hidden rounded-[28px] bg-cloud md:grid-cols-[1.1fr_1fr]">
          <div className="overflow-hidden">
            <img
              src={SERVICES[0].image}
              alt={SERVICES[0].alt}
              width={700}
              height={544}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 md:min-h-[340px]"
            />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12">
            <span className="mb-3 text-xs font-semibold tracking-[0.18em] text-pink">
              MOST BOOKED
            </span>
            <h3 className="mb-4 text-2xl font-semibold text-ink md:text-[28px]">
              {SERVICES[0].title}
            </h3>
            <p className="mb-7 max-w-md text-sm leading-relaxed text-body">
              {SERVICES[0].desc}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className={`rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-wide transition-colors ${SERVICES[0].ctaClass}`}
              >
                {SERVICES[0].cta}
              </a>
              <button
                type="button"
                onClick={() => setModal("private")}
                className={`px-2 py-2.5 text-xs font-semibold uppercase tracking-wide underline underline-offset-4 ${SERVICES[0].detailsClass}`}
              >
                {SERVICES[0].detailsLabel}
              </button>
            </div>
          </div>
        </article>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {SERVICES.slice(1).map((service) => (
            <article
              key={service.title}
              className="group flex flex-col overflow-hidden rounded-[28px] bg-cloud transition-shadow duration-300 hover:shadow-[0_18px_50px_rgba(43,47,56,0.10)]"
            >
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  width={700}
                  height={544}
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-8">
                <h3 className="mb-3 text-xl font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mb-7 flex-1 text-sm leading-relaxed text-body">
                  {service.desc}
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="#contact"
                    className={`rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wide transition-colors ${service.ctaClass}`}
                  >
                    {service.cta}
                  </a>
                  {service.modal && (
                    <button
                      type="button"
                      onClick={() => setModal(service.modal!)}
                      className={`px-2 py-2.5 text-xs font-semibold uppercase tracking-wide underline underline-offset-4 ${service.detailsClass}`}
                    >
                      {service.detailsLabel}
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ServiceModal
        open={modal === "private"}
        onClose={() => setModal(null)}
        title="What I Offer:"
        image={avocado}
      >
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <strong>Initial Consultation (60 mins, R750):</strong> We will
            discuss medical history, symptoms, recent blood test results,
            current eating habits, lifestyle, activity levels, supplements,
            anthropometry (height, weight, and body fat %); we will set goals
            and discuss the best way forward.
          </li>
          <li>
            <strong>Second Consultation (60-90 mins, R880):</strong> Eating
            plan &amp; booklet will be given along with nutrition education
            (healthy eating guidelines, portion control, etc.).
          </li>
          <li>
            <strong>Follow-up Consultation (30 mins, R400):</strong> Check in
            to see how the eating plan is going, monitor weight and body fat
            %, and how you are managing with the eating plan; discuss any
            questions.
          </li>
          <li>
            <strong>Vitality nutrition assessment (45 mins, R520):</strong>{" "}
            We will do a quick assessment of your current diet and identify a
            few key points to work on or improve. Earn 1000 vitality points.
            This does not include an individualised meal plan.
          </li>
        </ul>
      </ServiceModal>

      <ServiceModal
        open={modal === "corporate"}
        onClose={() => setModal(null)}
        title="What I Offer:"
        image={greenApples}
      >
        <ul className="list-disc space-y-2 pl-5">
          <li>One-on-one consultations in the office environment</li>
          <li>Onsite Vitality nutrition assessments</li>
          <li>Wellness Days</li>
          <li>Smoothie Demonstrations</li>
          <li>Healthy Lunch / Snack Demonstrations</li>
          <li>Talks / Presentations to Staff</li>
        </ul>
      </ServiceModal>
    </section>
  );
}
