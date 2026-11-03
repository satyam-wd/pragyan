import { FestEvent, CulturalGamingEvent } from '../types';

export const FEST_METADATA = {
  name: 'Pragyan 2026',
  tagline: 'Annual Intercollegiate Festival of Space Technology, Quantum Computing & Empirical Science',
  date: '12 February 2026',
  day: 'Thursday',
  timing: '10:00 AM – 8:00 PM',
  venue: 'National Institute of Engineering Campus',
  totalPrizePool: '₹1,50,000+',
  departments: [
    {
      id: 'CS',
      name: 'Tech-Pragyan',
      subName: 'Computer Science & Engineering',
      code: 'CS',
      block: 'Block A (Turing Quantum Center)',
      focus: 'AI Mantra (1st/2nd Yr) & Code Yudh (3rd/4th Yr Marathon)',
      eventCount: 2,
      color: 'cyan',
      headCoordinator: 'Dr. Aarav Menon (HOD-CSE) & Sneha Roy (Student Lead)'
    },
    {
      id: 'Electrical',
      name: 'Elec-Pragyan',
      subName: 'Electrical & Electronics Engineering',
      code: 'EEE',
      block: 'Block B (Tesla Power Pavilion)',
      focus: 'Robo-Flyies (Open to All) & Circuit Sangram',
      eventCount: 2,
      color: 'amber',
      headCoordinator: 'Prof. K. Ramanathan & Rohan Varma (Student Lead)'
    },
    {
      id: 'Mechanical',
      name: 'Mech-Pragyan',
      subName: 'Mechanical & Aerospace Engineering',
      code: 'MECH',
      block: 'Block C (Da Vinci Propulsion Lab)',
      focus: 'Aavishkar (Idea-Based Innovation) & Nirman (Working Model)',
      eventCount: 2,
      color: 'emerald',
      headCoordinator: 'Dr. Meera Nambiar & Vikram Rathore (Student Lead)'
    }
  ]
};

