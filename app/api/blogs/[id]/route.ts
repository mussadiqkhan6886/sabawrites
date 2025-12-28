import { NextResponse } from "next/server";
import { connectDB } from "@/lib/database";
import BlogSchema from "@/lib/schema/BlogSchema";

interface Params {
  params: Promise<{ id: string }>;
}

export async function DELETE(req: Request, { params }: Params) {
  await connectDB();
  const { id } = await params;

  if (!id) {
    return NextResponse.json({ success: false, message: "Id required" }, { status: 400 });
  }

  try {
    const blog = await BlogSchema.findByIdAndDelete(id);
    if (!blog) {
      return NextResponse.json({ success: false, message: "Blog not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, message: "Blog deleted" }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, message: "Error deleting blog" }, { status: 500 });
  }
}
