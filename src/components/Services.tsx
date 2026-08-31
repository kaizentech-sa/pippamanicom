import { useState } from "react";
import ServiceModal from "./ServiceModal";
import { artwork } from "../assets/imagery";

const Lemon = artwork["services.private"];
const Citrus = artwork["services.corporate"];
const Avocado = artwork["services.talks"];

export default function Services() {
  const [modal, setModal] = useState<"private" | "corporate" | null>(null);

  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold text-ink">
          Dietitian Services in Cape Town
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-body">
          Private consultations, corporate wellness programmes and nutrition
          talks — available in Constantia, across Cape Town, or online.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="flex flex-col rounded-2xl bg-card p-8 transition-shadow hover:shadow-xl">
          <Lemon className="mb-6 h-28 w-28" />
          <h3 className="mb-2 text-lg font-semibold text-ink">
            Private Consultations
          </h3>
          <p className="mb-4 flex-1 text-sm text-body">
            We start with your life as it actually is — your routine, your
            budget, the things that get in the way — and build an eating plan
            that works around them. In person in Constantia, or online.
          </p>
          <div className="flex flex-col items-start gap-2 text-sm font-semibold uppercase tracking-wide">
            <button
              type="button"
              onClick={() => setModal("private")}
              className="uppercase text-green"
            >
              Details &amp; Rates
            </button>
            <a href="#contact" className="text-pink">
              Book a Consultation
            </a>
          </div>
        </div>

        <div className="flex flex-col rounded-2xl bg-card p-8 transition-shadow hover:shadow-xl">
          <Citrus className="mb-6 h-28 w-28" />
          <h3 className="mb-2 text-lg font-semibold text-ink">
            Corporate Wellness
          </h3>
          <p className="mb-4 flex-1 text-sm text-body">
            More than 20 years working with companies has shown me what helps
            people eat well around a demanding job. Practical sessions that
            support a healthier, more productive team.
          </p>
          <div className="flex flex-col items-start gap-2 text-sm font-semibold uppercase tracking-wide">
            <button
              type="button"
              onClick={() => setModal("corporate")}
              className="uppercase text-pink"
            >
              Details
            </button>
            <a href="#contact" className="text-green">
              Book a Wellness Session
            </a>
          </div>
        </div>

        <div className="flex flex-col rounded-2xl bg-card p-8 transition-shadow hover:shadow-xl">
          <Avocado className="mb-6 h-28 w-28" />
          <h3 className="mb-2 text-lg font-semibold text-ink">
            Nutrition Talks
          </h3>
          <p className="mb-4 flex-1 text-sm text-body">
            Friendly, practical talks on balanced eating for every age group —
            from primary and high school learners to university students, staff
            groups and older adults.
          </p>
          <div className="flex flex-col items-start gap-2 text-sm font-semibold uppercase tracking-wide">
            <a href="#contact" className="text-pink">
              Book a Talk
            </a>
          </div>
        </div>
      </div>

      <ServiceModal
        open={modal === "private"}
        onClose={() => setModal(null)}
        title="What I Offer:"
        art={artwork["modal.private"]}
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
        art={artwork["modal.corporate"]}
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
