'use client';

import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";

export default function HomePage() {
  const { session } = useAuth();
  const isLoggedIn = !!session;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="bg-blue-700 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">Life Link Academies</Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/programs" className="hover:underline">Programs</Link>
            <Link href="/news" className="hover:underline">News</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
                                Authenticated use                            */                                Authenticated k
              href="/login"
              className="hidden md:block bg-wh              className="hiddennded-md font-medium hover:bg-gray-              className="hidden md:block bg-wh       </Link>
          )}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"            aria-label="Toggle menu"            aria-label="Toggle menu"                     className="h-6 w-6"
                                                          "
                                                          "
Toggle menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strok                <path strokeLinecap="round" strokeLinejoin="round" s                   <path strokeLinecap="round" strokeLinejoin="round" strok  M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
          sMenuOpen && (
                                                                                                                                                                               ou       >
            <Link href="/programs" classNa            <Lr:underline" onClick={() => setIsMenuOpen(false)}>Programs</Link>
                                                      und                                                      und                                                      und                            tIsMenuOpen(false)}>Contact</Link>
            {!isLoggedIn && (
              <Link
                href="/login"
                             ock                             ock                             ock                             ock                             ock                             ock                             ock                             ock                   ad             * Main Content */}
                      "flex-grow container mx-auto px-4 py-8">
                            te                            te                            te                            te                            te                            te                            te  Empowering future technicians through practical, industry-aligned education in West Africa.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Life Link Academies. All rights reserved.</p>
        </div>
                     /div>
  );
}
