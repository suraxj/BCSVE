import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import StatsBar from '../components/StatsBar';
import AboutSection from '../components/AboutSection';
import ProgramsSection from '../components/ProgramsSection';
import FeeStructureSection from '../components/FeeStructureSection';
import AdmissionProcess from '../components/AdmissionProcess';
import AffiliationCta from '../components/AffiliationCta';
import VerificationSection from '../components/VerificationSection';
import DownloadsSection from '../components/DownloadsSection';
import FAQSection from '../components/FAQSection';
import ContactMap from '../components/ContactMap';
import { useModal } from '../context/ModalContext';

export default function HomePage() {
  const { openApply, openAffiliation, openEnquiry } = useModal();

  useEffect(() => {
    document.title = 'Bharath Council for Skill and Vocational Education (BCSVE) | Educate • Empower • Enlighten';
  }, []);

  const scrollToVerification = () => {
    const el = document.getElementById('verification');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex-1">
      {/* 1. Hero Section */}
      <HeroSection
        onOpenApply={openApply}
        onOpenVerify={scrollToVerification}
      />

      {/* 2. Floating Metrics Stats Bar */}
      <StatsBar />

      {/* 3. About BCSVE (Govt Approval, Mission, Vision & Core Values) */}
      <AboutSection />

      {/* 4. Programs Section with direct links to custom detail pages */}
      <ProgramsSection onOpenEnquiry={openEnquiry} />

      {/* 5. Official Regulated Fee Structure (3M: ₹800, 6M: ₹1000, 1Y: ₹1500) */}
      <FeeStructureSection onOpenApply={openApply} onOpenEnquiry={openEnquiry} />

      {/* 6. Admission Process (5-Step Pathway & Form Download) */}
      <AdmissionProcess onOpenApply={openApply} />

      {/* 7. Centre Affiliation (Become an Authorised Training Partner) */}
      <AffiliationCta onOpenAffiliation={openAffiliation} />

      {/* 8. Certificate & Marksheet Verification Portal */}
      <VerificationSection />

      {/* 9. Official Council Downloads & Documents */}
      <DownloadsSection />

      {/* 10. Frequently Asked Questions */}
      <FAQSection />

      {/* 11. Central Secretariat Contact & Support Map */}
      <ContactMap />
    </div>
  );
}
