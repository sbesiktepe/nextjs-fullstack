"use client";

import { products } from "@/app/utils/Products";
import Image from "next/image";
import { Rating } from "@mui/material";
import GeneralContainer from "@/app/components/container/GeneralContainer";
import Button from "@/app/utils/Button";
import ProductComment from "@/app/components/product-detail/ProductComment";
import { useEffect, useState } from "react";
import type { RootState } from "@/app/GlobalRedux/store";
import {
  addToCart,
  takeCartFromLocalStorage,
} from "@/app/GlobalRedux/Features/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import Counter from "@/app/components/General/Counter";

interface DetailProps {
  id: string | undefined;
}

export type CardProductProps = {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  inStock: boolean;
};

const DetailProduct = ({ params }: { params: DetailProps }) => {
  const { ProductCarts } = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch();
  const [display, setDisplay] = useState<boolean>(false);

  const detailedProduct: any = products.find(
    (product) => product.id === params.id
  );
  const [product, setProduct] = useState<CardProductProps>({
    id: detailedProduct.id,
    name: detailedProduct.name,
    description: detailedProduct.description,
    price: detailedProduct.price,
    quantity: 1,
    image: detailedProduct.image,
    inStock: detailedProduct.inStock,
  });
  useEffect(() => {
    dispatch(takeCartFromLocalStorage());
  }, []);
  useEffect(() => {
    const ifProductAddedtoCart = ProductCarts.find(
      (product) => product.id === detailedProduct.id
    );

    if (ifProductAddedtoCart) {
      setDisplay(true);
    }
  }, [ProductCarts, detailedProduct]);

  const productRating =
    detailedProduct?.reviews.reduce(
      (acc: any, review: any) => acc + review.rating,
      0
    ) / (detailedProduct?.reviews?.length ?? 1) || 0;

  const handleClick = () => {
    dispatch(addToCart(product));
  };

  console.log(product);

  const increaseFunc = () => {
    if (product.quantity < 10) {
      setProduct((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
    }
  };
  const decreaseFunc = () => {
    if (product.quantity > 1) {
      setProduct((prev) => ({ ...prev, quantity: prev.quantity - 1 }));
    }
  };

  return (
    <GeneralContainer>
      <div>
        <div className="h-[750px] block md:flex gap-10 justify-center items-center">
          <div className="relative h-[200px] md:h-[400px] w-[200px] md:w-[400px] mb-3 md:mb-0">
            {detailedProduct?.image && (
              <Image src={detailedProduct.image} fill alt="" />
            )}
          </div>
          <div className="w-full md:w-1/2 space-y-3">
            <div>{detailedProduct?.name}</div>
            <div>
              <Rating name="read-only" value={productRating} readOnly />
            </div>
            <div>{detailedProduct?.description}</div>
            <div>
              STOK DURUMU:
              {detailedProduct?.inStock ? (
                <span className="text-green-500">Ürün Stokta Mevcut</span>
              ) : (
                <span className="text-red-500">Ürün Stokta Mevcut Değil !</span>
              )}
            </div>
            <div className="text-orange-500 text-2xl font-bold">
              {detailedProduct?.price} $
            </div>

            {display ? (
              ""
            ) : (
              <div>
                <Counter
                  cardProduct={product}
                  increaseFunc={increaseFunc}
                  decreaseFunc={decreaseFunc}
                />
              </div>
            )}

            {display ? (
              <Button
                disabled
                onClick={handleClick}
                primary
                className="p-3 w-full rounded-md h-14"
              >
                Sepete Eklendi !!
              </Button>
            ) : (
              <Button
                onClick={handleClick}
                secondary
                className="p-3 w-full rounded-md h-14"
              >
                Sepete Ekle
              </Button>
            )}
          </div>
        </div>
        <div>
          <h1 className="text-center text-5xl my-4">Yorumlar</h1>
          <ProductComment reviews={detailedProduct?.reviews} />
        </div>
      </div>
    </GeneralContainer>
  );
};

export default DetailProduct;

//
