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
    <Section id="fees" background="tint">
      <Container>
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-5 sm:mb-6">
          <SectionHeading
            tag={feeStructure.tag}
            heading={feeStructure.heading}
            subtitle={feeStructure.subtitle}
            noMargin
            className="flex-1"
          />

          <div className="shrink-0 flex items-center gap-2">
            <a
              href={feeStructure.downloadPdfUrl}
              download
              className="shimmer-sweep inline-flex items-center gap-1.5 h-9 px-3.5 rounded-xl bg-white hover:bg-bcsve-800 text-bcsve-950 hover:text-white border border-bcsve-200 hover:border-bcsve-800 font-bold text-xs shadow-xs transition-all duration-200 active:scale-95 font-sans"
            >
              <Download size={13} />
              <span>Download Fee PDF</span>
            </a>
          </div>
        </div>

        {/* 3 Fee Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4.5 items-stretch">
          {feeStructure.tiers.map((tier, idx) => (
            <Reveal
              key={tier.id}
              direction="up"
              delay={idx * 90}
              duration={500}
              className="h-full flex"
            >
              <TiltCard maxTilt={5} className="w-full h-full">
                <div
                  className={`h-full flex flex-col justify-between rounded-2xl p-4 sm:p-5 transition-all duration-300 font-sans relative ${
                    tier.isPopular
                      ? 'bg-gradient-to-b from-white via-cream-50 to-cream-100/80 border-2 border-bcsve-800 shadow-elevated -translate-y-1'
                      : 'bg-white border border-bcsve-200/90 shadow-card hover:shadow-elevated hover:border-bcsve-400'
                  }`}
                >
                  {/* Popular Badge */}
                  {tier.isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-bcsve-800 text-gold-300 font-extrabold text-[10px] uppercase tracking-wider shadow-sm border border-gold-400/50">
                      Most Enrolled Program
                    </div>
                  )}

                  <div className="space-y-3">
                    {/* Header: Duration & Title */}
                    <div className="border-b border-bcsve-100 pb-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10.5px] font-extrabold text-gold-700 bg-gold-50 border border-gold-200 px-2 py-0.5 rounded-md uppercase tracking-wider">
                          {tier.duration}
                        </span>
                        <span className="text-[10px] text-gray-500 font-medium">
                          Regulated Fee
                        </span>
                      </div>

                      <h3 className="font-sans font-extrabold text-base sm:text-lg text-bcsve-950 mt-1">
                        {tier.title}
                      </h3>
                      <p className="text-[11px] text-gray-600 leading-snug pt-0.5">
                        {tier.tagline}
                      </p>
                    </div>

                    {/* Price Display */}
                    <div className="p-3 rounded-xl bg-cream-50/80 border border-bcsve-100/80 text-left">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-2xl sm:text-3xl font-extrabold text-bcsve-950 font-sans">
                          {tier.centreFee}
                        </span>
                        <span className="text-[11px] text-gray-500 font-medium">
                          / complete course
                        </span>
                      </div>
                      <div className="text-[10px] text-gray-600 mt-1 flex items-center justify-between pt-1 border-t border-bcsve-100/60">
                        <span>Council Coordinator Share:</span>
                        <span className="font-bold text-bcsve-900">{tier.coordinatorFee}</span>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-1.5 pt-1">
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                        Program Inclusions
                      </div>
                      <ul className="space-y-1.5 text-[11px] sm:text-xs text-gray-700">
                        {tier.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <CheckCircle2
                              size={13}
                              className="text-emerald-600 shrink-0 mt-0.5 stroke-[2.4]"
                            />
                            <span className="leading-snug">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="pt-4 mt-3 border-t border-bcsve-100">
                    <button
                      type="button"
                      onClick={() => (onOpenApply ? onOpenApply() : onOpenEnquiry && onOpenEnquiry(tier.title))}
                      className={`w-full h-9 min-h-[36px] rounded-xl font-bold text-xs shadow-xs transition-all duration-200 flex items-center justify-center gap-1.5 active:scale-95 ${
                        tier.isPopular
                          ? 'bg-bcsve-800 hover:bg-bcsve-900 text-white hover:shadow-card'
                          : 'bg-cream-100 hover:bg-bcsve-800 text-bcsve-900 hover:text-white border border-bcsve-200 hover:border-bcsve-800'
                      }`}
                    >
                      <span>Enrol for {tier.duration}</span>
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        {/* Bottom Council Guarantee Note */}
        <div className="mt-4 p-3 rounded-xl bg-white border border-gold-200/90 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left text-xs text-gray-600 font-sans shadow-xs">
          <div className="flex items-center gap-2 text-bcsve-900 font-medium">
            <ShieldCheck size={16} className="text-gold-600 shrink-0" />
            <span>{feeStructure.approvalNote}</span>
          </div>
          <div className="flex items-center gap-1 text-[11px] text-gray-500">
            <Tag size={12} className="text-gold-600" />
            <span>No hidden charges • Regulated nationwide</span>
          </div>
        </div>
      </Container>
    </Section>
  );
}
