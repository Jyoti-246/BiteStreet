import DeleteButton from "@/components/DeleteButton";
import Price from "@/components/Price";
import { ProductType } from "@/types/types";
import Image from "next/image";
import React from "react";

const getData = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }

  return res.json();
};

const SingleProductPage = async (context: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await context.params;
  const singleProduct: ProductType = await getData(id);

  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row md:gap-8 md:items-center relative">
      <div className="relative w-full h-1/2 md:h-[70%]">
        {singleProduct.img && (
          <Image
            src={singleProduct.img}
            alt=""
            fill
            className="object-contain"
          />
        )}
      </div>
      <div className="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
        <h1 className="font-bold text-3xl uppercase xl:text-5xl">
          {singleProduct.title}
        </h1>
        <p>{singleProduct.desc}</p>
        <Price product={singleProduct} />
      </div>

      <DeleteButton id={singleProduct.id} />
    </div>
  );
};

export default SingleProductPage;
