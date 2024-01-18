"use client";
import { RootState } from "@/app/GlobalRedux/store";
import { useRouter } from "next/navigation";
import { IoMdBasket } from "react-icons/io";
import { useSelector } from "react-redux";

const Cart = () => {
  const { ProductCarts } = useSelector((state: RootState) => state.product);
  const router = useRouter();

  return (
    <div className="relative" onClick={() => router.push("/cart")}>
      <IoMdBasket size="30" />
      <span className="absolute -top-1 -right-1 bg-orange-500 rounded-full text-sm w-4 h-4 text-center">
        {ProductCarts.length}
      </span>
    </div>
  );
};

export default Cart;
