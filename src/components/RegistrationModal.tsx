import React, { useState } from 'react';
import { FestEvent, CulturalGamingEvent, RegistrationRecord } from '../types';
import { X, CheckCircle, Clock, MapPin, ShieldCheck, User, Mail, Phone, School, ArrowRight, Printer } from 'lucide-react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: FestEvent | CulturalGamingEvent | null;
  onRegisterSuccess: (record: RegistrationRecord) => void;
  onViewPasses: () => void;
}

export default function RegistrationModal({
  isOpen,
  onClose,
  event,
  onRegisterSuccess,
  onViewPasses,
}: RegistrationModalProps) {
  if (!isOpen || !event) return null;

  const isCultural = 'scheduleSlot' in event;
  const eventTitle = event.title;
  const timeSlot = 'timeSlot' in event ? event.timeSlot : event.timing;
  const venue = `${event.block} · ${event.venue}`;

  // Get criteria description based on event
  const getEventCriteria = () => {
    if (event.id === 'cs-ai-mantra') return '1st & 2nd Year Students · AI-Based Event (3 Hours of Time)';
    if (event.id === 'cs-code-yudh') return '3rd & 4th Year Students · Non-AI Based Marathon (8 Hours of Time)';
    if (event.id === 'ee-robo-flyies') return 'All Can Participate (Open to All Students) · 3 Hours of Time';
    if (event.id === 'ee-circuit-sangram') return 'Open to All Engineering Students · Hardware Circuit War (3 Hours of Time)';
    if (event.id === 'mech-aavishkar') return 'Idea-Based Event · Innovation Pitch (No Prototype Required, 3 Hours of Time)';
    if (event.id === 'mech-nirman') return 'Working Model Strictly Required · Functional Physical Model (3.5 Hours of Time)';
    if (isCultural) return 'Open Stage · All Can Participate (Live Audience & Open Entry)';
    return 'Open to Registered College Participants';
  };

  const criteria = getEventCriteria();

  // Little Information inputs
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [college, setCollege] = useState('');
  const [year, setYear] = useState(
    event.id === 'cs-ai-mantra' ? '1st Year' : event.id === 'cs-code-yudh' ? '3rd Year' : '1st Year'
  );
  const [teamName, setTeamName] = useState('');
  const [submittedPass, setSubmittedPass] = useState<RegistrationRecord | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !phone.trim() || !college.trim()) {
      setErrorMsg('Please fill in your name, email, phone number, and college name.');
      return;
    }

    const regId = `PRG26-${Math.floor(100000 + Math.random() * 900000)}`;

    const newRecord: RegistrationRecord = {
      regId,
      eventId: event.id,
      eventTitle: event.title,
      eventType: isCultural ? 'cultural_gaming' : 'department',
      department: 'department' in event ? (event as FestEvent).department : 'Open Stage',
      timeSlot,
      venue,
      participantName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      college: college.trim(),
      rollNo: 'CONFIRMED',
      year,
      teamName: teamName.trim() || undefined,
      timestamp: new Date().toISOString(),
      status: 'Confirmed',
    };

    onRegisterSuccess(newRecord);
    setSubmittedPass(newRecord);
    setErrorMsg('');
  };

  const handleResetAndClose = () => {
    setSubmittedPass(null);
    setFullName('');
    setEmail('');
    setPhone('');
    setCollege('');
    setTeamName('');
    setErrorMsg('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#0c101a] border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-7 my-8 text-slate-200">
        
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submittedPass ? (
          /* Confirmation & Ticket View */
          <div className="space-y-5 text-center py-2">
            <div className="w-13 h-13 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400">
              <CheckCircle className="w-7 h-7" />
            </div>

            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
                Registration Confirmed
              </span>
              <h3 className="font-display text-2xl font-bold text-white mt-0.5">
                {submittedPass.eventTitle}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Your entry badge has been generated for Pragyan 2026.
              </p>
            </div>

            {/* Pass Preview Card */}
            <div className="p-5 rounded-xl bg-[#111726] border border-cyan-500/30 text-left space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Pass ID</span>
                  <div className="font-mono text-lg font-bold text-cyan-400">{submittedPass.regId}</div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Status</span>
                  <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1 justify-end">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Confirmed Entry
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-slate-400 block text-[11px]">Participant:</span>
                  <span className="font-semibold text-white">{submittedPass.participantName}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">College:</span>
                  <span className="text-slate-200">{submittedPass.college} ({submittedPass.year})</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Event Timing:</span>
                  <span className="text-cyan-300 font-mono">{submittedPass.timeSlot}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Venue:</span>
                  <span className="text-slate-200">{submittedPass.venue}</span>
                </div>
                {submittedPass.teamName && (
                  <div className="sm:col-span-2">
                    <span className="text-slate-400 block text-[11px]">Team Name:</span>
                    <span className="text-amber-300 font-medium">{submittedPass.teamName}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={() => {
                  handleResetAndClose();
                  onViewPasses();
                }}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                Back to Registration Table
              </button>
              <button
                onClick={() => window.print()}
                className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Pass</span>
              </button>
            </div>
          </div>
        ) : (
          /* Little Information Registration Form */
          <div className="space-y-4">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                Event Registration
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-0.5">
                {eventTitle}
              </h3>
              
              {/* Event Criteria & Brief Banner */}
              <div className="mt-2.5 p-3 rounded-lg bg-slate-900/90 border border-slate-700/80 space-y-1.5">
                <div className="text-xs text-slate-200 font-medium">
                  <span className="text-cyan-400 font-mono font-semibold">Criteria: </span>
                  {criteria}
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-slate-400 font-mono">
                  <div className="flex items-center gap-1 text-cyan-300">
                    <Clock className="w-3 h-3" />
                    <span>{timeSlot}</span>
                  </div>
                  <div className="flex items-center gap-1 text-amber-300">
                    <MapPin className="w-3 h-3" />
                    <span>{venue}</span>
                  </div>
                </div>
              </div>
            </div>

            {errorMsg && (
              <div className="p-2.5 rounded-lg bg-rose-950/60 border border-rose-800/80 text-rose-200 text-xs">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Full Name <span className="text-cyan-400">*</span>
                </label>
                <div className="relative">
                  <User className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Email Address <span className="text-cyan-400">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="student@college.edu"
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Mobile / WhatsApp No. <span className="text-cyan-400">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>
              </div>

              {/* College */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  College / Institute Name <span className="text-cyan-400">*</span>
                </label>
                <div className="relative">
                  <School className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                    placeholder="e.g. National Institute of Technology"
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              {/* Year of study */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Year of Study <span className="text-cyan-400">*</span>
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {['1st Year', '2nd Year', '3rd Year', '4th Year'].map((yr) => (
                    <button
                      key={yr}
                      type="button"
                      onClick={() => setYear(yr)}
                      className={`py-1.5 px-2 text-xs font-medium rounded-lg border text-center transition-colors cursor-pointer ${
                        year === yr
                          ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 font-bold'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {yr}
                    </button>
                  ))}
                </div>
              </div>

              {/* Optional Team Name */}
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  Team Name <span className="text-slate-500 text-[11px]">(Optional)</span>
                </label>
                <input
                  type="text"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  placeholder="e.g. Team Apex (optional)"
                  className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400"
                />
              </div>

              {/* Actions */}
              <div className="pt-3 flex items-center justify-end gap-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-bold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-sm transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>Confirm Registration</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
