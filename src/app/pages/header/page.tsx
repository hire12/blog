import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo/Title */}
        <h1 className="text-xl font-bold text-gray-800">
          <Link href="/">My Blog</Link>
        </h1>

        {/* Navigation */}
        <div className="flex items-center space-x-6">
          <nav className="space-x-6">
            <Link
              href="/about"
              className="text-gray-600 hover:text-[#7C4EE4] transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="text-gray-600 hover:text-[#7C4EE4] transition-colors duration-300"
            >
              Blog
            </Link>
            <Link href="/contact">
              <button
                className="bg-[#7C4EE4] text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-300"
              >
                Contact
              </button>
            </Link>
          </nav>

          {/* Search Icon */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="hidden md:block bg-gray-100 py-2 px-4 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#7C4EE4]"
            />
            <button className="block md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-gray-600 hover:text-[#7C4EE4] transition-colors duration-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M10.5 18A7.5 7.5 0 1010.5 3a7.5 7.5 0 000 15z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
