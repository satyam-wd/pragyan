export type DepartmentType = 'CS' | 'Electrical' | 'Mechanical' | 'Cultural' | 'All';

export interface FestEvent {
  id: string;
  title: string;
  department: 'CS' | 'Electrical' | 'Mechanical';
  category: 'Hackathon' | 'Design & CAD' | 'Hardware & Robotics' | 'Paper & Presentation' | 'Workshop & Lab' | 'Competitive Code';
  timeSlot: string; // e.g. "10:30 AM - 01:30 PM"
  startTime: string; // e.g. "10:30"
  endTime: string; // e.g. "13:30"
  block: string; // e.g. "Block A (Turing Quantum Lab)"
  venue: string; // e.g. "Lab 301, 3rd Floor"
  themeFocus: 'Space Tech' | 'Quantum Computing' | 'Science & Physics' | 'Interdisciplinary';
  description: string;
  shortDesc: string;
  teamSize: string; // e.g. "1 - 3 Members"
  maxTeams: number;
  registeredCount: number;
  prizePool: string; // e.g. "₹25,000"
  entryFee: string; // e.g. "Free" or "₹150/Team"
  coordinators: {
    name: string;
    phone: string;
    role: string;
  }[];
  rules: string[];
  rounds: {
    title: string;
    time: string;
    details: string;
  }[];
  prerequisites?: string[];
}

export interface CulturalGamingEvent {
  id: string;
  type: 'music' | 'gaming' | 'dance';
  title: string;
  timing: string; // e.g. "10:00 AM - 10:30 AM"
  venue: string; // e.g. "IT Garden" or "Main Open Stage"
  block: string;
  duration: string;
  description: string;
  scheduleSlot: 'Starting 30 Min' | 'All-Day (IT Garden)' | 'Last 1 Hour (Open Stage)';
  subCategories: string[];
  entryFee: string;
  prizePool: string;
  rules: string[];
  coordinators: {
    name: string;
    phone: string;
  }[];
}

export interface RegistrationRecord {
  regId: string;
  eventId: string;
  eventTitle: string;
  eventType: 'department' | 'cultural_gaming';
  department?: string;
  timeSlot: string;
  venue: string;
  participantName: string;
  email: string;
  phone: string;
  college: string;
  rollNo: string;
  year: string;
  teamName?: string;
  teamMembers?: string[];
  subCategory?: string;
  timestamp: string;
  status: 'Confirmed' | 'Waitlisted';
}

export type PageId = 'home' | 'departments' | 'timeline' | 'cultural' | 'passes';
