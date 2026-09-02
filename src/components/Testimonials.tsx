import { Quote } from "lucide-react";

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
    <section
      id="testimonials"
      className="bg-gradient-to-br from-pink/65 to-pink-dark py-16 text-white md:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-md text-3xl font-semibold md:text-[40px] md:leading-tight">
          What Our Cape Town Clients Say
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map(({ text, name }) => (
            <figure
              key={name}
              className="flex flex-col rounded-[28px] bg-white/12 p-7 backdrop-blur-sm ring-1 ring-white/20"
            >
              <Quote size={26} className="mb-4 shrink-0 text-white/60" />
              <blockquote className="flex-1 text-sm leading-relaxed text-white/95">
                {text}
              </blockquote>
              <figcaption className="mt-6 border-t border-white/25 pt-4 text-sm font-semibold">
                {name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
