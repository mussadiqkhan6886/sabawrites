import { NextResponse } from "next/server";
import { connectDB } from "@/lib/database";
import BlogSchema from "@/lib/schema/BlogSchema";

// Type for incoming blog request
interface BlogRequest {
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  category: string;
  readTime: string;
  featured: boolean;
  content: string;
}

export async function POST(req: Request) {
  try {
    await connectDB();

    const body: BlogRequest = await req.json();

    // Optional: simple validation
    if (!body.title || !body.content) {
      return NextResponse.json(
        { error: "Title and content are required" },
        { status: 400 }
      );
    }

    const blog = await BlogSchema.create(body);

    return NextResponse.json(blog, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to save blog" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    const blogs = await BlogSchema.find().sort({ createdAt: -1 });
    return NextResponse.json(blogs);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}
