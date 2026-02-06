// src/app/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Empowering the Next Generation of Tech-Driven Professionals
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90">
              We bridge the gap between Nigerian academic excellence and global vocational expertise. 
              From STEM to MRI Technology, we provide the skills that power the future.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/apply" 
                className="bg-white text-blue-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Enroll Now
              </Link>
              <Link 
                href="/programs" 
                className="bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition-colors"
              >
                Explore Our Courses
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About LIFELINK Center</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Nigeria's premier institution dedicated to closing the gap between traditional academic learning 
            and the practical demands of the global workforce.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="text-blue-700 text-4xl font-bold mb-3">6</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Departments</h3>
            <p className="text-gray-600">Comprehensive programs across multiple fields</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <div className="text-purple-700 text-4xl font-bold mb-3">200,000</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Starting Fee</h3>
            <p className="text-gray-600">Affordable tuition with flexible payment options</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg text-center">
            <div className="text-green-700 text-4xl font-bold mb-3">100%</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Hands-On Learning</h3>
            <p className="text-gray-600">Practical experience in labs and workshops</p>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Programs</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We have categorized our diverse programs to help students find their specific career path
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Academic Excellence & Foundation</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• STEM Mastery</li>
                <li>• Math Pathway (Counting to Calculus)</li>
                <li>• JAMB & WAEC Exam Prep</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-600">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Digital & Emerging Technology</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• AI Literacy</li>
                <li>• Data Science & Analytics</li>
                <li>• Computer Literacy</li>
                <li>• Hardware Engineering</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-emerald-600">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Advanced Medical Sciences</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• MRI & CT Scan Technology</li>
                <li>• Radiology Technician</li>
                <li>• Nuclear Medicine</li>
                <li>• Health Extension</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-600">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Modern Agriculture</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Smart Farm Technician</li>
                <li>• Agricultural Extension</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-pink-600">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Creative Arts & Vocational</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Tailoring & Fashion Design</li>
                <li>• Graphic Design</li>
                <li>• Cosmetology</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-cyan-600">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Engineering & Technical</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Computer Repair & Maintenance</li>
                <li>• Electronic Device Repair</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link 
              href="/programs" 
              className="inline-block bg-blue-700 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition-colors"
            >
              View All Programs
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose LIFELINK?</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-blue-600 font-bold text-sm mb-2">CURRICULUM ALIGNMENT</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Complement Nigerian Standards</h3>
            <p className="text-gray-600">
              Our programs are designed to complement and enhance the Nigerian educational standards.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-purple-600 font-bold text-sm mb-2">HANDS-ON LEARNING</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Practical Experience</h3>
            <p className="text-gray-600">
              We prioritize practical experience in our medical and technical labs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-green-600 font-bold text-sm mb-2">CAREER READY</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Marketable Skills</h3>
            <p className="text-gray-600">
              Our graduates gain marketable skills for immediate employment or entrepreneurship.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join LIFELINK Center and gain the skills that power the future
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/apply" 
              className="bg-white text-blue-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Apply Now
            </Link>
            <Link 
              href="/admissions" 
              className="bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition-colors"
            >
              Learn About Admissions
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">LIFELINK Center</h3>
              <p className="text-gray-400 text-sm">
                Nigeria's premier hub for skill acquisition and vocational studies.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/programs" className="hover:text-white">Programs</Link></li>
                <li><Link href="/admissions" className="hover:text-white">Admissions</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Programs</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/programs#digital-tech" className="hover:text-white">Digital Technology</Link></li>
                <li><Link href="/programs#medical" className="hover:text-white">Medical Imaging</Link></li>
                <li><Link href="/programs#stem" className="hover:text-white">STEM & Academic</Link></li>
                <li><Link href="/programs#vocational" className="hover:text-white">Vocational Arts</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Nigeria</li>
                <li className="mt-2">
                  <Link href="/contact" className="hover:text-white inline-block bg-blue-600 px-4 py-2 rounded">
                    Get in Touch
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© 2026 LIFELINK Center. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}