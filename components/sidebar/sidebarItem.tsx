import Link from "next/link";
import React from "react";

interface props {
  children: React.ReactNode;
  link?: string;
  [key: string]: any;
}
export default function SidebarItem({ link, children }: props) {
  return (
    <Link
      href={link ?? "#"}
      className="px-3 py-1 transition-all duration-300 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-md hover:text-brand flex items-center gap-1 text-sm light:text-slate-700 dark:hover:text-brand/40"
    >
      {children}
    </Link>
  );
}
