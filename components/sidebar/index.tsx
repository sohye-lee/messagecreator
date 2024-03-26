import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarSeparator,
  MenubarItem,
  MenubarMenu,
  MenubarShortcut,
  MenubarTrigger,
} from "../ui/menubar";
import { SidebarIcon } from "lucide-react";
import SidebarItem from "./sidebarItem";

export default function Sidebar() {
  return (
    <div className="fixed z-10 left-0 top-0 h-screen min-w-[200px] bg-background border-r border-r-slate-100 pt-20 px-4 hidden md:flex flex-col gap-2">
      <SidebarItem>
        <SidebarIcon width={16} /> Dashboard
      </SidebarItem>
    </div>
  );
}
