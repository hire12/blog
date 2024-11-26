'use client'

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full bg-white px-7 py-4 flex justify-between items-center transition-shadow duration-300 z-50 ${isScrolled ? 'shadow-md' : ''}`}
        style={{ zIndex: 50 }} // Ensure header is on top
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo/Title */}
          <h1 className="text-xl font-bold text-gray-800">
            <Link href="/">My Blog</Link>
          </h1>

          {/* Navigation */}
          <div className="flex items-center space-x-6">
            <nav className="space-x-6">
              <Link
                href="/pages/blog"
                className="text-gray-600 hover:text-[#7C4EE4] transition-colors duration-300"
              >
                Blog
              </Link>

              <Link
                href="/about"
                className="text-gray-600 hover:text-[#7C4EE4] transition-colors duration-300"
              >
                About
              </Link>
            </nav>

            {/* Search Icon */}
            <button className="hover:text-[#7C4EE4] transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M10.5 18A7.5 7.5 0 1010.5 3a7.5 7.5 0 000 15z"
                />
              </svg>
            </button>
            <Link href="/contact">
              <button
                className="bg-[#7C4EE4] text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-300"
              >
                Contact
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Add padding to top of the page content */}
      <div className="pt-20"> {/* Adjust pt value according to header height */}
        {/* Page content goes here */}
      </div>
    </>
  );
}
