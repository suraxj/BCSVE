import React, { useState } from 'react';
import { programDetails } from '../../data/programDetails';
import Container from '../../components/common/Container';
import ProgramHero from '../../components/program/ProgramHero';
import ProgramSubNav from '../../components/program/ProgramSubNav';
import CourseDrawer from '../../components/program/CourseDrawer';
import CurriculumAccordion from '../../components/program/CurriculumAccordion';
import EligibilityCard from '../../components/program/EligibilityCard';
import ProgramFaqAccordion from '../../components/program/ProgramFaqAccordion';
import RelatedPrograms from '../../components/program/RelatedPrograms';
import ProgramCta from '../../components/program/ProgramCta';
import ProgramNavFooter from '../../components/program/ProgramNavFooter';
import { 
  TrendingUp, 
  Briefcase, 
  PieChart, 
  DollarSign, 
  Users, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  ChevronRight, 
  CheckCircle, 
  ArrowRight,
  Award,
  Sliders,
  Compass
} from 'lucide-react';
import { useModal } from '../../context/ModalContext';

export default function BusinessManagementPage() {
  const data = programDetails['business-management'];
  const { openEnquiry } = useModal();

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const [selectedCanvasIdx, setSelectedCanvasIdx] = useState(0);

  // Interactive ROI Estimator State
  const [studyMonths, setStudyMonths] = useState(6);
  const [selectedRoleTier, setSelectedRoleTier] = useState('executive');

  const navItems = [
    { id: 'overview', label: 'Overview', icon: TrendingUp },
    { id: 'courses', label: 'Courses (6)', icon: Briefcase },
    { id: 'startup-journey', label: 'Startup Journey', icon: Compass },
    { id: 'canvas', label: 'Business Canvas', icon: PieChart },
    { id: 'roi-estimator', label: 'Career Value Estimator', icon: DollarSign },
    { id: 'career-ladder', label: 'Career Ladder', icon: Users },
    { id: 'boardroom', label: 'Executive Skills', icon: Award },
    { id: 'curriculum', label: 'Curriculum', icon: Sliders },
    { id: 'eligibility', label: 'Eligibility', icon: ShieldCheck },
    { id: 'faqs', label: 'FAQs', icon: Sparkles }
  ];

  // Custom Bespoke Hero Visual: Animated SVG Executive Growth Dashboard
  const dashboardVisual = (
    <div className="relative rounded-2xl bg-gradient-to-br from-bcsve-950 via-bcsve-900 to-bcsve-850 p-5 sm:p-6 text-white shadow-2xl overflow-hidden border border-gold-400/30 font-sans text-left">
      {/* Subtle gold grid texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#cea245_1px,transparent_1px)] [background-size:18px_18px] opacity-10 pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
        <div>
          <span className="text-[10px] font-bold text-gold-300 uppercase tracking-widest block font-sans">
            Executive Analytics Portal
          </span>
          <span className="text-xs sm:text-sm font-extrabold text-white">
            Quarterly Performance Index
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gold-400/20 text-gold-300 border border-gold-400/40 text-[11px] font-bold">
          <TrendingUp size={12} />
          <span>+24.8% YoY</span>
        </div>
      </div>

      {/* SVG Chart Graphic */}
      <div className="bg-black/30 rounded-xl p-3 border border-white/10 my-2">
        <div className="flex items-end justify-between gap-2 h-28 sm:h-32 pt-2 px-1">
          {/* Animated Growing Bars */}
          {[
            { label: 'Q1', val: '45%', h: '45%' },
            { label: 'Q2', val: '62%', h: '62%' },
            { label: 'Q3', val: '80%', h: '80%' },
            { label: 'Q4', val: '95%', h: '95%' }
          ].map((bar, bIdx) => (
            <div key={bIdx} className="flex-1 flex flex-col items-center justify-end h-full gap-1 group">
              <span className="text-[10px] font-bold text-gold-300 opacity-90 group-hover:scale-110 transition-transform">
                {bar.val}
              </span>
              <div
                style={{ height: bar.h }}
                className="w-full max-w-[36px] rounded-t-md bg-gradient-to-t from-gold-600 via-gold-400 to-gold-300 shadow-sm transition-all duration-700 ease-out hover:brightness-110"
              />
              <span className="text-[10px] font-medium text-gray-300">{bar.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 pt-2">
        {data.dashboardMetrics.map((met, idx) => (
          <div key={idx} className="p-2 rounded-lg bg-white/5 border border-white/10">
            <span className="block text-[9.5px] text-gray-300 truncate">{met.label}</span>
            <span className="block text-xs sm:text-sm font-extrabold text-gold-300 mt-0.5">{met.value}</span>
            <span className="block text-[9px] text-emerald-400 truncate">{met.change}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-cream-50 text-gray-800 font-sans">
      
      {/* 1. Hero with Executive Dashboard */}
      <ProgramHero program={data} customVisual={dashboardVisual} />

      {/* 2. Sticky Sub Navigation */}
      <ProgramSubNav navItems={navItems} />

      {/* Main Content Sections */}
      <main className="py-8 sm:py-12 space-y-12 sm:space-y-16">
        
        {/* SECTION 1: Overview */}
        <section id="overview" className="scroll-mt-24">
          <Container>
            <div className="bg-white rounded-2xl border border-bcsve-100 p-6 sm:p-8 shadow-card text-left space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-gold-500" />
                <span className="text-xs font-bold text-gold-700 tracking-wider uppercase font-sans">
                  The Enterprise Vision
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-bcsve-950 tracking-tight">
                Corporate Foundations & Grassroots Business Leadership
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-3xl">
                True management competence is built on financial literacy, operational discipline, and market empathy. BCSVE Business & Management programs bridge traditional academic theory with actual corporate reporting, modern GST e-filing, computerized balance sheet reconciliations, and retail sales execution.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80">
                  <h3 className="font-bold text-xs sm:text-sm text-bcsve-950 mb-1">Corporate Tax Compliance</h3>
                  <p className="text-xs text-gray-600">Hands-on GSTR-1, GSTR-3B filings, trial balances, and statutory payroll accounting.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-cream-100 border border-bcsve-200">
                  <h3 className="font-bold text-xs sm:text-sm text-bcsve-950 mb-1">MSME & Mudra Assistance</h3>
                  <p className="text-xs text-gray-600">Guidance on drafting bankable project reports and securing central entrepreneurship loans.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-gold-50/70 border border-gold-200">
                  <h3 className="font-bold text-xs sm:text-sm text-gold-950 mb-1">Executive Presentation Drills</h3>
                  <p className="text-xs text-gray-600">Master executive board presentations, vendor negotiations, and business crisis leadership.</p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 2: Sub-Courses */}
        <section id="courses" className="scroll-mt-24">
          <Container>
            <div className="text-left mb-6">
              <span className="text-[10px] font-bold tracking-wider text-gold-700 uppercase font-sans">
                Professional Pathways
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-bcsve-950 tracking-tight">
                Programs in Business & Management
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Explore specialized diplomas and certificates in corporate administration, taxation, and startup ventures.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {data.subCourses.map((course) => (
                <div
                  key={course.id}
                  onClick={() => setSelectedCourse(course)}
                  className="bg-white rounded-2xl border border-bcsve-100/90 p-5 shadow-xs hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-left group cursor-pointer"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-900 border border-amber-200 font-mono">
                        {course.code}
                      </span>
                      <span className="text-[11px] font-medium text-gray-500 flex items-center gap-1 font-sans">
                        <Clock size={11} className="text-bcsve-700" />
                        {course.duration}
                      </span>
                    </div>

                    <h3 className="font-bold text-sm sm:text-base text-bcsve-950 group-hover:text-bcsve-800 transition-colors leading-snug">
                      {course.title}
                    </h3>

                    <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                      {course.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {course.skills?.slice(0, 3).map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded text-[10px] font-medium bg-cream-100 text-bcsve-900"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-bcsve-50 flex items-center justify-between text-xs font-bold text-bcsve-800">
                    <span>Inspect Syllabus & Skills</span>
                    <span className="w-6 h-6 rounded-full bg-gold-50 text-gold-800 flex items-center justify-center group-hover:bg-bcsve-800 group-hover:text-white transition-colors">
                      <ChevronRight size={13} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* SECTION 3: Startup Journey 4-Stage Stepper */}
        <section id="startup-journey" className="scroll-mt-24">
          <Container>
            <div className="bg-white rounded-2xl border border-bcsve-100 p-6 sm:p-8 shadow-card text-left">
              <div className="mb-6">
                <span className="text-[10px] font-bold tracking-wider text-gold-700 uppercase font-sans">
                  Venture Incubation Framework
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-bcsve-950 tracking-tight">
                  The Startup Journey: From Idea to Scaled Enterprise
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  How our Entrepreneurship candidates turn practical vocational skills into thriving, registered businesses.
                </p>
              </div>

              {/* Stepper Tabs */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 pb-3 border-b border-bcsve-100">
                {data.startupJourney.map((st, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStepIdx(idx)}
                    className={`p-3 rounded-xl border text-left transition-all duration-200 ${
                      activeStepIdx === idx
                        ? 'bg-bcsve-800 text-white border-bcsve-800 shadow-xs scale-102'
                        : 'bg-cream-50/70 border-bcsve-100 text-gray-700 hover:bg-cream-100'
                    }`}
                  >
                    <span className="block text-[10px] font-mono font-bold opacity-80">
                      Phase {st.step}
                    </span>
                    <span className="block text-xs sm:text-[13px] font-bold leading-tight mt-0.5">
                      {st.title.split('&')[0]}
                    </span>
                  </button>
                ))}
              </div>

              {/* Active Step Details */}
              <div className="mt-5 p-5 sm:p-6 rounded-xl bg-gradient-to-br from-cream-100/70 via-white to-gold-50/60 border border-gold-200/90 text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1.5 max-w-xl">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-gold-400 text-bcsve-950 font-mono">
                      Phase {data.startupJourney[activeStepIdx].step}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-bcsve-950">
                      {data.startupJourney[activeStepIdx].title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {data.startupJourney[activeStepIdx].desc}
                  </p>
                </div>

                <button
                  onClick={() => openEnquiry('Entrepreneurship & Small Business Management')}
                  className="shimmer-sweep px-4 py-2 rounded-lg bg-bcsve-800 hover:bg-bcsve-900 text-white text-xs font-bold flex items-center gap-1.5 shrink-0"
                >
                  <span>Launch this Venture</span>
                  <ArrowRight size={12} />
                </button>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 4: Interactive 9-Box Business Model Canvas */}
        <section id="canvas" className="scroll-mt-24">
          <Container>
            <div className="bg-white rounded-2xl border border-bcsve-100 p-6 sm:p-8 shadow-card text-left">
              <div className="mb-6">
                <span className="text-[10px] font-bold tracking-wider text-gold-700 uppercase font-sans">
                  Strategic Business Modeling
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-bcsve-950 tracking-tight">
                  Interactive 9-Box Business Model Canvas
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Click on any block of the canvas to inspect real-world management planning applied during classroom drills.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {data.canvasBlocks.map((blk, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedCanvasIdx(idx)}
                    className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[110px] ${
                      selectedCanvasIdx === idx
                        ? 'bg-amber-50/90 border-gold-400 shadow-xs ring-1 ring-gold-400'
                        : 'bg-white border-bcsve-100 hover:border-gold-300'
                    }`}
                  >
                    <div>
                      <span className="text-[10px] font-mono text-gray-500 font-bold block mb-1">
                        0{idx + 1}
                      </span>
                      <h4 className="font-bold text-xs sm:text-sm text-bcsve-950 leading-snug">
                        {blk.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-gray-600 mt-2 line-clamp-2 leading-relaxed">
                      {blk.content}
                    </p>
                  </div>
                ))}
              </div>

              {/* Selected Canvas Deep Dive */}
              <div className="mt-4 p-4 rounded-xl bg-cream-50 border border-bcsve-100 text-left text-xs sm:text-sm">
                <span className="text-gold-700 font-bold uppercase text-[10px] tracking-wide block mb-0.5">
                  Deep Dive Analysis: {data.canvasBlocks[selectedCanvasIdx].title}
                </span>
                <p className="text-gray-800 leading-relaxed font-sans">
                  {data.canvasBlocks[selectedCanvasIdx].content}
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 5: Career Value & Illustrative ROI Estimator */}
        <section id="roi-estimator" className="scroll-mt-24">
          <Container>
            <div className="bg-white rounded-2xl border border-bcsve-100 p-6 sm:p-8 shadow-card text-left">
              <div className="mb-6">
                <span className="text-[10px] font-bold tracking-wider text-gold-700 uppercase font-sans">
                  Career Planning Guide
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-bcsve-950 tracking-tight">
                  Illustrative Course Value & Progression Estimator
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Adjust duration and target track to understand educational focus and career progression milestones. (Clearly illustrative for academic guidance).
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Controls */}
                <div className="lg:col-span-6 space-y-4">
                  <div>
                    <label className="flex items-center justify-between text-xs font-bold text-bcsve-950 mb-1.5 font-sans">
                      <span>Course Study Duration:</span>
                      <span className="text-gold-600 font-mono text-sm">{studyMonths} Months</span>
                    </label>
                    <input
                      type="range"
                      min="3"
                      max="12"
                      step="3"
                      value={studyMonths}
                      onChange={(e) => setStudyMonths(Number(e.target.value))}
                      className="w-full accent-bcsve-800 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-gray-400 font-mono mt-1">
                      <span>3 Months (Fast Track)</span>
                      <span>6 Months</span>
                      <span>9 Months</span>
                      <span>12 Months (Full Diploma)</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-bcsve-950 mb-1.5 font-sans">
                      Target Career Focus:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: 'executive', label: 'Corporate Executive' },
                        { id: 'finance', label: 'Accounting & GST Specialist' },
                        { id: 'retail', label: 'Retail Store Manager' },
                        { id: 'entrepreneur', label: 'Venture Founder' }
                      ].map((role) => (
                        <button
                          key={role.id}
                          onClick={() => setSelectedRoleTier(role.id)}
                          className={`p-2 rounded-lg text-xs font-semibold text-left border transition-all ${
                            selectedRoleTier === role.id
                              ? 'bg-bcsve-800 text-white border-bcsve-800'
                              : 'bg-cream-50 text-gray-700 border-bcsve-100 hover:bg-cream-100'
                          }`}
                        >
                          {role.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Illustrated Output */}
                <div className="lg:col-span-6 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-cream-100 via-white to-amber-50/50 border border-bcsve-200 text-left space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold-600 block">
                    Educational Trajectory Output
                  </span>
                  <h3 className="text-base font-bold text-bcsve-950">
                    {studyMonths}-Month {selectedRoleTier.toUpperCase()} Curriculum Track
                  </h3>
                  <div className="space-y-2 text-xs text-gray-700">
                    <p className="flex items-center gap-2">
                      <CheckCircle size={13} className="text-emerald-600 shrink-0" />
                      <span>Covers {studyMonths >= 6 ? '120+ Practical Laboratory Hours' : '60+ Focused Practical Hours'}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <CheckCircle size={13} className="text-emerald-600 shrink-0" />
                      <span>{studyMonths >= 12 ? 'Full Master Diploma with Advanced Capstone' : 'Comprehensive Skill Certificate'}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <CheckCircle size={13} className="text-emerald-600 shrink-0" />
                      <span>Dedicated Mock Interview & Corporate Resume Polish</span>
                    </p>
                  </div>
                  <p className="text-[10.5px] text-gray-500 italic pt-1 border-t border-bcsve-100">
                    * Illustrative guide. Compensation and placement outcomes depend on individual candidate merit and hiring employer terms.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 6: Career Ladder Visual */}
        <section id="career-ladder" className="scroll-mt-24">
          <Container>
            <div className="bg-white rounded-2xl border border-bcsve-100 p-6 sm:p-8 shadow-card text-left">
              <div className="mb-6">
                <span className="text-[10px] font-bold tracking-wider text-gold-700 uppercase font-sans">
                  Hierarchical Growth
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-bcsve-950 tracking-tight">
                  The Enterprise Career Ladder
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  How certified business and management candidates advance through commercial organizations.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {data.careerLadder.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-cream-50/60 border border-bcsve-100 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-[10px] font-mono font-bold text-gold-600 mb-1">
                        <span>Tier 0{idx + 1}</span>
                        <span>{step.tenure}</span>
                      </div>
                      <h4 className="font-bold text-xs sm:text-[13px] text-bcsve-950 leading-snug">
                        {step.level}
                      </h4>
                      <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                        {step.focus}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 7: Boardroom Skills */}
        <section id="boardroom" className="scroll-mt-24">
          <Container>
            <div className="bg-white rounded-2xl border border-bcsve-100 p-6 sm:p-8 shadow-card text-left">
              <div className="mb-6">
                <span className="text-[10px] font-bold tracking-wider text-gold-700 uppercase font-sans">
                  Leadership Competencies
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-bcsve-950 tracking-tight">
                  Boardroom-Ready Professional Skills
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Four core leadership attributes integrated into all BCSVE management diplomas.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.boardroomSkills.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-bcsve-100 bg-white hover:border-gold-300 transition-all text-left"
                  >
                    <h4 className="font-bold text-sm text-bcsve-950 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 8: Curriculum Accordion */}
        <section id="curriculum" className="scroll-mt-24">
          <Container>
            <div className="bg-white rounded-2xl border border-bcsve-100 p-6 sm:p-8 shadow-card text-left">
              <CurriculumAccordion
                title="Business Administration & Corporate Syllabus"
                modules={data.subCourses[0].modules}
              />
            </div>
          </Container>
        </section>

        {/* SECTION 9: Eligibility & Admission */}
        <section id="eligibility" className="scroll-mt-24">
          <Container>
            <EligibilityCard
              eligibility={data.eligibility}
              programTitle={data.title}
            />
          </Container>
        </section>

        {/* SECTION 10: FAQs */}
        <section id="faqs" className="scroll-mt-24">
          <Container>
            <div className="bg-white rounded-2xl border border-bcsve-100 p-6 sm:p-8 shadow-card text-left">
              <ProgramFaqAccordion faqs={data.faqs} />
            </div>
          </Container>
        </section>

        {/* SECTION 11: Related Programs */}
        <section>
          <Container>
            <RelatedPrograms currentSlug={data.slug} />
          </Container>
        </section>

        {/* SECTION 12: Final Call to Action */}
        <section>
          <Container>
            <ProgramCta programTitle={data.title} />
            <ProgramNavFooter currentSlug={data.slug} />
          </Container>
        </section>

      </main>

      {/* Sub-Course Detail Drawer */}
      <CourseDrawer
        course={selectedCourse}
        isOpen={Boolean(selectedCourse)}
        onClose={() => setSelectedCourse(null)}
      />

    </div>
  );
}
