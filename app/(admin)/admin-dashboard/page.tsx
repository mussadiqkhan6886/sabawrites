'use client';

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import imageCompression from "browser-image-compression";

const Editor = dynamic(
  () => import("@tinymce/tinymce-react").then((mod) => mod.Editor),
  { ssr: false }
);

export default function BlogEditor() {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [readTime, setReadTime] = useState("");
  const [featured, setFeatured] = useState(false);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false)

  const uploadCoverImage = async (): Promise<string | null> => {
    if (!coverImage) return null;

    const compressedFile = await imageCompression(coverImage, {
      maxSizeMB: 1,
      maxWidthOrHeight: 1200,
      useWebWorker: true,
    });

    const formData = new FormData();
    formData.append("file", compressedFile);

    const res = await fetch("/api/upload", { method: "POST", body: formData });
    if (!res.ok) throw new Error("Cover image upload failed");

    const data = await res.json();
    return data.url as string;
  };

  const saveBlog = async () => {
    try {
      setLoading(true)
      const coverUrl = await uploadCoverImage();

      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          slug: title.toLowerCase().replace(/\s+/g, "-"),
          excerpt,
          coverImage: coverUrl,
          readTime,
          featured,
          content,
        }),
      });

      if (!res.ok) {
        alert("Blog not saved, error occurred");
        return;
      }
      alert("Blog saved successfully!");
      setTitle("")
      setExcerpt("")
      setCoverImage(null)
      setReadTime("")
      setFeatured(false)
      setContent("")
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally{
      setLoading(false)
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-4">
      <h2 className="text-center text-3xl font-semibold">Add Blog</h2>
      <input
        className="w-full border p-3 text-lg"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="w-full border p-3 text-lg"
        placeholder="Blog Excerpt"
        value={excerpt}
        onChange={(e) => setExcerpt(e.target.value)}
      />

      <div className="flex flex-col  space-y-2">
        <label className="border p-3" >
          <span className="font-semibold">Cover Image: </span>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setCoverImage(e.target.files?.[0] || null)}
          />
        </label>

        <input
          className="border p-2"
          type="text"
          placeholder="Read Time (e.g., 5 min)"
          value={readTime}
          onChange={(e) => setReadTime(e.target.value)}
        />

        <div className="flex items-center mt-2 space-x-2">
          <span>Featured:</span>
          <label>
            <input
              type="radio"
              name="featured"
              checked={!featured}
              onChange={() => setFeatured(false)}
            />{" "}
            No
          </label>
          <label>
            <input
              type="radio"
              name="featured"
              checked={featured}
              onChange={() => setFeatured(true)}
            />{" "}
            Yes
          </label>
        </div>
      </div>

      <Editor
        apiKey={process.env.NEXT_PUBLIC_EDITOR_KEY}
        value={content}
        onEditorChange={(val) => setContent(val)}
        init={{
          height: 500,
          menubar: true,
          plugins: "image link lists code",
          toolbar:
            "undo redo | blocks | bold italic underline | " +
            "alignleft aligncenter alignright | bullist numlist | image link | code",
          images_upload_handler: async (blobInfo: any) => {
             const file = blobInfo.blob();
            const compressedFile = await imageCompression(file, {
              maxSizeMB: 1,
              maxWidthOrHeight: 1200,
              useWebWorker: true,
            });

            const formData = new FormData();
            formData.append("file", compressedFile);

            const res = await fetch("/api/upload", { method: "POST", body: formData });
            if (!res.ok) throw new Error("Image upload failed");
            const data = await res.json();
            return data.url as string;
          },
        }}
      />

      <button
        onClick={saveBlog}
        className="mt-4 bg-black text-white px-6 py-2 rounded"
      >
        {loading ? "Loading..." : "Save Blog"}
      </button>
    </div>
  );
}
