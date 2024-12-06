import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaTiktok } from 'react-icons/fa'; // Add social media icons

export default function Footer() {
  return (
    <footer className="bg-white text-black py-9 my-9">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Navigation Links */}
        <div className="mb-4">
          <Link href="/" className="px-4 hover:underline hover:text-[#7C4EE4] transition-colors duration-300">Home</Link>
          <Link href="/pages/blog" className="px-4 hover:underline hover:text-[#7C4EE4] transition-colors duration-300">Blog</Link>
          <Link href="/pages/about" className="px-4 hover:underline hover:text-[#7C4EE4] transition-colors duration-300">About</Link>
          <Link href="/pages/contact" className="px-4 hover:underline hover:text-[#7C4EE4] transition-colors duration-300">Contact Us</Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-4">
          <a href="facebook.com/Risaamedia2?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="text-[#7C4EE4] hover:text-gray-300 ">
            <FaFacebook size={24} />
          </a>
          <a href="https://tiktok.com/@gammeeol?_t=8rRXl1tElce&_r=1" target="_blank" rel="noopener noreferrer" className="text-[#7C4EE4] hover:text-gray-300">
            <FaTiktok size={24} />
          </a>
          <a href="https://www.youtube.com/@risaamedia1986" target="_blank" rel="noopener noreferrer" className="text-[#7C4EE4] hover:text-gray-300">
            <FaYoutube size={24} />
          </a>
          <a href="https://www.instagram.com/gammadaao" target="_blank" rel="noopener noreferrer" className="text-[#7C4EE4] hover:text-gray-300">
            <FaInstagram size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#7C4EE4] hover:text-gray-300">
            <FaLinkedin size={24} />
          </a>
        </div>

        <hr className="border-t-2 border-[#7C4EE4] my-11 p-5" />


        {/* Footer Text */}
        <p className="mt-6 text-sm">© 2024 Blog. All rights reserved.</p>
      </div>
    </footer>
  );
}
