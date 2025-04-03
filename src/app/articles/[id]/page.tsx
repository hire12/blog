import { PrismaClient } from '@prisma/client';  // Ensure you have Prisma Client setup
import Image from 'next/image';
import YouTubePage from '@/components/YouTube/YouTube';
import Footer from '@/components/Footer/Footer';
import Subscribe from '@/components/Subscribe/Subscribe';
import Link from 'next/link';
import Header from '@/app/pages/header/page';

const prisma = new PrismaClient();

export default async function ArticlePage({ params }: { params: { id: string } }) {
  // Fetch the article based on the dynamic route parameter
  const article = await prisma.article.findUnique({
    where: {
      id: params.id,
    },
  });

  // If article is not found, return an error message
  if (!article) {
    return <div>Article not found</div>;
  }

  // Format the createdAt date
  const formattedDate = new Date(article.createdAt).toLocaleString();

  return (
    <>
    <Header />
      <div className="bg-gray-50 min-h-screen flex flex-col items-center py-12 px-6">
        <div className="max-w-7xl w-full bg-white p-8 rounded-lg shadow-lg space-y-8">
          {/* Article Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-semibold text-gray-900">{article.title}</h1>
            <p className="text-lg text-gray-600">{formattedDate}</p> {/* Display formatted date */}
            <p className="text-md text-gray-500">Category: {article.category}</p>
          </div>

          {/* Article Content */}
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
}
