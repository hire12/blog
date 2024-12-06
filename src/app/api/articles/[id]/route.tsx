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





// // Add DELETE method to delete an article
// export async function DELETE(request: Request, { params }: { params: { id: string } }) {
//   const { id } = params;

//   if (!id) {
//     return NextResponse.json({ error: 'ID is required' }, { status: 400 });
//   }

//   try {
//     const article = await prisma.article.delete({
//       where: { id },
//     });
//     return NextResponse.json({ message: 'Article deleted successfully', article });
//   } catch (error) {
//     console.error('Error deleting article:', error);
//     return NextResponse.json({ error: 'Failed to delete article' }, { status: 500 });
//   }
// }


// // Add PUT method to edit/update an article
// export async function PUT(request: Request) {
//   try {
//     const contentType = request.headers.get('content-type');
//     if (!contentType?.includes('application/json')) {
//       return NextResponse.json({ error: 'Invalid content type' }, { status: 400 });
//     }

//     const body = await request.json();
//     const { id, title, description, category, link } = body;

//     if (!id || !title || !description || !category || !link) {
//       return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
//     }

//     const updatedArticle = await prisma.article.update({
//       where: { id },
//       data: {
//         title,
//         description,
//         category,
//         link,
//       },
//     });

//     return NextResponse.json(updatedArticle);
//   } catch (error) {
//     console.error('Error updating article:', error);
//     return NextResponse.json({ error: 'Failed to update article' }, { status: 500 });
//   }
// }
























import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

// Define the Params type explicitly
type Params = {
  id: string;
};

// GET method: Fetch an article by ID
export async function GET(
  request: Request,
  { params }: { params: Params } // Destructure context inline
) {
  try {
    const { id } = params;

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

// DELETE method: Delete an article by ID
export async function DELETE(
  request: Request,
  { params }: { params: Params }
) {
  try {
    const { id } = params;

    const article = await prisma.article.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Article deleted successfully', article });
  } catch (error) {
    console.error('Error deleting article:', error);
    return NextResponse.json({ error: 'Failed to delete article' }, { status: 500 });
  }
}

// PUT method: Update an article
export async function PUT(
  request: Request,
  { params }: { params: Params }
) {
  try {
    const { id } = params;

    const body = await request.json();
    const { title, description, category, link } = body;

    if (!title || !description || !category || !link) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const updatedArticle = await prisma.article.update({
      where: { id },
      data: {
        title,
        description,
        category,
        link,
      },
    });

    return NextResponse.json(updatedArticle);
  } catch (error) {
    console.error('Error updating article:', error);
    return NextResponse.json({ error: 'Failed to update article' }, { status: 500 });
  }
}
