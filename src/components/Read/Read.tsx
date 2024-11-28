

// 'use client';

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'next/navigation'; // Correct import for getting dynamic route params
// import Image from 'next/image';
// import YouTubePage from '@/components/YouTube/YouTube';
// import Footer from '@/components/Footer/Footer';
// import Subscribe from '@/components/Subscribe/Subscribe';
// import Link from 'next/link';

// interface Article {
//   id: string;
//   title: string;
//   description: string;
//   image: string;
//   category: string;
//   link: string;
//   createdAt: string;
//   updatedAt: string;
// }

// const ArticlePage = () => {
//   const { id } = useParams(); // Use useParams from next/navigation to fetch dynamic route params
//   const [article, setArticle] = useState<Article | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (!id) return; // Avoid fetching if ID is not available

//     const fetchArticle = async () => {
//       setLoading(true); // Set loading to true when fetching starts
//       try {
//         const response = await fetch(`/api/articles/${id}`);
//         if (!response.ok) {
//           throw new Error(`Failed to fetch article: ${response.status}`);
//         }
//         const data = await response.json();
//         setArticle(data);
//         setError(null); // Reset error state on successful fetch
//       } catch (err: any) {
//         if (error !== err.message) { // Only update error if it's different
//           setError(err.message);
//         }
//       } finally {
//         setLoading(false); // Set loading to false after fetch is complete
//       }
//     };

//     fetchArticle();
//   }, [id, error]); // Trigger fetch only when `id` or `error` changes

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!article) {
//     return <div>Article not found</div>;
//   }

//   return (
//     <>
//       <div className="bg-gray-50 min-h-screen flex flex-col items-center py-12 px-6">
//         <div className="max-w-7xl w-full bg-white p-8 rounded-lg shadow-lg space-y-8">
//           {/* Article Header */}
//           <div className="text-center space-y-4">
//             <h1 className="text-4xl font-semibold text-gray-900">{article.title}</h1>
//             <p className="text-lg text-gray-600">{article.createdAt}</p>
//             <p className="text-md text-gray-500">Category: {article.category}</p>
//           </div>

//           {/* Article Content (Side by Side Layout on Larger Screens) */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* Article Image */}
//             <div className="relative w-full h-64 sm:h-96 rounded-lg overflow-hidden">
//               <Image
//                 className="object-cover w-full h-full"
//                 src={article.image}
//                 alt={article.title}
//                 width={1200}
//                 height={800}
//               />
//             </div>

//             {/* Article Text */}
//             <div className="space-y-6 flex flex-col justify-between">
//               <p className="text-lg text-gray-700">{article.description}</p>
//               <div className="mt-6 text-center">
//                 <a href={article.link} className="text-blue-500 hover:underline">Read full article</a>
//               </div>
//             </div>
//           </div>

//           {/* Back to Blog Button */}
//           <div className="mt-8 text-center">
//             <Link
//               href={'/articles'}
//               className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg hover:opacity-90 transition duration-300 ease-in-out"
//             >
//               Back to Blog
//             </Link>
//           </div>
//         </div>
//       </div>

//       <YouTubePage />
//       <Subscribe />
//       <Footer />
//     </>
//   );
// };

// export default ArticlePage;  // This is the correct default export!




'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link from next/link for navigation

interface Article {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
}

const categoryColors = [
  'bg-green-100 text-green-800',
  'bg-purple-500 text-blue-800',
  'bg-blue-100 text-blue-800',
  'bg-yellow-100 text-yellow-800',
  'bg-red-100 text-red-800',
  'bg-pink-100 text-pink-800',
];

const truncateDescription = (description: string, maxLength: number = 200) => {
  return description.length > maxLength ? `${description.substring(0, maxLength)}...` : description;
};

export default function UserArticle() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('/api/articles');
        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }
        const data = await response.json();
        setArticles(data);
      } catch (err: any) {
        setError('Error fetching articles');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="blog_container">
      <div className="blog_row">
        <section className="py-8">
          {/* Header Section */}
          <div className="text-center pt-5 mb-12">
            <h1 className="text-4xl font-semibold text-gray-900 mb-6">Popular Articles</h1>
            <p className="mx-auto mb-8 max-w-2xl font-light text-gray-700 md:mb-12 sm:text-xl">
              Stay up to date with the roadmap progress
            </p>
          </div>

          <div className="mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="grid gap-8 lg:grid-cols-3">
              {articles
                .filter((article) => !article.isFeatured)
                .map((article) => {
                  // Random category color
                  const randomColor = categoryColors[Math.floor(Math.random() * categoryColors.length)];

                  return (
                    <article
                      key={article.id}
                      className="p-6 bg-white rounded-lg border shadow-md flex flex-col h-full"
                    >
                      {/* Image with fixed height */}
                      <div className="h-64 mb-4 relative">
                        <Image
                          className="object-cover rounded-lg"
                          src={article.image}
                          alt={article.title}
                          layout="fill" // Fill the parent div while maintaining aspect ratio
                        />
                      </div>

                      {/* Article Details */}
                      <div className="flex justify-between items-center mb-5 text-gray-500">
                        <span
                          className={`${randomColor} text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded`}
                        >
                          {article.category}
                        </span>
                        <span className="text-sm">{article.date}</span>
                      </div>
                      <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                        {/* Link to the dynamic article page */}
                        <Link href={`/articles/${article.id}`}>
                          {article.title}
                        </Link>
                      </h2>

                      {/* Truncated Description */}
                      <p className="mb-5 font-light text-gray-500 flex-grow">
                        {truncateDescription(article.description)}
                      </p>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                          <img
                            className="w-7 h-7 rounded-full"
                            src="http://surl.li/rvbfmo"
                            // alt={`${article.author.name} avatar`}
                          />
                          <span className="font-medium">Gammada Show</span>
                        </div>
                        <Link
                          href={`/pages/articles/${article.id}`} // Same link for "Read more"
                          className="inline-flex items-center font-medium text-blue-600 hover:underline"
                        >
                          Read more
                        </Link>
                      </div>
                    </article>
                  );
                })}
            </div>
          </div>

          <div className="text-center py-3">
            <Link href={'/pages/blog'}>
              <button className="text-center px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full shadow-lg hover:opacity-90 transition duration-300 ease-in-out">
                Explore All
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
