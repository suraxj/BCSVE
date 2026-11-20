import React, { useEffect } from 'react';
import { X, Clock, FileText, Monitor, CheckCircle2, Wrench, ArrowRight } from 'lucide-react';
import { useModal } from '../../context/ModalContext';

export default function CourseDrawer({ course, isOpen, onClose }) {
  const { openEnquiry } = useModal();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !course) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end font-sans animate-fadeIn">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-bcsve-950/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <aside
        className="relative z-10 w-full max-w-xl bg-white h-full shadow-2xl flex flex-col overflow-hidden animate-slideInRight"
        role="dialog"
        aria-modal="true"
        aria-labelledby="course-drawer-title"
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-bcsve-100 bg-cream-50/70 flex items-start justify-between gap-3">
          <div className="space-y-1">
            <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-bcsve-800 text-white font-sans">
              {course.code || 'BCSVE Certificate'}
            </span>
            <h2 id="course-drawer-title" className="text-base sm:text-lg font-extrabold text-bcsve-950 leading-snug">
              {course.title}
            </h2>
            <div className="flex items-center flex-wrap gap-2 text-xs text-gray-600 font-sans">
              <span className="flex items-center gap-1 font-medium text-gray-700">
                <Clock size={12} className="text-bcsve-700" />
                {course.duration}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 font-medium text-gray-700">
                <FileText size={12} className="text-bcsve-700" />
                {course.level}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 font-medium text-gray-700">
                <Monitor size={12} className="text-bcsve-700" />
                {course.mode}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-500 hover:text-bcsve-900 hover:bg-cream-200/80 transition-colors"
            aria-label="Close drawer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 text-left text-sm text-gray-700">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-bcsve-900 mb-1.5 font-sans">
              Overview & Scope
            </h3>
            <p className="leading-relaxed text-gray-600 text-xs sm:text-[13px]">
              {course.shortDescription}
            </p>
          </div>

          {/* Key Competencies / Skills */}
          {course.skills && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-bcsve-900 mb-2 font-sans">
                Key Skills Developed
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {course.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-cream-100 text-bcsve-900 border border-bcsve-200 text-xs font-medium font-sans"
                  >
                    <CheckCircle2 size={11} className="text-gold-600" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Tools / Equipment */}
          {course.tools && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-bcsve-900 mb-2 font-sans">
                Tools & Equipment Practiced
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {course.tools.map((tool, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2 rounded-lg bg-gray-50 border border-gray-200 text-xs text-gray-700"
                  >
                    <Wrench size={13} className="text-bcsve-800 shrink-0" />
                    <span className="font-medium">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Modules Breakdown */}
          {course.modules && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-bcsve-900 mb-2 font-sans">
                Course Syllabus & Practical Modules
              </h3>
              <div className="space-y-2">
                {course.modules.map((mod, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg border border-bcsve-100/90 bg-white hover:bg-cream-50/50 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-bold text-xs sm:text-[13px] text-bcsve-950 font-sans">
                        Module {idx + 1}: {mod.title}
                      </span>
                      {mod.hours && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-gold-100 text-gold-800 shrink-0 font-sans">
                          {mod.hours}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-600 leading-normal font-sans">
                      {mod.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Learning Outcomes */}
          {course.outcomes && (
            <div className="p-3.5 rounded-xl bg-gold-50/80 border border-gold-200">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gold-900 mb-2 font-sans">
                Career Outcomes & Capability
              </h3>
              <ul className="space-y-1.5">
                {course.outcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-gray-800">
                    <CheckCircle2 size={13} className="text-gold-600 shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-bcsve-100 bg-white flex items-center gap-3">
          <button
            onClick={() => {
              onClose();
              openEnquiry(course.title);
            }}
            className="shimmer-sweep flex-1 min-h-[38px] h-10 px-4 rounded-lg bg-bcsve-800 hover:bg-bcsve-900 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all"
          >
            <span>Enquire for this Course</span>
            <ArrowRight size={13} />
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 min-h-[38px] h-10 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 text-xs font-semibold"
          >
            Close
          </button>
        </div>
      </aside>
    </div>
  );
}
