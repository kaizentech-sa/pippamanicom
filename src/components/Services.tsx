import { useState } from "react";
import ServiceModal from "./ServiceModal";
import lemons from "../assets/images/Pippa-Manicom-Lemons.png";
import protein from "../assets/images/Pippa-.png";
import avocados from "../assets/images/Pippa-Manicom-Avocados.png";
import limes from "../assets/images/Limes.jpg";
import blueberries from "../assets/images/Blueberrues.jpg";

export default function Services() {
  const [modal, setModal] = useState<"private" | "corporate" | null>(null);

  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div
          className="flex flex-col justify-end rounded-2xl bg-card bg-contain bg-top bg-no-repeat p-8 pt-64 transition-shadow hover:shadow-2xl"
          style={{ backgroundImage: `url(${lemons})` }}
        >
          <h4 className="mb-2 text-lg font-semibold text-ink">
            Private Consultations
          </h4>
          <p className="mb-4 text-sm text-body">
            My personalised approach takes into account your unique
            lifestyle, preferences, and challenges, ensuring that we create a
            path to wellness that works for you, can be done in person or
            online.
          </p>
          <div className="flex flex-col items-start gap-2 text-sm font-semibold tracking-wide">
            <button
              type="button"
              onClick={() => setModal("private")}
              className="text-green"
            >
              Details &amp; Rates
            </button>
            <a href="#contact" className="text-pink">
              Book a Consultation
            </a>
          </div>
        </div>

        <div
          className="flex flex-col justify-end rounded-2xl bg-card bg-contain bg-top bg-no-repeat p-8 pt-64 transition-shadow hover:shadow-2xl"
          style={{ backgroundImage: `url(${protein})` }}
        >
          <h4 className="mb-2 text-lg font-semibold text-ink">
            Corporate Wellness
          </h4>
          <p className="mb-4 text-sm text-body">
            With over 20 years of experience in working with corporates, I
            understand the challenges of keeping a work-life balance. I can
            help increase productivity in a healthier, happier working
            environment.
          </p>
          <div className="flex flex-col items-start gap-2 text-sm font-semibold tracking-wide">
            <button
              type="button"
              onClick={() => setModal("corporate")}
              className="text-pink"
            >
              Details
            </button>
            <a href="#contact" className="text-green">
              Book a Wellness Session
            </a>
          </div>
        </div>

        <div
          className="flex flex-col justify-end rounded-2xl bg-card bg-contain bg-top bg-no-repeat p-8 pt-64 transition-shadow hover:shadow-2xl"
          style={{ backgroundImage: `url(${avocados})` }}
        >
          <h4 className="mb-2 text-lg font-semibold text-ink">
            Nutrition Talks
          </h4>
          <p className="mb-4 text-sm text-body">
            Talks and presentations are available for all age groups - from
            primary and high school students to university students and
            older adults - on topics related to healthy, balanced eating.
          </p>
          <div className="flex flex-col items-start gap-2 text-sm font-semibold tracking-wide">
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
        image={limes}
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
        image={blueberries}
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
