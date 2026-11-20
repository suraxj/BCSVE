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
  Heart, 
  Activity, 
  Clock, 
  CheckCircle, 
  Stethoscope, 
  ShieldCheck, 
  Sparkles, 
  Building2, 
  ChevronRight, 
  UserCheck, 
  Eye, 
  ArrowRight,
  Check
} from 'lucide-react';
import { useModal } from '../../context/ModalContext';

export default function HealthcarePage() {
  const data = programDetails['healthcare-wellness'];
  const { openEnquiry } = useModal();

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [activeShiftIndex, setActiveShiftIndex] = useState(0);
  const [activeBodyHotspot, setActiveBodyHotspot] = useState(data.bodyHotspots[0]);
  const [activeSectorIndex, setActiveSectorIndex] = useState(0);
  const [checkedSkills, setCheckedSkills] = useState({
    vitals: true,
    bp: true,
    dressing: false,
    cpr: true,
    phleb: false,
    biohazard: true
  });

  const toggleSkill = (id) => {
    setCheckedSkills((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const navItems = [
    { id: 'overview', label: 'Overview', icon: Eye },
    { id: 'courses', label: 'Courses (6)', icon: Stethoscope },
    { id: 'shift-timeline', label: 'Day in the Shift', icon: Clock },
    { id: 'skills-lab', label: 'Skills Lab', icon: CheckCircle },
    { id: 'body-systems', label: 'Clinical Focus', icon: Heart },
    { id: 'careers', label: 'Work Sectors', icon: Building2 },
    { id: 'curriculum', label: 'Curriculum', icon: Activity },
    { id: 'eligibility', label: 'Eligibility', icon: ShieldCheck },
    { id: 'faqs', label: 'FAQs', icon: Sparkles }
  ];

  // Custom Bespoke Hero Visual: Animated SVG ECG Monitor with Pulse
  const ecgVisual = (
    <div className="relative rounded-2xl bg-gradient-to-br from-bcsve-950 via-bcsve-900 to-bcsve-850 p-5 sm:p-6 text-white shadow-card overflow-hidden border border-rose-900/60 font-sans group">
      {/* Background glow and subtle grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#d24164_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
      
      <div className="flex items-center justify-between border-b border-rose-900/60 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500 animate-ping" />
          <span className="text-xs font-mono tracking-wider uppercase text-rose-300 font-bold">
            Live Clinical Vital Sign
          </span>
        </div>
        <span className="text-xs font-mono text-gold-300 font-semibold">
          Lead II • Normal Sinus
        </span>
      </div>

      {/* Animated SVG ECG Line */}
      <div className="relative h-28 sm:h-32 flex items-center justify-center my-2 overflow-hidden bg-black/30 rounded-xl p-2 border border-rose-950/80">
        <svg
          viewBox="0 0 600 120"
          className="w-full h-full text-rose-400 stroke-current fill-none stroke-[2.5]"
          preserveAspectRatio="none"
        >
          {/* Static ECG Track */}
          <path
            d="M0,60 L80,60 L95,60 L105,45 L115,75 L125,10 L135,110 L145,50 L155,65 L165,60 L240,60 L255,60 L265,45 L275,75 L285,10 L295,110 L305,50 L315,65 L325,60 L400,60 L415,60 L425,45 L435,75 L445,10 L455,110 L465,50 L475,65 L485,60 L600,60"
            className="opacity-25"
          />
          {/* Animated Sweeping Pulse Path */}
          <path
            d="M0,60 L80,60 L95,60 L105,45 L115,75 L125,10 L135,110 L145,50 L155,65 L165,60 L240,60 L255,60 L265,45 L275,75 L285,10 L295,110 L305,50 L315,65 L325,60 L400,60 L415,60 L425,45 L435,75 L445,10 L455,110 L465,50 L475,65 L485,60 L600,60"
            strokeDasharray="600"
            strokeDashoffset="600"
            className="animate-ecgPulse"
          />
        </svg>

        {/* Pulse Heart Indicator */}
        <div className="absolute right-4 top-4 flex items-center gap-1.5 px-2 py-0.5 rounded bg-rose-950/80 border border-rose-700/50">
          <Heart size={13} className="text-rose-400 fill-rose-400 animate-pulse" />
          <span className="text-xs font-mono font-bold text-white">72 BPM</span>
        </div>
      </div>

      {/* Hospital Metrics Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-left">
        {data.vitalsStats.map((stat, idx) => (
          <div key={idx} className="p-2 rounded-lg bg-white/5 border border-white/10">
            <span className="block text-[10px] text-rose-200 truncate">{stat.label}</span>
            <span className="block text-sm font-extrabold text-white mt-0.5">{stat.value}</span>
            <span className="block text-[9px] text-gray-400 truncate">{stat.unit}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-cream-50 text-gray-800 font-sans">
      
      {/* 1. Hero with Animated ECG */}
      <ProgramHero program={data} customVisual={ecgVisual} />

      {/* 2. Sticky Sub Navigation */}
      <ProgramSubNav navItems={navItems} />

      {/* Main Content Sections */}
      <main className="py-8 sm:py-12 space-y-12 sm:space-y-16">
        
        {/* SECTION 1: Overview & Promise */}
        <section id="overview" className="scroll-mt-24">
          <Container>
            <div className="bg-white rounded-2xl border border-bcsve-100 p-6 sm:p-8 shadow-card text-left space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span className="text-xs font-bold text-rose-700 tracking-wider uppercase font-sans">
                  The Clinical Philosophy
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-bcsve-950 tracking-tight">
                Healthcare Training That Treats Every Patient with Dignity
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-3xl">
                Modern healthcare institutions demand certified allied healthcare professionals who combine technical precision with profound human empathy. BCSVE healthcare programs are built in consultation with senior hospital administrators, providing comprehensive bedside drills, aseptic protocol certifications, and immediate placement support.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200/80">
                  <h3 className="font-bold text-xs sm:text-sm text-rose-950 mb-1">NABH-Compliant Standards</h3>
                  <p className="text-xs text-rose-900/80">Trained strictly in biomedical waste safety, infection control, and international patient care guidelines.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-gold-50/80 border border-gold-200/90">
                  <h3 className="font-bold text-xs sm:text-sm text-gold-950 mb-1">Hospital Ward Rotations</h3>
                  <p className="text-xs text-gold-900/80">Mandatory rotation hours across General Wards, ICU observation, and Outpatient Departments (OPD).</p>
                </div>
                <div className="p-3.5 rounded-xl bg-cream-100 border border-bcsve-200/70">
                  <h3 className="font-bold text-xs sm:text-sm text-bcsve-950 mb-1">National Recognition</h3>
                  <p className="text-xs text-bcsve-900/80">Tamper-proof verifiable credentials recognized by healthcare chains and diagnostics across India.</p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 2: Sub-Courses Grid */}
        <section id="courses" className="scroll-mt-24">
          <Container>
            <div className="text-left mb-6">
              <span className="text-[10px] font-bold tracking-wider text-rose-700 uppercase font-sans">
                Curated Specialisations
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-bcsve-950 tracking-tight">
                Programs in Healthcare & Wellness
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Select a diploma or certificate course below to inspect modules, tools, and career pathways.
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
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-50 text-rose-800 border border-rose-200 font-mono">
                        {course.code}
                      </span>
                      <span className="text-[11px] font-medium text-gray-500 flex items-center gap-1">
                        <Clock size={11} className="text-rose-700" />
                        {course.duration}
                      </span>
                    </div>

                    <h3 className="font-bold text-sm sm:text-base text-bcsve-950 group-hover:text-rose-800 transition-colors leading-snug">
                      {course.title}
                    </h3>

                    <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                      {course.shortDescription}
                    </p>

                    {/* Skill Tags */}
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
                    <span>View Curriculum & Tools</span>
                    <span className="w-6 h-6 rounded-full bg-rose-50 text-rose-800 flex items-center justify-center group-hover:bg-bcsve-800 group-hover:text-white transition-colors">
                      <ChevronRight size={13} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* SECTION 3: Interactive Shift Timeline ("A Day in the Shift") */}
        <section id="shift-timeline" className="scroll-mt-24">
          <Container>
            <div className="bg-white rounded-2xl border border-bcsve-100 p-6 sm:p-8 shadow-card text-left">
              <div className="mb-6">
                <span className="text-[10px] font-bold tracking-wider text-rose-700 uppercase font-sans">
                  Interactive Simulation
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-bcsve-950 tracking-tight">
                  A Day in the Shift: Hospital Ward Simulation
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Step into the shoes of a certified healthcare assistant. Scrub through the 12-hour hospital shift timeline below.
                </p>
              </div>

              {/* Time Scrubber Buttons */}
              <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar pb-3 border-b border-bcsve-100">
                {data.shiftTimeline.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveShiftIndex(idx)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 shrink-0 font-sans flex items-center gap-1.5 ${
                      activeShiftIndex === idx
                        ? 'bg-rose-800 text-white shadow-xs scale-105'
                        : 'bg-cream-100 text-gray-700 hover:bg-cream-200'
                    }`}
                  >
                    <Clock size={11} className={activeShiftIndex === idx ? 'text-rose-200' : 'text-gray-500'} />
                    <span>{item.time}</span>
                  </button>
                ))}
              </div>

              {/* Active Shift Details Card */}
              <div className="mt-6 p-5 sm:p-6 rounded-xl bg-gradient-to-br from-rose-50/70 to-cream-50 border border-rose-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="space-y-1.5 text-left max-w-xl">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-800 text-white font-mono">
                      {data.shiftTimeline[activeShiftIndex].time}
                    </span>
                    <span className="text-xs font-bold text-gold-700 uppercase tracking-wide">
                      Core Competency: {data.shiftTimeline[activeShiftIndex].skill}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-bcsve-950">
                    {data.shiftTimeline[activeShiftIndex].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {data.shiftTimeline[activeShiftIndex].description}
                  </p>
                </div>

                <button
                  onClick={() => openEnquiry('Nursing & Patient Care Assistant')}
                  className="shimmer-sweep shrink-0 px-4 py-2 rounded-lg bg-bcsve-800 hover:bg-bcsve-900 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs"
                >
                  <span>Train for this Role</span>
                  <ArrowRight size={12} />
                </button>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 4: Interactive Skills-Lab Checklist */}
        <section id="skills-lab" className="scroll-mt-24">
          <Container>
            <div className="bg-white rounded-2xl border border-bcsve-100 p-6 sm:p-8 shadow-card text-left">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6">
                <div>
                  <span className="text-[10px] font-bold tracking-wider text-rose-700 uppercase font-sans">
                    Practical Proficiency Matrix
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-bcsve-950 tracking-tight">
                    Skills-Lab Clinical Competency Checklist
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    Every student must pass 100% of these practical evaluations on hospital mannequins before clinical deployment.
                  </p>
                </div>
                <div className="text-xs font-semibold text-rose-800 bg-rose-50 px-3 py-1.5 rounded-lg border border-rose-200 shrink-0">
                  {Object.values(checkedSkills).filter(Boolean).length} of {data.skillsLab.length} Verified
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {data.skillsLab.map((skill) => {
                  const isDone = checkedSkills[skill.id];
                  return (
                    <div
                      key={skill.id}
                      onClick={() => toggleSkill(skill.id)}
                      className={`p-3.5 rounded-xl border transition-all duration-200 cursor-pointer text-left flex items-start gap-3 ${
                        isDone
                          ? 'bg-rose-50/60 border-rose-300 shadow-xs'
                          : 'bg-white border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                          isDone ? 'bg-rose-800 text-white' : 'border border-gray-400 bg-white'
                        }`}
                      >
                        {isDone && <Check size={12} strokeWidth={3} />}
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-bold text-xs sm:text-[13px] text-bcsve-950 leading-snug">
                          {skill.title}
                        </h4>
                        <p className="text-[11px] text-gray-600 mt-0.5 leading-normal">
                          {skill.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 5: Anatomical Body-System Hotspots */}
        <section id="body-systems" className="scroll-mt-24">
          <Container>
            <div className="bg-white rounded-2xl border border-bcsve-100 p-6 sm:p-8 shadow-card text-left">
              <div className="mb-6">
                <span className="text-[10px] font-bold tracking-wider text-rose-700 uppercase font-sans">
                  Anatomical Mapping
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-bcsve-950 tracking-tight">
                  Clinical Body Systems Focus
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Click on an anatomical subsystem below to inspect the corresponding care procedures.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Hotspot Selector Pills */}
                <div className="lg:col-span-5 space-y-2">
                  {data.bodyHotspots.map((spot) => (
                    <button
                      key={spot.id}
                      onClick={() => setActiveBodyHotspot(spot)}
                      className={`w-full p-3.5 rounded-xl border text-left transition-all duration-200 flex items-center justify-between ${
                        activeBodyHotspot.id === spot.id
                          ? 'bg-rose-800 text-white border-rose-800 shadow-xs'
                          : 'bg-cream-50/60 border-bcsve-100 text-gray-800 hover:bg-cream-100'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Heart size={15} className={activeBodyHotspot.id === spot.id ? 'text-rose-200' : 'text-rose-700'} />
                        <span className="font-bold text-xs sm:text-sm font-sans">{spot.name}</span>
                      </div>
                      <ChevronRight size={14} className={activeBodyHotspot.id === spot.id ? 'text-rose-200' : 'text-gray-400'} />
                    </button>
                  ))}
                </div>

                {/* Hotspot Details Card */}
                <div className="lg:col-span-7 p-6 rounded-2xl bg-gradient-to-br from-cream-100/80 via-white to-rose-50/40 border border-bcsve-200 text-left space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-900 text-[10px] font-bold">
                    <Stethoscope size={11} />
                    <span>Clinical Ward Procedures</span>
                  </div>
                  <h3 className="text-lg font-bold text-bcsve-950">
                    {activeBodyHotspot.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {activeBodyHotspot.focus}
                  </p>
                  <div className="pt-3 border-t border-bcsve-100 flex items-center justify-between flex-wrap gap-2 text-xs text-gray-500">
                    <span>Clinical Lab Practice on Simulation Mannequins</span>
                    <button
                      onClick={() => openEnquiry(data.title)}
                      className="text-rose-800 font-bold hover:underline inline-flex items-center gap-1"
                    >
                      Explore Courses <ArrowRight size={11} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 6: Work Sectors Explorer */}
        <section id="careers" className="scroll-mt-24">
          <Container>
            <div className="bg-white rounded-2xl border border-bcsve-100 p-6 sm:p-8 shadow-card text-left">
              <div className="mb-6">
                <span className="text-[10px] font-bold tracking-wider text-rose-700 uppercase font-sans">
                  Employment Pathways
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-bcsve-950 tracking-tight">
                  Where Our Healthcare Learners Work
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Explore major institutional employment sectors for certified assistants and technicians.
                </p>
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 border-b border-bcsve-100">
                {data.workSectors.map((sector, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSectorIndex(idx)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 shrink-0 font-sans ${
                      activeSectorIndex === idx
                        ? 'bg-bcsve-800 text-white shadow-xs'
                        : 'bg-cream-100 text-gray-700 hover:bg-cream-200'
                    }`}
                  >
                    {sector.name}
                  </button>
                ))}
              </div>

              {/* Active Sector Display */}
              <div className="mt-5 p-5 rounded-xl bg-cream-50/70 border border-bcsve-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold-600 font-sans">
                    Entry Job Designation
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-bcsve-950">
                    {data.workSectors[activeSectorIndex].role}
                  </h3>
                  <p className="text-xs text-gray-600 flex items-center gap-1.5 pt-1">
                    <UserCheck size={13} className="text-rose-700" />
                    <span>Career Advancement: <strong>{data.workSectors[activeSectorIndex].growth}</strong></span>
                  </p>
                </div>

                <button
                  onClick={() => openEnquiry(data.workSectors[activeSectorIndex].role)}
                  className="shimmer-sweep px-4 py-2 rounded-lg bg-bcsve-800 hover:bg-bcsve-900 text-white text-xs font-bold flex items-center gap-1.5 shrink-0"
                >
                  <span>Enquire for this Track</span>
                  <ArrowRight size={12} />
                </button>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 7: Curriculum Accordion */}
        <section id="curriculum" className="scroll-mt-24">
          <Container>
            <div className="bg-white rounded-2xl border border-bcsve-100 p-6 sm:p-8 shadow-card text-left">
              <CurriculumAccordion
                title="Foundational Healthcare Syllabus Outline"
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
