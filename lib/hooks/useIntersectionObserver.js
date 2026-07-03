"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Custom hook for intersection observer
 * @param {Object} options - IntersectionObserver options
 * @returns {Object} { ref, hasIntersected }
 */
export function useIntersectionObserver(options = {}) {
  const ref = useRef(null);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let triggered = false;
    const observer = new IntersectionObserver(
      (entries) => {
        if (triggered || !entries[0].isIntersecting) return;
        triggered = true;
        setHasIntersected(true);
        observer.disconnect();
      },
      { threshold: 0.5, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return { ref, hasIntersected };
}
