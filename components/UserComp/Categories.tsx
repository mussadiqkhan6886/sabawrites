import { blogCategories } from "@/lib/constants";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCollections";
import SectionTitle from "./SectionTitle";
import Image from "next/image";

export function Categories() {
  return (
    <div className="rounded-md flex pt-10 flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
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
        <div className="relative">
          <h4 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full text-2xl bg-medium/80 w-full text-center py-4">Beauty</h4>
          <Image src={"/makeup-7.jpg"} alt="makeup" width={400} height={400} />
        </div>
        <div className="relative">
          <h4 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full text-2xl bg-medium/80 w-full text-center py-4">LifeStyle</h4>
          <Image src={"/makeup-7.jpg"} alt="makeup" width={400} height={400} />
        </div>
        <div className="relative">
          <h4 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full text-2xl bg-medium/80 w-full text-center py-4">Clothes</h4>
          <Image src={"/makeup-7.jpg"} alt="makeup" width={400} height={400} />
        </div>
      </div>
    </div>
  );
}


