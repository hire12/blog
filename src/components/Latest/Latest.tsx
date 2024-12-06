// import React from 'react';
// import Image from 'next/image';
// import { articles } from '@/data';
// import classNames from 'classnames';
// import Link from 'next/link';


// export default function Latest() {
//   return (
//     <div className="blog_container">
//       <div className="blog_row">
//         <section className=" py-8">
//           {/* Header Section */}

//           <div className="text-center pt-5 mb-12">          
//             <h1 className="text-4xl font-semibold text-gray-900 mb-6">Latest Articles</h1>
//             <p className="mx-auto mb-8 max-w-2xl font-light text-gray-700 md:mb-12 sm:text-xl">
//               Stay up to date with the roadmap progress
//             </p>
//           </div>

//           <div className="mx-auto max-w-screen-xl lg:py-0 lg:px-6">
//             {/* Featured Article */}
//             <div className="grid gap-8 lg:grid-cols-1">
//               {articles
//                 .filter((article) => article.isFeatured)
//                 .map((article) => (
//                   <article
//                     key={article.id}
//                     className="p-6 bg-white rounded-lg border shadow-md flex flex-col lg:flex-row"
//                   >
//                     {/* Image Section */}
//                     <div className="flex-none w-full lg:w-1/2 h-64 lg:h-auto mb-4 lg:mb-0">
//                       <Image
//                         className="w-full h-full object-cover rounded-lg"
//                         src={article.image}
//                         alt={article.title}
//                         width={600}
//                         height={400}
//                       />
//                     </div>

//                     {/* Content Section */}
//                     <div className="flex-1 p-6 flex flex-col justify-between mb-12">
//                       <div>
//                         <div className="flex justify-between items-center mb-3 text-gray-500">
//                           <span                
//                         className={`${article.color}, text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded `}

//                           >
//                             {article.category}
//                           </span>
//                           <span className="text-sm">{article.date}</span>
//                         </div>
//                         <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
//                           <a href={article.link}>{article.title}</a>
//                         </h2>
//                         <p className="mb-4 font-light text-gray-500">{article.description}</p>
//                       </div>
//                       <div className="flex justify-between items-center">
//                         <div className="flex items-center space-x-4">
//                           <img
//                             className="w-10 h-10 rounded-full"
//                             src={article.author.avatar}
//                             alt={`${article.author.name} avatar`}
//                           />
//                           <span className="font-medium">{article.author.name}</span>
//                         </div>
//                         <Link
//                           href={`/pages/blog/${article.id}`}
//                           className="inline-flex items-center font-medium text-blue-600 hover:underline"
//                         >
//                           Read more
//                         </Link>
//                       </div>
//                     </div>
//                   </article>
//                 ))}
//             </div>

//             {/* Other Articles */}
//             <div className="grid gap-8 lg:grid-cols-3">
//               {articles
//                 .filter((article) => !article.isFeatured)
//                 .map((article) => (
//                   <article key={article.id} className="p-6 bg-white rounded-lg border shadow-md">
//                     <div className="h-64 mb-4">
//                       <Image
//                         className="w-full h-full object-cover rounded-lg"
//                         src={article.image}
//                         alt={article.title}
//                         width={400}
//                         height={300}
//                       />
//                     </div>
//                     <div className="flex justify-between items-center mb-5 text-gray-500">
//                       <span
//                         className={`text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded ${article.color}`}
//                       >
//                         {article.category}
//                       </span>
//                       <span className="text-sm">{article.date}</span>
//                     </div>
//                     <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
//                       <a href={article.link}>{article.title}</a>
//                     </h2>
//                     <p className="mb-5 font-light text-gray-500">{article.description}</p>
//                     <div className="flex justify-between items-center">
//                       <div className="flex items-center space-x-4">
//                         <img
//                           className="w-7 h-7 rounded-full"
//                           src={article.author.avatar}
//                           alt={`${article.author.name} avatar`}
//                         />
//                         <span className="font-medium">{article.author.name}</span>
//                       </div>
//                       <Link
//                         href={`/pages/blog/${article.id}`}
//                         className="inline-flex items-center font-medium text-blue-600 hover:underline"
//                       >
//                         Read more
//                       </Link>
//                     </div>
//                   </article>
//                 ))}
//             </div>
//           </div>

