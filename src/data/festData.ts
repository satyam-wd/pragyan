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
      name: 'Computer Science & Engineering',
      code: 'CS',
      block: 'Block A (Turing Quantum Center)',
      focus: 'Quantum Algorithms, Orbital AI, Post-Quantum Cryptography & Space Data Systems',
      eventCount: 4,
      color: 'cyan',
      headCoordinator: 'Dr. Aarav Menon (HOD-CSE) & Sneha Roy (Student Lead, 4th Year)'
    },
    {
      id: 'Electrical',
      name: 'Electrical & Electronics Engineering',
      code: 'EEE',
      block: 'Block B (Tesla Power & Sensor Pavilion)',
      focus: 'Superconducting Circuits, Satellite Power Arrays, Deep-Space RF & Microelectronics',
      eventCount: 4,
      color: 'amber',
      headCoordinator: 'Prof. K. Ramanathan & Rohan Varma (Student Lead, 4th Year)'
    },
    {
      id: 'Mechanical',
      name: 'Mechanical & Aerospace Engineering',
      code: 'MECH',
      block: 'Block C (Da Vinci Propulsion & Mechatronics Lab)',
      focus: 'Rocket Aerodynamics CAD, Lunar Rover Suspension, Cryogenic Fluids & Space Materials',
      eventCount: 4,
      color: 'emerald',
      headCoordinator: 'Dr. Meera Nambiar & Vikram Rathore (Student Lead, 4th Year)'
    }
  ]
};

