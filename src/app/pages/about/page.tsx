import React from 'react';
import Header from '../header/page';
import Subscribe from '@/components/Subscribe/Subscribe';
import Image from 'next/image';
import Footer from '@/components/Footer/Footer';

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
        <section className="container mx-auto py-16 px-6 text-center">
          <h1 className="text-4xl font-bold mb-4 text-blue-600">About Me</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Welcome to my world! I'm Gammadaa Show, a passionate Afan Oromo podcast creator who shares inspiring, educational, and entertaining content. 🎤📚🎶
          </p>
          <Image
            src="/photo6.jpg" 
            alt="Content Creator Photo"
            width={400} 
            height={400}
            className="w-full max-w-md mx-auto rounded-full shadow-lg"
          />
        </section>

        {/* My Journey Section */}
        <section className="container mx-auto py-16 px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">My Journey</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          My journey began when I realized the need for more Afan Oromo content in the podcasting space. Since then, I’ve been on a mission to create high-quality shows that engage and empower my audience.
          </p>
          <Image
            src="/photo10.png"
            alt="My Creative Journey"
            width={500}
            height={300}
            className="w-full max-w-lg mx-auto rounded-lg shadow-md"
          />
        </section>

        {/* What I Do Section */}
        <section className="container mx-auto py-16 px-6 text-center bg-gray-200">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">What I Do</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            I produce and host podcasts that celebrate Oromo culture, explore current events, and feature discussions with notable guests from various fields. My goal is to inform, entertain, and inspire my listeners.
          </p>
          <Image
            src="/photo12.png"
            alt="Content Creation"
            width={500}
            height={300}
            className="w-full max-w-lg mx-auto rounded-lg shadow-md"
          />
        </section>

        {/* Why Follow Me Section */}
        <section className="container mx-auto py-16 px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Why Follow Me</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            By following me, you'll join a growing community of listeners who appreciate meaningful conversations, cultural insights, and engaging storytelling in Afan Oromo. Together, we can celebrate and preserve our heritage.
          </p>
          <Image
            src="/photo11.png"
            alt="Join My Community"
            width={500}
            height={300}
            className="w-full max-w-lg mx-auto rounded-lg shadow-md"
          />
        </section>

        {/* Call to Action */}
        <section className="container mx-auto py-16 px-6 text-center bg-blue-600 text-white">
          <h2 className="text-3xl font-semibold mb-4">Stay Connected</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Don’t miss out on my latest podcasts, interviews, and updates. Subscribe to my newsletter and become a part of our vibrant community!
          </p>
          <Subscribe />
        </section>
      </main>
      <Footer />
    </>
  );
}
