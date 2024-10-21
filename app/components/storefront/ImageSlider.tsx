"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

interface iAppProps {
  images: string[];
}

export default function ImageSlider({ images }: iAppProps) {
  const [mainImageIndex, setMainImageIndex] = useState(0);

  function handlePreviousClick() {
    setMainImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  }

  function handleNextClick() {
    setMainImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  }

  function handleImageClick(index: number) {
    setMainImageIndex(index);
  }
  return (
    <div className={"grid gap-6 md:gap-3 items-start"}>
      <div className={"relative overflow-hidden rounded-lg"}>
        <Image
          className={"object-cover w-[600px] h-[600px]"}
          src={images[mainImageIndex]}
          alt="product_images"
          width={600}
          height={600}
        />

        <div
          className={" absolute inset-0 flex items-center justify-between px-4"}
        >
          <Button variant={"ghost"} size={"icon"}>
            <ChevronLeftIcon
              onClick={handlePreviousClick}
              className={"w-6 h-6"}
            />
          </Button>
          <Button variant={"ghost"} size={"icon"}>
            <ChevronRight className={"w-6 h-6"} onClick={handleNextClick} />
          </Button>
        </div>
      </div>

      <div className={"grid grid-cols-5 gap-4"}>
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => handleImageClick(index)}
            className={cn(
              index === mainImageIndex
                ? "border-2 border-primary rounded-md"
                : "border border-gray-200 rounded-md",
              "relative overflow-hidden",
            )}
          >
            <Image
              src={image}
              alt={"product_images"}
              width={100}
              height={100}
              className={
                "object-cover w-[100px] h-[100px] cursor-pointer rounded-md"
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
