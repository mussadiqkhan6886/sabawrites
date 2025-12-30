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
  category: {
    _id: string
    name: string
  };
  readTime: string;
  featured: boolean;
  content: string;
  createdAt: string;
}

export interface Category {
  _id: string;
  name: string;
  description: string;
  image: string;
  isActive: boolean;
}