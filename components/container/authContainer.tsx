import React from "react";

interface props {
  children: React.ReactNode;
}
export default function AuthContainer({ children }: props) {
  return (
    <div className="bg-[#f8f8fd] dark:bg-background px-4 mx-auto h-screen flex justify-center w-full items-center">
      <div className="max-w-[599px] flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
