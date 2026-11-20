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
  Terminal, 
  GitBranch, 
  Code, 
  Layers, 
  CheckCircle, 
  Laptop, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  ChevronRight, 
  Play, 
  ArrowRight,
  GitCommit
} from 'lucide-react';
import { useModal } from '../../context/ModalContext';

export default function InformationTechnologyPage() {
  const data = programDetails['information-technology'];
  const { openEnquiry } = useModal();

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [activeTrackId, setActiveTrackId] = useState(data.tracks[0].id);
  const [codeSnippet, setCodeSnippet] = useState(
    `<div class="card">\n  <h2>Hello BCSVE</h2>\n  <p>Learn coding & build real apps.</p>\n</div>`
  );

  const activeTrack = data.tracks.find((t) => t.id === activeTrackId) || data.tracks[0];

  const navItems = [
    { id: 'overview', label: 'Overview', icon: Terminal },
    { id: 'courses', label: 'Courses (6)', icon: Laptop },
    { id: 'roadmap', label: 'Pick Your Track', icon: Layers },
    { id: 'git-timeline', label: 'Git Timeline', icon: GitBranch },
    { id: 'try-code', label: 'Code Playground', icon: Code },
    { id: 'projects', label: 'Projects Showcase', icon: CheckCircle },
    { id: 'curriculum', label: 'Curriculum', icon: Layers },
    { id: 'eligibility', label: 'Eligibility', icon: ShieldCheck },
    { id: 'faqs', label: 'FAQs', icon: Sparkles }
  ];

  // Custom Bespoke Hero Visual: Dark Maroon-Black IDE Window with Typing Code
  const terminalVisual = (
    <div className="relative rounded-2xl bg-[#0f172a] text-gray-200 shadow-2xl overflow-hidden border border-slate-700 font-mono text-left">
      {/* Window Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
        </div>
        <span className="text-[11px] text-slate-400 font-sans font-medium">
          bcsve-terminal — bash — 80×24
        </span>
        <span className="text-[10px] px-1.5 py-0.5 rounded bg-sky-950 text-sky-400 font-bold border border-sky-800/60">
          LIVE
        </span>
      </div>

      {/* Terminal Code Body */}
      <div className="p-4 sm:p-5 text-xs sm:text-[13px] leading-relaxed space-y-2 select-none">
        <div className="text-slate-500">
          # Initialising BCSVE Vocational IT Environment
        </div>
        <div>
          <span className="text-emerald-400">learner@bcsve</span>
          <span className="text-slate-400">:</span>
          <span className="text-sky-400">~/it-cohort-2026</span>
          <span className="text-slate-400">$ </span>
          <span className="text-yellow-300">npm run dev:future</span>
        </div>
        <div className="text-slate-300 pl-2 border-l border-slate-700 space-y-1">
          <p className="text-sky-300">✓ 6 Accredited Diploma Modules loaded</p>
          <p className="text-emerald-300">✓ Live workstation environment ready on port 3000</p>
          <p className="text-amber-300">✓ Tally Prime, Web Stack & Network Labs active</p>
        </div>
        <div className="pt-2">
          <span className="text-emerald-400">learner@bcsve</span>
          <span className="text-slate-400">:</span>
          <span className="text-sky-400">~/it-cohort-2026</span>
          <span className="text-slate-400">$ </span>
          <span className="text-slate-100 font-semibold">build-career --all-skills</span>
          <span className="inline-block w-2 h-4 bg-sky-400 ml-1 animate-pulse align-middle" />
        </div>
      </div>

      {/* Terminal Metrics Footer */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 p-2 bg-slate-950/80 border-t border-slate-800 text-[11px] text-slate-400">
        {data.terminalStats.map((stat, idx) => (
          <div key={idx} className="p-1.5 rounded bg-slate-900/60 text-left">
            <span className="block text-[9.5px] text-slate-400 truncate">{stat.label}</span>
            <span className="block font-bold text-sky-400 text-xs truncate mt-0.5">{stat.output}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-cream-50 text-gray-800 font-sans">
      
      {/* 1. Hero with Dark Terminal */}
      <ProgramHero program={data} customVisual={terminalVisual} />

      {/* 2. Sticky Sub Navigation */}
      <ProgramSubNav navItems={navItems} />

      {/* Main Content Sections */}
      <main className="py-8 sm:py-12 space-y-12 sm:space-y-16">
        
        {/* SECTION 1: Overview */}
        <section id="overview" className="scroll-mt-24">
          <Container>
            <div className="bg-white rounded-2xl border border-bcsve-100 p-6 sm:p-8 shadow-card text-left space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-500" />
                <span className="text-xs font-bold text-sky-700 tracking-wider uppercase font-sans">
                  The Tech Engine
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-bcsve-950 tracking-tight">
                Hands-On Computing, Production Code & Practical Office Software
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-3xl">
                The modern economy runs on digital architecture. Whether you need government-recognised computer certifications (DCA / CCC), corporate bookkeeping with Tally Prime, responsive web design with modern frameworks, or defensive cyber security, BCSVE provides high-spec computer laboratories and structured step-by-step training.
              </p>

              {/* Tools Marquee Banner */}
              <div className="pt-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-2 block font-sans">
                  Tools & Technologies Taught
                </span>
                <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                  <div className="flex w-max items-center gap-2 animate-marquee">
                    {data.toolsMarquee.concat(data.toolsMarquee).map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-slate-900 text-sky-300 font-mono text-xs font-semibold shrink-0 shadow-xs border border-slate-800"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 2: Sub-Courses */}
        <section id="courses" className="scroll-mt-24">
          <Container>
            <div className="text-left mb-6">
              <span className="text-[10px] font-bold tracking-wider text-sky-700 uppercase font-sans">
                Technical Qualifications
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-bcsve-950 tracking-tight">
                Programs in Information Technology
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Explore specialized diplomas and certificates in software, office computing, and digital media.
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
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-sky-50 text-sky-800 border border-sky-200 font-mono">
                        {course.code}
                      </span>
                      <span className="text-[11px] font-medium text-gray-500 flex items-center gap-1 font-sans">
                        <Clock size={11} className="text-sky-700" />
                        {course.duration}
                      </span>
                    </div>

                    <h3 className="font-bold text-sm sm:text-base text-bcsve-950 group-hover:text-sky-700 transition-colors leading-snug">
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
                    <span>Inspect Modules & Projects</span>
                    <span className="w-6 h-6 rounded-full bg-sky-50 text-sky-800 flex items-center justify-center group-hover:bg-bcsve-800 group-hover:text-white transition-colors">
                      <ChevronRight size={13} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* SECTION 3: "Pick Your Track" Interactive Roadmap */}
        <section id="roadmap" className="scroll-mt-24">
          <Container>
            <div className="bg-white rounded-2xl border border-bcsve-100 p-6 sm:p-8 shadow-card text-left">
              <div className="mb-6">
                <span className="text-[10px] font-bold tracking-wider text-sky-700 uppercase font-sans">
                  Tailored Learning Tracks
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-bcsve-950 tracking-tight">
                  Pick Your Career Track & Interactive Skill Tree
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Choose your targeted professional path to reveal the exact chronological sequence of modules and tools.
                </p>
              </div>

              {/* Track Selection Buttons */}
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 border-b border-bcsve-100">
                {data.tracks.map((track) => (
                  <button
                    key={track.id}
                    onClick={() => setActiveTrackId(track.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 shrink-0 font-sans flex items-center gap-1.5 ${
                      activeTrackId === track.id
                        ? 'bg-slate-900 text-white shadow-xs scale-105'
                        : 'bg-cream-100 text-gray-700 hover:bg-cream-200'
                    }`}
                  >
                    <span>{track.title}</span>
                  </button>
                ))}
              </div>

              {/* Active Roadmap Timeline */}
              <div className="mt-6 p-5 sm:p-6 rounded-xl bg-slate-900 text-white border border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-sky-400 font-bold">
                      Focus: {activeTrack.tag}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {activeTrack.title}
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded bg-slate-800 text-amber-300 text-xs font-mono font-bold shrink-0 self-start sm:self-auto">
                    Est. Duration: {activeTrack.estTime}
                  </span>
                </div>

                {/* Milestone Steps */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                  {activeTrack.steps.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-slate-800/80 border border-slate-700 flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1.5">
                        <span>Step 0{idx + 1}</span>
                        <CheckCircle size={12} className="text-emerald-400" />
                      </div>
                      <span className="text-xs font-semibold text-slate-100 leading-snug">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between flex-wrap gap-3">
                  <span className="text-xs text-slate-300">
                    Primary Aligned Program: <strong>{activeTrack.primaryCourse}</strong>
                  </span>
                  <button
                    onClick={() => openEnquiry(activeTrack.primaryCourse)}
                    className="shimmer-sweep px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-600 text-slate-950 font-bold text-xs flex items-center gap-1.5"
                  >
                    <span>Apply for this Track</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 4: Git-Style Commit Timeline */}
        <section id="git-timeline" className="scroll-mt-24">
          <Container>
            <div className="bg-white rounded-2xl border border-bcsve-100 p-6 sm:p-8 shadow-card text-left">
              <div className="mb-6">
                <span className="text-[10px] font-bold tracking-wider text-sky-700 uppercase font-sans">
                  Version-Controlled Learning
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-bcsve-950 tracking-tight">
                  Git Commit History Curriculum
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  How our students progress through milestones, structured like professional software release sprints.
                </p>
              </div>

              <div className="space-y-3 font-mono">
                {data.gitTimeline.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-900 text-slate-200 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 hover:border-slate-700 transition-colors text-xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center text-sky-400 shrink-0">
                        <GitCommit size={14} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-amber-400 font-bold">{item.commit}</span>
                          <span className="text-[10px] text-slate-400">on {item.branch}</span>
                        </div>
                        <span className="text-slate-100 font-sans text-xs font-medium block mt-0.5">
                          {item.message}
                        </span>
                      </div>
                    </div>

                    <span className="px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-800 text-[10.5px] font-bold self-start sm:self-auto shrink-0 font-sans">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 5: Live "Try It" Code Playground */}
        <section id="try-code" className="scroll-mt-24">
          <Container>
            <div className="bg-white rounded-2xl border border-bcsve-100 p-6 sm:p-8 shadow-card text-left">
              <div className="mb-4">
                <span className="text-[10px] font-bold tracking-wider text-sky-700 uppercase font-sans">
                  Interactive Sandbox
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-bcsve-950 tracking-tight">
                  Try It Yourself: Live Code Preview
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Edit the HTML in the left editor and see it instantly render on the live preview screen. No setup required.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                {/* Editor Box */}
                <div className="rounded-xl bg-slate-950 border border-slate-800 p-3 font-mono text-xs flex flex-col">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5 text-sky-400">
                      <Code size={13} />
                      <span>index.html</span>
                    </span>
                    <span>Live Input</span>
                  </div>
                  <textarea
                    value={codeSnippet}
                    onChange={(e) => setCodeSnippet(e.target.value)}
                    rows={7}
                    className="w-full bg-transparent text-emerald-300 font-mono text-xs focus:outline-none resize-none"
                    spellCheck="false"
                  />
                </div>

                {/* Live Preview Box */}
                <div className="rounded-xl bg-slate-100 border border-slate-300 p-4 flex flex-col">
                  <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-200 text-xs font-bold text-slate-700">
                    <span className="flex items-center gap-1 text-slate-900">
                      <Play size={12} className="text-emerald-600" />
                      <span>Live Render Output</span>
                    </span>
                    <span className="text-[10px] text-slate-500 font-normal">Real-Time DOM</span>
                  </div>

                  <div
                    className="flex-1 p-3 bg-white rounded-lg border border-slate-200 shadow-inner flex items-center justify-center min-h-[140px] text-slate-900"
                    dangerouslySetInnerHTML={{ __html: codeSnippet }}
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 6: Project Showcase */}
        <section id="projects" className="scroll-mt-24">
          <Container>
            <div className="bg-white rounded-2xl border border-bcsve-100 p-6 sm:p-8 shadow-card text-left">
              <div className="mb-6">
                <span className="text-[10px] font-bold tracking-wider text-sky-700 uppercase font-sans">
                  Portfolio Builders
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-bcsve-950 tracking-tight">
                  What You Will Build: Real-World Capstone Projects
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Every diploma candidate completes end-to-end commercial projects to present to employers.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.projectsShowcase.map((proj, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-cream-50/60 border border-bcsve-100 hover:border-sky-300 transition-all text-left flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-1.5">
                        {proj.tech.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-900 text-sky-300 font-mono"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <h3 className="font-bold text-sm sm:text-base text-bcsve-950">
                        {proj.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {proj.desc}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-bcsve-100 flex items-center justify-between text-xs text-bcsve-800 font-bold">
                      <span>Live Portfolio Ready</span>
                      <CheckCircle size={14} className="text-emerald-600" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 7: Curriculum Accordion */}
        <section id="curriculum" className="scroll-mt-24">
          <Container>
            <div className="bg-white rounded-2xl border border-bcsve-100 p-6 sm:p-8 shadow-card text-left">
              <CurriculumAccordion
                title="Full-Stack Web & Computing Syllabus Overview"
                modules={data.subCourses[1].modules}
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
