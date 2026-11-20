import React, { useState, useEffect } from 'react';
import Container from '../common/Container';

export default function ProgramSubNav({ navItems }) {
  const [activeId, setActiveId] = useState(navItems[0]?.id || 'overview');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveId(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 110;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - topOffset,
        behavior: 'smooth'
      });
      setActiveId(id);
    }
  };

  return (
    <nav
      aria-label="Program sub-navigation"
      className="sticky top-[48px] sm:top-[52px] z-30 bg-white/95 backdrop-blur-md border-b border-bcsve-100 shadow-xs py-2 transition-all duration-300 font-sans"
    >
      <Container>
        <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar py-0.5 -mx-4 px-4 sm:mx-0 sm:px-0">
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 font-sans shrink-0 flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-bcsve-800 text-white shadow-xs'
                    : 'text-gray-700 hover:text-bcsve-900 hover:bg-cream-100'
                }`}
              >
                {item.icon && <item.icon size={12} className={isActive ? 'text-gold-300' : 'text-bcsve-700'} />}
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>
      </Container>
    </nav>
  );
}
