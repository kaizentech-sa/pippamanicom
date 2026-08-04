import { useEffect } from "react";
import { X } from "lucide-react";

interface ServiceModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  image: string;
  children: React.ReactNode;
}

export default function ServiceModal({
  open,
  onClose,
  title,
  image,
  children,
}: ServiceModalProps) {
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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/50 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="h-40 rounded-t-3xl bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink shadow-md"
        >
          <X size={18} />
        </button>
        <div className="p-8">
          <h2 className="mb-4 text-2xl font-semibold text-ink">{title}</h2>
          <div className="space-y-4 text-sm leading-relaxed text-body">
            {children}
          </div>
          <a
            href="#contact"
            onClick={onClose}
            className="mt-6 inline-block rounded-full bg-pink px-8 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </div>
  );
}
