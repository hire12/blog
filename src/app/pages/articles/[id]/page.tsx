// 'use client';

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'next/navigation'; 
// import Image from 'next/image';
// import YouTubePage from '@/components/YouTube/YouTube';
// import Footer from '@/components/Footer/Footer';
// import Subscribe from '@/components/Subscribe/Subscribe';
// import Link from 'next/link';
// import Header from '../../header/page';

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
//   const { id } = useParams(); 
//   const [article, setArticle] = useState<Article | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (!id) return; 

//     const fetchArticle = async () => {
//       setLoading(true); 
//       try {
//         const response = await fetch(`/api/articles/${id}`);
//         if (!response.ok) {
//           throw new Error(`Failed to fetch article: ${response.status}`);
//         }
//         const data = await response.json();
//         setArticle(data);
//         setError(null); 
//       } catch (err: any) {
        
//         if (err.message !== error) {
//           setError(err.message);
//         }
//       } finally {
//         setLoading(false); 
//       }
//     };

//     fetchArticle();
//   }, [id]); 

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
//     <Header />
//       <div className="bg-gray-50 min-h-screen flex flex-col items-center py-12 px-6">
//         <div className="max-w-7xl w-full bg-white p-8 rounded-lg shadow-lg space-y-8">
//           {/* Article Header */}
//           <div className="text-center space-y-4">
//             <h1 className="text-4xl font-semibold text-gray-900">{article.title}</h1>
//             {/* <p className="text-lg text-gray-600">{article.createdAt}</p> */}
//             <p className="text-lg text-gray-600">
//               {new Date(article.createdAt).toLocaleDateString('en-US', {
//                 year: 'numeric',
//                 month: 'long',
//                 day: 'numeric',
//               })}
//             </p>
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
//                 <a href={article.link} target='blank' className="text-blue-500 hover:underline">Here is Link</a>
//               </div>
//             </div>
//           </div>

//           {/* Back to Blog Button */}
//           <div className="mt-8 text-center">
//             <Link
//               href={'/pages/blog'}
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

// export default ArticlePage; 









'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation'; 
import Image from 'next/image';
import YouTubePage from '@/components/YouTube/YouTube';
import Footer from '@/components/Footer/Footer';
import Subscribe from '@/components/Subscribe/Subscribe';
import Link from 'next/link';
import Header from '../../header/page';

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
  const { id } = useParams(); 
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchArticle = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/articles/${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch article: ${response.status}`);
        }
        const data = await response.json();
        setArticle(data);
        setError(null);
      } catch (err: unknown) {
        if (err instanceof Error) {
          if (err.message !== error) {
            setError(err.message);
          }
        } else {
          setError('An unknown error occurred.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

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
      <Header />
      <div className="bg-gray-50 min-h-screen flex flex-col items-center py-12 px-6">
        <div className="max-w-7xl w-full bg-white p-8 rounded-lg shadow-lg space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-semibold text-gray-900">{article.title}</h1>
            <p className="text-lg text-gray-600">
              {new Date(article.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            <p className="text-md text-gray-500">Category: {article.category}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative w-full h-64 sm:h-96 rounded-lg overflow-hidden">
              <Image
                className="object-cover w-full h-full"
                src={article.image}
                alt={article.title}
                width={1200}
                height={800}
              />
            </div>
            <div className="space-y-6 flex flex-col justify-between">
              <p className="text-lg text-gray-700">{article.description}</p>
              <div className="mt-6 text-center">
                <a href={article.link} target='blank' className="text-blue-500 hover:underline">Here is Link</a>
              </div>
            </div>
          </div>

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
