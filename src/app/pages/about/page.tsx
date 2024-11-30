// import React from 'react';
// import Header from '../header/page';
// import Subscribe from '@/components/Subscribe/Subscribe';
// import Image from 'next/image';
// import Footer from '@/components/Footer/Footer';

// export default function Page() {
//   return (
//     <>
//       <Header />
//       <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
        
//         {/* About Us Section */}
//         <section className="container mx-auto py-16 px-6 text-center">
//           <h1 className="text-4xl font-bold mb-4 text-blue-600">About Us</h1>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
//             Welcome to our website! We are dedicated to delivering excellence in all that we do. 🛠️💻⌛
//           </p>
//           <Image
//             src="/photo6.jpg"
//             alt="About Us Illustration"
//             width={400}
//             height={300}
//             className="w-full max-w-md mx-auto rounded-lg shadow-lg"
//           />
//         </section>

//         {/* Our Mission Section */}
//         <section className="bg-white py-16">
//           <div className="container mx-auto text-center">
//             <h2 className="text-3xl font-bold mb-6 text-blue-600">Our Mission</h2>
//             <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
//               Our mission is to empower individuals and organizations by providing top-quality resources, knowledge, and tools to help them succeed in the ever-changing tech landscape.
//             </p>
//           </div>
//         </section>

//         {/* Services Section */}
//         <section className="py-16 bg-gray-200">
//           <div className="container mx-auto text-center">
//             <h2 className="text-3xl font-bold mb-6 text-green-600">What We Offer</h2>
//             <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
//               We offer a wide range of services designed to help you grow, whether you're a business, a content creator, or an individual looking to enhance your skills.
//             </p>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               <div className="p-6 bg-white rounded-lg shadow-lg">
//                 <h3 className="text-xl font-semibold text-blue-600 mb-3">Consulting</h3>
//                 <p className="text-gray-600">Get expert advice to take your business to the next level with tailored solutions.</p>
//               </div>
//               <div className="p-6 bg-white rounded-lg shadow-lg">
//                 <h3 className="text-xl font-semibold text-blue-600 mb-3">Training</h3>
//                 <p className="text-gray-600">Access exclusive training programs designed to enhance your skills in various fields.</p>
//               </div>
//               <div className="p-6 bg-white rounded-lg shadow-lg">
//                 <h3 className="text-xl font-semibold text-blue-600 mb-3">Resources</h3>
//                 <p className="text-gray-600">Unlock valuable resources and tools to make your projects easier and more efficient.</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Team Section */}
//         <section className="bg-white py-16">
//           <div className="container mx-auto text-center">
//             <h2 className="text-3xl font-bold mb-6 text-blue-600">Our Team</h2>
//             <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
//               Meet the passionate individuals behind our mission, working tirelessly to make a difference in the tech community.
//             </p>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
//                 <Image
//                   src="/team-member1.jpg"
//                   alt="Team Member 1"
//                   width={200}
//                   height={200}
//                   className="rounded-full mx-auto mb-4"
//                 />
//                 <h3 className="text-xl font-semibold text-blue-600">Jane Doe</h3>
//                 <p className="text-gray-600">CEO & Founder</p>
//               </div>
//               <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
//                 <Image
//                   src="/team-member2.jpg"
//                   alt="Team Member 2"
//                   width={200}
//                   height={200}
//                   className="rounded-full mx-auto mb-4"
//                 />
//                 <h3 className="text-xl font-semibold text-blue-600">John Smith</h3>
//                 <p className="text-gray-600">Lead Developer</p>
//               </div>
//               <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
//                 <Image
//                   src="/team-member3.jpg"
//                   alt="Team Member 3"
//                   width={200}
//                   height={200}
//                   className="rounded-full mx-auto mb-4"
//                 />
//                 <h3 className="text-xl font-semibold text-blue-600">Emily Johnson</h3>
//                 <p className="text-gray-600">Marketing Specialist</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Testimonials Section */}
//         <section className="bg-gray-200 py-16">
//           <div className="container mx-auto text-center">
//             <h2 className="text-3xl font-bold mb-6 text-green-600">What Our Clients Say</h2>
//             <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
//               Don’t just take our word for it—here’s what our satisfied clients have to say about working with us.
//             </p>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               <div className="p-6 bg-white rounded-lg shadow-lg">
//                 <p className="text-gray-600">"This service transformed our business. Highly recommended!"</p>
//                 <p className="mt-4 text-blue-600">- Client 1</p>
//               </div>
//               <div className="p-6 bg-white rounded-lg shadow-lg">
//                 <p className="text-gray-600">"The training provided was exactly what we needed. It was insightful and practical."</p>
//                 <p className="mt-4 text-blue-600">- Client 2</p>
//               </div>
//               <div className="p-6 bg-white rounded-lg shadow-lg">
//                 <p className="text-gray-600">"Great team to work with! They delivered on time and exceeded expectations."</p>
//                 <p className="mt-4 text-blue-600">- Client 3</p>
//               </div>
//             </div>
//           </div>
//         </section>

//       </main>
//       <Subscribe />
//       <Footer />
//     </>
//   );
// }




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
            Welcome to my world! I'm [Content Creator's Name], a passionate creator sharing content that inspires, educates, and entertains. 🎥💻🎶
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
            It all started back in [Year], when I first discovered my love for [topic or niche]. Since then, I’ve been creating content that connects with people all over the world.
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
            From video content to writing, my mission is to [provide value in some way, e.g., entertain, inform, etc.]. I create content that resonates with my audience, providing [educational videos, lifestyle content, music tutorials, etc.].
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
            By following me, you'll be part of a community of like-minded individuals who are passionate about [topic]. Together, we can [learn, share ideas, grow, etc.].
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
            Don’t miss out on my latest updates, tutorials, and exclusive content! Subscribe to my newsletter and join the community.
          </p>
          <Subscribe />
        </section>

      </main>
      <Footer />
    </>
  );
}
