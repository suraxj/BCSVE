import React from 'react';
import { siteData } from '../data/siteData';
import Section from './common/Section';
import Container from './common/Container';
import SectionHeading from './common/SectionHeading';
import Reveal from './common/Reveal';
import { Building2 } from 'lucide-react';

export default function PlacementPartners() {
  const { placementPartners } = siteData;

  // Duplicate list for seamless infinite marquee loop
  const marqueeList = [
    ...placementPartners.recruiters,
    ...placementPartners.recruiters,
    ...placementPartners.recruiters,
  ];

  return (
    <Section id="placements" background="tint">
      <Container>
        
        {/* Section Heading */}
        <SectionHeading
          centered
          tag={placementPartners.tag}
          heading={placementPartners.heading}
          subtitle={placementPartners.subtitle}
        />

        {/* 3 Placement Highlights Strip */}
        <Reveal direction="up" duration={600}>
          <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 mb-3 sm:mb-3.5">
            {placementPartners.highlights.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-white border border-gold-200/90 p-2.5 sm:p-3 text-center shadow-xs hover:shadow-card hover:border-gold-300 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="text-base sm:text-lg font-extrabold text-bcsve-900 font-sans tracking-tight">
                  {item.value}
                </div>
                <div className="text-[10px] sm:text-[10.5px] font-semibold text-gray-600 pt-0.5">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Infinite Logo Marquee with Grayscale to Color & Pause on Hover */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] pt-0.5 pb-0.5">
          <div className="flex w-max items-center gap-3 animate-marquee hover:[animation-play-state:paused]">
            {marqueeList.map((partner, idx) => (
              <div
                key={`${partner.id}-${idx}`}
                className="bg-white rounded-xl border border-bcsve-100/90 px-3.5 py-1.5 shadow-xs hover:shadow-card hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2.5 min-w-[150px] sm:min-w-[170px] h-10 sm:h-11 group cursor-pointer"
              >
                <div className="w-7 h-7 rounded-lg bg-cream-50 border border-bcsve-100 flex items-center justify-center text-gray-500 group-hover:text-bcsve-800 group-hover:bg-bcsve-50 transition-colors shrink-0">
                  <Building2 size={14} />
                </div>
                <div className="text-left font-sans">
                  <span className="block text-xs sm:text-[12.5px] font-bold text-gray-800 group-hover:text-bcsve-950 transition-colors leading-tight line-clamp-1">
                    {partner.name}
                  </span>
                  <span className="block text-[9px] text-gray-400 font-medium group-hover:text-gold-700 transition-colors line-clamp-1">
                    {partner.sector}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </Container>
    </Section>
  );
}
