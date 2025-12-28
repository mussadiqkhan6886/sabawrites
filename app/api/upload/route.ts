import cloudinary from "@/lib/cloudinary";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file") as File | null;

  if (!file)
    return NextResponse.json({ error: "No file provided" }, { status: 400 });

  const buffer = Buffer.from(await file.arrayBuffer());

  const uploadResult = await new Promise<{ secure_url: string }>((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      { folder: "sabawrites" },
      (error: any, result: any) => {
        if (error) reject(error);
        else if (result) resolve(result as { secure_url: string });
        else reject("Unknown error");
      }
    ).end(buffer);
  });

  return NextResponse.json({ url: uploadResult.secure_url });
}
