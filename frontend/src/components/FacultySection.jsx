import React from 'react';
import { siteData } from '../data/siteData';
import { siteImages } from '../assets/images';
import Section from './common/Section';
import Container from './common/Container';
import SectionHeading from './common/SectionHeading';
import Reveal from './common/Reveal';
import TiltCard from './common/TiltCard';
import { Mail, GraduationCap } from 'lucide-react';

const LinkedInIcon = ({ size = 15 }) => (
  <svg className="fill-current" width={size} height={size} viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const avatarMap = {
  testimonialRohit: siteImages.testimonialRohit,
  testimonialNeha: siteImages.testimonialNeha,
  testimonialPooja: siteImages.testimonialPooja,
};

export default function FacultySection() {
  const { faculty } = siteData;

  return (
    <Section id="faculty" background="tint">
      <Container>
        
        {/* Section Heading */}
        <SectionHeading
          centered
          tag={faculty.tag}
          heading={faculty.heading}
          subtitle={faculty.subtitle}
        />

        {/* 4 Faculty Cards Grid with Standard Gap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
          {faculty.members.map((member, idx) => {
            const avatarSrc = avatarMap[member.avatar] || siteImages.testimonialPooja;

            return (
              <Reveal 
                key={member.id} 
                direction="up" 
                delay={idx * 80} 
                duration={500} 
                className="h-full"
              >
                <TiltCard maxTilt={5} className="h-full">
                  <div className="h-full rounded-xl bg-white border border-bcsve-100/90 shadow-xs hover:shadow-card hover:border-bcsve-300 hover:-translate-y-0.5 transition-all duration-300 p-3.5 sm:p-4 flex flex-col justify-between text-left group">
                    <div className="space-y-2.5">
                      
                      {/* Avatar Image with Hover Social Overlay */}
                      <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-cream-100 border border-bcsve-100/60 flex items-center justify-center">
                        <img
                          src={avatarSrc}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          width={280}
                          height={280}
                          loading="lazy"
                        />
                        
                        {/* Hover Overlay with Social Icons */}
                        <div className="absolute inset-0 bg-bcsve-950/70 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                          <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`LinkedIn profile for ${member.name}`}
                            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white text-white hover:text-bcsve-900 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm"
                          >
                            <LinkedInIcon size={14} />
                          </a>
                          <a
                            href="mailto:info@ccvte.org"
                            aria-label={`Email ${member.name}`}
                            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white text-white hover:text-bcsve-900 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm"
                          >
                            <Mail size={14} />
                          </a>
                        </div>
                      </div>

                      {/* Info */}
                      <div>
                        <h3 className="font-sans font-bold text-xs sm:text-[13px] text-bcsve-950 group-hover:text-bcsve-800 transition-colors leading-snug line-clamp-1">
                          {member.name}
                        </h3>
                        <p className="text-[11px] font-semibold text-gold-700 pt-0.5 line-clamp-1">
                          {member.role}
                        </p>
                        <p className="text-[10.5px] text-gray-500 pt-0.5 flex items-center gap-1 font-sans">
                          <GraduationCap size={12} className="text-bcsve-700 shrink-0" />
                          <span>{member.qualification}</span>
                        </p>
                      </div>

                      <p className="text-[10.5px] text-gray-600 leading-relaxed line-clamp-2">
                        {member.experience}
                      </p>
                    </div>

                    {/* Department Badge */}
                    <div className="pt-2 mt-2 border-t border-bcsve-100/60 mt-auto">
                      <span className="inline-block text-[9px] font-bold tracking-wider uppercase text-bcsve-800 bg-cream-100 px-2 py-0.5 rounded border border-bcsve-100/80">
                        {member.department}
                      </span>
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
