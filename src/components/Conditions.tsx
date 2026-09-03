import {
  IconMelon,
  IconApple,
  IconAvocado,
  IconCherry,
  IconLemon2,
  IconGrape,
  IconCarrot,
  IconSalad,
  IconPepper,
  IconWheat,
} from "@tabler/icons-react";
import kiwi from "../assets/images/pippa-manicom-kiwi-fruit.webp";

const CONDITIONS = [
  { label: "Weight Management (loss or gain)", icon: IconMelon },
  { label: "Type 2 Diabetes, Insulin Resistance", icon: IconApple },
  { label: "Cholesterol", icon: IconAvocado },
  { label: "High Blood Pressure", icon: IconCherry },
  { label: "Arthritis, Gout", icon: IconLemon2 },
  { label: "Fibromyalgia, Chronic Fatigue Syndrome", icon: IconGrape },
  { label: "IBS, Heartburn/Reflux, Constipation", icon: IconCarrot },
  { label: "Pregnancy and Breastfeeding", icon: IconSalad },
  { label: "Menopause", icon: IconPepper },
  { label: "Sports Nutrition", icon: IconWheat },
];

export default function Conditions() {
  return (
    <section id="conditions" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.1fr_1fr] md:gap-16">
        <div>
          <h2 className="text-3xl font-semibold text-ink md:text-[40px] md:leading-tight">
            Medical Conditions &amp; Lifestyle Needs
          </h2>
          <h3 className="mt-3 text-xl font-medium text-pink">
            Pippa can help with:
          </h3>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-body">
            As a registered dietitian in Cape Town, Pippa provides
            evidence-based, personalised nutrition therapy for a wide range
            of medical conditions and lifestyle goals, including:
          </p>
        </div>

        <img
          src={kiwi}
          alt="Halved kiwi fruit - evidence-based nutrition therapy from a registered dietitian in Constantia, Cape Town"
          width={900}
          height={520}
          loading="lazy"
          className="hidden w-full rounded-[40px] object-cover md:block"
        />
      </div>

      <ul className="mt-12 grid grid-cols-1 gap-x-12 sm:grid-cols-2">
        {CONDITIONS.map(({ label, icon: Icon }, i) => (
          <li
            key={label}
            className="flex items-center gap-4 border-b border-lavender py-4"
          >
            <Icon
              size={28}
              stroke={1.7}
              className="shrink-0"
              color={i % 2 === 0 ? "#61ce70" : "#ec297a"}
            />
            <span className="text-base text-ink">{label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
