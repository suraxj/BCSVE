import React, { createContext, useContext, useState } from 'react';
import ApplyModal from '../components/modals/ApplyModal';
import EnquiryModal from '../components/modals/EnquiryModal';
import AffiliationModal from '../components/modals/AffiliationModal';

const ModalContext = createContext(null);

export function ModalProvider({ children }) {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isAffiliationModalOpen, setIsAffiliationModalOpen] = useState(false);
  const [enquiryProgram, setEnquiryProgram] = useState(null);

  const openApply = () => setIsApplyModalOpen(true);
  const closeApply = () => setIsApplyModalOpen(false);

  const openAffiliation = () => setIsAffiliationModalOpen(true);
  const closeAffiliation = () => setIsAffiliationModalOpen(false);

  const openEnquiry = (programTitle) => setEnquiryProgram(programTitle || 'General Enquiry');
  const closeEnquiry = () => setEnquiryProgram(null);

  return (
    <ModalContext.Provider
      value={{
        openApply,
        closeApply,
        openAffiliation,
        closeAffiliation,
        openEnquiry,
        closeEnquiry,
      }}
    >
      {children}

      {/* Global Modals rendered once for the entire application */}
      <ApplyModal isOpen={isApplyModalOpen} onClose={closeApply} />
      <EnquiryModal
        isOpen={Boolean(enquiryProgram)}
        onClose={closeEnquiry}
        programTitle={enquiryProgram || ''}
      />
      <AffiliationModal isOpen={isAffiliationModalOpen} onClose={closeAffiliation} />
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
