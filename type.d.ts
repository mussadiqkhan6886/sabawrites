export interface BlogAuthor {
  name: string;
  avatar: string;
}

export interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  tags: string[];
  author: BlogAuthor;
  publishedAt: string; // ISO date string
  readTime: string;
  featured: boolean;
}
