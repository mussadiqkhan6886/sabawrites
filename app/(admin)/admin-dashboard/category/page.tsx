"use client";

import { Category } from "@/type";
import Image from "next/image";
import React, { useEffect, useState } from "react";


const CategoriesPage = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/category");
      const data = await res.json();
      if (res.ok) {
        setCategories(data.categories);
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

 const handleToggle = async (id: string) => {
    if (!confirm("Are you sure you want to activate/deactivate this category?")) return;
  try {
    const res = await fetch(`/api/category/${id}`, {
      method: "PATCH",
    });
    const data = await res.json();
    if (res.ok) {
        alert("Updated")
      setCategories((prev) =>
        prev.map((cat) =>
          cat._id === id ? { ...cat, isActive: !cat.isActive } : cat
        )
      );
    } else {
      alert(data.error || "Something went wrong");
    }
  } catch (err) {
    console.log(err);
  }
};


  if (loading) return <p className="text-center mt-8">Loading...</p>;

  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">All Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((cat) => (
          <div key={cat._id} className="border rounded p-4 flex flex-col items-center">
            {cat.image && <Image width={300} height={300} src={cat.image} alt={cat.name} className="w-full h-full object-cover mb-2 " />}
            <h2 className="text-lg font-semibold">{cat.name}</h2>
            <p className="text-gray-600 text-sm mb-2">{cat.description}</p>
            <button
                onClick={() => handleToggle(cat._id)}
                className={`px-4 py-1 rounded cursor-pointer ${
                    cat.isActive ? "bg-red-600 text-white" : "bg-green-600 text-white"
                }`}
                >
                {cat.isActive ? "Deactivate" : "Activate"}
                </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default CategoriesPage;
