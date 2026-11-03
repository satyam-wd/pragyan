import React, { useState } from 'react';
import { FEST_EVENTS, FEST_METADATA, CAMPUS_BLOCKS } from '../data/festData';
import { FestEvent } from '../types';
import { Clock, MapPin, Award, Users, Phone, CheckCircle, ChevronDown, ChevronUp, Cpu, Satellite, Wrench, Shield } from 'lucide-react';

interface DepartmentTimelinePageProps {
  selectedDepartment: 'CS' | 'Electrical' | 'Mechanical';
  setSelectedDepartment: (dept: 'CS' | 'Electrical' | 'Mechanical') => void;
  onOpenRegister: (event: FestEvent) => void;
}

export default function DepartmentTimelinePage({
  selectedDepartment,
  setSelectedDepartment,
  onOpenRegister,
}: DepartmentTimelinePageProps) {
  const [expandedEventId, setExpandedEventId] = useState<string | null>(null);

  const deptMeta = FEST_METADATA.departments.find((d) => d.id === selectedDepartment)!;
  const blockMeta = CAMPUS_BLOCKS.find((b) => b.department.toLowerCase().includes(selectedDepartment.toLowerCase()))!;

  const deptEvents = FEST_EVENTS.filter((e) => e.department === selectedDepartment).sort(
    (a, b) => a.startTime.localeCompare(b.startTime)
  );

  const toggleExpand = (id: string) => {
    setExpandedEventId((prev) => (prev === id ? null : id));
  };

  const getAccentColors = (dept: 'CS' | 'Electrical' | 'Mechanical') => {
    if (dept === 'CS') {
      return {
        badge: 'text-cyan-400 bg-cyan-950/60 border-cyan-800/60',
        activeBtn: 'bg-cyan-500 text-slate-950',
        glow: 'border-cyan-500/40',
        line: 'bg-cyan-500/30',
        icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      };
    }
    if (dept === 'Electrical') {
      return {
        badge: 'text-amber-400 bg-amber-950/60 border-amber-800/60',
        activeBtn: 'bg-amber-500 text-slate-950',
        glow: 'border-amber-500/40',
        line: 'bg-amber-500/30',
        icon: <Satellite className="w-5 h-5 text-amber-400" />,
      };
    }
    return {
      badge: 'text-emerald-400 bg-emerald-950/60 border-emerald-800/60',
      activeBtn: 'bg-emerald-500 text-slate-950',
      glow: 'border-emerald-500/40',
      line: 'bg-emerald-500/30',
      icon: <Wrench className="w-5 h-5 text-emerald-400" />,
    };
  };

  const currentTheme = getAccentColors(selectedDepartment);

  return (
    <div className="space-y-8 pb-16 pt-4">
      
      {/* Top Department Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
            Block-Wise Event Timeline
          </span>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
            {deptMeta.name}
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {deptMeta.block} · Venue Schedule for 12 February 2026 (10:00 AM – 08:00 PM)
          </p>
        </div>

        {/* Segmented Department Selector */}
        <div className="flex items-center gap-1.5 p-1 bg-[#090d16] border border-slate-800 rounded-lg self-start sm:self-auto">
          {(['CS', 'Electrical', 'Mechanical'] as const).map((dept) => {
            const isActive = selectedDepartment === dept;
            return (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  isActive
                    ? currentTheme.activeBtn
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {dept === 'CS' ? 'CS (Block A)' : dept === 'Electrical' ? 'Electrical (Block B)' : 'Mechanical (Block C)'}
              </button>
            );
          })}
        </div>
      </div>

      {/* Block Information Card */}
      <div className="bg-[#0b0f1a] border border-slate-800 rounded-xl p-5 sm:p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center shrink-0">
              {currentTheme.icon}
            </div>
            <div>
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                {blockMeta.block} Facilities & Laboratories
              </div>
              <h2 className="font-display text-lg font-bold text-white mt-0.5">
                {deptMeta.focus}
              </h2>
              <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                <span className="text-slate-300">Venue Labs:</span>
                {blockMeta.facilities.map((fac, idx) => (
                  <span key={idx} className="bg-slate-900/90 border border-slate-800 px-2 py-0.5 rounded text-[11px] text-slate-300">
                    {fac}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="text-xs text-slate-400 border-t md:border-t-0 md:border-l border-slate-800 pt-3 md:pt-0 md:pl-6 space-y-1 shrink-0">
            <div>
              <span className="text-slate-300 font-medium">Department Coordinators:</span>
            </div>
            <div className="text-slate-400">{deptMeta.headCoordinator}</div>
            <div className="text-cyan-400 font-mono text-[11px]">Help Desk: Block Concierge Desk, Ground Floor</div>
          </div>
        </div>
      </div>

      {/* Chronological Timeline Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-xl font-bold text-white">
            Chronological Schedule & Registration Slots
          </h3>
          <span className="text-xs text-slate-400">
            {deptEvents.length} events scheduled in {deptMeta.block.split('(')[0].trim()}
          </span>
        </div>

        <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2 sm:before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-800">
          {deptEvents.map((event, index) => {
            const isExpanded = expandedEventId === event.id;

            return (
              <div key={event.id} className="relative">
                {/* Timeline node icon */}
                <div className="absolute -left-6 sm:-left-8 top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                </div>

                {/* Event timeline card */}
                <div className="bg-[#0b0f1a] border border-slate-800 rounded-xl p-5 transition-all hover:border-slate-700 shadow-sm">
                  
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="space-y-1">
                      {/* Unboxed Metadata Line (Rule 1.A) */}
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                        <span className="font-mono-tech text-cyan-400 font-semibold">{event.timeSlot}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-slate-300">{event.venue}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-emerald-400 font-medium">Prizes: {event.prizePool}</span>
                      </div>

                      <h4 className="font-display text-lg font-bold text-white mt-1">
                        {event.title}
                      </h4>

                      <p className="text-xs text-slate-300 leading-relaxed max-w-3xl mt-1">
                        {event.description}
                      </p>
                    </div>

                    {/* Registration Trigger CTA */}
                    <div className="shrink-0 flex items-center gap-2.5">
                      <button
                        onClick={() => onOpenRegister(event)}
                        className="px-4 py-2 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-sm transition-colors cursor-pointer whitespace-nowrap"
                      >
                        Register for this Slot
                      </button>
                    </div>
                  </div>

                  {/* Quick specs strip */}
                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-slate-400" />
                      <span>Team Size: <strong className="text-white">{event.teamSize}</strong></span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      <span>Registration: <strong className="text-emerald-400">{event.entryFee}</strong></span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Capacity: <strong className="text-white">{event.registeredCount}/{event.maxTeams} Teams Enrolled</strong></span>
                    </div>

                    <button
                      onClick={() => toggleExpand(event.id)}
                      className="ml-auto text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                    >
                      <span>{isExpanded ? 'Hide Rounds & Rules' : 'View Rounds & Rules'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* Expandable Rounds & Rules Accordion */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-slate-800 space-y-4 text-xs">
                      {/* Rounds */}
                      <div>
                        <h5 className="font-semibold text-slate-200 uppercase tracking-wider text-[11px] mb-2">
                          Competition Rounds Breakdown
                        </h5>
                        <div className="space-y-2">
                          {event.rounds.map((round, rIdx) => (
                            <div key={rIdx} className="p-3 rounded-lg bg-slate-900/80 border border-slate-800/80">
                              <div className="flex items-center justify-between text-slate-300 font-medium">
                                <span className="text-white">{round.title}</span>
                                <span className="font-mono text-cyan-400 text-[11px]">{round.time}</span>
                              </div>
                              <p className="text-slate-400 mt-1 text-[11px]">{round.details}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Rules */}
                      <div>
                        <h5 className="font-semibold text-slate-200 uppercase tracking-wider text-[11px] mb-2">
                          Evaluation Rules & Compliance
                        </h5>
                        <ul className="space-y-1.5 text-slate-400">
                          {event.rules.map((rule, ruIdx) => (
                            <li key={ruIdx} className="flex items-start gap-2">
                              <span className="text-cyan-400 mt-0.5">·</span>
                              <span>{rule}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Coordinators Contact */}
                      <div className="p-3 rounded-lg bg-[#080c14] border border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <Phone className="w-3.5 h-3.5 text-cyan-400" />
                          <span className="text-slate-300 font-medium">Event Coordinators:</span>
                          <span className="text-slate-400">
                            {event.coordinators.map((c) => `${c.name} (${c.phone})`).join(' · ')}
                          </span>
                        </div>
                        <button
                          onClick={() => onOpenRegister(event)}
                          className="px-3 py-1.5 text-xs font-semibold text-cyan-300 hover:text-white bg-cyan-950/80 border border-cyan-500/40 rounded-md transition-colors cursor-pointer"
                        >
                          Open Registration Form
                        </button>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
