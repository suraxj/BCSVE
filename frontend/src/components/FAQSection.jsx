import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import Section from './common/Section';
import Container from './common/Container';
import SectionHeading from './common/SectionHeading';
import Reveal from './common/Reveal';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const { faqs } = siteData;
  const [openId, setOpenId] = useState(faqs.items[0]?.id || null);

  const toggleAccordion = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <Section id="faqs" background="tint">
      <Container>
        
        {/* Section Heading */}
        <SectionHeading
          centered
          tag={faqs.tag}
          heading={faqs.heading}
          subtitle={faqs.subtitle}
        />

        {/* Accordion List Constrained Inside Container */}
        <div className="max-w-3xl mx-auto space-y-2">
          {faqs.items.map((item, idx) => {
            const isOpen = openId === item.id;

            return (
              <Reveal key={item.id} direction="up" delay={idx * 50} duration={400}>
                <div className="rounded-xl bg-white border border-bcsve-100/90 shadow-xs hover:border-bcsve-300 transition-all duration-200 overflow-hidden">
                  
                  {/* Accordion Header / Trigger Button with 36px+ Tap Target */}
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    id={`faq-btn-${item.id}`}
                    className="w-full min-h-[38px] p-2.5 sm:p-3 text-left flex items-center justify-between gap-2.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-bcsve-800 transition-colors"
                  >
                    <span className="font-sans font-bold text-xs sm:text-[13px] text-bcsve-950 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
                      <span>{item.question}</span>
                    </span>
                    <div 
                      className={`w-6 h-6 rounded-full bg-cream-100 border border-gold-200 flex items-center justify-center text-bcsve-800 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-bcsve-800 text-white border-bcsve-800' : ''
                      }`}
                    >
                      <ChevronDown size={12} />
                    </div>
                  </button>

                  {/* Accordion Content */}
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${item.id}`}
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100 pb-3 px-3.5' : 'grid-rows-[0fr] opacity-0 p-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="text-xs sm:text-[12.5px] text-gray-600 leading-relaxed pt-1.5 border-t border-bcsve-100/50">
                        {item.answer}
                      </div>
                    </div>
                  </div>

                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Support Note */}
        <div className="text-center pt-3 mt-1">
          <p className="text-[11px] sm:text-xs text-gray-500">
            Have a different question? Contact our help desk at{' '}
            <a href="mailto:info@ccvte.org" className="text-bcsve-800 font-bold hover:underline">
              info@ccvte.org
            </a>
          </p>
        </div>

      </Container>
    </Section>
  );
}
