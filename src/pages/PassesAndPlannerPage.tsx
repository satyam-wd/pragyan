import React, { useState } from 'react';
import { RegistrationRecord, PageId } from '../types';
import { CAMPUS_BLOCKS } from '../data/festData';
import { Ticket, QrCode, Calendar, Clock, MapPin, Download, Trash2, Plus, CheckCircle, Navigation, AlertCircle } from 'lucide-react';

interface PassesAndPlannerPageProps {
  registrations: RegistrationRecord[];
  onDeleteRegistration: (regId: string) => void;
  onAddSamplePass: () => void;
  setActivePage: (page: PageId) => void;
}

export default function PassesAndPlannerPage({
  registrations,
  onDeleteRegistration,
  onAddSamplePass,
  setActivePage,
}: PassesAndPlannerPageProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string) => {
    navigator.clipboard?.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handlePrint = (pass: RegistrationRecord) => {
    window.print();
  };

  return (
    <div className="space-y-10 pb-16 pt-4">
      
      {/* Header */}
      <div className="border-b border-slate-800 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
            <Ticket className="w-3.5 h-3.5" />
            <span>Attendee Portal</span>
            <span aria-hidden="true">·</span>
            <span>Pragyan 2026 Passes</span>
          </div>
          <h1 className="font-display text-2xl sm:text-4xl font-bold text-white mt-1">
            My Fest Passes & Itinerary
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Access your confirmed registrations, QR entry credentials, and personalized hourly campus itinerary.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setActivePage('departments')}
            className="px-4 py-2 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-sm transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Register for More Events</span>
          </button>
        </div>
      </div>

      {/* Passes List Section */}
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-xl font-bold text-white">
            Confirmed Event Passes ({registrations.length})
          </h2>
          {registrations.length === 0 && (
            <button
              onClick={onAddSamplePass}
              className="text-xs text-cyan-400 hover:underline cursor-pointer"
            >
              Add a sample pass to preview
            </button>
          )}
        </div>

        {registrations.length === 0 ? (
          <div className="p-10 rounded-xl bg-[#0b0f1a] border border-slate-800 text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400">
              <Ticket className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-white">No Registered Passes Yet</h3>
              <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto">
                Explore events in the Computer Science, Electrical, or Mechanical departments or sign up for the IT Garden gaming and open stage dance.
              </p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => setActivePage('departments')}
                className="px-4 py-2 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer"
              >
                Browse Department Events
              </button>
              <button
                onClick={onAddSamplePass}
                className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 rounded-lg transition-colors cursor-pointer"
              >
                Load Demo Pass
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {registrations.map((pass) => (
              <div
                key={pass.regId}
                className="rounded-xl bg-[#0d1220] border border-slate-700/80 p-5 space-y-4 shadow-lg relative overflow-hidden"
              >
                {/* Visual tech watermark barcode accent on edge */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      PRAGYAN 2026 PASS
                    </span>
                    <div className="font-mono text-base font-bold text-cyan-400">
                      {pass.regId}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5" />
                      Confirmed
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="font-display text-lg font-bold text-white">
                    {pass.eventTitle}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="font-mono text-cyan-300">{pass.timeSlot}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-slate-400">{pass.venue}</span>
                  </div>
                </div>

                {/* Participant Details Box */}
                <div className="p-3 rounded-lg bg-[#070a12] border border-slate-800 grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-slate-500 block text-[10px]">Attendee:</span>
                    <span className="text-slate-200 font-medium truncate block">{pass.participantName}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px]">Roll No / College:</span>
                    <span className="text-slate-200 font-medium truncate block">{pass.rollNo} · {pass.college}</span>
                  </div>
                  {pass.teamName && (
                    <div className="col-span-2">
                      <span className="text-slate-500 block text-[10px]">Team:</span>
                      <span className="text-slate-200 truncate block">{pass.teamName}</span>
                    </div>
                  )}
                  {pass.subCategory && (
                    <div className="col-span-2">
                      <span className="text-slate-500 block text-[10px]">Track:</span>
                      <span className="text-slate-200 truncate block">{pass.subCategory}</span>
                    </div>
                  )}
                </div>

                {/* Digital QR Preview simulation & Actions */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded bg-white p-1 flex items-center justify-center">
                      <QrCode className="w-7 h-7 text-black" />
                    </div>
                    <div className="text-[11px] text-slate-400">
                      <span>Scan at venue entry</span>
                      <span className="block text-[10px] text-cyan-400 font-mono">12 Feb 2026</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCopy(pass.regId)}
                      className="px-2.5 py-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-md transition-colors cursor-pointer"
                    >
                      {copiedId === pass.regId ? 'Copied!' : 'Copy ID'}
                    </button>
                    <button
                      onClick={() => handlePrint(pass)}
                      className="p-1.5 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-md transition-colors cursor-pointer"
                      title="Print Pass"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onDeleteRegistration(pass.regId)}
                      className="p-1.5 text-rose-400 hover:text-rose-300 hover:bg-rose-950/60 rounded-md transition-colors cursor-pointer"
                      title="Cancel Pass"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>

      {/* Campus Map & Block Directory */}
      <div className="space-y-4 pt-6 border-t border-slate-800">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
              Venue Navigation
            </span>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mt-1">
              Campus Blocks Guide
            </h2>
          </div>
          <div className="text-xs text-slate-400 flex items-center gap-1.5">
            <Navigation className="w-3.5 h-3.5 text-cyan-400" />
            <span>Registration desk opens at 09:00 AM</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {CAMPUS_BLOCKS.map((b, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[#0b0f1a] border border-slate-800 space-y-2 text-xs"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono font-bold text-cyan-400">{b.block}</span>
                <span className="text-[11px] text-slate-400">{b.facilities.length} Rooms</span>
              </div>
              <h3 className="text-sm font-semibold text-white">{b.name}</h3>
              <p className="text-slate-400 text-[11px]">{b.department}</p>
              <div className="pt-2 border-t border-slate-800/80 space-y-1">
                <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">
                  Key Facilities:
                </span>
                <div className="flex flex-wrap gap-1">
                  {b.facilities.map((f, fIdx) => (
                    <span key={fIdx} className="bg-slate-900 border border-slate-800 px-1.5 py-0.5 rounded text-[10px] text-slate-300">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Help Desk & Guidelines Accordion */}
      <div className="p-5 rounded-xl bg-[#090d16] border border-slate-800 text-xs text-slate-400 space-y-2">
        <h4 className="font-semibold text-white text-sm">Pragyan 2026 Attendee Instructions</h4>
        <ul className="space-y-1.5">
          <li className="flex items-start gap-2">
            <span className="text-cyan-400">·</span>
            <span>All participants must carry their physical college ID card alongside their digital Pragyan QR pass.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-400">·</span>
            <span>Report to respective block verification desks 15 minutes prior to the announced start time.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-400">·</span>
            <span>Food court coupons and welcome fest kits will be distributed during morning check-in (10:00 AM - 11:00 AM).</span>
          </li>
        </ul>
      </div>

    </div>
  );
}
