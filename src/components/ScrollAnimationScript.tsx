"use client";

import { useEffect } from 'react';

export function ScrollAnimationScript() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            const animationType = element.getAttribute('data-animate');
            const delay = parseInt(element.getAttribute('data-delay') || '0');
            
            if (animationType) {
              setTimeout(() => {
                element.classList.remove('scroll-hidden', 'scroll-hidden-scale');
                element.classList.add(`animate-${animationType}`);
              }, delay);
            }
          } else {
            // Re-hide element when it goes out of view (for re-triggering)
            const element = entry.target as HTMLElement;
            const animationType = element.getAttribute('data-animate');
            
            if (animationType) {
              element.classList.remove(`animate-${animationType}`);
              
              // Add appropriate hidden class based on animation type
              if (animationType === 'scale-fade-gentle') {
                element.classList.add('scroll-hidden-scale');
              } else {
                element.classList.add('scroll-hidden');
              }
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all elements with data-animate attribute
    const elementsToAnimate = document.querySelectorAll('[data-animate]');
    elementsToAnimate.forEach((element) => {
      const animationType = element.getAttribute('data-animate');
      
      // Set initial hidden state
      if (animationType === 'scale-fade-gentle') {
        element.classList.add('scroll-hidden-scale');
      } else {
        element.classList.add('scroll-hidden');
      }
      
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
