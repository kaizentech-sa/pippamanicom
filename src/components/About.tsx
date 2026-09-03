import portrait from "../assets/images/Pippa-Manicom-Portrait.webp";

export default function About() {
  return (
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

            <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-body">
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
  );
}
