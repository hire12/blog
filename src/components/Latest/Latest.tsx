import React from 'react';
import Image from 'next/image';
import { articles } from '@/data';

export default function Latest() {
  return (
    <div className="blog_container">
      <div className="blog_row">
        <section className=" py-8">
          {/* Header Section */}
          <div className="post_head flex justify-between items-center px-7 p-3 rounded-lg">
            <h1 className="text-3xl font-extrabold text-gray-800 tracking-wide font-raleway">Latest Articles</h1>
            <button className="px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full shadow-lg hover:opacity-90 transition duration-300 ease-in-out">
              Explore All
            </button>
          </div>

          <div className="mx-auto max-w-screen-xl lg:py-16 lg:px-6">
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
                            className={`text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded ${article.color}`}
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
                          <img
                            className="w-10 h-10 rounded-full"
                            src={article.author.avatar}
                            alt={`${article.author.name} avatar`}
                          />
                          <span className="font-medium">{article.author.name}</span>
                        </div>
                        <a
                          href={article.link}
                          className="inline-flex items-center font-medium text-blue-600 hover:underline"
                        >
                          Read more
                        </a>
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
                        <img
                          className="w-7 h-7 rounded-full"
                          src={article.author.avatar}
                          alt={`${article.author.name} avatar`}
                        />
                        <span className="font-medium">{article.author.name}</span>
                      </div>
                      <a
                        href={article.link}
                        className="inline-flex items-center font-medium text-blue-600 hover:underline"
                      >
                        Read more
                      </a>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
