'use client';

import { useState } from 'react';
import Sidebar from '@/app/components/Sidebar';

export default function ProgramsPage() {
  const [activeSection, setActiveSection] = useState('digital-skills');

  const sections = [
    { id: 'digital-skills', title: 'Digital Skills' },
    { id: 'electronic-repairs', title: 'Electronic Repairs' },
    { id: 'c2c', title: 'Counting to Calculus (C2C)' },
  ];

  const getContent = () => {
    switch (activeSection) {
      case 'digital-skills':
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Digital Skills</h2>
            <div className="mt-4 bg-gray-100 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center text-gray-500">
              Graphics / images for Digital Skills
            </div>
            <p className="mt-4 text-gray-600">
              Computer repair, networking, and IT support training for immediate employment or self-employment.
            </p>
            <p className="mt-2 text-gray-600">
              This 5-month intensive program includes hands-on labs, certification prep, and job placement support.
            </p>
          </div>
        );
      case 'electronic-repairs':
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Electronic Repairs</h2>
            <div className="mt-4 bg-gray-100 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center text-gray-500">
              Graphics / images for Electronic Repairs
            </div>
            <p className="mt-4 text-gray-600">
              Master smartphone, TV, and appliance repair to launch your own workshop or join a service center.
            </p>
            <p className="mt-2 text-gray-600">
              Learn diagnostics, soldering, and component replacement using real devices from local markets.
            </p>
          </div>
        );
      case 'c2c':
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Counting to Calculus (C2C)</h2>
            <div className="mt-4 bg-gray-100 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center text-gray-500">
              Graphics / images for C2C Program
            </div>
            <p className="mt-4 text-gray-600">
              AI-powered STEM curriculum for high school students — from basic math to advanced calculus and physics.
            </p>
            <p className="mt-2 text-gray-600">
              Delivered in partnership with schools across Oyo State, using adaptive learning platforms and local tutors.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Reusable Sidebar */}
      <Sidebar
        title="Programs"
        items={sections}
        activeId={activeSection}
        onItemSelect={setActiveSection}
      />

      {/* Main Content */}
      <main className="flex-1 p-6 bg-white">
        <div className="max-w-4xl">
          {getContent()}
          <div className="mt-8">
            <a
              href="/admissions"
              className="inline-block bg-blue-700 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition-colors"
            >
              Apply to This Program
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}