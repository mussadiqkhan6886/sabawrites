import Categories from '@/components/UserComp/Categories'
import React from 'react'

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Categories",
  description:
    "Browse blogs by categories including fashion, beauty, makeup, skincare and lifestyle on Saba Writes.",

  keywords: [
    "blog categories",
    "fashion blogs",
    "beauty blogs",
    "makeup blogs",
    "skincare blogs",
    "lifestyle blogs",
    "Saba Writes",
  ],

  openGraph: {
    title: "Blog Categories | Saba Writes",
    description:
      "Explore fashion, beauty, skincare and lifestyle blogs by category on Saba Writes.",
    type: "website",
  },
};

export const revalidate = 60;


const Category = () => {
  return (
    <main>
      <Categories />
    </main>
  )
}

export default Category
