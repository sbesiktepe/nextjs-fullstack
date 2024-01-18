"use client";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { AiOutlineUser } from "react-icons/ai";
import { useState } from "react";
import { signOut } from "next-auth/react";

interface UserProps {
  currentUser: User | null | undefined;
}

const User: React.FC<UserProps> = ({ currentUser }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();

  const menuFunc = (type: any) => {
    if (type == "logout") {
      setOpenMenu(false);
      signOut();
      router.push("/login");
    } else if (type == "register") {
      router.push("/register");
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="hidden md:flex relative">
      <div
        className="flex items-center gap-1 cursor-pointer"
        onClick={() => setOpenMenu(!openMenu)}
      >
        <AiOutlineUser size="25" />
        <div>{currentUser ? currentUser.name : "User"}</div>
      </div>
      {openMenu && (
        <div className="absolute w-[200px] top-10 bg-slate-100 shadow-lg right-0 p-2 rounded-md">
          {currentUser ? (
            <div className="space-y-1">
              <div
                onClick={() => router.push("/admin")}
                className="text-slate-600"
              >
                Admins
              </div>
              <div
                onClick={() => menuFunc("logout")}
                className="text-slate-600"
              >
                Logout
              </div>
            </div>
          ) : (
            <div>
              <div
                onClick={() => menuFunc("register")}
                className="text-slate-600"
              >
                Register
              </div>
              <div onClick={() => menuFunc("login")} className="text-slate-600">
                Login
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default User;
