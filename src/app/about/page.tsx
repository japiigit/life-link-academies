'use client';

import { useState } from 'react';

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState('we-are');

  const sections = [
    { id: 'we-are', title: 'We Are' },
    { id: 'mission', title: 'Mission' },
    { id: 'vision', title: 'Vision' },
  ];

  const getContent = () => {
    switch (activeSection) {
      case 'we-are':
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-800">We Are</h2>
            <p className="mt-4 text-gray-600">
              Life Link Academy was established in January 2026 to accelerate youth development through practical technical education, AI-powered learning tools, and community-centered training programs across West Africa.
            </p>
          </div>
        );
      case 'mission':
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Mission</h2>
            <p className="mt-4 text-gray-600">
              We aim to bridge the gap between classroom learning and real-world industry needs by providing hands-on training in digital skills, electronics repair, and STEM education — all while fostering innovation and self-reliance among young Nigerians.
            </p>
          </div>
        );
      case 'vision':
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Vision</h2>
            <p className="mt-4 text-gray-600">
              In the next 5 years, we would have become the leading technical academy in Southern Nigeria, recognized for transforming underserved youth into skilled professionals, entrepreneurs, and community leaders through accessible, future-ready education.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <aside className="w-60 bg-accent-500 text-white flex-shrink-0 p-6">
        <h2 className="text-xl font-bold mb-6">About</h2>
        <nav className="space-y-3">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                activeSection === section.id
                  ? 'bg-orange-600 font-medium'
                  : 'hover:bg-orange-600/70'
              }`}
            >
              {section.title}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-white">
        <div className="max-w-4xl">
          {getContent()}
        </div>
      </main>
    </div>
  );
}