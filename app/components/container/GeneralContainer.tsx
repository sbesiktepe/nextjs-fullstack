import React from "react";

interface MyComponentProps {
  children: React.ReactNode;
  // other props...
}

const GeneralContainer: React.FC<MyComponentProps> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="w-[750px] md:w-[1250px] mx-auto p-3 md:p-8 ">
      {children}
    </div>
  );
};

export default GeneralContainer;

// 2.yol
// const GeneralContainer = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <div className="md:min-w-[1250px] mx-auto p-3 md:p-8 ">{children}</div>
//   );
// };
