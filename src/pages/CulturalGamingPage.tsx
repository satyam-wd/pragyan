import React, { useState } from 'react';
import { CULTURAL_GAMING_EVENTS } from '../data/festData';
import { CulturalGamingEvent } from '../types';
import { Music, Gamepad2, Flame, Clock, MapPin, Award, Users, ShieldCheck, Check, Sparkles } from 'lucide-react';

interface CulturalGamingPageProps {
  onOpenRegister: (event: CulturalGamingEvent) => void;
}

export default function CulturalGamingPage({ onOpenRegister }: CulturalGamingPageProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'music' | 'gaming' | 'dance'>('all');

  const filteredItems = CULTURAL_GAMING_EVENTS.filter((item) => {
    if (activeTab === 'all') return true;
    return item.type === activeTab;
  });

  return (
    <div className="space-y-10 pb-16 pt-4">
      
      {/* Page Header */}
      <div className="border-b border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Festival Arts & Esports</span>
          <span aria-hidden="true">·</span>
          <span>12 February 2026</span>
        </div>
        <h1 className="font-display text-2xl sm:text-4xl font-bold text-white mt-1">
          Music, Gaming & Open Stage Dance
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-3xl leading-relaxed">
          The three landmark festival attractions of Pragyan 2026: kick off with 30 minutes of live singing & music,
          compete in the all-day IT Garden Esports Arena, and conclude with the grand 1-hour open-stage dance showcase.
        </p>

        {/* Schedule Highlights Summary Strip */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-[#0e1222] border border-cyan-800/40 flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <Music className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-cyan-400 font-semibold uppercase">Opening Slot (30 Min)</span>
              <h3 className="text-xs font-bold text-white mt-0.5">10:00 AM – 10:30 AM</h3>
              <p className="text-[11px] text-slate-400 mt-1">Inaugural Singing & Melodies at Main Stage</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#140e22] border border-purple-800/40 flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
              <Gamepad2 className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-purple-400 font-semibold uppercase">All-Day (IT Garden)</span>
              <h3 className="text-xs font-bold text-white mt-0.5">10:30 AM – 07:00 PM</h3>
              <p className="text-[11px] text-slate-400 mt-1">Esports, PC LAN, Mobile & Console Arena</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#1a0e16] border border-rose-800/40 flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0">
              <Flame className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-rose-400 font-semibold uppercase">Grand Finale (Last 1 Hr)</span>
              <h3 className="text-xs font-bold text-white mt-0.5">07:00 PM – 08:00 PM</h3>
              <p className="text-[11px] text-slate-400 mt-1">Open Stage Dance at the Amphitheatre</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs (Rule 1.A: clean button elements with click handlers) */}
      <div className="flex items-center gap-1.5 p-1 bg-[#090d16] border border-slate-800 rounded-lg w-fit">
        {[
          { id: 'all', label: 'All 3 Festivities' },
          { id: 'music', label: 'Opening Music (10:00 - 10:30 AM)' },
          { id: 'gaming', label: 'IT Garden Gaming (All-Day)' },
          { id: 'dance', label: 'Open Stage Dance (7:00 - 8:00 PM)' },
        ].map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                isActive
                  ? 'bg-purple-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Main Events Showcase */}
      <div className="space-y-8">
        {filteredItems.map((item) => {
          const isGaming = item.type === 'gaming';
          const isMusic = item.type === 'music';
          const isDance = item.type === 'dance';

          const accentBorder = isGaming
            ? 'border-purple-800/60'
            : isMusic
            ? 'border-cyan-800/60'
            : 'border-rose-800/60';

          const badgeColor = isGaming
            ? 'text-purple-400'
            : isMusic
            ? 'text-cyan-400'
            : 'text-rose-400';

          return (
            <div
              key={item.id}
              className={`rounded-2xl bg-[#0b0f1a] border ${accentBorder} p-6 sm:p-8 space-y-6 shadow-md`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                    <span className={`font-mono font-bold ${badgeColor}`}>{item.scheduleSlot}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono text-white">{item.timing}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.venue}</span>
                  </div>

                  <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
                    {item.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                    {item.description}
                  </p>
                </div>

                <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    onClick={() => onOpenRegister(item)}
                    className="px-5 py-2.5 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-sm transition-colors cursor-pointer whitespace-nowrap text-center"
                  >
                    Register for {isGaming ? 'Gaming Tournament' : isMusic ? 'Opening Singing' : 'Stage Dance'}
                  </button>
                </div>
              </div>

              {/* Sub-categories Grid */}
              <div className="pt-4 border-t border-slate-800/80">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  Available Tournament & Performance Categories
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {item.subCategories.map((sub, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-[#07090e] border border-slate-800 flex items-center justify-between text-xs"
                    >
                      <span className="text-slate-200 font-medium">{sub}</span>
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Rules and Details Strip */}
              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-medium mb-1">
                    <Award className="w-3.5 h-3.5" />
                    <span>Prize Pool & Honors</span>
                  </div>
                  <div className="text-white font-mono text-sm font-semibold">{item.prizePool}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{item.entryFee}</div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800">
                  <div className="flex items-center gap-1.5 text-cyan-400 font-medium mb-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Timing Slot In Fest</span>
                  </div>
                  <div className="text-white font-mono text-sm font-semibold">{item.timing}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{item.duration}</div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800">
                  <div className="flex items-center gap-1.5 text-amber-400 font-medium mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Venue Location</span>
                  </div>
                  <div className="text-white text-xs font-semibold">{item.venue}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Coordinators: {item.coordinators.map((c) => `${c.name} (${c.phone})`).join(', ')}
                  </div>
                </div>
              </div>

              {/* Guidelines */}
              <div className="p-4 rounded-lg bg-[#070a12] border border-slate-800 text-xs text-slate-400 space-y-1.5">
                <span className="font-semibold text-slate-300 block text-[11px] uppercase tracking-wider">
                  Important Guidelines
                </span>
                {item.rules.map((rule, rIdx) => (
                  <div key={rIdx} className="flex items-start gap-2">
                    <span className="text-purple-400">·</span>
                    <span>{rule}</span>
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
