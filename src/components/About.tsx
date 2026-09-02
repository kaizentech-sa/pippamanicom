import { Check } from "lucide-react";
import portrait from "../assets/images/Pippa-Manicom-Portrait.webp";
import atDesk from "../assets/images/Pippa-at-work-desk.webp";

const QUALIFICATIONS = [
  "BSc in Human Physiology and Psychology (UCT)",
  "BSc (Med)(Hons) Nutrition & Dietetics (UCT)",
  "Diploma in Exercise & Fitness Studies and Aerobics Instructor (Exercise Teachers Academy)",
];

const ASSOCIATIONS = [
  "Health Professionals Council (HPCSA) (membership number: DT0019429)",
  "Board of Healthcare Funders (Practice number: 084 00 00 197 971)",
  "Association of Dietetics in South Africa (ADSA Gauteng South and Western Cape)",
];

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-pink text-white">
        <Check size={10} strokeWidth={3} />
      </span>
      <span className="text-sm text-body">{text}</span>
    </li>
  );
}

export default function About() {
  return (
    <>
      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <img
            src={portrait}
            alt="Pippa Manicom, registered dietitian in Constantia, Cape Town"
            width={499}
            height={750}
            loading="lazy"
            className="mx-auto w-full max-w-sm rounded-3xl object-cover md:max-w-none"
          />
          <div>
            <h2 className="mb-4 text-3xl font-semibold text-ink">
              About Pippa
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-body">
              <p className="font-semibold text-ink">
                With a passion for health, wellness and food, I am dedicated
                to helping others to live a healthier life. I offer a
                holistic approach to nutrition, focusing on sustainable
                lifestyle changes that promote long-term health and
                well-being.
              </p>
              <p>
                My practice centres around the idea that nutrition doesn't
                have to be restrictive or overwhelming. Instead, I emphasise
                balance, helping clients develop healthy habits that fit into
                their everyday lives.
              </p>
              <p>
                As a mother, I understand the challenges of maintaining a
                healthy diet in a busy household. I offer practical tips and
                strategies, from meal planning to navigating grocery
                shopping, making it easier for families to embrace a
                healthier lifestyle. My approach encourages families to
                enjoy wholesome, nutritious foods together, making mealtime a
                time for bonding rather than stress.
              </p>
              <p>
                Whether you're looking to shed some kilos, improve your
                family's eating habits, or simply feel your best, you'll
                find a wealth of resources tailored to your needs. My
                personalised approach takes into account your unique
                lifestyle, preferences, and challenges, ensuring that we
                create a path to wellness that works for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-semibold text-ink">
              Work Experience
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-body">
              <p className="font-semibold text-ink">
                Pippa spent the early part of her career working in various
                hospitals in London (Guys &amp; St Thomas, Kingston Hospital,
                Epsom &amp; St Heliers Hospitals) where she obtained four
                years of extensive clinical experience.
              </p>
              <p>
                She returned to South Africa where she started her own
                private practice in a Sports Injury Clinic in Johannesburg
                before moving her practice to home while juggling two small
                children.
              </p>
              <p>
                She has spent many years consulting to a variety of
                corporations, and consults to executives at Exec Care
                (Johannesburg and Cape Town).
              </p>
              <p>
                In 2023 she moved to Cape Town where she has set up her
                practice from home in Constantia.
              </p>
            </div>
          </div>
          <img
            src={atDesk}
            alt="Pippa Manicom working at her Constantia dietitian practice, Cape Town"
            width={750}
            height={1000}
            loading="lazy"
            className="mx-auto w-4/5 rounded-[3%_3%_3%_40%] object-cover md:w-full"
          />
        </div>

        <div className="mt-16 flex flex-col gap-16 border-t border-periwinkle/40 pt-12">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-[280px_1fr] md:gap-12">
            <h3 className="text-lg font-semibold text-ink">
              Qualifications
            </h3>
            <ul className="space-y-3">
              {QUALIFICATIONS.map((q) => (
                <CheckItem key={q} text={q} />
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-[280px_1fr] md:gap-12">
            <h3 className="text-lg font-semibold text-ink">
              Professional Associations
            </h3>
            <ul className="space-y-3">
              {ASSOCIATIONS.map((a) => (
                <CheckItem key={a} text={a} />
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-[280px_1fr] md:gap-12">
            <h3 className="text-lg font-semibold text-ink">
              Hobbies and Interests
            </h3>
            <p className="text-sm leading-relaxed text-body">
              Pippa enjoys being active either at the gym or outdoors and
              loves walking her dog in the greenbelts and mountains. She
              loves cooking and experimenting with recipes. She has a
              passion for dancing and used to compete in Latin-American
              dancing.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
