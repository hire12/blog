'use client';

import Post from '@/components/Admin/CreateArticleForm';
import { useState, useEffect } from 'react';


interface Article {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
}

export default function Dashboard() {
  const [articles, setArticles] = useState<Article[]>([]);
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
        setError(err.message || 'Failed to fetch articles');
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Articles Dashboard</h1>

      {error && <div className="text-red-500 text-center">{error}</div>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div key={article.id} className="bg-white p-6 rounded-lg shadow-md">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold">{article.title}</h2>
            <p className="text-gray-600 mt-2">{article.description}</p>
            <div className="mt-4">
              <span className="text-sm text-gray-500">{article.category}</span>
            </div>
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mt-2 inline-block"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
      <Post />
    </div>
  );
}
