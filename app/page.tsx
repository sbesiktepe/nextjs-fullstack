"use client";
import Home1 from "./components/home/Home";
import { useEffect } from "react";
import { takeCartFromLocalStorage } from "./GlobalRedux/Features/product/productSlice";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(takeCartFromLocalStorage());
  }, [dispatch]);
  return <Home1 />;
}
