import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function ProgramFaqAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="space-y-3 font-sans">
      <div className="flex items-center gap-2 mb-3 text-left">
        <HelpCircle size={18} className="text-bcsve-800" />
        <h3 className="text-base sm:text-lg font-bold text-bcsve-950 font-sans">
          Frequently Asked Questions
        </h3>
      </div>

      <div className="space-y-2">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-xl border transition-all duration-300 ${
                isOpen
                  ? 'border-bcsve-200 bg-white shadow-xs'
                  : 'border-bcsve-100 bg-white hover:border-bcsve-200'
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                className="w-full p-3.5 sm:p-4 flex items-center justify-between gap-3 text-left"
              >
                <span className="font-bold text-xs sm:text-sm text-bcsve-950 font-sans">
                  {faq.q}
                </span>
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center bg-cream-50 text-bcsve-900 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-bcsve-100 text-bcsve-950' : ''
                  }`}
                >
                  <ChevronDown size={14} />
                </div>
              </button>

              {isOpen && (
                <div className="px-4 pb-4 text-left border-t border-bcsve-50 text-xs sm:text-[13px] text-gray-700 leading-relaxed animate-fadeIn">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
