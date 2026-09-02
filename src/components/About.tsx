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

const EXPERIENCE = [
  "Pippa spent the early part of her career working in various hospitals in London (Guys & St Thomas, Kingston Hospital, Epsom & St Heliers Hospitals) where she obtained four years of extensive clinical experience.",
  "She returned to South Africa where she started her own private practice in a Sports Injury Clinic in Johannesburg before moving her practice to home while juggling two small children.",
  "She has spent many years consulting to a variety of corporations, and consults to executives at Exec Care (Johannesburg and Cape Town).",
  "In 2023 she moved to Cape Town where she has set up her practice from home in Constantia.",
];

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-pink text-white">
        <Check size={10} strokeWidth={3} />
      </span>
      <span className="text-sm leading-relaxed text-body">{text}</span>
    </li>
  );
}

export default function About() {
  return (
    <>
      <section id="about" className="px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-lavender/60 px-6 py-14 md:rounded-[56px] md:px-14 md:py-20">
          <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[1.25fr_1fr] md:gap-16">
            <div>
              <h2 className="mb-6 text-3xl font-semibold text-ink md:text-[40px]">
                About Pippa
              </h2>

              <p className="text-lg font-medium leading-relaxed text-ink md:text-xl">
                With a passion for health, wellness and food, I am dedicated
                to helping others to live a healthier life. I offer a
                holistic approach to nutrition, focusing on sustainable
                lifestyle changes that promote long-term health and
                well-being.
              </p>

              <div className="mt-8 space-y-5 text-sm leading-relaxed text-body md:columns-2 md:gap-10 md:space-y-0 md:[&>p]:mb-5">
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

            <div className="relative mx-auto w-full max-w-sm md:max-w-none">
              <span
                aria-hidden="true"
                className="absolute -right-4 -top-4 hidden h-full w-full rounded-[40px] bg-green/15 md:block"
              />
              <img
                src={portrait}
                alt="Pippa Manicom, registered dietitian in Constantia, Cape Town"
                width={499}
                height={750}
                loading="lazy"
                className="relative w-full rounded-[40px] object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[1fr_1.15fr] md:gap-16">
          <div className="relative order-2 mx-auto w-4/5 md:order-1 md:w-full">
            <span
              aria-hidden="true"
              className="absolute -bottom-4 -left-4 hidden h-full w-full rounded-[3%_3%_3%_40%] border-2 border-periwinkle/60 md:block"
            />
            <img
              src={atDesk}
              alt="Pippa Manicom working at her Constantia dietitian practice, Cape Town"
              width={750}
              height={1000}
              loading="lazy"
              className="relative w-full rounded-[3%_3%_3%_40%] object-cover"
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="mb-8 text-3xl font-semibold text-ink md:text-[40px]">
              Work Experience
            </h2>

            <ol className="space-y-7">
              {EXPERIENCE.map((item, i) => (
                <li key={item} className="grid grid-cols-[auto_1fr] gap-5">
                  <span
                    aria-hidden="true"
                    className={`mt-0.5 flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold ${
                      i % 2 === 0
                        ? "bg-pink/10 text-pink"
                        : "bg-green/15 text-green"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <p
                    className={`text-sm leading-relaxed ${
                      i === 0 ? "font-semibold text-ink" : "text-body"
                    }`}
                  >
                    {item}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-[28px] bg-cloud p-8">
            <h3 className="mb-5 text-lg font-semibold text-ink">
              Qualifications
            </h3>
            <ul className="space-y-3">
              {QUALIFICATIONS.map((q) => (
                <CheckItem key={q} text={q} />
              ))}
            </ul>
          </div>

          <div className="rounded-[28px] bg-cloud p-8">
            <h3 className="mb-5 text-lg font-semibold text-ink">
              Professional Associations
            </h3>
            <ul className="space-y-3">
              {ASSOCIATIONS.map((a) => (
                <CheckItem key={a} text={a} />
              ))}
            </ul>
          </div>

          <div className="rounded-[28px] bg-cloud p-8">
            <h3 className="mb-5 text-lg font-semibold text-ink">
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
