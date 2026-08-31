import { Check } from "lucide-react";
import { photos } from "../assets/imagery";

const portrait = photos.portrait;
const atDesk = photos.atWork;

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
            src={portrait.src}
            alt={portrait.alt}
            width={portrait.width}
            height={portrait.height}
            loading="lazy"
            className="mx-auto w-full max-w-sm rounded-3xl object-cover md:max-w-none"
          />
          <div>
            <h2 className="mb-4 text-3xl font-semibold text-ink">
              About Pippa
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-body">
              <p className="font-semibold text-ink">
                I'm a registered dietitian with a genuine love of food,
                health and helping people feel better in their own bodies.
                My approach is holistic and built around sustainable
                changes, not quick fixes.
              </p>
              <p>
                Good nutrition doesn't have to be restrictive or
                complicated. I focus on balance, and on helping clients
                build eating habits that actually hold up in a normal week.
              </p>
              <p>
                As a mother, I know first-hand how hard it is to keep a
                household eating well. I share practical, real-world
                strategies — from planning meals to getting through the
                shops — so that families can enjoy wholesome food together
                without mealtimes becoming a battle.
              </p>
              <p>
                Whether you want to lose weight, sort out the family's
                eating, or simply feel your best, we'll work from your
                actual lifestyle, preferences and challenges to find an
                approach that fits you.
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
                Pippa began her career in London, working across several
                hospitals — Guys &amp; St Thomas, Kingston Hospital, and
                Epsom &amp; St Heliers — where she built up four years of
                hands-on clinical experience.
              </p>
              <p>
                Back in South Africa, she opened her own practice in a
                Johannesburg sports injury clinic, later moving it home
                while raising two young children.
              </p>
              <p>
                She has consulted to a wide range of companies over the
                years, and still works with executives at Exec Care in
                Johannesburg and Cape Town.
              </p>
              <p>
                In 2023 she relocated to Cape Town, where she now runs her
                practice from home in Constantia.
              </p>
            </div>
          </div>
          <img
            src={atDesk.src}
            alt={atDesk.alt}
            width={atDesk.width}
            height={atDesk.height}
            loading="lazy"
            className="mx-auto w-4/5 rounded-3xl object-cover md:w-full"
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
              Outside the practice, Pippa is happiest being active — at the
              gym, or out walking her dog in the greenbelts and mountains.
              She loves cooking and playing around with new recipes, and has
              a long-standing passion for dancing, having once competed in
              Latin-American.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
