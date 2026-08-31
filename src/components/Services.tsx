import { useState } from "react";
import { ArrowRight } from "lucide-react";
import ServiceModal from "./ServiceModal";
import Photo from "./Photo";
import type { ImageKey } from "../assets/imagery";

type ModalKey = "private" | "corporate";

interface Service {
  image: ImageKey;
  title: string;
  body: string;
  modal?: ModalKey;
  detail?: string;
  book: string;
}

const SERVICES: Service[] = [
  {
    image: "services.private",
    title: "Private Consultations",
    body: "We start with your life as it actually is — your routine, your budget, the things that get in the way — and build an eating plan that works around them. In person in Constantia, or online.",
    modal: "private",
    detail: "Details & Rates",
    book: "Book a Consultation",
  },
  {
    image: "services.corporate",
    title: "Corporate Wellness",
    body: "More than 20 years working with companies has shown me what helps people eat well around a demanding job. Practical sessions that support a healthier, more productive team.",
    modal: "corporate",
    detail: "Details",
    book: "Book a Wellness Session",
  },
  {
    image: "services.talks",
    title: "Nutrition Talks",
    body: "Friendly, practical talks on balanced eating for every age group — from primary and high school learners to university students, staff groups and older adults.",
    book: "Book a Talk",
  },
];

export default function Services() {
  const [modal, setModal] = useState<ModalKey | null>(null);

  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <header className="max-w-2xl">
        <p className="label">What I do</p>
        <h2 className="mt-3 text-4xl">Dietitian services in Cape Town</h2>
        <p className="mt-4 text-base text-body">
          Private consultations, corporate wellness programmes and nutrition
          talks — available in Constantia, across Cape Town, or online.
        </p>
      </header>

      <div className="mt-14 space-y-14 md:space-y-16">
        {SERVICES.map((s, i) => (
          <article
            key={s.title}
            className="grid items-center gap-8 md:grid-cols-[1fr_1fr] md:gap-14"
          >
            <div className={`overflow-hidden rounded-[1.75rem] border border-line bg-sage ${i % 2 ? "md:order-2" : ""}`}>
              <Photo
                imageKey={s.image}
                sizes="(min-width: 768px) 45vw, 90vw"
                className="aspect-[5/4] w-full object-cover"
              />
            </div>
            <div>
              <p className="label">0{i + 1}</p>
              <h3 className="mt-2 text-3xl">{s.title}</h3>
              <p className="mt-4 max-w-md text-base text-body">{s.body}</p>
              <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-semibold">
                {s.modal && (
                  <button
                    type="button"
                    onClick={() => setModal(s.modal!)}
                    className="text-ink underline decoration-honey underline-offset-4 hover:text-pink-dark"
                  >
                    {s.detail}
                  </button>
                )}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-pink-dark hover:text-pink"
                >
                  {s.book}
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <ServiceModal
        open={modal === "private"}
        onClose={() => setModal(null)}
        title="What I Offer:"
        image="modal.private"
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
        image="modal.corporate"
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
