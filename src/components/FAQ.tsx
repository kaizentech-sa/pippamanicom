import { useId, useState } from "react";

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
  const uid = useId();

  return (
    <section id="faq" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <div className="md:sticky md:top-28 md:self-start">
          <p className="label">Good to know</p>
          <h2 className="mt-3 text-4xl">Frequently asked questions</h2>
          <p className="mt-4 text-sm text-body">
            If yours isn&rsquo;t here, just{" "}
            <a href="#contact" className="font-semibold text-pink-dark hover:text-pink">
              get in touch
            </a>
            .
          </p>
        </div>

        <div className="border-t border-line">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            const panelId = `${uid}-${i}`;
            return (
              <div key={item.q} className="border-b border-line">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-start justify-between gap-5 py-5 text-left font-display text-lg text-ink"
                  >
                    {item.q}
                    <span aria-hidden="true" className="mt-0.5 shrink-0 text-xl leading-none text-ink">
                      {isOpen ? "–" : "+"}
                    </span>
                  </button>
                </h3>
                <div id={panelId} hidden={!isOpen}>
                  <p className="pb-6 text-base leading-relaxed text-body">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
