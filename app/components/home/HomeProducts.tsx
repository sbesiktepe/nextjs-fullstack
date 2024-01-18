"use client";
import { products } from "@/app/utils/Products";
import Image from "next/image";
import { Rating } from "@mui/material";
import HomeProductCard from "./HomeProductCard";

const HomeProducts = () => {
  const renderedHomeProducts = products.map((product, i: number) => (
    <HomeProductCard product={product} key={i} />
  ));

  return (
    <div className="flex flex-wrap gap-10 p-6 justify-center">
      {renderedHomeProducts}
    </div>
  );
};

export default HomeProducts;