export const FEST_EVENTS: FestEvent[] = [
  // Block 1: Tech-Pragyan (Computer Science - Block A)
  {
    id: 'cs-ai-mantra',
    title: 'AI Mantra',
    department: 'CS',
    category: 'Hackathon',
    timeSlot: '10:30 AM – 01:30 PM (3 Hours)',
    startTime: '10:30',
    endTime: '13:30',
    block: 'Block A (Turing Center)',
    venue: 'Turing AI & Machine Learning Lab 301, 3rd Floor',
    themeFocus: 'Quantum Computing',
    prizePool: '₹25,000',
    entryFee: 'Free',
    teamSize: '1 – 3 Members (1st & 2nd Year Students Only)',
    maxTeams: 35,
    registeredCount: 28,
    shortDesc: 'AI-based challenge exclusively for 1st & 2nd year students testing prompt craft, neural networks, and generative AI problem solving.',
    description: 'An exhilarating 3-hour AI competition designed specifically for 1st and 2nd year students. Solve multi-modal challenge problems using open AI models, prompt optimization, and computer vision classification.',
    coordinators: [
      { name: 'Aditya Shenoy', phone: '+91 98450 12345', role: 'AI Track Lead' },
      { name: 'Tanya Sengupta', phone: '+91 98450 12346', role: 'Student Coordinator' }
    ],
    rules: [
      'Exclusively open to 1st and 2nd year undergraduate students.',
      'Teams of 1 to 3 members.',
      'API keys and local compute workstations provided.',
      'Judged on AI solution creativity, prompt accuracy, and working inference.'
    ],
    rounds: [
      { title: 'Round 1: Prompt & Logic Sprint', time: '10:30 AM – 11:30 AM', details: 'Solve 3 generative prompt and vision puzzles.' },
      { title: 'Round 2: Model Prototype Build', time: '11:30 AM – 01:00 PM', details: 'Deploy real-time AI demo for the challenge statement.' },
      { title: 'Jury Evaluation', time: '01:00 PM – 01:30 PM', details: 'Project walk-through and winner announcement.' }
    ],
    prerequisites: ['College ID showing 1st or 2nd year enrollment. Basic Python knowledge recommended.']
  },
  {
    id: 'cs-code-yudh',
    title: 'Code Yudh',
    department: 'CS',
    category: 'Competitive Code',
    timeSlot: '10:30 AM – 06:30 PM (8 Hours Marathon)',
    startTime: '10:30',
    endTime: '18:30',
    block: 'Block A (Turing Center)',
    venue: 'Turing Algorithmic Arena & Cyber Lab 204, 2nd Floor',
    themeFocus: 'Space Tech',
    prizePool: '₹35,000',
    entryFee: 'Free',
    teamSize: '1 – 2 Members (3rd & 4th Year Students Only)',
    maxTeams: 40,
    registeredCount: 34,
    shortDesc: 'Non-AI based intense 8-hour competitive programming marathon for 3rd & 4th year coders. Pure data structures and algorithmic mastery.',
    description: 'The definitive battle of human logic: an unbroken 8-hour marathon of high-difficulty algorithmic challenges, dynamic programming, graphs, and system bottlenecks strictly without AI assistants, Copilot, or LLMs.',
    coordinators: [
      { name: 'Rishabh Mehta', phone: '+91 98450 12347', role: 'Code Yudh Master' },
      { name: 'Karthik Rao', phone: '+91 98450 12349', role: 'Technical Lead' }
    ],
    rules: [
      'Exclusively for 3rd and 4th year engineering students.',
      'Individual or pairs (max 2 members).',
      'Strictly NON-AI based: automated lockdown environment with anti-LLM proctoring.',
      'Languages allowed: C++, Java, Python, Rust, Go.'
    ],
    rounds: [
      { title: 'Wave 1: Data Structure Assault', time: '10:30 AM – 01:30 PM', details: 'Trees, segmented trees, and graph traversal under hard time limits.' },
      { title: 'Mid-Marathon Resupply Break', time: '01:30 PM – 02:00 PM', details: 'Energy drinks and food refreshments served.' },
      { title: 'Wave 2: Complex Dynamic Optimization', time: '02:00 PM – 05:30 PM', details: 'Advanced DP, flow networks, and NP-hard approximations.' },
      { title: 'Final Duel & Leaderboard Freeze', time: '05:30 PM – 06:30 PM', details: 'Head-to-head live benchmark defense.' }
    ],
    prerequisites: ['College ID showing 3rd or 4th year status.']
  },

  // Block 2: Elec-Pragyan (Electrical - Block B)
  {
    id: 'ee-robo-flyies',
    title: 'Robo-Flyies',
    department: 'Electrical',
    category: 'Hardware & Robotics',
    timeSlot: '10:30 AM – 01:30 PM (3 Hours)',
    startTime: '10:30',
    endTime: '13:30',
    block: 'Block B (Tesla Pavilion)',
    venue: 'Tesla Courtyard Arena & Drone Flight Zone, Ground Floor',
    themeFocus: 'Space Tech',
    prizePool: '₹25,000',
    entryFee: 'Free',
    teamSize: '1 – 4 Members (Open to All Students)',
    maxTeams: 30,
    registeredCount: 25,
    shortDesc: 'Autonomous & piloted aerial robotics drone challenge through 3D obstacle hoops. Open to all students from any year and branch.',
    description: 'Pilot or program quadcopters and micro-drones through a challenging 3D spatial obstacle course featuring magnetic wind tunnels, altitude gates, and precision landing targets. Open to everyone!',
    coordinators: [
      { name: 'Arjun Das', phone: '+91 98450 12357', role: 'Drone Flight Marshal' },
      { name: 'Lavanya R.', phone: '+91 98450 12358', role: 'Robotics Coordinator' }
    ],
    rules: [
      'Open to all students from any engineering branch or academic year.',
      'Teams of 1 to 4 members.',
      'Drones must weigh under 800 grams and pass safety motor inspection.',
      'Time penalties apply for touching hoop borders or safety netting.'
    ],
    rounds: [
      { title: 'Safety Check & Calibration', time: '10:30 AM – 11:15 AM', details: 'RF frequency pairing and rotor safety audit.' },
      { title: 'Time-Trial Obstacle Run', time: '11:15 AM – 01:00 PM', details: 'Timed navigation through precision gates.' },
      { title: 'Precision Landing Shootout', time: '01:00 PM – 01:30 PM', details: 'Final hover stability and landing challenge.' }
    ]
  },
  {
    id: 'ee-circuit-sangram',
    title: 'Circuit Sangram',
    department: 'Electrical',
    category: 'Design & CAD',
    timeSlot: '02:30 PM – 05:30 PM (3 Hours)',
    startTime: '14:30',
    endTime: '17:30',
    block: 'Block B (Tesla Pavilion)',
    venue: 'Power Electronics & Microelectronics Lab 101, 1st Floor',
    themeFocus: 'Science & Physics',
    prizePool: '₹20,000',
    entryFee: 'Free',
    teamSize: '1 – 3 Members',
    maxTeams: 35,
    registeredCount: 27,
    shortDesc: 'Fast-paced electronic circuit battle: schematic puzzle decoding, rapid breadboard wiring, and fault-finding under time pressure.',
    description: 'A 3-hour intense electronic circuit war! Teams receive scrambled circuit schematics with intentional faults, burned components, and missing logic gates. Diagnose, rewire, and produce correct oscilloscope waveforms.',
    coordinators: [
      { name: 'Deepak N.', phone: '+91 98450 12353', role: 'Circuit Master' },
      { name: 'Smriti Sen', phone: '+91 98450 12354', role: 'EEE Lead' }
    ],
    rules: [
      'Open to teams of up to 3 members.',
      'Multimeters, digital oscilloscopes, and components provided.',
      'Scoring based on speed, wiring neatness, and signal accuracy.'
    ],
    rounds: [
      { title: 'Round 1: Schematic Fault Hunt', time: '02:30 PM – 03:30 PM', details: 'Locate 5 deliberate errors in complex analog/digital circuit.' },
      { title: 'Round 2: Rapid Breadboard Sprint', time: '03:45 PM – 05:00 PM', details: 'Assemble working signal generator within 75 minutes.' },
      { title: 'Waveform Verification', time: '05:00 PM – 05:30 PM', details: 'Bench testing on Rigol digital oscilloscopes.' }
    ]
  },

  // Block 3: Mech-Pragyan (Mechanical - Block C)
  {
    id: 'mech-aavishkar',
    title: 'Aavishkar',
    department: 'Mechanical',
    category: 'Paper & Presentation',
    timeSlot: '10:30 AM – 01:30 PM (3 Hours)',
    startTime: '10:30',
    endTime: '13:30',
    block: 'Block C (Da Vinci Lab)',
    venue: 'Da Vinci CAD/CAM Center & Seminar Hall 105, 1st Floor',
    themeFocus: 'Space Tech',
    prizePool: '₹20,000',
    entryFee: 'Free',
    teamSize: '1 – 3 Members',
    maxTeams: 30,
    registeredCount: 24,
    shortDesc: 'Idea-based mechanical and space engineering innovation competition. Pitch novel concepts, CAD blueprints, and futuristic designs.',
    description: 'Unleash pure engineering imagination in Aavishkar: an idea-driven competition where innovators pitch breakthrough concepts in space robotics, green propulsion, bio-mechanics, or renewable energy before an expert panel.',
    coordinators: [
      { name: 'Rahul Chawla', phone: '+91 98450 12361', role: 'Innovation Chair' },
      { name: 'Bhavna Pillai', phone: '+91 98450 12362', role: 'Mech Coordinator' }
    ],
    rules: [
      'Idea-based presentation: physical working prototype not mandatory.',
      'CAD blueprints, 3D renders, or simulation data earn bonus points.',
      'Presentation duration: 8 minutes pitch + 4 minutes jury defense.'
    ],
    rounds: [
      { title: 'Idea Pitch Batch 1', time: '10:30 AM – 11:45 AM', details: 'Space propulsion and robotics concepts.' },
      { title: 'Idea Pitch Batch 2', time: '11:45 AM – 01:00 PM', details: 'Sustainable mechanical systems and smart materials.' },
      { title: 'Jury Deliberation & Feedback', time: '01:00 PM – 01:30 PM', details: 'Scores and innovation awards ceremony.' }
    ]
  },
  {
    id: 'mech-nirman',
    title: 'Nirman',
    department: 'Mechanical',
    category: 'Hardware & Robotics',
    timeSlot: '02:00 PM – 05:30 PM (3.5 Hours)',
    startTime: '14:00',
    endTime: '17:30',
    block: 'Block C (Da Vinci Lab)',
    venue: 'Heavy Fabrication & Testing Arena, Ground Floor',
    themeFocus: 'Space Tech',
    prizePool: '₹30,000',
    entryFee: 'Free',
    teamSize: '2 – 4 Members (Working Model Required)',
    maxTeams: 25,
    registeredCount: 20,
    shortDesc: 'Working physical model engineering competition. Teams must present a fully functional mechanical or mechatronics assembly.',
    description: 'Nirman celebrates real, physical craftsmanship! Participants must bring and demonstrate a working mechanical, mechatronic, or aerospace model (e.g. hydraulic arm, rocker-bogie mechanism, drone gimbal, Stirling engine).',
    coordinators: [
      { name: 'Mohit Sharma', phone: '+91 98450 12363', role: 'Nirman Arena Marshal' },
      { name: 'Ashwin Nair', phone: '+91 98450 12364', role: 'Safety In-charge' }
    ],
    rules: [
      'Working model is STRICTLY MANDATORY (no simulation-only or pure poster entries allowed).',
      'Model must operate safely on standard 230V AC or battery power.',
      'Judged on mechanical innovation, fabrication quality, durability, and live operational demonstration.'
    ],
    rounds: [
      { title: 'Static Safety & Build Inspection', time: '02:00 PM – 03:00 PM', details: 'Structural integrity and safety compliance check.' },
      { title: 'Live Functional Demonstration', time: '03:00 PM – 05:00 PM', details: 'Full operational demonstration under load before the jury.' },
      { title: 'Evaluation & Q&A', time: '05:00 PM – 05:30 PM', details: 'Defending mechanical calculations and fabrication choices.' }
    ],
    prerequisites: ['Mandatory fully functional physical working model or prototype.']
  }
];

