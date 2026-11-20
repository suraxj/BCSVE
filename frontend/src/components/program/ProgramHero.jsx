import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import { ChevronRight, ArrowRight, ShieldCheck, Sparkles, Clock, Award, Activity, GraduationCap } from 'lucide-react';
import { useModal } from '../../context/ModalContext';

const iconMap = {
  Clock,
  Award,
  Activity,
  GraduationCap,
};

export default function ProgramHero({ program, customVisual }) {
  const { openApply, openEnquiry } = useModal();

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-cream-100 via-cream-50 to-white border-b border-bcsve-100/80 pt-4 pb-8 sm:pb-12 font-sans">
      
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-200/20 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-bcsve-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <Container>
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-4 sm:mb-6">
          <ol className="flex items-center gap-1.5 text-xs text-gray-500 font-sans">
            <li>
              <Link to="/" className="hover:text-bcsve-800 transition-colors">Home</Link>
            </li>
            <li><ChevronRight size={11} className="text-gray-400" /></li>
            <li>
              <Link to="/#programs" className="hover:text-bcsve-800 transition-colors">Programs</Link>
            </li>
            <li><ChevronRight size={11} className="text-gray-400" /></li>
            <li className="font-semibold text-bcsve-950 truncate max-w-[200px] sm:max-w-none">
              {program.title}
            </li>
          </ol>
        </nav>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left: Content */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-4 text-left">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-gold-300 shadow-xs text-bcsve-900 text-xs font-bold tracking-wide">
              <Sparkles size={11} className="text-gold-500" />
              <span>{program.heroBadge || 'National Skill Framework Aligned'}</span>
            </div>

            {/* Title */}
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-bcsve-950 tracking-tight leading-tight">
                {program.title}
              </h1>
              <p className="text-sm sm:text-base font-semibold text-bcsve-800 mt-1">
                {program.tagline}
              </p>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-xl">
              {program.heroDescription}
            </p>

            {/* Quick Facts Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1">
              {program.quickFacts?.slice(0, 3).map((fact, idx) => {
                const IconComponent = iconMap[fact.icon] || Award;
                return (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-white border border-bcsve-100 shadow-xs flex items-center gap-2"
                  >
                    <div className="w-7 h-7 rounded-md bg-bcsve-50 flex items-center justify-center text-bcsve-800 shrink-0">
                      <IconComponent size={14} />
                    </div>
                    <div className="min-w-0 text-left">
                      <span className="block text-[10px] text-gray-500 font-medium truncate">{fact.label}</span>
                      <span className="block text-xs font-bold text-bcsve-950 truncate">{fact.value}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => openEnquiry(program.title)}
                className="shimmer-sweep inline-flex items-center gap-2 px-5 py-2.5 min-h-[42px] rounded-full bg-bcsve-800 hover:bg-bcsve-900 text-white font-bold text-xs sm:text-sm shadow-card hover:shadow-elevated transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Enquire Now</span>
                <ArrowRight size={14} />
              </button>

              <button
                onClick={openApply}
                className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[42px] rounded-full bg-white hover:bg-cream-100 text-bcsve-900 font-bold text-xs sm:text-sm border border-bcsve-200 shadow-xs transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <ShieldCheck size={15} className="text-bcsve-800" />
                <span>Apply for Admission</span>
              </button>
            </div>

          </div>

          {/* Right: Bespoke Visual Slot */}
          <div className="lg:col-span-5 relative w-full">
            {customVisual}
          </div>

        </div>

      </Container>
    </div>
  );
}
