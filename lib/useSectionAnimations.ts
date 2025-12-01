"use client";

import { useEffect } from "react";

export default function useSectionAnimations() {
  useEffect(() => {
    const items = document.querySelectorAll(".animate-group, .stagger");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.25 }
    );

    items.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
