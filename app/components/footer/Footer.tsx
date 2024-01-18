"use client";

import { takeCartFromLocalStorage } from "@/app/GlobalRedux/Features/product/productSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Footer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(takeCartFromLocalStorage());
  }, []);

  return (
    <div className="bg-orange-500 text-center h-20 flex justify-center items-center">
      <p>Footer</p>
    </div>
  );
};

export default Footer;
