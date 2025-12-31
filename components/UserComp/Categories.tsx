import { blogCategories } from "@/lib/constants";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCollections";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { connectDB } from "@/lib/database";
import CategorySchema from "@/lib/schema/CategorySchema";
import { Category } from "@/type";
import Link from "next/link";

const Categories = async () => {

  await connectDB()

  const res = await CategorySchema.find({isActive: true}).lean()

  const categories = JSON.parse(JSON.stringify(res))

  return (
    <section className="rounded-md flex pt-10 flex-col antialiased bg-white items-center justify-center relative overflow-hidden max-w-7xl mx-auto">
        <SectionTitle firstWord="Categories" secondWord="Blogs" />
      {/* <InfiniteMovingCards
        items={blogCategories.slice(0, 5)}
        direction="right"
        speed="slow"
      />
      <InfiniteMovingCards
        items={blogCategories.slice(5)}
        direction="left"
        speed="slow"
      /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5">
        {categories.map((category: Category) => (
          <Link href={`/category/${category.slug}`} key={category._id} className="relative block">
            <h4 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase text-2xl bg-medium/80 w-full text-center py-4">{category.name}</h4>
            <Image src={category.image} alt={category.name} width={400} height={400} className="h-full w-full" />
          </Link>
        ))}
      </div>
    </section>
  );
}


export default Categories