// Cultural and Gaming Events specified in user note:
// 1. Music / Singing in starting 30 min (10:00 AM - 10:30 AM)
// 2. Gaming during all over event in IT Garden (10:30 AM - 7:00 PM)
// 3. Open stage dance in last 1 hour (7:00 PM - 8:00 PM)
export const CULTURAL_GAMING_EVENTS: CulturalGamingEvent[] = [
  {
    id: 'cult-morning-music',
    type: 'music',
    title: 'Aura of Cosmos: Inaugural Music & Singing Showcase',
    timing: '10:00 AM – 10:30 AM',
    duration: '30 Minutes (Opening Ceremony Slot)',
    scheduleSlot: 'Starting 30 Min',
    block: 'Central Open Air Quad / Main Stage',
    venue: 'Main Open Stage, Central Campus Lawn',
    description: 'Kicking off Pragyan 2026 with a high-energy 30-minute musical inauguration featuring classical-fusion instrumentals, cosmic synth solos, and vocal performances by top student artists.',
    subCategories: ['Solo Classical / Semi-Classical Vocal', 'Acoustic Indie Pop', 'Electronic & Cosmic Synth Instrumental', 'Western Solo / Duet'],
    prizePool: '₹10,000',
    entryFee: 'Free Registration',
    rules: [
      'Strict 3 to 4-minute time limit per performance to fit the 30-minute opening window.',
      'Sound check begins at 09:15 AM sharp.',
      'Microphones, DI boxes, and keyboard stand provided on stage.'
    ],
    coordinators: [
      { name: 'Aakash Bhattacharya', phone: '+91 98450 12371' },
      { name: 'Ritika Sharma', phone: '+91 98450 12372' }
    ]
  },
  {
    id: 'cult-it-garden-gaming',
    type: 'gaming',
    title: 'IT Garden Esports & Gaming Arena Championship',
    timing: '10:30 AM – 07:00 PM',
    duration: 'All-Day Tournament in IT Garden',
    scheduleSlot: 'All-Day (IT Garden)',
    block: 'IT Garden Tech Pavilion',
    venue: 'IT Garden Shaded Outdoor Pavilion & Esports Pods',
    description: 'The epicenter of collegiate competitive gaming! Running continuously from 10:30 AM to 7:00 PM under the high-tech canopies of the IT Garden. Featuring PC Esports, Mobile Combat, Console Showdowns, and Quantum Chess.',
    subCategories: [
      'Valorant 5v5 Tactical Shooter (PC LAN)',
      'BGMI / PUBG Mobile Squad Showdown',
      'EA Sports FC 25 / FIFA (PlayStation 5)',
      'Tekken 8 / Street Fighter 6 (Console)',
      'Quantum Speed Chess (Physical / Digital Blitz)'
    ],
    prizePool: '₹40,000',
    entryFee: 'Free / ₹100 per 5v5 Squad',
    rules: [
      'Tournaments run in parallel pools throughout the day in the IT Garden.',
      'Participants may bring their own gaming peripherals (mice, mechanical keyboards, headsets, controllers).',
      'Standard esports tournament rules enforced; toxic behavior results in forfeit.'
    ],
    coordinators: [
      { name: 'Samar Singhania', phone: '+91 98450 12373' },
      { name: 'Kunal Ghosh', phone: '+91 98450 12374' },
      { name: 'Varun Verma', phone: '+91 98450 12375' }
    ]
  },
  {
    id: 'cult-open-stage-dance',
    type: 'dance',
    title: 'Gravity Defied: Grand Finale Open Stage Dance Extravaganza',
    timing: '07:00 PM – 08:00 PM',
    duration: 'Last 1 Hour (Grand Fest Finale)',
    scheduleSlot: 'Last 1 Hour (Open Stage)',
    block: 'Main Open Stage Amphitheatre',
    venue: 'Open Air Amphitheatre, Main Stage Grounds',
    description: 'The electrifying culmination of Pragyan 2026! An open-stage 1-hour dance celebration featuring crew battles, hip-hop cyphers, contemporary space-themed routines, and high-octane freestyle jams.',
    subCategories: ['Solo Freestyle / Hip-Hop Cypher', 'College Crew Choreography (4 – 10 dancers)', 'Contemporary Space & Kinetic Dance', 'Open Stage Public Dance Jam'],
    prizePool: '₹20,000',
    entryFee: 'Free Registration',
    rules: [
      'Grand finale slot strictly from 07:00 PM to 08:00 PM under concert stage lighting.',
      'Music tracks must be submitted on pen drive to sound console by 05:00 PM.',
      'Props allowed provided they do not damage the stage surface.'
    ],
    coordinators: [
      { name: 'Zara Khan', phone: '+91 98450 12376' },
      { name: 'Naveen Raj', phone: '+91 98450 12377' }
    ]
  }
];

