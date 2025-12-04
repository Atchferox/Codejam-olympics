import Search, { SearchSkeleton } from "@/app/components/search";
import { Suspense } from "react";

const DebouncePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Suspense fallback={<SearchSkeleton />}>
        <Search />
      </Suspense>
    </div>
  );
};

export default DebouncePage;
