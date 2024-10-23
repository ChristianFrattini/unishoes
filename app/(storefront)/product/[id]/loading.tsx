import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function LoadingProductPage() {
  return (
    <div className={"grid md:grid-cols-2 gap-6 items-start lg:gap-x-24 py-6"}>
      <div>
        <Skeleton className={"w-full h-[600px]"} />
        <div className={"grid grid-cols-5 gap-4 mt-6"}>
          <Skeleton className={"w-[100px] h-[100px]"} />
          <Skeleton className={"w-[100px] h-[100px]"} />
          <Skeleton className={"w-[100px] h-[100px]"} />
          <Skeleton className={"w-[100px] h-[100px]"} />
          <Skeleton className={"w-[100px] h-[100px]"} />
        </div>
      </div>
      <div>
        <Skeleton className={"w-56 h-12"} />
        <Skeleton className={"w-36 mt-4 h-12"} />
        <Skeleton className={"w-full mt-4 h-60"} />
        <Skeleton className={"w-full mt-5 h-12"} />
      </div>
    </div>
  );
}
