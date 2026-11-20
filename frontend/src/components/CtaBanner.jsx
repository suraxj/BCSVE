import React from 'react';
import { siteData } from '../data/siteData';
import { siteImages } from '../assets/images';
import Reveal from './common/Reveal';
import TiltCard from './common/TiltCard';
import ImagePlaceholder from './common/ImagePlaceholder';
import { ArrowRight, Award } from 'lucide-react';

export default function CtaBanner({ onOpenApply }) {
  const { ctaBanner } = siteData;

  return (
    <section className="py-3.5 sm:py-4 bg-cream-50/60 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal direction="up" duration={650}>
          {/* Compact Maroon Animated Gradient Banner */}
          <div className="relative rounded-xl bg-gradient-to-r from-bcsve-950 via-bcsve-900 to-bcsve-850 bg-[length:200%_200%] animate-gradientShift border border-bcsve-700/60 p-3.5 sm:p-4.5 shadow-soft hover:shadow-elevated transition-shadow duration-300 overflow-hidden text-white font-sans">
            
            {/* Subtle gold decorative background highlights */}
            <div className="absolute inset-0 bg-[radial-gradient(#DBBA6F_1.5px,transparent_1.5px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
            <div className="absolute -left-8 -bottom-8 w-36 h-36 rounded-full bg-gold-500/15 blur-xl pointer-events-none animate-pulseGlow" />

            <div className="flex flex-col lg:flex-row items-center justify-between gap-3.5 relative z-10 font-sans">
              
              {/* Left: Crest Image & Headline */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-3 text-center sm:text-left">
                
                {/* Crest Badge Image with 3D Float */}
                <TiltCard maxTilt={8} className="shrink-0">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-white/10 backdrop-blur-sm p-1 shadow-sm border border-white/20 flex items-center justify-center overflow-hidden animate-float-2 group cursor-pointer hover:border-gold-300 transition-colors">
                    {siteImages.ctaEmblem ? (
                      <img
                        src={siteImages.ctaEmblem}
                        alt="BCSVE Shield Crest Emblem"
                        className="w-full h-full object-cover rounded-md group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                    ) : (
                      <ImagePlaceholder
                        src={null}
                        label="BCSVE Crest"
                        dimensions="80 × 80 px"
                        className="w-full h-full rounded-md"
                        icon={Award}
                        showNote={false}
                      />
                    )}
                  </div>
                </TiltCard>

                {/* Text */}
                <div className="space-y-0.5">
                  <h3 className="font-sans text-base sm:text-lg lg:text-xl font-extrabold text-white tracking-tight leading-snug">
                    {ctaBanner.headlineLead}{' '}
                    <span className="text-gold-300 underline decoration-gold-400 decoration-2 underline-offset-4 shimmer-gold-wave">
                      {ctaBanner.headlineHighlight}
                    </span>
                  </h3>
                  <p className="text-[11px] sm:text-xs text-white/90 max-w-md font-sans leading-relaxed">
                    {ctaBanner.description}
                  </p>
                </div>

              </div>

              {/* Right: White CTA Button with Shimmer Sweep & Glow */}
              <div className="shrink-0">
                <button
                  onClick={onOpenApply}
                  className="shimmer-sweep group relative inline-flex items-center justify-center gap-1.5 px-4 py-1.5 min-h-[34px] rounded-lg bg-white hover:bg-cream-100 text-bcsve-950 font-bold text-xs sm:text-[12.5px] shadow-sm hover:shadow-[0_10px_25px_-5px_rgba(206,162,69,0.5)] transition-all duration-200 hover:-translate-y-0.5 active:scale-95 font-sans"
                >
                  <span>{ctaBanner.buttonText}</span>
                  <ArrowRight size={13} className="text-bcsve-800 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>

            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
