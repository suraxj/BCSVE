import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook to detect when an element enters the viewport using IntersectionObserver.
 * Triggers once by default (stays true) to prevent unnecessary re-animations on scroll-up.
 *
 * @param {Object} options
 * @param {number} [options.threshold=0.15] - Percentage of target visible before triggering.
 * @param {string} [options.rootMargin='0px 0px -40px 0px'] - Viewport boundary offset.
 * @param {boolean} [options.triggerOnce=true] - Only trigger once.
 * @returns {[import('react').RefObject<HTMLElement|null>, boolean]} [ref, isInView]
 */
export function useInView(options = {}) {
  const {
    threshold = 0.15,
    rootMargin = '0px 0px -40px 0px',
    triggerOnce = true,
  } = options;

  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [elementRef, isInView];
}

export default useInView;
