import React from 'react';

const bgClasses = {
  white: 'bg-white',
  tint: 'bg-cream-50/70',
  cream: 'bg-cream-50',
  brand: 'bg-bcsve-950 text-white',
  brandGradient: 'bg-gradient-to-br from-bcsve-950 via-bcsve-900 to-bcsve-850 text-white',
  transparent: 'bg-transparent',
};

const borderClasses = {
  top: 'border-t border-bcsve-100/70',
  bottom: 'border-b border-bcsve-100/70',
  both: 'border-y border-bcsve-100/70',
  none: '',
};

/**
 * Shared Section Component (Single Source of Truth)
 * Compact & dense vertical rhythm across all homepage sections:
 * - standard: py-4 sm:py-5 md:py-6 (compact, tight vertical spacing with no unwanted gaps)
 * - compact: py-2 sm:py-2.5 (for ribbon strips, stats bar, newsletter)
 * Backgrounds span 100% viewport width while inner content is constrained via Container.
 */
export default function Section({
  id,
  background = 'white',
  variant = 'standard',
  border = 'top',
  className = '',
  children,
  ...props
}) {
  const bg = bgClasses[background] || background;
  const padding = variant === 'compact' 
    ? 'py-2 sm:py-2.5' 
    : 'py-4 sm:py-5 md:py-6';
  const borderClass = borderClasses[border] || (border ? 'border-t border-bcsve-100/70' : '');

  return (
    <section
      id={id}
      className={`relative scroll-mt-14 sm:scroll-mt-16 font-sans overflow-hidden ${bg} ${padding} ${borderClass} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}
