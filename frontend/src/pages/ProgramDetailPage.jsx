import React, { lazy, Suspense, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Container from '../components/common/Container';

// Lazy-loaded bespoke program detail pages
const HealthcarePage = lazy(() => import('./programs/HealthcarePage'));
const InformationTechnologyPage = lazy(() => import('./programs/InformationTechnologyPage'));
const BusinessManagementPage = lazy(() => import('./programs/BusinessManagementPage'));
const VocationalTradesPage = lazy(() => import('./programs/VocationalTradesPage'));

const programComponentMap = {
  'healthcare-wellness': {
    component: HealthcarePage,
    title: 'Healthcare & Wellness Programs | BCSVE Vocational Education',
    description: 'Explore certified allied healthcare programs: Nursing Assistant, GDA, Phlebotomy, and Wellness with hospital practical rotations.'
  },
  'information-technology': {
    component: InformationTechnologyPage,
    title: 'Information Technology Programs | BCSVE Computer & Web Education',
    description: 'Learn modern software development, DCA/CCC, Tally Prime with GST, graphic design, and cyber safety in accredited labs.'
  },
  'business-management': {
    component: BusinessManagementPage,
    title: 'Business & Management Programs | BCSVE Corporate Leadership',
    description: 'Master business administration, corporate accounting, retail operations, and entrepreneurship with case studies.'
  },
  'vocational-applied-trades': {
    component: VocationalTradesPage,
    title: 'Vocational & Applied Trades | BCSVE Hands-on Workshop Mastery',
    description: '80% practical training in building electrification, plumbing, automotive BS6 maintenance, solar tech, and tailoring.'
  }
};

// Branded loading skeleton component
function ProgramLoadingSkeleton() {
  return (
    <div className="min-h-screen bg-cream-50 font-sans py-12 animate-fadeIn">
      <Container>
        <div className="space-y-6 max-w-4xl mx-auto text-left">
          {/* Breadcrumb Skeleton */}
          <div className="h-4 w-48 bg-gray-200 rounded animate-pulse" />
          
          {/* Hero Header Skeleton */}
          <div className="p-8 rounded-3xl bg-white border border-bcsve-100 shadow-sm space-y-4">
            <div className="h-6 w-36 bg-bcsve-100 rounded-full animate-pulse" />
            <div className="h-10 w-3/4 bg-gray-200 rounded-lg animate-pulse" />
            <div className="h-4 w-full bg-gray-100 rounded animate-pulse" />
            <div className="h-4 w-2/3 bg-gray-100 rounded animate-pulse" />
            <div className="flex gap-3 pt-3">
              <div className="h-10 w-32 bg-bcsve-800/40 rounded-full animate-pulse" />
              <div className="h-10 w-32 bg-gray-200 rounded-full animate-pulse" />
            </div>
          </div>

          {/* Cards Skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-48 rounded-2xl bg-white border border-bcsve-100 p-5 space-y-3 animate-pulse">
                <div className="h-4 w-20 bg-gray-200 rounded" />
                <div className="h-6 w-4/5 bg-gray-200 rounded" />
                <div className="h-12 w-full bg-gray-100 rounded" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default function ProgramDetailPage() {
  const { slug } = useParams();
  const config = programComponentMap[slug];

  useEffect(() => {
    if (config) {
      document.title = config.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', config.description);
      }
    }
  }, [config, slug]);

  if (!config) {
    return <Navigate to="/404" replace />;
  }

  const PageComponent = config.component;

  return (
    <Suspense fallback={<ProgramLoadingSkeleton />}>
      <PageComponent />
    </Suspense>
  );
}
