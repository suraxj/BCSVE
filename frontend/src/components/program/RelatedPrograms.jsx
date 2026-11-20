import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, HeartPulse, Laptop, TrendingUp, Wrench, Clock } from 'lucide-react';
import { siteImages } from '../../assets/images';

const programMeta = [
  {
    slug: 'healthcare-wellness',
    title: 'Healthcare & Wellness',
    category: 'Healthcare',
    duration: '3 - 12 Months',
    icon: HeartPulse,
    image: siteImages.programHealthcare,
    desc: 'Clinical patient care, nursing assistance, phlebotomy, and wellness.'
  },
  {
    slug: 'information-technology',
    title: 'Information Technology',
    category: 'Technology',
    duration: '3 - 12 Months',
    icon: Laptop,
    image: siteImages.programIT,
    desc: 'Computing applications, modern web development, Tally GST, and cyber safety.'
  },
  {
    slug: 'business-management',
    title: 'Business & Management',
    category: 'Business',
    duration: '3 - 12 Months',
    icon: TrendingUp,
    image: siteImages.programBusiness,
    desc: 'Business administration, financial accounting, retail operations, and entrepreneurship.'
  },
  {
    slug: 'vocational-applied-trades',
    title: 'Vocational & Applied Trades',
    category: 'Vocational',
    duration: '3 - 12 Months',
    icon: Wrench,
    image: null,
    desc: 'Building electrification, modern plumbing, automotive diagnostics, and clean solar tech.'
  }
];

export default function RelatedPrograms({ currentSlug }) {
  const others = programMeta.filter((p) => p.slug !== currentSlug);

  return (
    <div className="space-y-4 font-sans text-left">
      <div>
        <span className="text-[10px] font-bold tracking-wider text-gold-600 uppercase font-sans">
          Explore Other Sectors
        </span>
        <h3 className="text-base sm:text-lg font-bold text-bcsve-950 font-sans">
          Related Vocational Programs
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
        {others.map((prog) => {
          const Icon = prog.icon;
          return (
            <Link
              key={prog.slug}
              to={`/programs/${prog.slug}`}
              className="group bg-white rounded-xl border border-bcsve-100/90 shadow-xs hover:shadow-card hover:-translate-y-0.5 transition-all duration-300 p-3.5 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-bcsve-50 flex items-center justify-center text-bcsve-800 group-hover:bg-bcsve-800 group-hover:text-white transition-colors">
                    <Icon size={16} />
                  </div>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-cream-100 text-bcsve-900">
                    {prog.category}
                  </span>
                </div>

                <h4 className="font-bold text-xs sm:text-[13px] text-bcsve-950 group-hover:text-bcsve-800 transition-colors">
                  {prog.title}
                </h4>

                <p className="text-[11px] text-gray-600 line-clamp-2 leading-relaxed">
                  {prog.desc}
                </p>
              </div>

              <div className="pt-2.5 mt-2.5 border-t border-bcsve-50 flex items-center justify-between text-[11px] text-bcsve-800 font-bold">
                <span className="flex items-center gap-1 text-gray-500 font-medium text-[10.5px]">
                  <Clock size={11} className="text-bcsve-700" />
                  {prog.duration}
                </span>
                <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Explore <ArrowRight size={11} />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
