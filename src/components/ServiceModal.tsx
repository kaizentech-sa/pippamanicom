import { useEffect } from "react";
import type { ReactNode } from "react";
import { X } from "lucide-react";
import Photo from "./Photo";
import type { ImageKey } from "../assets/imagery";

interface ServiceModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  image: ImageKey;
  children: ReactNode;
}

export default function ServiceModal({ open, onClose, title, image, children }: ServiceModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/60 p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-[1.5rem] bg-cream shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Photo
          imageKey={image}
          priority
          sizes="512px"
          className="h-40 w-full rounded-t-[1.5rem] object-cover"
        />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-cream text-ink shadow-md"
        >
          <X size={18} />
        </button>
        <div className="p-7">
          <h2 className="mb-4 text-2xl">{title}</h2>
          <div className="space-y-4 text-sm leading-relaxed text-body">{children}</div>
          <a
            href="#contact"
            onClick={onClose}
            className="mt-6 inline-block rounded-full bg-pink-dark px-7 py-3 text-sm font-semibold text-white transition-all hover:brightness-110"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </div>
  );
}
