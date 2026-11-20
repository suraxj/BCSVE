import React from 'react';
import { siteData } from '../data/siteData';
import { useInView } from '../hooks/useInView';
import Reveal from './common/Reveal';
import { Laptop, FileCheck, BookOpenCheck, Award } from 'lucide-react';

const stepIcons = {
  Laptop,
  FileCheck,
  BookOpenCheck,
  Award,
};

export default function HowItWorks() {
  const { howItWorks } = siteData;
  const [sectionRef, isInView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section ref={sectionRef} className="py-3.5 sm:py-4 md:py-5 bg-cream-50/60 border-t border-bcsve-100/60 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Left-aligned with Logo */}
        <Reveal direction="up" duration={600} className="text-left space-y-1 mb-3.5 sm:mb-4">
          <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold tracking-wider text-bcsve-800 uppercase font-sans">
            <span className="w-5 h-0.5 bg-gold-400 rounded-full inline-block" />
            <span>{howItWorks.tag}</span>
          </div>
          <h2 className="font-sans text-lg sm:text-xl md:text-2xl font-extrabold text-bcsve-950 tracking-tight leading-tight">
            {howItWorks.heading}
          </h2>
        </Reveal>

        {/* 4 Steps Row with Animated Connector Line */}
        <div className="relative">
          
          {/* Desktop Horizontal Connector Line that draws itself on scroll */}
          <div 
            className={`hidden md:block absolute top-[19px] sm:top-[21px] left-[10%] right-[10%] h-0.5 border-t border-dashed border-bcsve-300 pointer-events-none z-0 transition-transform duration-1000 ease-out origin-left ${
              isInView ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
            }`}
          />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-3 relative z-10">
            {howItWorks.steps.map((step, idx) => {
              const Icon = stepIcons[step.icon] || Award;

              return (
                <Reveal 
                  key={step.stepNumber} 
                  direction="up" 
                  delay={idx * 110} 
                  duration={500}
                  className="flex flex-col items-start sm:items-center text-left sm:text-center group font-sans relative"
                >
                  {/* Step Icon Tile */}
                  <div className="relative mb-2">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-bcsve-100 group-hover:border-bcsve-800 shadow-sm group-hover:shadow-card group-hover:-translate-y-1 transition-all duration-300 flex items-center justify-center text-bcsve-800 group-hover:bg-gold-50/80">
                      <Icon size={17} className="stroke-[2.2] group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    {/* Numbered Badge with Pop-in & Pulse */}
                    <span 
                      style={{ animationDelay: `${idx * 120 + 200}ms` }}
                      className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-bcsve-800 text-white text-[8.5px] font-bold flex items-center justify-center border border-white shadow-sm font-sans animate-popIn group-hover:scale-110 group-hover:bg-gold-600 transition-transform duration-200"
                    >
                      {idx + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-sans font-bold text-xs sm:text-[13px] text-bcsve-950 mb-0.5 group-hover:text-bcsve-800 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-gray-600 leading-relaxed max-w-[200px] font-sans">
                    {step.description}
                  </p>
                </Reveal>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
