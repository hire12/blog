

'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation'; // Correct import for getting dynamic route params
import Image from 'next/image';
import YouTubePage from '@/components/YouTube/YouTube';
import Footer from '@/components/Footer/Footer';
import Subscribe from '@/components/Subscribe/Subscribe';
import Link from 'next/link';

interface Article {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
  createdAt: string;
  updatedAt: string;
}

const ArticlePage = () => {
  const { id } = useParams(); // Use useParams from next/navigation to fetch dynamic route params
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return; // Avoid fetching if ID is not available

    const fetchArticle = async () => {
      setLoading(true); // Set loading to true when fetching starts
      try {
        const response = await fetch(`/api/articles/${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch article: ${response.status}`);
        }
        const data = await response.json();
        setArticle(data);
        setError(null); // Reset error state on successful fetch
      } catch (err: any) {
        if (error !== err.message) { // Only update error if it's different
          setError(err.message);
        }
      } finally {
        setLoading(false); // Set loading to false after fetch is complete
      }
    };

    fetchArticle();
  }, [id, error]); // Trigger fetch only when `id` or `error` changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <>
      <div className="bg-gray-50 min-h-screen flex flex-col items-center py-12 px-6">
        <div className="max-w-7xl w-full bg-white p-8 rounded-lg shadow-lg space-y-8">
          {/* Article Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-semibold text-gray-900">{article.title}</h1>
            <p className="text-lg text-gray-600">{article.createdAt}</p>
            <p className="text-md text-gray-500">Category: {article.category}</p>
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
              <div className="mt-6 text-center">
                <a href={article.link} className="text-blue-500 hover:underline">Read full article</a>
              </div>
            </div>
          </div>

          {/* Back to Blog Button */}
          <div className="mt-8 text-center">
            <Link
              href={'/articles'}
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

export default ArticlePage;  // This is the correct default export!
