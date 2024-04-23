import { ProductType } from "@/interface";
import React from "react";
import Contact from "../components/Contact";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
import Product from "../components/product";
import Section from "../components/Section";

const ProductsPage =  async() => {
    const res = await fetch("https://fakestoreapi.com/products");
    const products: ProductType[] = await res.json();
  return (
    <div>
      <Feature />
      <section className="flex flex-col space-y-12 container mx-auto">
        <h1 className="text-5xl font-bold text-center capitalize">
          my shop deals
        </h1>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        <Section />
        <Pricing />
        <Contact />
        <Footer />
      </section>
    </div>
  );
};

export default ProductsPage;
