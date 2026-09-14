"use client";

import { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  labelledBy?: string;
  className?: string;
};

export default function Modal({ open, onClose, children, labelledBy, className = "" }: ModalProps) {
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  const hasCustomBackground = /(^|\s)bg-/.test(className);

  return createPortal(
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-primary-950/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        className={`relative max-h-[90vh] w-full overflow-y-auto rounded-3xl shadow-2xl ${hasCustomBackground ? "" : "bg-white"} ${className}`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-neutral-600 shadow-md transition-colors hover:bg-neutral-100 hover:text-neutral-900 sm:right-5 sm:top-5"
        >
          <X className="h-5 w-5" />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
