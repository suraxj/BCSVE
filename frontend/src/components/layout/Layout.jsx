import React from 'react';
import { Outlet } from 'react-router-dom';
import ScrollProgress from '../common/ScrollProgress';
import AnnouncementBar from '../AnnouncementBar';
import Navbar from '../Navbar';
import NewsletterStrip from '../NewsletterStrip';
import Footer from '../Footer';
import FloatingActions from '../FloatingActions';
import ScrollToTop from '../common/ScrollToTop';
import { useModal } from '../../context/ModalContext';

export default function Layout() {
  const { openApply, openAffiliation } = useModal();

  return (
    <div className="min-h-screen flex flex-col bg-cream-50 text-gray-800 animate-fadeIn">
      {/* Scroll restoration & smooth hash link handler */}
      <ScrollToTop />

      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Top Announcement Bar */}
      <AnnouncementBar />

      {/* Navigation Bar */}
      <Navbar onOpenApply={openApply} />

      {/* Dynamic Route Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* 20. Newsletter Subscription Strip */}
      <NewsletterStrip />

      {/* 21. Footer */}
      <Footer
        onOpenApply={openApply}
        onOpenAffiliation={openAffiliation}
      />

      {/* Global Floating Actions (WhatsApp + Back to top) */}
      <FloatingActions />
    </div>
  );
}
