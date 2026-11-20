import React from 'react';
import { siteData } from '../data/siteData';
import { siteImages } from '../assets/images';
import Reveal from './common/Reveal';
import TiltCard from './common/TiltCard';
import { Building2, ArrowRight, ShieldCheck } from 'lucide-react';

export default function AffiliationSection({ onOpenAffiliation }) {
  const { affiliations } = siteData;

  const affiliationImages = {
    aicte: siteImages.affiliationAicte,
    nabet: siteImages.affiliationNabet,
    nsdc: siteImages.affiliationNsdc,
    iso: siteImages.affiliationIso,
  };

  return (
    <section id="affiliations" className="py-3.5 sm:py-4 md:py-5 bg-cream-50/60 border-t border-bcsve-100/60 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 lg:gap-5 items-center">
          
          {/* Left Column: Our Affiliated Partners (Span 7) */}
          <div className="lg:col-span-7 space-y-2 text-left">
            <Reveal direction="left" duration={600}>
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold tracking-wider text-bcsve-800 uppercase font-sans">
                  <span className="w-5 h-0.5 bg-gold-400 rounded-full inline-block" />
                  <span>{affiliations.tag}</span>
                </div>
                <h2 className="font-sans text-lg sm:text-xl md:text-2xl font-extrabold text-bcsve-950 tracking-tight leading-tight">
                  {affiliations.heading}
                </h2>
              </div>
            </Reveal>

            {/* Badges Grid with Staggered Reveal & Lift - Clean Logos Without Box Placeholders */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-1 items-center">
              {affiliations.partnerBadges.map((badge, idx) => {
                const imgSrc = affiliationImages[badge.id];

                return (
                  <Reveal 
                    key={badge.id} 
                    direction="up" 
                    delay={idx * 60} 
                    duration={500}
                    className="h-full flex items-center justify-center"
                  >
                    <div className="flex items-center justify-center h-10 sm:h-12 w-full group font-sans cursor-pointer">
                      {imgSrc ? (
                        <img
                          src={imgSrc}
                          alt={`${badge.name} ${badge.label}`}
                          className="max-h-7 sm:max-h-8.5 w-auto object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-300"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full text-center font-sans">
                          <div className="w-4.5 h-4.5 mx-auto rounded-full bg-cream-100 border border-gold-200 flex items-center justify-center text-bcsve-800 mb-0.5 group-hover:rotate-12 transition-transform duration-300">
                            <ShieldCheck size={11} />
                          </div>
                          <span className="block text-[10px] font-bold text-bcsve-950 tracking-tight">
                            [ {badge.name} ]
                          </span>
                          <span className="block text-[8px] text-gray-500 font-medium">
                            {badge.label}
                          </span>
                        </div>
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Right Column: Upgraded Maroon "Become an Affiliated Centre" Card (Span 5) */}
          <div className="lg:col-span-5">
            <Reveal direction="right" delay={150} duration={650}>
              <TiltCard maxTilt={5}>
                <div className="rounded-xl bg-gradient-to-br from-bcsve-950 via-bcsve-900 to-bcsve-850 text-white p-3.5 sm:p-4 shadow-soft hover:shadow-elevated border border-bcsve-700/60 text-left relative overflow-hidden group font-sans transition-all duration-300">
                  
                  {/* Subtle background decorative pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(#DBBA6F_1.5px,transparent_1.5px)] [background-size:14px_14px] opacity-15 pointer-events-none" />
                  <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full bg-gold-500/15 blur-xl pointer-events-none animate-pulseGlow" />

                  <div className="relative z-10 space-y-2 font-sans">
                    <div className="w-7 h-7 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-gold-300 shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Building2 size={15} />
                    </div>

                    <div className="space-y-0.5">
                      <h3 className="font-sans font-bold text-sm sm:text-base text-white leading-snug">
                        {affiliations.becomeCentre.title}
                      </h3>
                      <p className="text-white/90 text-xs sm:text-[12.5px] leading-relaxed font-sans">
                        {affiliations.becomeCentre.description}
                      </p>
                    </div>

                    <div className="pt-0.5">
                      <button
                        onClick={onOpenAffiliation}
                        className="shimmer-sweep inline-flex items-center gap-1.5 px-3 py-1.5 min-h-[30px] rounded-lg bg-white hover:bg-cream-100 text-bcsve-950 font-bold text-xs sm:text-[12.5px] shadow-sm hover:shadow-card transition-all duration-200 hover:-translate-y-0.5 active:scale-95 group-hover:gap-2 font-sans"
                      >
                        <span>{affiliations.becomeCentre.cta}</span>
                        <ArrowRight size={12} className="text-bcsve-800 transition-transform duration-200 group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>

                </div>
              </TiltCard>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
}
