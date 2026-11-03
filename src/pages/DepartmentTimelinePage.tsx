import React, { useState, useMemo } from 'react';
import { FEST_EVENTS, CULTURAL_GAMING_EVENTS } from '../data/festData';
import { FestEvent, CulturalGamingEvent } from '../types';
import {
  Calendar,
  Clock,
  MapPin,
  Search,
  Star,
  Award,
  Sparkles,
  Cpu,
  Satellite,
  Wrench,
  Music,
  Gamepad2,
  Flame,
  CheckCircle2
} from 'lucide-react';

interface DepartmentTimelinePageProps {
  onOpenRegister?: (event: FestEvent | CulturalGamingEvent) => void;
}

interface ScheduleRow {
  id: string;
  timeSlot: string;
  title: string;
  manch: string;
  manchCode: 'Tech-Pragyan' | 'Elec-Pragyan' | 'Mech-Pragyan' | 'Open Stage' | 'General';
  block: string;
  venue: string;
  duration: string;
  badge?: string;
  badgeType?: 'open_stage' | 'ai' | 'marathon' | 'working_model' | 'idea' | 'neutral';
  prize: string;
  isRegisteredEvent: boolean;
  eventRef?: FestEvent | CulturalGamingEvent;
}

export default function DepartmentTimelinePage({
  onOpenRegister,
}: DepartmentTimelinePageProps) {
  const [filterManch, setFilterManch] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Complete, authoritative master schedule for Pragyan 2026
  const allEventsSchedule: ScheduleRow[] = [
    {
      id: 'cult-morning-music',
      timeSlot: '10:00 AM – 10:30 AM',
      title: 'Aura of Cosmos: Opening Music & Singing Showcase',
      manch: 'Cultural Arts (Opening Ceremony)',
      manchCode: 'Open Stage',
      block: 'Central Quad',
      venue: 'Main Open Stage Amphitheatre',
      duration: '30 Minutes',
      badge: 'OPEN STAGE · 30 MIN INAUGURAL',
      badgeType: 'open_stage',
      prize: '₹10,000',
      isRegisteredEvent: true,
      eventRef: CULTURAL_GAMING_EVENTS.find((c) => c.id === 'cult-morning-music'),
    },
    {
      id: 'cult-it-garden-gaming',
      timeSlot: '10:30 AM – 07:00 PM',
      title: 'IT Garden Esports & Gaming Championship',
      manch: 'Esports & Gaming Arena',
      manchCode: 'Open Stage',
      block: 'IT Garden & Stage',
      venue: 'IT Garden Tech Pavilion & Arena',
      duration: 'All-Day Ongoing',
      badge: 'OPEN STAGE · ALL-DAY ESPORTS',
      badgeType: 'open_stage',
      prize: '₹40,000',
      isRegisteredEvent: true,
      eventRef: CULTURAL_GAMING_EVENTS.find((c) => c.id === 'cult-it-garden-gaming'),
    },
    {
      id: 'cs-ai-mantra',
      timeSlot: '10:30 AM – 01:30 PM',
      title: 'AI Mantra',
      manch: 'Tech-Pragyan (CS)',
      manchCode: 'Tech-Pragyan',
      block: 'Block A (Turing Center)',
      venue: 'AI & Machine Learning Lab 301',
      duration: '3 Hours',
      badge: 'AI-Based Event · 1st & 2nd Year',
      badgeType: 'ai',
      prize: '₹25,000',
      isRegisteredEvent: true,
      eventRef: FEST_EVENTS.find((e) => e.id === 'cs-ai-mantra'),
    },
    {
      id: 'ee-robo-flyies',
      timeSlot: '10:30 AM – 01:30 PM',
      title: 'Robo-Flyies',
      manch: 'Elec-Pragyan (EEE)',
      manchCode: 'Elec-Pragyan',
      block: 'Block B (Tesla Pavilion)',
      venue: 'Tesla Arena & Drone Flight Zone',
      duration: '3 Hours',
      badge: 'Open to All Students',
      badgeType: 'neutral',
      prize: '₹25,000',
      isRegisteredEvent: true,
      eventRef: FEST_EVENTS.find((e) => e.id === 'ee-robo-flyies'),
    },
    {
      id: 'mech-aavishkar',
      timeSlot: '10:30 AM – 01:30 PM',
      title: 'Aavishkar',
      manch: 'Mech-Pragyan (Mech)',
      manchCode: 'Mech-Pragyan',
      block: 'Block C (Da Vinci Lab)',
      venue: 'Da Vinci CAD/CAM Center 105',
      duration: '3 Hours',
      badge: 'Idea-Based Innovation',
      badgeType: 'idea',
      prize: '₹20,000',
      isRegisteredEvent: true,
      eventRef: FEST_EVENTS.find((e) => e.id === 'mech-aavishkar'),
    },
    {
      id: 'cs-code-yudh',
      timeSlot: '10:30 AM – 06:30 PM',
      title: 'Code Yudh',
      manch: 'Tech-Pragyan (CS)',
      manchCode: 'Tech-Pragyan',
      block: 'Block A (Turing Center)',
      venue: 'Turing Algorithmic Arena 204',
      duration: '8 Hours Marathon',
      badge: 'Non-AI Algorithmic · 3rd & 4th Year',
      badgeType: 'marathon',
      prize: '₹35,000',
      isRegisteredEvent: true,
      eventRef: FEST_EVENTS.find((e) => e.id === 'cs-code-yudh'),
    },
    {
      id: 'lunch-break',
      timeSlot: '01:30 PM – 02:30 PM',
      title: 'Cosmic Tech Lunch & Science Model Expo',
      manch: 'General Festivity',
      manchCode: 'General',
      block: 'Campus Promenade',
      venue: 'Central Quad & Open Food Court',
      duration: '1 Hour Break',
      badge: 'Food Court & Networking',
      badgeType: 'neutral',
      prize: 'Open to All',
      isRegisteredEvent: false,
    },
    {
      id: 'mech-nirman',
      timeSlot: '02:00 PM – 05:30 PM',
      title: 'Nirman',
      manch: 'Mech-Pragyan (Mech)',
      manchCode: 'Mech-Pragyan',
      block: 'Block C (Da Vinci Lab)',
      venue: 'Heavy Fabrication & Testing Arena',
      duration: '3.5 Hours',
      badge: 'Working Model Strictly Required',
      badgeType: 'working_model',
      prize: '₹30,000',
      isRegisteredEvent: true,
      eventRef: FEST_EVENTS.find((e) => e.id === 'mech-nirman'),
    },
    {
      id: 'ee-circuit-sangram',
      timeSlot: '02:30 PM – 05:30 PM',
      title: 'Circuit Sangram',
      manch: 'Elec-Pragyan (EEE)',
      manchCode: 'Elec-Pragyan',
      block: 'Block B (Tesla Pavilion)',
      venue: 'Power Electronics & Embedded Lab 101',
      duration: '3 Hours',
      badge: 'Hardware Circuit War',
      badgeType: 'neutral',
      prize: '₹20,000',
      isRegisteredEvent: true,
      eventRef: FEST_EVENTS.find((e) => e.id === 'ee-circuit-sangram'),
    },
    {
      id: 'awards-ceremony',
      timeSlot: '06:30 PM – 07:00 PM',
      title: 'Grand Technical Awards & Winners Felicitation',
      manch: 'All Departments & Manchs',
      manchCode: 'General',
      block: 'Central Campus Stage',
      venue: 'Turing Main Hall & Amphitheatre Stage',
      duration: '30 Minutes',
      badge: 'Trophies & Merit Badges',
      badgeType: 'neutral',
      prize: 'Felicitation',
      isRegisteredEvent: false,
    },
    {
      id: 'cult-open-stage-dance',
      timeSlot: '07:00 PM – 08:00 PM',
      title: 'Gravity Defied: Grand Finale Dance Extravaganza',
      manch: 'Cultural Arts (Festival Finale)',
      manchCode: 'Open Stage',
      block: 'Amphitheatre',
      venue: 'Main Open Stage Amphitheatre',
      duration: '1 Hour (Last 1 Hr)',
      badge: 'OPEN STAGE · GRAND FINALE',
      badgeType: 'open_stage',
      prize: '₹20,000',
      isRegisteredEvent: true,
      eventRef: CULTURAL_GAMING_EVENTS.find((c) => c.id === 'cult-open-stage-dance'),
    },
  ];

  // Filtering
  const filteredSchedule = useMemo(() => {
    return allEventsSchedule.filter((row) => {
      const matchManch =
        filterManch === 'All'
          ? true
          : filterManch === 'Open Stage'
          ? row.manchCode === 'Open Stage'
          : row.manchCode === filterManch;

      const q = searchQuery.toLowerCase().trim();
      const matchQuery =
        !q ||
        row.title.toLowerCase().includes(q) ||
        row.timeSlot.toLowerCase().includes(q) ||
        row.venue.toLowerCase().includes(q) ||
        row.manch.toLowerCase().includes(q) ||
        row.block.toLowerCase().includes(q);

      return matchManch && matchQuery;
    });
  }, [filterManch, searchQuery]);

  return (
    <div className="space-y-8 pb-16 pt-6">
      
      {/* Page Title & Overview */}
      <div className="border-b border-slate-800 pb-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
            <Calendar className="w-3.5 h-3.5" />
            <span>12 February 2026</span>
            <span aria-hidden="true">·</span>
            <Clock className="w-3.5 h-3.5" />
            <span>10:00 AM – 08:00 PM</span>
          </div>
          <h1 className="font-display text-2xl sm:text-4xl font-extrabold text-white mt-1">
            Event Schedule
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl leading-relaxed">
            Master timetable of all events of the day across Tech-Pragyan, Elec-Pragyan, Mech-Pragyan, and the Open Stage.
          </p>
        </div>

        {/* Quick Highlights Counter */}
        <div className="flex items-center gap-3 text-xs font-mono">
          <div className="px-3 py-1.5 rounded-lg bg-cyan-950/60 border border-cyan-800/80 text-cyan-300">
            <span>11 Total Slots</span>
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-purple-950/60 border border-purple-800/80 text-purple-300">
            <span>3 Open Stage</span>
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-800/80 text-emerald-300">
            <span>6 Tech Events</span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#090d16] border border-slate-800 rounded-lg">
          {[
            { id: 'All', label: 'All Events' },
            { id: 'Open Stage', label: '★ Open Stage' },
            { id: 'Tech-Pragyan', label: 'Tech-Pragyan (CS)' },
            { id: 'Elec-Pragyan', label: 'Elec-Pragyan (EEE)' },
            { id: 'Mech-Pragyan', label: 'Mech-Pragyan (Mech)' },
          ].map((tab) => {
            const isActive = filterManch === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setFilterManch(tab.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="relative min-w-[220px]">
          <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search schedule by event or lab..."
            className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg bg-[#0b0f1a] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
          />
        </div>
      </div>

      {/* Attractive Master Table of All Events */}
      <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-[#090d16] shadow-xl">
        <table className="w-full text-left text-xs">
          
          {/* Table Header */}
          <thead className="bg-[#0e1424] border-b border-slate-800 text-slate-400 font-mono text-[11px] uppercase tracking-wider">
            <tr>
              <th scope="col" className="px-4 py-3.5 font-semibold text-cyan-300">
                Time Slot
              </th>
              <th scope="col" className="px-4 py-3.5 font-semibold text-slate-200">
                Event Name & Format
              </th>
              <th scope="col" className="px-4 py-3.5 font-semibold text-slate-200 hidden md:table-cell">
                Department / Manch
              </th>
              <th scope="col" className="px-4 py-3.5 font-semibold text-slate-200 hidden sm:table-cell">
                Venue Location
              </th>
              <th scope="col" className="px-4 py-3.5 font-semibold text-slate-200 hidden lg:table-cell">
                Duration
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-slate-800/80">
            {filteredSchedule.map((row) => {
              const isOpenStage = row.manchCode === 'Open Stage';

              return (
                <tr
                  key={row.id}
                  className={`transition-colors hover:bg-slate-800/40 ${
                    isOpenStage ? 'bg-purple-950/20' : ''
                  }`}
                >
                  {/* Time Slot */}
                  <td className="px-4 py-3.5 whitespace-nowrap font-mono-tech text-cyan-400 font-bold text-xs">
                    {row.timeSlot}
                  </td>

                  {/* Event Name & Badges */}
                  <td className="px-4 py-3.5">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <span className="font-display font-bold text-white text-sm">
                          {row.title}
                        </span>
                        {row.badge && (
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${
                              isOpenStage
                                ? 'bg-purple-500/20 text-purple-300 border border-purple-400/40'
                                : row.badgeType === 'ai'
                                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40'
                                : row.badgeType === 'marathon'
                                ? 'bg-amber-500/20 text-amber-300 border border-amber-400/40'
                                : row.badgeType === 'working_model'
                                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/40'
                                : row.badgeType === 'idea'
                                ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-400/40'
                                : 'bg-slate-800 text-slate-300'
                            }`}
                          >
                            {isOpenStage && <Star className="w-2.5 h-2.5 text-amber-300 fill-amber-300" />}
                            {row.badge}
                          </span>
                        )}
                      </div>

                      {/* Mobile extra details */}
                      <div className="md:hidden text-[11px] text-slate-400 flex flex-wrap items-center gap-2">
                        <span>{row.manch}</span>
                        <span aria-hidden="true">·</span>
                        <span>{row.venue}</span>
                      </div>
                    </div>
                  </td>

                  {/* Department / Manch */}
                  <td className="px-4 py-3.5 whitespace-nowrap text-slate-300 hidden md:table-cell">
                    <span
                      className={`font-semibold text-xs ${
                        row.manchCode === 'Tech-Pragyan'
                          ? 'text-cyan-400'
                          : row.manchCode === 'Elec-Pragyan'
                          ? 'text-amber-400'
                          : row.manchCode === 'Mech-Pragyan'
                          ? 'text-emerald-400'
                          : row.manchCode === 'Open Stage'
                          ? 'text-purple-400'
                          : 'text-slate-400'
                      }`}
                    >
                      {row.manch}
                    </span>
                  </td>

                  {/* Venue Location */}
                  <td className="px-4 py-3.5 text-slate-400 hidden sm:table-cell">
                    <div className="flex items-center gap-1.5 text-xs">
                      <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      <span className="truncate max-w-[220px]">{row.venue}</span>
                    </div>
                  </td>

                  {/* Duration */}
                  <td className="px-4 py-3.5 whitespace-nowrap text-slate-400 font-mono text-[11px] hidden lg:table-cell">
                    {row.duration}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

    </div>
  );
}
