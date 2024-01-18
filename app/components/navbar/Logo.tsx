"use client";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return <div onClick={() => router.push("/")}>Sezai-E-Ticaret.com</div>;
};

export default Logo;
