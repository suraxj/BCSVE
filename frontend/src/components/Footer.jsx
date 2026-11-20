import React from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';
import { siteImages } from '../assets/images';
import Reveal from './common/Reveal';

// Brand SVGs for Social Media
const SocialIconSvg = ({ type }) => {
  switch (type) {
    case 'LinkedIn':
      return (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
        </svg>
      );
    case 'YouTube':
      return (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      );
    case 'Instagram':
      return (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      );
    case 'Facebook':
      return (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      );
    case 'X':
    default:
      return (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      );
  }
};

export default function Footer({ _onOpenApply, onOpenAffiliation }) {
  const { footer } = siteData;

  const socialLinks = [
    { name: 'LinkedIn', type: 'LinkedIn', href: '#' },
    { name: 'YouTube', type: 'YouTube', href: '#' },
    { name: 'Instagram', type: 'Instagram', href: '#' },
    { name: 'Facebook', type: 'Facebook', href: '#' },
    { name: 'X', type: 'X', href: '#' },
  ];

  const resolveHref = (href) => {
    if (!href) return '#';
    if (href.startsWith('#') && href.length > 1) {
      return `/${href}`;
    }
    return href;
  };

  return (
    <footer id="footer" className="bg-cream-100/90 border-t border-bcsve-200/80 pt-5 pb-3.5 sm:pt-6 sm:pb-4 text-gray-700 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Links Grid */}
        <Reveal direction="up" duration={600}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3.5 sm:gap-5 pb-4 border-b border-bcsve-200/70 font-sans">
            
            {/* Col 1: Logo & Council Info (Span 4) */}
            <div className="lg:col-span-4 space-y-1.5 text-left">
              <Link to="/" className="flex items-center gap-2 group cursor-pointer inline-flex">
                {siteImages.logo ? (
                  <img
                    src={siteImages.logo}
                    alt="BCSVE Logo"
                    className="w-9 h-9 sm:w-10 sm:h-10 object-contain shrink-0 group-hover:scale-105 transition-transform"
                  />
                ) : (
                  <div className="w-9 h-9 rounded-full border border-bcsve-800 bg-white flex items-center justify-center font-bold text-[9px] text-bcsve-900 font-sans shrink-0">
                    BCSVE
                  </div>
                )}
                <div className="font-sans">
                  <h4 className="font-sans font-bold text-xs sm:text-[13px] text-bcsve-950 leading-tight">
                    Bharath Council for
                  </h4>
                  <h5 className="font-sans font-bold text-[10.5px] sm:text-[11.5px] text-bcsve-950 leading-tight">
                    Skill and Vocational Education
                  </h5>
                  <span className="text-[9px] sm:text-[10px] text-bcsve-700 font-medium block mt-0.5 font-sans">
                    Educate • Empower • Enlighten
                  </span>
                </div>
              </Link>

              <p className="text-[11px] sm:text-xs text-gray-600 leading-relaxed max-w-xs font-sans">
                An Autonomous Institution Approved by Govt of India under Society Registration Act XXI of 1860 (S.No.731/2010), Founded by Careerline Society. Promoting skill excellence across 12 vital sectors.
              </p>
            </div>

            {/* Col 2, 3, 4: Quick Links, Resources, Affiliation (Span 5 total) */}
            <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-left font-sans">
              {footer.columns.map((col) => (
                <div key={col.title} className="space-y-1.5 font-sans">
                  <h4 className="text-[10.5px] sm:text-[11px] font-bold uppercase tracking-wider text-bcsve-900 font-sans">
                    {col.title}
                  </h4>
                  <ul className="space-y-1 text-[11px] sm:text-[12px] font-sans">
                    {col.links.map((link) => {
                      const isAffiliation = link.name === 'Apply for Affiliation';
                      const targetHref = resolveHref(link.href);
                      const isInternal = targetHref.startsWith('/');

                      if (isAffiliation && onOpenAffiliation) {
                        return (
                          <li key={link.name}>
                            <button
                              type="button"
                              onClick={onOpenAffiliation}
                              className="text-gray-600 hover:text-bcsve-900 hover:translate-x-1 transition-all duration-200 font-sans py-0.5 inline-block text-left"
                            >
                              {link.name}
                            </button>
                          </li>
                        );
                      }

                      return (
                        <li key={link.name}>
                          {isInternal ? (
                            <Link
                              to={targetHref}
                              className="text-gray-600 hover:text-bcsve-900 hover:translate-x-1 transition-all duration-200 font-sans py-0.5 inline-block"
                            >
                              {link.name}
                            </Link>
                          ) : (
                            <a
                              href={targetHref}
                              className="text-gray-600 hover:text-bcsve-900 hover:translate-x-1 transition-all duration-200 font-sans py-0.5 inline-block"
                            >
                              {link.name}
                            </a>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>

            {/* Col 5: Connect With Us (Span 3) */}
            <div className="lg:col-span-3 space-y-1.5 text-left font-sans">
              <h4 className="text-[10.5px] sm:text-[11px] font-bold uppercase tracking-wider text-bcsve-900 font-sans">
                Connect With Us
              </h4>
              
              {/* Social Buttons with Bounce & Lift */}
              <div className="flex items-center gap-1.5 pt-0.5">
                {socialLinks.map((soc) => (
                  <a
                    key={soc.name}
                    href={soc.href}
                    aria-label={soc.name}
                    className="w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-lg bg-white border border-bcsve-200/90 flex items-center justify-center text-bcsve-800 hover:bg-bcsve-800 hover:text-white hover:border-bcsve-800 hover:shadow-card hover:-translate-y-1 active:scale-95 transition-all duration-200 shadow-xs"
                  >
                    <SocialIconSvg type={soc.type} />
                  </a>
                ))}
              </div>

              <div className="text-[11px] sm:text-xs text-gray-600 pt-0.5 space-y-0.5 font-sans">
                <div><strong className="text-gray-700">Regd. Office:</strong> Plot 3, KR Signature, Sector 135, Noida-201304</div>
                <div><strong className="text-gray-700">Email:</strong> info@bcsve.skillvoc.in</div>
                <div><strong className="text-gray-700">Helpline:</strong> +91 8595350621</div>
                <div><strong className="text-gray-700">Portal:</strong> www.bcsve.skillvoc.in</div>
              </div>
            </div>

          </div>
        </Reveal>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-2.5 flex flex-col sm:flex-row items-center justify-between gap-1 text-[10px] sm:text-[11px] text-gray-500 font-sans">
          <p>{footer.copyright}</p>
          <div className="flex items-center gap-2.5 font-sans">
            {footer.legalLinks.map((legal, i) => (
              <React.Fragment key={legal.name}>
                <a href={legal.href} className="hover:text-bcsve-900 transition-colors font-sans py-0.5">
                  {legal.name}
                </a>
                {i === 0 && <span className="text-gray-300">|</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
