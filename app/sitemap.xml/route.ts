import { connectDB } from "@/lib/database";
import BlogSchema from "@/lib/schema/BlogSchema";
import { Blog } from "@/type";
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
    const blogs: Blog[] = JSON.parse(JSON.stringify(blogsRes));

    const staticPages = [
      '/',
      '/about-me',
      '/contact',
      '/blogs',
      '/terms-and-condition',
      '/privacy-policy',
      '/disclaimer',
      '/cookie-policy'
    ];

    const urls: SitemapUrl[] = [];

    staticPages.forEach(page => {
      urls.push({
        loc: `https://sabawrites.vercel.app${page}`,
        changefreq: "weekly",
        priority: 0.7,
      });
    });

    blogs.forEach(item => {
      urls.push({
        loc: `https://sabawrites.vercel.app/blogs/${item.slug}`,
        changefreq: "weekly",
        priority: 0.9,
      });
    });

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
