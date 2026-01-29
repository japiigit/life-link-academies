'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Header */}
      <header className="bg-primary-500 text-white shadow-md">
        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-between container mx-auto px-4 py-3">
          <Link href="/" className="flex items-center">
            <img src="/logo.svg" alt="Life Link Academies" className="h-10 w-auto mr-3" />
            <span className="font-bold">Life Link Academies</span>
          </Link>

          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:underline ${pathname === item.href ? 'font-bold underline' : ''}`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="/apply"
              className="bg-secondary-500 hover:bg-secondary-600 text-white px-5 py-2 rounded-md font-medium transition-colors"
            >
              Apply Now
            </a>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center">
            <img src="/logo.svg" alt="Life Link Academies" className="h-8 w-auto mr-2" />
            <span className="font-bold">Life Link</span>
          </Link>
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-primary-600 px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block hover:underline ${pathname === item.href ? 'font-bold text-yellow-300' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="/apply"
              className="block bg-secondary-500 hover:bg-secondary-600 text-white text-center py-2 rounded-md mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Apply Now
            </a>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Life Link Academies. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}