"use client";

import { useEffect } from "react";

export default function AnchorScroller() {
  useEffect(() => {
    const scrollToHash = (hash) => {
      const id = decodeURIComponent(hash.replace("#", ""));
      const target = id ? document.getElementById(id) : null;
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    const handleClick = (event) => {
      const link = event.target.closest('a[href^="#"]');
      if (!link) {
        return;
      }

      const hash = link.getAttribute("href");
      if (!hash || hash === "#") {
        return;
      }

      event.preventDefault();
      history.pushState(null, "", hash);
      scrollToHash(hash);
    };

    const handleHashChange = () => scrollToHash(window.location.hash);

    document.addEventListener("click", handleClick);
    window.addEventListener("hashchange", handleHashChange);
    if (window.location.hash) {
      requestAnimationFrame(() => scrollToHash(window.location.hash));
    }

    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return null;
}
