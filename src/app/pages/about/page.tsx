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
          <h1 className="text-4xl font-bold mb-4 text-blue-600">About Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Welcome to our website! We are dedicated to delivering excellence in all that we do. 🛠️💻⌛
          </p>
          <Image
            src="/photo6.jpg" 
            alt="About Us Illustration"
            width={400} 
            height={300}
            className="w-full max-w-md mx-auto rounded-lg shadow-lg"
          />
        </section>
      </main>
      <Subscribe />
      <Footer />
    </>
  );
}
