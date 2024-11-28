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
    const imageFile = formData.get('image') as Blob; // Assuming 'image' field

    if (!imageFile) {
      return NextResponse.json({ error: 'No image uploaded' }, { status: 400 });
    }

    // Save image locally (or upload to a cloud storage service)
    const imagePath = path.join(process.cwd(), 'public/uploads', imageFile.name);
    const imageBuffer = Buffer.from(await imageFile.arrayBuffer());

    fs.writeFileSync(imagePath, imageBuffer);

    // Save the article in the database (you can store the relative image path)
    const article = await prisma.article.create({
      data: {
        title: title as string,
        description: description as string,
        image: `/uploads/${imageFile.name}`, // Save image path
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
    // Fetch all articles from the database
    const articles = await prisma.article.findMany();

    return NextResponse.json(articles);
  } catch (error) {
    console.error('Error fetching articles:', error);
    return NextResponse.json({ error: 'Failed to fetch articles' }, { status: 500 });
  }
}