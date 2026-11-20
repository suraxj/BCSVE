import { useState, useEffect, useRef } from 'react';

/**
 * Parses numeric strings like "12,000+", "98%", "250+", "₹5,000" into parts.
 *
 * @param {string} rawString
 * @returns {{ prefix: string, targetNum: number, suffix: string, hasComma: boolean, decimals: number }}
 */
function parseValueString(rawString) {
  const str = String(rawString).trim();
  // Match prefix, number (with optional commas and decimals), and suffix
  const match = str.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);

  if (!match) {
    return {
      prefix: '',
      targetNum: 0,
      suffix: str,
      hasComma: false,
      decimals: 0,
    };
  }

  const prefix = match[1] || '';
  const numStr = match[2] || '0';
  const suffix = match[3] || '';
  const hasComma = numStr.includes(',');
  const cleanNumStr = numStr.replace(/,/g, '');
  const targetNum = parseFloat(cleanNumStr) || 0;
  const decimals = cleanNumStr.includes('.') ? cleanNumStr.split('.')[1].length : 0;

  return { prefix, targetNum, suffix, hasComma, decimals };
}

/**
 * Easing function: easeOutExpo for a punchy start and buttery deceleration.
 */
function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

/**
 * Hook to animate counting up numbers once an element is visible.
 *
 * @param {string|number} targetValue - e.g. "12,000+", "98%", "250+"
 * @param {boolean} isVisible - Trigger condition (e.g. from useInView)
 * @param {number} [duration=1600] - Total animation duration in ms
 * @returns {string} - Formatted current value string
 */
export function useCountUp(targetValue, isVisible = true, duration = 1600) {
  const [displayValue, setDisplayValue] = useState(() => {
    // If not visible initially, show 0 with prefix/suffix
    const { prefix, suffix } = parseValueString(targetValue);
    return isVisible ? String(targetValue) : `${prefix}0${suffix}`;
  });

  const frameRef = useRef(null);
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (!isVisible) return;

    // Check prefers-reduced-motion
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setDisplayValue(String(targetValue));
      return;
    }

    const { prefix, targetNum, suffix, hasComma, decimals } = parseValueString(targetValue);

    if (targetNum === 0) {
      setDisplayValue(String(targetValue));
      return;
    }

    const step = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);

      const currentNum = easedProgress * targetNum;
      let formattedNum = decimals > 0 ? currentNum.toFixed(decimals) : Math.round(currentNum).toString();

      if (hasComma) {
        const parts = formattedNum.split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        formattedNum = parts.join('.');
      }

      setDisplayValue(`${prefix}${formattedNum}${suffix}`);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      } else {
        setDisplayValue(String(targetValue));
      }
    };

    frameRef.current = requestAnimationFrame(step);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [targetValue, isVisible, duration]);

  return displayValue;
}

export default useCountUp;
