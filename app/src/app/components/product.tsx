"use client";
import { ProductType } from "@/interface";
import Link from "next/link";
import { FC } from "react";
import CustomImage from "./Image";

const Product: FC<{ product: ProductType }> = ({ product }) => {
  // console.log(product);
  return (
    <div>
      <Link href={`product/${product.id}`} className="h-96 flex flex-col group p-6 rounded-lg border  hover:scale-105 transition-transform ease-out duration-200">
       <div className="relative max-h-72 flex-1">
        <CustomImage product={product} fill/>
       </div>
        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
          {product.category}
        </h3>
        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
          {product.price}
        </h3>
        <p className="line-clamp-2">{product.description}</p>
      </Link>
    </div>
  );
};

export default Product;
