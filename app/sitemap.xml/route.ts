import { connectDB } from "@/lib/database";
import BlogSchema from "@/lib/schema/BlogSchema";
import CategorySchema from "@/lib/schema/CategorySchema";
import { NextResponse } from "next/server";


type SitemapUrl = {
  loc: string;           
  changefreq: string;    
  priority: number;      //
};

export async function GET() {
  try {
    await connectDB();

    const blogsRes = await BlogSchema.find({}).lean();
    const blogs: DropType[] = JSON.parse(JSON.stringify(blogsRes));

    const categoryRes = await CategorySchema.find({}).lean();
    const categories: CookieType[] = JSON.parse(JSON.stringify(categoryRes));

    const staticPages = [
      '/',
      '/about-me',
      '/contact',
      '/blogs',
      '/category',
    ];

    const urls: SitemapUrl[] = [];

    staticPages.forEach(page => {
      urls.push({
        loc: `https://sabawrites.vercel.app${page}`,
        changefreq: "weekly",
        priority: 0.7,
      });
    });

    // Add menu items
    blogs.forEach(item => {
      urls.push({
        loc: `https://sabawrites.vercel.app/blogs/${item.slug}`,
        changefreq: "weekly",
        priority: 0.9,
      });
    });

    // Add drops
    categories.forEach(item => {
      urls.push({
        loc: `https://sabawrites.vercel.app/category/${item.slug}`,
        changefreq: "weekly",
        priority: 0.8,
      });
    });

    // Generate final XML from typed objects
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    u => `
  <url>
    <loc>${u.loc}</loc>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('')}
</urlset>`;

    return new NextResponse(sitemap, {
      headers: { "Content-Type": "application/xml" },
    });
  } catch (err) {
    console.error("Error generating sitemap:", err);
    return new NextResponse("Sitemap generation failed", { status: 500 });
  }
}
