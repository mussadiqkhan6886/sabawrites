import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectDB } from "@/lib/database";
import cloudinary from "@/lib/cloudinary";
import CategorySchema from "@/lib/schema/CategorySchema";

export async function GET() {
  try {
    await connectDB();

    const categories = await CategorySchema.find().sort({ createdAt: -1 });

    return NextResponse.json({ success: true, categories });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}


export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const formData = await req.formData();
    const name = formData.get("name")?.toString();
    const description = formData.get("description")?.toString();
    const file = formData.get("image"); // could be multiple

    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    let uploadedImages: string;

      if (!(file instanceof File)) {
        throw new Error("Invalid file format");
      }

      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const uploadResult: any = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            { folder: "sabawrites", resource_type: "image" },
            (error, result) => {
              if (error) reject(error);
              else resolve(result);
            }
          )
          .end(buffer);
      });

      uploadedImages = uploadResult.secure_url;

    // Generate slug
    const slug = name.toLowerCase().replace(/\s+/g, "-");

    // Save category
    const category = await CategorySchema.create({
      name,
      slug,
      description,
      image: uploadedImages || "",
    });

    return NextResponse.json({ success: true, category });
  } catch (err: any) {
    console.log(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
