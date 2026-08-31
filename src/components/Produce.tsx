/**
 * Original flat produce illustrations, used in place of the previous
 * stock produce photography. Palette-driven, tiny, and owned outright.
 * Each takes an optional className (sizing / positioning from the parent).
 */
import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

const RIND = "#6bb35d";
const RIND_DARK = "#4f9243";
const FLESH = "#f6749f";
const FLESH_DEEP = "#ec297a";
const SEED = "#38322e";
const LEAF = "#7cc47a";
const CITRUS = "#f7c948";
const CITRUS_FLESH = "#fbe0a6";
const CREAM = "#fff6ef";

export function Watermelon({ className, ...rest }: Props) {
  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label="Watermelon slice illustration" {...rest}>
      {/* half-slice, flat side up */}
      <path d="M12 36 A48 48 0 0 0 108 36 Z" fill={RIND} />
      <path d="M12 36 A48 48 0 0 0 108 36" fill="none" stroke={RIND_DARK} strokeWidth="3" />
      <path d="M19 36 A41 41 0 0 0 101 36 Z" fill={CREAM} />
      <path d="M26 36 A34 34 0 0 0 94 36 Z" fill={FLESH} />
      <circle cx="60" cy="52" r="3.2" fill={SEED} />
      <circle cx="44" cy="48" r="3.2" fill={SEED} />
      <circle cx="76" cy="48" r="3.2" fill={SEED} />
      <circle cx="52" cy="64" r="3.2" fill={SEED} />
      <circle cx="68" cy="64" r="3.2" fill={SEED} />
    </svg>
  );
}

export function Lemon({ className, ...rest }: Props) {
  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label="Lemon illustration" {...rest}>
      <g transform="rotate(-20 60 62)">
        <ellipse cx="60" cy="62" rx="42" ry="33" fill={CITRUS} />
        <path d="M99 62c4 0 8 1 9 3-1 2-5 3-9 3" fill="#e0a92f" />
        <path d="M14 62c-3 0-6 1-7 3 1 2 4 3 7 3" fill="#e0a92f" />
        <ellipse cx="50" cy="52" rx="14" ry="9" fill={CREAM} opacity=".5" />
      </g>
      <path d="M92 34c7-3 14-1 16 4-6 4-13 2-16-4Z" fill={LEAF} />
    </svg>
  );
}

export function Lime({ className, ...rest }: Props) {
  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label="Lime half illustration" {...rest}>
      <circle cx="60" cy="62" r="40" fill={RIND} />
      <circle cx="60" cy="62" r="33" fill={CREAM} />
      <g stroke={RIND} strokeWidth="3" fill="none">
        <path d="M60 62 39 41M60 62 60 33M60 62 81 41M60 62 88 62M60 62 81 83M60 62 60 91M60 62 39 83M60 62 32 62" />
      </g>
      <circle cx="60" cy="62" r="6" fill={RIND} />
    </svg>
  );
}

export function Avocado({ className, ...rest }: Props) {
  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label="Avocado illustration" {...rest}>
      <path d="M60 14c14 0 24 14 24 34s-8 58-24 58-24-38-24-58 10-34 24-34Z" fill={RIND_DARK} />
      <path d="M60 24c10 0 17 11 17 26s-6 48-17 48-17-33-17-48 7-26 17-26Z" fill={LEAF} />
      <ellipse cx="60" cy="74" rx="13" ry="15" fill={SEED} />
      <ellipse cx="56" cy="70" rx="4" ry="5" fill={CREAM} opacity=".5" />
    </svg>
  );
}

export function Kiwi({ className, ...rest }: Props) {
  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label="Kiwi fruit illustration" {...rest}>
      <circle cx="60" cy="60" r="44" fill={RIND_DARK} />
      <circle cx="60" cy="60" r="38" fill="#d8e8b0" />
      <circle cx="60" cy="60" r="12" fill={CREAM} />
      {Array.from({ length: 16 }).map((_, i) => (
        <circle
          key={i}
          cx={60 + 24 * Math.cos((i / 16) * Math.PI * 2)}
          cy={60 + 24 * Math.sin((i / 16) * Math.PI * 2)}
          r="1.7"
          fill={SEED}
        />
      ))}
    </svg>
  );
}

export function Berries({ className, ...rest }: Props) {
  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label="Blueberries illustration" {...rest}>
      <circle cx="44" cy="66" r="20" fill="#5b6b9e" />
      <circle cx="76" cy="58" r="18" fill="#6a79ab" />
      <circle cx="62" cy="86" r="16" fill="#4f5f92" />
      <path d="M44 46l3-4 3 4-3 3Z M76 40l3-4 3 4-3 3Z" fill={LEAF} />
      <circle cx="38" cy="60" r="3" fill={CREAM} opacity=".45" />
      <circle cx="70" cy="52" r="3" fill={CREAM} opacity=".45" />
    </svg>
  );
}

export function Citrus({ className, ...rest }: Props) {
  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label="Citrus half illustration" {...rest}>
      <circle cx="60" cy="60" r="42" fill={CITRUS} />
      <circle cx="60" cy="60" r="34" fill={CITRUS_FLESH} />
      <g stroke={CITRUS} strokeWidth="3.5" fill="none">
        <path d="M60 60 38 38M60 60 60 30M60 60 82 38M60 60 90 60M60 60 82 82M60 60 60 90M60 60 38 82M60 60 30 60" />
      </g>
      <circle cx="60" cy="60" r="5" fill={CITRUS} />
    </svg>
  );
}

export function Pepper({ className, ...rest }: Props) {
  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label="Bell pepper illustration" {...rest}>
      <path d="M40 44c-10 6-14 22-8 38 7 18 24 26 36 20s16-24 10-42c-4-12-12-20-20-20-3 6-9 8-18 4Z" fill={FLESH_DEEP} />
      <path d="M52 40c2-8 8-12 12-10 3 1 4 6 2 12" fill="none" stroke={RIND_DARK} strokeWidth="5" strokeLinecap="round" />
      <path d="M48 56c-3 8-2 18 2 26" fill="none" stroke={CREAM} strokeWidth="4" strokeLinecap="round" opacity=".4" />
    </svg>
  );
}

export function Leaf({ className, ...rest }: Props) {
  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label="Mint leaf illustration" {...rest}>
      <path d="M30 90C30 52 58 30 92 30c0 38-28 60-62 60Z" fill={LEAF} />
      <path d="M30 90C46 66 66 48 92 30" fill="none" stroke={RIND_DARK} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
