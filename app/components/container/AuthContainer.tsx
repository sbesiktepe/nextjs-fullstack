import React from "react";

const AuthContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-fit h-full w-full flex items-center justify-center">
      {children}
    </div>
  );
};

export default AuthContainer;

// 2.yol
// const GeneralContainer = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <div className="md:min-w-[1250px] mx-auto p-3 md:p-8 ">{children}</div>
//   );
// };
