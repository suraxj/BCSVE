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
  Wrench, 
  ShieldCheck, 
  Zap, 
  Clock, 
  ChevronRight, 
  CheckCircle, 
  Sparkles, 
  ArrowRight,
  Gauge,
  HardHat,
  Store,
  Layers,
  Settings
} from 'lucide-react';
import { useModal } from '../../context/ModalContext';

export default function VocationalTradesPage() {
  const data = programDetails['vocational-applied-trades'];
  const { openEnquiry } = useModal();

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [activeTool, setActiveTool] = useState(data.tradeToolkit[0]);
  const [checkedPpe, setCheckedPpe] = useState({
    0: true,
    1: true,
    2: true,
    3: false,
    4: true
  });

  const togglePpe = (idx) => {
    setCheckedPpe((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const navItems = [
    { id: 'overview', label: 'Overview', icon: Wrench },
    { id: 'courses', label: 'Trades (7)', icon: Settings },
    { id: 'toolkit', label: 'Trade Toolkit', icon: Layers },
    { id: 'hands-on-gauge', label: 'Practical Ratio', icon: Gauge },
    { id: 'safety-ppe', label: 'Safety & PPE', icon: HardHat },
    { id: 'own-shop', label: 'Start Your Shop', icon: Store },
    { id: 'curriculum', label: 'Curriculum', icon: Layers },
    { id: 'eligibility', label: 'Eligibility', icon: ShieldCheck },
    { id: 'faqs', label: 'FAQs', icon: Sparkles }
  ];

  // Custom Bespoke Hero Visual: Technical Engineering Blueprint with Drawn SVG Tools
  const blueprintVisual = (
    <div className="relative rounded-2xl bg-[#0f1d38] p-5 sm:p-6 text-white shadow-2xl overflow-hidden border border-blue-400/30 font-sans text-left">
      {/* Blueprint Grid Lines Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a6a_1px,transparent_1px),linear-gradient(to_bottom,#1e3a6a_1px,transparent_1px)] bg-[size:20px_20px] opacity-40 pointer-events-none" />

      {/* Blueprint Header Stamp */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-blue-400/30 text-xs">
        <div>
          <span className="text-[10px] font-mono text-cyan-300 font-bold uppercase tracking-widest block">
            BCSVE ENGINEERING BLUEPRINT • DWG NO. 2026-TRADES
          </span>
          <span className="text-xs sm:text-sm font-bold text-white font-mono">
            SCALE: 1:1 PRACTICAL WORKSHOP MATRIX
          </span>
        </div>
        <span className="px-2 py-0.5 rounded bg-blue-900/80 text-cyan-300 border border-blue-400/50 text-[10px] font-mono font-bold">
          80% HANDS-ON
        </span>
      </div>

      {/* Blueprint Technical Drawing SVG Graphic */}
      <div className="relative h-28 sm:h-36 flex items-center justify-center my-2 p-2 bg-black/20 rounded-xl border border-blue-900/80 overflow-hidden">
        <svg
          viewBox="0 0 400 120"
          className="w-full h-full text-cyan-300 stroke-current fill-none stroke-[1.8]"
        >
          {/* Technical Measurement Marks */}
          <line x1="20" y1="10" x2="380" y2="10" strokeDasharray="4 4" className="opacity-40" />
          <line x1="20" y1="110" x2="380" y2="110" strokeDasharray="4 4" className="opacity-40" />
          
          {/* Spanner Wrench Illustration */}
          <path
            d="M 40,60 L 100,60 M 100,52 L 140,52 C 148,42 162,42 170,52 L 175,52 M 100,68 L 140,68 C 148,78 162,78 170,68 L 175,68"
            className="animate-pulse"
          />
          {/* Gear Cog Outline */}
          <circle cx="280" cy="60" r="32" strokeDasharray="6 3" />
          <circle cx="280" cy="60" r="14" />
          <path d="M 280,24 L 280,32 M 280,88 L 280,96 M 244,60 L 252,60 M 308,60 L 316,60" />
          
          {/* Spark Lightning */}
          <path d="M 190,35 L 180,60 L 205,60 L 195,85" className="text-amber-400 stroke-amber-400 fill-none" />
        </svg>

        {/* Blueprint Measure Stamp */}
        <div className="absolute left-3 bottom-2 text-[10px] font-mono text-cyan-400/80 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-700/50">
          TOLERANCE: ±0.02 mm
        </div>
      </div>

      {/* Quick Specs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-[11px] font-mono text-slate-300">
        <div className="p-1.5 rounded bg-blue-950/60 border border-blue-900/50">
          <span className="block text-[9px] text-cyan-400">PRACTICAL</span>
          <span className="block font-bold text-white text-xs">80% Labs</span>
        </div>
        <div className="p-1.5 rounded bg-blue-950/60 border border-blue-900/50">
          <span className="block text-[9px] text-cyan-400">TOTAL HRS</span>
          <span className="block font-bold text-white text-xs">480+ Hrs</span>
        </div>
        <div className="p-1.5 rounded bg-blue-950/60 border border-blue-900/50">
          <span className="block text-[9px] text-cyan-400">SAFETY</span>
          <span className="block font-bold text-white text-xs">100% PPE</span>
        </div>
        <div className="p-1.5 rounded bg-blue-950/60 border border-blue-900/50">
          <span className="block text-[9px] text-cyan-400">OUTCOME</span>
          <span className="block font-bold text-white text-xs">Own Shop</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-cream-50 text-gray-800 font-sans">
      
      {/* 1. Hero with Technical Blueprint */}
      <ProgramHero program={data} customVisual={blueprintVisual} />

      {/* 2. Sticky Sub Navigation */}
      <ProgramSubNav navItems={navItems} />

      {/* Main Content Sections */}
      <main className="py-8 sm:py-12 space-y-12 sm:space-y-16">
        
        {/* SECTION 1: Overview */}
        <section id="overview" className="scroll-mt-24">
          <Container>
            <div className="bg-white rounded-2xl border border-bcsve-100 p-6 sm:p-8 shadow-card text-left space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="text-xs font-bold text-amber-800 tracking-wider uppercase font-sans">
                  The Artisan & Engineering Engine
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-bcsve-950 tracking-tight">
                80% Hands-On Technical Training on Industrial Machinery
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-3xl">
                India’s massive infrastructure, solar, and industrial expansion requires skilled technicians who know how to wire single and 3-phase circuits, braze copper AC lines, diagnose electronic fuel injectors, install solar arrays, and run precision fashion boutiques. BCSVE vocational centers are outfitted with actual industrial workstations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200">
                  <h3 className="font-bold text-xs sm:text-sm text-bcsve-950 mb-1">State Wireman License Eligible</h3>
                  <p className="text-xs text-gray-600">Electrical candidates qualify to apply for government wireman licensing examinations.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200">
                  <h3 className="font-bold text-xs sm:text-sm text-amber-950 mb-1">PM Surya Ghar Solar Training</h3>
                  <p className="text-xs text-gray-600">Master rooftop solar PV array mounting, grid-tie inverters, and net-metering synchronization.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-cream-100 border border-bcsve-200">
                  <h3 className="font-bold text-xs sm:text-sm text-bcsve-950 mb-1">Zero Previous Background Needed</h3>
                  <p className="text-xs text-gray-600">From school dropouts to degree holders, trade programs train muscle memory from scratch.</p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 2: Sub-Courses */}
        <section id="courses" className="scroll-mt-24">
          <Container>
            <div className="text-left mb-6">
              <span className="text-[10px] font-bold tracking-wider text-amber-800 uppercase font-sans">
                Hands-On Trades
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-bcsve-950 tracking-tight">
                Programs in Vocational & Applied Trades
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Click any trade below to inspect tools used, practical workshop hours, and technician outcomes.
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
                        <Clock size={11} className="text-amber-700" />
                        {course.duration}
                      </span>
                    </div>

                    <h3 className="font-bold text-sm sm:text-base text-bcsve-950 group-hover:text-amber-800 transition-colors leading-snug">
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
                    <span>Inspect Bay Work & Syllabus</span>
                    <span className="w-6 h-6 rounded-full bg-amber-50 text-amber-800 flex items-center justify-center group-hover:bg-bcsve-800 group-hover:text-white transition-colors">
                      <ChevronRight size={13} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* SECTION 3: Trade Toolkit Interactive Grid */}
        <section id="toolkit" className="scroll-mt-24">
          <Container>
            <div className="bg-white rounded-2xl border border-bcsve-100 p-6 sm:p-8 shadow-card text-left">
              <div className="mb-6">
                <span className="text-[10px] font-bold tracking-wider text-amber-800 uppercase font-sans">
                  Workshop Instrumentation
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-bcsve-950 tracking-tight">
                  The Trade Toolkit: Real Instruments & Tools You Master
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Click or hover any tool below to discover what it does and which BCSVE trade uses it.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {data.tradeToolkit.map((tool) => (
                  <div
                    key={tool.id}
                    onClick={() => setActiveTool(tool)}
                    className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                      activeTool.id === tool.id
                        ? 'bg-[#0f1d38] text-white border-blue-400 shadow-md ring-1 ring-cyan-400'
                        : 'bg-white border-bcsve-100 hover:border-amber-400 text-gray-800'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between text-[10px] font-mono mb-1.5">
                        <span className={activeTool.id === tool.id ? 'text-cyan-300' : 'text-amber-800 font-bold'}>
                          {tool.trade}
                        </span>
                        <Wrench size={13} className={activeTool.id === tool.id ? 'text-cyan-400' : 'text-gray-400'} />
                      </div>
                      <h4 className="font-bold text-xs sm:text-sm leading-snug">
                        {tool.name}
                      </h4>
                    </div>

                    <p className={`text-[11px] mt-2 line-clamp-2 leading-relaxed ${
                      activeTool.id === tool.id ? 'text-slate-300' : 'text-gray-600'
                    }`}>
                      {tool.use}
                    </p>
                  </div>
                ))}
              </div>

              {/* Active Tool Spotlight */}
              <div className="mt-5 p-5 rounded-xl bg-gradient-to-br from-cream-100 via-white to-amber-50/70 border border-amber-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase text-amber-800 font-bold">
                    Spotlight: {activeTool.trade}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-bcsve-950">
                    {activeTool.name}
                  </h3>
                  <p className="text-xs text-gray-700 leading-relaxed max-w-xl">
                    {activeTool.use}
                  </p>
                </div>

                <button
                  onClick={() => openEnquiry(activeTool.trade)}
                  className="shimmer-sweep px-4 py-2 rounded-lg bg-bcsve-800 hover:bg-bcsve-900 text-white text-xs font-bold flex items-center gap-1.5 shrink-0"
                >
                  <span>Enquire for this Trade</span>
                  <ArrowRight size={12} />
                </button>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 4: Hands-on Practical Ratio Gauge */}
        <section id="hands-on-gauge" className="scroll-mt-24">
          <Container>
            <div className="bg-white rounded-2xl border border-bcsve-100 p-6 sm:p-8 shadow-card text-left">
              <div className="mb-6">
                <span className="text-[10px] font-bold tracking-wider text-amber-800 uppercase font-sans">
                  The 80:20 Rule
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-bcsve-950 tracking-tight">
                  Hands-on Ratio & Workshop Hours Meter
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Trades cannot be mastered behind desks. Our syllabus dedicates 80% of all curriculum hours to practical tool operation.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Visual Ratio Bar */}
                <div className="lg:col-span-7 space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold text-bcsve-950 mb-1.5">
                      <span>Practical Workshop Drills (80%)</span>
                      <span>Classroom Fundamentals (20%)</span>
                    </div>
                    {/* Visual Two-Tone Bar */}
                    <div className="h-6 w-full rounded-full overflow-hidden flex bg-gray-200 border border-gray-300">
                      <div className="h-full bg-gradient-to-r from-bcsve-800 to-amber-600 flex items-center justify-center text-white text-[11px] font-bold font-mono w-[80%]">
                        80% WORKSHOP
                      </div>
                      <div className="h-full bg-cream-200 flex items-center justify-center text-bcsve-950 text-[10px] font-bold font-mono w-[20%]">
                        20%
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                    <div className="p-3 rounded-lg bg-cream-50 border border-bcsve-100 text-left">
                      <span className="block text-[10px] text-gray-500 font-bold uppercase">Total Hours</span>
                      <span className="block text-base font-extrabold text-bcsve-950 mt-0.5">480+ Hours</span>
                    </div>
                    <div className="p-3 rounded-lg bg-cream-50 border border-bcsve-100 text-left">
                      <span className="block text-[10px] text-gray-500 font-bold uppercase">Machinery Bays</span>
                      <span className="block text-base font-extrabold text-bcsve-950 mt-0.5">1:1 Access</span>
                    </div>
                    <div className="p-3 rounded-lg bg-cream-50 border border-bcsve-100 text-left">
                      <span className="block text-[10px] text-gray-500 font-bold uppercase">Safety Rating</span>
                      <span className="block text-base font-extrabold text-emerald-700 mt-0.5">Zero Injury</span>
                    </div>
                  </div>
                </div>

                {/* Practical Guarantee Box */}
                <div className="lg:col-span-5 p-5 rounded-2xl bg-gradient-to-br from-[#0f1d38] to-[#1e3a6a] text-white border border-blue-400 text-left space-y-2.5">
                  <div className="flex items-center gap-1.5 text-cyan-300 text-xs font-mono font-bold">
                    <Zap size={13} />
                    <span>CENTRE-BASED PRACTICAL ASSURANCE</span>
                  </div>
                  <h3 className="text-base font-bold text-white">
                    You Learn by Doing, Not Just Reading
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Every center maintains electrical distribution boards, piping test rigs, automotive chassis, refrigeration vacuum stations, and commercial sewing machinery.
                  </p>
                  <button
                    onClick={() => openEnquiry('Vocational & Applied Trades')}
                    className="shimmer-sweep w-full mt-2 py-2 rounded-lg bg-amber-400 hover:bg-amber-500 text-bcsve-950 font-bold text-xs flex items-center justify-center gap-1"
                  >
                    <span>Book Workshop Lab Visit</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 5: Safety First PPE Checklist */}
        <section id="safety-ppe" className="scroll-mt-24">
          <Container>
            <div className="bg-white rounded-2xl border border-bcsve-100 p-6 sm:p-8 shadow-card text-left">
              <div className="mb-6">
                <span className="text-[10px] font-bold tracking-wider text-amber-800 uppercase font-sans">
                  Zero Compromise Protocol
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-bcsve-950 tracking-tight">
                  Safety First: ISI Personal Protective Equipment (PPE)
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Professional artisans prioritize personal safety. Review the standard PPE equipment mandated in all BCSVE workshop labs.
                </p>
              </div>

              <div className="space-y-2.5">
                {data.safetyFirstPPE.map((ppe, idx) => {
                  const isChecked = checkedPpe[idx];
                  return (
                    <div
                      key={idx}
                      onClick={() => togglePpe(idx)}
                      className={`p-3.5 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer transition-all ${
                        isChecked ? 'bg-amber-50/70 border-amber-300' : 'bg-white border-gray-200'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded flex items-center justify-center shrink-0 ${
                            isChecked ? 'bg-amber-600 text-white' : 'border border-gray-400 bg-white'
                          }`}
                        >
                          {isChecked && <CheckCircle size={13} />}
                        </div>
                        <div>
                          <h4 className="font-bold text-xs sm:text-sm text-bcsve-950">
                            {ppe.item}
                          </h4>
                          <p className="text-[11px] text-gray-600 mt-0.5">
                            {ppe.note}
                          </p>
                        </div>
                      </div>

                      <span className="px-2 py-0.5 rounded bg-white text-gray-700 border border-gray-200 text-[10px] font-mono font-bold self-start sm:self-auto shrink-0">
                        {ppe.standard}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 6: "From Trainee to Your Own Shop" Pathway */}
        <section id="own-shop" className="scroll-mt-24">
          <Container>
            <div className="bg-white rounded-2xl border border-bcsve-100 p-6 sm:p-8 shadow-card text-left">
              <div className="mb-6">
                <span className="text-[10px] font-bold tracking-wider text-amber-800 uppercase font-sans">
                  Artisan Entrepreneurship
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-bcsve-950 tracking-tight">
                  From Trainee to Your Own Shop: The Self-Employed Pathway
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Over 40% of trade diploma holders establish independent repair services, electrical dealerships, or beauty salons.
                </p>
              </div>

              {/* Steps */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                {data.workshopToShop.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-cream-50/70 border border-bcsve-100 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-mono font-bold text-amber-800 block mb-1">
                        Step {step.step}
                      </span>
                      <h4 className="font-bold text-xs sm:text-[13px] text-bcsve-950 leading-snug">
                        {step.title}
                      </h4>
                      <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Startup Checklist */}
              <div className="p-5 rounded-xl bg-gradient-to-br from-amber-50 to-cream-50 border border-amber-200">
                <h4 className="font-bold text-xs sm:text-sm text-bcsve-950 mb-2 flex items-center gap-1.5">
                  <Store size={15} className="text-amber-800" />
                  <span>Your Turnkey "Start-Your-Own-Workshop" Starter Kit:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                  {data.workshopChecklist.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle size={13} className="text-amber-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 7: Curriculum Accordion */}
        <section id="curriculum" className="scroll-mt-24">
          <Container>
            <div className="bg-white rounded-2xl border border-bcsve-100 p-6 sm:p-8 shadow-card text-left">
              <CurriculumAccordion
                title="Electrician & Applied Trades Syllabus Matrix"
                modules={data.subCourses[0].modules}
              />
            </div>
          </Container>
        </section>

        {/* SECTION 8: Eligibility & Admission */}
        <section id="eligibility" className="scroll-mt-24">
          <Container>
            <EligibilityCard
              eligibility={data.eligibility}
              programTitle={data.title}
            />
          </Container>
        </section>

        {/* SECTION 9: FAQs */}
        <section id="faqs" className="scroll-mt-24">
          <Container>
            <div className="bg-white rounded-2xl border border-bcsve-100 p-6 sm:p-8 shadow-card text-left">
              <ProgramFaqAccordion faqs={data.faqs} />
            </div>
          </Container>
        </section>

        {/* SECTION 10: Related Programs */}
        <section>
          <Container>
            <RelatedPrograms currentSlug={data.slug} />
          </Container>
        </section>

        {/* SECTION 11: Final Call to Action */}
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
