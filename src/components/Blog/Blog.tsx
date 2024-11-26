'use client'

import React from 'react';
import Image from 'next/image';
import { articlespopular } from '@/data'; // Corrected the import here

export default function Blog() {
  return (
    <div className="blog_container">
      <div className="blog_row">
        <section className=" py-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h5 className="mb-4 tracking-tight font-extrabold text-black dark:text-black">
              OUR BLOGS
            </h5>
            <h1 className="text-4xl font-semibold text-gray-900 mb-6">Find all our blogs here</h1>
            <p className="mx-auto mb-8 max-w-2xl font-light text-gray-700 md:mb-12 sm:text-xl">
              Stay up to date with the roadmap progress, announcements, and exclusive discounts. Feel free to sign up with your email.
            </p>
          </div>

          <div className="mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="grid gap-8 lg:grid-cols-3">
              {articlespopular
                .filter((article) => !article.isFeatured)
                .map((article) => (
                  <article key={article.id} className="p-6 bg-white rounded-lg border shadow-md">
                    {/* Image with fixed height */}
                    <div className="h-64 mb-4 relative"> {/* Ensuring relative positioning */}
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
