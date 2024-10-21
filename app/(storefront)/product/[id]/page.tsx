import { addItem } from "@/app/actions";
import FeaturedProducts from "@/app/components/storefront/FeaturedProducts";
import ImageSlider from "@/app/components/storefront/ImageSlider";
import { ShoppingBagButton } from "@/app/components/SubmitButton";
import prisma from "@/app/lib/db";
import { Button } from "@/components/ui/button";
import { ShoppingBag, ShoppingBagIcon, StarIcon } from "lucide-react";
import { notFound } from "next/navigation";
import React from "react";

async function getData(productId: string) {
  const data = await prisma.product.findUnique({
    where: {
      id: productId,
    },
    select: {
      price: true,
      images: true,
      description: true,
      name: true,
      id: true,
    },
  });

  if (!data) {
    return notFound();
  }

  return data;
}

export default async function ProductIdRoute({
  params,
}: {
  params: { id: string };
}) {
  const data = await getData(params.id);

  const addProductToShoppingCart = addItem.bind(null, data.id);
  return (
    <>
      <div
        className={
          "grid grid-cols-1 md:grid-cols-2 gap-6 items-start lg:gap-x-24 py-6"
        }
      >
        <ImageSlider images={data.images} />
        <div>
          <h1
            className={"text-3xl font-extrabold tracking-tight text-gray-900"}
          >
            {data.name}
          </h1>
          <p className={"text-3xl mt-2 text-gray-900 "}>£{data.price}</p>
          <div className={"mt-3 flex items-center gap-1"}>
            <StarIcon className={"h-4 w-4 text-yellow-500 fill-yellow-500"} />
            <StarIcon className={"h-4 w-4 text-yellow-500 fill-yellow-500"} />
            <StarIcon className={"h-4 w-4 text-yellow-500 fill-yellow-500"} />
            <StarIcon className={"h-4 w-4 text-yellow-500 fill-yellow-500"} />
            <StarIcon className={"h-4 w-4 text-yellow-500 fill-yellow-500"} />
          </div>
          <p className={"text-base text-gray-700 mt-6"}>{data.description}</p>
          <form action={addProductToShoppingCart}>
            <ShoppingBagButton />
          </form>
        </div>
      </div>

      <div className={"mt-16 "}>
        <FeaturedProducts />
      </div>
    </>
  );
}
