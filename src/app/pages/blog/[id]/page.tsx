"use client"; // Mark this as a Client Component

import { useParams } from 'next/navigation'; // Use useParams to get dynamic route params
import { articles } from '@/data'; // Import your articles data
import Image from 'next/image';
import YouTubePage from '@/components/YouTube/YouTube';
import Footer from '@/components/Footer/Footer';
import Subscribe from '@/components/Subscribe/Subscribe';
import Header from '../../header/page';
import Link from 'next/link';

const ArticlePage = () => {
  const { id } = useParams();  // Get the dynamic 'id' parameter from the URL

  // Ensure id is defined before searching for the article
  if (!id) return <p>Loading...</p>;

  const article = articles.find((article) => article.id.toString() === id.toString());

  if (!article) {
    return <p>Article not found</p>;
  }

  return (
    <>
      <Header />
      <div className="bg-gray-50 min-h-screen flex flex-col items-center py-12 px-6">
        <div className="max-w-7xl w-full bg-white p-8 rounded-lg shadow-lg space-y-8">
          {/* Article Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-semibold text-gray-900">{article.title}</h1>
            <p className="text-lg text-gray-600">{article.date}</p>
            <p className="text-md text-gray-500">By {article.author.name}</p>
          </div>

          {/* Article Content (Side by Side Layout on Larger Screens) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Article Image */}
            <div className="relative w-full h-64 sm:h-96 rounded-lg overflow-hidden">
              <Image
                className="object-cover w-full h-full"
                src={article.image}
                alt={article.title}
                width={1200}
                height={800}
              />
            </div>

            {/* Article Text */}
            <div className="space-y-6 flex flex-col justify-between">
              <p className="text-lg text-gray-700">{article.description}</p>
              {/* Add more paragraphs or content as needed */}
              <p className="text-lg text-gray-700">
                This article goes into detail about the topic. You can add multiple paragraphs for each article.
              </p>
              <p className="text-lg text-gray-700">
                Tailwind CSS allows you to rapidly build custom designs without leaving your HTML. In this article, we will explore all the basics.
              </p>
            </div>
          </div>

          {/* Back to Top Button */}
          <div className="mt-8 text-center">
            <Link
              href={'/pages/blog'}
              className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg hover:opacity-90 transition duration-300 ease-in-out"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
      <YouTubePage />
      <Subscribe />
      <Footer />
    </>
  );
};

export default ArticlePage;
