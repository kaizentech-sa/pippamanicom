import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "Do I need a doctor's referral to see a dietitian in Cape Town?",
    a: "No referral is required. You can book a private consultation with Pippa directly, whether you're managing a medical condition, want to lose weight, or simply want to eat better.",
  },
  {
    q: "Do you offer online dietitian consultations, or only in-person in Constantia?",
    a: "Both. Consultations are available in person at Willow Road, Constantia, Cape Town, or online via video call for clients anywhere in South Africa.",
  },
  {
    q: "What areas of Cape Town do you service?",
    a: "Pippa is based in Constantia and regularly sees clients from Tokai, Bishopscourt, Meadowridge, Wynberg, Claremont, Kenilworth, Newlands, Rondebosch, Plumstead, Bergvliet and the wider Southern Suburbs and Cape Town area, as well as online nationwide.",
  },
  {
    q: "How much does a dietitian consultation cost?",
    a: "An initial consultation (60 minutes) is R750, a second consultation with an eating plan is R880, follow-up consultations are R400, and a Vitality nutrition assessment is R520. See the Services section above for full details.",
  },
  {
    q: "Is Pippa Manicom a registered dietitian?",
    a: "Yes. Pippa is registered with the Health Professions Council of South Africa (HPCSA, membership number DT0019429) and is a member of the Association of Dietetics in South Africa (ADSA).",
  },
  {
    q: "What conditions can a dietitian help with?",
    a: "Pippa helps with weight management, type 2 diabetes and insulin resistance, high cholesterol, high blood pressure, arthritis and gout, fibromyalgia and chronic fatigue syndrome, IBS and reflux, pregnancy and breastfeeding nutrition, menopause and sports nutrition.",
  },
  {
    q: "How do I book an appointment?",
    a: "Simply fill in the contact form below, WhatsApp or call 084 616 7000, or email hello@pippamanicom.co.za — Pippa will get back to you to confirm a time that suits you.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <div className="md:sticky md:top-32 md:self-start">
          <h2 className="text-3xl font-semibold text-ink md:text-[40px] md:leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-body">
            Common questions about booking a dietitian in Cape Town — if yours
            isn&rsquo;t answered here, just{" "}
            <a
              href="#contact"
              className="font-semibold text-pink hover:text-pink-dark"
            >
              get in touch
            </a>
            .
          </p>
        </div>

        <div className="divide-y divide-lavender border-y border-lavender">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  className="flex w-full items-center justify-between gap-5 py-5 text-left text-base font-semibold text-ink transition-colors hover:text-pink"
                >
                  {item.q}
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors ${
                      isOpen ? "bg-pink text-white" : "bg-lavender text-pink"
                    }`}
                  >
                    {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                  </span>
                </button>
                <p
                  id={`faq-answer-${i}`}
                  hidden={!isOpen}
                  className="pb-5 pr-12 text-sm leading-relaxed text-body"
                >
                  {item.a}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
