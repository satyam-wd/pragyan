/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StarfieldCanvas from './components/StarfieldCanvas';
import RegistrationModal from './components/RegistrationModal';
import HomePage from './pages/HomePage';
import DepartmentDirectoryPage from './pages/DepartmentDirectoryPage';
import DepartmentTimelinePage from './pages/DepartmentTimelinePage';
import CulturalGamingPage from './pages/CulturalGamingPage';
import PassesAndPlannerPage from './pages/PassesAndPlannerPage';
import { FestEvent, CulturalGamingEvent, RegistrationRecord, PageId } from './types';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [selectedDepartment, setSelectedDepartment] = useState<'CS' | 'Electrical' | 'Mechanical'>('CS');
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<FestEvent | CulturalGamingEvent | null>(null);

  // Load saved registrations from localStorage
  const [registrations, setRegistrations] = useState<RegistrationRecord[]>(() => {
    try {
      const saved = localStorage.getItem('pragyan_registrations_2026');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed reading localStorage', e);
    }
    // Default initial sample registration pass
    return [
      {
        regId: 'PRG26-784201',
        eventId: 'cs-quantum-hack',
        eventTitle: 'Qiskit Quantum Algorithms Hackathon',
        eventType: 'department',
        department: 'CS',
        timeSlot: '10:30 AM – 02:00 PM',
        venue: 'Block A (Turing Quantum Center) · Quantum Lab 301',
        participantName: 'Arnav Sharma',
        email: 'arnav.sharma@college.edu',
        phone: '+91 98450 11223',
        college: 'National Institute of Engineering',
        rollNo: '22CS104',
        year: '3rd Year',
        teamName: 'Qubit Explorers',
        teamMembers: ['Siddharth Roy', 'Sneha Patel'],
        timestamp: new Date().toISOString(),
        status: 'Confirmed',
      },
    ];
  });

  useEffect(() => {
    try {
      localStorage.setItem('pragyan_registrations_2026', JSON.stringify(registrations));
    } catch (e) {
      console.error('Failed saving to localStorage', e);
    }
  }, [registrations]);

  const handleOpenRegister = (event: FestEvent | CulturalGamingEvent) => {
    setSelectedEvent(event);
    setIsRegisterOpen(true);
  };

  const handleRegisterSuccess = (newRecord: RegistrationRecord) => {
    setRegistrations((prev) => [newRecord, ...prev]);
  };

  const handleDeleteRegistration = (regId: string) => {
    setRegistrations((prev) => prev.filter((r) => r.regId !== regId));
  };

  const handleAddSamplePass = () => {
    const sample: RegistrationRecord = {
      regId: `PRG26-${Math.floor(100000 + Math.random() * 900000)}`,
      eventId: 'cult-it-garden-gaming',
      eventTitle: 'IT Garden Esports & Gaming Arena Championship',
      eventType: 'cultural_gaming',
      timeSlot: '10:30 AM – 07:00 PM',
      venue: 'IT Garden Tech Pavilion · Esports Pods',
      participantName: 'Kavya Sengupta',
      email: 'kavya.s@college.edu',
      phone: '+91 98111 22334',
      college: 'Delhi Technological University',
      rollNo: '23EC058',
      year: '2nd Year',
      teamName: 'Phantom Vipers',
      subCategory: 'Valorant 5v5 Tactical Shooter (PC LAN)',
      timestamp: new Date().toISOString(),
      status: 'Confirmed',
    };
    setRegistrations((prev) => [sample, ...prev]);
  };

  return (
    <div className="relative min-h-screen bg-[#06080e] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Background Starfield & Quantum constellation canvas */}
      <StarfieldCanvas />

      {/* Top Navigation Bar with 3-Zone Contract */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        registeredCount={registrations.length}
      />

      {/* Main Page Body Container */}
      <main className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        {activePage === 'home' && (
          <HomePage
            setActivePage={setActivePage}
            setSelectedDepartment={setSelectedDepartment}
            onOpenRegister={handleOpenRegister}
          />
        )}

        {activePage === 'departments' && (
          <DepartmentDirectoryPage
            onOpenRegister={handleOpenRegister}
            onSelectDepartmentForTimeline={(dept) => {
              setSelectedDepartment(dept);
            }}
            setActivePage={setActivePage}
          />
        )}

        {activePage === 'timeline' && (
          <DepartmentTimelinePage
            selectedDepartment={selectedDepartment}
            setSelectedDepartment={setSelectedDepartment}
            onOpenRegister={handleOpenRegister}
          />
        )}

        {activePage === 'cultural' && (
          <CulturalGamingPage onOpenRegister={handleOpenRegister} />
        )}

        {activePage === 'passes' && (
          <PassesAndPlannerPage
            registrations={registrations}
            onDeleteRegistration={handleDeleteRegistration}
            onAddSamplePass={handleAddSamplePass}
            setActivePage={setActivePage}
          />
        )}
      </main>

      {/* Global Registration Modal */}
      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        event={selectedEvent}
        onRegisterSuccess={handleRegisterSuccess}
        onViewPasses={() => {
          setIsRegisterOpen(false);
          setActivePage('passes');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Festival Footer */}
      <Footer setActivePage={setActivePage} />
    </div>
  );
}
