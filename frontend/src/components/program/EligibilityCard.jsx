import React from 'react';
import { ShieldCheck, FileCheck, Award, ArrowRight, UserCheck } from 'lucide-react';
import { useModal } from '../../context/ModalContext';

export default function EligibilityCard({ eligibility, programTitle }) {
  const { openApply } = useModal();

  if (!eligibility) return null;

  return (
    <div className="bg-white rounded-2xl border border-bcsve-100 shadow-card p-5 sm:p-7 text-left font-sans">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-lg bg-bcsve-50 flex items-center justify-center text-bcsve-800">
          <ShieldCheck size={18} />
        </div>
        <div>
          <span className="text-[10px] font-bold tracking-wider text-gold-600 uppercase font-sans">
            Admission Criteria
          </span>
          <h3 className="text-base sm:text-lg font-bold text-bcsve-950 font-sans">
            Eligibility & Verification
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        {/* Education qualification */}
        <div className="p-3.5 rounded-xl bg-cream-50/80 border border-bcsve-100/70">
          <div className="flex items-center gap-1.5 text-bcsve-900 font-bold text-xs mb-1">
            <Award size={14} className="text-gold-600" />
            <span>Educational Qualification</span>
          </div>
          <p className="text-xs text-gray-700 leading-relaxed font-sans">
            {eligibility.qualification}
          </p>
        </div>

        {/* Age Criteria */}
        <div className="p-3.5 rounded-xl bg-cream-50/80 border border-bcsve-100/70">
          <div className="flex items-center gap-1.5 text-bcsve-900 font-bold text-xs mb-1">
            <UserCheck size={14} className="text-gold-600" />
            <span>Age Requirement</span>
          </div>
          <p className="text-xs text-gray-700 leading-relaxed font-sans">
            {eligibility.ageLimit}
          </p>
        </div>
      </div>

      {/* Required Documents */}
      {eligibility.documents && (
        <div className="pt-2 border-t border-bcsve-100/80">
          <h4 className="text-xs font-bold text-bcsve-950 mb-2 flex items-center gap-1.5">
            <FileCheck size={14} className="text-bcsve-800" />
            <span>Documents Required for Verification:</span>
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
            {eligibility.documents.map((doc, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
                <span>{doc}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {eligibility.admissionNote && (
        <p className="text-[11px] text-gray-500 mt-4 italic font-sans">
          Note: {eligibility.admissionNote}
        </p>
      )}

      {/* CTA Button */}
      <div className="mt-5 pt-3 border-t border-bcsve-100 flex items-center justify-between flex-wrap gap-3">
        <span className="text-xs text-gray-600">
          Ready to verify eligibility and enroll for {programTitle}?
        </span>
        <button
          onClick={openApply}
          className="shimmer-sweep inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-bcsve-800 hover:bg-bcsve-900 text-white font-bold text-xs shadow-xs transition-all"
        >
          <span>Start Online Admission</span>
          <ArrowRight size={13} />
        </button>
      </div>
    </div>
  );
}
