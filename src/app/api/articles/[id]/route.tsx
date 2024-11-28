// import { NextResponse } from 'next/server';
// import prisma from '@/lib/db';

// export async function GET(request: Request, { params }: { params: { id: string } }) {
//   try {
//     const { id } = params; // Get the dynamic article ID from the URL

//     // Fetch the article by its ID
//     const article = await prisma.article.findUnique({
//       where: { id },
//     });

//     if (!article) {
//       return NextResponse.json({ error: 'Article not found' }, { status: 404 });
//     }

//     return NextResponse.json(article);
//   } catch (error) {
//     console.error('Error fetching article:', error);
//     return NextResponse.json({ error: 'Failed to fetch article' }, { status: 500 });
//   }
// }






import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params; // Get the dynamic article ID from the URL

    // Fetch the article by its ID
    const article = await prisma.article.findUnique({
      where: { id },
    });

    if (!article) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }

    return NextResponse.json(article);
  } catch (error) {
    console.error('Error fetching article:', error);
    return NextResponse.json({ error: 'Failed to fetch article' }, { status: 500 });
  }
}
