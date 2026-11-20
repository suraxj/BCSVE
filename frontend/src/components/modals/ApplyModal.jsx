import React, { useState } from 'react';
import { X, CheckCircle, GraduationCap } from 'lucide-react';

export default function ApplyModal({ isOpen, onClose }) {
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: 'Healthcare & Wellness',
    qualification: 'Higher Secondary (12th)',
    state: 'Delhi',
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
                <GraduationCap size={20} className="stroke-[2.2] animate-popIn" />
                <h3 className="font-sans font-bold text-lg sm:text-xl text-bcsve-950">
                  Student Application Form
                </h3>
              </div>
              <p className="text-[11px] sm:text-xs text-gray-500 font-sans">
                Apply for admission into BCSVE certified vocational and technical programs.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-2.5 text-xs font-sans">
              <div>
                <label className="block text-gray-700 font-semibold mb-1 text-xs">
                  Full Name *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-9 sm:h-10 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bcsve-800/20 focus:border-bcsve-800 text-gray-800 text-xs sm:text-sm font-sans transition-all duration-200"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-gray-700 font-semibold mb-1 text-xs">
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-9 sm:h-10 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bcsve-800/20 focus:border-bcsve-800 text-gray-800 text-xs sm:text-sm font-sans transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-1 text-xs">
                    Phone Number *
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

              <div>
                <label className="block text-gray-700 font-semibold mb-1 text-xs">
                  Preferred Program *
                </label>
                <select
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  className="w-full h-9 sm:h-10 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bcsve-800/20 focus:border-bcsve-800 text-gray-800 text-xs sm:text-sm font-sans transition-all duration-200"
                >
                  <option>Healthcare & Wellness</option>
                  <option>Information Technology</option>
                  <option>Business & Management</option>
                  <option>Vocational & Technical Trades</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-gray-700 font-semibold mb-1 text-xs">
                    Highest Qualification
                  </label>
                  <select
                    value={formData.qualification}
                    onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                    className="w-full h-9 sm:h-10 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bcsve-800/20 focus:border-bcsve-800 text-gray-800 text-xs sm:text-sm font-sans transition-all duration-200"
                  >
                    <option>High School (10th)</option>
                    <option>Higher Secondary (12th)</option>
                    <option>Diploma / ITI</option>
                    <option>Graduate / Bachelor's</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-1 text-xs">
                    State / Region
                  </label>
                  <input
                    type="text"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full h-9 sm:h-10 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bcsve-800/20 focus:border-bcsve-800 text-gray-800 text-xs sm:text-sm font-sans transition-all duration-200"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="shimmer-sweep w-full py-2.5 rounded-lg bg-bcsve-800 hover:bg-bcsve-900 active:scale-95 text-white font-bold text-xs sm:text-sm shadow-sm hover:shadow-card transition-all duration-200 mt-2 font-sans flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Submitting Application...</span>
                  </>
                ) : (
                  <span>Submit Application</span>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-3 font-sans animate-fadeIn">
            <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600 animate-popIn">
              <CheckCircle size={32} />
            </div>
            <div className="space-y-1">
              <h3 className="font-sans font-bold text-lg sm:text-xl text-gray-900">
                Application Received!
              </h3>
              <p className="text-xs text-gray-600 max-w-xs mx-auto font-sans leading-relaxed">
                Thank you, <span className="font-bold text-bcsve-900">{formData.name}</span>. Your application for <span className="font-semibold">{formData.program}</span> has been logged. Our admissions counselor will contact you at <span className="font-semibold">{formData.phone}</span> within 24 hours.
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
