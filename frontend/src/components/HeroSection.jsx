import React, { useState, useRef, useEffect } from 'react';
import { siteData } from '../data/siteData';
import { siteImages } from '../assets/images';
import {
  ArrowRight,
  ShieldCheck,
  Check,
  BarChart2,
  Calendar,
  Star
} from 'lucide-react';

export default function HeroSection({ onOpenApply, onOpenVerify }) {
  const { hero } = siteData;
  const heroRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const query = window.matchMedia('(hover: hover) and (pointer: fine)');
      setCanHover(query.matches);
      const listener = (e) => setCanHover(e.matches);
      query.addEventListener('change', listener);
      return () => query.removeEventListener('change', listener);
    }
  }, []);

  const handleMouseMove = (e) => {
    if (!canHover || !heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const heroLearnerAvatars = [
    siteImages.testimonialPooja,
    siteImages.testimonialRohit,
    siteImages.testimonialNeha,
  ];

  return (
    <section
      id="home"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden py-7 sm:py-9 lg:py-11 bg-cream-50 font-sans"
    >
      {/* Background Layer with Mouse Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-center sm:bg-center lg:bg-[position:right_center] transition-transform duration-500 ease-out"
          style={{
            backgroundImage: `url(${siteImages.heroBackground})`,
            transform: canHover
              ? `translate3d(${mousePos.x * -5}px, ${mousePos.y * -3}px, 0)`
              : 'none',
          }}
        />

        {/* Responsive Readability Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream-50/90 via-cream-50/60 to-cream-50/15 lg:from-cream-50/30 lg:via-cream-50/5 lg:to-transparent pointer-events-none" />

        {/* Soft Floating Decorative Orbs */}
        <div className="absolute top-2 left-1/4 w-52 h-52 rounded-full bg-gold-200/20 blur-3xl animate-float-orb-1" />
        <div className="absolute bottom-1 right-1/3 w-56 h-56 rounded-full bg-bcsve-200/15 blur-3xl animate-float-orb-2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center min-h-[260px] sm:min-h-[290px] lg:min-h-[320px]">

          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 space-y-2.5 sm:space-y-3 text-left">

            {/* Top Tag / Pill */}
            <div
              style={{ animationDelay: '60ms' }}
              className="animate-fadeInUp inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-gold-300/80 shadow-sm hover:scale-[1.02] transition-transform duration-200"
            >
              <div className="flex items-center text-gold-500 gap-0.5">
                <Star size={10} fill="currentColor" />
                <Star size={10} fill="currentColor" />
                <Star size={10} fill="currentColor" />
              </div>
              <span className="text-[9.5px] sm:text-[10px] font-bold tracking-wider text-bcsve-900 uppercase font-sans">
                {hero.badge}
              </span>
            </div>

            {/* Main Headline with Staggered Entrance & Wavy Shimmer */}
            <h1 className="font-sans text-xl sm:text-2xl lg:text-[28px] font-extrabold text-bcsve-950 leading-[1.22] tracking-tight">
              <span
                style={{ animationDelay: '140ms' }}
                className="inline-block animate-fadeInUp"
              >
                {hero.headingPart1}
              </span>{' '}
              <span
                style={{ animationDelay: '260ms' }}
                className="inline-block animate-fadeInUp"
              >
                <span className="text-bcsve-800 underline decoration-gold-400 decoration-wavy decoration-2 underline-offset-4 shimmer-gold-wave">
                  {hero.headingPart2}
                </span>
              </span>
            </h1>

            {/* Subheading / Description */}
            <p
              style={{ animationDelay: '360ms' }}
              className="animate-fadeInUp text-xs sm:text-[13px] text-gray-700 max-w-md leading-relaxed font-normal font-sans"
            >
              {hero.description}
            </p>

            {/* Action Buttons */}
            <div
              style={{ animationDelay: '460ms' }}
              className="animate-fadeInUp flex flex-wrap items-center gap-3 pt-1"
            >
              <a
                href="#programs"
                className="shimmer-sweep group inline-flex items-center gap-2 px-4.5 py-2 min-h-[38px] rounded-full bg-bcsve-800 hover:bg-bcsve-900 text-white font-semibold text-xs sm:text-sm shadow-sm hover:shadow-[0_8px_20px_-4px_rgba(130,23,51,0.45)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 font-sans"
              >
                <span>{hero.primaryCta}</span>
                <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="#verification"
                onClick={(e) => {
                  if (onOpenVerify) {
                    e.preventDefault();
                    onOpenVerify();
                  }
                }}
                className="inline-flex items-center gap-2 px-4 py-2 min-h-[38px] rounded-full bg-white/95 hover:bg-cream-100 text-bcsve-900 font-semibold text-xs sm:text-sm border border-bcsve-200 shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 font-sans hover:shadow-card"
              >
                <ShieldCheck size={14} className="text-bcsve-800 transition-transform duration-200 group-hover:scale-110" />
                <span>{hero.secondaryCta}</span>
              </a>
            </div>

            {/* Social Proof: Real Learner Avatars */}
            <div
              style={{ animationDelay: '560ms' }}
              className="animate-fadeInUp pt-1.5 flex items-center gap-2.5"
            >
              <div className="flex -space-x-1.5 overflow-hidden">
                {heroLearnerAvatars.map((avatarImg, idx) => (
                  <img
                    key={idx}
                    src={avatarImg}
                    alt={`Learner ${idx + 1}`}
                    style={{ width: '26px', height: '26px' }}
                    className="inline-block w-[26px] h-[26px] min-w-[26px] min-h-[26px] max-w-[26px] max-h-[26px] rounded-full ring-2 ring-white object-cover border border-bcsve-200 shadow-sm hover:scale-110 hover:z-10 transition-transform duration-200"
                  />
                ))}
              </div>
              <div className="text-[10.5px] sm:text-[11.5px] font-semibold text-bcsve-950 flex items-center gap-1 font-sans">
                <span>{hero.learnerCount}</span>
                <span className="text-[9.5px] sm:text-[10px] text-gray-600 font-normal">enrolled nationwide</span>
              </div>
            </div>

          </div>

          {/* Right Column: Floating Badges with 3D Depth & Independent Float */}
          <div className="hidden lg:flex lg:col-span-5 relative items-center justify-end min-h-[200px]">

            <div className="relative w-full max-w-[280px] h-40 flex items-center justify-center pointer-events-none">

              {/* Floating Badge 1: "Certified" */}
              <div
                style={{
                  transform: canHover
                    ? `translate3d(${mousePos.x * 14}px, ${mousePos.y * 10}px, 0)`
                    : undefined,
                  transition: 'transform 240ms ease-out',
                }}
                className="pointer-events-auto absolute top-1 left-0 bg-bcsve-800 text-white px-2.5 py-0.5 rounded-full shadow-md hover:shadow-card flex items-center gap-1 border border-white text-[10px] font-semibold font-sans animate-float-1 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <span className="w-3.5 h-3.5 rounded-full bg-white/20 flex items-center justify-center">
                  <Check size={9} strokeWidth={3} />
                </span>
                <span>Certified</span>
              </div>

              {/* Floating Badge 2: "98% Placement" */}
              <div
                style={{
                  transform: canHover
                    ? `translate3d(${mousePos.x * -12}px, ${mousePos.y * -10}px, 0)`
                    : undefined,
                  transition: 'transform 240ms ease-out',
                }}
                className="pointer-events-auto absolute top-2 right-0 bg-white/95 backdrop-blur-md text-bcsve-900 px-3 py-1 rounded-lg shadow-md hover:shadow-card flex items-center gap-1.5 border border-bcsve-100 text-[10.5px] font-bold font-sans animate-float-2 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="w-5 h-5 rounded bg-bcsve-50 flex items-center justify-center text-bcsve-800">
                  <BarChart2 size={12} />
                </div>
                <div className="text-left leading-tight">
                  <div className="text-bcsve-900 font-extrabold text-[10.5px]">98%</div>
                  <div className="text-[8px] text-gray-500 font-medium font-sans">Placement</div>
                </div>
              </div>

              {/* Floating Badge 3: "New Batch Open" */}
              <div
                style={{
                  transform: canHover
                    ? `translate3d(${mousePos.x * 10}px, ${mousePos.y * -12}px, 0)`
                    : undefined,
                  transition: 'transform 240ms ease-out',
                }}
                className="pointer-events-auto absolute bottom-1 right-0 bg-white/95 backdrop-blur-md text-gray-900 px-3 py-1 rounded-lg shadow-md hover:shadow-card flex items-center gap-1.5 border border-gold-200 text-[10px] font-semibold font-sans animate-float-3 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="w-5 h-5 rounded bg-gold-50 flex items-center justify-center text-gold-600">
                  <Calendar size={12} />
                </div>
                <div className="text-left leading-tight">
                  <div className="text-bcsve-900 font-bold text-[10px]">New Batch Open</div>
                  <div className="text-[8px] text-gray-500 font-sans">Admissions 2026</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
