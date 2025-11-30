// /lib/useStagger.ts
"use client";

import { useEffect, useRef } from "react";

export default function useStagger() {
  const parentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const parent = parentRef.current;
    if (!parent) return;

    const children = parent.querySelectorAll(".stagger-child");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((child: any, i: number) => {
            setTimeout(() => child.classList.add("stagger-animate"), i * 120);
          });
        } else {
          children.forEach((child: any) => child.classList.remove("stagger-animate"));
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(parent);
    return () => observer.disconnect();
  }, []);

  return parentRef;
}