export const FEST_SCHEDULE_OVERVIEW = [
  { time: '09:00 AM – 10:00 AM', title: 'Campus Gate Check-in & Badge Kit Collection', block: 'Main Entrance & Registration Desk' },
  { time: '10:00 AM – 10:30 AM', title: 'Opening Music & Singing Ceremony (Starting 30 min)', block: 'Main Open Stage' },
  { time: '10:30 AM – 07:00 PM', title: 'All-Day IT Garden Gaming Arena Open', block: 'IT Garden Tech Pavilion' },
  { time: '10:30 AM – 01:30 PM', title: 'AI Mantra (Tech-Pragyan 1st/2nd Yr) & Robo-Flyies & Aavishkar', block: 'Blocks A, B & C' },
  { time: '10:30 AM – 06:30 PM', title: 'Code Yudh (Tech-Pragyan 3rd/4th Yr Marathon)', block: 'Block A (Turing Center)' },
  { time: '01:30 PM – 02:30 PM', title: 'Cosmic Food Court & Science Exhibition Break', block: 'Central Promenade' },
  { time: '02:00 PM – 05:30 PM', title: 'Nirman (Mech-Pragyan Working Model Demonstration)', block: 'Block C (Heavy Testing Arena)' },
  { time: '02:30 PM – 05:30 PM', title: 'Circuit Sangram (Elec-Pragyan Hardware War)', block: 'Block B (Power Lab 101)' },
  { time: '06:30 PM – 07:00 PM', title: 'Technical Event Prize Distribution Ceremony', block: 'Turing Auditorium' },
  { time: '07:00 PM – 08:00 PM', title: 'Grand Finale Open Stage Dance (Last 1 hour)', block: 'Main Open Stage Amphitheatre' }
];

