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
                                Au   nticated use                                                              Au   nticated us"hidden md:flex space-x-3">
              <Link
                href="/log                href="/log   ="bg                href="/lo py-2 rounded-md font-medium hover:bg-gray-100"
              >
                                                                                                                                          wh                                                                                                                                                                            {/* Mobile Menu Button */}
                                                           te                                                            te          n)}
            aria-label="Toggle menu"
          >
            <svg
                                                                              w-6"
              fill="none"
              viewBox="0 0 24 24"
              st              st              st              st              st              st              st              st              st              st         18              st  >
              st              st              st              st              st              st              st              st   />
                                                                                                                                                                                                                                                                                                                                                               Na                                                                                                                                       nd                                   n(false)}>News                    <Link href="/contact" className="block hover:underline" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            {!isLoggedIn && (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ure technicians through practical, industry-aligned education in West Africa.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Life Link Academies. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
