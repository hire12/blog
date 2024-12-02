import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import prisma from '@/lib/db';






export async function POST(request: Request) {
  try {
    // Check if the content type is multipart/form-data
    const contentType = request.headers.get('content-type');
    if (!contentType?.includes('multipart/form-data')) {
      return NextResponse.json({ error: 'Invalid content type' }, { status: 400 });
    }

    // Parse the form data manually using FormData (for multipart)
    const formData = await request.formData();

    // Extract fields
    const title = formData.get('title');
    const description = formData.get('description');
    const category = formData.get('category');
    const link = formData.get('link');
    const imageFile = formData.get('image') as File; // Assuming 'image' field is a file

    if (!imageFile) {
      return NextResponse.json({ error: 'No image uploaded' }, { status: 400 });
    }

    // Generate a new unique name for the image
    const timestamp = Date.now();
    const extension = path.extname(imageFile.name); // Extract file extension
    const newImageName = `${timestamp}-${Math.random().toString(36).substring(2, 8)}${extension}`;

    // Save image locally (or upload to a cloud storage service)
    const uploadsDir = path.join(process.cwd(), 'public/uploads');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const imagePath = path.join(uploadsDir, newImageName);
    const imageBuffer = Buffer.from(await imageFile.arrayBuffer());

    fs.writeFileSync(imagePath, imageBuffer);

    // Save the article in the database (you can store the relative image path)
    const article = await prisma.article.create({
      data: {
        title: title as string,
        description: description as string,
        image: `/uploads/${newImageName}`, // Save the new image path
        category: category as string,
        link: link as string,
      },
    });

    return NextResponse.json(article, { status: 201 });
  } catch (error) {
    console.error('Error creating article:', error);
    return NextResponse.json({ error: 'Failed to create article' }, { status: 500 });
  }
}





export async function GET() {
  try {
    // Fetch all articles from the database and order them by the 'createdAt' field in descending order
    const articles = await prisma.article.findMany({
      orderBy: {
        createdAt: 'desc', // Sort by createdAt in descending order
      },
    });

    return NextResponse.json(articles);
  } catch (error) {
    console.error('Error fetching articles:', error);
    return NextResponse.json({ error: 'Failed to fetch articles' }, { status: 500 });
  }
}








// Add DELETE method to delete an article
export async function DELETE(request: Request) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    const article = await prisma.article.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Article deleted successfully', article });
  } catch (error) {
    console.error('Error deleting article:', error);
    return NextResponse.json({ error: 'Failed to delete article' }, { status: 500 });
  }
}

// Add PUT method to edit/update an article
export async function PUT(request: Request) {
  try {
    const contentType = request.headers.get('content-type');
    if (!contentType?.includes('application/json')) {
      return NextResponse.json({ error: 'Invalid content type' }, { status: 400 });
    }

    const body = await request.json();
    const { id, title, description, category, link } = body;

    if (!id || !title || !description || !category || !link) {
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
