import React from 'react';
import { siteData } from '../data/siteData';
import { siteImages } from '../assets/images';
import Section from './common/Section';
import Container from './common/Container';

// Refined Laurel SVG Branch
const LaurelBranch = ({ flip = false }) => (
  <svg
    className={`w-4.5 h-4.5 sm:w-5 sm:h-5 text-gold-500 fill-current shrink-0 transition-transform ${flip ? 'scale-x-[-1]' : ''}`}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M7.2 4.5c.4 1.2-.1 2.5-1.1 3.2-1 .7-2.3.6-3.1 0 .3 1.3 1.1 2.3 2.3 2.8.3 1.2-.1 2.5-1.1 3.2-1 .7-2.3.6-3.1 0 .4 1.4 1.4 2.5 2.8 2.8.3 1.2-.1 2.5-1.1 3.2-.8.5-1.8.6-2.6.3 1.6 2.1 4.2 3.2 7 2.6 4.9-1 8.2-5.4 8.2-10.4 0-3.7-1.9-7.1-5-9-.9.6-1.9.8-2.7.4z" />
  </svg>
);

export default function PartnerRibbon() {
  const { partners } = siteData;

  const partnerImageKeys = {
    nsdc: siteImages.partnerNsdc,
    skillindia: siteImages.partnerSkillIndia,
    nielit: siteImages.partnerNielit,
    msde: siteImages.partnerMsde,
  };

  // Duplicate for seamless infinite marquee loop
  const marqueePartners = [...partners, ...partners, ...partners, ...partners];

  return (
    <Section id="partners" background="white" variant="standard" border="both">
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-6">
          
          {/* Label with SVG Laurel aesthetic */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0 text-bcsve-950 text-left">
            <LaurelBranch />
            <div className="flex flex-col text-left">
              <span className="font-sans font-bold text-sm sm:text-base tracking-tight text-bcsve-950">
                Our Partner Institutes
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-gold-600 font-sans">
                National Skill Framework
              </span>
            </div>
            <LaurelBranch flip />
          </div>

          {/* Smooth Infinite Marquee Strip with Pause on Hover */}
          <div className="relative w-full flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="flex w-max items-center gap-3 sm:gap-4 animate-marquee hover:[animation-play-state:paused]">
              {marqueePartners.map((partner, idx) => (
                <div
                  key={`${partner.id}-${idx}`}
                  className="bg-cream-50/70 rounded-xl border border-bcsve-100/90 px-4 py-2 shadow-xs hover:shadow-card hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center h-12 sm:h-14 min-w-[145px] sm:min-w-[170px] group cursor-pointer"
                >
                  {partnerImageKeys[partner.id] ? (
                    <img
                      src={partnerImageKeys[partner.id]}
                      alt={partner.fullName || partner.name}
                      className="max-h-7 sm:max-h-8 w-auto object-contain mix-blend-multiply grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                      width={140}
                      height={32}
                      loading="lazy"
                    />
                  ) : (
                    <div className="text-center w-full font-sans">
                      <span className="block text-xs font-bold text-bcsve-900 tracking-tight">
                        {partner.name}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
