import React from "react";

interface props {
  children: React.ReactNode;
  [key: string]: any;
}
export default function Container({ children, ...rest }: props) {
  return (
    <div className="max-w-[699px] flex flex-col items-center" {...rest}>
      {children}
    </div>
  );
}
