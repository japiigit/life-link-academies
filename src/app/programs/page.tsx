'use client';

import { useState } from 'react';
import Sidebar from '@/app/components/Sidebar';

export default function ProgramsPage() {
  const [activeSection, setActiveSection] = useState('digital-tech');

  const sections = [
    { id: 'digital-tech', title: 'Digital & Emerging Technology' },
    { id: 'medical-sciences', title: 'Advanced Medical Sciences' },
    { id: 'stem-academic', title: 'STEM & Academic Prep' },
    { id: 'engineering-tech', title: 'Engineering & Technicals' },
    { id: 'smart-farming', title: 'Smart Farming & Agribusiness' },
    { id: 'vocational-arts', title: 'Creative Arts & Vocational Trades' },
  ];

  const getContent = () => {
    switch (activeSection) {
      case 'digital-tech':
        return (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Digital & Emerging Technology</h2>
            <div className="mt-4 bg-gradient-to-r from-blue-500 to-purple-600 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center text-white font-bold text-xl">
              Digital Technology Programs
            </div>
            
            <div className="mt-6 space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-gray-800 mb-2">AI Literacy</h3>
                <p className="text-gray-700 mb-2">An introductory to intermediate course on generative AI, prompt engineering, and the ethical implementation of AI in business and education.</p>
                <p className="text-gray-600 font-medium">Fee: ₦150,000 | Duration: 3-4 months</p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Data Science & Analytics</h3>
                <p className="text-gray-700 mb-2">Training in data collection, statistical analysis, and visualization tools to drive data-informed decision-making.</p>
                <p className="text-gray-600 font-medium">Fee: ₦150,000 | Duration: 4-5 months</p>
              </div>

              <div className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-500">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Computer Literacy</h3>
                <p className="text-gray-700 mb-2">Essential training in operating systems, cloud productivity tools, and internet safety for the modern workplace.</p>
                <p className="text-gray-600 font-medium">Fee: ₦40,000 | Duration: 2 months</p>
              </div>

              <div className="bg-rose-50 p-6 rounded-lg border-l-4 border-rose-500">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Graphic Design</h3>
                <p className="text-gray-700 mb-2">Creative training in visual communication, branding, and industry-standard design software (Adobe Suite/CorelDraw).</p>
                <p className="text-gray-600 font-medium">Fee: ₦80,000 | Duration: 3 months</p>
              </div>
            </div>
          </div>
        );

      case 'medical-sciences':
        return (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Advanced Medical Sciences</h2>
            <div className="mt-4 bg-gradient-to-r from-emerald-500 to-teal-600 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center text-white font-bold text-xl">
              Medical Imaging & Health Sciences
            </div>
            
            <div className="mt-6 space-y-6">
              <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-500">
                <h3 className="text-xl font-bold text-gray-800 mb-2">MRI Technology</h3>
                <p className="text-gray-700 mb-2">Advanced training in operating MRI scanners, understanding pulse sequences, and ensuring patient safety in high-magnetic environments.</p>
                <p className="text-gray-600 font-medium">Fee: ₦250,000 | Duration: 6-8 months</p>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-500">
                <h3 className="text-xl font-bold text-gray-800 mb-2">CT Scan Operations</h3>
                <p className="text-gray-700 mb-2">Specialized instruction on Computed Tomography physics, cross-sectional anatomy, and radiation protocols for diagnostic imaging.</p>
                <p className="text-gray-600 font-medium">Fee: ₦250,000 | Duration: 6-8 months</p>
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Radiology Technician Program</h3>
                <p className="text-gray-700 mb-2">Comprehensive foundation in X-ray positioning, film processing, and digital imaging techniques.</p>
                <p className="text-gray-600 font-medium">Fee: ₦200,000 | Duration: 5-6 months</p>
              </div>

              <div className="bg-violet-50 p-6 rounded-lg border-l-4 border-violet-500">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Nuclear Medicine Technology</h3>
                <p className="text-gray-700 mb-2">Specialized training in the administration of radiopharmaceuticals and the use of gamma cameras for functional organ imaging.</p>
                <p className="text-gray-600 font-medium">Fee: ₦200,000 | Duration: 6 months</p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Health Extension Services</h3>
                <p className="text-gray-700 mb-2">Community-based healthcare training focusing on preventive medicine, first aid, and public health outreach.</p>
                <p className="text-gray-600 font-medium">Fee: ₦120,000 | Duration: 4 months</p>
              </div>
            </div>
          </div>
        );

      case 'stem-academic':
        return (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">STEM & Academic Preparatory</h2>
            <div className="mt-4 bg-gradient-to-r from-amber-500 to-orange-600 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center text-white font-bold text-xl">
              Academic Excellence & Foundation
            </div>
            
            <div className="mt-6 space-y-6">
              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Counting to Calculus (Math Pathway)</h3>
                <p className="text-gray-700 mb-2">A structured mathematical journey covering basic arithmetic, algebra, trigonometry, and advanced calculus for university readiness.</p>
                <p className="text-gray-600 font-medium">Fee: ₦60,000 | Duration: 6-9 months</p>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                <h3 className="text-xl font-bold text-gray-800 mb-2">JAMB & WAEC Excellence</h3>
                <p className="text-gray-700 mb-2">Targeted intensive coaching for the Unified Tertiary Matriculation Examination and West African Senior School Certificate Examination.</p>
                <p className="text-gray-600 font-medium">Fee: ₦45,000 per term | Duration: 3-4 months per term</p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Applied Sciences</h3>
                <p className="text-gray-700 mb-2">Practical-heavy instruction in Physics, Chemistry, and Math designed to help students master complex theories through laboratory-style application.</p>
                <p className="text-gray-600 font-medium">Fee: ₦60,000 | Duration: 5-6 months</p>
              </div>
            </div>
          </div>
        );

      case 'engineering-tech':
        return (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Engineering & Technical</h2>
            <div className="mt-4 bg-gradient-to-r from-gray-500 to-zinc-700 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center text-white font-bold text-xl">
              Hardware Engineering & Repairs
            </div>
            
            <div className="mt-6 space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-500">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Electronic & Computer Repair</h3>
                <p className="text-gray-700 mb-2">Comprehensive training in hardware diagnostics, component replacement, micro-soldering, software troubleshooting for laptops, desktops, mobile phones, tablets, and household electronic circuitry.</p>
                <p className="text-gray-600 font-medium">Fee: ₦100,000 | Duration: 4-5 months</p>
                <p className="text-gray-600 mt-2 italic">Includes toolkits, component sets, and hands-on training with real devices from local markets</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Solar Panel Technician</h3>
                <p className="text-gray-700 mb-2">Photovoltaic (PV) system design, installation, and maintenance for sustainable energy solutions.</p>
                <p className="text-gray-600 font-medium">Fee: ₦120,000 | Duration: 4-5 months</p>
                <p className="text-gray-600 mt-2 italic">Includes hands-on installation practice</p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Automotive Repair</h3>
                <p className="text-gray-700 mb-2">Modern vehicle diagnostics, mechanical, and electrical systems for comprehensive automotive maintenance.</p>
                <p className="text-gray-600 font-medium">Fee: ₦130,000 | Duration: 5-6 months</p>
                <p className="text-gray-600 mt-2 italic">Hands-on training with modern vehicle systems</p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-500">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Building Technician</h3>
                <p className="text-gray-700 mb-2">Structural basics, site management, and modern construction techniques for the building industry.</p>
                <p className="text-gray-600 font-medium">Fee: ₦110,000 | Duration: 5-6 months</p>
                <p className="text-gray-600 mt-2 italic">Practical site management training included</p>
              </div>
            </div>
          </div>
        );

      case 'smart-farming':
        return (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Smart Farming & Agribusiness</h2>
            <div className="mt-4 bg-gradient-to-r from-green-500 to-lime-600 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center text-white font-bold text-xl">
              Smart Farm & Agricultural Tech
            </div>
            
            <div className="mt-6 space-y-6">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Smart Farm Technician</h3>
                <p className="text-gray-700 mb-2">Training in the use of IoT sensors, automated irrigation, and data-driven crop management.</p>
                <p className="text-gray-600 font-medium">Fee: ₦130,000 | Duration: 4-5 months</p>
              </div>

              <div className="bg-lime-50 p-6 rounded-lg border-l-4 border-lime-500">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Agricultural Extension Technician</h3>
                <p className="text-gray-700 mb-2">Developing the communication and technical skills needed to bring modern farming research to rural farmers.</p>
                <p className="text-gray-600 font-medium">Fee: ₦130,000 | Duration: 4-5 months</p>
              </div>

              <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-500">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Geology Technician</h3>
                <p className="text-gray-700 mb-2">Mineral identification, soil analysis, and field mapping techniques for earth sciences.</p>
                <p className="text-gray-600 font-medium">Fee: ₦120,000 | Duration: 4-5 months</p>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-500">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Food & Bakery Technology</h3>
                <p className="text-gray-700 mb-2">Food processing science, industrial baking, and food safety standards for the food industry.</p>
                <p className="text-gray-600 font-medium">Fee: ₦90,000 | Duration: 3-4 months</p>
                <p className="text-gray-600 mt-2 italic">Hands-on training in food production and safety</p>
              </div>
            </div>
          </div>
        );

      case 'vocational-arts':
        return (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Creative Arts & Vocational Trades</h2>
            <div className="mt-4 bg-gradient-to-r from-pink-500 to-rose-600 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center text-white font-bold text-xl">
              Creative Arts & Entrepreneurship
            </div>
            
            <div className="mt-6 space-y-6">
              <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-500">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Fashion & Tailoring</h3>
                <p className="text-gray-700 mb-2">Professional garment construction, pattern drafting, and fashion illustration.</p>
                <p className="text-gray-600 font-medium">Fee: ₦90,000 | Duration: 4-6 months</p>
              </div>

              <div className="bg-rose-50 p-6 rounded-lg border-l-4 border-rose-500">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Cosmetology & Aesthetic Science</h3>
                <p className="text-gray-700 mb-2">Comprehensive training in skincare, professional makeup artistry, and beauty therapy management.</p>
                <p className="text-gray-600 font-medium">Fee: ₦90,000 | Duration: 4-6 months</p>
              </div>

              <div className="bg-fuchsia-50 p-6 rounded-lg border-l-4 border-fuchsia-500">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Furniture Technician</h3>
                <p className="text-gray-700 mb-2">Modern woodworks, joinery, and upholstery for furniture design and production.</p>
                <p className="text-gray-600 font-medium">Fee: ₦100,000 | Duration: 4-5 months</p>
                <p className="text-gray-600 mt-2 italic">Includes workshop tools and materials</p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Reusable Sidebar */}
      <Sidebar
        title="Our Programs"
        items={sections}
        activeId={activeSection}
        onItemSelect={setActiveSection}
      />

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            {getContent()}
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join the LIFELINK community and gain the skills that power the future. Our hands-on training ensures you're career-ready upon graduation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/admissions"
                className="inline-block bg-white text-blue-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
              >
                Apply Now
              </a>
              <a
                href="/admissions#steps"
                className="inline-block bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition-colors"
              >
                View Admission Steps
              </a>
            </div>
          </div>

          {/* Payment Info */}
          <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
            <h4 className="text-xl font-bold text-gray-800 mb-4">Payment Options</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-bold text-gray-800 mb-2">Full Payment Discount</h5>
                <p className="text-gray-700">5% discount if tuition is paid in full before the start of the session.</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-bold text-gray-800 mb-2">Installment Plan</h5>
                <p className="text-gray-700">60% upon admission, 40% mid-session (before final assessments).</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}