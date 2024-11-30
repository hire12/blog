'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Article {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
}

const categoryColors = [
  'bg-red-100 text-red-800',
  'bg-blue-100 text-blue-800',
  'bg-green-100 text-green-800',
  'bg-yellow-100 text-yellow-800',
];

const truncateDescription = (desc: string, length = 100) =>
  desc.length > length ? `${desc.substring(0, length)}...` : desc;

export default function AdminArticle() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(true);
  const [isEditing, setIsEditing] = useState(false);
  const [currentArticle, setCurrentArticle] = useState<Article | null>(null);

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

  const handleAdd = () => {
    // Redirect to add new article page
    window.location.href = '/admin/articles/create';
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/articles?id=${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`Failed to delete article with ID: ${id}`);
      }

      alert('Article deleted successfully!');
      setArticles((prev) => prev.filter((article) => article.id !== id));
    } catch (error) {
      console.error('Error deleting article:', error);
    }
  };

  const handleEdit = (article: Article) => {
    setCurrentArticle(article);
    setIsEditing(true);
  };

  const handleSave = async () => {
    if (!currentArticle) return;

    try {
      const response = await fetch(`/api/articles/${currentArticle.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(currentArticle),
      });

      if (!response.ok) {
        throw new Error('Failed to update article');
      }

      alert('Article updated successfully!');
      setIsEditing(false);
      setArticles((prev) =>
        prev.map((article) =>
          article.id === currentArticle.id ? currentArticle : article
        )
      );
    } catch (error) {
      console.error('Error updating article:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!currentArticle) return;
    setCurrentArticle({ ...currentArticle, [e.target.name]: e.target.value });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div className="blog_container">
        <section className="py-8">
          {/* Header Section */}
          <div className="text-center pt-5 mb-12">
            <h1 className="text-4xl font-semibold text-gray-900 mb-6">Popular Articles</h1>
            <p className="mx-auto mb-8 max-w-2xl font-light text-gray-700 sm:text-xl">
              Stay up to date with the roadmap progress
            </p>
          </div>

          {/* Admin Action Button */}
          {isAdmin && (
            <div className="text-center mb-6">
                <Link href={'/admin/articles/create'}>
                
              <button
                // onClick={handleAdd}
                className="px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full shadow-lg hover:opacity-90 transition duration-300 ease-in-out"
              >
                Add New Article
              </button>
              </Link>
            </div>
          )}

          <div className="grid gap-8 lg:grid-cols-3">
            {articles.map((article) => {
              const randomColor =
                categoryColors[Math.floor(Math.random() * categoryColors.length)];

              return (
                <article
                  key={article.id}
                  className="p-6 bg-white rounded-lg border shadow-md flex flex-col h-full"
                >
                  <div className="h-64 mb-4 relative">
                    <Image
                      className="object-cover rounded-lg"
                      src={article.image}
                      alt={article.title}
                      layout="fill"
                    />
                  </div>

                  <div className="flex justify-between items-center mb-5 text-gray-500">
                    <span
                      className={`${randomColor} text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded`}
                    >
                      {article.category}
                    </span>
                    <span className="text-sm">{article.date}</span>
                  </div>

                  <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                    <Link href={`/articles/${article.id}`}>{article.title}</Link>
                  </h2>

                  <p className="mb-5 font-light text-gray-500 flex-grow">
                    {truncateDescription(article.description)}
                  </p>

                  <div className="flex justify-between items-center">
                    <div className="flex space-x-4">
                      {isAdmin && (
                        <>
                          <button
                            onClick={() => handleEdit(article)}
                            className="font-medium text-blue-600 hover:underline"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(article.id)}
                            className="font-medium text-red-600 hover:underline"
                          >
                            Delete
                          </button>
                        </>
                      )}
                      <Link
                        href={`/articles/${article.id}`}
                        className="font-medium text-blue-600 hover:underline"
                      >
                        Read more
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>

      {/* Edit Popup */}
      {isEditing && currentArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Edit Article</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Title</label>
              <input
                type="text"
                name="title"
                value={currentArticle.title}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Description</label>
              <textarea
                name="description"
                value={currentArticle.description}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