export const FEST_EVENTS: FestEvent[] = [
  // Computer Science Events (Block A)
  {
    id: 'cs-quantum-hack',
    title: 'Qiskit Quantum Algorithms Hackathon',
    department: 'CS',
    category: 'Hackathon',
    timeSlot: '10:30 AM – 02:00 PM',
    startTime: '10:30',
    endTime: '14:00',
    block: 'Block A (Turing Quantum Center)',
    venue: 'Quantum Computing Laboratory 301, 3rd Floor',
    themeFocus: 'Quantum Computing',
    prizePool: '₹25,000',
    entryFee: 'Free',
    teamSize: '2 – 4 Members',
    maxTeams: 30,
    registeredCount: 22,
    shortDesc: 'Formulate quantum circuits using Qiskit or Cirq to solve Shor factoring benchmarks and Grover search challenges.',
    description: 'An intensive 3.5-hour algorithmic hackathon designed to test quantum logic gates, superposition optimization, and variational quantum eigensolvers (VQE). Datasets and quantum simulators (IBM Quantum / Pennylane) provided locally.',
    coordinators: [
      { name: 'Aditya Shenoy', phone: '+91 98450 12345', role: 'Technical Lead' },
      { name: 'Tanya Sengupta', phone: '+91 98450 12346', role: 'CS Logistics' }
    ],
    rules: [
      'Teams must consist of 2 to 4 registered college students.',
      'Laptops with Python 3.10+ and Qiskit / Cirq pre-installed are mandatory.',
      'Plagiarism checks enforced via automated AST evaluation.',
      'Final jury presentation includes circuit depth and gate count evaluation.'
    ],
    rounds: [
      { title: 'Round 1: Quantum Gate Sprint', time: '10:30 AM – 11:30 AM', details: 'Solve 3 fundamental qubit state transformation puzzles.' },
      { title: 'Round 2: Algorithm Deployment', time: '11:45 AM – 01:30 PM', details: 'Implement quantum error-mitigated circuit for optimization challenge.' },
      { title: 'Final Pitch & Evaluation', time: '01:30 PM – 02:00 PM', details: 'Jury presentation to CS research faculty.' }
    ],
    prerequisites: ['Basic linear algebra, Python programming, elementary quantum gates knowledge.']
  },
  {
    id: 'cs-orbital-ai',
    title: 'Orbital Trajectory & Satellite Imagery AI Challenge',
    department: 'CS',
    category: 'Competitive Code',
    timeSlot: '02:30 PM – 05:30 PM',
    startTime: '14:30',
    endTime: '17:30',
    block: 'Block A (Turing Quantum Center)',
    venue: 'High Performance Computing Center 204, 2nd Floor',
    themeFocus: 'Space Tech',
    prizePool: '₹20,000',
    entryFee: 'Free',
    teamSize: '1 – 3 Members',
    maxTeams: 40,
    registeredCount: 31,
    shortDesc: 'Train computer vision and deep learning models on real multi-spectral satellite telemetry and orbital debris tracks.',
    description: 'Participants receive high-resolution Sentinel & ISRO open-source imagery. Task: develop an edge-inference AI pipeline for real-time space debris collision forecasting and deforestation tracking.',
    coordinators: [
      { name: 'Rishabh Mehta', phone: '+91 98450 12347', role: 'AI Track Lead' },
      { name: 'Pooja Hegde', phone: '+91 98450 12348', role: 'Student Coordinator' }
    ],
    rules: [
      'Open to solo participants or teams of up to 3.',
      'GPU cloud notebooks (Kaggle/Colab) or local workstation GPUs allowed.',
      'Evaluation metrics: F1-score on held-out orbital dataset and inference latency.'
    ],
    rounds: [
      { title: 'Dataset Release & Model Architecture', time: '02:30 PM – 04:00 PM', details: 'Ingest space telemetry and fine-tune convolutional or ViT models.' },
      { title: 'Live Test Inference', time: '04:00 PM – 05:00 PM', details: 'Submit containerized predictions to automated test benchmark.' },
      { title: 'Leaderboard Finalization', time: '05:00 PM – 05:30 PM', details: 'Final accuracy audit and code walk-through.' }
    ]
  },
  {
    id: 'cs-crypto-ctf',
    title: 'Post-Quantum Cryptography & Zero-Knowledge CTF',
    department: 'CS',
    category: 'Competitive Code',
    timeSlot: '11:00 AM – 01:30 PM',
    startTime: '11:00',
    endTime: '13:30',
    block: 'Block A (Turing Quantum Center)',
    venue: 'Cyber Security & Network Lab 102, 1st Floor',
    themeFocus: 'Science & Physics',
    prizePool: '₹15,000',
    entryFee: 'Free',
    teamSize: '1 – 2 Members',
    maxTeams: 35,
    registeredCount: 26,
    shortDesc: 'Crack classical cryptographic vulnerabilities and defend with lattice-based post-quantum encryption algorithms.',
    description: 'Capture-the-Flag arena featuring 8 security challenges spanning RSA quantum vulnerability simulation, Kyber/Dilithium key exchange verification, and zero-knowledge proof verification.',
    coordinators: [
      { name: 'Karthik Rao', phone: '+91 98450 12349', role: 'CTF Master' },
      { name: 'Ananya Deshmukh', phone: '+91 98450 12350', role: 'Coordinator' }
    ],
    rules: [
      'Strictly individual or 2-person teams.',
      'Automated dynamic score board; first-blood points awarded for fastest unlocks.',
      'Attacking platform infrastructure results in immediate disqualification.'
    ],
    rounds: [
      { title: 'Flag Hunt Phase 1', time: '11:00 AM – 12:15 PM', details: 'Classical ciphers and quantum Shor demonstration vulnerabilities.' },
      { title: 'Flag Hunt Phase 2', time: '12:15 PM – 01:30 PM', details: 'Lattice-based encryption puzzles and signature verification.' }
    ]
  },
  {
    id: 'cs-telemetry-sim',
    title: 'Deep-Space Telemetry & Distributed Systems Paper Expo',
    department: 'CS',
    category: 'Paper & Presentation',
    timeSlot: '04:00 PM – 06:30 PM',
    startTime: '16:00',
    endTime: '18:30',
    block: 'Block A (Turing Quantum Center)',
    venue: 'Turing Seminar Hall 4, Ground Floor',
    themeFocus: 'Space Tech',
    prizePool: '₹12,000',
    entryFee: 'Free',
    teamSize: '1 – 3 Members',
    maxTeams: 20,
    registeredCount: 15,
    shortDesc: 'Research paper presentations on fault-tolerant delay-tolerant networks (DTN) and quantum communications for interplanetary missions.',
    description: 'Collegiate researchers present peer-reviewed style whitepapers before a panel of distinguished ISRO / DRDO visiting scientists and senior faculty.',
    coordinators: [
      { name: 'Dr. Shobha K.', phone: '+91 98450 12351', role: 'Faculty Advisor' },
      { name: 'Gaurav Joshi', phone: '+91 98450 12352', role: 'Technical Moderator' }
    ],
    rules: [
      'Maximum 10-minute presentation followed by 5-minute Q&A.',
      'Slides must follow IEEE standard template.'
    ],
    rounds: [
      { title: 'Presentations Batch A', time: '04:00 PM – 05:15 PM', details: 'Networking, Quantum Repeater, and Cryptography tracks.' },
      { title: 'Presentations Batch B', time: '05:15 PM – 06:30 PM', details: 'Distributed fault-tolerance and spacecraft operating systems.' }
    ]
  },

  // Electrical Department Events (Block B)
  {
    id: 'ee-solar-subsystem',
    title: 'CubeSat Solar Array & Power Management Design',
    department: 'Electrical',
    category: 'Design & CAD',
    timeSlot: '10:30 AM – 01:00 PM',
    startTime: '10:30',
    endTime: '13:00',
    block: 'Block B (Tesla Power Pavilion)',
    venue: 'Embedded Systems & Power Electronics Lab 101, 1st Floor',
    themeFocus: 'Space Tech',
    prizePool: '₹20,000',
    entryFee: 'Free',
    teamSize: '2 – 3 Members',
    maxTeams: 25,
    registeredCount: 19,
    shortDesc: 'Design an ultra-high efficiency Maximum Power Point Tracking (MPPT) circuit for CubeSat solar arrays experiencing orbital eclipse cycles.',
    description: 'Teams simulate and wire battery charge controllers for smallsats with fluctuating solar irradiance during low-earth orbit day/night passes. Altium / KiCAD / MATLAB Simulink provided.',
    coordinators: [
      { name: 'Deepak N.', phone: '+91 98450 12353', role: 'Power Systems Lead' },
      { name: 'Smriti Sen', phone: '+91 98450 12354', role: 'EEE Coordinator' }
    ],
    rules: [
      'Team members must bring college ID cards.',
      'Standard passive component kits provided on-site.',
      'Scored on power conversion efficiency, component footprint, and thermal dissipation.'
    ],
    rounds: [
      { title: 'Circuit Topology Simulation', time: '10:30 AM – 11:45 AM', details: 'SPICE simulation of buck-boost MPPT topology with eclipse transitions.' },
      { title: 'Breadboard Verification & Stress Test', time: '11:45 AM – 01:00 PM', details: 'Physical test bench testing with variable lux lamps and electronic loads.' }
    ]
  },
  {
    id: 'ee-quantum-sensor',
    title: 'Superconducting SQUID & Quantum Sensor Instrumentation',
    department: 'Electrical',
    category: 'Workshop & Lab',
    timeSlot: '01:30 PM – 04:00 PM',
    startTime: '13:30',
    endTime: '16:00',
    block: 'Block B (Tesla Power Pavilion)',
    venue: 'Advanced Microelectronics & Cleanroom Lab 202, 2nd Floor',
    themeFocus: 'Quantum Computing',
    prizePool: '₹15,000',
    entryFee: 'Free',
    teamSize: '1 – 3 Members',
    maxTeams: 30,
    registeredCount: 24,
    shortDesc: 'Hands-on lab exploring quantum magnetometry, Josephson junction fundamentals, and cryogenic readout amplifiers.',
    description: 'Explore how quantum physics translates into electrical engineering: detect femtotesla magnetic flux fluctuations using Superconducting Quantum Interference Device (SQUID) models and low-noise RF lock-in amplifiers.',
    coordinators: [
      { name: 'Dr. Vinay Murthy', phone: '+91 98450 12355', role: 'Lab In-charge' },
      { name: 'Harish Babu', phone: '+91 98450 12356', role: 'EEE Technical Team' }
    ],
    rules: [
      'Cleanroom booties and antistatic wristbands provided.',
      'Report submission at the end of the lab session counts as competitive evaluation.'
    ],
    rounds: [
      { title: 'Theory & Cryogenic Principles', time: '01:30 PM – 02:15 PM', details: 'Briefing on Cooper pairs and phase coherence in superconductivity.' },
      { title: 'Lock-in Signal Processing Challenge', time: '02:15 PM – 04:00 PM', details: 'Extract subterranean magnetic anomalies from noisy sensor feeds.' }
    ]
  },
  {
    id: 'ee-lunar-rover-circuit',
    title: 'Robo-Lunar Rover Autonomous Circuitry & Navigation',
    department: 'Electrical',
    category: 'Hardware & Robotics',
    timeSlot: '11:00 AM – 03:00 PM',
    startTime: '11:00',
    endTime: '15:00',
    block: 'Block B (Tesla Power Pavilion)',
    venue: 'Tesla Arena & Central Courtyard, Ground Floor',
    themeFocus: 'Space Tech',
    prizePool: '₹30,000',
    entryFee: 'Free',
    teamSize: '2 – 4 Members',
    maxTeams: 20,
    registeredCount: 18,
    shortDesc: 'Wire microcontrollers, IMUs, and motor drivers to steer an autonomous lunar rover prototype across an obstacle crater terrain.',
    description: 'Hardware showdown where rovers must navigate a 15-meter simulated lunar regolith obstacle course using ultrasonic, LiDAR, and edge microcontrollers without radio line-of-sight.',
    coordinators: [
      { name: 'Arjun Das', phone: '+91 98450 12357', role: 'Robotics Captain' },
      { name: 'Lavanya R.', phone: '+91 98450 12358', role: 'Arena Coordinator' }
    ],
    rules: [
      'Rover dimensions must not exceed 40cm x 40cm x 35cm.',
      'Maximum battery voltage: 12.6V (3S LiPo).',
      'Time penalties applied for boulder collisions or terrain rollover.'
    ],
    rounds: [
      { title: 'Technical Inspection & Weigh-in', time: '11:00 AM – 12:00 PM', details: 'Hardware compliance and safety inspection.' },
      { title: 'Crater Obstacle Course Trials', time: '12:30 PM – 03:00 PM', details: 'Timed runs on the crater arena.' }
    ]
  },
  {
    id: 'ee-deepspace-rf',
    title: 'Deep-Space RF Antenna Tuning & SDR Signal Interception',
    department: 'Electrical',
    category: 'Hardware & Robotics',
    timeSlot: '04:30 PM – 07:00 PM',
    startTime: '16:30',
    endTime: '19:00',
    block: 'Block B (Tesla Power Pavilion)',
    venue: 'High Frequency & Microwave Lab 304, 3rd Floor',
    themeFocus: 'Science & Physics',
    prizePool: '₹18,000',
    entryFee: 'Free',
    teamSize: '1 – 2 Members',
    maxTeams: 24,
    registeredCount: 17,
    shortDesc: 'Tune helical antennas and Software Defined Radios (SDR) to decode faint NOAA satellite signals and deep-space telemetry packets.',
    description: 'Using HackRF One and RTL-SDR dongles, teams inspect the RF spectrum to lock onto live satellite transponders, decode QPSK/BPSK constellations, and reconstruct telemetry frames.',
    coordinators: [
      { name: 'Pranav Kumar', phone: '+91 98450 12359', role: 'RF Specialist' },
      { name: 'Divya S.', phone: '+91 98450 12360', role: 'Student Coordinator' }
    ],
    rules: [
      'Open to solo or 2-member teams.',
      'SDR equipment and antennas supplied by department.'
    ],
    rounds: [
      { title: 'Antenna Impedance Matching (VNA)', time: '04:30 PM – 05:30 PM', details: 'Smith chart tuning for 433 MHz and 1.4 GHz bands.' },
      { title: 'Blind Signal Decoding Race', time: '05:45 PM – 07:00 PM', details: 'Intercept and decrypt secret mission telemetry packet.' }
    ]
  },

  // Mechanical Department Events (Block C)
  {
    id: 'mech-aerospace-cad',
    title: 'Propulsion Aerodynamics & Rocket Nozzle CADathon',
    department: 'Mechanical',
    category: 'Design & CAD',
    timeSlot: '10:30 AM – 01:30 PM',
    startTime: '10:30',
    endTime: '13:30',
    block: 'Block C (Da Vinci Propulsion Lab)',
    venue: 'Da Vinci CAD/CAM Center 105, 1st Floor',
    themeFocus: 'Space Tech',
    prizePool: '₹20,000',
    entryFee: 'Free',
    teamSize: '1 – 2 Members',
    maxTeams: 35,
    registeredCount: 28,
    shortDesc: 'Model supersonic de Laval rocket nozzles and aerospike contours using SolidWorks / Fusion 360 with CFD flow simulation.',
    description: 'Design challenge prioritizing thrust optimization, mach diamond mitigation, and structural mass reduction under high thermal gradients. Software provided on precision CAD workstations.',
    coordinators: [
      { name: 'Rahul Chawla', phone: '+91 98450 12361', role: 'CADathon Head' },
      { name: 'Bhavna Pillai', phone: '+91 98450 12362', role: 'Mech Coordinator' }
    ],
    rules: [
      'Individual or pairs.',
      'All modeling done from scratch during the session.',
      'Models judged on aerodynamic drag coefficient, mass index, and manufacturing feasibility.'
    ],
    rounds: [
      { title: 'Geometric Parameter Modeling', time: '10:30 AM – 12:00 PM', details: 'Contour generation from thermodynamic inputs.' },
      { title: 'CFD Flow Analysis & Mesh Optimization', time: '12:00 PM – 01:30 PM', details: 'Run pressure ratio simulations and optimize throat diameter.' }
    ]
  },
  {
    id: 'mech-rover-chassis',
    title: 'Mars Rover Rocker-Bogie Suspension Live Trials',
    department: 'Mechanical',
    category: 'Hardware & Robotics',
    timeSlot: '02:00 PM – 05:00 PM',
    startTime: '14:00',
    endTime: '17:00',
    block: 'Block C (Da Vinci Propulsion Lab)',
    venue: 'Heavy Fabrication & Testing Arena, Ground Floor',
    themeFocus: 'Space Tech',
    prizePool: '₹25,000',
    entryFee: 'Free',
    teamSize: '2 – 4 Members',
    maxTeams: 20,
    registeredCount: 16,
    shortDesc: 'Fabricate and stress-test 6-wheeled rocker-bogie kinematic suspensions over Martian soil trenches and stair climbs.',
    description: 'Real-world mechanical physics test: suspension mechanisms are evaluated on climb angle, ground clearance stability, chassis deflection under dynamic payload, and articulation efficiency.',
    coordinators: [
      { name: 'Mohit Sharma', phone: '+91 98450 12363', role: 'Chassis Lead' },
      { name: 'Ashwin Nair', phone: '+91 98450 12364', role: 'Safety Marshal' }
    ],
    rules: [
      'Rocker-bogie kinematic joints must be purely mechanical (no software active damping allowed).',
      'Payload weight test: each rover carries a mandatory 1.5kg scientific payload ballast.'
    ],
    rounds: [
      { title: 'Static Load & Angle of Repose Test', time: '02:00 PM – 03:15 PM', details: 'Tilt table testing up to 45 degrees.' },
      { title: 'Dynamic Crater & Boulder Traverse', time: '03:30 PM – 05:00 PM', details: 'Timed obstacle course navigation.' }
    ]
  },
  {
    id: 'mech-space-materials',
    title: 'Thermal Protection & Space Materials Science Seminar',
    department: 'Mechanical',
    category: 'Paper & Presentation',
    timeSlot: '11:30 AM – 01:30 PM',
    startTime: '11:30',
    endTime: '13:30',
    block: 'Block C (Da Vinci Propulsion Lab)',
    venue: 'Materials Science & Metallurgy Lab 201, 2nd Floor',
    themeFocus: 'Science & Physics',
    prizePool: '₹12,000',
    entryFee: 'Free',
    teamSize: '1 – 3 Members',
    maxTeams: 22,
    registeredCount: 18,
    shortDesc: 'Research showcase on carbon-carbon composites, aerogels, and ablative heat shields for atmospheric re-entry craft.',
    description: 'Students present theoretical and experimental findings on cryogenic thermal insulation, micro-meteorite shielding, and shape memory alloys for deployable satellite antennae.',
    coordinators: [
      { name: 'Dr. S. K. Venkat', phone: '+91 98450 12365', role: 'Faculty Chair' },
      { name: 'Nikhil Kashyap', phone: '+91 98450 12366', role: 'Coordinator' }
    ],
    rules: [
      'Standard presentation format: 8 minutes + 4 minutes question jury defense.',
      'Physical samples or microscopic SEM data bonus points.'
    ],
    rounds: [
      { title: 'Keynote & Presentations Batch', time: '11:30 AM – 01:30 PM', details: 'Sequential paper evaluation by visiting aerospace metallurgists.' }
    ]
  },
  {
    id: 'mech-cryo-3dprint',
    title: 'Cryogenic Fluid Dynamics & 3D Metal Printing Lab',
    department: 'Mechanical',
    category: 'Workshop & Lab',
    timeSlot: '05:00 PM – 07:00 PM',
    startTime: '17:00',
    endTime: '19:00',
    block: 'Block C (Da Vinci Propulsion Lab)',
    venue: 'Additive Manufacturing & Cryogenics Cell 302, 3rd Floor',
    themeFocus: 'Science & Physics',
    prizePool: '₹15,000',
    entryFee: 'Free',
    teamSize: '1 – 3 Members',
    maxTeams: 25,
    registeredCount: 21,
    shortDesc: 'Live demonstration of Selective Laser Melting (SLM) for titanium rocket impellers and liquid nitrogen cooling manifolds.',
    description: 'Witness industrial 3D metal printing in action: learn how complex internal lattice cooling channels impossible with traditional CNC milling are manufactured for space thrusters.',
    coordinators: [
      { name: 'Kunal Verma', phone: '+91 98450 12367', role: 'Lab Instructor' },
      { name: 'Priyanka Sen', phone: '+91 98450 12368', role: 'Mech Team' }
    ],
    rules: [
      'Safety goggles and lab coats mandatory (provided at entrance).',
      'Followed by rapid design challenge for additive rocket manifold.'
    ],
    rounds: [
      { title: 'Live Print Sequence & Cryo Quench', time: '05:00 PM – 06:00 PM', details: 'Observing laser sintering and thermal stress relief.' },
      { title: 'Topology Optimization Sprint', time: '06:00 PM – 07:00 PM', details: 'Design lightest manifold bracket under 100 bar pressure load.' }
    ]
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
  { time: '10:30 AM – 02:00 PM', title: 'Department Technical Morning Block Competitions', block: 'Blocks A, B & C' },
  { time: '01:30 PM – 02:30 PM', title: 'Cosmic Food Court & Science Exhibition Break', block: 'Central Promenade' },
  { time: '02:30 PM – 06:30 PM', title: 'Department Technical Afternoon Block Challenges', block: 'Blocks A, B & C' },
  { time: '06:30 PM – 07:00 PM', title: 'Technical Event Prize Distribution Ceremony', block: 'Turing Auditorium' },
  { time: '07:00 PM – 08:00 PM', title: 'Grand Finale Open Stage Dance (Last 1 hour)', block: 'Main Open Stage Amphitheatre' }
];

export const CAMPUS_BLOCKS = [
  {
    block: 'Block A',
    name: 'Turing Quantum Center',
    department: 'Computer Science & Engineering',
    color: 'border-cyan-500/40',
    facilities: ['Quantum Computing Lab 301', 'HPC Computing Arena 204', 'Cyber Security Lab 102', 'Seminar Hall 4'],
    eventsHosted: ['Quantum Hackathon', 'Orbital AI Challenge', 'Post-Quantum CTF', 'Space Telemetry Expo']
  },
  {
    block: 'Block B',
    name: 'Tesla Power & Sensor Pavilion',
    department: 'Electrical & Electronics Engineering',
    color: 'border-amber-500/40',
    facilities: ['Embedded Systems Lab 101', 'Advanced Cleanroom Lab 202', 'Tesla Outdoor Arena', 'Microwave RF Lab 304'],
    eventsHosted: ['CubeSat Solar MPPT', 'SQUID Quantum Sensors', 'Lunar Rover Circuitry', 'Deep-Space SDR Tuning']
  },
  {
    block: 'Block C',
    name: 'Da Vinci Propulsion & Mechatronics Lab',
    department: 'Mechanical & Aerospace Engineering',
    color: 'border-emerald-500/40',
    facilities: ['CAD/CAM Center 105', 'Heavy Fabrication Arena', 'Materials Testing Lab 201', '3D Additive Cell 302'],
    eventsHosted: ['Aerospace CADathon', 'Mars Rocker-Bogie Trials', 'Thermal Protection Seminar', 'Cryogenic 3D Printing']
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
