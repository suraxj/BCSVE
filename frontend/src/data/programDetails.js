/**
 * Program Details Dataset for BCSVE Detail Pages
 * Includes comprehensive details for all 4 sectors:
 * 1. Healthcare & Wellness (healthcare-wellness)
 * 2. Information Technology (information-technology)
 * 3. Business & Management (business-management)
 * 4. Vocational & Applied Trades (vocational-applied-trades)
 */

export const programDetails = {
  'healthcare-wellness': {
    id: 'healthcare',
    slug: 'healthcare-wellness',
    title: 'Healthcare & Wellness',
    tagline: 'Compassionate Care Powered by Clinical Rigour',
    heroBadge: 'Healthcare Sector Skill Council Aligned',
    category: 'Healthcare',
    duration: '3 - 12 Months',
    level: 'Certificate / Diploma',
    mode: 'Online Theory + Hospital Clinicals',
    heroDescription:
      'Train in NABH-compliant clinical procedures, patient bedside care, emergency response, and holistic wellness. Built for aspiring assistants, technicians, and wellness leaders.',
    theme: {
      primary: '#821733',
      accent: '#D24164',
      light: '#FDF6F7',
      tag: 'Clinical Training',
      badgeColor: 'bg-rose-50 text-rose-800 border-rose-200',
    },
    quickFacts: [
      { label: 'Course Duration', value: '3 - 12 Months', icon: 'Clock' },
      { label: 'Govt Approval', value: 'Act XXI 1860 (S.No.731/2010)', icon: 'Award' },
      { label: 'Regulated Fee', value: '3M: ₹800 | 6M: ₹1000 | 1Y: ₹1500', icon: 'Tag' },
      { label: 'Training Mode', value: 'Hybrid (Hospital Lab Practical)', icon: 'Activity' },
      { label: 'Clinical Hours', value: '300+ Hands-on Ward Hours', icon: 'HeartPulse' },
      { label: 'Min Eligibility', value: '10th / 12th Pass (Any Stream)', icon: 'GraduationCap' },
    ],
    vitalsStats: [
      { label: 'Heart Rate Monitor', value: '72 BPM', unit: 'Stable Life Metric', note: 'Continuous patient observation' },
      { label: 'Lab Competency', value: '100%', unit: 'SOP Compliant', note: 'Universal infection control protocol' },
      { label: 'Practical Ratio', value: '70 : 30', unit: 'Clinical vs Theory', note: 'Hospital bed and mannequin training' },
      { label: 'Placement Support', value: 'PAN-India', unit: 'Healthcare Network', note: 'Partner hospital affiliations' },
    ],
    subCourses: [
      {
        id: 'nursing-patient-care',
        title: 'Nursing & Patient Care Assistant',
        code: 'HCS-01',
        duration: '6 - 12 Months',
        level: 'Diploma',
        mode: 'Classroom & Hospital Rotation',
        shortDescription:
          'Comprehensive training in bedside nursing assistance, vital signs monitoring, medication administration support, and patient mobility.',
        skills: ['Vitals Monitoring', 'Sterile Dressing', 'Patient Mobility', 'Infection Control'],
        tools: ['Sphygmomanometer', 'Digital Thermometer', 'Glucometer', 'Hospital Beds & Wheelchairs'],
        modules: [
          { title: 'Anatomy & Human Physiology Basics', hours: '40 Hours', description: 'Major body systems, organ functions, and common pathologies.' },
          { title: 'Infection Prevention & Sterilisation SOPs', hours: '50 Hours', description: 'Autoclaving, biomedical waste segregation, PPE compliance, and sterile field maintenance.' },
          { title: 'Vital Signs & Clinical Measurement', hours: '60 Hours', description: 'Manual BP, pulse oximetry, respiratory rate, temperature logging, and charting.' },
          { title: 'Bedside Care & Patient Ergonomics', hours: '80 Hours', description: 'Bed making, pressure sore prevention, feeding assistance, patient transfers and bathing.' },
          { title: 'Supervised Hospital Ward Internship', hours: '120 Hours', description: 'Direct rotation across IPD wards under senior nursing supervisor.' }
        ],
        outcomes: [
          'Confidently record and report clinical vitals with zero margin of error.',
          'Execute hospital-grade infection control and safe patient transfer techniques.',
          'Support doctors and registered nurses across general wards and emergency triage.'
        ]
      },
      {
        id: 'general-duty-assistant',
        title: 'General Duty Assistant (GDA)',
        code: 'HCS-02',
        duration: '3 - 6 Months',
        level: 'Certificate',
        mode: 'Hybrid (Theory + Lab)',
        shortDescription:
          'Essential healthcare workforce certification preparing assistants for patient care, specimen transport, and inpatient ward coordination.',
        skills: ['Patient Hygiene', 'Ward Management', 'Specimen Handling', 'Medical Documentation'],
        tools: ['Patient Monitor', 'Steriliser Unit', 'Bedpan & Urinal Handling', 'IV Pole Logistics'],
        modules: [
          { title: 'Hospital Setup & Professional Ethics', hours: '30 Hours', description: 'Understanding hospital departments, patient confidentiality, and medical communication.' },
          { title: 'Daily Patient Hygiene & Nutritional Care', hours: '50 Hours', description: 'Oral hygiene, catheter care observation, meal distribution according to diet charts.' },
          { title: 'Assistance in Diagnostic Procedures', hours: '40 Hours', description: 'Preparing patients for X-Ray, Sonography, ECG, and safely transporting samples.' },
          { title: 'Disaster Management & Emergency Triage', hours: '40 Hours', description: 'Code Blue protocols, stretcher handling, and rapid ward evacuation techniques.' }
        ],
        outcomes: [
          'Work effectively as a frontline clinical support provider in super-speciality hospitals.',
          'Maintain spotless ward hygiene and adhere to biomedical waste protocols.'
        ]
      },
      {
        id: 'phlebotomy-lab-assistant',
        title: 'Phlebotomy & Diagnostic Lab Assistant',
        code: 'HCS-03',
        duration: '6 Months',
        level: 'Certificate',
        mode: 'Lab Hands-on + Internship',
        shortDescription:
          'Specialised technical certification in venipuncture, vacuum blood collection tubes, centrifugal processing, and sample preservation.',
        skills: ['Venipuncture Technique', 'Vacutainer Handling', 'Centrifuge Operation', 'Biohazard Safety'],
        tools: ['Vacutainer Tubes', 'Tourniquets', 'Safety Needles', 'Centrifuge Machine', 'Laboratory Centrifuge'],
        modules: [
          { title: 'Hematology & Blood Vessel Anatomy', hours: '35 Hours', description: 'Vein selection (median cubital, cephalic), arterial versus venous blood mechanics.' },
          { title: 'Phlebotomy Procedures & Color-Coded Tubes', hours: '60 Hours', description: 'Order of draw: EDTA, Heparin, Sodium Citrate, and Serum separator tubes.' },
          { title: 'Pre-Analytical Errors & Sample Integrity', hours: '45 Hours', description: 'Hemolysis prevention, temperature preservation, barcoding, and centrifuge timings.' },
          { title: 'Clinical Pathology Internship', hours: '80 Hours', description: 'Live collection rotations in accredited pathology lab under certified biochemist.' }
        ],
        outcomes: [
          'Perform safe, painless venipuncture on adult and geriatric patients.',
          'Zero-error specimen labeling, barcode registration, and diagnostic lab handoff.'
        ]
      },
      {
        id: 'home-health-aide',
        title: 'Home Health Aide (Geriatric & Chronic Care)',
        code: 'HCS-04',
        duration: '3 - 6 Months',
        level: 'Certificate',
        mode: 'Practical + Case Studies',
        shortDescription:
          'Specialised in compassionate, individualized elderly care, chronic illness support (diabetes, hypertension, stroke recovery), and home rehabilitation.',
        skills: ['Elderly Care', 'Medication Reminders', 'Mobility Assistance', 'First Response'],
        tools: ['Glucometer', 'Walker & Wheelchair', 'Nebulizer', 'Oxygen Concentrator Operations'],
        modules: [
          { title: 'Geriatric Psychology & Chronic Conditions', hours: '40 Hours', description: 'Understanding Alzheimer’s, Parkinson’s, arthritis, and empathetic senior interaction.' },
          { title: 'Home Medical Equipment Operation', hours: '45 Hours', description: 'Safely setting up home oxygen concentrators, nebulizers, air mattresses, and suction units.' },
          { title: 'Personal Care & Emergency Protocols', hours: '45 Hours', description: 'Bathing, dressing, fall prevention, stroke recognition, and emergency dialing.' }
        ],
        outcomes: [
          'Manage comprehensive in-home patient recuperation and chronic care with confidence.'
        ]
      },
      {
        id: 'community-health-first-aid',
        title: 'Community Health & Emergency First Aid',
        code: 'HCS-05',
        duration: '3 - 6 Months',
        level: 'Certificate',
        mode: 'Field Outreach + Simulation',
        shortDescription:
          'Equips grassroots healthcare workers with life-saving BLS (Basic Life Support), CPR techniques, epidemic surveillance, and primary health education.',
        skills: ['CPR & BLS', 'Trauma Bandaging', 'Maternal Health Education', 'Epidemic Screening'],
        tools: ['CPR Training Mannequin', 'AED Trainer Unit', 'First Aid Trauma Kit', 'Stretcher'],
        modules: [
          { title: 'Basic Life Support (BLS) & CPR Simulation', hours: '40 Hours', description: 'Adult, pediatric chest compressions, AED automated defibrillator use, rescue breathing.' },
          { title: 'Trauma Care & Hemorrhage Management', hours: '40 Hours', description: 'Burn dressings, fracture splints, snakebite protocol, and shock intervention.' },
          { title: 'Public Health Sanitation & Vaccine Advocacy', hours: '40 Hours', description: 'Community immunization schedules, maternal health guidance, and waterborne disease control.' }
        ],
        outcomes: [
          'Certified first responder capability in emergency accidents and mass disaster situations.'
        ]
      },
      {
        id: 'yoga-wellness-coach',
        title: 'Yoga & Naturopathy Wellness Coach',
        code: 'HCS-06',
        duration: '6 - 12 Months',
        level: 'Diploma',
        mode: 'Studio Practical + Theory',
        shortDescription:
          'Integrates traditional yogic sciences with modern anatomy, pranayama breathing therapy, lifestyle nutrition, and preventive stress management.',
        skills: ['Asana Alignment', 'Pranayama Therapy', 'Lifestyle Nutrition', 'Corporate Stress Management'],
        tools: ['Yoga Props & Bolsters', 'Postural Analysis Grid', 'Ayurvedic Herbarium', 'Sound Healing Bowls'],
        modules: [
          { title: 'Foundations of Yogic Anatomy & Philosophy', hours: '45 Hours', description: 'Patanjali yoga sutras, biomechanics of spinal joints, breath physiology.' },
          { title: 'Therapeutic Asanas & Injury Prevention', hours: '70 Hours', description: 'Customised postures for hypertension, lumbar spondylosis, PCOD, and metabolic balance.' },
          { title: 'Meditation, Mindfulness & Wellness Diet', hours: '55 Hours', description: 'Yoga nidra, satvik nutrition fundamentals, circadian rhythm alignment.' }
        ],
        outcomes: [
          'Lead professional yoga and corporate wellness sessions with postural authority.'
        ]
      }
    ],
    shiftTimeline: [
      { time: '07:00 AM', title: 'Shift Handover & Vitals Log', skill: 'Clinical Documentation', description: 'Receive night reports, review patient charts, and record baseline temperature, pulse, and oxygen saturation.' },
      { time: '09:00 AM', title: 'Medication & Feeding Support', skill: 'Safe Administration', description: 'Assist nursing officer with prescribed oral dosages, inspect IV lines, and serve diet-appropriate breakfasts.' },
      { time: '11:30 AM', title: 'Sterile Wound Care & Lab Samples', skill: 'Infection Control', description: 'Prepare sterile dressing trays, assist doctor with suturing/burn care, and transport blood vials to central pathology.' },
      { time: '02:00 PM', title: 'Physiotherapy & Mobility Assistance', skill: 'Patient Ergonomics', description: 'Safely transfer post-op patients from bed to walker, assist with pulmonary spirometry, and prevent bedsores.' },
      { time: '04:30 PM', title: 'Emergency Response & Code Protocol', skill: 'BLS / Rapid Triage', description: 'Manage unexpected drops in vitals, initiate oxygen cannula protocol, and alert intensive care doctors.' },
      { time: '07:00 PM', title: 'Evening Debrief & Chart Sign-Off', skill: 'Digital Health Records', description: 'Update digital nursing station records, replenish floor supplies, and handover to incoming night duty.' }
    ],
    skillsLab: [
      { id: 'vitals', title: 'Multi-Parameter Vitals Check', desc: 'Precision logging of blood pressure, SpO2, heart rate, and thermal regulation.' },
      { id: 'bp', title: 'Manual Sphygmomanometry', desc: 'Auscultatory blood pressure measurement using stethoscope and mercury/aneroid gauge.' },
      { id: 'dressing', title: 'Aseptic Wound Dressing', desc: 'Sterile glove donning, antiseptic swab application, and non-adherent sterile bandaging.' },
      { id: 'cpr', title: 'Basic Life Support (BLS / CPR)', desc: '100-120 high-quality chest compressions per minute and automated AED protocol.' },
      { id: 'phleb', title: 'Vein Palpation & Needle Safety', desc: 'Targeting median cubital vein, butterfly needle extraction, and sharps biohazard disposal.' },
      { id: 'biohazard', title: 'Biomedical Waste Segregation', desc: 'Color-coded binning (Yellow, Red, Blue, White) complying with NABH hospital mandates.' }
    ],
    bodyHotspots: [
      { id: 'circulatory', name: 'Cardiovascular System', focus: 'Pulse, BP, ECG placement, Cardiac arrest response, IV line monitoring.' },
      { id: 'respiratory', name: 'Respiratory System', focus: 'Oxygen delivery systems, nebulization, SpO2 tracking, airway clearing.' },
      { id: 'skeletal', name: 'Musculoskeletal & Mobility', focus: 'Post-fracture transfer, spine-safe lifting, passive range-of-motion therapy.' },
      { id: 'nervous', name: 'Neurological Observation', focus: 'Glasgow Coma Scale basics, stroke warning FAST protocol, pupil dilation checks.' }
    ],
    workSectors: [
      { name: 'Multi-Speciality Hospitals', role: 'Ward Nurse Assistant / GDA', growth: 'Shift Supervisor / Department Head' },
      { name: 'Diagnostic Pathology Labs', role: 'Phlebotomist / Lab Aide', growth: 'Senior Lab Technician' },
      { name: 'Home Healthcare Providers', role: 'Home Care Specialist', growth: 'Clinical Case Coordinator' },
      { name: 'Community & NGO Clinics', role: 'Primary Health Worker', growth: 'Community Outreach Officer' },
      { name: 'Wellness & Rehabilitation Centers', role: 'Yoga & Therapy Coach', growth: 'Center Director / Consultant' }
    ],
    eligibility: {
      qualification: '10th Standard (SSC) or 12th Standard (HSC) in Any Stream from a Recognized Board.',
      ageLimit: 'Minimum 17 years completed as of batch commencement date.',
      documents: ['10th / 12th Marksheet & Passing Certificate', 'Aadhaar Card or Government Photo ID', 'Recent Passport Size Color Photographs', 'Medical Fitness Certificate from a Registered Doctor'],
      admissionNote: 'Admissions are conducted through merit ranking and document verification at affiliated centers.'
    },
    faqs: [
      { q: 'Is the Healthcare certification valid across private hospitals?', a: 'Yes. BCSVE certifications follow national vocational training guidelines aligned with NSDC/Skill India frameworks and are widely recognized by private hospitals, nursing homes, and diagnostic chains across India.' },
      { q: 'Do students get real clinical experience in hospital wards?', a: 'Absolutely. Every healthcare program includes mandatory clinical laboratory practicals on anatomical mannequins, followed by hospital rotation internships in affiliated medical institutions.' },
      { q: 'Can non-science students join Nursing and GDA courses?', a: 'Yes. Courses such as General Duty Assistant (GDA), Home Health Aide, and Community Health are open to students from Arts, Commerce, or Science backgrounds with 10th or 12th passing credentials.' },
      { q: 'What is the fee structure and payment mode?', a: 'BCSVE enforces an official regulated fee structure: ₹800 for 3-Month Certificates, ₹1,000 for 6-Month Diplomas, and ₹1,500 for 1-Year Master Diplomas. The fee chart PDF is downloadable directly from the council portal.' },
      { q: 'How does the certificate verification work for employers?', a: 'Every issued certificate carries a tamper-evident serial number and verifiable QR code that can be authenticated instantly via our online Verification Portal.' },
      { q: 'Can I open my own wellness or diagnostic collection center?', a: 'Students completing Diploma courses in Phlebotomy or Yoga Coaching are eligible to operate sample collection points or wellness studios subject to local state health department licensing.' }
    ]
  },

  'information-technology': {
    id: 'technology',
    slug: 'information-technology',
    title: 'Information Technology',
    tagline: 'Write Clean Code, Build Web Apps & Master Modern Tools',
    heroBadge: 'FutureSkills & IT-ITeS Framework Aligned',
    category: 'Technology',
    duration: '3 - 12 Months',
    level: 'Certificate / Diploma',
    mode: 'Hands-on Computer Lab + Online IDE',
    heroDescription:
      'From fundamental computing and financial digital accounting to modern responsive web development, cyber protection, and creative digital media. Practical, project-first IT education.',
    theme: {
      primary: '#1E293B',
      accent: '#38BDF8',
      light: '#F8FAFC',
      tag: 'Digital Architecture',
      badgeColor: 'bg-sky-50 text-sky-800 border-sky-200',
    },
    quickFacts: [
      { label: 'Program Length', value: '3 - 12 Months', icon: 'Clock' },
      { label: 'Govt Approval', value: 'Act XXI 1860 (S.No.731/2010)', icon: 'Award' },
      { label: 'Regulated Fee', value: '3M: ₹800 | 6M: ₹1000 | 1Y: ₹1500', icon: 'Tag' },
      { label: 'Lab Practical', value: '100% Computer Workstation', icon: 'Terminal' },
      { label: 'Live Projects', value: '5+ Industry Portfolios', icon: 'Code' },
      { label: 'Prerequisite', value: '10th / 12th Pass (Basic English)', icon: 'GraduationCap' },
    ],
    terminalStats: [
      { command: 'node --version', output: 'v20.11.0 (LTS)', label: 'Modern Tooling' },
      { command: 'git status', output: 'On branch main: 100% production ready', label: 'Version Controlled' },
      { command: 'npm run test:skills', output: 'Tests passing: 48/48 modules verified', label: 'Automated Evals' },
      { command: 'bcsve-deploy', output: 'Portfolio deployed to live web URL', label: 'Instant Deployment' },
    ],
    subCourses: [
      {
        id: 'dca-office-automation',
        title: 'Diploma in Computer Applications (DCA & CCC)',
        code: 'ITC-01',
        duration: '6 - 12 Months',
        level: 'Diploma',
        mode: 'Lab Hands-on + Practice',
        shortDescription:
          'Comprehensive computing foundation covering Windows OS, advanced MS Office (Word, Excel, PowerPoint), databases, digital communications, and internet security.',
        skills: ['Advanced MS Excel', 'Word Documentation', 'Database (Access)', 'Cyber Safety'],
        tools: ['Microsoft Office 365', 'Google Workspace', 'Windows 11', 'Tally Essentials'],
        modules: [
          { title: 'Computer Architecture & Operating Systems', hours: '40 Hours', description: 'Hardware components, memory, file management, peripheral troubleshooting.' },
          { title: 'Advanced Microsoft Excel & Data Analytics', hours: '60 Hours', description: 'VLOOKUP, XLOOKUP, Pivot Tables, conditional formatting, nested IF formulas, and dashboard charts.' },
          { title: 'Professional Documentation & Presentations', hours: '40 Hours', description: 'Official letters, indexing, mail merge in Word; corporate slide decks with animations in PowerPoint.' },
          { title: 'Digital Governance & Internet Protocols', hours: '30 Hours', description: 'Email security, cloud drive storage, e-governance services, cyber hygiene.' }
        ],
        outcomes: [
          'Qualify for central and state government jobs requiring mandatory DCA/CCC certificate.',
          'Execute complex spreadsheet modeling, MIS reporting, and executive administrative tasks.'
        ]
      },
      {
        id: 'fullstack-web-development',
        title: 'Full-Stack Web Development',
        code: 'ITC-02',
        duration: '6 - 12 Months',
        level: 'Diploma',
        mode: 'Project-First Lab + Git',
        shortDescription:
          'Modern web engineering from semantic HTML5 and responsive Tailwind CSS to modern JavaScript, React components, REST APIs, and version control.',
        skills: ['HTML5 & Modern CSS', 'Tailwind Framework', 'JavaScript (ES6+)', 'React Components', 'Git & GitHub'],
        tools: ['VS Code', 'Git CLI', 'GitHub', 'Node.js', 'Vite', 'Chrome DevTools'],
        modules: [
          { title: 'Semantic HTML5 & Responsive CSS3', hours: '50 Hours', description: 'Flexbox, CSS Grid, mobile-first breakpoints, accessible forms, Tailwind utility classes.' },
          { title: 'JavaScript (ES6+) Core Fundamentals', hours: '70 Hours', description: 'DOM manipulation, events, asynchronous fetch calls, array methods (map, filter, reduce), closures.' },
          { title: 'React.js Component Architecture', hours: '80 Hours', description: 'JSX, hooks (useState, useEffect), props, modular component design, routing with React Router.' },
          { title: 'Full-Stack Deployment & Portfolio Capstone', hours: '60 Hours', description: 'Deploying dynamic web apps to Vercel/Netlify, managing GitHub repositories, CI/CD basics.' }
        ],
        outcomes: [
          'Design and launch production-grade responsive websites and client web apps from scratch.',
          'Maintain a public GitHub portfolio showcasing live projects for employers and freelance clients.'
        ]
      },
      {
        id: 'accounting-tally-gst',
        title: 'Financial Accounting & GST (Tally Prime)',
        code: 'ITC-03',
        duration: '3 - 6 Months',
        level: 'Certificate',
        mode: 'Computer Lab Practical',
        shortDescription:
          'Master computerized bookkeeping, double-entry ledgers, inventory tracking, payroll generation, and GSTR-1 / GSTR-3B tax filing using Tally Prime.',
        skills: ['Tally Prime', 'GST Invoicing', 'Balance Sheet Preparation', 'Payroll & TDS'],
        tools: ['Tally Prime 4.0', 'GST Offline Tool', 'MS Excel Financial Functions', 'E-Way Bill Portal'],
        modules: [
          { title: 'Principles of Modern Bookkeeping', hours: '35 Hours', description: 'Debit & credit rules, journal entries, ledger posting, trial balance reconciliation.' },
          { title: 'Company Creation & Master Ledgers in Tally', hours: '50 Hours', description: 'Creating voucher types (Payment, Receipt, Contra, Sales, Purchase), inventory batches.' },
          { title: 'GST Calculation, Input Tax Credit (ITC) & E-Way Bills', hours: '60 Hours', description: 'CGST, SGST, IGST computations, reverse charge, generating compliant tax invoices.' },
          { title: 'Financial Finalization & Audit Reports', hours: '45 Hours', description: 'P&L statements, balance sheets, bank reconciliation statements (BRS), and TDS returns.' }
        ],
        outcomes: [
          'Function as an independent corporate accountant or tax assistant for retail & wholesale businesses.'
        ]
      },
      {
        id: 'graphic-multimedia-design',
        title: 'Graphic & Multimedia Design',
        code: 'ITC-04',
        duration: '6 Months',
        level: 'Certificate',
        mode: 'Design Studio Lab',
        shortDescription:
          'Learn visual storytelling, raster image retouching, vector brand identity design, social media marketing creatives, and basic video editing.',
        skills: ['Photo Retouching', 'Vector Illustration', 'Typography & Layout', 'UI Wireframing'],
        tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Canva Pro', 'Premiere Pro Basics'],
        modules: [
          { title: 'Visual Design Fundamentals & Color Theory', hours: '30 Hours', description: 'Grid systems, contrast, color harmony, typography hierarchies, brand identity systems.' },
          { title: 'Advanced Photoshop Photo Manipulation', hours: '60 Hours', description: 'Masking, pen tool selections, color grading, multi-layer compositing, mockups.' },
          { title: 'Vector Design & Logo Creation in Illustrator', hours: '60 Hours', description: 'Bezier curves, pathfinders, logo design, packaging cut-outs, print CMYK standards.' },
          { title: 'UI/UX Design in Figma & Social Media Content', hours: '40 Hours', description: 'App interface wireframes, interactive prototyping, social media campaign banners.' }
        ],
        outcomes: [
          'Produce commercial brand identities, ad graphics, and UI layouts ready for digital and print media.'
        ]
      },
      {
        id: 'digital-marketing-seo',
        title: 'Digital Marketing & Growth Strategy',
        code: 'ITC-05',
        duration: '3 - 6 Months',
        level: 'Certificate',
        mode: 'Live Case Studies',
        shortDescription:
          'Hands-on training in search engine optimization (SEO), Meta & Google ads, social media management, email automation, and web analytics.',
        skills: ['Search Engine Optimization', 'Google Ads (SEM)', 'Social Media Marketing', 'Google Analytics 4'],
        tools: ['Google Ads Manager', 'Meta Business Suite', 'Google Search Console', 'GA4', 'Mailchimp'],
        modules: [
          { title: 'Keyword Research & On-Page / Off-Page SEO', hours: '40 Hours', description: 'Content optimization, backlinks, technical site audits, local Google Business profile SEO.' },
          { title: 'Performance Marketing (Google Search & Display)', hours: '50 Hours', description: 'Bidding strategies, Quality Score, ad copywriting, conversion tracking tags.' },
          { title: 'Social Media Advertising & Retargeting', hours: '45 Hours', description: 'Audience targeting on Instagram/Facebook, carousel ads, budget management, lead gen forms.' }
        ],
        outcomes: [
          'Drive measurable traffic and sales leads for e-commerce, local businesses, and corporate brands.'
        ]
      },
      {
        id: 'cyber-safety-networking',
        title: 'Cyber Safety & Network Administration',
        code: 'ITC-06',
        duration: '6 Months',
        level: 'Certificate',
        mode: 'Lab Hands-on Practical',
        shortDescription:
          'Covers computer networking fundamentals, IP addressing, router/switch configuration, firewall policies, malware prevention, and ethical cyber hygiene.',
        skills: ['TCP/IP & Subnetting', 'Router Configuration', 'Firewall Management', 'System Hardening'],
        tools: ['Cisco Packet Tracer', 'Wireshark', 'Windows Server Admin', 'Linux Terminal Basics'],
        modules: [
          { title: 'Networking Fundamentals & OSI Model', hours: '40 Hours', description: 'LAN/WAN architectures, twisted-pair cabling crimping, IPv4 and IPv6 subnetting.' },
          { title: 'Router, Switch & WiFi Security Setup', hours: '50 Hours', description: 'VLAN creation, DHCP/DNS server setup, WPA3 enterprise wireless security.' },
          { title: 'Cyber Defense, Malware & Incident Response', hours: '50 Hours', description: 'Phishing detection, port scanning, data backup automation, basic penetration testing.' }
        ],
        outcomes: [
          'Deploy, manage, and secure small-to-medium enterprise office networks without downtime.'
        ]
      }
    ],
    tracks: [
      {
        id: 'web-dev',
        title: 'Full-Stack Developer Path',
        tag: 'Code & Architecture',
        steps: ['HTML5 & Responsive CSS', 'Modern JavaScript (ES6+)', 'React Components', 'API Integration', 'Full-Stack Deployment'],
        primaryCourse: 'Full-Stack Web Development',
        estTime: '6 - 9 Months'
      },
      {
        id: 'office-pro',
        title: 'Govt & Corporate Admin Path',
        tag: 'DCA / CCC / Tally',
        steps: ['Computer Fundamentals', 'Advanced Excel & MIS', 'Tally Prime & GST', 'E-Governance & Documentation'],
        primaryCourse: 'Diploma in Computer Applications (DCA)',
        estTime: '6 Months'
      },
      {
        id: 'creative-ui',
        title: 'Creative Designer & UI Path',
        tag: 'Design & Visuals',
        steps: ['Design Principles', 'Photoshop Mastery', 'Illustrator Vectors', 'Figma UI Wireframing', 'Portfolio Presentation'],
        primaryCourse: 'Graphic & Multimedia Design',
        estTime: '6 Months'
      },
      {
        id: 'cyber-admin',
        title: 'Cyber & Systems Admin Path',
        tag: 'Infrastructure',
        steps: ['Network Protocols (TCP/IP)', 'Hardware & OS Setup', 'Firewalls & Routers', 'Incident Defense'],
        primaryCourse: 'Cyber Safety & Network Admin',
        estTime: '6 Months'
      }
    ],
    gitTimeline: [
      { commit: 'commit dca-01', branch: 'feat/fundamentals', message: 'Week 1-3: Hardware, OS & Typing Speed Drills', status: 'Passed Tests' },
      { commit: 'commit dca-02', branch: 'feat/excel-advanced', message: 'Week 4-7: Nested Formulas, Pivot Tables & Dynamic Dashboards', status: 'Reviewed' },
      { commit: 'commit web-03', branch: 'feat/frontend-build', message: 'Week 8-12: Semantic Web Layouts & Tailwind CSS Systems', status: 'Merged' },
      { commit: 'commit web-04', branch: 'feat/javascript-logic', message: 'Week 13-18: Async Data Fetch, React State & API Integration', status: 'Merged' },
      { commit: 'commit cap-05', branch: 'release/v1.0.0', message: 'Week 19-24: Capstone Project Deployment & Portfolio Defense', status: 'Production Deployed' }
    ],
    projectsShowcase: [
      { title: 'Interactive Hospital Ward Dashboard', tech: ['React', 'Tailwind', 'ChartJS'], desc: 'Real-time patient occupancy, emergency bed tracking, and nurse shift management UI.' },
      { title: 'Automated GST Billing Engine in Excel', tech: ['Advanced Excel', 'VBA', 'Tax Engine'], desc: 'Single-click invoice generation with automated CGST/SGST splitting and printable tax bills.' },
      { title: 'Corporate Brand Identity & Styleguide', tech: ['Photoshop', 'Illustrator', 'Figma'], desc: 'Comprehensive vector branding kit complete with logo geometry, typography, and stationery.' },
      { title: 'Secured Multi-VLAN Office Network', tech: ['Packet Tracer', 'Cisco CLI', 'Firewall'], desc: 'Simulated network isolating guest WiFi, finance servers, and admin systems with ACL rules.' }
    ],
    toolsMarquee: [
      'VS Code', 'React.js', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3', 'Git', 'GitHub', 'Tally Prime', 'MS Excel', 'MS Word', 'Photoshop', 'Illustrator', 'Figma', 'Wireshark', 'Packet Tracer'
    ],
    eligibility: {
      qualification: '10th Standard (SSC) or 12th Standard (HSC) in Any Stream from a Recognized Board.',
      ageLimit: 'Minimum 15 years. No upper age bar for vocational upskilling.',
      documents: ['10th / 12th Marksheet', 'Aadhaar Card or Valid Government ID', '2 Passport Size Photographs'],
      admissionNote: 'Computers and high-speed internet lab access are provided at all accredited BCSVE IT centers.'
    },
    faqs: [
      { q: 'Is the DCA certificate recognized for government job exams?', a: 'Yes. Our Diploma in Computer Applications (DCA) and CCC aligned curriculum meets standard eligibility norms for central and state public recruitment exams requiring basic computing diplomas.' },
      { q: 'Do I need a science or mathematics background for Web Development?', a: 'No prior coding or mathematics expertise is needed. The curriculum starts from basic syntax and gradually steps up to building live interactive web interfaces.' },
      { q: 'Can I attend computer lab sessions outside class hours?', a: 'Yes. Enrolled students are granted open lab practice hours at their local BCSVE center to practice code, work on Tally files, or build design portfolios.' },
      { q: 'Will I receive a portfolio website upon graduation?', a: 'Students in the Full-Stack Web Development track build and deploy their personal web portfolio online, hosted on cloud platforms like GitHub Pages or Netlify.' },
      { q: 'Is Tally Prime taught with the latest GST rate changes?', a: 'Yes. The syllabus is continuously updated to reflect current GST tax slabs, e-invoicing laws, and official portal filing procedures.' }
    ]
  },

  'business-management': {
    id: 'business',
    slug: 'business-management',
    title: 'Business & Management',
    tagline: 'Strategic Thinking, Financial Literacy & Executive Leadership',
    heroBadge: 'Management & Banking Sector Aligned',
    category: 'Business',
    duration: '3 - 12 Months',
    level: 'Certificate / Diploma',
    mode: 'Hybrid (Classroom + Executive Case Studies)',
    heroDescription:
      'Master business operations, financial balance sheets, retail store management, human resource dynamics, and entrepreneurial venture launching.',
    theme: {
      primary: '#6E162D',
      accent: '#DBBA6F',
      light: '#FAF4ED',
      tag: 'Executive Growth',
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
    },
    quickFacts: [
      { label: 'Course Duration', value: '3 - 12 Months', icon: 'Clock' },
      { label: 'Govt Approval', value: 'Act XXI 1860 (S.No.731/2010)', icon: 'Award' },
      { label: 'Regulated Fee', value: '3M: ₹800 | 6M: ₹1000 | 1Y: ₹1500', icon: 'Tag' },
      { label: 'Teaching Method', value: 'Interactive Case Studies', icon: 'Briefcase' },
      { label: 'Business Simulation', value: 'Business Model Canvas', icon: 'PieChart' },
      { label: 'Eligibility', value: '10th / 12th / Graduates', icon: 'GraduationCap' },
    ],
    dashboardMetrics: [
      { label: 'Operating Efficiency', value: '94.2%', change: '+18% growth', icon: 'TrendingUp' },
      { label: 'GST Compliance Rate', value: '100%', change: 'Zero audit error', icon: 'ShieldCheck' },
      { label: 'Executive Placement', value: '88%+', change: 'Corporate network', icon: 'Users' },
      { label: 'Venture Success Index', value: '4.8/5', change: 'Alumni reviews', icon: 'Award' },
    ],
    subCourses: [
      {
        id: 'business-administration',
        title: 'Diploma in Business Administration (DBA)',
        code: 'BMC-01',
        duration: '6 - 12 Months',
        level: 'Diploma',
        mode: 'Classroom & Case Analysis',
        shortDescription:
          'Broad-spectrum business education covering managerial communication, departmental coordination, budget control, and corporate operational workflows.',
        skills: ['Managerial Communication', 'Budgeting & Cost Control', 'Team Leadership', 'Operations Planning'],
        tools: ['ERP Systems', 'MS PowerPoint', 'Business Dashboards', 'Project Gantt Charts'],
        modules: [
          { title: 'Foundations of Modern Management Theory', hours: '40 Hours', description: 'Organizational behavior, corporate governance, decision making hierarchies.' },
          { title: 'Operational Logistics & Supply Chains', hours: '55 Hours', description: 'Inventory optimization, vendor procurement, turnaround times, quality management (ISO 9001).' },
          { title: 'Executive Communication & Board Presentations', hours: '45 Hours', description: 'Professional drafting, executive briefings, stakeholder negotiations, crisis management.' },
          { title: 'Corporate Strategy & Capstone Project', hours: '60 Hours', description: 'Analyzing real enterprise case studies (turnarounds, retail growth, digital disruption).' }
        ],
        outcomes: [
          'Step into supervisory and assistant managerial positions across corporate commercial firms.'
        ]
      },
      {
        id: 'advanced-accounting-gst',
        title: 'Advanced Corporate Accounting & Taxation',
        code: 'BMC-02',
        duration: '6 Months',
        level: 'Certificate',
        mode: 'Lab Hands-on + Case Ledger',
        shortDescription:
          'Deep dive into corporate balance sheet finalization, tax audits, GST compliance, TDS/TCS provisions, and computerized corporate accounting.',
        skills: ['Corporate Taxation', 'Balance Sheet Finalization', 'Tally Prime Advanced', 'Auditing Basics'],
        tools: ['Tally Prime Enterprise', 'Excel Financial Modeling', 'Income Tax E-Filing Portal'],
        modules: [
          { title: 'Corporate Bookkeeping & Ledger Maintenance', hours: '40 Hours', description: 'Depreciation methods, adjustment entries, provisions, bad debts reserves.' },
          { title: 'Direct Taxes (Income Tax & TDS Computations)', hours: '50 Hours', description: 'Salary taxation, corporate income tax slabs, quarterly TDS return filings.' },
          { title: 'Indirect Taxes (Comprehensive GST Framework)', hours: '50 Hours', description: 'GSTR-1, GSTR-3B, annual GSTR-9 reconciliation, handling tax demand notices.' }
        ],
        outcomes: [
          'Directly assist Chartered Accountants (CAs) and corporate finance controllers.'
        ]
      },
      {
        id: 'retail-sales-management',
        title: 'Retail Store Operations & Sales Management',
        code: 'BMC-03',
        duration: '3 - 6 Months',
        level: 'Certificate',
        mode: 'Simulation + Retail Lab',
        shortDescription:
          'Designed for the booming retail sector: customer experience, Point of Sale (POS) terminals, visual merchandising, and inventory shrinkage control.',
        skills: ['POS Billing Systems', 'Visual Merchandising', 'Customer Service', 'Store Inventory'],
        tools: ['Retail POS Software', 'Barcode Scanners', 'Planograms', 'Inventory Trackers'],
        modules: [
          { title: 'Retail Environment & Floor Dynamics', hours: '35 Hours', description: 'Footfall management, product placement, store ambiance, customer psychology.' },
          { title: 'Billing, POS Hardware & Cash Reconciliation', hours: '45 Hours', description: 'Card terminals, UPI integration, return merchandise authorizations (RMA), daily closing balances.' },
          { title: 'Inventory Auditing & Shrinkage Prevention', hours: '40 Hours', description: 'Stocktaking procedures, theft prevention, expiry management, stock replenishment.' }
        ],
        outcomes: [
          'Manage storefront operations and retail departments in supermarkets, apparel, and electronics chains.'
        ]
      },
      {
        id: 'entrepreneurship-startup',
        title: 'Entrepreneurship & Small Business Management',
        code: 'BMC-04',
        duration: '6 Months',
        level: 'Certificate',
        mode: 'Incubation Workshop',
        shortDescription:
          'Turn practical vocational ideas into registered, profitable micro-enterprises. Covers MSME schemes (PMEGP, Mudra), business modeling, and market launch.',
        skills: ['Business Plan Writing', 'MSME Schemes & Mudra Loans', 'Digital Selling', 'Unit Economics'],
        tools: ['Business Model Canvas', 'Udyam Registration Portal', 'UPI Merchant Apps', 'Social Commerce'],
        modules: [
          { title: 'Idea Validation & Market Feasibility', hours: '35 Hours', description: 'Competitor benchmarking, customer discovery surveys, unit economics, breakeven analysis.' },
          { title: 'Legal Setup & Government Funding Schemes', hours: '45 Hours', description: 'Sole proprietorship, partnership, GST registration, applying for PMEGP subsidies and Mudra credit.' },
          { title: 'Marketing, Social Selling & Cashflow Management', hours: '50 Hours', description: 'WhatsApp Business, Instagram storefronts, working capital cycle, debtor collection.' }
        ],
        outcomes: [
          'Successfully incorporate, finance, and operate your own small enterprise or vocational service business.'
        ]
      },
      {
        id: 'human-resources-management',
        title: 'Human Resources & Office Administration',
        code: 'BMC-05',
        duration: '6 Months',
        level: 'Certificate',
        mode: 'Practical Simulations',
        shortDescription:
          'Learn talent sourcing, employee onboarding, attendance tracking, biometric payroll calculation, PF/ESI compliance, and employee dispute resolution.',
        skills: ['HR Recruitment', 'Payroll & PF/ESI', 'Attendance Management', 'Employee Relations'],
        tools: ['HRMS Portals', 'Biometric Software', 'Statutory Compliance Portals (EPFO, ESIC)'],
        modules: [
          { title: 'Talent Acquisition & Interview Techniques', hours: '35 Hours', description: 'Job descriptions, sourcing via job portals, conducting initial screenings, offer letters.' },
          { title: 'Payroll Processing & Statutory Compliance', hours: '55 Hours', description: 'Salary structure design, calculating EPF, ESI, professional tax, gratuity, generating pay slips.' },
          { title: 'Workplace Culture & Labor Law Essentials', hours: '40 Hours', description: 'POSH compliance, industrial disputes act basics, disciplinary documentation, exit interviews.' }
        ],
        outcomes: [
          'Work as an HR Executive or Office Operations Coordinator in growing business enterprises.'
        ]
      },
      {
        id: 'banking-finance-operations',
        title: 'Banking, Financial Services & Insurance (BFSI)',
        code: 'BMC-06',
        duration: '6 Months',
        level: 'Certificate',
        mode: 'Simulation Lab',
        shortDescription:
          'Prepares candidates for front-office retail banking, customer KYC onboarding, loan documentation, microfinance recovery, and insurance underwriting support.',
        skills: ['Retail Banking Ops', 'KYC & AML Compliance', 'Loan Documentation', 'Insurance Essentials'],
        tools: ['Core Banking Simulation UI', 'Credit Scoring Checkers', 'Insurance Quotation Portals'],
        modules: [
          { title: 'Banking Operations & Account Types', hours: '40 Hours', description: 'Savings vs current accounts, clearing systems (NEFT, RTGS, IMPS, UPI), cheque truncation.' },
          { title: 'KYC, Anti-Money Laundering & Compliance', hours: '40 Hours', description: 'RBI mandates, Aadhaar/PAN verification, suspicious transaction reporting.' },
          { title: 'Retail Lending, Loans & Insurance Products', hours: '50 Hours', description: 'Personal, auto, home loan documentation, term vs health insurance underwriting basics.' }
        ],
        outcomes: [
          'Secure opportunities as Banking Relationship Officers, Customer Service Executives, or Insurance Advisors.'
        ]
      }
    ],
    startupJourney: [
      { step: '01', title: 'Ideation & Customer Validation', desc: 'Identify a clear market gap, survey potential buyers, and craft a compelling Unique Value Proposition.' },
      { step: '02', title: 'Business Modeling & Financial Plan', desc: 'Map out costs, revenue streams, pricing, and gross margins using our 9-box business canvas.' },
      { step: '03', title: 'Registration & Regulatory Approvals', desc: 'Obtain Udyam MSME certification, GST number, trade licenses, and open a current bank account.' },
      { step: '04', title: 'Launch, Sales & Expansion', desc: 'Acquire early customers through digital marketing, maintain tight cashflow, and scale hiring.' }
    ],
    canvasBlocks: [
      { title: 'Value Propositions', content: 'What specific problem does your product solve better, faster, or cheaper than alternatives?' },
      { title: 'Customer Segments', content: 'Exact demographics, income brackets, and localized geographies of your paying customers.' },
      { title: 'Channels', content: 'Direct retail counter, online social storefront, local distributor networks, or service visits.' },
      { title: 'Customer Relationships', content: 'Personalized customer care, loyalty rewards, WhatsApp automated order updates.' },
      { title: 'Revenue Streams', content: 'Direct product sales, annual maintenance contracts (AMC), subscription service retainers.' },
      { title: 'Key Resources', content: 'Physical inventory, skilled technicians, computing hardware, operational capital.' },
      { title: 'Key Activities', content: 'Quality control, customer support, marketing campaigns, vendor negotiation.' },
      { title: 'Key Partners', content: 'Wholesale suppliers, logistics couriers, payment gateway providers, local councils.' },
      { title: 'Cost Structure', content: 'Shop rent, raw material procurement, staff wages, utilities, digital advertising.' }
    ],
    careerLadder: [
      { level: 'Level 1: Management Trainee', tenure: '0 - 1 Year', focus: 'Operations support, data entry, client customer service, basic ledger entries.' },
      { level: 'Level 2: Team Executive / Specialist', tenure: '1 - 3 Years', focus: 'Independent account handling, inventory management, sales target delivery, tax filings.' },
      { level: 'Level 3: Department Manager', tenure: '3 - 6 Years', focus: 'Supervising 10+ member teams, P&L responsibility, branch targets, hiring and audits.' },
      { level: 'Level 4: Business Unit Head / Entrepreneur', tenure: '6+ Years', focus: 'Total enterprise leadership, venture equity, new market launches, franchise ownership.' }
    ],
    boardroomSkills: [
      { title: 'Commercial Negotiation', desc: 'Techniques to secure favorable supplier discounts, payment credit cycles, and high-margin client contracts.' },
      { title: 'Crisis Leadership & Problem Solving', desc: 'Calm execution during operational delays, employee turnover, or regulatory compliance inspections.' },
      { title: 'Data-Driven Decision Making', desc: 'Translating balance sheets, daily footfalls, and churn rates into actionable strategic directives.' },
      { title: 'Ethical Governance & Compliance', desc: 'Ensuring 100% adherence to labor guidelines, environmental safety, and corporate tax mandates.' }
    ],
    eligibility: {
      qualification: '10th Standard (SSC) or 12th Standard (HSC) in Any Stream from a Recognized Board.',
      ageLimit: 'Minimum 16 years. Working professionals seeking career pivot are welcome.',
      documents: ['10th / 12th Marksheet & Passing Certificate', 'Aadhaar Card or Government Photo ID', '2 Passport Size Color Photographs'],
      admissionNote: 'Personal counselling is available to guide candidates into the most suitable business track.'
    },
    faqs: [
      { q: 'Can Arts or Science students join Business Administration and Accounting?', a: 'Yes. Our curriculum is tailored from first principles, ensuring students from any educational stream master accounting and management concepts smoothly.' },
      { q: 'Is there practical training on real business software?', a: 'Yes. Students work directly on licensed accounting and ERP platforms like Tally Prime, along with advanced spreadsheet modeling and POS billing software.' },
      { q: 'How does the Entrepreneurship track assist in obtaining business loans?', a: 'The course includes step-by-step guidance on drafting bank-ready project reports (DPR) and applying for government schemes such as PMEGP and Mudra loans.' },
      { q: 'Can I study these courses while working a day job?', a: 'Yes. Accredited BCSVE centers provide flexible weekend and evening batches specifically structured for working candidates.' },
      { q: 'Will I be prepared for interviews upon course completion?', a: 'Yes. Mock interview drills, resume building, and corporate presentation sessions are integrated into every business diploma program.' }
    ]
  },

  'vocational-applied-trades': {
    id: 'vocational',
    slug: 'vocational-applied-trades',
    title: 'Vocational & Applied Trades',
    tagline: 'Precision Craftsmanship, Electrical Systems & Hands-on Mastery',
    heroBadge: 'Directorate General of Training (DGT) Aligned Trades',
    category: 'Vocational',
    duration: '3 - 12 Months',
    level: 'Certificate / Diploma',
    mode: '100% Hands-on Workshop & Field Training',
    heroDescription:
      'Master essential technical and artisan trades: building electrification, sanitary plumbing, automotive engines, solar renewable systems, HVAC cooling, and fashion tailoring. Real machines, real tools.',
    theme: {
      primary: '#162544',
      accent: '#E5A93C',
      light: '#F8F9FC',
      tag: 'Blueprint & Trades',
      badgeColor: 'bg-amber-50 text-amber-900 border-amber-300',
    },
    quickFacts: [
      { label: 'Trade Duration', value: '3 - 12 Months', icon: 'Clock' },
      { label: 'Govt Approval', value: 'Act XXI 1860 (S.No.731/2010)', icon: 'Award' },
      { label: 'Regulated Fee', value: '3M: ₹800 | 6M: ₹1000 | 1Y: ₹1500', icon: 'Tag' },
      { label: 'Practical Ratio', value: '80% Workshop Practicals', icon: 'Wrench' },
      { label: 'Safety Protocols', value: '100% ISI & PPE Mandated', icon: 'ShieldCheck' },
      { label: 'Eligibility', value: '8th / 10th / 12th Pass', icon: 'GraduationCap' },
    ],
    workshopGauge: {
      practicalRatio: 80,
      theoryRatio: 20,
      totalHours: 480,
      labAccreditation: 'Equipped with Industry Machinery & Safety Gear'
    },
    subCourses: [
      {
        id: 'electrician-building-wiring',
        title: 'Electrician & Building Wiring Technician',
        code: 'VTC-01',
        duration: '6 - 12 Months',
        level: 'Diploma',
        mode: 'Workshop Hands-on + Field Practice',
        shortDescription:
          'Comprehensive training in single-phase and 3-phase domestic/commercial wiring, circuit breakers, earth pits, motor connections, and electrical blueprint reading.',
        skills: ['Conduit Wiring', 'MCB & ELCB Fitting', 'Earthing Installation', 'Motor Starters (DOL/Star-Delta)'],
        tools: ['Digital Multimeter', 'Insulated Pliers', 'Wire Strippers', 'Megger Tester', 'Conduit Benders'],
        modules: [
          { title: 'Electrical Safety, Ohm’s Law & Tool Handling', hours: '40 Hours', description: 'Shock prevention, first aid, circuit fundamentals, soldering, wiring color codes.' },
          { title: 'Domestic Concealed & Surface Conduit Wiring', hours: '80 Hours', description: 'Staircase wiring, godown wiring, distribution board assembly, MCB and RCCB sizing.' },
          { title: '3-Phase Industrial Power & Earth Pits', hours: '80 Hours', description: 'Plate and pipe earthing testing with Megger, 3-phase induction motor starters, cable jointing.' },
          { title: 'Inverter & Battery Backup Installation', hours: '40 Hours', description: 'Wiring pure sine wave inverters, tubular battery maintenance, surge protection.' }
        ],
        outcomes: [
          'Work as an authorized electrical contractor, maintenance wireman, or facility technician.'
        ]
      },
      {
        id: 'plumbing-sanitary-fitting',
        title: 'Plumbing & Modern Sanitary Engineering',
        code: 'VTC-02',
        duration: '3 - 6 Months',
        level: 'Certificate',
        mode: 'Plumbing Bay Practical',
        shortDescription:
          'Learn CPVC, UPVC, and GI pipe fitting, pressure testing, modern bathroom fixtures, drainage slopes, water pump installation, and leakage diagnostics.',
        skills: ['Pipe Threading & Solvent Welding', 'Sanitaryware Installation', 'Pressure Leak Testing', 'Pump Connections'],
        tools: ['Pipe Wrench', 'Pipe Threader (Die)', 'Hydrostatic Pressure Pump', 'Hex Hacksaw', 'Spirit Level'],
        modules: [
          { title: 'Piping Materials & Jointing Techniques', hours: '40 Hours', description: 'Working with CPVC solvent cement, UPVC push-fit, GI threaded joints, PPR heat fusion.' },
          { title: 'Sanitary Fixture Fitting & Concealed Plumbing', hours: '60 Hours', description: 'Wall-hung commodes, concealed diverters, shower panels, sensory faucets.' },
          { title: 'Drainage Systems, Traps & Septic Slopes', hours: '50 Hours', description: 'P-traps, S-traps, multi-floor soil waste pipes, grease traps, vent pipes.' }
        ],
        outcomes: [
          'Undertake high-value residential and commercial plumbing contracts with flawless execution.'
        ]
      },
      {
        id: 'automotive-two-wheeler',
        title: 'Automotive & Two-Wheeler Service Technician',
        code: 'VTC-03',
        duration: '6 Months',
        level: 'Certificate',
        mode: 'Automobile Workshop Lab',
        shortDescription:
          'Engine overhaul (2-stroke & 4-stroke), fuel injection (BS6 FI systems), disc brake servicing, electrical wiring, and EV scooter maintenance basics.',
        skills: ['BS6 Engine Diagnostics', 'Fuel Injector Cleaning', 'Brake & Clutch Overhaul', 'EV Motor Basics'],
        tools: ['OBD-II Diagnostic Scanner', 'Torque Wrench', 'Feeler Gauge', 'Compression Tester', 'Hydraulic Lift'],
        modules: [
          { title: 'Internal Combustion Engine Mechanics', hours: '45 Hours', description: 'Cylinder head, pistons, valves, camshaft timing, carburetor vs electronic fuel injection.' },
          { title: 'Transmission, Clutch & Suspension Systems', hours: '55 Hours', description: 'CVT automatic scooters, multi-plate wet clutch, telescopic fork oil replacement.' },
          { title: 'BS6 Electricals, Sensors & OBD Scanners', hours: '50 Hours', description: 'Reading error codes, throttle position sensors (TPS), O2 sensors, battery charging rectifiers.' }
        ],
        outcomes: [
          'Operate dealership service bays or start your own independent two-wheeler repair workshop.'
        ]
      },
      {
        id: 'cosmetology-beauty-care',
        title: 'Cosmetology & Professional Hair Styling',
        code: 'VTC-04',
        duration: '6 Months',
        level: 'Certificate',
        mode: 'Salon Studio Practical',
        shortDescription:
          'Master aesthetic skin therapies, bridal and HD makeup, hair coloring, keratin treatments, professional salon hygiene, and client management.',
        skills: ['HD Bridal Makeup', 'Hair Cutting & Rebonding', 'Skin Analysis & Facials', 'Salon Sterilisation'],
        tools: ['Professional Hair Dryers', 'Straighteners & Curlers', 'Airbrush Makeup Kit', 'Facial Steamer & Ozone Unit'],
        modules: [
          { title: 'Skin Anatomy, Types & Facial Therapies', hours: '45 Hours', description: 'Cleansing, exfoliation, extraction, lymphatic drainage facial massage, mask treatments.' },
          { title: 'Hair Design, Texturising & Chemical Treatments', hours: '60 Hours', description: 'Layered cuts, hair coloring formulation, keratin smoothing, scalp care.' },
          { title: 'Bridal Artistry & Studio Management', hours: '45 Hours', description: 'Contouring, eye makeup, draping, client consultation, salon sanitation.' }
        ],
        outcomes: [
          'Work as a professional makeup artist, salon stylist, or launch an independent beauty studio.'
        ]
      },
      {
        id: 'tailoring-fashion-design',
        title: 'Fashion Designing & Commercial Tailoring',
        code: 'VTC-05',
        duration: '6 - 12 Months',
        level: 'Diploma',
        mode: 'Sewing Studio Lab',
        shortDescription:
          'From pattern drafting and textile cutting to operating motorized industrial sewing machines, boutique garment stitching, embroidery, and designer finishing.',
        skills: ['Pattern Drafting', 'Industrial Stitching', 'Garment Grading', 'Boutique Designing'],
        tools: ['Industrial Lockstitch Machine', 'Overlock (Interlock) Machine', 'Drafting Curves', 'Steam Ironing Station'],
        modules: [
          { title: 'Textile Selection & Body Measurement Science', hours: '40 Hours', description: 'Fabric grainlines, shrinkage, taking accurate measurements, standard sizing charts.' },
          { title: 'Pattern Making & Drafting for Indian & Western Attire', hours: '70 Hours', description: 'Blouse drafting, Anarkali kurti, trousers, formal shirts, dresses, darts and seams.' },
          { title: 'Industrial Machine Operation & Finishing', hours: '60 Hours', description: 'High-speed sewing, concealed zippers, piping, necklines, presser foot attachments.' }
        ],
        outcomes: [
          'Establish a commercial tailoring boutique, designer studio, or work with apparel export units.'
        ]
      },
      {
        id: 'solar-panel-technician',
        title: 'Solar Panel Installation & Clean Energy Tech',
        code: 'VTC-06',
        duration: '3 - 6 Months',
        level: 'Certificate',
        mode: 'Rooftop Lab + Practical Bay',
        shortDescription:
          'In-demand clean energy trade: rooftop solar PV array sizing, tilt angles, solar inverters, net metering connections, and solar water pump systems.',
        skills: ['Solar PV Array Sizing', 'Rooftop Mounting', 'Inverter Synchronization', 'Solar Maintenance'],
        tools: ['Solar Irradiance Meter', 'Crimping Tool (MC4 Connectors)', 'Inclinometer', 'Safety Harness & Lanyard'],
        modules: [
          { title: 'Solar PV Principles & Site Feasibility Survey', hours: '35 Hours', description: 'Sun path calculation, shadow analysis, monocrystalline vs polycrystalline efficiency.' },
          { title: 'Mechanical Mounting & Structure Installation', hours: '45 Hours', description: 'Anchor bolting on RCC roofs, sheet metal clamps, tilt angle optimization.' },
          { title: 'Electrical Cabling, Grid-Tie Inverters & Earthing', hours: '50 Hours', description: 'DC cabling, string combiners, surge arrestors, net-metering grid interconnection.' }
        ],
        outcomes: [
          'Capitalize on government solar rooftop schemes (PM Surya Ghar) as a certified solar installer.'
        ]
      },
      {
        id: 'refrigeration-ac-hvac',
        title: 'Refrigeration & Air Conditioning (HVAC)',
        code: 'VTC-07',
        duration: '6 Months',
        level: 'Certificate',
        mode: 'HVAC Workshop Practical',
        shortDescription:
          'Split and inverter AC installation, refrigeration cycle, copper brazing, vacuum pumping, eco-friendly refrigerant gas charging (R32, R410A), and PCB troubleshooting.',
        skills: ['Copper Tube Brazing', 'Gas Charging (R32/R410A)', 'Inverter AC Troubleshooting', 'Compressor Testing'],
        tools: ['Manifold Gauge Set', 'Vacuum Pump', 'Oxy-Acetylene Brazing Torch', 'Flaring & Swaging Tool Kit', 'Clamp Meter'],
        modules: [
          { title: 'Thermodynamic Vapor Compression Cycle', hours: '40 Hours', description: 'Compressor, condenser, expansion valve, evaporator mechanics, pressure-temperature charts.' },
          { title: 'Copper Pipe Fabrication, Flaring & Brazing', hours: '50 Hours', description: 'Silver brazing, leak testing with nitrogen, creating flare joints for split ACs.' },
          { title: 'Vacuum Evacuation, Gas Charging & Inverter Diagnostics', hours: '60 Hours', description: 'Micron vacuum testing, weight-based refrigerant charging, BLDC motor PCB checks.' }
        ],
        outcomes: [
          'Work as a certified HVAC service technician or run a profitable seasonal and AMC repair business.'
        ]
      }
    ],
    tradeToolkit: [
      { id: 'multimeter', name: 'Digital Multimeter & Clamp Tester', trade: 'Electrician & Solar', use: 'Measures AC/DC voltage, continuity, amperage, and detects insulation breakdowns safely.' },
      { id: 'pipe-wrench', name: 'Heavy-Duty Pipe Wrench', trade: 'Plumbing & Sanitary', use: 'Applies immense torque to grip, tighten, and release threaded metallic and composite pipes.' },
      { id: 'manifold-gauge', name: 'Dual Manifold Refrigeration Gauge', trade: 'HVAC / AC Repair', use: 'Monitors low and high pressure gas lines during vacuuming, diagnostics, and refrigerant charging.' },
      { id: 'obd-scanner', name: 'OBD-II Automotive Diagnostic Tool', trade: 'Automotive Repairs', use: 'Interfaces with ECU sensors on BS6 engines to pinpoint sensor failures and reset trouble codes.' },
      { id: 'brazing-torch', name: 'Oxy-Acetylene Brazing Torch', trade: 'HVAC & Plumbing', use: 'Generates high-temperature pinpoint flames for hermetic copper-to-copper brazing joints.' },
      { id: 'industrial-sewing', name: 'Industrial High-Speed Lockstitch', trade: 'Fashion & Tailoring', use: 'Precision motorized stitching at 4,000 stitches/min through heavy denim, silks, and formal fabrics.' },
      { id: 'mc4-crimper', name: 'Solar MC4 Wire Crimper', trade: 'Solar Energy Tech', use: 'Forms waterproof, high-amperage terminal crimps on specialized DC solar photovoltaic cables.' },
      { id: 'styling-station', name: 'Thermal Hair & Facial Suite', trade: 'Cosmetology', use: 'Precise thermal styling and skin pore treatment with micro-steaming hygiene controls.' }
    ],
    safetyFirstPPE: [
      { item: 'ISI Certified Safety Helmet', standard: 'IS:2925 Mandate', note: 'Essential overhead protection in electrical sub-stations and rooftop solar installations.' },
      { item: '11kV Insulated Rubber Gloves', standard: 'IEC 60903 Rated', note: 'Mandatory dielectric protection against high-voltage flashovers and stray currents.' },
      { item: 'Steel-Toe Workshop Boots', standard: 'IS:15298 Compliant', note: 'Puncture-resistant soles and steel caps protecting feet from heavy dropped machinery.' },
      { item: 'Impact-Resistant Eye Goggles', standard: 'EN 166 Approved', note: 'UV and debris shielding during copper tube grinding, cutting, and welding sparks.' },
      { item: 'Full-Body Fall-Arrest Harness', standard: 'IS:3521 Class A', note: 'Mandatory dual-lanyard security when working on residential rooftops or high conduits.' }
    ],
    workshopToShop: [
      { step: '01', title: 'Trainee Apprentice', desc: 'Acquire rigorous tool fluency and hands-on muscle memory during accredited workshop training.' },
      { step: '02', title: 'Certified Field Technician', desc: 'Join authorized service centers or established contractors to master customer site troubleshooting.' },
      { step: '03', title: 'Site Supervisor / Lead Contractor', desc: 'Manage commercial installation crews, material purchasing, and project blueprint sign-offs.' },
      { step: '04', title: 'Independent Workshop / Shop Owner', desc: 'Launch your independent repair workshop, commercial dealership, or service contracting enterprise.' }
    ],
    workshopChecklist: [
      'Trade Skill Certificate & Government Udyam Registration',
      'Essential Field Toolkit & Portable Diagnostic Instruments',
      'Current Bank Account with Instant UPI QR Payment Facility',
      'Google My Business Listing for Local Service Search Discovery',
      'Local Vendor Partnerships for Wholesale Spare Parts Supply'
    ],
    eligibility: {
      qualification: '8th Standard, 10th Standard (SSC) or 12th Standard (HSC). High passion for hands-on technical skills.',
      ageLimit: 'Minimum 14 years. Suitable for school dropouts, freshers, and experienced artisans seeking certification.',
      documents: ['School Leaving Certificate / Marksheet', 'Aadhaar Card or Government Identity Document', '3 Recent Passport Size Photographs'],
      admissionNote: 'No prior technical background required. All workshops start with basic safety and tool handling.'
    },
    faqs: [
      { q: 'Is there classroom theory or is it mostly workshop practice?', a: 'Our vocational trades follow an 80% practical / 20% theory distribution. You spend the vast majority of course hours in dedicated training bays working on actual machinery, wiring panels, and engines.' },
      { q: 'Can I apply for an Electrical Wireman license with this certificate?', a: 'Yes. Candidates completing the Electrician trade certification are eligible to apply for state wireman examinations and licensing under applicable electrical licensing boards.' },
      { q: 'Are tools and raw materials provided in the workshop?', a: 'Yes. All machinery, testing meters, cables, pipes, and consumables used during regular practical classes are supplied by the training center.' },
      { q: 'What is the demand for Solar Panel Technicians currently?', a: 'With initiatives like PM Surya Ghar Muft Bijli Yojana, rooftop solar installation technicians are in extraordinary demand across residential and agricultural sectors.' },
      { q: 'Can I start my own repair shop immediately after graduation?', a: 'Yes. Every course includes business startup coaching, covering tool procurement, customer pricing, and how to register a local service business.' }
    ]
  }
};
