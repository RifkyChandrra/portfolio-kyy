"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function BodyClassController() {
  const pathname = usePathname();

  useEffect(() => {
    const isHome = pathname === "/";

    if (isHome) {
      document.body.classList.add("homepage");
    } else {
      document.body.classList.remove("homepage");
    }
  }, [pathname]);

  return null; // tidak render apa pun
}
