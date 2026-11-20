import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import Section from './common/Section';
import Container from './common/Container';
import SectionHeading from './common/SectionHeading';
import Reveal from './common/Reveal';
import { 
  Bell, 
  Calendar, 
  ArrowRight, 
  FileCheck, 
  Ticket, 
  Download, 
  UserCheck, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';

const quickIcons = {
  FileCheck,
  Ticket,
  Download,
  UserCheck,
};

export default function NoticeBoard() {
  const { noticeBoard } = siteData;
  const [isPaused, setIsPaused] = useState(false);

  return (
    <Section id="notices" background="white">
      <Container>
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-3 sm:mb-3.5">
          <SectionHeading
            tag={noticeBoard.tag}
            heading={noticeBoard.heading}
            subtitle="Official notifications, academic circulars, and quick service portals for enrolled learners."
            noMargin
            className="flex-1"
          />
          <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-bcsve-800 font-semibold shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Portal Live Updates</span>
          </div>
        </div>

        {/* Two-Column Card Grid with Standard 12-Col Split (7 / 5) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 lg:gap-4 items-stretch">
          
          {/* Column 1: Latest Notices (Auto-scrolling list with pause on hover) */}
          <div className="lg:col-span-7">
            <Reveal direction="left" duration={600} className="h-full">
              <div 
                className="h-full rounded-xl bg-cream-50/70 border border-bcsve-100/90 shadow-xs hover:shadow-card p-3.5 sm:p-4 flex flex-col justify-between transition-shadow duration-300"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div>
                  <div className="flex items-center justify-between border-b border-bcsve-100/80 pb-2 mb-2.5">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-bcsve-800 text-gold-300 flex items-center justify-center shadow-xs">
                        <Bell size={14} />
                      </div>
                      <h3 className="font-sans font-bold text-xs sm:text-sm text-bcsve-950">
                        Official Notices & Circulars
                      </h3>
                    </div>
                    <span className="text-[10px] font-semibold text-gray-500 bg-white px-2 py-0.5 rounded-full border border-bcsve-100">
                      {isPaused ? 'Paused' : 'Live Feed'}
                    </span>
                  </div>

                  {/* Vertical Notice List */}
                  <div className="space-y-2 overflow-y-auto max-h-[220px] pr-1">
                    {noticeBoard.notices.map((notice) => (
                      <a
                        key={notice.id}
                        href={notice.href}
                        className="group flex items-start justify-between gap-2.5 p-2.5 rounded-lg bg-white border border-bcsve-100/80 hover:border-bcsve-400 hover:shadow-xs transition-all duration-200 text-left font-sans block"
                      >
                        <div className="space-y-1 flex-1">
                          <div className="flex flex-wrap items-center gap-1.5">
                            {notice.isNew && (
                              <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-extrabold uppercase bg-red-600 text-white tracking-wider animate-pulse">
                                NEW
                              </span>
                            )}
                            <span className="text-[9px] font-bold text-bcsve-700 bg-bcsve-50 px-1.5 py-0.5 rounded">
                              {notice.category}
                            </span>
                            <span className="text-[10px] text-gray-500 flex items-center gap-1">
                              <Calendar size={10} />
                              <span>{notice.date}</span>
                            </span>
                          </div>
                          <p className="text-xs sm:text-[12.5px] font-semibold text-gray-900 group-hover:text-bcsve-800 transition-colors leading-snug line-clamp-2">
                            {notice.title}
                          </p>
                        </div>
                        <ChevronRight size={14} className="text-gray-400 group-hover:text-bcsve-800 group-hover:translate-x-1 transition-all shrink-0 mt-0.5" />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="pt-2.5 mt-2 border-t border-bcsve-100/60 flex items-center justify-between text-[11px] text-gray-500 font-sans mt-auto">
                  <span>Updated daily by BCSVE Academic Wing</span>
                  <a href="#verification" className="text-bcsve-800 hover:text-bcsve-950 font-bold inline-flex items-center gap-1 hover:underline">
                    <span>Archive Circulars</span>
                    <ArrowRight size={11} />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Column 2: Quick Links Grid (Span 5) */}
          <div className="lg:col-span-5">
            <Reveal direction="right" duration={600} className="h-full">
              <div className="h-full rounded-xl bg-gradient-to-br from-cream-100/80 via-white to-cream-50 border border-gold-200/90 shadow-xs hover:shadow-card p-3.5 sm:p-4 flex flex-col justify-between transition-shadow duration-300">
                <div>
                  <div className="border-b border-bcsve-100/80 pb-2 mb-2.5 flex items-center justify-between">
                    <h3 className="font-sans font-bold text-xs sm:text-sm text-bcsve-950 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-gold-500" />
                      <span>Student & Candidate Desk</span>
                    </h3>
                    <span className="text-[10px] font-medium text-gray-500">Quick Access</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {noticeBoard.quickLinks.map((link) => {
                      const Icon = quickIcons[link.icon] || ExternalLink;

                      return (
                        <a
                          key={link.title}
                          href={link.href}
                          className="group p-2.5 rounded-lg bg-white border border-bcsve-100 hover:border-gold-400 hover:shadow-card hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between text-left font-sans min-h-[88px]"
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <div className="w-7 h-7 rounded-lg bg-bcsve-50 group-hover:bg-bcsve-800 group-hover:text-gold-300 text-bcsve-800 flex items-center justify-center transition-all duration-200">
                              <Icon size={14} />
                            </div>
                            <ArrowRight size={12} className="text-gray-400 group-hover:text-bcsve-800 group-hover:translate-x-1 transition-all" />
                          </div>
                          <div>
                            <h4 className="text-[11.5px] sm:text-xs font-bold text-bcsve-950 group-hover:text-bcsve-800 transition-colors line-clamp-1">
                              {link.title}
                            </h4>
                            <p className="text-[10px] text-gray-500 leading-tight pt-0.5 line-clamp-2">
                              {link.description}
                            </p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-2.5 pt-2 border-t border-bcsve-100/60 text-center mt-auto">
                  <p className="text-[10.5px] text-gray-500">
                    Need immediate technical help? Call Support: <span className="font-bold text-bcsve-900">+91 8595350621</span>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

        </div>

      </Container>
    </Section>
  );
}
