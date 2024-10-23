import ProductCard from "@/app/components/storefront/ProductCard";
import prisma from "@/app/lib/db";
import { notFound } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";

import React from "react";

async function getData(productCategory: string) {
  switch (productCategory) {
    case "all": {
      const data = await prisma.product.findMany({
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
          description: true,
        },
        where: {
          status: "published",
        },
      });

      return {
        title: "All Products",
        data: data,
      };
    }
    case "men": {
      const data = await prisma.product.findMany({
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
          description: true,
        },
        where: {
          status: "published",
          category: "men",
        },
      });

      return {
        title: "Products for Men",
        data: data,
      };
    }
    case "women": {
      const data = await prisma.product.findMany({
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
          description: true,
        },
        where: {
          status: "published",
          category: "women",
        },
      });

      return {
        title: "Products for Women",
        data: data,
      };
    }
    case "kids": {
      const data = await prisma.product.findMany({
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
          description: true,
        },
        where: {
          status: "published",
          category: "kids",
        },
      });

      return {
        title: "Products for Kids",
        data: data,
      };
    }
    default: {
      return notFound();
    }
  }
}

export default async function CategoriesPage({
  params,
}: {
  params: { name: string };
}) {
  noStore();
  const { title, data } = await getData(params.name);
  return (
    <section>
      <h1 className={" font-semibold text-3xl my-5"}>{title}</h1>
      {data && data.length > 0 ? (
        <div className={"grid md:grid-cols-2 lg:grid-cols-3 gap-5"}>
          {data.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <h2 className={"font-semibold tracking-wider"}>
          No products available for this category
        </h2>
      )}
    </section>
  );
}
