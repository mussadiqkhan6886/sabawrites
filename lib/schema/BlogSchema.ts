import mongoose, { Schema, Document } from "mongoose";

export interface IBlog extends Document {
  title: string;
  slug: string;
  content: string; // HTML from TinyMCE
  coverImage: string;
  createdAt: Date;
  updatedAt: Date;
  excerpt: string;
  category: string;
  readTime: string;
  featured: boolean
}

const BlogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    coverImage: { type: String, required: true },
    excerpt: {type: String, required: true},
    category: {type: String, required: true},
    readTime: {type: String, required: true},
    featured: {type: Boolean, required: true},
  },
  { timestamps: true }
);

export default mongoose.models.Blog ||
  mongoose.model<IBlog>("Blog", BlogSchema);
