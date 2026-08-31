import Photo from "./Photo";

const TIMELINE = [
  {
    place: "London",
    text: "Pippa began her career in London, working across several hospitals — Guys & St Thomas, Kingston Hospital, and Epsom & St Heliers — where she built up four years of hands-on clinical experience.",
  },
  {
    place: "Johannesburg",
    text: "Back in South Africa, she opened her own practice in a Johannesburg sports injury clinic, later moving it home while raising two young children.",
  },
  {
    place: "Corporate practice",
    text: "She has consulted to a wide range of companies over the years, and still works with executives at Exec Care in Johannesburg and Cape Town.",
  },
  {
    place: "Cape Town · 2023",
    text: "In 2023 she relocated to Cape Town, where she now runs her practice from home in Constantia.",
  },
];

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

export default function About() {
  return (
    <>
      <section id="about" className="scroll-mt-24 bg-sand">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
            <div className="relative">
              <div className="absolute -left-3 -top-3 hidden h-32 w-32 rounded-full bg-honey/20 md:block" />
              <Photo
                imageKey="pippa.portrait"
                sizes="(min-width: 768px) 38vw, 90vw"
                className="relative w-full rounded-[1.75rem] border border-line object-cover"
              />
            </div>
            <div>
              <p className="label">The dietitian</p>
              <h2 className="mt-3 text-4xl">About Pippa Manicom, registered dietitian</h2>
              <p className="mt-5 font-display text-xl leading-snug text-ink">
                I'm a registered dietitian with a genuine love of food, health
                and helping people feel better in their own bodies. My approach
                is holistic and built around sustainable changes, not quick
                fixes.
              </p>
              <div className="mt-5 space-y-4 text-base text-body md:columns-2 md:gap-10 [&>p]:mb-4">
                <p>
                  Good nutrition doesn't have to be restrictive or complicated. I
                  focus on balance, and on helping clients build eating habits
                  that actually hold up in a normal week.
                </p>
                <p>
                  As a mother, I know first-hand how hard it is to keep a
                  household eating well. I share practical, real-world strategies
                  — from planning meals to getting through the shops — so that
                  families can enjoy wholesome food together without mealtimes
                  becoming a battle.
                </p>
                <p>
                  Whether you want to lose weight, sort out the family's eating,
                  or simply feel your best, we'll work from your actual
                  lifestyle, preferences and challenges to find an approach that
                  fits you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="scroll-mt-24 mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.3fr] md:gap-16">
          <div>
            <p className="label">Background</p>
            <h2 className="mt-3 text-4xl">Work experience</h2>
            <Photo
              imageKey="pippa.atWork"
              sizes="(min-width: 768px) 34vw, 90vw"
              className="mt-8 w-full rounded-[1.75rem] border border-line object-cover"
            />
          </div>

          <ol className="relative border-l border-line pl-8">
            {TIMELINE.map((t, i) => (
              <li key={t.place} className={i === TIMELINE.length - 1 ? "" : "mb-10"}>
                <span className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-honey bg-cream" />
                <p className="label">{t.place}</p>
                <p className="mt-2 text-base text-body">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16 grid gap-8 border-t border-line pt-12 md:grid-cols-3">
          <div>
            <h3 className="text-xl">Qualifications</h3>
            <ul className="mt-4 space-y-3 text-sm text-body">
              {QUALIFICATIONS.map((q) => (
                <li key={q} className="border-l-2 border-honey/50 pl-3">{q}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl">Professional associations</h3>
            <ul className="mt-4 space-y-3 text-sm text-body">
              {ASSOCIATIONS.map((a) => (
                <li key={a} className="border-l-2 border-honey/50 pl-3">{a}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl">Hobbies &amp; interests</h3>
            <p className="mt-4 text-sm leading-relaxed text-body">
              Outside the practice, Pippa is happiest being active — at the gym,
              or out walking her dog in the greenbelts and mountains. She loves
              cooking and playing around with new recipes, and has a
              long-standing passion for dancing, having once competed in
              Latin-American.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
