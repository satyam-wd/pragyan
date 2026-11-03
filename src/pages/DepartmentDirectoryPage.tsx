import React from 'react';
import { FEST_EVENTS } from '../data/festData';
import { FestEvent, PageId } from '../types';
import { Cpu, Satellite, Wrench, Clock, MapPin, ArrowRight, Sparkles, Users, Award } from 'lucide-react';

interface DepartmentDirectoryPageProps {
  onOpenRegister?: (event: FestEvent) => void;
  onSelectDepartmentForTimeline: (dept: 'CS' | 'Electrical' | 'Mechanical') => void;
  setActivePage: (page: PageId) => void;
}

export default function DepartmentDirectoryPage({
  onSelectDepartmentForTimeline,
  setActivePage,
}: DepartmentDirectoryPageProps) {

  const departmentBlocks = [
    {
      id: 'CS' as const,
      headline: 'Tech-Pragyan',
      deptSubtitle: 'Computer Science & Engineering',
      blockName: 'Block A · Turing Center',
      icon: <Cpu className="w-6 h-6 text-cyan-400" />,
      borderColor: 'border-cyan-800/60 hover:border-cyan-400/80',
      badgeColor: 'text-cyan-300 bg-cyan-950/70 border-cyan-800',
      subEvents: [
        {
          event: FEST_EVENTS.find((e) => e.id === 'cs-ai-mantra')!,
          badge: 'AI-Based Event',
          eligibility: '1st & 2nd Year Students',
          duration: '3 Hours of Time',
        },
        {
          event: FEST_EVENTS.find((e) => e.id === 'cs-code-yudh')!,
          badge: 'Non-AI Based Event',
          eligibility: '3rd & 4th Year Students',
          duration: '8 Hours Marathon',
        },
      ],
    },
    {
      id: 'Electrical' as const,
      headline: 'Elec-Pragyan',
      deptSubtitle: 'Electrical & Electronics Engineering',
      blockName: 'Block B · Tesla Pavilion',
      icon: <Satellite className="w-6 h-6 text-amber-400" />,
      borderColor: 'border-amber-800/60 hover:border-amber-400/80',
      badgeColor: 'text-amber-300 bg-amber-950/70 border-amber-800',
      subEvents: [
        {
          event: FEST_EVENTS.find((e) => e.id === 'ee-robo-flyies')!,
          badge: 'Aerial Robotics',
          eligibility: 'All Can Participate (Open to All)',
          duration: '3 Hours of Time',
        },
        {
          event: FEST_EVENTS.find((e) => e.id === 'ee-circuit-sangram')!,
          badge: 'Circuit Hardware War',
          eligibility: 'Open to All Engineering Students',
          duration: '3 Hours of Time',
        },
      ],
    },
    {
      id: 'Mechanical' as const,
      headline: 'Mech-Pragyan',
      deptSubtitle: 'Mechanical & Aerospace Engineering',
      blockName: 'Block C · Da Vinci Lab',
      icon: <Wrench className="w-6 h-6 text-emerald-400" />,
      borderColor: 'border-emerald-800/60 hover:border-emerald-400/80',
      badgeColor: 'text-emerald-300 bg-emerald-950/70 border-emerald-800',
      subEvents: [
        {
          event: FEST_EVENTS.find((e) => e.id === 'mech-aavishkar')!,
          badge: 'Idea-Based Event',
          eligibility: 'Innovation Pitch & CAD Concepts',
          duration: '3 Hours of Time',
        },
        {
          event: FEST_EVENTS.find((e) => e.id === 'mech-nirman')!,
          badge: 'Working Model Required',
          eligibility: 'Physical Functional Model Mandatory',
          duration: '3.5 Hours of Time',
        },
      ],
    },
  ];

  const handleBlockDetails = (deptId: 'CS' | 'Electrical' | 'Mechanical') => {
    onSelectDepartmentForTimeline(deptId);
    setActivePage('timeline');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-8 pb-16 pt-6">
      
      {/* Clean Page Header */}
      <div className="border-b border-slate-800 pb-4">
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-white">
          All Events
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
          Select manch to represent yourself according to your interest
        </p>
      </div>

      {/* Exactly Three Department Blocks */}
      <div className="space-y-7">
        {departmentBlocks.map((dept) => {
          return (
            <div
              key={dept.id}
              className={`rounded-2xl bg-[#0b0f1a] border ${dept.borderColor} p-6 sm:p-7 space-y-5 transition-all shadow-lg`}
            >
              {/* Department Block Header with requested Headline */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center shrink-0">
                    {dept.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                      {dept.blockName}
                    </span>
                    <h2 className="font-display text-2xl font-extrabold text-white tracking-tight">
                      {dept.headline}
                    </h2>
                    <span className="text-xs text-slate-400">
                      {dept.deptSubtitle}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleBlockDetails(dept.id)}
                  className="text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer transition-colors self-start sm:self-auto py-1"
                >
                  <span>View Timeline & Rounds</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Two Sub-Events for this Department */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dept.subEvents.map((item, idx) => {
                  const ev = item.event;
                  if (!ev) return null;

                  return (
                    <div
                      key={ev.id}
                      className="rounded-xl bg-[#07090e] border border-slate-800/90 hover:border-slate-700 p-5 flex flex-col justify-between space-y-4 transition-all"
                    >
                      <div className="space-y-2.5">
                        
                        {/* Sub-event index and duration header */}
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-[10px] font-mono uppercase font-bold text-slate-400">
                            Sub-Event 0{idx + 1}
                          </span>
                          <span className="font-mono-tech text-cyan-400 font-bold text-xs flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            <span>{item.duration}</span>
                          </span>
                        </div>

                        {/* Title */}
                        <div>
                          <h3 className="font-display text-xl font-extrabold text-white leading-tight">
                            {ev.title}
                          </h3>
                          <div className="mt-1 flex flex-wrap items-center gap-2 text-xs">
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-950/80 text-cyan-300 border border-cyan-800/60">
                              {item.badge}
                            </span>
                            <span className="text-slate-400 text-[11px]">
                              {item.eligibility}
                            </span>
                          </div>
                        </div>

                        {/* Timing and Venue info */}
                        <div className="pt-2 border-t border-slate-800/60 space-y-1.5 text-xs text-slate-300">
                          <div className="flex items-center gap-2">
                            <span className="text-slate-500 font-mono text-[11px]">Slot:</span>
                            <span className="font-mono-tech text-white">{ev.timeSlot}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                            <MapPin className="w-3 h-3 text-slate-500 shrink-0" />
                            <span className="truncate">{ev.venue}</span>
                          </div>
                          <p className="text-slate-400 text-xs leading-relaxed pt-1">
                            {ev.shortDesc}
                          </p>
                        </div>
                      </div>

                      {/* Footer Info */}
                      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                        <span className="text-emerald-400 text-xs font-semibold flex items-center gap-1">
                          <Award className="w-3.5 h-3.5" />
                          <span>Prizes: {ev.prizePool}</span>
                        </span>
                        <span className="text-[11px] font-mono text-slate-500">
                          {ev.entryFee} Entry
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
