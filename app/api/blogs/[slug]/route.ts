import { NextResponse } from "next/server";
import { connectDB } from "@/lib/database";
import BlogSchema from "@/lib/schema/BlogSchema";

interface Params {
  params: Promise<{ slug: string }>;
}

export async function GET(req: Request, { params }: Params) {
  await connectDB();
  const { slug } = await params;

  if (!slug)
    return NextResponse.json({ success: false, message: "Slug required" }, { status: 400 });

  try {
    const blog = await BlogSchema.findOne({ slug });
    if (!blog)
      return NextResponse.json({ success: false, message: "Blog not found" }, { status: 404 });

    return NextResponse.json(blog);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, message: "Error fetching blog" }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: Params) {
  await connectDB();
  const { slug } = await params;
  const body = await req.json();

  if (!slug)
    return NextResponse.json({ success: false, message: "Slug required" }, { status: 400 });

  try {
    const updatedBlog = await BlogSchema.findOneAndUpdate({ slug }, body, { new: true });
    if (!updatedBlog)
      return NextResponse.json({ success: false, message: "Blog not found" }, { status: 404 });

    return NextResponse.json(updatedBlog);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, message: "Error updating blog" }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: Params) {
  await connectDB();
  const { slug } = await params;

  if (!slug) {
    return NextResponse.json({ success: false, message: "slug required" }, { status: 400 });
  }

  try {
    const blog = await BlogSchema.findOneAndDelete({slug});
    if (!blog) {
      return NextResponse.json({ success: false, message: "Blog not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, message: "Blog deleted" }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, message: "Error deleting blog" }, { status: 500 });
  }
}