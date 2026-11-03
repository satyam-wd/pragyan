import React, { useState } from 'react';
import { PageId } from '../types';
import { Sparkles, Menu, X, Ticket } from 'lucide-react';

interface NavbarProps {
  activePage: PageId;
  setActivePage: (page: PageId) => void;
  registeredCount: number;
}

export default function Navbar({ activePage, setActivePage, registeredCount }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'departments', label: 'All Events' },
    { id: 'timeline', label: 'Event Schedule' },
    { id: 'cultural', label: 'Cultural & Gaming' },
    { id: 'passes', label: 'Registration Here' },
  ];

  const handleNavClick = (page: PageId) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#07090e]/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 text-left cursor-pointer group whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-white shadow-sm shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
            PRAGYAN 2026
          </span>
        </button>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors whitespace-nowrap shrink-0 py-1 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded ${
                  isActive
                    ? 'text-cyan-400 font-semibold border-b-2 border-cyan-400'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleNavClick('passes')}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-sm transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            <Ticket className="w-3.5 h-3.5" />
            <span>Registration Here</span>
            {registeredCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-slate-900 text-cyan-300 text-[10px] font-bold flex items-center justify-center">
                {registeredCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#090d16] px-4 pt-3 pb-5 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                activePage === item.id
                  ? 'bg-cyan-950/60 text-cyan-400 border border-cyan-500/30'
                  : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
