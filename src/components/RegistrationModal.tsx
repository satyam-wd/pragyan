import React, { useState } from 'react';
import { FestEvent, CulturalGamingEvent, RegistrationRecord } from '../types';
import { X, CheckCircle, Calendar, Clock, MapPin, Users, Award, ShieldCheck } from 'lucide-react';

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
  const isGaming = isCultural && (event as CulturalGamingEvent).type === 'gaming';
  const isMusic = isCultural && (event as CulturalGamingEvent).type === 'music';
  const isDance = isCultural && (event as CulturalGamingEvent).type === 'dance';

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [college, setCollege] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [year, setYear] = useState('3rd Year');
  const [dept, setDept] = useState(
    'department' in event ? (event as FestEvent).department : 'Computer Science'
  );
  const [teamName, setTeamName] = useState('');
  const [teammates, setTeammates] = useState('');
  const [subCategory, setSubCategory] = useState(
    isCultural && (event as CulturalGamingEvent).subCategories.length > 0
      ? (event as CulturalGamingEvent).subCategories[0]
      : ''
  );
  const [submittedPass, setSubmittedPass] = useState<RegistrationRecord | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !phone.trim() || !college.trim()) {
      setErrorMsg('Please fill in all required participant details.');
      return;
    }

    const regId = `PRG26-${Math.floor(100000 + Math.random() * 900000)}`;
    const parsedTeammates = teammates
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const newRecord: RegistrationRecord = {
      regId,
      eventId: event.id,
      eventTitle: event.title,
      eventType: isCultural ? 'cultural_gaming' : 'department',
      department: 'department' in event ? (event as FestEvent).department : undefined,
      timeSlot,
      venue,
      participantName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      college: college.trim(),
      rollNo: rollNo.trim() || 'REG-PENDING',
      year,
      teamName: teamName.trim() || undefined,
      teamMembers: parsedTeammates.length > 0 ? parsedTeammates : undefined,
      subCategory: isCultural ? subCategory : undefined,
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
    setRollNo('');
    setTeamName('');
    setTeammates('');
    setErrorMsg('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#0c101a] border border-slate-700/80 rounded-xl shadow-2xl p-6 sm:p-8 my-8 text-slate-200">
        
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submittedPass ? (
          /* Confirmation & Ticket View */
          <div className="space-y-6 text-center py-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                Registration Confirmed
              </span>
              <h3 className="font-display text-2xl font-bold text-white mt-1">
                You are registered for {submittedPass.eventTitle}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Your entry badge has been generated. Show this registration code or digital QR at the venue entrance.
              </p>
            </div>

            {/* Pass Preview Card */}
            <div className="p-5 rounded-lg bg-[#111726] border border-slate-700 text-left space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Registration Pass ID</span>
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
                  <span className="text-slate-200">{submittedPass.college}</span>
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
                    <span className="text-slate-200">{submittedPass.teamName}</span>
                  </div>
                )}
                {submittedPass.subCategory && (
                  <div className="sm:col-span-2">
                    <span className="text-slate-400 block text-[11px]">Category / Track:</span>
                    <span className="text-slate-200">{submittedPass.subCategory}</span>
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
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                View in My Fest Passes
              </button>
              <button
                onClick={handleResetAndClose}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
              >
                Register Another Event
              </button>
            </div>
          </div>
        ) : (
          /* Registration Input Form */
          <div className="space-y-5">
            <div>
              <div className="flex items-center gap-2 text-xs text-cyan-400 font-mono uppercase tracking-wider">
                <span>12 Feb 2026</span>
                <span aria-hidden="true">·</span>
                <span>{'department' in event ? `${event.department} Department` : 'Festivity Arena'}</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-1">
                Register for {eventTitle}
              </h3>
              
              {/* Event brief banner */}
              <div className="mt-3 p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="font-mono">{timeSlot}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{venue}</span>
                </div>
                {'prizePool' in event && (
                  <div className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Prizes: {event.prizePool}</span>
                  </div>
                )}
                {'teamSize' in event && (
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-purple-400" />
                    <span>{event.teamSize}</span>
                  </div>
                )}
              </div>
            </div>

            {errorMsg && (
              <div className="p-3 rounded-md bg-rose-950/60 border border-rose-800/80 text-rose-200 text-xs">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Participant / Team Lead Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                </div>

                {/* College Email */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    College Email Address <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="student@college.edu"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Mobile / WhatsApp No. <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                </div>

                {/* College Name */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    College / Institute Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                    placeholder="e.g. National Institute of Technology"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                </div>

                {/* Student Roll / ID */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Roll No / Student ID
                  </label>
                  <input
                    type="text"
                    value={rollNo}
                    onChange={(e) => setRollNo(e.target.value)}
                    placeholder="e.g. 22CS084"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                </div>

                {/* Year of study */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Year of Study
                  </label>
                  <select
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 cursor-pointer"
                  >
                    <option value="1st Year">1st Year (B.Tech / B.Sc)</option>
                    <option value="2nd Year">2nd Year (B.Tech / B.Sc)</option>
                    <option value="3rd Year">3rd Year (B.Tech / B.Sc)</option>
                    <option value="4th Year">4th Year (B.Tech / B.Sc)</option>
                    <option value="Postgraduate">Postgraduate (M.Tech / Ph.D)</option>
                  </select>
                </div>
              </div>

              {/* Cultural or Gaming Subcategory Selection */}
              {isCultural && (event as CulturalGamingEvent).subCategories.length > 0 && (
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    {isGaming ? 'Select Tournament Game Track' : isMusic ? 'Vocal / Instrumental Track' : 'Dance Choreography Category'}
                  </label>
                  <select
                    value={subCategory}
                    onChange={(e) => setSubCategory(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 cursor-pointer"
                  >
                    {(event as CulturalGamingEvent).subCategories.map((sub, idx) => (
                      <option key={idx} value={sub}>
                        {sub}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Team Information if applicable */}
              {('teamSize' in event && event.teamSize !== '1 Member') || isGaming || isDance ? (
                <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-200">
                    <Users className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Team Details (Optional for Solo participants)</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">Team Name / Squad Tag</label>
                      <input
                        type="text"
                        value={teamName}
                        onChange={(e) => setTeamName(e.target.value)}
                        placeholder="e.g. Quantum Pioneers"
                        className="w-full px-3 py-1.5 text-xs rounded-md bg-slate-950 border border-slate-700 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">Teammate Names (comma-separated)</label>
                      <input
                        type="text"
                        value={teammates}
                        onChange={(e) => setTeammates(e.target.value)}
                        placeholder="e.g. Priya Roy, Ankit Rao"
                        className="w-full px-3 py-1.5 text-xs rounded-md bg-slate-950 border border-slate-700 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>
                </div>
              ) : null}

              {/* Submission Button */}
              <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-sm transition-colors cursor-pointer"
                >
                  Confirm Registration & Generate Pass
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
