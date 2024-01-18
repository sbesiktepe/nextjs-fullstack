"use client";
import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./Features/product/productSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
  }, // Add your reducers here
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export default store;
