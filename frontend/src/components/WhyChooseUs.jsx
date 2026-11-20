import React from 'react';
import { siteData } from '../data/siteData';
import { siteImages } from '../assets/images';
import Section from './common/Section';
import Container from './common/Container';
import SectionHeading from './common/SectionHeading';
import Reveal from './common/Reveal';
import TiltCard from './common/TiltCard';
import ImagePlaceholder from './common/ImagePlaceholder';
import { Award, Sliders, Laptop, Users, Flame } from 'lucide-react';

const featureIcons = {
  Award,
  Sliders,
  Monitor: Laptop,
  Users,
};

export default function WhyChooseUs() {
  const { whyChooseUs } = siteData;

  return (
    <Section id="why-choose-us" background="white">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center">

          {/* Left Column: Heading & Description (Span 4) */}
          <div className="lg:col-span-4 text-left font-sans">
            <SectionHeading
              tag={whyChooseUs.tag}
              heading={whyChooseUs.heading}
              subtitle="Empowering individuals and institutions with recognized credentials, hands-on learning frameworks, and robust industry linkages."
              noMargin
            />
          </div>

          {/* Center Column: 4 Feature Cards (Span 5) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 font-sans">
            {whyChooseUs.features.map((feature, idx) => {
              const Icon = featureIcons[feature.icon] || Award;
              return (
                <Reveal
                  key={feature.title}
                  direction="up"
                  delay={idx * 75}
                  duration={500}
                  className="h-full"
                >
                  <TiltCard maxTilt={6} className="h-full">
                    <div className="h-full p-3.5 sm:p-4 rounded-xl bg-cream-50/60 border border-bcsve-100/90 shadow-xs hover:shadow-card hover:border-bcsve-300 hover:-translate-y-0.5 transition-all duration-300 text-left flex flex-col justify-between group font-sans">
                      <div className="space-y-1.5">
                        <div className="w-8 h-8 rounded-lg bg-white border border-bcsve-100 flex items-center justify-center text-bcsve-800 shadow-xs group-hover:scale-110 group-hover:rotate-12 group-hover:bg-bcsve-800 group-hover:text-gold-300 transition-all duration-300">
                          <Icon size={15} className="stroke-[2.2]" />
                        </div>
                        <h3 className="font-sans font-bold text-xs sm:text-[13px] text-bcsve-950 group-hover:text-bcsve-800 transition-colors line-clamp-2">
                          {feature.title}
                        </h3>
                        <p className="text-[10.5px] sm:text-[11.5px] text-gray-600 leading-relaxed font-sans line-clamp-3">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>

          {/* Right Column: Torch Graphic (Span 3) with Soft Float & 3D Tilt */}
          <div className="lg:col-span-3 flex justify-center items-center relative">
            <Reveal direction="zoom" delay={150} duration={700}>
              {/* Soft gold glow behind the graphic */}
              <div className="absolute -inset-4 rounded-full bg-gold-200/35 blur-2xl pointer-events-none animate-pulseGlow" />

              <div className="w-full max-w-[130px] sm:max-w-[150px] relative z-10">
                {siteImages.torchLaurelGraphic ? (
                  <TiltCard maxTilt={8}>
                    <div className="rounded-xl overflow-hidden border border-gold-200/80 shadow-card p-1 bg-white/95 backdrop-blur-sm transition-all duration-300 animate-float-2">
                      <img
                        src={siteImages.torchLaurelGraphic}
                        alt="BCSVE Golden Torch & Laurel Excellence"
                        className="w-full aspect-[3/4] object-contain rounded-lg"
                        width={200}
                        height={266}
                        loading="lazy"
                      />
                    </div>
                  </TiltCard>
                ) : (
                  <div className="p-2 bg-gradient-to-b from-cream-100/80 to-cream-50 rounded-xl border border-gold-200 shadow-sm">
                    <ImagePlaceholder
                      src={null}
                      label="Golden Torch & Laurel"
                      dimensions="250 × 300 px"
                      aspectRatio="aspect-[3/4]"
                      className="w-full h-40 rounded-lg"
                      icon={Flame}
                      badgeText="Excellence"
                    />
                  </div>
                )}
              </div>
            </Reveal>
          </div>

        </div>
      </Container>
    </Section>
  );
}
