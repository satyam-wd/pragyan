import React, { useState, useMemo } from 'react';
import { FEST_EVENTS, CULTURAL_GAMING_EVENTS } from '../data/festData';
import { FestEvent, CulturalGamingEvent, PageId } from '../types';
import {
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  Gamepad2,
  Trophy,
  Search,
  Star
} from 'lucide-react';

interface HomePageProps {
  setActivePage: (page: PageId) => void;
  setSelectedDepartment?: (dept: 'CS' | 'Electrical' | 'Mechanical') => void;
  onOpenRegister?: (event: FestEvent | CulturalGamingEvent) => void;
}

interface RoadmapItem {
  id: string;
  time: string;
  title: string;
  dept: string;
  venue: string;
  block: string;
  isOpenStage: boolean;
  isCultural: boolean;
  isBreak?: boolean;
}

export default function HomePage({
  setActivePage,
  setSelectedDepartment,
  onOpenRegister,
}: HomePageProps) {
  const [filterDept, setFilterDept] = useState<'All' | 'Open Stage' | 'Computer Science' | 'Electrical' | 'Mechanical'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Complete chronological event roadmap table dataset (synchronized with All Events page & Open Stage)
  const roadmapTableEvents: RoadmapItem[] = [
    {
      id: 'cult-morning-music',
      time: '10:00 AM – 10:30 AM',
      title: 'Opening Music & Singing Showcase',
      dept: 'Cultural Arts',
      venue: 'Main Open Stage Amphitheatre',
      block: 'Open Stage',
      isOpenStage: true,
      isCultural: true,
    },
    {
      id: 'cult-it-garden-gaming',
      time: '10:30 AM – 07:00 PM',
      title: 'IT Garden Esports & Gaming Championship',
      dept: 'Esports Arena',
      venue: 'IT Garden Tech Pavilion & Stage',
      block: 'Open Stage',
      isOpenStage: true,
      isCultural: true,
    },
    {
      id: 'cs-ai-mantra',
      time: '10:30 AM – 01:30 PM (3h)',
      title: 'AI Mantra (1st & 2nd Year AI Event)',
      dept: 'Tech-Pragyan (CS)',
      venue: 'Turing AI & Machine Learning Lab 301',
      block: 'Block A',
      isOpenStage: false,
      isCultural: false,
    },
    {
      id: 'ee-robo-flyies',
      time: '10:30 AM – 01:30 PM (3h)',
      title: 'Robo-Flyies (Open to All Students)',
      dept: 'Elec-Pragyan (EEE)',
      venue: 'Tesla Arena & Drone Flight Zone',
      block: 'Block B',
      isOpenStage: false,
      isCultural: false,
    },
    {
      id: 'mech-aavishkar',
      time: '10:30 AM – 01:30 PM (3h)',
      title: 'Aavishkar (Idea-Based Innovation)',
      dept: 'Mech-Pragyan (Mech)',
      venue: 'Da Vinci CAD/CAM Center 105',
      block: 'Block C',
      isOpenStage: false,
      isCultural: false,
    },
    {
      id: 'cs-code-yudh',
      time: '10:30 AM – 06:30 PM (8h)',
      title: 'Code Yudh (3rd & 4th Year Marathon)',
      dept: 'Tech-Pragyan (CS)',
      venue: 'Turing Algorithmic Arena 204',
      block: 'Block A',
      isOpenStage: false,
      isCultural: false,
    },
    {
      id: 'mech-nirman',
      time: '02:00 PM – 05:30 PM (3.5h)',
      title: 'Nirman (Working Model Required)',
      dept: 'Mech-Pragyan (Mech)',
      venue: 'Heavy Fabrication & Testing Arena',
      block: 'Block C',
      isOpenStage: false,
      isCultural: false,
    },
    {
      id: 'ee-circuit-sangram',
      time: '02:30 PM – 05:30 PM (3h)',
      title: 'Circuit Sangram (Hardware War)',
      dept: 'Elec-Pragyan (EEE)',
      venue: 'Power Electronics Lab 101',
      block: 'Block B',
      isOpenStage: false,
      isCultural: false,
    },
    {
      id: 'cult-open-stage-dance',
      time: '07:00 PM – 08:00 PM',
      title: 'Gravity Defied: Grand Finale Dance Extravaganza',
      dept: 'Cultural Arts',
      venue: 'Main Open Stage Amphitheatre',
      block: 'Open Stage',
      isOpenStage: true,
      isCultural: true,
    },
  ];

  // Filtering
  const filteredEvents = useMemo(() => {
    return roadmapTableEvents.filter((ev) => {
      const matchDept =
        filterDept === 'All'
          ? true
          : filterDept === 'Open Stage'
          ? ev.isOpenStage
          : ev.dept.startsWith(filterDept);

      const q = searchQuery.toLowerCase().trim();
      const matchQuery =
        !q ||
        ev.title.toLowerCase().includes(q) ||
        ev.time.toLowerCase().includes(q) ||
        ev.venue.toLowerCase().includes(q) ||
        ev.dept.toLowerCase().includes(q);

      return matchDept && matchQuery;
    });
  }, [filterDept, searchQuery]);

  return (
    <div className="space-y-12 pb-16 pt-6 sm:pt-10">
      
      {/* 1. First Big Box / Hero Card */}
      <section className="relative rounded-2xl overflow-hidden border border-slate-800 bg-[#0a0e1a]/80 shadow-2xl">
        
        {/* Hero Image backdrop with measured contrast scrim */}
        <div className="relative h-[480px] sm:h-[540px] w-full overflow-hidden">
          <img
            src="/src/assets/images/pragyan_hero_space_1793686160141.jpg"
            alt="Pragyan 2026 Space & Quantum Observatory"
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          {/* Measured contrast scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-[#07090e]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07090e]/95 via-[#07090e]/50 to-transparent" />
        </div>

        {/* Hero Content Overlay */}
        <div className="absolute inset-0 p-6 sm:p-10 lg:p-12 flex flex-col justify-end">
          <div className="max-w-3xl space-y-4">
            
            {/* Unboxed Metadata Header */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-cyan-300 font-mono tracking-wider">
              <span className="font-semibold text-white">COLLEGE TECHNICAL FESTIVAL</span>
              <span aria-hidden="true">·</span>
              <span className="text-cyan-400">ANNUAL TECH EXPLORATION</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-300">CAMPUS ARENA</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              PRAGYAN 2026
            </h1>

            {/* Engaging, easy to understand event description */}
            <p className="text-sm sm:text-base text-slate-100 max-w-2xl leading-relaxed">
              Step into the future where deep space rockets, quantum power, and raw engineering unite! Compete in thrilling challenges across Computer Science, Electrical, and Mechanical labs, play non-stop games in the garden, and celebrate with live music and an open-stage dance battle!
            </p>

            {/* Highlighted Event Date, Exciting Prizes Box & Action Row */}
            <div className="pt-2 space-y-3.5">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                
                {/* Highlighted Event Date Box */}
                <div className="flex items-center gap-3 bg-gradient-to-r from-cyan-950/90 to-slate-900/90 backdrop-blur-md border-2 border-cyan-400 rounded-xl px-4 py-3 shadow-lg shadow-cyan-950/50">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shrink-0">
                    <Calendar className="w-5 h-5 text-cyan-300" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300 font-bold block">
                      DATE OF EVENT
                    </span>
                    <div className="text-sm sm:text-base font-extrabold text-white font-display flex flex-wrap items-center gap-x-2">
                      <span>12 February 2026</span>
                      <span className="text-cyan-300 text-xs font-mono font-normal">| 10:00 AM – 8:00 PM</span>
                    </div>
                  </div>
                </div>

                {/* Exciting Prizes Box */}
                <div className="flex items-center gap-3 bg-gradient-to-r from-amber-950/90 to-slate-900/90 backdrop-blur-md border-2 border-amber-400 rounded-xl px-4 py-3 shadow-lg shadow-amber-950/50">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 shrink-0">
                    <Trophy className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold block">
                      EXCITING PRIZES
                    </span>
                    <div className="text-sm sm:text-base font-extrabold text-white font-display flex flex-wrap items-center gap-x-2">
                      <span>Cash Prizes & Trophies</span>
                      <span className="text-amber-300 text-xs font-medium">| Merit Certificates</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Primary Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  onClick={() => setActivePage('departments')}
                  className="px-5 py-2.5 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-sm transition-colors cursor-pointer flex items-center gap-2"
                >
                  <span>Browse All Events</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setActivePage('cultural')}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 rounded-lg transition-colors cursor-pointer flex items-center gap-2"
                >
                  <Gamepad2 className="w-3.5 h-3.5 text-purple-400" />
                  <span>View Cultural & Gaming Schedule</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Complete Event Roadmap Table */}
      <section className="space-y-6">
        
        {/* Header & Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
              <Clock className="w-3.5 h-3.5" />
              <span>Pragyan 2026 Event Timings</span>
            </div>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mt-0.5">
              Event Roadmap
            </h2>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1 p-1 bg-[#090d16] border border-slate-800 rounded-lg">
              {[
                { id: 'All', label: 'All Events' },
                { id: 'Open Stage', label: '★ Open Stage' },
                { id: 'Tech-Pragyan', label: 'Tech-Pragyan' },
                { id: 'Elec-Pragyan', label: 'Elec-Pragyan' },
                { id: 'Mech-Pragyan', label: 'Mech-Pragyan' },
              ].map((tab) => {
                const isActive = filterDept === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setFilterDept(tab.id as any)}
                    className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap ${
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

            {/* Quick search */}
            <div className="relative">
              <Search className="w-3 h-3 text-slate-500 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search timing or event..."
                className="pl-7 pr-3 py-1 text-xs rounded-lg bg-[#0b0f1a] border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
            </div>
          </div>
        </div>

        {/* Clean 3-Column Data Table: Timing Slot, Event Name, Venue */}
        <div className="overflow-x-auto rounded-xl border border-slate-800 bg-[#090d16] shadow-md">
          <table className="w-full text-left text-xs">
            
            {/* Table Header */}
            <thead className="bg-[#0e1322] border-b border-slate-800 text-slate-400 font-mono text-[11px] uppercase tracking-wider">
              <tr>
                <th scope="col" className="px-5 py-3.5 font-semibold text-cyan-300 w-44 sm:w-56">
                  Timing Slot
                </th>
                <th scope="col" className="px-5 py-3.5 font-semibold text-slate-200">
                  Event Name
                </th>
                <th scope="col" className="px-5 py-3.5 font-semibold text-slate-200">
                  Venue
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-slate-800/80">
              {filteredEvents.map((item) => {
                return (
                  <tr
                    key={item.id}
                    className={`transition-colors hover:bg-slate-800/30 ${
                      item.isOpenStage ? 'bg-purple-950/20' : ''
                    }`}
                  >
                    {/* Timing Slot */}
                    <td className="px-5 py-3.5 whitespace-nowrap font-mono-tech text-cyan-400 font-semibold text-xs">
                      {item.time}
                    </td>

                    {/* Event Name */}
                    <td className="px-5 py-3.5">
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <span className="font-semibold text-white">
                          {item.title}
                        </span>
                        {item.isOpenStage && (
                          <span className="inline-flex items-center gap-1 w-fit px-1.5 py-0.5 rounded text-[10px] font-mono font-extrabold uppercase bg-purple-500/20 text-purple-300 border border-purple-400/30">
                            <Star className="w-2.5 h-2.5 text-amber-300 fill-amber-300" />
                            OPEN STAGE
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Venue */}
                    <td className="px-5 py-3.5 text-slate-300">
                      <div className="flex items-center gap-1.5 text-xs">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>{item.venue}</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

      </section>

    </div>
  );
}
