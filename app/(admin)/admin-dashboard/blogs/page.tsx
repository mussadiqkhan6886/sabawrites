'use client';


import BlogCard from "@/components/UserComp/BlogCard";
import { playfair } from "@/lib/fonts/font";
import { Blog } from "@/type";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingBlogId, setDeletingBlogId] = useState<string | null>(null);

 const deleteBlog = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;

    try {
        setDeletingBlogId(id);
        const res = await fetch(`/api/blogs/${id}`, { method: "DELETE" });
        if (!res.ok) throw new Error("Error deleting blog");

        // Remove deleted blog from state
        setBlogs((prev) => prev.filter((blog) => blog._id !== id));
    } catch (err) {
        console.error(err);
        alert("Failed to delete blog");
    } finally {
        setDeletingBlogId(null)
    }
    };


  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs");
        if (!res.ok) throw new Error("Failed to fetch blogs");
        const data: Blog[] = await res.json();
        setBlogs(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div className="text-center mt-20 text-lg">Loading blogs...</div>;
  }

  if (blogs.length === 0) {
    return <div className="text-center mt-20 text-lg">No blogs found.</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => {
      
      const publishedAt = new Date(blog.createdAt).toLocaleDateString()
      return (

        <div>
            <Link key={blog._id} href={`/admin-dashboard/blogs/${blog.slug}`} className="h-full block">
                <Image
                    width={200}
                    height={200}
                    src={blog.coverImage}
                    alt={blog.title}
                    className="h-[400px] w-full object-cover"
                />

                <div className=" bg-light/40 backdrop-blur-sm p-3 pb-0">
                    <h3 className={`${playfair.className} text-center  text-2xl font-light line-clamp-2`}>
                    {blog.title}
                    </h3>

                    <p className="text-gray-900 text-[13px] mt-2 text-center">{blog.excerpt.length >= 400 ? blog.excerpt.slice(0,40) + "..." : blog.excerpt}</p>

                </div>
            </Link>
            <div className="flex px-5 justify-between items-center">
                <p className="my-2 text-xs text-gray-500">
                {publishedAt}
                </p>
                <button>
                {deletingBlogId === blog._id ? (
                    <div className="animate-spin h-4 w-4 border-2 border-gray-400 rounded-full" />
                ) : (
                    <FaTrash
                    color="red"
                    className="cursor-pointer"
                    onClick={() => deleteBlog(blog._id)}
                    />
                )}
                </button>
            </div>
        </div>
      )})}
    </div>
  );
};

export default BlogsPage;
