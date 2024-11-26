import Image from 'next/image';
import Link from 'next/link';

const HomeSection = () => {
  return (
    <section className="bg-[#7C4EE4] h-screen flex flex-col lg:flex-row items-center text-white subscribe-section">
      {/* Right Section: Image */}
      <div className="w-full lg:w-1/2 flex justify-center items-center px-5 mb-4 lg:mb-0">
        <div className="relative w-[1000.73px] h-[400.8px]">
          <Image
            className="rounded-lg shadow-lg object-cover"
            src="/Gammada.jpg"  // Ensure this file is in the public folder
            alt="Illustration"
            layout="fill"  // This allows the image to fill the container
            priority
          />
        </div>
      </div>

      {/* Left Section: Text */}
      <div className="w-full lg:w-1/2 px-8 font-raleway">
        <h1 className="text-5xl font-bold mb-4 font-raleway">Welcome to My Blog</h1>
        <p className="text-lg leading-relaxed py-4 font-raleway">
          Discover engaging stories, insightful articles, and creative ideas.
          Join our community to explore the beauty of knowledge and inspiration!
        </p>
        <p className="text-lg leading-relaxed py-4">
          Discover engaging stories, insightful articles, and creative ideas.
          Join our community to explore the beauty of knowledge and inspiration!
        </p>
        <p className="text-lg leading-relaxed py-4">
          Discover engaging stories, insightful articles, and creative ideas.
          Join our community to explore the beauty of knowledge and inspiration!
        </p>

        <div className="py-7">
          <Link href="/contact">
            <button className="bg-[#FFFFFF] text-black py-3 px-4 rounded-md hover:bg-opacity-90">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
