import { useEffect, useRef, useState } from "react";

// Popover que abre com hover (mouse) e com toque/clique (celular).
// Fecha ao tocar fora ou ao tocar de novo.
export default function usePopover() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const lastType = useRef("mouse");

  useEffect(() => {
    if (!open) return;
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, [open]);

  const bind = {
    ref,
    tabIndex: 0,
    onPointerDown: (e) => {
      lastType.current = e.pointerType;
    },
    onPointerEnter: (e) => e.pointerType === "mouse" && setOpen(true),
    onPointerLeave: (e) => e.pointerType === "mouse" && setOpen(false),
    onFocus: () => lastType.current === "mouse" && setOpen(true),
    onBlur: (e) => {
      if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
    },
    // toque (ou teclado): alterna; mouse já é tratado pelo hover
    onClick: () => {
      if (lastType.current !== "mouse") setOpen((o) => !o);
    },
    onKeyDown: (e) => {
      if (e.target === e.currentTarget && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        lastType.current = "key";
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    },
  };

  return [open, bind];
}
