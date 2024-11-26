import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'; // Add social media icons

export default function Footer() {
  return (
    <footer className="bg-white text-black py-8">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Navigation Links */}
        <div className="mb-4">
          <a href="/" className="px-4 hover:underline hover:text-[#7C4EE4] transition-colors duration-300">Home</a>
          <a href="/blog" className="px-4 hover:underline hover:text-[#7C4EE4] transition-colors duration-300">Blog</a>
          <a href="/about" className="px-4 hover:underline hover:text-[#7C4EE4] transition-colors duration-300">About</a>
          <a href="/contact" className="px-4 hover:underline hover:text-[#7C4EE4] transition-colors duration-300">Contact Us</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#7C4EE4] hover:text-gray-300 ">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#7C4EE4] hover:text-gray-300">
            <FaTwitter size={24} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-[#7C4EE4] hover:text-gray-300">
            <FaYoutube size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#7C4EE4] hover:text-gray-300">
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
