"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  inStock: boolean;
}

interface ProductState {
  ProductCarts: Product[];
}

const initialState: ProductState = {
  ProductCarts: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    takeCartFromLocalStorage: (state) => {
      let getItem: any = localStorage.getItem("cart");
      let getItemParse = JSON.parse(getItem);
      state.ProductCarts = getItemParse || [];
    },
    addToCart: (state, action: PayloadAction<Product>) => {
      state.ProductCarts.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.ProductCarts));
    },
    deleteFromCart: (state, action: PayloadAction<String>) => {
      const deletedItem = state.ProductCarts.filter(
        (ProductCart) => ProductCart.id !== action.payload
      );
      state.ProductCarts = deletedItem;
      localStorage.setItem("cart", JSON.stringify(state.ProductCarts));
    },
  },
});

export const { addToCart, takeCartFromLocalStorage, deleteFromCart } =
  productSlice.actions;
export const productReducer = productSlice.reducer;
