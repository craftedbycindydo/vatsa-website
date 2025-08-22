"use client";

import { useEffect, useRef } from 'react';

export type AnimationType = 'fade-up-soft' | 'scale-fade-gentle' | 'card-entrance';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
}

export function useScrollAnimation<T extends HTMLElement = HTMLElement>(
  animationType: AnimationType = 'fade-up-soft',
  options: UseScrollAnimationOptions = {}
) {
  const elementRef = useRef<T>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = false,
    delay = 0
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set initial hidden state based on animation type
    const hiddenClass = animationType === 'scale-fade-gentle' ? 'scroll-hidden-scale' : 'scroll-hidden';
    element.classList.add(hiddenClass);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Apply animation with optional delay
            setTimeout(() => {
              entry.target.classList.remove('scroll-hidden', 'scroll-hidden-scale');
              entry.target.classList.add(`animate-${animationType}`);
              
              if (triggerOnce) {
                observerRef.current?.unobserve(entry.target);
              }
            }, delay);
          } else if (!triggerOnce) {
            // Re-hide element when it goes out of view (for re-triggering)
            entry.target.classList.remove(`animate-${animationType}`);
            entry.target.classList.add(hiddenClass);
          }
        });
      },
      {
        threshold,
        rootMargin
      }
    );

    observerRef.current.observe(element);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [animationType, threshold, rootMargin, triggerOnce, delay]);

  return elementRef;
}

// Batch animation hook for multiple elements
export function useScrollAnimationBatch<T extends HTMLElement = HTMLElement>(
  elements: Array<{ ref: React.RefObject<T>; type: AnimationType; delay?: number }>,
  options: UseScrollAnimationOptions = {}
) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = false
  } = options;

  useEffect(() => {
    // Set initial states
    elements.forEach(({ ref, type }) => {
      const element = ref.current;
      if (element) {
        const hiddenClass = type === 'scale-fade-gentle' ? 'scroll-hidden-scale' : 'scroll-hidden';
        element.classList.add(hiddenClass);
      }
    });

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const elementConfig = elements.find(({ ref }) => ref.current === entry.target);
          if (!elementConfig) return;

          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.remove('scroll-hidden', 'scroll-hidden-scale');
              entry.target.classList.add(`animate-${elementConfig.type}`);
              
              if (triggerOnce) {
                observerRef.current?.unobserve(entry.target);
              }
            }, elementConfig.delay || 0);
          } else if (!triggerOnce) {
            entry.target.classList.remove(`animate-${elementConfig.type}`);
            const hiddenClass = elementConfig.type === 'scale-fade-gentle' ? 'scroll-hidden-scale' : 'scroll-hidden';
            entry.target.classList.add(hiddenClass);
          }
        });
      },
      { threshold, rootMargin }
    );

    elements.forEach(({ ref }) => {
      if (ref.current) {
        observerRef.current?.observe(ref.current);
      }
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [elements, threshold, rootMargin, triggerOnce]);
}
