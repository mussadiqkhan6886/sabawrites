import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectDB } from "@/lib/database";
import CategorySchema from "@/lib/schema/CategorySchema";

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    await connectDB();

    const categoryId = (await params).id;

    const category = await CategorySchema.findById(categoryId);
    if (!category) {
      return NextResponse.json({ error: "Category not found" }, { status: 404 });
    }

    category.isActive = !category.isActive;
    await category.save();

    return NextResponse.json({ success: true, category });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
