import React from 'react';
import { siteData } from '../data/siteData';
import Reveal from './common/Reveal';
import { Phone, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

export default function FinalCtaBanner({ onOpenApply }) {
  const { finalCta } = siteData;

  return (
    <section className="py-5 sm:py-6 md:py-7 bg-gradient-to-br from-bcsve-950 via-bcsve-900 to-bcsve-850 text-white font-sans relative overflow-hidden">
      
      {/* Decorative Floating Shapes */}
      <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-gold-500/10 blur-3xl pointer-events-none animate-floatOrb1" />
      <div className="absolute bottom-0 left-10 w-64 h-64 rounded-full bg-bcsve-700/20 blur-3xl pointer-events-none animate-floatOrb2" />
      <div className="absolute inset-0 bg-[radial-gradient(#DBBA6F_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-2.5">
        
        {/* Top Mini Pill */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-gold-300 text-[9.5px] sm:text-[10.5px] font-bold uppercase tracking-wider">
          <Sparkles size={11} />
          <span>Admissions 2026 Open Nationwide</span>
        </div>

        {/* Main Headline */}
        <Reveal direction="up" duration={600}>
          <h2 className="font-sans text-lg sm:text-xl md:text-2xl font-extrabold text-white tracking-tight leading-tight max-w-2xl mx-auto">
            {finalCta.headlineLead}{' '}
            <span className="text-gold-300 underline decoration-gold-400 decoration-wavy decoration-2 underline-offset-4">
              {finalCta.headlineHighlight}
            </span>
          </h2>
        </Reveal>

        {/* Supporting Copy */}
        <p className="text-[11px] sm:text-xs text-white/90 max-w-xl mx-auto leading-relaxed font-sans">
          {finalCta.description}
        </p>

        {/* 2 CTA Buttons */}
        <Reveal direction="up" delay={150} duration={500}>
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
            <button
              onClick={onOpenApply}
              className="shimmer-sweep group inline-flex items-center gap-1.5 px-4 py-1.5 min-h-[34px] rounded-full bg-white hover:bg-cream-100 text-bcsve-950 font-bold text-xs shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 font-sans"
            >
              <span>{finalCta.primaryBtn}</span>
              <ArrowRight size={12} className="text-bcsve-800 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <a
              href={`tel:${finalCta.supportPhone}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 min-h-[34px] rounded-full bg-white/15 hover:bg-white/25 text-white font-semibold text-xs border border-white/30 backdrop-blur-xs transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 font-sans"
            >
              <Phone size={12} className="text-gold-300" />
              <span>{finalCta.secondaryBtn}</span>
            </a>
          </div>
        </Reveal>

        {/* Trust Note */}
        <div className="pt-1 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[10px] sm:text-[10.5px] text-white/70">
          <span className="flex items-center gap-1">
            <ShieldCheck size={11} className="text-gold-400" />
            <span>Govt. Aligned Curriculum</span>
          </span>
          <span>•</span>
          <span>Digital QR Verified</span>
          <span>•</span>
          <span>150+ Authorized Centres</span>
        </div>

      </div>
    </section>
  );
}
