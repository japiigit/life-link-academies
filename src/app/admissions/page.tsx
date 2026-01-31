'use client';

import { useState } from 'react';

export default function AdmissionsPage() {
  const [activeSection, setActiveSection] = useState('eligibility');

  const sections = [
    { id: 'eligibility', title: 'Eligibility' },
    { id: 'programs', title: 'Programs Available' },
    { id: 'tuition', title: 'Tuition & Payment' },
    { id: 'how-to-apply', title: 'How to Apply' },
  ];

  const getContent = () => {
    switch (activeSection) {
      case 'eligibility':
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Who Can Apply?</h2>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>• Ages 16–35</li>
              <li>• Basic reading and writing skills</li>
              <li>• Passion for hands-on technical work</li>
              <li>• Commitment to complete the full program</li>
            </ul>
          </div>
        );
      case 'programs':
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Programs Available</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="border border-gray-200 rounded p-4">
                <h3 className="font-medium">Digital Skills</h3>
                <p className="text-sm text-gray-600 mt-1">Computer repair, networking, digital tools</p>
              </div>
              <div className="border border-gray-200 rounded p-4">
                <h3 className="font-medium">Electronic Repairs</h3>
                <p className="text-sm text-gray-600 mt-1">Phones, TVs, home appliances</p>
              </div>
              <div className="border border-gray-200 rounded p-4">
                <h3 className="font-medium">C2C Programs</h3>
                <p className="text-sm text-gray-600 mt-1">AI-powered STEM for high school students</p>
              </div>
            </div>
          </div>
        );
      case 'tuition':
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Tuition & Payment</h2>
            <p className="mt-4 text-gray-600">
              Affordable fees with flexible payment plans:
            </p>
            <div className="mt-4 bg-blue-50 p-4 rounded-lg">
              <p className="font-medium">₦85,000 per program (4–6 months)</p>
              <p className="text-sm text-gray-700 mt-1">
                Pay 50% to start, 50% by week 6. Tools and materials included.
              </p>
            </div>
          </div>
        );
      case 'how-to-apply':
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-800">How to Apply</h2>
            <ol className="mt-4 space-y-3 text-gray-600 list-decimal pl-5">
              <li>Contact us via WhatsApp or email</li>
              <li>Attend a short orientation session (in-person or online)</li>
              <li>Pay initial fee to secure your spot</li>
              <li>Start class on your assigned date!</li>
            </ol>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/234XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                📱 WhatsApp Us
              </a>
              <a
                href="mailto:admissions@lifelinkacademies.edu"
                className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
              >
                ✉️ Email Admissions
              </a>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500">
              <p className="text-yellow-800">
                <strong>Note:</strong> Classes fill quickly. Secure your spot early!
              </p>
            </div>
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
        <h2 className="text-xl font-bold mb-6">Admissions</h2>
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