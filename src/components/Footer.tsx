import React from 'react';
import { PageId } from '../types';
import { Calendar, Clock, MapPin, Sparkles, Mail, Phone } from 'lucide-react';

interface FooterProps {
  setActivePage: (page: PageId) => void;
}

export default function Footer({ setActivePage }: FooterProps) {
  return (
    <footer className="border-t border-slate-800 bg-[#05070c] relative z-10 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand & Event summary */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <span className="font-display text-base font-bold text-white tracking-tight">
                PRAGYAN 2026
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Intercollegiate flagship festival of Space Technology, Quantum Computing & Applied Sciences.
            </p>
            <div className="space-y-1.5 pt-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Calendar className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>12 February 2026 (Thursday)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>10:00 AM – 08:00 PM IST</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Blocks A, B, C & IT Garden</span>
              </div>
            </div>
          </div>

          {/* Department Hubs */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
              Host Departments
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => { setActivePage('timeline'); }}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  <span className="text-slate-300 font-medium">Computer Science:</span> Block A Turing Center
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActivePage('timeline'); }}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  <span className="text-slate-300 font-medium">Electrical Engg:</span> Block B Tesla Pavilion
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActivePage('timeline'); }}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  <span className="text-slate-300 font-medium">Mechanical Engg:</span> Block C Da Vinci Lab
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActivePage('cultural'); }}
                  className="hover:text-purple-400 transition-colors text-left"
                >
                  <span className="text-slate-300 font-medium">Cultural & Gaming:</span> IT Garden & Open Stage
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
              Fest Directory
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setActivePage('home')} className="hover:text-white transition-colors">
                  Home & Overview
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('departments')} className="hover:text-white transition-colors">
                  All Events Directory
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('timeline')} className="hover:text-white transition-colors">
                  Event Schedule
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('cultural')} className="hover:text-white transition-colors">
                  IT Garden Gaming & Stage Show
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('passes')} className="hover:text-white transition-colors">
                  Registration Here
                </button>
              </li>
            </ul>
          </div>

          {/* Helpline & Student Coordination */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
              Student Coordinators
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>CS Desk: +91 98450 12345</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Electrical: +91 98450 12353</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Mechanical: +91 98450 12361</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>pragyan2026@college.edu</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Pragyan Technical Festival. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span>Date: 12 February 2026</span>
            <span aria-hidden="true">·</span>
            <span>Venue: Academic Campus Blocks</span>
            <span aria-hidden="true">·</span>
            <span>Total Prize Pool ₹1.5 Lakhs+</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
