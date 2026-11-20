export const siteData = {
  header: {
    title: "Bharath Council for",
    subtitle: "Skill and Vocational Education",
    hindiTitle: "भारत कौशल एवं व्यावसायिक शिक्षा परिषद",
    tagline: "Educate • Empower • Enlighten",
    motto: "Skills That Makes You Skilled...",
    approval: "An Autonomous Institution Approved by Govt of India under Society Registration Act XXI of 1860 (S.No.731/2010)",
    navLinks: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Programs", href: "#programs", hasDropdown: true },
      { name: "Fee Structure", href: "#fees" },
      { name: "Admissions", href: "#admission-process" },
      { name: "Verification", href: "#verification" },
      { name: "Affiliation", href: "#affiliation-cta" },
      { name: "Downloads", href: "#downloads" },
      { name: "FAQs", href: "#faqs" },
      { name: "Contact", href: "#contact" },
    ],
    ctaButton: "Apply Now"
  },

  hero: {
    badge: "GOVT APPROVED AUTONOMOUS INSTITUTION • S.NO.731/2010",
    headingPart1: "Educate. Empower.",
    headingPart2: "Enlighten.",
    description: "Founded by Careerline Society (Approved by Govt of India under the Society Registration Act XXI of 1860). Empowering learners across 12 vital industry sectors with job-ready practical training and nationally recognized autonomous certification.",
    primaryCta: "Explore Courses",
    secondaryCta: "Verify Certificate",
    learnerCount: "12,000+ learners enrolled",
    floatingBadges: [
      { text: "Certified", type: "badge-check" },
      { text: "98% Placement", type: "badge-stat" },
      { text: "New Batch Open 2026", type: "badge-calendar" },
    ]
  },

  stats: [
    { value: "12,000+", label: "Learners Certified", icon: "Users" },
    { value: "12+", label: "Vital Sectors", icon: "Layers" },
    { value: "150+", label: "Authorised Centres", icon: "MapPin" },
    { value: "100%", label: "Verifiable Credentials", icon: "Trophy" },
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
    hindiHeading: "भारत कौशल एवं व्यावसायिक शिक्षा परिषद",
    heading: "Skills That Makes You Skilled...",
    subheading: "Don't just dream it, earn it with your skills...",
    description: "Bharath Council for Skill & Vocational Education (BCSVE) is a dynamic and growing council, one of its kind in the country. Founded by Careerline Society (Approved by Govt of India under the Society Registration Act XXI of 1860, S.No.731/2010), BCSVE aims to tackle increasing unemployment through high-quality vocational skill development and training programs.",
    extendedDescription: "As a top-level national autonomous certification body in India, BCSVE offers certified training programs that give the public an excellent opportunity to enhance their skills, leading directly to employment. BCSVE's wide variety of courses are open and remarkably affordable to anyone with a basic high school education, covering IT, HRD, Technical, Paramedical, Skill Advancement, and Literacy programs.",
    governingBody: "Founded by Careerline Society (Approved by Govt of India under Society Registration Act XXI of 1860, S.No.731/2010)",
    cards: [
      {
        title: "Our Mission",
        description: "To provide a trustworthy and quality platform that delivers high-demand vocational and skill development programs, enabling learners to acquire job-ready skills and access valuable career opportunities.",
        icon: "Target",
        color: "bg-bcsve-100 text-bcsve-800"
      },
      {
        title: "Our Vision",
        description: "BCSVE likes to create a future where every individual has the opportunity to achieve meaningful employment, thus reducing unemployment.",
        icon: "Eye",
        color: "bg-gold-100 text-gold-700"
      }
    ],
    coreValues: [
      {
        title: "Empowerment",
        description: "Empowering individuals with the knowledge, skills, and resources they need to unlock their full potential and achieve their goals."
      },
      {
        title: "Continuous Learning",
        description: "Promoting a culture of lifelong learning, where curiosity is encouraged, and personal and professional growth are ongoing journeys."
      },
      {
        title: "Inclusivity",
        description: "Fostering an inclusive and welcoming environment where diversity is celebrated, and everyone has equal access to skill opportunities."
      },
      {
        title: "Innovation",
        description: "Embracing innovation and creativity in our approach to skill development, continuously seeking new and effective ways to enhance learning."
      },
      {
        title: "Collaboration",
        description: "Working together with learners, educators, employers, and communities through strategic partnerships to drive positive change."
      },
      {
        title: "Accountability",
        description: "Holding ourselves accountable for program outcomes, ensuring transparency, integrity, and ethical conduct in all interactions."
      }
    ]
  },

  // 12 Vital Industry Sectors from Official Profile
  vitalSectors: [
    { name: "Information Technology", count: "DCA, Web Dev, Cyber Safety, Office Apps", icon: "Laptop" },
    { name: "Health Care", count: "General Duty, Patient Care, First Aid", icon: "HeartPulse" },
    { name: "Paramedical", count: "Lab Tech, Phlebotomy, Emergency Care", icon: "Activity" },
    { name: "Banking and Finance", count: "Tally GST, Banking Ops, Microfinance", icon: "TrendingUp" },
    { name: "Beauty and Wellness", count: "Cosmetology, Hair, Skin, Yoga Therapy", icon: "Sparkles" },
    { name: "Retail & Sales", count: "Store Operations, Visual Merchandising", icon: "ShoppingBag" },
    { name: "Apparel & Fashion", count: "Tailoring, Garment Tech, Pattern Making", icon: "Scissors" },
    { name: "Logistics & Supply Chain", count: "Warehousing, Inventory Management", icon: "Truck" },
    { name: "Education & Literacy", count: "Vocational Teacher Training, Literacy", icon: "BookOpen" },
    { name: "Green Jobs", count: "Solar PV Installation, Renewable Energy", icon: "Sun" },
    { name: "Agriculture", count: "Organic Farming, Agro-tech, Horticulture", icon: "Wheat" },
    { name: "Fire and Safety", count: "Industrial Safety, HSE & Disaster Mgmt", icon: "Flame" },
  ],

  // Official Transparent Fee Structure from PDF
  feeStructure: {
    tag: "TRANSPARENT & AFFORDABLE FEES",
    heading: "Official Council Fee Structure",
    subtitle: "In accordance with BCSVE Council norms, our fee schedule is designed to be remarkably affordable, ensuring accessible skill development across all strata of society.",
    approvalNote: "Approved by BCSVE Governing Council under Society Registration Act XXI of 1860 (S.No.731/2010)",
    downloadPdfUrl: "/docs/bcsve-fee-structure.pdf",
    tiers: [
      {
        id: "tier-3m",
        duration: "3 Months",
        title: "Certificate Program",
        centreFee: "₹800",
        coordinatorFee: "₹600",
        tagline: "Short-term Foundation & Rapid Upskilling",
        description: "Ideal for basic literacy, foundational office tools, and introductory practical techniques.",
        features: [
          "Foundation Theory & Practical Syllabus",
          "Central Board Registration",
          "Evaluation & Examination Fee",
          "Verifiable Council Certificate (QR Coded)",
          "Online Verification on www.bcsve.skillvoc.in"
        ],
        isPopular: false
      },
      {
        id: "tier-6m",
        duration: "6 Months",
        title: "Diploma Program",
        centreFee: "₹1,000",
        coordinatorFee: "₹750",
        tagline: "Comprehensive Trade Competency (Most Enrolled)",
        description: "Hands-on domain training, mid-term evaluations, and industry-oriented job role skills.",
        features: [
          "Full Semi-Annual Practical Curriculum",
          "Dedicated Domain & IT Lab Access",
          "Mid-Term Continuous Assessments",
          "Central Board Marksheet & Diploma",
          "Online Portal & QR Verification",
          "Placement Assistance Support"
        ],
        isPopular: true
      },
      {
        id: "tier-1y",
        duration: "1 Year",
        title: "Advanced / Master Diploma",
        centreFee: "₹1,500",
        coordinatorFee: "₹1,000",
        tagline: "Advanced Professional & Supervisory Mastery",
        description: "Two-semester in-depth technical training with mandatory internship and supervisory competencies.",
        features: [
          "Two Semesters of Structured Practical Labs",
          "Comprehensive Examination Conduct",
          "Official Result Cum Marks Certificate",
          "National Autonomous Diploma Award",
          "Authorised Centre Verification Record",
          "Direct Employer Referral Network"
        ],
        isPopular: false
      }
    ]
  },

  programs: {
    tag: "OUR PROGRAMS",
    heading: "Explore Our Flagship Programs",
    categories: ["All Programs", "Healthcare", "Technology", "Business", "Vocational"],
    items: [
      {
        id: "healthcare",
        slug: "healthcare-wellness",
        category: "Healthcare",
        title: "Healthcare & Wellness",
        description: "General Duty Assistant, Patient Care, Medical Lab Tech, Emergency Response, and Community Wellness.",
        duration: "3 - 12 Months",
        type: "Certificate / Diploma",
        mode: "Theory + Clinical Practical",
        feeNote: "₹800 - ₹1,500 regulated fee",
        icon: "HeartPulse",
        placeholderLabel: "Healthcare & Wellness",
        dimensions: "450 × 260 px"
      },
      {
        id: "technology",
        slug: "information-technology",
        category: "Technology",
        title: "Information Technology",
        description: "Computer Applications (DCA), Web Development, Office Automation, Tally Accounting, and Cyber Safety.",
        duration: "3 - 12 Months",
        type: "Certificate / Diploma",
        mode: "Practical Lab + Online",
        feeNote: "₹800 - ₹1,500 regulated fee",
        icon: "Laptop",
        placeholderLabel: "Information Technology",
        dimensions: "450 × 260 px"
      },
      {
        id: "business",
        slug: "business-management",
        category: "Business",
        title: "Business & Management",
        description: "Business Administration, Retail Management, Banking Operations, GST Accounting, and Entrepreneurship.",
        duration: "3 - 12 Months",
        type: "Certificate / Diploma",
        mode: "Hybrid / Case Practical",
        feeNote: "₹800 - ₹1,500 regulated fee",
        icon: "TrendingUp",
        placeholderLabel: "Business & Management",
        dimensions: "450 × 260 px"
      },
      {
        id: "vocational",
        slug: "vocational-applied-trades",
        category: "Vocational",
        title: "Vocational & Applied Trades",
        description: "Electrician, Solar & Electrical Repair, Automotive, AC Servicing, Beauty & Cosmetology, and Tailoring.",
        duration: "3 - 12 Months",
        type: "Certificate / Diploma",
        mode: "Workshop & Practical (80%)",
        feeNote: "₹800 - ₹1,500 regulated fee",
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
        title: "Govt. Approved Framework",
        description: "Approved under Society Registration Act XXI of 1860 (S.No.731/2010), founded by Careerline Society.",
        icon: "Award"
      },
      {
        title: "Industry-Relevant Skills",
        description: "Practical training crafted by expert practitioners across 12 vital sectors for immediate employability.",
        icon: "Sliders"
      },
      {
        title: "Remarkably Affordable",
        description: "Regulated fees (₹800 for 3M, ₹1000 for 6M, ₹1500 for 1Y) making quality skill education accessible to all.",
        icon: "CreditCard"
      },
      {
        title: "Verifiable Credentials",
        description: "Permanent online certificate & marksheet verification portal at www.bcsve.skillvoc.in with QR authentication.",
        icon: "ShieldCheck"
      }
    ]
  },

  howItWorks: {
    tag: "HOW IT WORKS",
    heading: "Your Certification Journey in 4 Simple Steps",
    steps: [
      {
        stepNumber: "01",
        title: "Choose Sector & Program",
        description: "Select from 12 vital industry sectors matching your passion and career goals.",
        icon: "Laptop"
      },
      {
        stepNumber: "02",
        title: "Enrol with Affordable Fee",
        description: "Submit registration with basic high school proof (10th/12th/Graduation) and regulated fees.",
        icon: "FileCheck"
      },
      {
        stepNumber: "03",
        title: "Hands-on Practical Training",
        description: "Undergo intensive 80% practical training in authorised laboratories and workshop sessions.",
        icon: "BookOpenCheck"
      },
      {
        stepNumber: "04",
        title: "Pass Central Board Exam",
        description: "Clear Central Board examinations and receive verifiable national certification and marksheet.",
        icon: "Award"
      }
    ]
  },

  verification: {
    tag: "OFFICIAL VERIFICATION PORTAL",
    heading: "Verify Your Certificate & Marksheet",
    description: "Centrally authenticate your BCSVE certificate or Result Cum Marks Certificate issued by the Office of the Central Board of Examinations, BCSVE Council.",
    portalUrl: "www.bcsve.skillvoc.in",
    issuingAuthority: "Office of the Central Board of Examinations, BCSVE COUNCIL",
    regdOffice: "Plot no: 3, KR Signature, Sector 135, Noida-201304",
    gradingStandard: [
      { grade: "Grade A+", criteria: "80% and above", label: "Distinction / Outstanding" },
      { grade: "Grade A", criteria: "60% and above", label: "First Division" },
      { grade: "Grade B", criteria: "50% and above", label: "Second Division" },
      { grade: "Grade C", criteria: "40% and above", label: "Third Division (Minimum Pass)" }
    ],
    sampleCertificates: [
      {
        id: "BCSVE/2026/0482",
        name: "Pooja Sharma",
        course: "Diploma in General Duty Healthcare Assistance",
        grade: "Grade A+ (84%)",
        issueDate: "15 Jan 2026",
        centre: "Regional Skill Training Centre #104",
        status: "Authentic & Verified Record",
        regNo: "BCSVE731-98214"
      },
      {
        id: "BCSVE/2025/1190",
        name: "Rohit Kumar",
        course: "Diploma in Computer Applications & Web Tech",
        grade: "Grade A (72%)",
        issueDate: "20 Nov 2025",
        centre: "Apex Vocational Institute #082",
        status: "Authentic & Verified Record",
        regNo: "BCSVE731-84102"
      }
    ]
  },

  affiliations: {
    tag: "CENTRE AFFILIATION",
    heading: "Our Authorised Training Network",
    partnerBadges: [
      { id: "govt", name: "Govt of India", label: "Approved Institution", note: "Act XXI of 1860 (S.No.731/2010)" },
      { id: "careerline", name: "Careerline Society", label: "Founding Body", note: "Autonomous Council" },
      { id: "nsdc", name: "Skill India / NSDC", label: "Ecosystem Alignment", note: "National Skill Mission" },
      { id: "iso", name: "ISO Certified", label: "Quality Standards", note: "Standardized Operations" }
    ],
    becomeCentre: {
      title: "Become an Authorised Skill Training Partner (ASTP)",
      description: "Run official BCSVE skill courses in your institute with syllabus, online examination, and certification authority.",
      cta: "Apply for Affiliation"
    }
  },

  testimonials: {
    tag: "STUDENT TESTIMONIALS",
    heading: "Voices of Empowered Learners",
    items: [
      {
        id: 1,
        quote: "BCSVE's General Duty Assistant course was both affordable and deeply practical. The hospital lab hours gave me the confidence to secure a job at a leading medical center.",
        author: "Pooja Sharma",
        program: "Healthcare & Wellness Program",
        rating: 3,
        avatarKey: "testimonialPooja",
        placeholderLabel: "Avatar: Pooja Sharma"
      },
      {
        id: 2,
        quote: "I completed the 6-month DCA & Web Development diploma. The fee was only ₹1,000, but the syllabus was better than private institutes charging ten times more. Highly recommended!",
        author: "Rohit Kumar",
        program: "Information Technology Program",
        rating: 3,
        avatarKey: "testimonialRohit",
        placeholderLabel: "Avatar: Rohit Kumar"
      },
      {
        id: 3,
        quote: "The business administration and GST modules taught by BCSVE mentors gave me practical accounting skills. Today I manage accounts for three local retail enterprises.",
        author: "Neha Verma",
        program: "Business Management Program",
        rating: 3,
        avatarKey: "testimonialNeha",
        placeholderLabel: "Avatar: Neha Verma"
      }
    ]
  },

  ctaBanner: {
    headlineLead: "Skills That Makes You Skilled.",
    headlineHighlight: "Nationally Certified.",
    description: "Don't just dream it, earn it with your skills. Join over 12,000 learners and earn an official BCSVE credential backed by Govt of India approval (S.No.731/2010).",
    buttonText: "Explore Admissions"
  },

  // 1. Notice Board & Announcements
  noticeBoard: {
    tag: "COUNCIL NOTICES & CIRCULARS",
    heading: "Announcements & Administrative Desk",
    notices: [
      {
        id: "notice-1",
        title: "Official Notification: New Affiliation Window Open for Training Partners (Batch 2026-27)",
        date: "18 Nov 2026",
        isNew: true,
        category: "Affiliation",
        href: "#affiliation-cta",
      },
      {
        id: "notice-2",
        title: "Notification regarding Central Board Examination Schedule and Hall Ticket Release",
        date: "14 Nov 2026",
        isNew: true,
        category: "Examination",
        href: "#verification",
      },
      {
        id: "notice-3",
        title: "Regulated Council Fee Structure Enforced across all Authorised Training Centres",
        date: "05 Nov 2026",
        isNew: false,
        category: "Fee Structure",
        href: "#fees",
      },
      {
        id: "notice-4",
        title: "Digital Verification Portal v2.0 Operational at www.bcsve.skillvoc.in",
        date: "28 Oct 2026",
        isNew: false,
        category: "Verification",
        href: "#verification",
      },
    ],
    quickLinks: [
      {
        title: "Result Verification",
        description: "Central Board marksheet & scorecard check",
        icon: "FileCheck",
        href: "#verification",
      },
      {
        title: "Download Fee Structure",
        description: "Official regulated fee chart (PDF)",
        icon: "CreditCard",
        href: "/docs/bcsve-fee-structure.pdf",
      },
      {
        title: "Admission Form",
        description: "Printable student registration form (PDF)",
        icon: "FileText",
        href: "/docs/bcsve-admission-form.pdf",
      },
      {
        title: "Partner Application",
        description: "Service partner affiliation kit (PDF)",
        icon: "Building2",
        href: "/docs/bcsve-partner-affiliation-form.pdf",
      },
    ],
  },

  // 2. Admission Process (5-Step Horizontal Timeline)
  admissionProcess: {
    tag: "ADMISSION PROCESS",
    heading: "How to Enrol in 5 Simple Steps",
    subtitle: "A structured, transparent pathway from course selection to earning your verifiable national certification.",
    downloadFormUrl: "/docs/bcsve-admission-form.pdf",
    steps: [
      {
        stepNumber: "01",
        title: "Select Job Role & Sector",
        description: "Choose from 12 vital sectors including IT, Healthcare, Trades, Retail, and Green Jobs.",
        icon: "Compass",
      },
      {
        stepNumber: "02",
        title: "Submit Admission Form",
        description: "Fill the admission form online or submit the printed form with Aadhaar and school certificate.",
        icon: "FileText",
      },
      {
        stepNumber: "03",
        title: "Transparent Regulated Fee",
        description: "Pay the nominal council fee (₹800 for 3M, ₹1000 for 6M, ₹1500 for 1Y) with official receipt.",
        icon: "CreditCard",
      },
      {
        stepNumber: "04",
        title: "Hands-on Practical Training",
        description: "Undergo lab training, workshop practice, and continuous assessment at your training centre.",
        icon: "Wrench",
      },
      {
        stepNumber: "05",
        title: "Pass Central Board Exam",
        description: "Appear for final examination and receive your verifiable Certificate and Result Marksheet.",
        icon: "Award",
      },
    ],
  },

  // 3. Affiliation CTA / Become a Partner
  affiliationCta: {
    tag: "CENTRE AFFILIATION",
    heading: "Become an Authorised Skill Training Partner",
    subtitle: "Join the BCSVE Skill Development Division. Empower local youth in your town or district with government-approved vocational certifications while establishing a sustainable, accredited skill institute.",
    downloadFormUrl: "/docs/bcsve-partner-affiliation-form.pdf",
    sampleCertUrl: "/docs/bcsve-authorisation-sample.pdf",
    benefits: [
      "Official Authorisation Certificate as Training Partner (Skill Development Division)",
      "Standardised Council Syllabi & Study Material across 12 Vital Sectors",
      "Nominal Regulated Fees (₹600 - ₹1,000 coordinator share) with maximum student reach",
      "Central Board Examination Conduct, Result Processing & Verifiable Certification",
      "Permanent Online Student Record Verification at www.bcsve.skillvoc.in",
      "Full Guidance for Centre Infrastructure: Front View, Reception, Classrooms, IT & Domain Labs"
    ],
    highlights: [
      { label: "Active Centres", value: "150+" },
      { label: "Vital Sectors", value: "12" },
      { label: "Learners Trained", value: "12,000+" },
      { label: "Council Support", value: "Dedicated Desk" },
    ],
    ctaText: "Apply for Affiliation",
  },

  // 4. Accreditations & Recognitions
  accreditations: {
    tag: "LEGAL APPROVAL & STANDARDS",
    heading: "Statutory Approval & Institutional Framework",
    subtitle: "BCSVE functions as a top-level national autonomous certification body governed by strict statutory, educational, and quality management protocols.",
    items: [
      {
        id: "govt-approved",
        name: "Govt of India Statutory Approval",
        authority: "Society Registration Act XXI of 1860",
        description: "Approved by Govt of India under the Society Registration Act XXI of 1860 (Registration S.No.731/2010), founded by Careerline Society.",
        badge: "Govt. Approved",
        icon: "ShieldCheck",
      },
      {
        id: "exam-board",
        name: "Central Board of Examinations",
        authority: "BCSVE Council Examination Wing",
        description: "Standardised curriculum assessment, hall ticket generation, and Result Cum Marks Certificate issuance under central COE supervision.",
        badge: "Autonomous Board",
        icon: "CheckCircle",
      },
      {
        id: "skill-ecosystem",
        name: "National Skill Ecosystem Alignment",
        authority: "Skill India & NSDC Guidelines",
        description: "Vocational course competencies structured in harmony with National Skill Qualification standards for maximum employment value.",
        badge: "Skill Framework",
        icon: "Award",
      },
      {
        id: "iso-certified",
        name: "ISO 9001:2015 Quality Management",
        authority: "International Quality Certified",
        description: "Certified operational processes for curriculum design, training partner empanelment, and transparent credential verification.",
        badge: "ISO 9001:2015",
        icon: "CheckSquare",
      },
    ],
  },

  // 5. Faculty & Master Trainers
  faculty: {
    tag: "EXPERT MENTORS",
    heading: "Learn from Seasoned Practitioners",
    subtitle: "Our mentor advisory council combines extensive industrial experience with a passion for vocational instruction across India.",
    members: [
      {
        id: "fac-1",
        name: "Dr. Arvind Menon",
        role: "Head of Healthcare Programs",
        experience: "15+ Years Clinical Practice",
        credentials: "MD, M.Voc (Healthcare Education)",
        specialty: "Clinical Nursing, Emergency Care & Hospital Ops",
        avatar: "testimonialRohit",
      },
      {
        id: "fac-2",
        name: "Er. Sunita Rao",
        role: "Lead Instructor, IT & Digital Tech",
        experience: "12+ Years Industry",
        credentials: "M.Tech (Computer Science), Microsoft Certified",
        specialty: "Full-Stack Development, Cloud Systems & Security",
        avatar: "testimonialNeha",
      },
      {
        id: "fac-3",
        name: "Prof. Rajesh Bhardwaj",
        role: "Dean of Business & Retail Studies",
        experience: "18+ Years Corporate & Academic",
        credentials: "MBA, Certified Vocational Trainer",
        specialty: "Supply Chain, Entrepreneurship & Retail Mgmt",
        avatar: "testimonialRohit",
      },
      {
        id: "fac-4",
        name: "Er. Vikram Joshi",
        role: "Master Trainer, Applied Trades & Electricals",
        experience: "14+ Years Field Engineering",
        credentials: "B.E. (Electrical), Certified Trade Assessor",
        specialty: "Industrial Automation, Solar Tech & HVAC",
        avatar: "testimonialPooja",
      },
    ],
  },

  // 6. Placement & Hiring Sectors
  placementPartners: {
    tag: "EMPLOYABILITY & PLACEMENT",
    heading: "Where Our Certified Learners Work",
    subtitle: "BCSVE graduates work across leading hospitals, diagnostic chains, IT service firms, retail conglomerates, and technical workshops across India.",
    highlights: [
      { value: "500+", label: "Hiring Enterprises" },
      { value: "98%", label: "Placement Assistance" },
      { value: "₹800+", label: "Accessible Program Fee" },
    ],
    recruiters: [
      { id: "rec-1", name: "Apollo Health", sector: "Healthcare" },
      { id: "rec-2", name: "Tata Technologies", sector: "Engineering" },
      { id: "rec-3", name: "Max Healthcare", sector: "Healthcare" },
      { id: "rec-4", name: "Infosys BPM", sector: "Information Tech" },
      { id: "rec-5", name: "L&T Construction", sector: "Applied Trades" },
      { id: "rec-6", name: "Fortis Hospitals", sector: "Healthcare" },
      { id: "rec-7", name: "Schneider Electric", sector: "Electricals" },
      { id: "rec-8", name: "Wipro Digital", sector: "IT Services" },
    ],
  },

  // 7. Campus & Event Gallery
  galleryEvents: {
    tag: "CAMPUS & WORKSHOPS",
    heading: "Life & Hands-on Training at BCSVE",
    subtitle: "Witness practical skill education, laboratory sessions, and convocation moments across our nationwide network of centres.",
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
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
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

  // 8. Official Downloads & Verified Documents (Directly from Bcsve folder)
  downloads: {
    tag: "STUDENT & CENTRE DESK",
    heading: "Official Downloads & Documents",
    subtitle: "Get immediate access to verified council brochures, admission forms, fee structures, and partner affiliation kits.",
    items: [
      {
        id: "dl-profile",
        title: "Official Council Profile & Comprehensive Handbook",
        category: "Brochure",
        size: "5.2 MB",
        format: "PDF",
        fileUrl: "/docs/bcsve-profile.pdf",
      },
      {
        id: "dl-admission",
        title: "Official Student Admission & Registration Form",
        category: "Admissions",
        size: "243 KB",
        format: "PDF",
        fileUrl: "/docs/bcsve-admission-form.pdf",
      },
      {
        id: "dl-fees",
        title: "Official Program Fee Structure 2026 (Govt Approved)",
        category: "Fee Chart",
        size: "511 KB",
        format: "PDF",
        fileUrl: "/docs/bcsve-fee-structure.pdf",
      },
      {
        id: "dl-partner",
        title: "Authorised Training Partner Service Affiliation Form",
        category: "Affiliation",
        size: "233 KB",
        format: "PDF",
        fileUrl: "/docs/bcsve-partner-affiliation-form.pdf",
      },
      {
        id: "dl-auth-cert",
        title: "Sample Authorised Skill Training Partner Certificate",
        category: "Certificate",
        size: "619 KB",
        format: "PDF",
        fileUrl: "/docs/bcsve-authorisation-sample.pdf",
      },
      {
        id: "dl-logo",
        title: "Official BCSVE High-Resolution Vector Brand Identity",
        category: "Brand Assets",
        size: "255 KB",
        format: "PDF",
        fileUrl: "/docs/bcsve-logo.pdf",
      },
    ],
  },

  // 9. Frequently Asked Questions
  faqs: {
    tag: "FREQUENTLY ASKED QUESTIONS",
    heading: "Everything You Need to Know",
    subtitle: "Official answers to common queries regarding council registration, validity, examination, fees, and centre affiliation.",
    items: [
      {
        id: "faq-1",
        question: "Is BCSVE a legally approved and recognized institution?",
        answer: "Yes. Bharath Council for Skill and Vocational Education (BCSVE) is an autonomous institution approved by the Government of India under the Society Registration Act XXI of 1860 (Registration S.No.731/2010), founded by Careerline Society. It functions as a top-level national autonomous certification body for skill development.",
      },
      {
        id: "faq-2",
        question: "What is the official fee structure for BCSVE programs?",
        answer: "BCSVE enforces a remarkably affordable and transparent fee structure across all training centres: ₹800 for 3-Month Certificate programs, ₹1,000 for 6-Month Diploma programs, and ₹1,500 for 1-Year Advanced/Master Diploma programs. The official fee structure PDF can be downloaded directly from our Downloads section.",
      },
      {
        id: "faq-3",
        question: "How do employers or students verify BCSVE certificates and marksheets?",
        answer: "Every certificate and Result Cum Marks Certificate features a unique serial/registration number and QR code. Employers and students can authenticate credentials online on our official portal at www.bcsve.skillvoc.in or via the Verification section on this website.",
      },
      {
        id: "faq-4",
        question: "What is the minimum eligibility criteria to enrol in BCSVE courses?",
        answer: "In line with our mission of educational empowerment, courses are open to anyone with basic high school education (5th-8th, 9th-10th, 11th-12th, or Graduates). Admission is inclusive and accessible to both formal students and un-educated youth seeking practical trade skills.",
      },
      {
        id: "faq-5",
        question: "How can an educational institute or academy become an Authorised Training Partner?",
        answer: "Eligible institutions, private computer centres, and trusts with adequate classroom, domain lab, and IT facilities can apply using the Service Partner Form. Once audited and approved, an Authorised Skill Training Partner certificate is issued by the Skill Development Division.",
      },
      {
        id: "faq-6",
        question: "What is the examination and grading standard of the Council?",
        answer: "Examinations are conducted under the Office of the Central Board of Examinations. The grading scale is: Grade A+ (80% and above, Distinction), Grade A (60% and above, First Division), Grade B (50% and above, Second Division), and Grade C (40% and above, Minimum Pass requirement).",
      },
    ],
  },

  // 10. Contact & Support
  contact: {
    tag: "CONTACT & SUPPORT",
    heading: "Reach Out to Our Central Council Desk",
    subtitle: "Have questions about course admissions, fee structure, certificate verification, or centre affiliation? Our team is available 6 days a week.",
    phone: "+91 8595350621",
    email: "info@bcsve.skillvoc.in",
    supportEmail: "support@bcsve.skillvoc.in",
    address: "Plot no: 3, KR Signature, Sector 135, Noida - 201304, Uttar Pradesh, India",
    workingHours: "Monday to Saturday: 9:30 AM – 6:00 PM IST",
    portalUrl: "www.bcsve.skillvoc.in",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.772583857867!2d77.39999697550186!3d28.486364175745136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce7cb4a7429a3%3A0x6b45d2e057cb3e0a!2sSector%20135%2C%20Noida%2C%20Uttar%20Pradesh%20201304!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },

  // 11. Final CTA Banner
  finalCta: {
    headlineLead: "Skills That Makes You Skilled.",
    headlineHighlight: "Empower Your Future.",
    description: "Don't just dream it, earn it with your skills. Enrol in government-approved vocational programs backed by Careerline Society (S.No.731/2010). Regulated affordable fees starting from ₹800.",
    primaryBtn: "Apply for Admission",
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
    legalNotice: "An Autonomous Institution Approved by Govt of India under Society Registration Act XXI of 1860 (S.No.731/2010). Founded by Careerline Society.",
    regdOffice: "Plot no: 3, KR Signature, Sector 135, Noida - 201304, UP, India",
    portal: "www.bcsve.skillvoc.in",
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
          { name: "Official Fee Structure", href: "#fees" },
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
          { name: "Apply for Affiliation", href: "#affiliation-cta" },
          { name: "Quality Framework", href: "#accreditations" },
          { name: "Placement Network", href: "#placements" },
          { name: "Central Council Office", href: "#contact" }
        ]
      }
    ]
  }
};
