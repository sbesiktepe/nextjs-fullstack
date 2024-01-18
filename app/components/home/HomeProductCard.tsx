"use client";
import Image from "next/image";
import { Rating } from "@mui/material";
import { useRouter } from "next/navigation";

interface HomeProductCardProps {
  product: Product;
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  brand: string;
  category: string;
  inStock: boolean;
  image: string;
  reviews: {
    id: string;
    userId: string;
    productId: string;
    rating: number;
    comment: string;
    createdDate: string;
    user: {
      id: string;
      name: string;
      email: string;
      emailVerified: boolean | null; // Adjust the type based on your data
      hashedPassword: boolean | null; // Adjust the type based on your data
      createdAt: string;
      updatedAt: string;
      role: string;
      image?: string;
    };
  }[];
}

const HomeProductCard: React.FC<HomeProductCardProps> = ({ product }) => {
  const productRating =
    product?.reviews.reduce((acc: any, review: any) => acc + review.rating, 0) /
    product?.reviews.length;

  const router = useRouter();

  const handleClick = () => {
    router.push(`product/${product.id}`);
  };

  return (
    <div className="p-6 shadow-lg cursor-pointer" onClick={handleClick}>
      <div className="flex flex-col justify-center items-center">
        <div className="relative w-60 h-60">
          <Image src={product?.image} fill alt="" className="object-contain" />
        </div>
        <div className="w-40 md:w-56 text-center truncate py-2">
          {product?.name}
        </div>
      </div>
      <div>
        <Rating name="read-only" value={productRating} readOnly />
      </div>
      <div className="text-2xl py-2 font-bold text-orange-500">
        {product.price} $
      </div>
    </div>
  );
};

export default HomeProductCard;
