// import Image from 'next/image';
// import Link from 'next/link';

// const HomeSection = () => {
//   return (
//     <section className="bg-[#7C4EE4] min-h-screen flex flex-col lg:flex-row items-center text-white p-6 lg:p-12">
//       {/* Right Section: Image */}
//       <div className="w-full lg:w-1/2 flex justify-center items-center px-5 mb-8 lg:mb-0">
//         <div className="relative w-[90%] h-[300px] lg:w-[1000.73px] lg:h-[400.8px]">
//           <Image
//             className="rounded-lg shadow-lg object-cover"
//             src="/Gammada.jpg" 
//             alt="Illustration"
//             layout="fill" 
//             priority
//           />
//         </div>
//       </div>

//       {/* Left Section: Text */}
//       <div className="w-full lg:w-1/2 max-w-lg lg:max-w-none text-center lg:text-left px-4 lg:px-8">
//         <h1 className="text-4xl lg:text-5xl font-bold mb-4">Welcome to My Blog</h1>
//         <p className="text-base lg:text-lg leading-relaxed py-2">
//           Discover engaging stories, insightful articles, and creative ideas. Join our community to explore the beauty of knowledge and inspiration!
//         </p>
//         <p className="text-base lg:text-lg leading-relaxed py-2">
//           Discover engaging stories, insightful articles, and creative ideas. Join our community to explore the beauty of knowledge and inspiration!
//         </p>
//         <p className="text-base lg:text-lg leading-relaxed py-2">
//           Discover engaging stories, insightful articles, and creative ideas. Join our community to explore the beauty of knowledge and inspiration!
//         </p>

//         <div className="py-6">
//           <Link href="/">
//             <button className="bg-white text-black py-3 px-6 rounded-md hover:bg-opacity-90 text-sm lg:text-base">
//               Read More
//             </button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomeSection;













import Image from 'next/image';
import Link from 'next/link';

const HomeSection = () => {
  return (
    <section className="bg-[#7C4EE4] min-h-screen flex flex-col lg:flex-row items-center text-white p-6 lg:p-12">
      {/* Right Section: Image */}
      <div className="w-full lg:w-1/2 flex justify-center items-center px-5 mb-8 lg:mb-0">
        <div className="relative w-[90%] h-[300px] lg:w-[1000.73px] lg:h-[400.8px]">
          <Image
            className="rounded-lg shadow-lg object-cover"
            src="/Gammada.jpg" 
            alt="Risaa Media Podcast"
            layout="fill" 
            priority
          />
        </div>
      </div>

      {/* Left Section: Text */}
      <div className="w-full lg:w-1/2 max-w-lg lg:max-w-none text-center lg:text-left px-4 lg:px-8">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">Risaa Media Podcast</h1>
        <p className="text-base lg:text-lg leading-relaxed py-2">
          Welcome to Risaa Media, your go-to destination for thought-provoking discussions, inspiring stories, and vibrant conversations in Afan Oromo. 
        </p>
        <p className="text-base lg:text-lg leading-relaxed py-2">
          Dive into topics ranging from culture and history to modern-day challenges, all delivered with authenticity and passion.
        </p>
        <p className="text-base lg:text-lg leading-relaxed py-2">
          Join us as we amplify Oromo voices and share perspectives that matter. Be part of the journey!
        </p>

        <div className="py-6">
          <Link href="/pages/blog">
            <button className="bg-white text-black py-3 px-6 rounded-md hover:bg-opacity-90 text-sm lg:text-base">
              Explore Episodes
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