export const CAMPUS_BLOCKS = [
  {
    block: 'Block A',
    name: 'Turing Quantum Center',
    department: 'Tech-Pragyan (Computer Science & Engineering)',
    color: 'border-cyan-500/40',
    facilities: ['AI & Machine Learning Lab 301', 'Algorithmic Arena 204', 'Seminar Hall 4'],
    eventsHosted: ['AI Mantra (1st/2nd Yr, 3h)', 'Code Yudh (3rd/4th Yr, 8h)']
  },
  {
    block: 'Block B',
    name: 'Tesla Power & Sensor Pavilion',
    department: 'Elec-Pragyan (Electrical & Electronics Engineering)',
    color: 'border-amber-500/40',
    facilities: ['Drone Flight Arena & Courtyard', 'Power Electronics & Embedded Lab 101'],
    eventsHosted: ['Robo-Flyies (Open to All, 3h)', 'Circuit Sangram (3h)']
  },
  {
    block: 'Block C',
    name: 'Da Vinci Propulsion & Mechatronics Lab',
    department: 'Mech-Pragyan (Mechanical & Aerospace Engineering)',
    color: 'border-emerald-500/40',
    facilities: ['CAD/CAM Center 105', 'Heavy Fabrication & Testing Arena'],
    eventsHosted: ['Aavishkar (Idea-based, 3h)', 'Nirman (Working Model, 3.5h)']
  },
  {
    block: 'IT Garden',
    name: 'IT Garden Gaming Pavilion',
    department: 'Esports & Gaming Arena',
    color: 'border-purple-500/40',
    facilities: ['Esports PC LAN Rig', 'Console Pods (PS5/Xbox)', 'Mobile Squad Canopies', 'Quantum Chess Tables'],
    eventsHosted: ['Valorant 5v5', 'BGMI Squads', 'FIFA 25 Championship', 'Tekken 8', 'Quantum Blitz Chess']
  },
  {
    block: 'Main Amphitheatre',
    name: 'Central Open Air Stage',
    department: 'Cultural Arts & Entertainment',
    color: 'border-rose-500/40',
    facilities: ['Concert Audio Array', 'Full Stage Intelligent Lighting', 'Lawn Amphitheatre Seating'],
    eventsHosted: ['Opening Music & Singing (10:00 - 10:30 AM)', 'Grand Finale Open Stage Dance (7:00 - 8:00 PM)']
  }
];
