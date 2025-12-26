import { blogCategories } from "@/lib/constants";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCollections";
import SectionTitle from "./SectionTitle";

export function Categories() {
  return (
    <div className="rounded-md flex pt-10 flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
        <SectionTitle title="Categories" />
      <InfiniteMovingCards
        items={blogCategories.slice(0, 5)}
        direction="right"
        speed="slow"
      />
      <InfiniteMovingCards
        items={blogCategories.slice(5)}
        direction="left"
        speed="slow"
      />
    </div>
  );
}


