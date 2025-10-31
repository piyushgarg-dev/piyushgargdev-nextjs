"use client";
import { useEffect } from "react";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const scrollEl = document.querySelector("[data-scroll-container]");

      if (scrollEl) {
        const scroll = new LocomotiveScroll({
          el: scrollEl,
          smooth: true,
          lerp: 0.07, // lower = smoother, slower
          multiplier: 1.2, // scroll speed
          class: "is-reveal", // when elements appear
          smartphone: {
            smooth: true, // enable on mobile
            lerp: 0.09,
            multiplier: 1.0,
          },
          tablet: {
            smooth: true,
            lerp: 0.08,
            multiplier: 1.0,
          },
        });

        // Update on resize
        const handleResize = () => scroll.update();
        window.addEventListener("resize", handleResize);

        return () => {
          window.removeEventListener("resize", handleResize);
          if (scroll) scroll.destroy();
        };
      }
    })();
  }, []);

  return <div data-scroll-container>{children}</div>;
}
