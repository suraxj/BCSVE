import React from 'react';
import { siteData } from '../data/siteData';
import Section from './common/Section';
import Container from './common/Container';
import SectionHeading from './common/SectionHeading';
import Reveal from './common/Reveal';
import TiltCard from './common/TiltCard';
import { CheckCircle2, Download, ShieldCheck, Tag, ArrowRight } from 'lucide-react';

export default function FeeStructureSection({ onOpenApply, onOpenEnquiry }) {
  const { feeStructure } = siteData;

  if (!feeStructure) return null;

  return (
    <Section id="fees" background="tint" className="py-6 sm:py-8 lg:py-10">
      <Container>
        {/* Section Heading with PDF Download */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 mb-4 sm:mb-5">
          <SectionHeading
            tag={feeStructure.tag}
            heading={feeStructure.heading}
            subtitle={feeStructure.subtitle}
            noMargin
            className="flex-1"
          />

          <div className="shrink-0 flex items-center">
            <a
              href={feeStructure.downloadPdfUrl}
              download
              className="shimmer-sweep inline-flex items-center gap-1.5 h-8 px-3 rounded-lg bg-white hover:bg-bcsve-800 text-bcsve-950 hover:text-white border border-bcsve-200 hover:border-bcsve-800 font-bold text-[11px] shadow-xs transition-all duration-200 active:scale-95 font-sans"
            >
              <Download size={12} />
              <span>Download Fee PDF</span>
            </a>
          </div>
        </div>

        {/* Compact 3 Fee Tiers Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-3.5 items-stretch">
          {feeStructure.tiers.map((tier, idx) => (
            <Reveal
              key={tier.id}
              direction="up"
              delay={idx * 80}
              duration={450}
              className="h-full flex"
            >
              <TiltCard maxTilt={4} className="w-full h-full">
                <div
                  className={`h-full flex flex-col justify-between rounded-xl p-3 sm:p-3.5 transition-all duration-200 font-sans relative ${
                    tier.isPopular
                      ? 'bg-gradient-to-b from-white via-cream-50 to-cream-100/70 border-2 border-bcsve-800 shadow-card -translate-y-0.5'
                      : 'bg-white border border-bcsve-200/80 shadow-xs hover:shadow-card hover:border-bcsve-300'
                  }`}
                >
                  {/* Popular Badge */}
                  {tier.isPopular && (
                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-bcsve-800 text-gold-300 font-extrabold text-[9px] uppercase tracking-wider shadow-xs border border-gold-400/40">
                      Most Enrolled
                    </div>
                  )}

                  <div className="space-y-2">
                    {/* Header: Duration & Title */}
                    <div className="border-b border-bcsve-100/70 pb-2 text-left">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-extrabold text-gold-700 bg-gold-50 border border-gold-200/90 px-1.5 py-0.5 rounded uppercase tracking-wider">
                          {tier.duration}
                        </span>
                        <span className="text-[9px] text-gray-400 font-medium">
                          Regulated
                        </span>
                      </div>

                      <h3 className="font-sans font-bold text-sm sm:text-[15px] text-bcsve-950 mt-1 leading-snug">
                        {tier.title}
                      </h3>
                      <p className="text-[10px] text-gray-500 leading-tight pt-0.5">
                        {tier.tagline}
                      </p>
                    </div>

                    {/* Price Display */}
                    <div className="p-2 sm:p-2.5 rounded-lg bg-cream-50/80 border border-bcsve-100/70 text-left">
                      <div className="flex items-baseline gap-1">
                        <span className="text-xl sm:text-2xl font-extrabold text-bcsve-950 font-sans">
                          {tier.centreFee}
                        </span>
                        <span className="text-[10px] text-gray-500 font-medium">
                          / total fee
                        </span>
                      </div>
                      <div className="text-[9px] text-gray-600 mt-1 flex items-center justify-between pt-1 border-t border-bcsve-100/50">
                        <span>Coordinator Share:</span>
                        <span className="font-bold text-bcsve-900">{tier.coordinatorFee}</span>
                      </div>
                    </div>

                    {/* Features List */}
                    <ul className="space-y-1 text-[10.5px] text-gray-700 text-left pt-0.5">
                      {tier.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-1.5 leading-tight">
                          <CheckCircle2
                            size={12}
                            className="text-emerald-600 shrink-0 mt-0.5 stroke-[2.4]"
                          />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Action */}
                  <div className="pt-2.5 mt-2 border-t border-bcsve-100/60">
                    <button
                      type="button"
                      onClick={() => (onOpenApply ? onOpenApply() : onOpenEnquiry && onOpenEnquiry(tier.title))}
                      className={`w-full h-8 min-h-[32px] rounded-lg font-bold text-[11px] shadow-xs transition-all duration-150 flex items-center justify-center gap-1 active:scale-95 ${
                        tier.isPopular
                          ? 'bg-bcsve-800 hover:bg-bcsve-900 text-white'
                          : 'bg-cream-50 hover:bg-bcsve-800 text-bcsve-900 hover:text-white border border-bcsve-200 hover:border-bcsve-800'
                      }`}
                    >
                      <span>Enrol {tier.duration}</span>
                      <ArrowRight size={11} />
                    </button>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        {/* Bottom Council Guarantee Note */}
        <div className="max-w-5xl mx-auto mt-3 p-2 sm:p-2.5 rounded-lg bg-white border border-gold-200/80 flex flex-col sm:flex-row items-center justify-between gap-1.5 text-center sm:text-left text-[11px] text-gray-600 font-sans shadow-xs">
          <div className="flex items-center gap-1.5 text-bcsve-900 font-medium">
            <ShieldCheck size={14} className="text-gold-600 shrink-0" />
            <span>{feeStructure.approvalNote}</span>
          </div>
          <div className="flex items-center gap-1 text-[10px] text-gray-500">
            <Tag size={11} className="text-gold-600" />
            <span>Regulated nationwide • No hidden fees</span>
          </div>
        </div>
      </Container>
    </Section>
  );
}
