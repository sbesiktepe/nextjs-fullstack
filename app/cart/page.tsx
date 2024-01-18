"use client";
import React from "react";
import { RootState } from "../GlobalRedux/store";
import { useDispatch, useSelector } from "react-redux";
import Button from "../utils/Button";
import { deleteFromCart } from "../GlobalRedux/Features/product/productSlice";
import SortableTable from "../utils/SortableTable";

const Cart = () => {
  const { ProductCarts } = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteFromCart(id));
  };

  const wholePrice = () => {
    return ProductCarts.reduce(
      (acc, ProductCart) => acc + ProductCart.price * ProductCart.quantity,
      0
    );
  };

  const config = [
    {
      label: "Ürün Resmi",
      render: (ProductCart: any) => (
        <img src={ProductCart.image} className="h-16 w-16" alt="" />
      ),
    },
    {
      label: "Ürün Adı",
      render: (ProductCart: any) => (
        <div className={"p-3 m-2 truncate w-64"}>{ProductCart.name}</div>
      ),
      sortValue: (ProductCart: any) => ProductCart.name,
    },
    {
      label: "Ürün Miktarı",
      render: (ProductCart: any) => (
        <span className="p-8">{ProductCart.quantity}</span>
      ),
      sortValue: (ProductCart: any) => ProductCart.quantity,
    },
    {
      label: "Ürün Fiyatı",
      render: (ProductCart: any) => (
        <span className="p-8">{ProductCart.price}</span>
      ),
      sortValue: (ProductCart: any) => ProductCart.price,
    },
    {
      render: (ProductCart: any) => (
        <Button
          className="px-3 flex rounded-md"
          secondary
          onClick={() => handleDelete(ProductCart.id)}
        >
          Sil
        </Button>
      ),
    },
  ];

  const keyFn = (ProductCart: any) => {
    return ProductCart.name;
  };

  return (
    <div className=" p-40">
      <SortableTable data={ProductCarts} config={config} keyFn={keyFn} />
      <div className="p-3">
        Toplam Fiyat:
        <div className="text-2xl px-2 text-orange-500 font-bold">
          {wholePrice()} TL
        </div>
      </div>
    </div>
  );
};

export default Cart;
