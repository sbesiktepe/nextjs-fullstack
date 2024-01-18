import Image from "next/image";
import React, { useEffect } from "react";
import GeneralContainer from "../container/GeneralContainer";
import Search from "../search/Search";
import { getCurrentUser } from "@/app/actions/getCurremtUser";
import User from "./User";
import Logo from "./Logo";
import Cart from "./Cart";

const Navbar = async () => {
  const currentUser = await getCurrentUser();

  return (
    <div className="bg-green-400 ">
      <GeneralContainer>
        <div className="flex justify-between text-lg">
          <div className="bg-orange-500 rounded-lg py-2 px-3 text-white cursor-pointer">
            <Logo />
          </div>
          <Search />
          <ul className="w-[170px] flex justify-between px-3 py-2 ">
            <li className="cursor-pointer">
              <Cart />
            </li>
            <li className="cursor-pointer text-bold">
              <User currentUser={currentUser} />
            </li>
          </ul>
        </div>
      </GeneralContainer>
    </div>
  );
};

export default Navbar;
