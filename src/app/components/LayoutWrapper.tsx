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
      <header className="bg-primary-500 text-white shadow-md header-bevel">
      <div className="container mx-auto px-4 py-3 flex items-center">
        {/* Logo in white bevel area */}
        <div className="header-logo-container flex items-center mr-6">
          <img src="/logo.svg" alt="Life Link Academies" className="h-14 w-auto" />
          <span className="ml-2 font-bold text-gray-800">Life Link</span>
           <span className="ml-1 font-bold text-white">Academies</span>
        </div>

        {/* Nav & Apply Now — aligned right */}
        <div className="flex items-center ml-auto space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:underline relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary-500 group-hover:w-full transition-all"></span>
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