import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

/**
 * ImagePlaceholder component.
 * Displays a clean, beautifully styled text placeholder when no image src is provided,
 * or the actual image when `src` is present.
 */
export default function ImagePlaceholder({
  src,
  alt = 'Image placeholder',
  label = 'Image Placeholder',
  dimensions = '',
  className = '',
  aspectRatio = '',
  rounded = 'rounded-2xl',
  badgeText = '',
  icon: CustomIcon = null,
  showNote = true,
}) {
  if (src) {
    const objectFitClass = className.includes('object-') ? '' : 'object-cover';
    return (
      <img
        src={src}
        alt={alt || label}
        className={`${rounded} ${objectFitClass} ${className}`}
        loading="lazy"
      />
    );
  }

  const IconComponent = CustomIcon || ImageIcon;

  return (
    <div
      className={`relative flex flex-col items-center justify-center text-center p-4 
      bg-gradient-to-br from-cream-50 via-bcsve-50/40 to-cream-100 
      border border-dashed border-bcsve-200 hover:border-bcsve-400 
      transition-all duration-300 group overflow-hidden ${rounded} ${aspectRatio} ${className}`}
      title={`Placeholder for: ${label}${dimensions ? ` (${dimensions})` : ''}`}
    >
      {/* Background watermark icon */}
      <div className="absolute -right-3 -bottom-3 opacity-5 pointer-events-none text-bcsve-900">
        <IconComponent size={100} />
      </div>

      {badgeText && (
        <span className="absolute top-2.5 right-2.5 text-xs font-semibold tracking-wider uppercase px-2 py-0.5 rounded-lg bg-bcsve-100 text-bcsve-800 border border-bcsve-200">
          {badgeText}
        </span>
      )}

      <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-bcsve-100 flex items-center justify-center text-bcsve-700 mb-2 group-hover:scale-105 transition-transform">
        <IconComponent size={18} />
      </div>

      <p className="text-xs font-semibold text-bcsve-950 px-1 leading-tight">
        [ <span className="text-bcsve-800">{label}</span> ]
      </p>

      {dimensions && (
        <span className="mt-1 text-xs font-mono text-gray-500 bg-white/80 px-2 py-0.5 rounded border border-gray-200/80">
          {dimensions}
        </span>
      )}

      {showNote && (
        <span className="mt-1 text-xs text-bcsve-600/80 font-medium">
          Ready for image
        </span>
      )}
    </div>
  );
}
