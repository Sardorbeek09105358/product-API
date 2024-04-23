"use client";

import { ProductType } from "@/interface";
import Image from "next/image";
import { FC, useState } from "react";

interface Props {
  product: ProductType;
  fill?: boolean;
}

const CustomImage: FC<Props> = ({ product, fill }) => {
  const [loading, setIsLoading] = useState(true);
  return (
    <>
      {fill ? (
        <Image
          src={product.image}
          alt={product.title}
          fill
          className={`object-fit-contain  duration-700 ease-in-out group-hover:opacity-75${
            loading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale"
          }`}
          onLoadingComplete={() => setIsLoading(false)}
        />
      ) : (
        <Image
        src={product.image}
        alt={product.title}
        width={400}
        height={1000}
        className={`object-fit-contain  duration-700 ease-in-out group-hover:opacity-75${
          loading
            ? "scale-110 blur-2xl grayscale"
            : "scale-100 blur-0 grayscale"
        }`}
        onLoadingComplete={() => setIsLoading(false)}
      />
      )
      }
    </>
  );
};

export default CustomImage;
