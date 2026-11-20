import React from 'react';
import { siteData } from '../data/siteData';
import Section from './common/Section';
import Container from './common/Container';
import SectionHeading from './common/SectionHeading';
import Reveal from './common/Reveal';
import TiltCard from './common/TiltCard';
import { ShieldCheck, CheckCircle, Award, CheckSquare } from 'lucide-react';

const accreditationIcons = {
  ShieldCheck,
  CheckCircle,
  Award,
  CheckSquare,
};

export default function Accreditations() {
  const { accreditations } = siteData;

  return (
    <Section id="accreditations" background="white">
      <Container>
        
        {/* Section Heading */}
        <SectionHeading
          centered
          tag={accreditations.tag}
          heading={accreditations.heading}
          subtitle={accreditations.subtitle}
        />

        {/* 4 Recognition Cards Grid with Standard Gap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
          {accreditations.items.map((item, idx) => {
            const Icon = accreditationIcons[item.icon] || ShieldCheck;

            return (
              <Reveal key={item.id} direction="up" delay={idx * 80} duration={500} className="h-full">
                <TiltCard maxTilt={6} className="h-full">
                  <div className="h-full rounded-xl bg-cream-50/60 border border-bcsve-100/90 shadow-xs hover:shadow-card hover:border-gold-300 hover:-translate-y-0.5 transition-all duration-300 p-3.5 sm:p-4 flex flex-col justify-between text-left group">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="w-8 h-8 rounded-lg bg-white border border-bcsve-100 group-hover:bg-bcsve-800 group-hover:text-gold-300 text-bcsve-800 flex items-center justify-center shadow-xs transition-colors duration-300">
                          <Icon size={16} className="stroke-[2.2]" />
                        </div>
                        <span className="text-[9px] font-bold text-bcsve-800 bg-white border border-bcsve-100 px-2 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      </div>

                      <div>
                        <h3 className="font-sans font-bold text-xs sm:text-[13px] text-bcsve-950 group-hover:text-bcsve-800 transition-colors leading-snug line-clamp-2">
                          {item.name}
                        </h3>
                        <p className="text-[10.5px] font-semibold text-gold-700 pt-0.5">
                          {item.authority}
                        </p>
                      </div>

                      <p className="text-[10.5px] text-gray-600 leading-relaxed pt-0.5 line-clamp-3">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-2 mt-2 border-t border-bcsve-100/60 flex items-center gap-1.5 text-[10.5px] text-emerald-700 font-semibold mt-auto">
                      <CheckCircle size={12} className="stroke-[2.5]" />
                      <span>Compliant & Verifiable</span>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>

      </Container>
    </Section>
  );
}
