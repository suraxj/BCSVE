import React, { useState } from 'react';
import ScrollProgress from './components/common/ScrollProgress';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsBar from './components/StatsBar';
import NoticeBoard from './components/NoticeBoard';
import AboutSection from './components/AboutSection';
import ProgramsSection from './components/ProgramsSection';
import AdmissionProcess from './components/AdmissionProcess';
import PartnerRibbon from './components/PartnerRibbon';
import WhyChooseUs from './components/WhyChooseUs';
import AffiliationCta from './components/AffiliationCta';
import Accreditations from './components/Accreditations';
import FacultySection from './components/FacultySection';
import VerificationSection from './components/VerificationSection';
import TestimonialsSection from './components/TestimonialsSection';
import PlacementPartners from './components/PlacementPartners';
import GalleryEvents from './components/GalleryEvents';
import DownloadsSection from './components/DownloadsSection';
import FAQSection from './components/FAQSection';
import FinalCtaBanner from './components/FinalCtaBanner';
import ContactMap from './components/ContactMap';
import NewsletterStrip from './components/NewsletterStrip';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

// Modals
import ApplyModal from './components/modals/ApplyModal';
import EnquiryModal from './components/modals/EnquiryModal';
import AffiliationModal from './components/modals/AffiliationModal';

export default function App() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isAffiliationModalOpen, setIsAffiliationModalOpen] = useState(false);
  const [enquiryProgram, setEnquiryProgram] = useState(null);

  const handleOpenApply = () => setIsApplyModalOpen(true);
  const handleCloseApply = () => setIsApplyModalOpen(false);

  const handleOpenAffiliation = () => setIsAffiliationModalOpen(true);
  const handleCloseAffiliation = () => setIsAffiliationModalOpen(false);

  const handleOpenEnquiry = (programTitle) => setEnquiryProgram(programTitle);
  const handleCloseEnquiry = () => setEnquiryProgram(null);

  const scrollToVerification = () => {
    const el = document.getElementById('verification');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream-50 text-gray-800 animate-fadeIn">
      
      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Top Announcement Bar */}
      <AnnouncementBar />

      {/* Navigation Bar */}
      <Navbar onOpenApply={handleOpenApply} />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* 1. Hero Section */}
        <HeroSection
          onOpenApply={handleOpenApply}
          onOpenVerify={scrollToVerification}
        />

        {/* 2. Floating Metrics Stats Bar */}
        <StatsBar />

        {/* 3. About BCSVE Section */}
        <AboutSection />

        {/* 4. Programs Section */}
        <ProgramsSection onOpenEnquiry={handleOpenEnquiry} />

        {/* 5. Admission Process (5-Step Timeline) */}
        <AdmissionProcess onOpenApply={handleOpenApply} />

        {/* 6. Why BCSVE Section */}
        <WhyChooseUs />

        {/* 7. Partner Institutes Ribbon */}
        <PartnerRibbon />

        {/* 8. Affiliation CTA / Become a Partner */}
        <AffiliationCta onOpenAffiliation={handleOpenAffiliation} />

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
        <FinalCtaBanner onOpenApply={handleOpenApply} />

        {/* 19. Contact & Support Map Section */}
        <ContactMap />

      </main>

      {/* 20. Newsletter Subscription Strip */}
      <NewsletterStrip />

      {/* 21. Footer */}
      <Footer
        onOpenApply={handleOpenApply}
        onOpenAffiliation={handleOpenAffiliation}
      />

      {/* Global Floating Actions (WhatsApp + Back to top) */}
      <FloatingActions />

      {/* Modals */}
      <ApplyModal
        isOpen={isApplyModalOpen}
        onClose={handleCloseApply}
      />

      <EnquiryModal
        isOpen={Boolean(enquiryProgram)}
        onClose={handleCloseEnquiry}
        programTitle={enquiryProgram || ''}
      />

      <AffiliationModal
        isOpen={isAffiliationModalOpen}
        onClose={handleCloseAffiliation}
      />

    </div>
  );
}
