import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp, MessageCircle } from 'lucide-react';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Bottom-Left: WhatsApp & Quick Call Floating Buttons */}
      <div className="fixed bottom-5 left-4 z-40 flex flex-col gap-2 pointer-events-auto">
        {/* WhatsApp Chat */}
        <a
          href="https://wa.me/918595350621?text=Hello%20BCSVE,%20I%20am%20interested%20in%20courses%20and%20admission."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="group flex items-center gap-2 p-2.5 sm:px-3 sm:py-2 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-elevated hover:shadow-2xl transition-all duration-300 hover:scale-105"
        >
          <MessageCircle size={18} className="fill-current" />
          <span className="hidden sm:inline text-xs font-bold font-sans pr-1">
            Chat on WhatsApp
          </span>
        </a>

        {/* Quick Call */}
        <a
          href="tel:+918595350621"
          aria-label="Call BCSVE helpline"
          className="group flex items-center gap-2 p-2.5 sm:px-3 sm:py-2 rounded-full bg-bcsve-800 hover:bg-bcsve-900 text-white shadow-elevated hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20"
        >
          <Phone size={16} className="fill-current" />
          <span className="hidden sm:inline text-xs font-bold font-sans pr-1">
            Call Helpline
          </span>
        </a>
      </div>

      {/* Bottom-Right: Back-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-5 right-4 z-40 w-10 h-10 rounded-full bg-white hover:bg-cream-100 text-bcsve-900 border border-bcsve-200 shadow-elevated hover:shadow-2xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 active:scale-95 animate-fadeIn"
        >
          <ArrowUp size={18} className="stroke-[2.5]" />
        </button>
      )}
    </>
  );
}
