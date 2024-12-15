import React, { useEffect, useRef } from 'react';
import { useAnimation } from 'framer-motion';

export function useScrollAnimation(threshold = 0.2) {
  const controls = useAnimation();
  const ref = useRef(null); // Remove TypeScript-specific typing

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        } else {
          controls.start('hidden');
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [controls, threshold]);

  return [ref, controls]; // JSX doesn't use `as const`
}
