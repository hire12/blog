// 'use client'
// import React from 'react';
// import '../../app/globals.css'


// export default function Contact() {
//   return (
//     <div className="relative flex items-center justify-center min-h-screen bg-gray-100 my-5 contact_container">
//       {/* Google Map Background */}
//       <iframe
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8067817.826648999!2d35.19428540122552!3d9.121541404491499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1635d0cedd6cfd2b%3A0x7bf6a67f5348c55a!2sEthiopia!5e0!3m2!1sen!2set!4v1732686351918!5m2!1sen!2set"
//         width="100%"
//         height="100%"
//         style={{ border: 0 }}
//         allowFullScreen
//         loading="lazy"
//         referrerPolicy="no-referrer-when-downgrade"
//         className="absolute inset-0"
//       ></iframe>

//       {/* Popup Form */}
//       <div className="relative contact_form z-10 bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
//         <h1 className="text-2xl font-bold mb-6 text-center">Contact Us</h1>
//         <form className="space-y-6">
//           {/* Name & Email */}
//           <div className="flex gap-4">
//             <input
//               type="text"
//               placeholder="Name"
//               className="w-1/2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C4EE4]"
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-1/2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C4EE4]"
//             />
//           </div>

//           {/* Phone & Subject */}
//           <div className="flex gap-4">
//             <input
//               type="text"
//               placeholder="Phone"
//               className="w-1/2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C4EE4]"
//             />
//             <input
//               type="text"
//               placeholder="Subject"
//               className="w-1/2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C4EE4]"
//             />
//           </div>

//           {/* Message */}
//           <textarea
//             placeholder="Message"
//             rows={5}
//             className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C4EE4]"
//           ></textarea>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-[#7C4EE4] text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition duration-300"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-30"></div>
//     </div>
//   );
// }




'use client';
import React from 'react';
import '../../app/globals.css';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row mb-8">
      {/* Google Map Section */}
      <div className="w-full md:w-1/2 h-96 md:h-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8067817.826648999!2d35.19428540122552!3d9.121541404491499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1635d0cedd6cfd2b%3A0x7bf6a67f5348c55a!2sEthiopia!5e0!3m2!1sen!2set!4v1732686351918!5m2!1sen!2set"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full"
        ></iframe>
      </div>

      {/* Contact Form Section */}
      <div className="w-full md:w-1/2 p-8 flex items-center justify-center bg-white">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Contact Us</h1>
          <form className="space-y-6">
            {/* Name & Email */}
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-1/2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C4EE4]"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-1/2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C4EE4]"
              />
            </div>

            {/* Phone & Subject */}
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Phone"
                className="w-1/2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C4EE4]"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-1/2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C4EE4]"
              />
            </div>

            {/* Message */}
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C4EE4]"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#7C4EE4] text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
