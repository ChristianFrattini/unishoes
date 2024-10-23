import prisma from "@/app/lib/db";
import React, { Suspense } from "react";
import ProductCard, { LoadingProductCard } from "./ProductCard";
import { unstable_noStore as noStore } from "next/cache";

async function getData() {
  //await new Promise((res) => setTimeout(res, 5000));
  const data = await prisma.product.findMany({
    where: {
      status: "published",
      isFeatured: true,
    },
    select: {
      id: true,
      name: true,
      description: true,
      images: true,
      price: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 3,
  });
  return data;
}

export default function FeaturedProducts() {
  return (
    <>
      <h2 className={"text-2xl font-extrabold tracking-tight"}>
        Featured Products
      </h2>
      <Suspense fallback={<LoadingRows />}>
        <LoadFeturedProducts />
      </Suspense>
    </>
  );
}

async function LoadFeturedProducts() {
  noStore();
  const data = await getData();
  return (
    <div className={"mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"}>
      {data.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
}

function LoadingRows() {
  return (
    <div className={"mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"}>
      <LoadingProductCard />
      <LoadingProductCard />
      <LoadingProductCard />
    </div>
  );
}
