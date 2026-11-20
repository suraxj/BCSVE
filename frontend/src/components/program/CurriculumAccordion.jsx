import React, { useState } from 'react';
import { ChevronDown, BookOpen, Clock, CheckCircle } from 'lucide-react';

export default function CurriculumAccordion({ modules, title = 'Curriculum & Module Outline' }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  if (!modules || modules.length === 0) return null;

  return (
    <div className="space-y-3 font-sans">
      <div className="flex items-center gap-2 mb-2 text-left">
        <BookOpen size={18} className="text-bcsve-800" />
        <h3 className="text-base sm:text-lg font-bold text-bcsve-950 font-sans">
          {title}
        </h3>
      </div>

      <div className="space-y-2.5">
        {modules.map((mod, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'border-bcsve-300 bg-white shadow-card'
                  : 'border-bcsve-100 bg-white hover:border-bcsve-200'
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                className="w-full p-4 flex items-center justify-between gap-3 text-left transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-bcsve-800 text-white' : 'bg-cream-100 text-bcsve-900'
                    }`}
                  >
                    0{idx + 1}
                  </span>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-bcsve-950 font-sans">
                      {mod.title}
                    </h4>
                    {mod.hours && (
                      <span className="flex items-center gap-1 text-[11px] text-gray-500 mt-0.5">
                        <Clock size={11} className="text-gold-600" />
                        {mod.hours}
                      </span>
                    )}
                  </div>
                </div>

                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center bg-cream-50 text-bcsve-900 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-bcsve-100 text-bcsve-950' : ''
                  }`}
                >
                  <ChevronDown size={14} />
                </div>
              </button>

              {isOpen && (
                <div className="px-4 pb-4 pt-1 text-left border-t border-bcsve-50 text-xs sm:text-[13px] text-gray-700 leading-relaxed animate-fadeIn">
                  <p className="mb-2 text-gray-600">{mod.description}</p>
                  {mod.topics && (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 pt-2 border-t border-dashed border-gray-100">
                      {mod.topics.map((topic, tIdx) => (
                        <li key={tIdx} className="flex items-center gap-1.5 text-xs text-gray-800">
                          <CheckCircle size={12} className="text-gold-500 shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
