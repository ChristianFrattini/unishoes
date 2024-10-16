"use client";

import { createProduct } from "@/app/actions";
import { UploadDropzone } from "@/app/lib/uploadthing";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

import { ChevronLeft, XIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useFormState } from "react-dom";

import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { productSchema } from "@/app/lib/zodSchemas";
import Image from "next/image";
import { categories } from "@/app/lib/categories";
import SubmitButton from "@/app/components/SubmitButton";

export default function CreateProduct() {
  const [images, setImages] = useState<string[]>([]);
  const [lastResult, action] = useFormState(createProduct, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: productSchema });
    },

    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  const handleDelete = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };
  return (
    <form id={form.id} onSubmit={form.onSubmit} action={action}>
      <div className={" flex items-center gap-4"}>
        <Button variant={"outline"} size={"icon"} asChild>
          <Link href={"/dashboard/products"}>
            <ChevronLeft className={"h-4 w-4"} />
          </Link>
        </Button>

        <h1 className={"text-xl font-semibold tracking-tight"}>
          Add a new product
        </h1>
      </div>

      <Card className={"mt-5"}>
        <CardHeader>
          <CardTitle>Product Details</CardTitle>
          <CardDescription>
            Please, fill in the form and save to add new product.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className={"flex flex-col gap-6"}>
            <div className={"flex flex-col gap-3"}>
              <Label>Name</Label>

              <Input
                key={fields.name.key}
                name={fields.name.name}
                defaultValue={fields.name.initialValue}
                type={"text"}
                className={"w-full"}
                placeholder={"Enter the name of the new product"}
              />
              <p className={"text-red-500 text-muted-foreground"}>
                {fields.name.errors}
              </p>
            </div>

            <div className={"flex flex-col gap-3"}>
              <Label>Description</Label>
              <Textarea
                key={fields.description.key}
                name={fields.description.name}
                defaultValue={fields.description.initialValue}
                className={"w-full"}
                placeholder={"Enter the description of the new product"}
              />
              <p className={"text-red-500 text-muted-foreground"}>
                {fields.description.errors}
              </p>
            </div>

            <div className={"flex flex-col gap-3"}>
              <Label>Price</Label>
              <Input
                key={fields.price.key}
                name={fields.price.name}
                defaultValue={fields.price.initialValue}
                type={"number"}
                className={"w-full"}
                placeholder={"Enter the price of the new product"}
              />
              <p className={"text-red-500 text-muted-foreground"}>
                {fields.price.errors}
              </p>
            </div>

            <div className={"flex flex-col gap-3"}>
              <Label>Featured Product</Label>
              <Switch
                key={fields.isFeatured.key}
                name={fields.isFeatured.name}
                defaultValue={fields.isFeatured.initialValue}
              />
              <p className={"text-red-500 text-muted-foreground"}>
                {fields.isFeatured.errors}
              </p>
            </div>

            <div className={"flex flex-col gap-3"}>
              <Label>Status</Label>
              <Select
                key={fields.status.key}
                name={fields.status.name}
                defaultValue={fields.status.initialValue}
              >
                <SelectTrigger>
                  <SelectValue placeholder={"Select Status"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={"draft"}>Draft </SelectItem>
                  <SelectItem value={"published"}>Published </SelectItem>
                  <SelectItem value={"archived"}>Archived </SelectItem>
                </SelectContent>
              </Select>
              <p className={"text-red-500 text-muted-foreground"}>
                {fields.status.errors}
              </p>
            </div>

            <div className={"flex flex-col gap-3"}>
              <Label>Category</Label>
              <Select
                key={fields.category.key}
                name={fields.category.name}
                defaultValue={fields.category.initialValue}
              >
                <SelectTrigger>
                  <SelectValue placeholder={"Select Category"} />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.name}>
                      {category.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className={"text-red-500 text-muted-foreground"}>
                {fields.category.errors}
              </p>
            </div>

            <div className={"flex flex-col gap-3"}>
              <Label>Images</Label>
              <input
                type={"hidden"}
                value={images}
                key={fields.images.key}
                name={fields.images.name}
                defaultValue={fields.images.initialValue as any}
              ></input>
              {images.length > 0 ? (
                <div className={"flex gap-5"}>
                  {images.map((image, index) => (
                    <div key={index} className={"relative w-[150px] h-[150px]"}>
                      <Image
                        height={150}
                        width={150}
                        src={image}
                        alt={"product_image"}
                        className={
                          "w-full h-full object-cover rounded-lg border"
                        }
                      />
                      <button
                        type={"button"}
                        className={
                          "absolute -top-3 -right-3 bg-red-500 p-2 rounded-lg text-white"
                        }
                        onClick={() => handleDelete(index)}
                      >
                        <XIcon className={"w-3 h-3"} />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <UploadDropzone
                  endpoint={"imageUploader"}
                  onClientUploadComplete={(res) => {
                    setImages(res.map((r) => r.url));
                  }}
                  onUploadError={(res) => {
                    alert("Error: Upload Unsuccessfull");
                  }}
                />
              )}
              <p className={"text-red-500 text-muted-foreground"}>
                {fields.images.errors}
              </p>
            </div>
          </div>
        </CardContent>

        <CardFooter>
          <SubmitButton loadingText={"Saving"} text={"Save Product"} />
        </CardFooter>
      </Card>
    </form>
  );
}
