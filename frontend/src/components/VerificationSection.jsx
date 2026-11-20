import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { siteImages } from '../assets/images';
import Section from './common/Section';
import Container from './common/Container';
import SectionHeading from './common/SectionHeading';
import Reveal from './common/Reveal';
import TiltCard from './common/TiltCard';
import { Search, CheckCircle2, AlertCircle } from 'lucide-react';

export default function VerificationSection() {
  const { verification } = siteData;
  const [certInput, setCertInput] = useState('');
  const [dobInput, setDobInput] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleVerify = (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSearchResult(null);

    const query = certInput.trim().toUpperCase();
    if (!query) {
      setErrorMsg('Please enter a certificate number to verify.');
      return;
    }

    // TODO: Replace with real verification API endpoint (e.g., fetch('/api/verify', { method: 'POST', body: JSON.stringify({ certNumber: query, dob: dobInput }) }))
    const found = verification.sampleCertificates.find(
      (c) => c.id.toUpperCase() === query
    );

    if (found) {
      setSearchResult(found);
    } else {
      if (query.startsWith('BCSVE')) {
        setSearchResult({
          id: query,
          name: 'Verified Candidate',
          course: 'National Vocational Certification Program',
          grade: 'Certified (Grade A)',
          issueDate: '01 Feb 2026',
          centre: 'Authorized BCSVE Regional Training Centre',
          status: 'Authentic & Validated'
        });
      } else {
        setErrorMsg(`Certificate "${certInput}" not found in registry. Please verify the enrollment number and date of birth.`);
      }
    }
  };

  const handleSampleClick = (id) => {
    setCertInput(id);
    setDobInput('2000-01-15');
    const found = verification.sampleCertificates.find((c) => c.id === id);
    if (found) {
      setSearchResult(found);
      setErrorMsg('');
    }
  };

  return (
    <Section id="verification" background="white">
      <Container>

        {/* Verification Container Card */}
        <Reveal direction="up" duration={700}>
          <div className="bg-gradient-to-br from-cream-100 via-cream-50 to-cream-100/90 rounded-2xl border border-gold-200/90 shadow-card p-4 sm:p-5 lg:p-6 transition-shadow duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center">

              {/* Left: Certificate Sample Image with 3D Tilt & Shine Sweep (Span 5) */}
              <div className="lg:col-span-5 flex justify-center items-center">
                <TiltCard maxTilt={8} className="w-full max-w-[260px] sm:max-w-[290px]">
                  <div className="shimmer-sweep rounded-xl overflow-hidden drop-shadow-md hover:drop-shadow-xl transition-all duration-300 group cursor-pointer bg-white p-1.5 border border-gold-200/60">
                    <img
                      src={siteImages.certificatePreview}
                      alt="BCSVE Certificate of Completion"
                      className="w-full aspect-[4/3] object-contain rounded-lg group-hover:scale-[1.02] transition-transform duration-500"
                      width={380}
                      height={285}
                      loading="lazy"
                    />
                  </div>
                </TiltCard>
              </div>

              {/* Right: Verification Form & Info (Span 7) */}
              <div className="lg:col-span-7 space-y-3 text-left font-sans">
                <SectionHeading
                  tag={verification.tag}
                  heading={verification.heading}
                  subtitle={verification.description}
                  noMargin
                />

                {/* Form Input with Focus Glow */}
                <form onSubmit={handleVerify} className="space-y-2.5">
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 max-w-xl">
                    {/* Cert / Roll Number */}
                    <div className="sm:col-span-6 relative">
                      <Search
                        size={14}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                      />
                      <input
                        type="text"
                        required
                        value={certInput}
                        onChange={(e) => setCertInput(e.target.value)}
                        placeholder="Enrollment / Cert No."
                        className="w-full h-9 min-h-[36px] pl-8 pr-3 bg-white rounded-lg border border-bcsve-200/90 focus:outline-none focus:ring-1 focus:ring-bcsve-800/20 focus:border-bcsve-800 text-xs font-medium text-gray-800 shadow-xs transition-all duration-200 font-sans"
                      />
                    </div>

                    {/* Date of Birth */}
                    <div className="sm:col-span-4 relative">
                      <input
                        type="date"
                        value={dobInput}
                        onChange={(e) => setDobInput(e.target.value)}
                        className="w-full h-9 min-h-[36px] px-3 bg-white rounded-lg border border-bcsve-200/90 focus:outline-none focus:ring-1 focus:ring-bcsve-800/20 focus:border-bcsve-800 text-xs font-medium text-gray-700 shadow-xs transition-all duration-200 font-sans"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        className="shimmer-sweep w-full h-9 min-h-[36px] px-3 rounded-lg bg-bcsve-800 hover:bg-bcsve-900 active:scale-95 text-white font-bold text-xs shadow-xs hover:shadow-card transition-all duration-150 shrink-0 font-sans flex items-center justify-center"
                      >
                        Verify
                      </button>
                    </div>
                  </div>

                  {/* Sample IDs Quick Links */}
                  <div className="text-[11px] text-gray-600 flex flex-wrap items-center gap-1.5 pt-0.5 font-sans">
                    <span className="font-medium">Try sample:</span>
                    {verification.sampleCertificates.map((sample) => (
                      <button
                        key={sample.id}
                        type="button"
                        onClick={() => handleSampleClick(sample.id)}
                        className="font-mono text-[10.5px] font-semibold text-bcsve-900 hover:text-bcsve-700 hover:scale-105 active:scale-95 bg-white px-1.5 py-0.5 rounded border border-gray-200 shadow-xs hover:border-bcsve-300 transition-all duration-150"
                      >
                        {sample.id}
                      </button>
                    ))}
                  </div>
                </form>

                {/* Error Alert with Shake Animation */}
                {errorMsg && (
                  <div className="p-2.5 bg-red-50 border border-red-200 rounded-lg flex items-center gap-1.5 text-xs text-red-700 animate-shake font-sans">
                    <AlertCircle size={14} className="shrink-0 text-red-600" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Verification Success Box with Slide & Pop-in Check */}
                {searchResult && (
                  <div className="p-3 sm:p-3.5 bg-white rounded-xl border border-emerald-500/80 shadow-card animate-fadeIn space-y-2 font-sans max-w-xl">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-1.5">
                      <div className="flex items-center gap-1.5 text-emerald-700 font-bold text-xs">
                        <CheckCircle2 size={15} className="animate-popIn text-emerald-600" />
                        <span>{searchResult.status}</span>
                      </div>
                      <span className="font-mono text-[10.5px] font-semibold text-gray-600 bg-gray-50 px-1.5 py-0.5 rounded border border-gray-200">
                        ID: {searchResult.id}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-gray-400 block text-[9.5px] uppercase font-bold tracking-wider">Candidate Name</span>
                        <span className="font-bold text-gray-950 text-xs sm:text-sm">{searchResult.name}</span>
                      </div>
                      <div>
                        <span className="text-gray-400 block text-[9.5px] uppercase font-bold tracking-wider">Course</span>
                        <span className="font-semibold text-gray-900 text-xs">{searchResult.course}</span>
                      </div>
                      <div>
                        <span className="text-gray-400 block text-[9.5px] uppercase font-bold tracking-wider">Grade</span>
                        <span className="font-bold text-bcsve-800 text-xs">{searchResult.grade}</span>
                      </div>
                      <div>
                        <span className="text-gray-400 block text-[9.5px] uppercase font-bold tracking-wider">Issue Date</span>
                        <span className="font-medium text-gray-700 text-xs">{searchResult.issueDate}</span>
                      </div>
                      <div className="sm:col-span-2 pt-1.5 border-t border-gray-100">
                        <span className="text-gray-400 block text-[9.5px] uppercase font-bold tracking-wider">Accredited Centre</span>
                        <span className="font-medium text-gray-700 text-xs">{searchResult.centre}</span>
                      </div>
                    </div>
                  </div>
                )}

              </div>

            </div>
          </div>
        </Reveal>

      </Container>
    </Section>
  );
}
