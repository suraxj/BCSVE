import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const programOrder = [
  { slug: 'healthcare-wellness', title: 'Healthcare & Wellness' },
  { slug: 'information-technology', title: 'Information Technology' },
  { slug: 'business-management', title: 'Business & Management' },
  { slug: 'vocational-applied-trades', title: 'Vocational & Applied Trades' },
];

export default function ProgramNavFooter({ currentSlug }) {
  const currentIndex = programOrder.findIndex((p) => p.slug === currentSlug);
  if (currentIndex === -1) return null;

  const prev = currentIndex > 0 ? programOrder[currentIndex - 1] : programOrder[programOrder.length - 1];
  const next = currentIndex < programOrder.length - 1 ? programOrder[currentIndex + 1] : programOrder[0];

  return (
    <div className="flex items-center justify-between border-t border-bcsve-100/90 pt-4 mt-8 font-sans">
      <Link
        to={`/programs/${prev.slug}`}
        className="group inline-flex items-center gap-2 p-2 rounded-lg text-left hover:bg-cream-100 transition-colors"
      >
        <div className="w-8 h-8 rounded-full bg-white border border-bcsve-200 flex items-center justify-center text-bcsve-800 group-hover:-translate-x-1 transition-transform">
          <ArrowLeft size={14} />
        </div>
        <div className="hidden sm:block">
          <span className="block text-[10px] text-gray-500 font-medium">Previous Program</span>
          <span className="block text-xs font-bold text-bcsve-950 group-hover:text-bcsve-800 transition-colors">
            {prev.title}
          </span>
        </div>
      </Link>

      <Link
        to="/#programs"
        className="text-xs font-semibold text-bcsve-800 hover:underline px-3 py-1"
      >
        View All Programs
      </Link>

      <Link
        to={`/programs/${next.slug}`}
        className="group inline-flex items-center gap-2 p-2 rounded-lg text-right hover:bg-cream-100 transition-colors"
      >
        <div className="hidden sm:block">
          <span className="block text-[10px] text-gray-500 font-medium">Next Program</span>
          <span className="block text-xs font-bold text-bcsve-950 group-hover:text-bcsve-800 transition-colors">
            {next.title}
          </span>
        </div>
        <div className="w-8 h-8 rounded-full bg-white border border-bcsve-200 flex items-center justify-center text-bcsve-800 group-hover:translate-x-1 transition-transform">
          <ArrowRight size={14} />
        </div>
      </Link>
    </div>
  );
}
