import React from 'react';
import { FestEvent } from '../types';
import { Clock, MapPin, Award, Users, ChevronRight } from 'lucide-react';

interface EventCardProps {
  event: FestEvent;
  onRegister: (event: FestEvent) => void;
  onViewDetails: (dept: 'CS' | 'Electrical' | 'Mechanical') => void;
}

export default function EventCard({ event, onRegister, onViewDetails }: EventCardProps) {
  const deptColor =
    event.department === 'CS'
      ? 'text-cyan-400'
      : event.department === 'Electrical'
      ? 'text-amber-400'
      : 'text-emerald-400';

  const borderColor =
    event.department === 'CS'
      ? 'hover:border-cyan-500/50'
      : event.department === 'Electrical'
      ? 'hover:border-amber-500/50'
      : 'hover:border-emerald-500/50';

  return (
    <div
      className={`group relative bg-[#0c101a] border border-slate-800 rounded-xl p-5 flex flex-col justify-between transition-all duration-200 ${borderColor} shadow-sm`}
    >
      <div>
        {/* Unboxed Metadata Line with typographic separators (Rule 1.A) */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
          <span className={`font-semibold ${deptColor}`}>{event.department} Engg</span>
          <span aria-hidden="true">·</span>
          <span>{event.block.split('(')[0].trim()}</span>
          <span aria-hidden="true">·</span>
          <span>{event.themeFocus}</span>
        </div>

        {/* Title */}
        <h3 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
          {event.title}
        </h3>

        {/* Short description */}
        <p className="mt-2 text-xs text-slate-300 leading-relaxed line-clamp-2">
          {event.shortDesc}
        </p>

        {/* Key Metrics / Scheduling metadata */}
        <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-1.5 text-xs text-slate-400">
          <div className="flex items-center gap-2 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="font-mono tabular-nums">{event.timeSlot}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate">{event.venue}</span>
          </div>
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <Award className="w-3.5 h-3.5" />
              <span>{event.prizePool}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-400">
              <Users className="w-3.5 h-3.5" />
              <span>{event.teamSize}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Strip */}
      <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between gap-3">
        <button
          onClick={() => onViewDetails(event.department)}
          className="text-xs font-medium text-slate-400 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
        >
          <span>Block details</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={() => onRegister(event)}
          className="px-3.5 py-1.5 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer whitespace-nowrap shadow-sm"
        >
          Register Form
        </button>
      </div>
    </div>
  );
}
