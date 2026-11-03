import React from 'react';
import { FEST_EVENTS } from '../data/festData';
import { FestEvent, PageId } from '../types';
import { Cpu, Satellite, Wrench, Clock, MapPin, ArrowRight } from 'lucide-react';

interface DepartmentDirectoryPageProps {
  onOpenRegister: (event: FestEvent) => void;
  onSelectDepartmentForTimeline: (dept: 'CS' | 'Electrical' | 'Mechanical') => void;
  setActivePage: (page: PageId) => void;
}

export default function DepartmentDirectoryPage({
  onOpenRegister,
  onSelectDepartmentForTimeline,
  setActivePage,
}: DepartmentDirectoryPageProps) {

  // Three department blocks with exactly 2 sub-events each
  const departmentBlocks = [
    {
      id: 'CS' as const,
      name: 'Computer Science & Engineering',
      blockName: 'Block A · Turing Quantum Center',
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      borderColor: 'border-cyan-900/50 hover:border-cyan-500/50',
      tagColor: 'text-cyan-400 bg-cyan-950/60 border-cyan-800/60',
      subEvents: [
        FEST_EVENTS.find((e) => e.id === 'cs-quantum-hack')!,
        FEST_EVENTS.find((e) => e.id === 'cs-orbital-ai')!,
      ],
    },
    {
      id: 'Electrical' as const,
      name: 'Electrical & Electronics Engineering',
      blockName: 'Block B · Tesla Power & Sensor Pavilion',
      icon: <Satellite className="w-5 h-5 text-amber-400" />,
      borderColor: 'border-amber-900/50 hover:border-amber-500/50',
      tagColor: 'text-amber-400 bg-amber-950/60 border-amber-800/60',
      subEvents: [
        FEST_EVENTS.find((e) => e.id === 'ee-solar-subsystem')!,
        FEST_EVENTS.find((e) => e.id === 'ee-lunar-rover-circuit')!,
      ],
    },
    {
      id: 'Mechanical' as const,
      name: 'Mechanical & Aerospace Engineering',
      blockName: 'Block C · Da Vinci Propulsion Lab',
      icon: <Wrench className="w-5 h-5 text-emerald-400" />,
      borderColor: 'border-emerald-900/50 hover:border-emerald-500/50',
      tagColor: 'text-emerald-400 bg-emerald-950/60 border-emerald-800/60',
      subEvents: [
        FEST_EVENTS.find((e) => e.id === 'mech-aerospace-cad')!,
        FEST_EVENTS.find((e) => e.id === 'mech-rover-chassis')!,
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
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Select manch to represent yourself according to your interest
        </p>
      </div>

      {/* Exactly Three Department Blocks */}
      <div className="space-y-6">
        {departmentBlocks.map((dept) => {
          return (
            <div
              key={dept.id}
              className={`rounded-2xl bg-[#0b0f1a] border ${dept.borderColor} p-6 sm:p-7 space-y-5 transition-all shadow-md`}
            >
              {/* Department Block Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                    {dept.icon}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                      {dept.blockName}
                    </span>
                    <h2 className="font-display text-lg sm:text-xl font-bold text-white">
                      {dept.name}
                    </h2>
                  </div>
                </div>

                <button
                  onClick={() => handleBlockDetails(dept.id)}
                  className="text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer transition-colors self-start sm:self-auto"
                >
                  <span>View Full Block Schedule</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Two Sub-Events for this Department */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dept.subEvents.map((subEvent, idx) => (
                  <div
                    key={subEvent.id}
                    className="rounded-xl bg-[#07090e] border border-slate-800 hover:border-slate-700 p-4 flex flex-col justify-between space-y-3 transition-colors"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[10px] font-mono uppercase font-semibold text-slate-400">
                          Sub-Event 0{idx + 1}
                        </span>
                        <div className="flex items-center gap-1 font-mono-tech text-cyan-400 font-semibold text-xs">
                          <Clock className="w-3 h-3 shrink-0" />
                          <span>{subEvent.timeSlot}</span>
                        </div>
                      </div>

                      <h3 className="font-display text-sm sm:text-base font-bold text-white leading-snug">
                        {subEvent.title}
                      </h3>

                      <div className="flex items-center gap-1.5 text-xs text-slate-400 pt-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        <span className="truncate">{subEvent.venue}</span>
                      </div>
                    </div>

                    {/* Register button for sub-event */}
                    <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between">
                      <span className="text-emerald-400 text-xs font-medium">
                        Prizes: {subEvent.prizePool}
                      </span>
                      <button
                        onClick={() => onOpenRegister(subEvent)}
                        className="px-3.5 py-1.5 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-sm transition-colors cursor-pointer"
                      >
                        Register
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
