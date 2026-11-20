import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import StatsBar from '../components/StatsBar';
import NoticeBoard from '../components/NoticeBoard';
import AboutSection from '../components/AboutSection';
import ProgramsSection from '../components/ProgramsSection';
import FeeStructureSection from '../components/FeeStructureSection';
import AdmissionProcess from '../components/AdmissionProcess';
import PartnerRibbon from '../components/PartnerRibbon';
import WhyChooseUs from '../components/WhyChooseUs';
import AffiliationCta from '../components/AffiliationCta';
import Accreditations from '../components/Accreditations';
import FacultySection from '../components/FacultySection';
import VerificationSection from '../components/VerificationSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PlacementPartners from '../components/PlacementPartners';
import GalleryEvents from '../components/GalleryEvents';
import DownloadsSection from '../components/DownloadsSection';
import FAQSection from '../components/FAQSection';
import FinalCtaBanner from '../components/FinalCtaBanner';
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

      {/* 3. About BCSVE Section */}
      <AboutSection />

      {/* 4. Programs Section with Details buttons */}
      <ProgramsSection onOpenEnquiry={openEnquiry} />

      {/* 4b. Official Transparent Fee Structure */}
      <FeeStructureSection onOpenApply={openApply} onOpenEnquiry={openEnquiry} />

      {/* 5. Admission Process (5-Step Timeline) */}
      <AdmissionProcess onOpenApply={openApply} />

      {/* 6. Why BCSVE Section */}
      <WhyChooseUs />

      {/* 7. Partner Institutes Ribbon */}
      <PartnerRibbon />

      {/* 8. Affiliation CTA / Become a Partner */}
      <AffiliationCta onOpenAffiliation={openAffiliation} />

      {/* 9. Accreditations & Quality Framework */}
      <Accreditations />

      {/* 10. Faculty & Master Trainers */}
      <FacultySection />

      {/* 11. Certificate Verification System */}
      <VerificationSection />

      {/* 12. Testimonials */}
      <TestimonialsSection />

      {/* 13. Career Outcomes: Placement & Hiring Partners */}
      <PlacementPartners />

      {/* 14. Latest Updates: Notice Board & Quick Desk */}
      <NoticeBoard />

      {/* 15. Campus & Workshops Gallery with Lightbox */}
      <GalleryEvents />

      {/* 16. Official Downloads & Documents */}
      <DownloadsSection />

      {/* 17. Frequently Asked Questions (Accordion) */}
      <FAQSection />

      {/* 18. Final Call to Action Banner */}
      <FinalCtaBanner onOpenApply={openApply} />

      {/* 19. Contact & Support Map Section */}
      <ContactMap />
    </div>
  );
}
