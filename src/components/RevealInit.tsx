// src/components/RevealInit.tsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add("js");

    const reveals = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!reveals.length) return;

    // If no IO support, just show everything
    if (!("IntersectionObserver" in window)) {
      reveals.forEach((el) => el.classList.add("visible"));
      return;
    }

    // IMPORTANT: reset visibility for the new page so it can animate again
    reveals.forEach((el) => el.classList.remove("visible"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]); // ✅ rerun every time the route changes

  return null;
}
