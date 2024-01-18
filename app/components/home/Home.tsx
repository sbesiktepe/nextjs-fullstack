import Image from "next/image";
import GeneralContainer from "../container/GeneralContainer";
import HomeProducts from "./HomeProducts";

const Home1 = () => {
  const Categories = [
    "ayakkabı",
    "giyim",
    "oyun",
    "psikoloji",
    "kitap",
    "araba",
    "Ev dekorasyon",
  ];

  const renderedCategories = Categories.map((categori, i) => (
    <span key={i} className="border-2 p-5 rounded-2xl text-2xl mr-4">
      {categori}
    </span>
  ));

  return (
    <div>
      <div className="flex flex-wrap justify-center p-8">
        {renderedCategories}
      </div>
      <div className=" w-full h-60 bg-black flex items-center justify-center">
        <div className="relative h-40 w-full ">
          <Image src="/burada.jpeg" alt="" fill />
        </div>
      </div>
      <HomeProducts />
    </div>
  );
};

export default Home1;
