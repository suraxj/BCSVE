import React, { useState } from 'react';
import { X, CheckCircle, Building2 } from 'lucide-react';

export default function AffiliationModal({ isOpen, onClose }) {
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    instituteName: '',
    contactPerson: '',
    phone: '',
    email: '',
    city: '',
    state: 'Maharashtra',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setIsLoading(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fadeIn font-sans">
      <div className="bg-white rounded-2xl max-w-md w-full p-4 sm:p-6 shadow-elevated border border-bcsve-100 relative font-sans animate-popIn transform transition-all duration-300">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors flex items-center justify-center active:scale-90"
          aria-label="Close dialog"
        >
          <X size={18} />
        </button>

        {!submitted ? (
          <div className="space-y-3.5 text-left font-sans">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2 text-bcsve-800">
                <Building2 size={20} className="stroke-[2.2] animate-popIn" />
                <h3 className="font-sans font-bold text-lg sm:text-xl text-bcsve-950">
                  Affiliation Partnership Form
                </h3>
              </div>
              <p className="text-[11px] sm:text-xs text-gray-500 font-sans">
                Apply to become an authorized BCSVE Skill & Vocational Training Centre.
              </p>
              <div className="pt-1">
                <a
                  href="/docs/bcsve-partner-affiliation-form.pdf"
                  download
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold text-bcsve-800 hover:text-bcsve-950 underline"
                >
                  <span>Download Printable Service Partner Form (PDF)</span>
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-2.5 text-xs font-sans">
              <div>
                <label className="block text-gray-700 font-semibold mb-1 text-xs">
                  Institution Name *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Apex Skill Academy"
                  value={formData.instituteName}
                  onChange={(e) => setFormData({ ...formData, instituteName: e.target.value })}
                  className="w-full h-9 sm:h-10 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bcsve-800/20 focus:border-bcsve-800 text-gray-800 text-xs sm:text-sm font-sans transition-all duration-200"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-gray-700 font-semibold mb-1 text-xs">
                    Contact Person *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Principal / Director"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="w-full h-9 sm:h-10 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bcsve-800/20 focus:border-bcsve-800 text-gray-800 text-xs sm:text-sm font-sans transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-1 text-xs">
                    Mobile Number *
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full h-9 sm:h-10 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bcsve-800/20 focus:border-bcsve-800 text-gray-800 text-xs sm:text-sm font-sans transition-all duration-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-gray-700 font-semibold mb-1 text-xs">
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="director@institute.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-9 sm:h-10 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bcsve-800/20 focus:border-bcsve-800 text-gray-800 text-xs sm:text-sm font-sans transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-1 text-xs">
                    City / District *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Pune"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full h-9 sm:h-10 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bcsve-800/20 focus:border-bcsve-800 text-gray-800 text-xs sm:text-sm font-sans transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1 text-xs">
                  State / Territory *
                </label>
                <select
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  className="w-full h-9 sm:h-10 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bcsve-800/20 focus:border-bcsve-800 text-gray-800 text-xs sm:text-sm font-sans transition-all duration-200"
                >
                  <option>Maharashtra</option>
                  <option>Delhi NCR</option>
                  <option>Karnataka</option>
                  <option>Tamil Nadu</option>
                  <option>Uttar Pradesh</option>
                  <option>West Bengal</option>
                  <option>Other State</option>
                </select>
              </div>

              <div className="pt-1.5">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="shimmer-sweep w-full py-2.5 rounded-lg bg-bcsve-800 hover:bg-bcsve-900 active:scale-95 text-white font-bold text-xs sm:text-sm shadow-xs hover:shadow-card transition-all duration-200 font-sans flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Submitting Proposal...</span>
                    </>
                  ) : (
                    <span>Submit Affiliation Request</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-3 font-sans animate-fadeIn">
            <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600 animate-popIn">
              <CheckCircle size={32} />
            </div>
            <div className="space-y-1">
              <h3 className="font-sans font-bold text-lg sm:text-xl text-gray-900">
                Affiliation Proposal Submitted!
              </h3>
              <p className="text-xs text-gray-600 max-w-xs mx-auto font-sans leading-relaxed">
                Thank you, <span className="font-bold text-bcsve-900">{formData.contactPerson}</span>. The affiliation kit and inspection guidelines for <span className="font-semibold">{formData.instituteName}</span> will be dispatched to <span className="font-semibold">{formData.email}</span>.
              </p>
            </div>
            <div className="pt-2">
              <button
                onClick={handleReset}
                className="px-5 py-2 rounded-lg bg-bcsve-800 hover:bg-bcsve-900 text-white font-bold text-xs shadow-sm hover:shadow-card transition-all active:scale-95 font-sans"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
