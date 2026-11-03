import React, { useState } from 'react';
import { FEST_EVENTS, CULTURAL_GAMING_EVENTS } from '../data/festData';
import { FestEvent, CulturalGamingEvent, RegistrationRecord, PageId } from '../types';
import {
  CheckCircle2,
  ArrowRight,
  Star,
  Sparkles,
  Search,
  Trash2,
  ArrowLeft,
  Clock,
  MapPin,
  ShieldCheck,
  User,
  Mail,
  Phone,
  School,
  Calendar,
  Users,
  Printer,
  FileCheck
} from 'lucide-react';

interface PassesAndPlannerPageProps {
  registrations: RegistrationRecord[];
  onDeleteRegistration: (regId: string) => void;
  onAddSamplePass?: () => void;
  setActivePage?: (page: PageId) => void;
  onOpenRegister?: (event: FestEvent | CulturalGamingEvent) => void;
  onRegisterSuccess?: (record: RegistrationRecord) => void;
}

export interface RegistrationTableRow {
  id: string;
  eventName: string;
  deptOrCategory: string;
  isOpenStage: boolean;
  criteria: string;
  timeSlot: string;
  venue: string;
  eventRef: FestEvent | CulturalGamingEvent;
}

export default function PassesAndPlannerPage({
  registrations,
  onDeleteRegistration,
  onRegisterSuccess,
}: PassesAndPlannerPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEvent, setSelectedEvent] = useState<RegistrationTableRow | null>(null);
  const [confirmedRecord, setConfirmedRecord] = useState<RegistrationRecord | null>(null);

  // Form states - strictly "little information"
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [college, setCollege] = useState('');
  const [yearOfStudy, setYearOfStudy] = useState('1st Year');
  const [teamName, setTeamName] = useState('');
  const [formError, setFormError] = useState('');

  // The 9 official events of Pragyan 2026: 6 department sub-events + 3 Open Stage events
  const registrationEvents: RegistrationTableRow[] = [
    {
      id: 'cs-ai-mantra',
      eventName: 'AI Mantra',
      deptOrCategory: 'Tech-Pragyan',
      isOpenStage: false,
      criteria: '1st & 2nd Year Students · AI-Based Event (3 Hours of Time)',
      timeSlot: '10:30 AM – 01:30 PM (3 Hours)',
      venue: 'Block A (Turing Center) · Lab 301',
      eventRef: FEST_EVENTS.find((e) => e.id === 'cs-ai-mantra')!,
    },
    {
      id: 'cs-code-yudh',
      eventName: 'Code Yudh',
      deptOrCategory: 'Tech-Pragyan',
      isOpenStage: false,
      criteria: '3rd & 4th Year Students · Non-AI Based Marathon (8 Hours of Time)',
      timeSlot: '10:30 AM – 06:30 PM (8 Hours)',
      venue: 'Block A (Turing Center) · Cyber Lab 204',
      eventRef: FEST_EVENTS.find((e) => e.id === 'cs-code-yudh')!,
    },
    {
      id: 'ee-robo-flyies',
      eventName: 'Robo-Flyies',
      deptOrCategory: 'Elec-Pragyan',
      isOpenStage: false,
      criteria: 'All Can Participate (Open to All Students) · 3 Hours of Time',
      timeSlot: '10:30 AM – 01:30 PM (3 Hours)',
      venue: 'Block B (Tesla Pavilion) · Robotics Arena',
      eventRef: FEST_EVENTS.find((e) => e.id === 'ee-robo-flyies')!,
    },
    {
      id: 'ee-circuit-sangram',
      eventName: 'Circuit Sangram',
      deptOrCategory: 'Elec-Pragyan',
      isOpenStage: false,
      criteria: 'Open to All Engineering Students · Hardware Circuit War (3 Hours of Time)',
      timeSlot: '02:00 PM – 05:00 PM (3 Hours)',
      venue: 'Block B (Tesla Pavilion) · Embedded Lab',
      eventRef: FEST_EVENTS.find((e) => e.id === 'ee-circuit-sangram')!,
    },
    {
      id: 'mech-aavishkar',
      eventName: 'Aavishkar',
      deptOrCategory: 'Mech-Pragyan',
      isOpenStage: false,
      criteria: 'Idea-Based Event · Innovation Pitch (No Prototype Required, 3 Hours of Time)',
      timeSlot: '10:30 AM – 01:30 PM (3 Hours)',
      venue: 'Block C (Da Vinci Propulsion Lab) · CAD Auditorium',
      eventRef: FEST_EVENTS.find((e) => e.id === 'mech-aavishkar')!,
    },
    {
      id: 'mech-nirman',
      eventName: 'Nirman',
      deptOrCategory: 'Mech-Pragyan',
      isOpenStage: false,
      criteria: 'Working Model Strictly Required · Functional Physical Model (3.5 Hours of Time)',
      timeSlot: '02:00 PM – 05:30 PM (3.5 Hours)',
      venue: 'Block C (Da Vinci Propulsion Lab) · Fabrication Workshop',
      eventRef: FEST_EVENTS.find((e) => e.id === 'mech-nirman')!,
    },
    {
      id: 'cult-morning-music',
      eventName: 'Opening Music & Singing Showcase',
      deptOrCategory: 'Open Stage',
      isOpenStage: true,
      criteria: 'Open Stage · All Can Participate · Solo & Duet Vocals / Instruments (Starting 30 Min)',
      timeSlot: '10:00 AM – 10:30 AM (Starting 30 Min)',
      venue: 'Main Open Stage Amphitheatre',
      eventRef: CULTURAL_GAMING_EVENTS.find((e) => e.id === 'cult-morning-music')!,
    },
    {
      id: 'cult-it-garden-gaming',
      eventName: 'IT Garden Esports & Gaming Championship',
      deptOrCategory: 'Open Stage',
      isOpenStage: true,
      criteria: 'Open Stage · All Can Participate · PC LAN, Mobile & Console (All-Day Ongoing)',
      timeSlot: '10:30 AM – 07:00 PM (All-Day Ongoing)',
      venue: 'IT Garden Tech Pavilion',
      eventRef: CULTURAL_GAMING_EVENTS.find((e) => e.id === 'cult-it-garden-gaming')!,
    },
    {
      id: 'cult-open-stage-dance',
      eventName: 'Grand Finale Open Stage Dance Extravaganza',
      deptOrCategory: 'Open Stage',
      isOpenStage: true,
      criteria: 'Open Stage · All Can Participate · Solo, Duet & College Crews (Last 1 Hour)',
      timeSlot: '07:00 PM – 08:00 PM (Last 1 Hour)',
      venue: 'Main Open Stage Amphitheatre',
      eventRef: CULTURAL_GAMING_EVENTS.find((e) => e.id === 'cult-open-stage-dance')!,
    },
  ];

  const handleSelectEventForRegistration = (item: RegistrationTableRow) => {
    setSelectedEvent(item);
    setConfirmedRecord(null);
    setFormError('');
    // Auto-align default year option if event specifies it
    if (item.id === 'cs-ai-mantra') {
      setYearOfStudy('1st Year');
    } else if (item.id === 'cs-code-yudh') {
      setYearOfStudy('3rd Year');
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedEvent) return;

    if (!fullName.trim() || !email.trim() || !phone.trim() || !college.trim()) {
      setFormError('Please fill in your name, email, phone number, and college name.');
      return;
    }

    const regId = `PRG26-${Math.floor(100000 + Math.random() * 900000)}`;
    const newRecord: RegistrationRecord = {
      regId,
      eventId: selectedEvent.id,
      eventTitle: selectedEvent.eventName,
      eventType: selectedEvent.isOpenStage ? 'cultural_gaming' : 'department',
      department: selectedEvent.deptOrCategory,
      timeSlot: selectedEvent.timeSlot,
      venue: selectedEvent.venue,
      participantName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      college: college.trim(),
      rollNo: 'CONFIRMED',
      year: yearOfStudy,
      teamName: teamName.trim() || undefined,
      timestamp: new Date().toISOString(),
      status: 'Confirmed',
    };

    if (onRegisterSuccess) {
      onRegisterSuccess(newRecord);
    }
    setConfirmedRecord(newRecord);
    setFormError('');
  };

  const handleResetForm = () => {
    setSelectedEvent(null);
    setConfirmedRecord(null);
    setFullName('');
    setEmail('');
    setPhone('');
    setCollege('');
    setTeamName('');
    setFormError('');
  };

  const filteredEvents = registrationEvents.filter((item) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      item.eventName.toLowerCase().includes(q) ||
      item.criteria.toLowerCase().includes(q) ||
      item.deptOrCategory.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-8 pb-16 pt-6">
      
      {/* =========================================================================
          VIEW 1: REGISTRATION CONFIRMED PASS CARD
         ========================================================================= */}
      {confirmedRecord && selectedEvent ? (
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <button
              onClick={handleResetForm}
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Events</span>
            </button>
            <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              Official Entry Pass
            </span>
          </div>

          <div className="text-center space-y-2">
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
              Registration Confirmed!
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              You are successfully registered for <span className="text-cyan-300 font-semibold">{confirmedRecord.eventTitle}</span>.
            </p>
          </div>

          {/* Pass Card Preview */}
          <div className="rounded-2xl bg-[#0d1220] border-2 border-cyan-500/40 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                  Pragyan 2026 · Digital Entry Badge
                </div>
                <div className="font-display text-xl sm:text-2xl font-bold text-white mt-0.5">
                  {confirmedRecord.eventTitle}
                </div>
                <div className="text-xs font-mono text-cyan-400 font-semibold mt-0.5">
                  {confirmedRecord.department}
                </div>
              </div>

              <div className="text-left sm:text-right bg-slate-900/80 sm:bg-transparent p-3 sm:p-0 rounded-lg border sm:border-0 border-slate-800">
                <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                  Registration Pass ID
                </div>
                <div className="font-mono text-lg sm:text-xl font-extrabold text-cyan-300">
                  {confirmedRecord.regId}
                </div>
              </div>
            </div>

            {/* Criteria Banner in Pass */}
            <div className="my-4 p-3 rounded-lg bg-cyan-950/30 border border-cyan-800/40 text-xs text-cyan-200">
              <span className="font-semibold text-white">Event Criteria: </span>
              {selectedEvent.criteria}
            </div>

            {/* Attendee Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-1">
              <div className="space-y-1">
                <span className="text-slate-400 block text-[11px] font-mono">Participant Name:</span>
                <span className="font-semibold text-white text-sm">{confirmedRecord.participantName}</span>
              </div>
              <div className="space-y-1">
                <span className="text-slate-400 block text-[11px] font-mono">College / Institute:</span>
                <span className="text-slate-200">{confirmedRecord.college}</span>
              </div>
              <div className="space-y-1">
                <span className="text-slate-400 block text-[11px] font-mono">Year of Study:</span>
                <span className="text-slate-200">{confirmedRecord.year}</span>
              </div>
              <div className="space-y-1">
                <span className="text-slate-400 block text-[11px] font-mono">Contact Details:</span>
                <span className="text-slate-200">{confirmedRecord.phone} · {confirmedRecord.email}</span>
              </div>
              <div className="space-y-1">
                <span className="text-slate-400 block text-[11px] font-mono">Timing Slot:</span>
                <span className="text-cyan-300 font-mono font-medium">{confirmedRecord.timeSlot}</span>
              </div>
              <div className="space-y-1">
                <span className="text-slate-400 block text-[11px] font-mono">Venue / Lab:</span>
                <span className="text-slate-200">{confirmedRecord.venue}</span>
              </div>
              {confirmedRecord.teamName && (
                <div className="sm:col-span-2 space-y-1">
                  <span className="text-slate-400 block text-[11px] font-mono">Team Name:</span>
                  <span className="text-amber-300 font-semibold">{confirmedRecord.teamName}</span>
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span>Date: 12 Feb 2026</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Verified Entry
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={handleResetForm}
              className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              ← Back to Event List
            </button>
            <button
              onClick={() => window.print()}
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save Pass</span>
            </button>
          </div>
        </div>
      ) : selectedEvent ? (
        /* =========================================================================
            VIEW 2: DEDICATED REGISTRATION FORM (FOR THE TAPPED EVENT)
           ========================================================================= */
        <div className="max-w-2xl mx-auto space-y-6">
          
          {/* Back Navigation Bar */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <button
              onClick={handleResetForm}
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Event Table</span>
            </button>
            <span className="text-[11px] font-mono text-slate-400">
              Tapped Event Registration
            </span>
          </div>

          {/* Prominent Tapped Event Summary Card */}
          <div className="rounded-2xl bg-[#0c111e] border border-cyan-500/30 p-5 sm:p-6 shadow-xl relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                {selectedEvent.deptOrCategory}
              </span>
              {selectedEvent.isOpenStage && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-extrabold uppercase bg-purple-500/20 text-purple-300 border border-purple-400/30">
                  <Star className="w-3 h-3 text-amber-300 fill-amber-300" />
                  Open Stage
                </span>
              )}
            </div>

            <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
              Register for {selectedEvent.eventName}
            </h1>

            {/* Criteria Banner */}
            <div className="mt-3 p-3.5 rounded-xl bg-slate-900/90 border border-slate-700/80">
              <div className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold mb-1">
                Criteria for this Event:
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed">
                {selectedEvent.criteria}
              </div>
            </div>

            {/* Timing & Venue details */}
            <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-300 font-mono">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>{selectedEvent.timeSlot}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>{selectedEvent.venue}</span>
              </div>
            </div>
          </div>

          {/* Little Information Form */}
          <div className="rounded-2xl bg-[#090d16] border border-slate-800 p-6 sm:p-7 shadow-xl">
            <div className="mb-5">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                <FileCheck className="w-4 h-4 text-cyan-400" />
                <span>Participant Details</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-white mt-1">
                Quick Registration Form
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Only little basic information is required to confirm your entry pass.
              </p>
            </div>

            {formError && (
              <div className="mb-5 p-3 rounded-lg bg-rose-950/60 border border-rose-800/80 text-rose-200 text-xs">
                {formError}
              </div>
            )}

            <form onSubmit={handleFormSubmit} className="space-y-4">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Full Name <span className="text-cyan-400">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Email Address <span className="text-cyan-400">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="student@college.edu"
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Mobile / WhatsApp No. <span className="text-cyan-400">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                    />
                  </div>
                </div>
              </div>

              {/* College / Institute */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  College / Institute Name <span className="text-cyan-400">*</span>
                </label>
                <div className="relative">
                  <School className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                    placeholder="e.g. National Institute of Technology"
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                </div>
              </div>

              {/* Year of Study (Quick Selector) */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Year of Study <span className="text-cyan-400">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['1st Year', '2nd Year', '3rd Year', '4th Year'].map((yr) => (
                    <button
                      key={yr}
                      type="button"
                      onClick={() => setYearOfStudy(yr)}
                      className={`py-2 px-3 text-xs font-medium rounded-lg border text-center transition-all cursor-pointer ${
                        yearOfStudy === yr
                          ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 font-bold shadow-sm'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                      }`}
                    >
                      {yr}
                    </button>
                  ))}
                </div>
              </div>

              {/* Optional Team Name */}
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5 flex items-center justify-between">
                  <span>Team Name <span className="text-slate-500 text-[11px]">(Optional for team participation)</span></span>
                  <Users className="w-3.5 h-3.5 text-slate-500" />
                </label>
                <input
                  type="text"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  placeholder="e.g. Cyber Warriors (leave blank if solo)"
                  className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400"
                />
              </div>

              {/* Form Actions */}
              <div className="pt-4 border-t border-slate-800 flex flex-col-reverse sm:flex-row items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={handleResetForm}
                  className="w-full sm:w-auto px-4 py-2.5 text-xs font-medium text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-sm transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Complete Registration for {selectedEvent.eventName}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          </div>

        </div>
      ) : (
        /* =========================================================================
            VIEW 3: THE 3-COLUMN REGISTRATION HERE TABLE
           ========================================================================= */
        <>
          {/* Header */}
          <div className="border-b border-slate-800 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Pragyan 2026 Portal</span>
              </div>
              <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-1">
                Registration Here
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
                Click register on any event block to open its quick registration form.
              </p>
            </div>

            {/* Quick Search */}
            <div className="relative w-full sm:w-64">
              <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search event or criteria..."
                className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg bg-[#0b0f1a] border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
            </div>
          </div>

          {/* Clean 3-Column Table: Name of Event, Criteria for the Event, Registration Option */}
          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-[#090d16] shadow-xl">
            <table className="w-full text-left text-xs">
              
              {/* Table Header */}
              <thead className="bg-[#0e1322] border-b border-slate-800 text-slate-300 font-mono text-[11px] uppercase tracking-wider">
                <tr>
                  <th scope="col" className="px-5 py-4 font-bold text-cyan-300 w-1/4 min-w-[200px]">
                    Name of Event
                  </th>
                  <th scope="col" className="px-5 py-4 font-bold text-slate-200 w-1/2 min-w-[280px]">
                    Criteria for the Event
                  </th>
                  <th scope="col" className="px-5 py-4 font-bold text-cyan-300 w-1/4 min-w-[170px] text-right sm:text-center">
                    Registration Option
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-slate-800/80">
                {filteredEvents.map((item) => {
                  const existingReg = registrations.find((r) => r.eventId === item.id);
                  const isRegistered = Boolean(existingReg);

                  return (
                    <tr
                      key={item.id}
                      className={`transition-colors hover:bg-slate-800/40 ${
                        item.isOpenStage ? 'bg-purple-950/10' : ''
                      }`}
                    >
                      {/* Column 1: Name of Event */}
                      <td className="px-5 py-4 align-middle">
                        <div
                          onClick={!item.isOpenStage ? () => handleSelectEventForRegistration(item) : undefined}
                          className={`space-y-1 ${!item.isOpenStage ? 'cursor-pointer group' : ''}`}
                        >
                          <div
                            className={`font-display text-sm sm:text-base font-bold text-white leading-tight ${
                              !item.isOpenStage ? 'group-hover:text-cyan-300 transition-colors' : ''
                            }`}
                          >
                            {item.eventName}
                          </div>
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="text-[10px] font-mono font-semibold text-slate-400">
                              {item.deptOrCategory}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Column 2: Criteria for the Event */}
                      <td className="px-5 py-4 align-middle text-slate-300 text-xs sm:text-sm leading-relaxed">
                        <div
                          onClick={!item.isOpenStage ? () => handleSelectEventForRegistration(item) : undefined}
                          className={`p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/80 font-medium ${
                            !item.isOpenStage ? 'hover:border-slate-700 cursor-pointer transition-colors' : ''
                          }`}
                        >
                          {item.criteria}
                        </div>
                      </td>

                      {/* Column 3: Registration Option */}
                      <td className="px-5 py-4 align-middle text-right sm:text-center whitespace-nowrap">
                        {item.isOpenStage ? (
                          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold bg-purple-500/20 text-purple-200 border border-purple-400/40 shadow-sm">
                            <Star className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                            <span>Open Stage</span>
                          </span>
                        ) : isRegistered && existingReg ? (
                          <div className="inline-flex items-center gap-2">
                            <button
                              onClick={() => {
                                setSelectedEvent(item);
                                setConfirmedRecord(existingReg);
                              }}
                              title="View Registration Pass"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 hover:bg-emerald-500/30 transition-colors shadow-sm cursor-pointer"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                              <span>Registered ✓</span>
                            </button>
                            <button
                              onClick={() => onDeleteRegistration(existingReg.regId)}
                              title="Cancel Registration"
                              className="p-1.5 text-slate-500 hover:text-rose-400 hover:bg-rose-950/30 rounded transition-colors cursor-pointer"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => handleSelectEventForRegistration(item)}
                            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold rounded-lg shadow-sm transition-all cursor-pointer bg-cyan-400 hover:bg-cyan-300 text-slate-950 shadow-cyan-900/20"
                          >
                            <span>Register</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>

            </table>
          </div>
        </>
      )}

    </div>
  );
}
