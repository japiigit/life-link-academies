'use client';

import { useState } from 'react';
import Sidebar from '@/app/components/Sidebar';

export default function NewsPage() {
  const [activeSection, setActiveSection] = useState('latest');

  const sections = [
    { id: 'latest', title: 'Latest Updates' },
    { id: 'success-stories', title: 'Student Success Stories' },
    { id: 'program-launches', title: 'Program Launches' },
  ];

  const getContent = () => {
    switch (activeSection) {
      case 'latest':
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Latest Updates</h2>
            
            <article className="mt-6 pb-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-blue-700">
                New Digital Skills Cohort Starts February 2026
              </h3>
              <p className="mt-2 text-sm text-gray-500">January 25, 2026</p>
              <p className="mt-3 text-gray-600">
                We’re excited to announce our next intake for the Digital Skills program! 
                This 5-month course covers computer repair, networking, and digital literacy — 
                with hands-on training and job placement support.
              </p>
              <a href="#" className="mt-3 inline-block text-secondary-500 hover:underline font-medium">
                Read more →
              </a>
            </article>
          </div>
        );
      case 'success-stories':
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Student Success Stories</h2>
            
            <article className="mt-6 pb-6">
              <h3 className="text-xl font-semibold text-blue-700">
                Meet Our 2025 Graduate: Aisha’s Repair Shop Success
              </h3>
              <p className="mt-2 text-sm text-gray-500">December 10, 2025</p>
              <p className="mt-3 text-gray-600">
                After completing our Electronic Repairs program, Aisha opened her own phone repair shop 
                in Abuja. She now employs two assistants and serves over 50 customers weekly.
              </p>
              <a href="#" className="mt-3 inline-block text-secondary-500 hover:underline font-medium">
                Read more →
              </a>
            </article>
          </div>
        );
      case 'program-launches':
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Program Launches</h2>
            
            <article className="mt-6 pb-6">
              <h3 className="text-xl font-semibold text-blue-700">
                C2C Program Launches in 3 Secondary Schools
              </h3>
              <p className="mt-2 text-sm text-gray-500">January 18, 2026</p>
              <p className="mt-3 text-gray-600">
                Our Counting to Calculus (C2C) STEM initiative is now live in Makurdi, Ogun, and Kogi. 
                Students are using AI-powered lessons to master math and physics.
              </p>
              <a href="#" className="mt-3 inline-block text-secondary-500 hover:underline font-medium">
                Read more →
              </a>
            </article>
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
        title="News"
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
              href="/apply"
              className="inline-block bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 rounded-md font-medium"
            >
              Apply to Join Our Next Cohort
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}