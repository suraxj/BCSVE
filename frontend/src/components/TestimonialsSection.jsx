import React from 'react';
import { siteData } from '../data/siteData';
import { siteImages } from '../assets/images';
import Section from './common/Section';
import Container from './common/Container';
import SectionHeading from './common/SectionHeading';
import Reveal from './common/Reveal';
import TiltCard from './common/TiltCard';
import { Star, User } from 'lucide-react';

export default function TestimonialsSection() {
  const { testimonials } = siteData;

  const testimonialImages = {
    testimonialPooja: siteImages.testimonialPooja,
    testimonialRohit: siteImages.testimonialRohit,
    testimonialNeha: siteImages.testimonialNeha,
  };

  return (
    <Section id="testimonials" background="white">
      <Container>

        {/* Section Header */}
        <SectionHeading
          centered
          tag={testimonials.tag}
          heading={testimonials.heading}
          subtitle="Real experiences and career milestones shared by certified learners nationwide."
        />

        {/* Testimonials Cards Grid with 3D TiltCards & Staggered Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
          {testimonials.items.map((item, idx) => {
            const avatarSrc = testimonialImages[item.avatarKey];

            return (
              <Reveal
                key={item.id}
                direction="up"
                delay={idx * 90}
                duration={550}
                className="h-full"
              >
                <TiltCard maxTilt={6} className="h-full">
                  <div className="h-full p-3.5 sm:p-4 rounded-xl bg-cream-50/70 border border-bcsve-100/90 hover:bg-white hover:border-bcsve-300 hover:shadow-card hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between text-left space-y-2.5 font-sans group">

                    {/* Top: Avatar & Stars & Quote */}
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-2.5">

                        {/* Student Avatar */}
                        <div className="shrink-0">
                          {avatarSrc ? (
                            <img
                              src={avatarSrc}
                              alt={item.author}
                              className="w-9 h-9 rounded-full object-cover ring-2 ring-gold-300/80 group-hover:ring-3 group-hover:ring-gold-400 group-hover:scale-105 transition-all duration-300 shadow-xs"
                              width={36}
                              height={36}
                              loading="lazy"
                            />
                          ) : (
                            <div
                              className="w-9 h-9 rounded-full bg-white border border-dashed border-bcsve-300 flex flex-col items-center justify-center text-center p-0.5"
                              title={item.placeholderLabel}
                            >
                              <User size={14} className="text-bcsve-700" />
                              <span className="text-[7.5px] font-bold text-bcsve-900 leading-tight">
                                [Avatar]
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Golden Stars Rating */}
                        <div className="flex items-center text-gold-500 gap-0.5 pt-0.5">
                          {[...Array(item.rating)].map((_, i) => (
                            <div
                              key={i}
                              style={{ animationDelay: `${idx * 100 + i * 65}ms` }}
                              className="animate-popIn group-hover:scale-110 transition-transform duration-200"
                            >
                              <Star size={13} fill="currentColor" />
                            </div>
                          ))}
                        </div>

                      </div>

                      {/* Testimonial Quote */}
                      <p className="text-xs sm:text-[12.5px] text-gray-700 italic leading-relaxed font-sans line-clamp-4">
                        "{item.quote}"
                      </p>
                    </div>

                    {/* Bottom: Student Name & Program */}
                    <div className="pt-2 border-t border-bcsve-100/60 font-sans mt-auto">
                      <h4 className="font-sans font-bold text-xs sm:text-[13px] text-bcsve-950 group-hover:text-bcsve-800 transition-colors">
                        {item.author}
                      </h4>
                      <span className="text-[10.5px] text-bcsve-700 font-medium block pt-0.5">
                        {item.program}
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
