// 'use client'; // Mark this as a Client Component

// import { useParams } from 'next/navigation'; // Use useParams to get dynamic route params
// import { articlespopular } from '@/data'; // Import your articles data
// import Image from 'next/image';
// import YouTubePage from '@/components/YouTube/YouTube';
// import Footer from '@/components/Footer/Footer';
// import Subscribe from '@/components/Subscribe/Subscribe';
// import Header from '../../header/page';
// import Link from 'next/link';

// const ArticlePage = () => {
//   const { id } = useParams();  // Get the dynamic 'id' parameter from the URL

//   // Ensure id is defined before searching for the article
//   if (!id) return <p>Loading...</p>;

//   const article = articlespopular.find((article) => article.id.toString() === id.toString());

//   if (!article) {
//     return <p>Article not found</p>;
//   }

//   return (
//     <>
//       <Header />
//       <div className="bg-gray-50 min-h-screen flex flex-col items-center py-12 px-6">
//         <div className="max-w-7xl w-full bg-white p-8 rounded-lg shadow-lg space-y-8">
//           {/* Article Header */}
//           <div className="text-center space-y-4">
//             <h1 className="text-4xl font-semibold text-gray-900">{article.title}</h1>
//             <p className="text-lg text-gray-600">{article.date}</p>
//             <p className="text-md text-gray-500">By {article.author.name}</p>
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
//               {/* Add more paragraphs or content as needed */}
//               <p className="text-lg text-gray-700">
//                 This article goes into detail about the topic. You can add multiple paragraphs for each article.
//               </p>
//               <p className="text-lg text-gray-700">
//                 Tailwind CSS allows you to rapidly build custom designs without leaving your HTML. In this article, we will explore all the basics.
//               </p>
//             </div>
//           </div>

//           {/* Back to Top Button */}
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








// 'use client';

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'next/navigation'; // Import the useParams hook from next/navigation

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

// export default function ArticlePage() {
//   const { id } = useParams(); // Get the dynamic article ID from the URL parameters
//   const [article, setArticle] = useState<Article | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (!id) return; // Avoid fetching if ID is not available

//     const fetchArticle = async () => {
//       try {
//         const response = await fetch(`/api/articles/${id}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch article');
//         }
//         const data = await response.json();
//         setArticle(data);
//       } catch (err: any) {
//         setError('Error fetching article');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchArticle();
//   }, [id]); // Trigger fetch when the `id` changes

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (!article) {
//     return <div>Article not found</div>;
//   }

//   return (
//     <div className="article-container">
//       <div className="text-center py-8">
//         <h1 className="text-4xl font-semibold text-gray-900">{article.title}</h1>
//         <div className="flex justify-center items-center space-x-4 my-4">
//           <span className="text-sm text-gray-500">{article.createdAt}</span>
//           <span className="text-sm text-gray-500">Category: {article.category}</span>
//         </div>
//         <div className="mb-6">
//           <img
//             className="object-cover w-full h-96 rounded-lg"
//             src={article.image}
//             alt={article.title}
//           />
//         </div>
//         <p className="text-lg text-gray-700">{article.description}</p>
//         <div className="mt-6 text-center">
//           <a href={article.link} className="text-blue-500 hover:underline">Read full article</a>
//         </div>
//       </div>
//     </div>
//   );
// }





// 'use client'; // Mark this as a Client Component

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'next/navigation'; // Correct import for getting route params in the app directory
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
//   const { id } = useParams(); // Use useParams from next/navigation to fetch dynamic params
//   const [article, setArticle] = useState<Article | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (!id) return; // Avoid fetching if ID is not available

//     const fetchArticle = async () => {
//       try {
//         const response = await fetch(`/api/articles/${id}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch article');
//         }
//         const data = await response.json();
//         setArticle(data);
//       } catch (err: any) {
//         setError('Error fetching article');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchArticle();
//   }, [id]); // Trigger fetch when the `id` changes

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (!article) {
//     return <div>Article not found</div>;
//   }

//   return (
//     <>
//       <Header />
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

















// 'use client'; // Mark this as a Client Component

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'next/navigation'; // Correct import for getting dynamic route params
// import Image from 'next/image';
// import YouTubePage from '@/components/YouTube/YouTube';
// import Footer from '@/components/Footer/Footer';
// import Subscribe from '@/components/Subscribe/Subscribe';
// import Link from 'next/link';
// // import Header from '@/components/Header/Header';

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
//   const { id } = useParams(); // Use useParams from next/navigation to fetch dynamic params
//   const [article, setArticle] = useState<Article | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (!id) return; // Avoid fetching if ID is not available

//     const fetchArticle = async () => {
//       try {
//         const response = await fetch(`/api/articles/${id}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch article');
//         }
//         const data = await response.json();
//         setArticle(data);
//       } catch (err: any) {
//         setError('Error fetching article');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchArticle();
//   }, [id]); // Trigger fetch when the `id` changes

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (!article) {
//     return <div>Article not found</div>;
//   }

//   return (
//     <>
//       {/* <Header /> */}
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

// export default ArticlePage;





































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
import { useParams } from 'next/navigation'; // Correct import for getting dynamic route params
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
        // Update error only if it hasn't been set yet
        if (err.message !== error) {
          setError(err.message);
        }
      } finally {
        setLoading(false); // Set loading to false after fetch is complete
      }
    };

    fetchArticle();
  }, [id]); // Trigger fetch only when `id` changes

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
          {/* Article Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-semibold text-gray-900">{article.title}</h1>
            {/* <p className="text-lg text-gray-600">{article.createdAt}</p> */}
            <p className="text-lg text-gray-600">
  {new Date(article.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })}