//           <div className='text-center py-3'>
//           <Link href={'/pages/blog'}>
//             <button className="text-center px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full shadow-lg hover:opacity-90 transition duration-300 ease-in-out">
//               Explore All
//             </button>
//             </Link>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

// 'use client'



import React from 'react';
import Image from 'next/image';
import { articles } from '@/data';
import Link from 'next/link';

export default function Latest() {
  return (
    <div className="blog_container">
      <div className="blog_row">
        <section className=" py-8">
          {/* Header Section */}

          <div className="text-center pt-5 mb-12">
            <h1 className="text-4xl font-semibold text-gray-900 mb-6">Latest Articles</h1>
            <p className="mx-auto mb-8 max-w-2xl font-light text-gray-700 md:mb-12 sm:text-xl">
              Stay up to date with the roadmap progress
            </p>
          </div>

          <div className="mx-auto max-w-screen-xl lg:py-0 lg:px-6">
            {/* Featured Article */}
            <div className="grid gap-8 lg:grid-cols-1">
              {articles
                .filter((article) => article.isFeatured)
                .map((article) => (
                  <article
                    key={article.id}
                    className="p-6 bg-white rounded-lg border shadow-md flex flex-col lg:flex-row"
                  >
                    {/* Image Section */}
                    <div className="flex-none w-full lg:w-1/2 h-64 lg:h-auto mb-4 lg:mb-0">
                      <Image
                        className="w-full h-full object-cover rounded-lg"
                        src={article.image}
                        alt={article.title}
                        width={600}
                        height={400}
                      />
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 p-6 flex flex-col justify-between mb-12">
                      <div>
                        <div className="flex justify-between items-center mb-3 text-gray-500">
                          <span
                            className={`${article.color}, text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded `}
                          >
                            {article.category}
                          </span>
                          <span className="text-sm">{article.date}</span>
                        </div>
                        <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                          <a href={article.link}>{article.title}</a>
                        </h2>
                        <p className="mb-4 font-light text-gray-500">{article.description}</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                          <Image
                            className="w-10 h-10 rounded-full"
                            src={article.author.avatar}
                            alt={`${article.author.name} avatar`}
                            width={40}
                            height={40}
                          />
                          <span className="font-medium">{article.author.name}</span>
                        </div>
                        <Link
                          href={`/pages/blog/${article.id}`}
                          className="inline-flex items-center font-medium text-blue-600 hover:underline"
                        >
                          Read more
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
            </div>

            {/* Other Articles */}
            <div className="grid gap-8 lg:grid-cols-3">
              {articles
                .filter((article) => !article.isFeatured)
                .map((article) => (
                  <article key={article.id} className="p-6 bg-white rounded-lg border shadow-md">
                    <div className="h-64 mb-4">
                      <Image
                        className="w-full h-full object-cover rounded-lg"
                        src={article.image}
                        alt={article.title}
                        width={400}
                        height={300}
                      />
                    </div>
                    <div className="flex justify-between items-center mb-5 text-gray-500">
                      <span
                        className={`text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded ${article.color}`}
                      >
                        {article.category}
                      </span>
                      <span className="text-sm">{article.date}</span>
                    </div>
                    <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                      <a href={article.link}>{article.title}</a>
                    </h2>
                    <p className="mb-5 font-light text-gray-500">{article.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4">
                        <Image
                          className="w-7 h-7 rounded-full"
                          src={article.author.avatar}
                          alt={`${article.author.name} avatar`}
                          width={28}
                          height={28}
                        />
                        <span className="font-medium">{article.author.name}</span>
                      </div>
                      <Link
                        href={`/pages/blog/${article.id}`}
                        className="inline-flex items-center font-medium text-blue-600 hover:underline"
                      >
                        Read more
                      </Link>
                    </div>
                  </article>
                ))}
            </div>
          </div>

          <div className='text-center py-3'>
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
