import { img, type ImageKey } from "../assets/imagery";

interface PhotoProps {
  imageKey: ImageKey;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

/** <img> from the imagery layer, with a 2-entry srcset and explicit
 *  dimensions so it reserves space (no layout shift). */
export default function Photo({ imageKey, className = "", sizes, priority = false }: PhotoProps) {
  const a = img(imageKey);
  const srcSet = a.srcSm
    ? `${a.srcSm} ${Math.round(a.width / 2)}w, ${a.src} ${a.width}w`
    : undefined;
  return (
    <img
      src={a.src}
      srcSet={srcSet}
      sizes={sizes}
      alt={a.alt}
      width={a.width}
      height={a.height}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      // @ts-expect-error fetchpriority is valid HTML, types lag
      fetchpriority={priority ? "high" : undefined}
      className={className}
    />
  );
}
