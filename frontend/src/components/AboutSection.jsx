import React from 'react';
import { siteData } from '../data/siteData';
import { siteImages } from '../assets/images';
import Section from './common/Section';
import Container from './common/Container';
import SectionHeading from './common/SectionHeading';
import Reveal from './common/Reveal';
import TiltCard from './common/TiltCard';
import { Target, Eye } from 'lucide-react';

export default function AboutSection() {
  const { about } = siteData;

  return (
    <Section id="about" background="white" border="none">
      {/* Background subtle radial glow */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-cream-200/35 rounded-full blur-3xl pointer-events-none animate-float-orb-1" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center">
          
          {/* Left Column: Students Image Collage with Soft 3D Tilt & Floating Frame (Span 5) */}
          <div className="lg:col-span-5 relative flex items-center justify-start">
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
                </TiltCard>
              </div>
            </Reveal>
          </div>

          {/* Right Column: About Content & Mission/Vision Cards (Span 7) */}
          <div className="lg:col-span-7 space-y-3 text-left font-sans">
            <SectionHeading
              tag={about.tag}
              heading={about.heading}
              subtitle={about.description}
              noMargin
            />

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              
              {/* Mission Card */}
              <Reveal direction="up" delay={150} duration={600} className="h-full">
                <TiltCard maxTilt={6} className="h-full">
                  <div className="group h-full p-3.5 sm:p-4 rounded-xl bg-cream-50/70 border border-bcsve-100/90 hover:border-bcsve-300 hover:bg-white shadow-xs hover:shadow-card hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between font-sans">
                    <div className="space-y-2">
                      <div className="w-8 h-8 rounded-lg bg-bcsve-100 text-bcsve-800 flex items-center justify-center shadow-xs group-hover:rotate-12 group-hover:scale-110 group-hover:bg-bcsve-800 group-hover:text-gold-300 transition-all duration-300">
                        <Target size={16} className="stroke-[2.2]" />
                      </div>
                      <h3 className="font-sans font-bold text-xs sm:text-sm text-bcsve-950 group-hover:text-bcsve-800 transition-colors">
                        Our Mission
                      </h3>
                      <p className="text-[11px] sm:text-xs text-gray-600 leading-relaxed font-sans line-clamp-3">
                        To provide accessible, skill-based education that empowers individuals for meaningful employment and lifelong self-reliance.
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>

              {/* Vision Card */}
              <Reveal direction="up" delay={250} duration={600} className="h-full">
                <TiltCard maxTilt={6} className="h-full">
                  <div className="group h-full p-3.5 sm:p-4 rounded-xl bg-cream-50/70 border border-gold-200/90 hover:border-gold-400 hover:bg-white shadow-xs hover:shadow-card hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between font-sans">
                    <div className="space-y-2">
                      <div className="w-8 h-8 rounded-lg bg-gold-100 text-gold-700 flex items-center justify-center shadow-xs group-hover:rotate-12 group-hover:scale-110 group-hover:bg-gold-600 group-hover:text-white transition-all duration-300">
                        <Eye size={16} className="stroke-[2.2]" />
                      </div>
                      <h3 className="font-sans font-bold text-xs sm:text-sm text-bcsve-950 group-hover:text-gold-700 transition-colors">
                        Our Vision
                      </h3>
                      <p className="text-[11px] sm:text-xs text-gray-600 leading-relaxed font-sans line-clamp-3">
                        To be a leading national body in skill and vocational education, creating an accredited, competent, and inclusive talent ecosystem.
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>

            </div>

          </div>

        </div>
      </Container>
    </Section>
  );
}
