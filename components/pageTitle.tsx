import Link from "next/link";
import React from "react";

interface props {
  children: React.ReactNode;
  link?: string;
  [key: string]: any;
}
export default function PageTitle({ children, link, ...rest }: props) {
  return link ? (
    <Link
      href={link}
      className="text-xl font-medium text-center mt-4"
      {...rest}
    >
      {children}
    </Link>
  ) : (
    <h1 className="text-xl font-medium text-center mt-4" {...rest}>
      {children}
    </h1>
  );
}
