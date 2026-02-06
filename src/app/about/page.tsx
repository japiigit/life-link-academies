'use client';

import { useState, useEffect } from 'react';
import Sidebar from '@/app/components/Sidebar';

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState('we-are');
  const [carouselPosition, setCarouselPosition] = useState(0);

  const sections = [
    { id: 'we-are', title: 'We Are' },
    { id: 'mission', title: 'Mission' },
    { id: 'vision', title: 'Vision' },
    { id: 'values', title: 'Core Values' },
  ];

  const carouselItems = [
    {
      title: 'Academic Excellence & Foundation',
      description: 'STEM Mastery, Math Pathway, JAMB/WAEC Prep',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'Digital & Emerging Technology',
      description: 'AI Literacy, Data Science, Computer Literacy, Hardware Engineering',
      color: 'from-purple-500 to-pink-600',
    },
    {
      title: 'Advanced Medical Sciences',
      description: 'Medical Imaging, Nuclear Medicine, Health Extension',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      title: 'Modern Agriculture & Sustainability',
      description: 'Smart Farm Technician, Agricultural Extension',
      color: 'from-amber-500 to-orange-600',
    },
    {
      title: 'Creative Arts & Vocational Skills',
      description: 'Tailoring, Graphic Design, Cosmetology',
      color: 'from-rose-500 to-red-600',
    },
  ];

  const getContent = () => {
    switch (activeSection) {
      case 'we-are':
        return (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">We Are</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              LIFELINK Center is Nigeria's premier institution dedicated to closing the gap between traditional academic learning and the practical demands of the global workforce. We are a premier hub for skill acquisition located in Nigeria. We believe that education should be holistic, combining the theoretical rigor of science and math with the practical demands of modern technology and vocational trades. Whether you are a student preparing for WAEC or a professional looking to specialize in Medical Imaging, LIFELINK is your partner in progress.
            </p>
          </div>
        );
      case 'mission':
        return (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              To empower individuals with high-demand digital, technical, and vocational skills by bridging the gap between traditional Nigerian education and global industry standards through practical, innovation-driven training.
            </p>
          </div>
        );
      case 'vision':
        return (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              To be Nigeria's leading hub for human capital development, fostering a generation of self-reliant professionals and tech-driven experts who lead the transformation of the healthcare, technology, and agricultural sectors.
            </p>
          </div>
        );
      case 'values':
        return (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Core Values</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-bold text-gray-800">Innovation</h3>
                <p className="text-gray-700 mt-2">Embracing cutting-edge technology and modern pedagogical methods to stay ahead in a rapidly evolving digital landscape.</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold text-gray-800">Empowerment</h3>
                <p className="text-gray-700 mt-2">Providing students with the practical tools and confidence necessary to achieve financial independence and professional success.</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h3 className="font-bold text-gray-800">Integrity</h3>
                <p className="text-gray-700 mt-2">Maintaining the highest standards of professional ethics and transparency in our training and medical services.</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <h3 className="font-bold text-gray-800">Excellence</h3>
                <p className="text-gray-700 mt-2">Committing to rigorous academic and vocational standards that ensure our graduates are competitive on a global scale.</p>
              </div>
              <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500">
                <h3 className="font-bold text-gray-800">Community Impact</h3>
                <p className="text-gray-700 mt-2">Focusing on skills that solve local challenges in Nigerian healthcare, agriculture, and infrastructure.</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselPosition((prev) => (prev + 1) % carouselItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white flex">
      {/* Reusable Sidebar */}
      <Sidebar
        title="About"
        items={sections}
        activeId={activeSection}
        onItemSelect={setActiveSection}
      />

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          {/* Main Content */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            {getContent()}
          </div>

          {/* Carousel Section */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Core Programs</h2>
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${carouselPosition * 100}%)` }}
              >
                {carouselItems.map((item, index) => (
                  <div 
                    key={index} 
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className={`bg-gradient-to-r ${item.color} rounded-xl p-8 text-white shadow-lg h-64 flex flex-col justify-center`}>
                      <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                      <p className="text-lg opacity-95">{item.description}</p>
                      <div className="mt-6 flex space-x-2">
                        {carouselItems.map((_, i) => (
                          <div
                            key={i}
                            className={`w-3 h-3 rounded-full transition-all ${
                              i === carouselPosition ? 'bg-white scale-125' : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}