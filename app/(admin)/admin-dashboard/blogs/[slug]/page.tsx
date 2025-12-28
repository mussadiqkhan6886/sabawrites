'use client';

import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Blog } from "@/type";

const Editor = dynamic(
  () => import("@tinymce/tinymce-react").then((mod) => mod.Editor),
  { ssr: false }
);

const EditBlogPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = useParams();
  const router = useRouter();

  const [blog, setBlog] = useState<Partial<Blog>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  // Fetch blog by slug
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blogs/${slug}`);
        if (!res.ok) throw new Error("Failed to fetch blog");
        const data = await res.json();
        setBlog(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug]);

  // Upload new cover image
  const handleCoverUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    try {
      setUploading(true);
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      const data = await res.json();
      setBlog({ ...blog, coverImage: data.url });
    } catch (err) {
      console.error(err);
      alert("Error uploading image");
    } finally {
      setUploading(false);
    }
  };

  // Delete current cover image
  const handleCoverDelete = () => {
    setBlog({ ...blog, coverImage: "" });
  };

  useEffect(() => {
    setBlog({...blog, slug: blog.title!?.toLowerCase().replace(/\s+/g, "-")})
  }, [blog.slug, blog.title])

  const handleSave = async () => {
    try {
      setSaving(true);
      const res = await fetch(`/api/blogs/${slug}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      });
      if (!res.ok) throw new Error("Failed to update blog");
      alert("Blog updated successfully!");
      router.push("/admin-dashboard/blogs");
    } catch (err) {
      console.error(err);
      alert("Error updating blog");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="text-center mt-20">Loading...</div>;

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-4">
      <div>
        <label className="block font-semibold mb-1">Title</label>
        <input
          type="text"
          placeholder="Title"
          value={blog.title || ""}
          onChange={(e) => setBlog({ ...blog, title: e.target.value })}
          className="w-full border p-3"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Excerpt</label>
        <input
          type="text"
          placeholder="Excerpt"
          value={blog.excerpt || ""}
          onChange={(e) => setBlog({ ...blog, excerpt: e.target.value })}
          className="w-full border p-3"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Category</label>
        <input
          type="text"
          placeholder="Category"
          value={blog.category || ""}
          onChange={(e) => setBlog({ ...blog, category: e.target.value })}
          className="w-full border p-3"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Read Time</label>
        <input
          type="text"
          placeholder="Read Time"
          value={blog.readTime || ""}
          onChange={(e) => setBlog({ ...blog, readTime: e.target.value })}
          className="w-full border p-3"
        />
      </div>

      <div className="flex items-center space-x-2">
        <label className="font-semibold">Featured:</label>
        <input
          type="checkbox"
          checked={blog.featured || false}
          onChange={(e) => setBlog({ ...blog, featured: e.target.checked })}
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Cover Image</label>
        {blog.coverImage && (
          <div className="mb-2 relative">
            <img
              src={blog.coverImage}
              alt="Cover Image"
              className="w-full h-64 object-cover rounded"
            />
            <button
              onClick={handleCoverDelete}
              className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleCoverUpload}
          disabled={uploading}
          className="border p-2 rounded"
        />
        {uploading && <p className="text-sm text-gray-500 mt-1">Uploading...</p>}
      </div>

      <div>
        <label className="block font-semibold mb-1">Content</label>
        <Editor
          apiKey={process.env.NEXT_PUBLIC_EDITOR_KEY}
          value={blog.content || ""}
          onEditorChange={(val) => setBlog({ ...blog, content: val })}
          init={{
            height: 400,
            menubar: true,
            plugins: "image link lists code",
            toolbar:
              "undo redo | blocks | bold italic underline | alignleft aligncenter alignright | bullist numlist | image link | code",
            images_upload_handler: async (blobInfo: any) => {
              const formData = new FormData();
              formData.append("file", blobInfo.blob());
              const res = await fetch("/api/upload", { method: "POST", body: formData });
              const data = await res.json();
              return data.url;
            },
          }}
        />
      </div>

      <button
        onClick={handleSave}
        className="bg-black text-white px-6 py-2 rounded"
        disabled={saving}
      >
        {saving ? "Saving..." : "Update Blog"}
      </button>
    </div>
  );
};

export default EditBlogPage;
