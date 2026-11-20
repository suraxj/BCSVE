import React from 'react';
import { siteData } from '../data/siteData';
import { siteImages } from '../assets/images';
import Section from './common/Section';
import Container from './common/Container';
import SectionHeading from './common/SectionHeading';
import Reveal from './common/Reveal';
import TiltCard from './common/TiltCard';
import { Target, Eye, Download, CheckCircle, Sparkles } from 'lucide-react';

export default function AboutSection() {
  const { about } = siteData;

  return (
    <Section id="about" background="white" border="none">
      {/* Background subtle radial glow */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-cream-200/35 rounded-full blur-3xl pointer-events-none animate-float-orb-1" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 items-start">
          
          {/* Left Column: Image Collage + Official Credentials Strip (Span 5) */}
          <div className="lg:col-span-5 relative flex flex-col justify-start space-y-3.5">
            <Reveal direction="left" duration={750} className="w-full max-w-sm mx-auto lg:mx-0">
              <div className="relative group">
                {/* Floating gold offset frame */}
                <div 
                  className="absolute -inset-1.5 rounded-2xl border border-gold-300/50 pointer-events-none transform -rotate-1 animate-float-3 transition-transform duration-300 group-hover:rotate-0" 
                  aria-hidden="true"
                />

                <TiltCard maxTilt={6} className="relative rounded-2xl overflow-hidden bg-transparent shadow-soft">
                  <img
                    src={siteImages.aboutStudentsCollage}
                    alt="BCSVE Students on Campus - Learning that opens doors"
                    className="w-full aspect-[4/3] object-cover rounded-2xl drop-shadow-md group-hover:scale-[1.02] transition-transform duration-500"
                    width={480}
                    height={360}
                    loading="lazy"
                  />
                  
                  {/* Subtle overlay badge */}
                  <div className="absolute bottom-2 left-2 right-2 p-2 rounded-xl bg-bcsve-950/85 backdrop-blur-md border border-white/10 text-white text-left font-sans">
                    <p className="text-[10px] text-gold-300 font-bold uppercase tracking-wider">
                      National Autonomous Body
                    </p>
                    <p className="text-[11px] font-semibold text-white/90 leading-tight">
                      Approved by Govt of India (S.No.731/2010)
                    </p>
                  </div>
                </TiltCard>
              </div>
            </Reveal>

            {/* Official Profile Download Card */}
            <Reveal direction="up" delay={200} duration={600} className="w-full max-w-sm mx-auto lg:mx-0">
              <div className="p-3.5 rounded-xl bg-cream-50/80 border border-gold-200/90 shadow-xs flex items-center justify-between gap-3 text-left font-sans">
                <div className="space-y-0.5">
                  <span className="text-[9.5px] font-extrabold text-gold-700 uppercase tracking-wider block">
                    Official Brochure
                  </span>
                  <h4 className="font-sans font-bold text-xs text-bcsve-950 leading-tight">
                    Council Profile & Handbook
                  </h4>
                  <p className="text-[10.5px] text-gray-500">
                    Complete 4-page profile (PDF • 5.2 MB)
                  </p>
                </div>

                <a
                  href="/docs/bcsve-profile.pdf"
                  download
                  className="shimmer-sweep shrink-0 h-8 px-3 rounded-lg bg-bcsve-800 hover:bg-bcsve-900 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs transition-all active:scale-95"
                >
                  <Download size={13} />
                  <span>Download</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column: About Content, Vision/Mission & 6 Core Values (Span 7) */}
          <div className="lg:col-span-7 space-y-3.5 text-left font-sans">
            <div>
              {/* Hindi Title & Badge */}
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-[11px] font-extrabold text-bcsve-900 tracking-wider font-sans bg-bcsve-50 border border-bcsve-200 px-2 py-0.5 rounded-md">
                  {about.hindiHeading}
                </span>
                <span className="text-[10px] font-bold text-gold-700 bg-gold-50 border border-gold-200 px-2 py-0.5 rounded-md">
                  Act XXI of 1860
                </span>
              </div>

              <SectionHeading
                tag={about.tag}
                heading={about.heading}
                subtitle={about.description}
                noMargin
              />

              <p className="text-[11.5px] text-gray-600 leading-relaxed font-sans pt-1">
                {about.extendedDescription}
              </p>

              {/* Inspiring Quote Callout */}
              <div className="mt-2.5 p-2.5 rounded-lg bg-cream-100/70 border-l-3 border-bcsve-800 text-[11.5px] font-semibold text-bcsve-950 italic flex items-center gap-2">
                <Sparkles size={14} className="text-gold-600 shrink-0" />
                <span>"{about.subheading}"</span>
              </div>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              
              {/* Mission Card */}
              <Reveal direction="up" delay={150} duration={600} className="h-full">
                <TiltCard maxTilt={5} className="h-full">
                  <div className="group h-full p-3.5 rounded-xl bg-cream-50/70 border border-bcsve-100/90 hover:border-bcsve-300 hover:bg-white shadow-xs hover:shadow-card hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between font-sans">
                    <div className="space-y-1.5">
                      <div className="w-7.5 h-7.5 rounded-lg bg-bcsve-100 text-bcsve-800 flex items-center justify-center shadow-xs group-hover:rotate-6 group-hover:bg-bcsve-800 group-hover:text-gold-300 transition-all duration-300">
                        <Target size={15} className="stroke-[2.2]" />
                      </div>
                      <h3 className="font-sans font-bold text-xs sm:text-sm text-bcsve-950 group-hover:text-bcsve-800 transition-colors">
                        Our Mission
                      </h3>
                      <p className="text-[11px] text-gray-600 leading-relaxed font-sans">
                        {about.cards[0].description}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>

              {/* Vision Card */}
              <Reveal direction="up" delay={250} duration={600} className="h-full">
                <TiltCard maxTilt={5} className="h-full">
                  <div className="group h-full p-3.5 rounded-xl bg-cream-50/70 border border-gold-200/90 hover:border-gold-400 hover:bg-white shadow-xs hover:shadow-card hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between font-sans">
                    <div className="space-y-1.5">
                      <div className="w-7.5 h-7.5 rounded-lg bg-gold-100 text-gold-700 flex items-center justify-center shadow-xs group-hover:rotate-6 group-hover:bg-gold-600 group-hover:text-white transition-all duration-300">
                        <Eye size={15} className="stroke-[2.2]" />
                      </div>
                      <h3 className="font-sans font-bold text-xs sm:text-sm text-bcsve-950 group-hover:text-gold-700 transition-colors">
                        Our Vision
                      </h3>
                      <p className="text-[11px] text-gray-600 leading-relaxed font-sans">
                        {about.cards[1].description}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>

            </div>

            {/* 6 Core Values Section from Profile */}
            {about.coreValues && (
              <div className="pt-2 border-t border-bcsve-100/70">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-bcsve-900">
                    BCSVE Core Values
                  </h4>
                  <span className="text-[10px] text-gray-500 font-medium">
                    Guiding Every Training Initiative
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {about.coreValues.map((val) => (
                    <div
                      key={val.title}
                      className="p-2 sm:p-2.5 rounded-lg bg-white border border-bcsve-100/80 hover:border-bcsve-300 hover:bg-cream-50/60 shadow-xs transition-all duration-200 text-left font-sans"
                    >
                      <div className="font-sans font-bold text-[11px] text-bcsve-950 flex items-center gap-1.5">
                        <CheckCircle size={11} className="text-gold-600 shrink-0" />
                        <span>{val.title}</span>
                      </div>
                      <p className="text-[10px] text-gray-500 leading-tight mt-1 line-clamp-2">
                        {val.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>
      </Container>
    </Section>
  );
}
