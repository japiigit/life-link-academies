'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { searchablePages } from '@/lib/searchData';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<(typeof searchablePages)[0][]>([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Close results when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowResults(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Perform search
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = searchablePages.filter(page =>
      page.title.toLowerCase().includes(query) ||
      page.excerpt.toLowerCase().includes(query)
    ).slice(0, 5); // Limit to 5 results

    setSearchResults(results);
    setShowResults(true);
  }, [searchQuery]);

  const handleResultClick = () => {
    setSearchQuery('');
    setShowResults(false);
  };

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
          {/* Logo */}
          <div className="header-logo-container flex items-center mr-6">
            <img 
              src="/logo.svg" 
              alt="Life Link Academies" 
              className="h-14 w-auto filter drop-shadow-[4px_6px_8px_rgba(0,0,0,0.24)]"
            />
            <span className="ml-2 font-bold text-gray-800">Life Link</span>
            <span className="ml-1 font-bold text-white">Academies</span>
          </div>

          {/* Nav, Apply Now, Search */}
          <div className="flex items-center ml-auto space-x-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative group py-1 transition-colors duration-200 ${
                    isActive ? 'text-white font-medium' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.name}
                  <span 
                    className={`absolute -bottom-0.5 left-0 h-[3px] rounded-full transition-all duration-300 ${
                      isActive ? 'w-full bg-secondary-500' : 'w-0 bg-secondary-400 group-hover:w-full'
                    }`}
                  ></span>
                </Link>
              );
            })}
            <a
              href="/apply"
              className="bg-secondary-500 hover:bg-secondary-600 text-white px-5 py-2.5 rounded-md font-medium transition-colors"
            >
              Apply Now
            </a>

            {/* Enhanced Search Bar */}
            <div className="relative" ref={searchRef}>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => searchQuery && setShowResults(true)}
                className="pl-10 pr-4 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:border-transparent w-48 md:w-64"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>

              {/* Search Results Dropdown */}
              {showResults && searchResults.length > 0 && (
                <div className="absolute z-10 mt-1 w-full bg-white text-gray-800 rounded-md shadow-lg max-h-60 overflow-y-auto">
                  {searchResults.map((result) => (
                    <Link
                      key={result.path}
                      href={result.path}
                      onClick={handleResultClick}
                      className="block px-4 py-2 hover:bg-gray-100 border-b border-gray-100 last:border-b-0"
                    >
                      <div className="font-medium">{result.title}</div>
                      <div className="text-sm text-gray-600">{result.excerpt}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="pb-16">{children}</main>

    <footer className="fixed bottom-0 left-0 w-full bg-green-600 text-white py-3 text-center z-10">
  <p>&copy; {new Date().getFullYear()} Life Link Academies. All rights reserved.</p>
</footer>
    </>
  );
}