</p>

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
                <a href={article.link} target='blank' className="text-blue-500 hover:underline">Here is Link</a>
              </div>
            </div>
          </div>

          {/* Back to Blog Button */}
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

// This is the correct default export!





























// import prisma from '@/lib/db';
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

// export default async function ArticlePage({ params }: { params: { id: string } }) {
//     // Fetch article data directly in the component body
//     const article = await prisma.article.findUnique({
//       where: {
//         id: params.id,
//       },
//     });
  
//     // If article is not found, return an error message
//     if (!article) {
//       return <div>Article not found</div>;
//     }
  
//     // Format the createdAt date to a string
//     const formattedDate = new Date(article.createdAt).toLocaleString(); // or .toISOString() for a different format
  
//     return (
//       <>
//         <div className="bg-gray-50 min-h-screen flex flex-col items-center py-12 px-6">
//           <div className="max-w-7xl w-full bg-white p-8 rounded-lg shadow-lg space-y-8">
//             {/* Article Header */}
//             <div className="text-center space-y-4">
//               <h1 className="text-4xl font-semibold text-gray-900">{article.title}</h1>
//               <p className="text-lg text-gray-600">{formattedDate}</p> {/* Use the formatted date */}
//               <p className="text-md text-gray-500">Category: {article.category}</p>
//             </div>
  
//             {/* Article Content (Side by Side Layout on Larger Screens) */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {/* Article Image */}
//               <div className="relative w-full h-64 sm:h-96 rounded-lg overflow-hidden">
//                 <Image
//                   className="object-cover w-full h-full"
//                   src={article.image}
//                   alt={article.title}
//                   width={1200}
//                   height={800}
//                 />
//               </div>
  
//               {/* Article Text */}
//               <div className="space-y-6 flex flex-col justify-between">
//                 <p className="text-lg text-gray-700">{article.description}</p>
//                 <div className="mt-6 text-center">
//                   <a href={article.link} className="text-blue-500 hover:underline">Read full article</a>
//                 </div>
//               </div>
//             </div>
  
//             {/* Back to Blog Button */}
//             <div className="mt-8 text-center">
//               <Link
//                 href={'/articles'}
//                 className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg hover:opacity-90 transition duration-300 ease-in-out"
//               >
//                 Back to Blog
//               </Link>
//             </div>
//           </div>
//         </div>
  
//         <YouTubePage />
//         <Subscribe />
//         <Footer />
//       </>
//     );
//   }
  
