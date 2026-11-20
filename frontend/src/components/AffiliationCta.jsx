import React from 'react';
import { siteData } from '../data/siteData';
import Section from './common/Section';
import Container from './common/Container';
import SectionHeading from './common/SectionHeading';
import Reveal from './common/Reveal';
import TiltCard from './common/TiltCard';
import { CheckCircle2, Building2, ArrowRight, ShieldCheck, Award } from 'lucide-react';

export default function AffiliationCta({ onOpenAffiliation }) {
  const { affiliationCta } = siteData;

  return (
    <Section id="affiliation-cta" background="tint">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center">
          
          {/* Left Column: Benefits & Value Proposition (Span 7) */}
          <div className="lg:col-span-7 space-y-3 text-left font-sans">
            <SectionHeading
              tag={affiliationCta.tag}
              heading={affiliationCta.heading}
              subtitle={affiliationCta.subtitle}
              noMargin
            />

            {/* Benefits Check List */}
            <div className="space-y-2 pt-0.5">
              {affiliationCta.benefits.map((benefit, idx) => (
                <Reveal key={idx} direction="up" delay={idx * 60} duration={400}>
                  <div className="flex items-start gap-2 group">
                    <div className="w-4.5 h-4.5 rounded-full bg-gold-100 border border-gold-300 flex items-center justify-center text-bcsve-800 shrink-0 mt-0.5 group-hover:bg-bcsve-800 group-hover:text-gold-300 transition-colors">
                      <CheckCircle2 size={12} className="stroke-[2.5]" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-semibold text-gray-800 group-hover:text-bcsve-950 transition-colors leading-snug">
                      {benefit}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Action Button */}
            <div className="pt-1">
              <button
                onClick={onOpenAffiliation}
                className="shimmer-sweep inline-flex items-center gap-1.5 min-h-[34px] h-8.5 px-4 rounded-full bg-bcsve-800 hover:bg-bcsve-900 text-white font-bold text-xs shadow-xs hover:shadow-card transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 font-sans"
              >
                <Building2 size={14} />
                <span>{affiliationCta.ctaText}</span>
                <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Stats Card with 3D Tilt (Span 5) */}
          <div className="lg:col-span-5">
            <Reveal direction="right" duration={700}>
              <TiltCard maxTilt={6}>
                <div className="rounded-xl bg-gradient-to-br from-bcsve-950 via-bcsve-900 to-bcsve-850 text-white p-3.5 sm:p-4 shadow-soft hover:shadow-elevated border border-bcsve-700/60 relative overflow-hidden group">
                  
                  {/* Decorative Background Elements */}
                  <div className="absolute inset-0 bg-[radial-gradient(#DBBA6F_1.5px,transparent_1.5px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
                  <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-gold-400/20 blur-2xl pointer-events-none" />
                  
                  <div className="relative z-10 space-y-3">
                    <div className="flex items-center justify-between border-b border-white/15 pb-2.5">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-gold-300">
                          <Award size={16} />
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                            Institutional Empanelment
                          </h4>
                          <span className="text-[10.5px] text-gold-300/90 font-medium">
                            Recognized Skill Ecosystem
                          </span>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-gold-500/20 border border-gold-400/30 text-gold-200">
                        Batch 2026 Open
                      </span>
                    </div>

                    {/* Stats Highlights Grid */}
                    <div className="grid grid-cols-2 gap-2.5">
                      {affiliationCta.highlights.map((stat, idx) => (
                        <div 
                          key={idx}
                          className="p-2.5 rounded-lg bg-white/10 backdrop-blur-xs border border-white/10 hover:border-gold-300/40 transition-colors"
                        >
                          <div className="text-base sm:text-lg font-extrabold text-gold-300 font-sans tracking-tight">
                            {stat.value}
                          </div>
                          <div className="text-[10px] text-white/80 font-medium pt-0.5">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 text-center border-t border-white/10">
                      <p className="text-[10.5px] text-white/80 flex items-center justify-center gap-1.5">
                        <ShieldCheck size={12} className="text-gold-400" />
                        <span>Formal MoU with transparent operational guidelines</span>
                      </p>
                    </div>
                  </div>

                </div>
              </TiltCard>
            </Reveal>
          </div>

        </div>
      </Container>
    </Section>
  );
}
