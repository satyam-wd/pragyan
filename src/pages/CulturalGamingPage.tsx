import React from 'react';
import { CULTURAL_GAMING_EVENTS } from '../data/festData';
import { CulturalGamingEvent } from '../types';
import { Gamepad2, Flame, Music, Clock, MapPin, Star, Sparkles, ArrowRight, Trophy } from 'lucide-react';

interface CulturalGamingPageProps {
  onOpenRegister?: (event: CulturalGamingEvent) => void;
}

export default function CulturalGamingPage({ onOpenRegister }: CulturalGamingPageProps) {
  const gamingEvent = CULTURAL_GAMING_EVENTS.find((e) => e.type === 'gaming') || CULTURAL_GAMING_EVENTS[1];
  const danceEvent = CULTURAL_GAMING_EVENTS.find((e) => e.type === 'dance') || CULTURAL_GAMING_EVENTS[2];
  const singingEvent = CULTURAL_GAMING_EVENTS.find((e) => e.type === 'music') || CULTURAL_GAMING_EVENTS[0];

  const threeBlocks = [
    {
      id: 'gaming',
      category: 'Gaming',
      title: 'IT Garden Esports & Gaming',
      eventRef: gamingEvent,
      timeline: '10:30 AM – 07:00 PM (All-Day Non-Stop)',
      venue: 'IT Garden Tech Pavilion & Arena',
      energeticLine: 'Ignite the arena with lightning reflexes, tactical dominance, and non-stop esports adrenaline!',
      icon: <Gamepad2 className="w-6 h-6 text-purple-400" />,
      borderColor: 'border-purple-600/50 hover:border-purple-400',
      badgeBg: 'bg-purple-500/20 text-purple-300 border-purple-400/40',
      accentGlow: 'from-purple-950/40 via-purple-900/10 to-transparent',
      btnBg: 'bg-purple-500 hover:bg-purple-400 text-slate-950',
    },
    {
      id: 'dance',
      category: 'Dance',
      title: 'Grand Finale Open Stage Dance',
      eventRef: danceEvent,
      timeline: '07:00 PM – 08:00 PM (Last 1 Hour Finale)',
      venue: 'Main Open Stage Amphitheatre',
      energeticLine: 'Set the floor on fire with electrifying choreography, explosive beats, and unbridled passion!',
      icon: <Flame className="w-6 h-6 text-rose-400" />,
      borderColor: 'border-rose-600/50 hover:border-rose-400',
      badgeBg: 'bg-rose-500/20 text-rose-300 border-rose-400/40',
      accentGlow: 'from-rose-950/40 via-rose-900/10 to-transparent',
      btnBg: 'bg-rose-500 hover:bg-rose-400 text-slate-950',
    },
    {
      id: 'singing',
      category: 'Singing',
      title: 'Opening Music & Singing Showcase',
      eventRef: singingEvent,
      timeline: '10:00 AM – 10:30 AM (Inaugural Starting 30 Min)',
      venue: 'Main Open Stage Amphitheatre',
      energeticLine: 'Unleash your vocal rhythm and set the opening morning ablaze with your soulful melodies!',
      icon: <Music className="w-6 h-6 text-cyan-400" />,
      borderColor: 'border-cyan-600/50 hover:border-cyan-400',
      badgeBg: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/40',
      accentGlow: 'from-cyan-950/40 via-cyan-900/10 to-transparent',
      btnBg: 'bg-cyan-400 hover:bg-cyan-300 text-slate-950',
    },
  ];

  return (
    <div className="space-y-8 pb-16 pt-6">
      
      {/* Page Header */}
      <div className="border-b border-slate-800 pb-5">
        <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-wider font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>Pragyan 2026 Open Stage Extravaganza</span>
        </div>
        <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-1.5 tracking-tight">
          Showcase Your Talent in Music, Gaming & Dance
        </h1>
        <p className="text-xs sm:text-sm text-purple-300/90 font-medium mt-1.5 flex items-center gap-2">
          <Star className="w-4 h-4 text-amber-300 fill-amber-300 shrink-0" />
          <span>All three events are Open Stage — everyone can step up, compete, and claim the spotlight!</span>
        </p>
      </div>

      {/* Exactly Three Clean & Simple Blocks: Gaming, Dance, and Singing */}
      <div className="space-y-6">
        {threeBlocks.map((block) => (
          <div
            key={block.id}
            className={`relative overflow-hidden rounded-2xl bg-[#0b0f1a] border ${block.borderColor} p-6 sm:p-8 shadow-xl transition-all duration-200`}
          >
            {/* Subtle Gradient Backlight */}
            <div
              className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl ${block.accentGlow} pointer-events-none rounded-full blur-3xl -mr-20 -mt-20`}
            />

            <div className="relative z-10 space-y-5">
              
              {/* Top Row: Category + Open Stage Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center shrink-0 shadow-sm">
                    {block.icon}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                      {block.category} Event
                    </span>
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {block.title}
                    </h2>
                  </div>
                </div>

                {/* Open Stage Badge */}
                <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider border shadow-sm ${block.badgeBg}`}>
                  <Star className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                  <span>OPEN STAGE EVENT</span>
                </div>
              </div>

              {/* Energetic Line */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-white font-medium text-sm sm:text-base italic leading-relaxed">
                "{block.energeticLine}"
              </div>

              {/* Timeline & Venue Info Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {/* Timeline */}
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#070a12] border border-slate-800">
                  <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400 block font-semibold">
                      Timeline
                    </span>
                    <span className="text-white font-mono font-semibold text-xs sm:text-sm">
                      {block.timeline}
                    </span>
                  </div>
                </div>

                {/* Venue */}
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#070a12] border border-slate-800">
                  <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400 block font-semibold">
                      Venue Location
                    </span>
                    <span className="text-white font-medium text-xs sm:text-sm">
                      {block.venue}
                    </span>
                  </div>
                </div>
              </div>

              {/* Honors and Recognition */}
              <div className="pt-2 flex items-center justify-between border-t border-slate-800/60">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Trophy className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Prizes, trophies, and official merit credentials awarded</span>
                </div>
                <span className="text-[11px] font-mono text-purple-400 font-semibold">
                  ★ Open Stage Event
                </span>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
