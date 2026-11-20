export const siteData = {
  header: {
    title: "Bharath Council for",
    subtitle: "Skill and Vocational Education",
    tagline: "Educate • Empower • Enlighten",
    navLinks: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Programs", href: "#programs", hasDropdown: true },
      { name: "Admissions", href: "#admission-process" },
      { name: "Verification", href: "#verification" },
      { name: "Affiliation", href: "#affiliation-cta" },
      { name: "FAQs", href: "#faqs" },
      { name: "Contact", href: "#contact" },
    ],
    ctaButton: "Apply Now"
  },

  hero: {
    badge: "NATIONAL SKILL CERTIFICATION",
    headingPart1: "Educate. Empower.",
    headingPart2: "Enlighten.",
    description: "A trusted platform for skill and vocational education, empowering learners with practical knowledge, industry-aligned training and nationally recognized certification.",
    primaryCta: "Explore Courses",
    secondaryCta: "Verify Certificate",
    learnerCount: "12,000+ learners",
    floatingBadges: [
      { text: "Certified", type: "badge-check" },
      { text: "98% Placement", type: "badge-stat" },
      { text: "New Batch Open", type: "badge-calendar" },
    ]
  },

  stats: [
    { value: "12,000+", label: "Learners", icon: "Users" },
    { value: "250+", label: "Courses", icon: "BookOpen" },
    { value: "150+", label: "Centres", icon: "MapPin" },
    { value: "98%", label: "Success Rate", icon: "Trophy" },
  ],

  partners: [
    {
      id: "nsdc",
      name: "NSDC",
      fullName: "National Skill Development Corporation",
      tagline: "Skill Development Corporation",
    },
    {
      id: "skillindia",
      name: "कौशल भारत",
      fullName: "Skill India",
      tagline: "National Skill Initiative",
    },
    {
      id: "nielit",
      name: "NIELIT",
      fullName: "National Institute of Electronics & Information Technology",
      tagline: "Ministry of Electronics & IT",
    },
    {
      id: "msde",
      name: "MSDE",
      fullName: "Ministry of Skill Development & Entrepreneurship",
      tagline: "Govt. of India",
    },
  ],

  about: {
    tag: "ABOUT BCSVE",
    heading: "Learning that opens doors",
    description: "Bharath Council for Skill and Vocational Education (BCSVE) is dedicated to building a skilled and future-ready workforce through quality education, practical training and nationally aligned certification programs.",
    cards: [
      {
        title: "Our Mission",
        description: "To provide accessible, skill-based education that empowers individuals for meaningful employment and self-reliance.",
        icon: "Target",
        color: "bg-bcsve-100 text-bcsve-800"
      },
      {
        title: "Our Vision",
        description: "To be a leading national body in skill and vocational education, creating a competent and inclusive talent ecosystem.",
        icon: "Eye",
        color: "bg-gold-100 text-gold-700"
      }
    ]
  },

  programs: {
    tag: "OUR PROGRAMS",
    heading: "Explore Our Programs",
    categories: ["All Programs", "Healthcare", "Technology", "Business", "Vocational"],
    items: [
      {
        id: "healthcare",
        category: "Healthcare",
        title: "Healthcare & Wellness",
        description: "Build a rewarding career in healthcare, wellness and community care with industry-focused training.",
        duration: "3 - 12 Months",
        type: "Certificate / Diploma",
        mode: "Online / Offline",
        icon: "HeartPulse",
        placeholderLabel: "Healthcare & Wellness (Stethoscope & Pulse)",
        dimensions: "450 × 260 px"
      },
      {
        id: "technology",
        category: "Technology",
        title: "Information Technology",
        description: "Gain in-demand technical skills in IT, software applications and digital technologies.",
        duration: "3 - 12 Months",
        type: "Certificate / Diploma",
        mode: "Online / Offline",
        icon: "Laptop",
        placeholderLabel: "Information Technology (Laptop & Code)",
        dimensions: "450 × 260 px"
      },
      {
        id: "business",
        category: "Business",
        title: "Business & Management",
        description: "Develop essential business, management and entrepreneurship skills for today's dynamic industries.",
        duration: "3 - 12 Months",
        type: "Certificate / Diploma",
        mode: "Online / Offline",
        icon: "TrendingUp",
        placeholderLabel: "Business & Management (Growth & Charts)",
        dimensions: "450 × 260 px"
      },
      {
        id: "vocational",
        category: "Vocational",
        title: "Vocational & Applied Trades",
        description: "Master specialized vocational skills in electrical, electronics, automotive, and craft professions.",
        duration: "3 - 12 Months",
        type: "Certificate / Diploma",
        mode: "Offline / Practical",
        icon: "Wrench",
        placeholderLabel: "Vocational & Applied Trades",
        dimensions: "450 × 260 px"
      }
    ]
  },

  whyChooseUs: {
    tag: "WHY BCSVE",
    heading: "A Stronger Foundation for Your Career",
    features: [
      {
        title: "Recognised Certification",
        description: "Nationally aligned and widely accepted across top government and private sectors.",
        icon: "Award"
      },
      {
        title: "Industry-Relevant Skills",
        description: "Practical training crafted by experts for real-world jobs and future challenges.",
        icon: "Sliders"
      },
      {
        title: "Flexible Learning",
        description: "Learn at your own pace, with hybrid access both online and in physical centres.",
        icon: "Monitor"
      },
      {
        title: "Career Support",
        description: "Comprehensive guidance for mock interviews, internships and career placements.",
        icon: "Users"
      }
    ]
  },

  howItWorks: {
    tag: "HOW IT WORKS",
    heading: "Your Certification Journey in 4 Simple Steps",
    steps: [
      {
        stepNumber: "01",
        title: "Choose a Course",
        description: "Browse and select a program that fits your career goals.",
        icon: "Laptop"
      },
      {
        stepNumber: "02",
        title: "Enrol",
        description: "Complete a simple registration process online or at your nearest centre.",
        icon: "FileCheck"
      },
      {
        stepNumber: "03",
        title: "Learn & Practise",
        description: "Gain practical knowledge through structured training and laboratory modules.",
        icon: "BookOpenCheck"
      },
      {
        stepNumber: "04",
        title: "Get Certified",
        description: "Receive a nationally recognised certificate with verifiable digital credentials.",
        icon: "Award"
      }
    ]
  },

  verification: {
    tag: "CERTIFICATE VERIFICATION",
    heading: "Verify Your Certificate",
    description: "Quickly and securely verify the authenticity of your BCSVE certificate.",
    sampleCertificates: [
      {
        id: "BCSVE-2026-9874",
        name: "Aakash Sharma",
        course: "Diploma in Information Technology",
        grade: "Distinction (Grade A+)",
        issueDate: "15 Jan 2026",
        centre: "Delhi Central Vocational Centre #104",
        status: "Verified & Active"
      },
      {
        id: "BCSVE-2025-4521",
        name: "Pooja Sharma",
        course: "Advanced Certificate in Healthcare Assistance",
        grade: "Grade A",
        issueDate: "20 Nov 2025",
        centre: "Bangalore South Skill Academy #082",
        status: "Verified & Active"
      }
    ]
  },

  affiliations: {
    tag: "AFFILIATION",
    heading: "Our Affiliated Partners",
    partnerBadges: [
      { id: "aicte", name: "AICTE", label: "Approved Program", note: "Technical Framework" },
      { id: "nabet", name: "NABET", label: "Quality Assurance", note: "Accredited Standards" },
      { id: "nsdc", name: "NSDC", label: "Training Partner", note: "Skill India Network" },
      { id: "iso", name: "ISO", label: "9001:2015 Certified", note: "Quality Management" }
    ],
    becomeCentre: {
      title: "Become an Affiliated Centre",
      description: "Partner with BCSVE to offer skill and vocational programs in your region.",
      cta: "Apply for Affiliation"
    }
  },

  testimonials: {
    tag: "TESTIMONIALS",
    heading: "What Our Learners Say",
    items: [
      {
        id: 1,
        quote: "BCSVE gave me the right skills and confidence to start my career in the healthcare sector.",
        author: "Pooja Sharma",
        program: "Healthcare Program",
        rating: 3,
        avatarKey: "testimonialPooja",
        placeholderLabel: "Avatar: Pooja Sharma"
      },
      {
        id: 2,
        quote: "The practical training and support from the team helped me get placed in a good company.",
        author: "Rohit Kumar",
        program: "IT Program",
        rating: 3,
        avatarKey: "testimonialRohit",
        placeholderLabel: "Avatar: Rohit Kumar"
      },
      {
        id: 3,
        quote: "A very well-structured program with flexible learning. I could learn and work at the same time.",
        author: "Neha Verma",
        program: "Business Management",
        rating: 3,
        avatarKey: "testimonialNeha",
        placeholderLabel: "Avatar: Neha Verma"
      }
    ]
  },

  ctaBanner: {
    headlineLead: "Your skills. Your future.",
    headlineHighlight: "Certified.",
    description: "Join BCSVE and take the next step towards a skilled, confident and successful career.",
    buttonText: "Get Started"
  },

  // 1. Notice Board & Announcements
  noticeBoard: {
    tag: "LATEST UPDATES",
    heading: "Announcements & Quick Desk",
    notices: [
      {
        id: "notice-1",
        title: "Admissions Open for 2026 Batch - Healthcare & IT Diploma Programs",
        date: "18 Nov 2026",
        isNew: true,
        category: "Admission",
        href: "#programs", // TODO: Replace with official notification link
      },
      {
        id: "notice-2",
        title: "National Examination Schedule Announced for Q1 2026 Practical Sessions",
        date: "14 Nov 2026",
        isNew: true,
        category: "Examination",
        href: "#verification", // TODO: Replace with exam circular link
      },
      {
        id: "notice-3",
        title: "Annual Training Partner & Affiliated Centre Empanelment Round 2",
        date: "05 Nov 2026",
        isNew: false,
        category: "Affiliation",
        href: "#affiliation-cta", // TODO: Replace with circular link
      },
      {
        id: "notice-4",
        title: "Digital Certificate Verification Portal v2.0 Operational for Learners",
        date: "28 Oct 2026",
        isNew: false,
        category: "Verification",
        href: "#verification", // TODO: Replace with portal release notes
      },
    ],
    quickLinks: [
      {
        title: "Result Verification",
        description: "Check semester & final exam scorecards",
        icon: "FileCheck",
        href: "#verification",
      },
      {
        title: "Admit Card Download",
        description: "Hall ticket for upcoming practical assessments",
        icon: "Ticket",
        href: "#downloads",
      },
      {
        title: "Download Prospectus",
        description: "Complete course catalogue & fee schedules",
        icon: "Download",
        href: "#downloads",
      },
      {
        title: "Student Portal Login",
        description: "LMS access, study notes & assignments",
        icon: "UserCheck",
        href: "#", // TODO: Replace with student portal URL
      },
    ],
  },

  // 2. Admission Process (5-Step Horizontal Timeline)
  admissionProcess: {
    tag: "ADMISSION PROCESS",
    heading: "How to Enrol in 5 Simple Steps",
    subtitle: "A smooth, structured pathway from choosing your desired program to earning your verifiable national certification.",
    steps: [
      {
        stepNumber: "01",
        title: "Choose Program",
        description: "Explore vocational courses matching your professional career ambition.",
        icon: "Compass",
      },
      {
        stepNumber: "02",
        title: "Enquire & Register",
        description: "Submit online enquiry or visit the nearest authorized BCSVE training centre.",
        icon: "FileText",
      },
      {
        stepNumber: "03",
        title: "Enrolment & Fees",
        description: "Complete document verification and secure admission with transparent fees.",
        icon: "CreditCard",
      },
      {
        stepNumber: "04",
        title: "Practical Learning",
        description: "Undergo lab training, mentor workshops, and continuous evaluation.",
        icon: "Wrench",
      },
      {
        stepNumber: "05",
        title: "Get Certified",
        description: "Pass final examination and receive verifiable national digital credentials.",
        icon: "Award",
      },
    ],
  },

  // 3. Affiliation CTA / Become a Partner
  affiliationCta: {
    tag: "CENTRE AFFILIATION",
    heading: "Become an Authorized Skill Development Centre",
    subtitle: "Partner with BCSVE to offer government-aligned vocational courses in your city. Empower regional youth while running a self-sustaining educational institute.",
    benefits: [
      "Low Initial Investment & High Social Impact",
      "Nationally Standardized Syllabus & Learning Modules",
      "Complete Marketing, Branding & Promotional Collateral",
      "Online LMS, Digital Examination & Automated Certification",
      "Faculty Training & Quality Assurance Assistance",
    ],
    highlights: [
      { label: "Active Centres", value: "150+" },
      { label: "States Covered", value: "24+" },
      { label: "Students Trained", value: "12,000+" },
      { label: "Partner Support", value: "24/7" },
    ],
    ctaText: "Apply for Affiliation",
  },

  // 4. Accreditations & Recognitions
  accreditations: {
    tag: "QUALITY ASSURANCE",
    heading: "Accreditations & Framework Alignments",
    subtitle: "Our institutional framework adheres to national skill benchmarks, quality assurance systems, and ISO certified standards.",
    items: [
      {
        id: "aicte-aligned",
        name: "National Technical Framework",
        authority: "AICTE Aligned Standards", // TODO: Replace with exact accreditation name
        description: "Curriculum designed keeping technical framework guidelines and modern industry parameters in view.",
        badge: "National Standard",
        icon: "ShieldCheck",
      },
      {
        id: "nabet-qa",
        name: "Quality Management System",
        authority: "NABET Guidelines", // TODO: Replace with exact accreditation name
        description: "Academic auditing, trainer certification, and rigorous examination quality assurance frameworks.",
        badge: "Accredited QA",
        icon: "CheckCircle",
      },
      {
        id: "skill-mission",
        name: "Skill Ecosystem Network",
        authority: "National Skill Mission Partner", // TODO: Replace with exact accreditation name
        description: "Active integration with vocational learning bodies to maximize learner employment outcomes.",
        badge: "Skill Partner",
        icon: "Award",
      },
      {
        id: "iso-certified",
        name: "ISO 9001:2015 Certification",
        authority: "Global Quality Certified", // TODO: Replace with exact accreditation name
        description: "Certified for standardized vocational training delivery, curriculum updates, and examination conduct.",
        badge: "Certified Body",
        icon: "CheckSquare",
      },
    ],
  },

  // 5. Faculty & Master Trainers
  faculty: {
    tag: "EXPERT MENTORS",
    heading: "Learn from Seasoned Practitioners",
    subtitle: "Our mentors combine extensive industry experience with passion for practical skill instruction.",
    members: [
      {
        id: "fac-1",
        name: "Dr. Arvind Menon", // TODO: Replace with real faculty name
        role: "Head of Healthcare Programs",
        experience: "15+ Years Experience",
        credentials: "MD, M.Voc (Healthcare Education)",
        specialty: "Clinical Nursing, Emergency Care & Hospital Ops",
        avatar: "testimonialRohit",
      },
      {
        id: "fac-2",
        name: "Er. Sunita Rao", // TODO: Replace with real faculty name
        role: "Lead Instructor, IT & Digital Tech",
        experience: "12+ Years Industry",
        credentials: "M.Tech (Computer Science), Microsoft Certified",
        specialty: "Full-Stack Development, Cloud Systems & Security",
        avatar: "testimonialNeha",
      },
      {
        id: "fac-3",
        name: "Prof. Rajesh Bhardwaj", // TODO: Replace with real faculty name
        role: "Dean of Business & Retail Studies",
        experience: "18+ Years Corporate & Academic",
        credentials: "MBA (IIM), Certified Vocational Trainer",
        specialty: "Supply Chain, Entrepreneurship & Retail Mgmt",
        avatar: "testimonialRohit",
      },
      {
        id: "fac-4",
        name: "Er. Vikram Joshi", // TODO: Replace with real faculty name
        role: "Master Trainer, Applied Trades & Electricals",
        experience: "14+ Years Field Engineering",
        credentials: "B.E. (Electrical), NSDC Certified Assessor",
        specialty: "Industrial Automation, Solar Tech & HVAC",
        avatar: "testimonialPooja",
      },
    ],
  },

  // 6. Placement & Hiring Partners
  placementPartners: {
    tag: "CAREER OUTCOMES",
    heading: "Where Our Learners Build Careers",
    subtitle: "Leading healthcare networks, corporate IT firms, and national trade enterprises actively recruit BCSVE certified learners.",
    highlights: [
      { value: "500+", label: "Hiring Enterprises" },
      { value: "98%", label: "Placement Assistance" },
      { value: "₹3.8 LPA", label: "Average Entry Package" },
    ],
    // Marquee list of recruiter partner names
    recruiters: [
      { id: "rec-1", name: "Apollo Health", sector: "Healthcare" }, // TODO: Replace with real hiring partners
      { id: "rec-2", name: "Tata Technologies", sector: "Engineering" },
      { id: "rec-3", name: "Max Healthcare", sector: "Healthcare" },
      { id: "rec-4", name: "Infosys BPM", sector: "Information Tech" },
      { id: "rec-5", name: "L&T Construction", sector: "Applied Trades" },
      { id: "rec-6", name: "Fortis Hospitals", sector: "Healthcare" },
      { id: "rec-7", name: "Schneider Electric", sector: "Electricals" },
      { id: "rec-8", name: "Wipro Digital", sector: "IT Services" },
    ],
  },

  // 7. Campus & Event Gallery with Lightbox
  galleryEvents: {
    tag: "CAMPUS & WORKSHOPS",
    heading: "Life & Hands-on Training at BCSVE",
    subtitle: "From modern simulation laboratories to convocation days, witness practical skill education in action.",
    categories: ["All", "Practical Labs", "Convocation", "Workshops", "Campus Tour"],
    items: [
      {
        id: "gal-1",
        title: "State-of-the-Art Healthcare Simulation Lab",
        category: "Practical Labs",
        type: "image",
        caption: "Learners practicing patient-monitoring and emergency assistance protocols.",
      },
      {
        id: "gal-2",
        title: "Annual Vocational Convocation Ceremony",
        category: "Convocation",
        type: "image",
        caption: "Graduating batch receiving nationally recognized diplomas.",
      },
      {
        id: "gal-3",
        title: "Advanced Electrical & Solar Wiring Workshop",
        category: "Workshops",
        type: "image",
        caption: "Hands-on industrial automation and grid connection training.",
      },
      {
        id: "gal-4",
        title: "Full Campus Tour & Training Facility Walkthrough",
        category: "Campus Tour",
        type: "video",
        duration: "3:45 Min",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // TODO: Replace with actual institutional tour video
        caption: "Explore our smart classrooms, computer centres, and practical workshops.",
      },
      {
        id: "gal-5",
        title: "Computer Hardware & Networking Lab Session",
        category: "Practical Labs",
        type: "image",
        caption: "Students configuring enterprise routers and local area networks.",
      },
      {
        id: "gal-6",
        title: "Industry Mentorship & Placement Boot Camp",
        category: "Workshops",
        type: "image",
        caption: "Recruiters conducting mock interviews and technical screening rounds.",
      },
    ],
  },

  // 8. Official Downloads & Student Resources
  downloads: {
    tag: "STUDENT & CENTRE DESK",
    heading: "Official Downloads & Documents",
    subtitle: "Get immediate access to verified academic regulations, syllabi, and administrative request forms.",
    items: [
      {
        id: "dl-1",
        title: "Academic Prospectus & Course Handbook 2026",
        category: "Brochure",
        size: "4.8 MB",
        format: "PDF",
        fileUrl: "#", // TODO: Replace with link to real PDF
      },
      {
        id: "dl-2",
        title: "Vocational & Skill Examination Regulations & Bye-Laws",
        category: "Rules",
        size: "1.9 MB",
        format: "PDF",
        fileUrl: "#", // TODO: Replace with link to real PDF
      },
      {
        id: "dl-3",
        title: "New Training Centre Affiliation Application Form",
        category: "Affiliation",
        size: "2.3 MB",
        format: "PDF",
        fileUrl: "#", // TODO: Replace with link to real PDF
      },
      {
        id: "dl-4",
        title: "Healthcare Assistance Curriculum & Syllabus Module",
        category: "Curriculum",
        size: "3.1 MB",
        format: "PDF",
        fileUrl: "#", // TODO: Replace with link to real PDF
      },
    ],
  },

  // 9. Frequently Asked Questions (Accordion)
  faqs: {
    tag: "FREQUENTLY ASKED QUESTIONS",
    heading: "Everything You Need to Know",
    subtitle: "Answers to common queries regarding admissions, recognition, validity, examination, and affiliation.",
    items: [
      {
        id: "faq-1",
        question: "Are BCSVE certificates nationally recognized for government and private employment?",
        answer: "Yes, BCSVE operates under national skill and vocational guidelines. All diplomas and certificates are equipped with verifiable QR codes and digital registration numbers that can be authenticated by employers anywhere in India through our official online verification portal.",
      },
      {
        id: "faq-2",
        question: "What is the minimum eligibility criteria for enrolling in diploma courses?",
        answer: "Most certificate and diploma programs accept candidates who have passed 10th or 12th standard (Matriculation/Higher Secondary) from any recognized educational board. Specialized technical diplomas may require prior background in science or mathematics.",
      },
      {
        id: "faq-3",
        question: "How do I verify the authenticity of a student's certificate?",
        answer: "Navigate to the 'Verify Certificate' section on this website. Enter the unique Certificate/Enrollment Number (e.g. BCSVE-2026-9874) and the student's Date of Birth. The system instantly displays the verified record, course name, grade, and issuing centre.",
      },
      {
        id: "faq-4",
        question: "Can an existing computer institute or academy become an affiliated centre?",
        answer: "Yes. Educational trusts, registered societies, and private institutes with adequate classroom, lab, and faculty infrastructure can apply for BCSVE centre affiliation using the 'Apply for Affiliation' form.",
      },
      {
        id: "faq-5",
        question: "Are programs available in hybrid or online modes for working professionals?",
        answer: "Yes. Many of our management, digital technology, and theory-heavy programs offer hybrid or online modules with scheduled weekend practical training at regional training centres.",
      },
      {
        id: "faq-6",
        question: "What is the duration and fee structure for vocational diploma courses?",
        answer: "Program durations range from 3 months (Foundation Certificates) to 12-24 months (Advanced Diplomas). Fees are kept subsidized and affordable to foster widespread vocational inclusion. Detailed fee schedules are available in our official prospectus.",
      },
    ],
  },

  // 10. Contact & Support Map Section
  contact: {
    tag: "CONTACT & SUPPORT",
    heading: "Reach Out to Our Academic Desk",
    subtitle: "Have questions about courses, verification, or opening a centre? Our team is available 6 days a week.",
    phone: "+91 8595350621",
    email: "info@ccvte.org",
    address: "C4/97B, Keshav Puram, Delhi - 110035, India",
    workingHours: "Monday to Saturday: 9:30 AM – 6:00 PM IST",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14000.730308006764!2d77.1517454!3d28.6841804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0246f48f4841%3A0xe54bb42013f7adfc!2sKeshav%20Puram%2C%20Tri%20Nagar%2C%20Delhi%2C%20110035!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin", // TODO: Replace with exact Google Maps embed
  },

  // 11. Final CTA Banner
  finalCta: {
    headlineLead: "Begin Your Professional Journey with",
    headlineHighlight: "Nationally Certified Skills",
    description: "Join over 12,000 learners nationwide. Enrol in future-ready healthcare, IT, and business programs with dedicated placement assistance.",
    primaryBtn: "Apply for Course",
    secondaryBtn: "Call Academic Support",
    supportPhone: "+91 8595350621",
  },

  // 12. Newsletter Strip
  newsletter: {
    title: "Stay Updated with Examination & Admission Alerts",
    subtitle: "Subscribe to receive circulars, result notifications, and new vocational course announcements directly in your inbox.",
    placeholder: "Enter your active email address...",
    buttonText: "Subscribe",
  },

  footer: {
    copyright: "© 2026 Bharath Council for Skill and Vocational Education (BCSVE). All Rights Reserved.",
    legalLinks: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms & Conditions", href: "#" }
    ],
    columns: [
      {
        title: "Quick Links",
        links: [
          { name: "Home", href: "#home" },
          { name: "About Us", href: "#about" },
          { name: "Our Programs", href: "#programs" },
          { name: "Notices & Circulars", href: "#notices" },
          { name: "Admission Pathway", href: "#admission-process" }
        ]
      },
      {
        title: "Resources & Desk",
        links: [
          { name: "Certificate Verification", href: "#verification" },
          { name: "Official Downloads", href: "#downloads" },
          { name: "Photo & Video Gallery", href: "#gallery" },
          { name: "Frequently Asked Questions", href: "#faqs" }
        ]
      },
      {
        title: "Centre Affiliation",
        links: [
          { name: "Become a Partner Centre", href: "#affiliation-cta" },
          { name: "Quality Framework", href: "#accreditations" },
          { name: "Placement Enterprise Network", href: "#placements" },
          { name: "Contact Coordination Office", href: "#contact" }
        ]
      }
    ]
  }
};
