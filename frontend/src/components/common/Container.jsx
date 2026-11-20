import React from 'react';

/**
 * Shared Container Component (Single Source of Truth)
 * Max width: 1280px (max-w-7xl)
 * Centered: mx-auto
 * Horizontal padding: 16px mobile (px-4), 24px sm/md (sm:px-6), 32px lg+ (lg:px-8)
 * Ensures every section, navbar, announcement bar, and footer aligns on identical left/right vertical axes.
 */
export default function Container({ children, className = '', ...props }) {
  return (
    <div
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
