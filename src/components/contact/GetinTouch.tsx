'use client';
import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import '../../app/globals.css';

export default function GetInTouch() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex items-center justify-center">
      <div className="w-full max-w-5xl text-center">
        {/* Header Section */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-10">
          We’d love to hear from you! Reach out to us through any of the following channels, and we’ll be happy to assist you.
        </p>

        {/* Contact Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Office Box */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="text-[#7C4EE4] text-5xl mb-4">
              <FaMapMarkerAlt />
            </div>
            <h3 className="text-2xl font-bold mb-2">Office</h3>
            <p className="text-gray-600">123 Main Street, Addis Ababa, Ethiopia</p>
          </div>

          {/* Email Box */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="text-[#7C4EE4] text-5xl mb-4">
              <FaEnvelope />
            </div>
            <h3 className="text-2xl font-bold mb-2">Email</h3>
            <p className="text-gray-600">info@example.com</p>
          </div>

          {/* Phone Box */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="text-[#7C4EE4] text-5xl mb-4">
              <FaPhoneAlt />
            </div>
            <h3 className="text-2xl font-bold mb-2">Phone</h3>
            <p className="text-gray-600">+251 123 456 789</p>
          </div>
        </div>
      </div>
    </div>
  );
}
