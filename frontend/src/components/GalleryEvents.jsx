import React, { useState, useEffect } from 'react';
import { siteData } from '../data/siteData';
import { siteImages } from '../assets/images';
import Section from './common/Section';
import Container from './common/Container';
import SectionHeading from './common/SectionHeading';
import Reveal from './common/Reveal';
import { Play, X, ChevronLeft, ChevronRight, Eye, Film } from 'lucide-react';

const galleryPlaceholderImages = [
  siteImages.aboutStudentsCollage,
  siteImages.programHealthcare,
  siteImages.programIT,
  siteImages.heroBackground,
  siteImages.programBusiness,
  siteImages.aboutStudentsCollage,
];

export default function GalleryEvents() {
  const { galleryEvents } = siteData;
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const filteredItems = galleryEvents.items.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null && !isVideoModalOpen) return;

      if (e.key === 'Escape') {
        setLightboxIndex(null);
        setIsVideoModalOpen(false);
      } else if (e.key === 'ArrowRight' && lightboxIndex !== null) {
        setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
      } else if (e.key === 'ArrowLeft' && lightboxIndex !== null) {
        setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, isVideoModalOpen, filteredItems.length]);

  return (
    <Section id="gallery" background="tint">
      <Container>
        
        {/* Section Heading */}
        <SectionHeading
          centered
          tag={galleryEvents.tag}
          heading={galleryEvents.heading}
          subtitle={galleryEvents.subtitle}
        />

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-3.5 sm:mb-4">
          {galleryEvents.categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 min-h-[30px] rounded-full text-[11px] sm:text-xs font-semibold transition-all duration-200 font-sans ${
                activeCategory === cat
                  ? 'bg-bcsve-800 text-white shadow-xs'
                  : 'bg-white text-gray-700 border border-bcsve-100/90 hover:bg-cream-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3-Column Gallery Grid with Standard Gap */}
        <div className="grid max-w-6xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {filteredItems.map((item, idx) => {
            const isVideo = item.type === 'video';
            const imgKey = galleryPlaceholderImages[idx % galleryPlaceholderImages.length];

            return (
              <Reveal key={item.id} direction="up" delay={idx * 60} duration={450}>
                <div
                  onClick={() => {
                    if (isVideo) {
                      setIsVideoModalOpen(true);
                    } else {
                      setLightboxIndex(idx);
                    }
                  }}
                  className="group relative rounded-xl overflow-hidden bg-white border border-bcsve-100/90 shadow-xs hover:shadow-card hover:-translate-y-0.5 transition-all duration-300 cursor-pointer aspect-[16/10] flex flex-col justify-end"
                >
                  {/* Image Background */}
                  <img
                    src={imgKey}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    width={400}
                    height={300}
                    loading="lazy"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bcsve-950/85 via-bcsve-950/30 to-transparent group-hover:from-bcsve-950/95 transition-all duration-300" />

                  {/* Video Play Indicator */}
                  {isVideo ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-11 h-11 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-red-600 transition-all duration-300">
                        <Play size={18} className="fill-current ml-0.5" />
                      </div>
                    </div>
                  ) : (
                    <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/20 backdrop-blur-xs text-white opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-200">
                      <Eye size={13} />
                    </div>
                  )}

                  {/* Caption & Category */}
                  <div className="relative z-10 p-2.5 sm:p-3 text-left font-sans">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-[9px] font-extrabold uppercase tracking-wider text-gold-300 bg-black/40 px-2 py-0.5 rounded backdrop-blur-xs">
                        {item.category}
                      </span>
                      {isVideo && (
                        <span className="text-[9px] font-semibold text-white/90 bg-red-700/80 px-1.5 py-0.5 rounded flex items-center gap-1">
                          <Film size={9} />
                          <span>{item.duration}</span>
                        </span>
                      )}
                    </div>
                    <h3 className="text-xs sm:text-[13px] font-bold text-white leading-tight line-clamp-2 group-hover:text-gold-200 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

      </Container>

      {/* Accessible Lightbox Modal for Images */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <div className="relative max-w-4xl w-full flex flex-col items-center">
            
            {/* Close button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute -top-12 right-0 text-white/80 hover:text-white p-2 focus:outline-none transition-colors"
              aria-label="Close image preview"
            >
              <X size={26} />
            </button>

            {/* Nav Arrows */}
            <button
              onClick={() => setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)}
              className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all focus:outline-none"
              aria-label="Previous photo"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={() => setLightboxIndex((prev) => (prev + 1) % filteredItems.length)}
              className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all focus:outline-none"
              aria-label="Next photo"
            >
              <ChevronRight size={22} />
            </button>

            {/* Image & Caption */}
            <div className="w-full bg-black/40 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={galleryPlaceholderImages[lightboxIndex % galleryPlaceholderImages.length]}
                alt={filteredItems[lightboxIndex].title}
                className="w-full max-h-[70vh] object-contain mx-auto"
              />
              <div className="p-4 bg-bcsve-950/90 text-left border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold-300 block">
                    {filteredItems[lightboxIndex].category}
                  </span>
                  <h4 className="text-sm font-bold text-white">
                    {filteredItems[lightboxIndex].title}
                  </h4>
                </div>
                <span className="text-xs text-gray-400">
                  {lightboxIndex + 1} / {filteredItems.length}
                </span>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Accessible Video Modal */}
      {isVideoModalOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label="Video Player"
        >
          <div className="relative max-w-3xl w-full bg-bcsve-950 rounded-2xl overflow-hidden border border-gold-300/30 shadow-2xl">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/50 text-white hover:bg-black flex items-center justify-center transition-colors"
              aria-label="Close video"
            >
              <X size={18} />
            </button>

            {/* Simulated Video Player Container */}
            <div className="relative aspect-video bg-black flex flex-col items-center justify-center text-white p-6">
              <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-lg mb-3 animate-pulse">
                <Play size={24} className="fill-current ml-1" />
              </div>
              <h4 className="font-sans font-bold text-base text-white">
                BCSVE Campus & Practical Workshop Tour
              </h4>
              <p className="text-xs text-gray-400 max-w-md text-center pt-1">
                // TODO: Replace with iframe or HTML5 video tag (e.g. &lt;iframe src="https://youtube.com/embed/..." /&gt;)
              </p>
            </div>
            
            <div className="p-4 bg-bcsve-900 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-gold-300 font-semibold">Official Campus Video Showcase</span>
              <button 
                onClick={() => setIsVideoModalOpen(false)}
                className="px-4 py-1.5 rounded-full bg-white text-bcsve-950 text-xs font-bold hover:bg-cream-100 transition-colors"
              >
                Close Video
              </button>
            </div>
          </div>
        </div>
      )}

    </Section>
  );
}
