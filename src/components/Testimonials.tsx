import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % TESTIMONIALS.length),
      5000,
    );
    return () => clearInterval(id);
  }, []);

  const prev = () =>
    setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);

  const current = TESTIMONIALS[index];

  return (
    <section
      id="testimonials"
      className="my-12 rounded-[32px] bg-gradient-to-br from-pink/65 to-pink-dark px-6 py-20 text-center text-white"
    >
      <h2 className="mb-10 text-3xl font-semibold">
        What Our Cape Town Clients Say
      </h2>

      <div className="mx-auto flex max-w-2xl items-center gap-4">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous testimonial"
          className="shrink-0 rounded-full p-2 transition-colors hover:bg-white/10"
        >
          <ChevronLeft />
        </button>

        <div className="min-h-[140px] flex-1">
          <p className="text-sm italic leading-relaxed md:text-base">
            {current.text}
          </p>
          <cite className="mt-4 block text-sm font-semibold not-italic">
            {current.name}
          </cite>
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Next testimonial"
          className="shrink-0 rounded-full p-2 transition-colors hover:bg-white/10"
        >
          <ChevronRight />
        </button>
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {TESTIMONIALS.map((t, i) => (
          <button
            key={t.name}
            type="button"
            aria-label={`Go to testimonial ${i + 1}`}
            onClick={() => setIndex(i)}
            className={
              "h-2 w-2 rounded-full transition-colors " +
              (i === index ? "bg-white" : "bg-white/40")
            }
          />
        ))}
      </div>
    </section>
  );
}
