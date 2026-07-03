"use client";

import { useEffect, useRef } from "react";

/**
 * Custom hook for animated number counting
 * @param {number} target - Target number to count to
 * @param {number} duration - Animation duration in milliseconds
 * @returns {React.RefObject} Ref to attach to the element
 */
export function useAnimatedCounter(target, duration = 1600) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let triggered = false;
    const observer = new IntersectionObserver(
      (entries) => {
        if (triggered || !entries[0].isIntersecting) return;
        triggered = true;
        observer.disconnect();

        let start = null;

        function step(ts) {
          if (!start) start = ts;
          const progress = Math.min((ts - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(eased * target);
          el.textContent = `${current.toLocaleString()}+`;
          if (progress < 1) requestAnimationFrame(step);
          else el.textContent = `${target.toLocaleString()}+`;
        }

        requestAnimationFrame(step);
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return ref;
}
