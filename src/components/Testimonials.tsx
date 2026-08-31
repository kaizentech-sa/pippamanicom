import { Quote } from "lucide-react";

function Card({ t, featured = false }: { t: { text: string; name: string }; featured?: boolean }) {
  return (
    <figure className="rounded-[1.5rem] border border-cream/15 bg-ink/40 p-7">
      <Quote size={featured ? 30 : 24} className="text-honey-bright" />
      <blockquote
        className={
          "mt-4 font-display italic leading-relaxed text-cream/90 " +
          (featured ? "text-lg" : "text-[1rem]")
        }
      >
        {t.text}
      </blockquote>
      <figcaption className="mt-5 text-sm font-semibold text-cream">{t.name}</figcaption>
    </figure>
  );
}

const TESTIMONIALS = [
  {
    text: "After a diagnosis of pre-diabetes and at the recommendation of my GP, I contacted Pippa Manicom. After 6 months of guided dietary changes, I have not only lost 10kgs, but am no longer pre-diabetic and am on a course that will help me to continue to manage my diet and health for sustainable weight management. I am incredibly grateful to Pippa and her creative and personalized recommendations and recipes. I cannot recommend her guidance and support too strongly.",
    name: "Elizabeth Martella-O'Connor",
  },
  {
    text: "Pippa has a wonderfully relaxed manner and a very sensible approach which is very do-able! Her offices also set the perfect scene for comfort and focus in her sessions. I would highly recommend her nutrition services.",
    name: "Eleni Ratheb",
  },
  {
    text: "I have known Pippa for many years and she has helped me reach my goal. At times life gets difficult and we have our ups and downs. Pippa has helped me reach my goal twice.",
    name: "Aida Fernandes",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 bg-ink text-cream">
      <div className="sprigs">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <p className="label">In their words</p>
          <h2 className="mt-3 max-w-2xl text-4xl text-cream">
            What Pippa's Cape Town clients say
          </h2>

          <div className="mt-12 grid items-start gap-6 md:grid-cols-[1.3fr_1fr]">
            <Card t={TESTIMONIALS[0]} featured />
            <div className="grid gap-6">
              <Card t={TESTIMONIALS[1]} />
              <Card t={TESTIMONIALS[2]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
