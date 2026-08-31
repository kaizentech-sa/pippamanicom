/**
 * Single place that maps every image slot on the site to a source.
 *
 * - `photos`  : photography we own (Pippa's own portraits + the logo).
 *               These are unchanged.
 * - `artwork` : the previous stock produce photos were replaced with
 *               original flat illustrations (see components/Produce.tsx),
 *               which also settles the asset-ownership question.
 *
 * To change any image later, edit only this file — components reference
 * semantic keys, never file paths.
 */
import type { ComponentType, SVGProps } from "react";
import portrait from "./images/Pippa-Manicom-Portrait.webp";
import atWork from "./images/Pippa-at-work-desk.webp";
import logo from "./images/Pippa_Manicom_logo.png";
import {
  Watermelon,
  Lemon,
  Lime,
  Avocado,
  Kiwi,
  Berries,
  Citrus,
  Pepper,
  Leaf,
} from "../components/Produce";

export interface Photo {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export const photos = {
  portrait: {
    src: portrait,
    width: 499,
    height: 750,
    alt: "Pippa Manicom, registered dietitian in Constantia, Cape Town",
  },
  atWork: {
    src: atWork,
    width: 750,
    height: 1000,
    alt: "Pippa Manicom working at her Constantia dietitian practice, Cape Town",
  },
  logoHeader: {
    src: logo,
    width: 500,
    height: 288,
    alt: "Pippa Manicom - Registered Dietitian in Constantia, Cape Town",
  },
  logoFooter: {
    src: logo,
    width: 500,
    height: 288,
    alt: "Pippa Manicom Registered Dietitian - Constantia, Cape Town",
  },
} satisfies Record<string, Photo>;

type Art = ComponentType<SVGProps<SVGSVGElement>>;

export const artwork = {
  "hero.primary": Watermelon,
  "hero.accent": Leaf,
  "services.private": Lemon,
  "services.corporate": Citrus,
  "services.talks": Avocado,
  "conditions.produce": Kiwi,
  "modal.private": Lime,
  "modal.corporate": Berries,
  "contact.produce": Pepper,
} satisfies Record<string, Art>;

export type ArtKey = keyof typeof artwork;
