import React from 'react';
import { siteData } from '../data/siteData';
import { useInView } from '../hooks/useInView';
import Section from './common/Section';
import Container from './common/Container';
import SectionHeading from './common/SectionHeading';
import Reveal from './common/Reveal';
import { Compass, FileText, CreditCard, Wrench, Award, ArrowRight } from 'lucide-react';

const processIcons = {
  Compass,
  FileText,
  CreditCard,
  Wrench,
  Award,
};

export default function AdmissionProcess({ onOpenApply }) {
  const { admissionProcess } = siteData;
  const [sectionRef, isInView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <Section id="admission-process" background="white">
      <Container>
        
        {/* Section Heading with Action */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 mb-3.5 sm:mb-4">
          <SectionHeading
            tag={admissionProcess.tag}
            heading={admissionProcess.heading}
            subtitle={admissionProcess.subtitle}
            noMargin
            className="flex-1"
          />
          {onOpenApply && (
            <button
              onClick={onOpenApply}
              className="shimmer-sweep self-start sm:self-auto shrink-0 min-h-[34px] h-8.5 px-3.5 rounded-full bg-bcsve-800 hover:bg-bcsve-900 text-white font-bold text-xs shadow-xs hover:shadow-card transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 font-sans inline-flex items-center gap-1.5"
            >
              <span>Start Admission Form</span>
              <ArrowRight size={12} />
            </button>
          )}
        </div>

        {/* 5-Step Timeline Container */}
        <div ref={sectionRef} className="relative pt-1">
          
          {/* Desktop Horizontal Connecting Line (Draws on scroll) */}
          <div 
            className={`hidden lg:block absolute top-[24px] left-[8%] right-[8%] h-0.5 border-t-2 border-dashed border-bcsve-200 pointer-events-none z-0 transition-transform duration-1000 ease-out origin-left ${
              isInView ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
            }`}
          />

          {/* Steps Grid: 1 col on mobile, 2 on sm, 5 on lg with standard gap-6 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 relative z-10">
            {admissionProcess.steps.map((step, idx) => {
              const Icon = processIcons[step.icon] || Award;

              return (
                <Reveal
                  key={step.stepNumber}
                  direction="up"
                  delay={idx * 90}
                  duration={500}
                  className="flex flex-col items-start lg:items-center text-left lg:text-center group font-sans relative"
                >
                  {/* Step Circle with Number Badge */}
                  <div className="relative mb-2.5">
                    <div className="w-11 h-11 rounded-xl bg-cream-50 border-2 border-gold-300 group-hover:border-bcsve-800 shadow-xs group-hover:shadow-card group-hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center text-bcsve-800 group-hover:bg-bcsve-800 group-hover:text-gold-300">
                      <Icon size={18} className="stroke-[2.2] group-hover:scale-110 transition-transform duration-300" />
                    </div>

                    {/* Step Number Tag */}
                    <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-bcsve-900 text-white text-[10px] font-extrabold flex items-center justify-center border-2 border-white shadow-xs">
                      {step.stepNumber}
                    </span>
                  </div>

                  {/* Step Title & Description */}
                  <h3 className="font-sans font-bold text-xs sm:text-[13px] text-bcsve-950 group-hover:text-bcsve-800 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[10.5px] sm:text-[11.5px] text-gray-600 leading-relaxed max-w-[200px] pt-0.5 line-clamp-3">
                    {step.description}
                  </p>
                </Reveal>
              );
            })}
          </div>

        </div>

      </Container>
    </Section>
  );
}
