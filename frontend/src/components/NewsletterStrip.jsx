import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';

export default function NewsletterStrip() {
  const { newsletter } = siteData;
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!email || !email.includes('@') || !email.includes('.')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    // TODO: Connect to newsletter mailing list API
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 4000);
  };

  return (
    <section className="py-2 sm:py-2.5 bg-bcsve-950 text-white font-sans border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-2.5">
          
          {/* Text Left */}
          <div className="text-left space-y-0.5 max-w-xl">
            <h3 className="font-sans font-bold text-xs sm:text-[13px] text-white">
              {newsletter.title}
            </h3>
            <p className="text-[10.5px] text-white/70">
              {newsletter.subtitle}
            </p>
          </div>

          {/* Form Right */}
          <div className="w-full lg:w-auto shrink-0">
            {isSubmitted ? (
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-300 text-xs font-bold animate-fadeIn">
                <CheckCircle2 size={14} />
                <span>Thank you for subscribing! Check your inbox for confirmation.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-1.5 max-w-md w-full">
                <div className="relative flex-1">
                  <Mail size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errorMsg) setErrorMsg('');
                    }}
                    placeholder={newsletter.placeholder}
                    className="w-full h-8 pl-8 pr-3 text-xs text-gray-900 bg-white rounded-full focus:outline-none focus:ring-1 focus:ring-gold-400 font-sans"
                  />
                </div>
                <button
                  type="submit"
                  className="h-8 px-4 rounded-full bg-gold-500 hover:bg-gold-600 text-bcsve-950 font-bold text-xs shrink-0 transition-colors shadow-xs flex items-center justify-center gap-1"
                >
                  <span>{newsletter.buttonText}</span>
                  <ArrowRight size={11} />
                </button>
              </form>
            )}
            {errorMsg && (
              <p className="text-[10px] text-red-300 text-left pt-0.5">
                {errorMsg}
              </p>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
