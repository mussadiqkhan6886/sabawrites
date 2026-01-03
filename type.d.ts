export interface BlogAuthor {
  name: string;
  avatar: string;
}
export interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  readTime: string;
  featured: boolean;
  content: string;
  keywords: string[]
  createdAt: string;
}

