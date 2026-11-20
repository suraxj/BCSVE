import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/common/Container';
import { Home, BookOpen } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4 bg-cream-50 font-sans text-center">
      <Container>
        <div className="max-w-md mx-auto space-y-4 bg-white p-8 rounded-3xl border border-bcsve-100 shadow-card">
          <div className="w-16 h-16 rounded-2xl bg-bcsve-50 text-bcsve-800 mx-auto flex items-center justify-center font-extrabold text-2xl font-mono">
            404
          </div>

          <h1 className="text-xl sm:text-2xl font-extrabold text-bcsve-950">
            Page Not Found
          </h1>

          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            The vocational program or page you requested does not exist or may have been relocated.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-bcsve-800 hover:bg-bcsve-900 text-white text-xs font-bold transition-all shadow-xs"
            >
              <Home size={14} />
              <span>Back to Home</span>
            </Link>

            <Link
              to="/#programs"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-cream-100 hover:bg-cream-200 text-bcsve-900 border border-bcsve-200 text-xs font-bold transition-all"
            >
              <BookOpen size={14} />
              <span>Browse Programs</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
