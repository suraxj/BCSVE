import React from 'react';
import { useInView } from '../../hooks/useInView';

/**
 * Reusable Reveal wrapper component for scroll-triggered GPU animations.
 *
 * @param {Object} props
 * @param {'up' | 'down' | 'left' | 'right' | 'zoom' | 'blur'} [props.direction='up'] - Direction of entrance.
 * @param {number} [props.delay=0] - Delay in milliseconds before animating.
 * @param {number} [props.duration=650] - Animation duration in milliseconds.
 * @param {number} [props.threshold=0.15] - Observer visibility threshold.
 * @param {string} [props.className=''] - Additional class names.
 * @param {React.ReactNode} props.children - Child elements.
 */
export default function Reveal({
  direction = 'up',
  delay = 0,
  duration = 650,
  threshold = 0.15,
  className = '',
  children,
  ...rest
}) {
  const [ref, isInView] = useInView({ threshold, triggerOnce: true });

  const getInitialTransform = () => {
    switch (direction) {
      case 'up':
        return 'translate3d(0, 28px, 0)';
      case 'down':
        return 'translate3d(0, -28px, 0)';
      case 'left':
        return 'translate3d(-32px, 0, 0)';
      case 'right':
        return 'translate3d(32px, 0, 0)';
      case 'zoom':
        return 'scale3d(0.92, 0.92, 1)';
      case 'blur':
        return 'translate3d(0, 16px, 0)';
      default:
        return 'translate3d(0, 24px, 0)';
    }
  };

  const style = {
    opacity: isInView ? 1 : 0,
    transform: isInView ? 'translate3d(0, 0, 0) scale3d(1, 1, 1)' : getInitialTransform(),
    filter: direction === 'blur' ? (isInView ? 'blur(0px)' : 'blur(8px)') : 'none',
    transitionProperty: 'opacity, transform, filter',
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: 'var(--anim-ease-out, cubic-bezier(0.22, 1, 0.36, 1))',
    transitionDelay: `${delay}ms`,
    willChange: 'opacity, transform',
  };

  return (
    <div ref={ref} style={style} className={className} {...rest}>
      {children}
    </div>
  );
}
