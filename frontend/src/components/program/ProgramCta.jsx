import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { useModal } from '../../context/ModalContext';

export default function ProgramCta({ programTitle }) {
  const { openApply, openEnquiry } = useModal();

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-bcsve-950 via-bcsve-900 to-bcsve-850 text-white p-6 sm:p-10 shadow-elevated text-center font-sans">
      {/* Decorative floating blurred shapes */}
      <div className="absolute top-0 right-10 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-bcsve-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto space-y-3.5">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-gold-300 text-xs font-semibold">
          <Sparkles size={12} />
          <span>Admissions Open for 2026 Batches</span>
        </div>

        <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight leading-tight">
          Launch Your Professional Career in {programTitle}
        </h3>

        <p className="text-xs sm:text-sm text-cream-100/90 leading-relaxed max-w-lg mx-auto">
          Gain recognized national credentials, rigorous hands-on practical training, and dedicated placement assistance at an authorized BCSVE center.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => openEnquiry(programTitle)}
            className="shimmer-sweep inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gold-400 hover:bg-gold-500 text-bcsve-950 font-bold text-xs sm:text-sm shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Enquire for Batch Details</span>
            <ArrowRight size={14} />
          </button>

          <button
            onClick={openApply}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs sm:text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            <ShieldCheck size={14} className="text-gold-300" />
            <span>Apply Online</span>
          </button>
        </div>
      </div>
    </div>
  );
}
