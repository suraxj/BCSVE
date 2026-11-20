import React from 'react';
import { siteData } from '../data/siteData';
import Section from './common/Section';
import Container from './common/Container';
import SectionHeading from './common/SectionHeading';
import Reveal from './common/Reveal';
import { FileText, Download } from 'lucide-react';

export default function DownloadsSection() {
  const { downloads } = siteData;

  return (
    <Section id="downloads" background="white">
      <Container>
        
        {/* Section Heading */}
        <SectionHeading
          centered
          tag={downloads.tag}
          heading={downloads.heading}
          subtitle={downloads.subtitle}
        />

        {/* Downloads Grid with Standard Gap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
          {downloads.items.map((file, idx) => (
            <Reveal key={file.id} direction="up" delay={idx * 70} duration={500} className="h-full">
              <div className="h-full rounded-xl bg-cream-50/70 border border-bcsve-100/90 shadow-xs hover:shadow-card hover:border-bcsve-300 hover:-translate-y-0.5 transition-all duration-300 p-3.5 sm:p-4 flex flex-col justify-between text-left group">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg bg-white border border-bcsve-100 text-bcsve-800 group-hover:bg-bcsve-800 group-hover:text-gold-300 flex items-center justify-center transition-colors shadow-xs">
                      <FileText size={16} className="stroke-[2.2]" />
                    </div>
                    <span className="text-[9px] font-bold text-gray-500 bg-white border border-bcsve-100 px-1.5 py-0.5 rounded">
                      {file.format} • {file.size}
                    </span>
                  </div>

                  <div>
                    <span className="text-[9px] font-extrabold text-gold-700 uppercase tracking-wider block mb-0.5">
                      {file.category}
                    </span>
                    <h3 className="font-sans font-bold text-xs sm:text-[13px] text-bcsve-950 group-hover:text-bcsve-800 transition-colors leading-snug line-clamp-2">
                      {file.title}
                    </h3>
                  </div>
                </div>

                <div className="pt-2 mt-2 border-t border-bcsve-100/60 mt-auto">
                  <a
                    href={file.fileUrl}
                    download
                    className="w-full inline-flex items-center justify-center gap-1.5 min-h-[34px] h-8.5 px-3 rounded-lg bg-white group-hover:bg-bcsve-800 text-bcsve-900 group-hover:text-white font-bold text-xs border border-bcsve-200 group-hover:border-bcsve-800 transition-all duration-200 shadow-xs active:scale-95 font-sans"
                  >
                    <Download size={13} />
                    <span>Download File</span>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </Container>
    </Section>
  );
}
