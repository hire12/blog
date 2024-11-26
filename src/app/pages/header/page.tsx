import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">
          <Link href="/">My Blog</Link>
        </h1>
        <nav className="space-x-6">
          <Link href="/about" className="text-gray-600 hover:text-gray-800">
            About
          </Link>
          <Link href="/blog" className="text-gray-600 hover:text-gray-800">
            Blog
          </Link>
          <Link href="/contact">
            <button
              className="bg-[#7C4EE4] text-white py-2 px-4 rounded-md hover:bg-opacity-90"
            >
              Contact
            </button>
          </Link>
        </nav>
      </div>
    </header>
  )
}
