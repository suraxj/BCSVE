import React, { useState, useRef, useEffect } from 'react';

/**
 * 3D Tilt Wrapper with dynamic specular glare highlight.
 * Automatically disabled on touch screens and under prefers-reduced-motion.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.className='']
 * @param {number} [props.maxTilt=8] - Maximum degrees of rotation.
 * @param {number} [props.perspective=900] - Perspective distance in px.
 * @param {boolean} [props.glare=true] - Whether to render interactive glare highlight.
 */
export default function TiltCard({
  children,
  className = '',
  maxTilt = 8,
  perspective = 900,
  glare = true,
  ...rest
}) {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('');
  const [glareStyle, setGlareStyle] = useState({ opacity: 0 });
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hoverQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
      const motionQuery = window.matchMedia('(prefers-reduced-motion: no-preference)');
      setCanHover(hoverQuery.matches && motionQuery.matches);

      const handleChange = () => {
        setCanHover(hoverQuery.matches && motionQuery.matches);
      };

      hoverQuery.addEventListener('change', handleChange);
      motionQuery.addEventListener('change', handleChange);

      return () => {
        hoverQuery.removeEventListener('change', handleChange);
        motionQuery.removeEventListener('change', handleChange);
      };
    }
  }, []);

  const handleMouseMove = (e) => {
    if (!canHover || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = x / rect.width;
    const yPercent = y / rect.height;

    // Calculate rotation angles
    const rotateX = (0.5 - yPercent) * 2 * maxTilt;
    const rotateY = (xPercent - 0.5) * 2 * maxTilt;

    setTransformStyle(
      `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`
    );

    if (glare) {
      setGlareStyle({
        opacity: 0.18,
        background: `radial-gradient(circle at ${xPercent * 100}% ${yPercent * 100}%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 60%)`,
        transition: 'opacity 150ms ease-out',
      });
    }
  };

  const handleMouseLeave = () => {
    if (!canHover) return;

    setTransformStyle(`perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`);
    if (glare) {
      setGlareStyle({
        opacity: 0,
        transition: 'opacity 300ms ease-out',
      });
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle || undefined,
        transformStyle: 'preserve-3d',
        transition: transformStyle ? 'transform 180ms ease-out' : 'transform 400ms var(--anim-ease-out)',
        willChange: canHover ? 'transform' : 'auto',
      }}
      className={`relative ${className}`}
      {...rest}
    >
      {children}

      {/* Dynamic Glare Highlight */}
      {glare && canHover && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] z-30 transition-opacity duration-300"
          style={glareStyle}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
