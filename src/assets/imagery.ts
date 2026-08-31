/**
 * Single source for every image on the site. Components reference a semantic
 * key, never a file path — swapping any image is a one-line change here.
 *
 * - Pippa's own photos + the logo: unchanged, owned.
 * - Everything else: licensed stock (Pexels License — free commercial use).
 *   Sources listed in ./images/stock/CREDITS.md.
 */
import portrait from "./images/Pippa-Manicom-Portrait.webp";
import atWork from "./images/Pippa-at-work-desk.webp";
import logo from "./images/Pippa_Manicom_logo.png";

import heroProduce from "./images/stock/hero-produce.webp";
import heroProduceSm from "./images/stock/hero-produce@0.5x.webp";
import consult from "./images/stock/consult.webp";
import consultSm from "./images/stock/consult@0.5x.webp";
import corporate from "./images/stock/corporate.webp";
import corporateSm from "./images/stock/corporate@0.5x.webp";
import talks from "./images/stock/talks.webp";
import talksSm from "./images/stock/talks@0.5x.webp";
import conditions from "./images/stock/conditions.webp";
import conditionsSm from "./images/stock/conditions@0.5x.webp";
import contact from "./images/stock/contact.webp";
import contactSm from "./images/stock/contact@0.5x.webp";
import bowl from "./images/stock/bowl.webp";
import bowlSm from "./images/stock/bowl@0.5x.webp";
import berries from "./images/stock/berries.webp";
import berriesSm from "./images/stock/berries@0.5x.webp";

export interface Img {
  src: string;
  /** 800w variant for the srcset */
  srcSm?: string;
  width: number;
  height: number;
  alt: string;
}

function stock(src: string, srcSm: string, width: number, height: number, alt: string): Img {
  return { src, srcSm, width, height, alt };
}

export const images = {
  "pippa.portrait": {
    src: portrait,
    width: 499,
    height: 750,
    alt: "Pippa Manicom, registered dietitian in Constantia, Cape Town",
  },
  "pippa.atWork": {
    src: atWork,
    width: 750,
    height: 1000,
    alt: "Pippa Manicom working at her Constantia dietitian practice, Cape Town",
  },
  "logo.header": {
    src: logo,
    width: 500,
    height: 288,
    alt: "Pippa Manicom - Registered Dietitian in Constantia, Cape Town",
  },
  "logo.footer": {
    src: logo,
    width: 500,
    height: 288,
    alt: "Pippa Manicom Registered Dietitian - Constantia, Cape Town",
  },

  "hero.produce": stock(heroProduce, heroProduceSm, 1280, 855,
    "Fresh vegetables — balanced everyday eating guided by a Cape Town dietitian"),
  "services.private": stock(consult, consultSm, 1280, 1574,
    "Registered dietitian preparing a personalised weekly meal plan with a client"),
  "services.corporate": stock(corporate, corporateSm, 1280, 960,
    "Colourful healthy meal-prep containers with falafel, roast vegetables and grains"),
  "services.talks": stock(talks, talksSm, 1195, 1792,
    "A colourful vegetable and quinoa bowl — practical, balanced nutrition"),
  "conditions.food": stock(conditions, conditionsSm, 1280, 854,
    "Balanced grain bowls — medical nutrition therapy from a Constantia dietitian"),
  "contact.produce": stock(contact, contactSm, 1280, 853,
    "A basket of fresh seasonal vegetables on a wooden bench"),
  "modal.private": stock(bowl, bowlSm, 1280, 853,
    "A breakfast bowl of yoghurt, granola and fresh fruit"),
  "modal.corporate": stock(berries, berriesSm, 1280, 853,
    "Yoghurt with granola, blueberries and strawberries"),
} satisfies Record<string, Img>;

export type ImageKey = keyof typeof images;

export function img(key: ImageKey): Img {
  return images[key];
}
