import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { siteImages } from '../assets/images';
import Section from './common/Section';
import Container from './common/Container';
import SectionHeading from './common/SectionHeading';
import Reveal from './common/Reveal';
import TiltCard from './common/TiltCard';
import { 
  HeartPulse, 
  Laptop, 
  TrendingUp, 
  Wrench, 
  Clock, 
  FileText, 
  Monitor, 
  ArrowRight 
} from 'lucide-react';

const programIcons = {
  HeartPulse,
  Laptop,
  TrendingUp,
  Wrench,
};

const programImageMap = {
  healthcare: siteImages.programHealthcare,
  technology: siteImages.programIT,
  business: siteImages.programBusiness,
  vocational: siteImages.programVocational,
};

export default function ProgramsSection({ onOpenEnquiry }) {
  const { programs } = siteData;
  const [activeCategory, setActiveCategory] = useState("All Programs");

  const filteredPrograms = activeCategory === "All Programs"
    ? programs.items
    : programs.items.filter(item => item.category === activeCategory);

  return (
    <Section id="programs" background="tint">
      <Container>
        
        {/* Section Header with Category Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2.5 mb-3.5 sm:mb-4">
          <SectionHeading
            tag={programs.tag}
            heading={programs.heading}
            subtitle="Industry-aligned curriculum certified by national frameworks and recognized councils."
            noMargin
            className="flex-1"
          />

          {/* Category Filter Pills */}
          <Reveal direction="up" delay={100} duration={600} className="overflow-x-auto no-scrollbar pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 shrink-0">
            <div className="flex items-center gap-1 p-0.5 bg-white rounded-lg border border-bcsve-100 shadow-xs shrink-0">
              {programs.categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-3 py-1 min-h-[30px] rounded-md text-[11px] sm:text-xs font-semibold transition-all duration-300 font-sans whitespace-nowrap z-10 ${
                    activeCategory === cat
                      ? 'text-white'
                      : 'text-gray-700 hover:text-bcsve-950 hover:bg-cream-100/60'
                  }`}
                >
                  {activeCategory === cat && (
                    <span 
                      className="absolute inset-0 bg-bcsve-800 rounded-md shadow-xs -z-10 animate-popIn" 
                      aria-hidden="true"
                    />
                  )}
                  <span>{cat}</span>
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Programs Grid with 3D TiltCards & Staggered Reveal */}
        <div 
          key={activeCategory} 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 animate-fadeIn"
        >
          {filteredPrograms.map((program, idx) => {
            const Icon = programIcons[program.icon] || Laptop;
            const imgSrc = programImageMap[program.id];

            return (
              <Reveal 
                key={program.id} 
                direction="up" 
                delay={idx * 70} 
                duration={550} 
                className="h-full"
              >
                <TiltCard maxTilt={5} className="h-full">
                  <div className="bg-white rounded-xl overflow-hidden border border-bcsve-100/90 shadow-xs hover:shadow-card hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group font-sans h-full">
                    
                    {/* Course Image */}
                    <div className="relative p-2 bg-cream-50/50">
                      <div className="relative aspect-16/9 rounded-lg overflow-hidden">
                        {imgSrc ? (
                          <img
                            src={imgSrc}
                            alt={program.title}
                            className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                            width={320}
                            height={180}
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full rounded-lg bg-gradient-to-br from-bcsve-900 via-bcsve-850 to-gold-700 flex items-center justify-center text-white">
                            <Wrench size={20} className="stroke-[2.2] text-gold-300" />
                          </div>
                        )}
                        <span className="absolute top-1.5 left-1.5 bg-white/95 backdrop-blur-sm text-bcsve-950 text-[9.5px] font-bold px-1.5 py-0.5 rounded border border-bcsve-100 shadow-xs">
                          {program.category}
                        </span>
                      </div>
                    </div>

                    {/* Card Content & Details */}
                    <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between text-left gap-3 font-sans">
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-1.5 text-bcsve-800">
                          <Icon size={14} className="stroke-[2.2] shrink-0 group-hover:rotate-6 transition-transform duration-300" />
                          <h3 className="font-sans font-bold text-xs sm:text-[13px] text-bcsve-950 tracking-tight leading-snug line-clamp-2 group-hover:text-bcsve-800 transition-colors">
                            {program.title}
                          </h3>
                        </div>

                        {/* Metadata Row */}
                        <div className="flex items-center flex-wrap gap-x-2 gap-y-0.5 text-[10.5px] text-gray-600 font-sans pt-0.5">
                          <span className="inline-flex items-center gap-1 font-medium text-gray-700">
                            <Clock size={11} className="text-bcsve-700 shrink-0" />
                            {program.duration}
                          </span>
                          <span className="text-gray-300">•</span>
                          <span className="inline-flex items-center gap-1 font-medium text-gray-700">
                            <FileText size={11} className="text-bcsve-700 shrink-0" />
                            {program.type}
                          </span>
                          <span className="text-gray-300">•</span>
                          <span className="inline-flex items-center gap-1 font-medium text-gray-700">
                            <Monitor size={11} className="text-bcsve-700 shrink-0" />
                            {program.mode}
                          </span>
                        </div>
                      </div>

                      {/* Enquire Button pushed to bottom */}
                      <div className="pt-2 border-t border-bcsve-100/60 mt-auto">
                        <button
                          onClick={() => onOpenEnquiry && onOpenEnquiry(program.title)}
                          className="shimmer-sweep w-full min-h-[34px] h-8.5 px-3 rounded-lg border border-bcsve-800 text-bcsve-800 hover:bg-bcsve-800 hover:text-white transition-all duration-200 text-xs font-bold flex items-center justify-center gap-1 shadow-xs font-sans active:scale-[0.98]"
                        >
                          <span>Enquire Now</span>
                          <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-1" />
                        </button>
                      </div>

                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>

      </Container>
    </Section>
  );
}
