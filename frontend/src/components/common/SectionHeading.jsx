import React from 'react';
import Reveal from './Reveal';

/**
 * Standardized Section Heading (Single Source of Truth)
 * Compact typography, tight eyebrow, controlled subtitle width, and dense bottom margin.
 */
export default function SectionHeading({
  tag,
  heading,
  subtitle,
  centered = false,
  inverted = false,
  className = '',
  noMargin = false,
}) {
  return (
    <Reveal
      direction="up"
      duration={500}
      className={`space-y-0.5 sm:space-y-1 ${centered ? 'text-center mx-auto' : 'text-left'} ${
        noMargin ? '' : 'mb-3.5 sm:mb-4'
      } ${className}`}
    >
      {tag && (
        <div
          className={`flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold tracking-wider uppercase font-sans ${
            centered ? 'justify-center' : 'justify-start'
          } ${inverted ? 'text-gold-300' : 'text-bcsve-800'}`}
        >
          <span className="w-4 h-0.5 bg-gold-400 rounded-full inline-block shrink-0" />
          <span>{tag}</span>
        </div>
      )}

      <h2
        className={`font-sans text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight leading-tight ${
          inverted ? 'text-white' : 'text-bcsve-950'
        }`}
      >
        {heading}
      </h2>

      {subtitle && (
        <p
          className={`text-xs sm:text-[13px] max-w-xl font-sans leading-relaxed pt-0.5 ${
            centered ? 'mx-auto' : ''
          } ${inverted ? 'text-white/80' : 'text-gray-600'}`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
