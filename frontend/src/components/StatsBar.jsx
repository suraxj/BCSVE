import React from 'react';
import { siteData } from '../data/siteData';
import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';
import { Users, BookOpen, MapPin, Trophy } from 'lucide-react';

const iconMap = {
  Users,
  BookOpen,
  MapPin,
  Trophy,
};

function StatItem({ stat, idx, isVisible }) {
  const Icon = iconMap[stat.icon] || Trophy;
  const animatedValue = useCountUp(stat.value, isVisible, 1600);

  return (
    <div
      className={`group flex items-center justify-start sm:justify-center gap-2.5 ${
        idx > 0 && idx % 2 === 0 ? 'pt-1.5 md:pt-0' : ''
      } ${idx % 2 === 1 ? 'pt-1.5 md:pt-0' : ''} px-2 sm:px-3 py-1 rounded-lg hover:bg-cream-100/60 hover:-translate-y-0.5 transition-all duration-200 cursor-default`}
    >
      <div className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-lg bg-cream-100/80 flex items-center justify-center text-bcsve-800 shadow-sm border border-cream-200/90 shrink-0 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-gold-100/80 transition-all duration-300">
        <Icon size={14} className="stroke-[2.2]" />
      </div>
      <div className="text-left font-sans">
        <div className="font-sans font-extrabold text-base sm:text-lg lg:text-xl text-bcsve-950 tracking-tight leading-none group-hover:text-bcsve-800 transition-colors">
          {animatedValue}
        </div>
        <div className="text-[8.5px] sm:text-[9.5px] font-semibold text-gray-500 uppercase tracking-wider mt-0.5 font-sans">
          {stat.label}
        </div>
      </div>
    </div>
  );
}

export default function StatsBar() {
  const { stats } = siteData;
  const [containerRef, isInView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section 
      ref={containerRef}
      className={`relative -mt-3.5 sm:-mt-4 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans transition-all duration-700 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      <div className="bg-white/95 rounded-xl shadow-card hover:shadow-elevated border border-bcsve-100/80 p-2 sm:p-2.5 backdrop-blur-sm transition-shadow duration-300">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {stats.map((stat, idx) => (
            <StatItem 
              key={stat.label} 
              stat={stat} 
              idx={idx} 
              isVisible={isInView} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
