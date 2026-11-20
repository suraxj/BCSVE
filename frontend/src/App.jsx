import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ModalProvider } from './context/ModalContext';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ProgramDetailPage from './pages/ProgramDetailPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <ModalProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="programs/:slug" element={<ProgramDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </ModalProvider>
  );
}
