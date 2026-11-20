import React, { useState, useEffect } from 'react';
import { siteData } from '../data/siteData';
import { siteImages } from '../assets/images';
import Container from './common/Container';
import { GraduationCap, Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar({ onOpenApply }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section on scroll
      const sections = [
        'home',
        'about',
        'programs',
        'admission-process',
        'partners',
        'why-choose-us',
        'affiliation-cta',
        'accreditations',
        'faculty',
        'verification',
        'testimonials',
        'placements',
        'notices',
        'gallery',
        'downloads',
        'faqs',
        'contact'
      ];
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 font-sans ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-bcsve-100/90 shadow-card py-0'
          : 'bg-white/90 backdrop-blur-sm border-b border-bcsve-100/70 shadow-xs py-0.5'
      }`}
    >
      <Container>
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'h-11 sm:h-12' : 'h-12 sm:h-13'
          }`}
        >
          
          {/* Logo & Council Branding */}
          <a
            href="#home"
            className="flex min-w-0 items-center gap-2 group focus:outline-none focus-visible:ring-1 focus-visible:ring-bcsve-800 rounded p-0.5"
          >
            {siteImages.logo ? (
              <img
                src={siteImages.logo}
                alt="BCSVE Seal Logo"
                className="w-8 h-8 sm:w-9 sm:h-9 object-contain transition-transform duration-300 group-hover:scale-105 shrink-0"
              />
            ) : (
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-bcsve-800 flex items-center justify-center bg-bcsve-50 text-[8px] text-center font-bold text-bcsve-800 p-0.5 font-sans shrink-0">
                BCSVE
              </div>
            )}
            <div className="min-w-0 flex flex-col text-left">
              <span className="block truncate font-sans font-bold text-[11.5px] sm:text-xs text-bcsve-950 leading-tight tracking-tight">
                {siteData.header.title}
              </span>
              <span className="block truncate font-sans font-bold text-[9px] sm:text-[11px] text-bcsve-900 leading-tight tracking-tight">
                {siteData.header.subtitle}
              </span>
              <span className="hidden sm:block text-[9.5px] text-bcsve-700 tracking-wide font-medium font-sans">
                {siteData.header.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {siteData.header.navLinks.map((link) => {
              const linkSection = link.href.replace('#', '') || 'home';
              const isActive = activeSection === linkSection;

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setProgramsDropdownOpen(true)}
                    onMouseLeave={() => setProgramsDropdownOpen(false)}
                  >
                    <a
                      href={link.href}
                      className={`px-2 py-1 rounded text-xs font-medium transition-all duration-200 flex items-center gap-1 font-sans group relative ${
                        isActive
                          ? 'text-bcsve-900 font-semibold bg-bcsve-50/80'
                          : 'text-gray-700 hover:text-bcsve-900 hover:bg-bcsve-50/70'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        size={11}
                        className={`transition-transform duration-300 text-gray-500 group-hover:text-bcsve-900 ${
                          programsDropdownOpen ? 'rotate-180 text-bcsve-900' : ''
                        }`}
                      />
                      <span
                        className={`absolute bottom-0 left-2 right-2 h-0.5 bg-gold-400 rounded-full transition-transform duration-300 origin-left ${
                          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                      />
                    </a>

                    {/* Animated Dropdown Menu */}
                    {programsDropdownOpen && (
                      <div className="absolute top-full left-0 w-48 bg-white rounded-lg shadow-elevated border border-bcsve-100 py-1 mt-0.5 z-50 animate-fadeIn origin-top">
                        {siteData.programs.categories.map((cat, idx) => (
                          <a
                            key={cat}
                            href="#programs"
                            onClick={() => setProgramsDropdownOpen(false)}
                            style={{ animationDelay: `${idx * 40}ms` }}
                            className="block px-3 py-1.5 text-[11.5px] text-gray-700 hover:bg-bcsve-50 hover:text-bcsve-900 hover:translate-x-1 transition-all duration-200 font-sans"
                          >
                            {cat}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-2 py-1 rounded text-xs font-medium transition-all duration-200 font-sans group ${
                    isActive
                      ? 'text-bcsve-900 font-semibold bg-bcsve-50/80'
                      : 'text-gray-700 hover:text-bcsve-900 hover:bg-bcsve-50/60'
                  }`}
                >
                  <span>{link.name}</span>
                  <span
                    className={`absolute bottom-0 left-2 right-2 h-0.5 bg-gold-400 rounded-full transition-transform duration-300 origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Right Action: Apply Now CTA Button with Shimmer Sweep & Pulse */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={onOpenApply}
              className="shimmer-sweep relative inline-flex items-center gap-1.5 px-3.5 py-1.5 min-h-[34px] rounded-full bg-bcsve-800 hover:bg-bcsve-900 text-white font-semibold text-xs shadow-xs hover:shadow-card transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 font-sans ring-1 ring-bcsve-800/20 hover:ring-bcsve-800/40"
            >
              <GraduationCap size={14} className="stroke-[2.2] transition-transform duration-300 group-hover:rotate-12" />
              <span>{siteData.header.ctaButton}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <button
              onClick={onOpenApply}
              className="sm:hidden shimmer-sweep inline-flex items-center gap-1 px-2.5 py-1 min-h-[40px] rounded-full bg-bcsve-800 text-white text-[11px] font-semibold font-sans shadow-xs"
            >
              <GraduationCap size={13} />
              <span>Apply</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-lg text-gray-700 hover:text-bcsve-900 hover:bg-bcsve-50 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={18} className="animate-spin-slow" /> : <Menu size={18} />}
            </button>
          </div>

        </div>
      </Container>

      {/* Mobile dropdown menu with staggered slide-down */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-bcsve-100 bg-white/98 backdrop-blur-md px-4 pt-2.5 pb-3.5 space-y-1 shadow-card animate-fadeIn">
          {siteData.header.navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              style={{ animationDelay: `${idx * 45}ms` }}
              onClick={() => setMobileMenuOpen(false)}
              className="animate-fadeIn block px-3 py-1.5 rounded text-xs font-medium text-gray-700 hover:bg-bcsve-50 hover:text-bcsve-900 hover:translate-x-1 transition-all duration-200 font-sans"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-1.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApply();
              }}
              className="shimmer-sweep w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded bg-bcsve-800 hover:bg-bcsve-900 text-white font-semibold text-xs shadow-xs font-sans transition-all duration-200 active:scale-[0.98]"
            >
              <GraduationCap size={15} />
              <span>{siteData.header.ctaButton}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
