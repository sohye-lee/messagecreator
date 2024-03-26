// "use client";
import React from "react";
import LogoBlack from "@images/logo-black.svg";
import LogoWhite from "@images/logo-white.svg";
import Image from "next/image";

import ProfileDropdown from "../profile/profileDropdown";
import SwitchButton from "./switchButton";

export default function Header() {
  return (
    <header className="bg-white fixed top-0 left-0 z-50 flex items-center justify-between w-full h-14 px-4 border-b shrink-0 light:bg-white dark:bg-background backdrop-blur-xl">
      <div className="flex items-center">
        <a rel="nofollow" href="/" className="flex items-center gap-2">
          <Image
            src={LogoWhite}
            height={32}
            alt="logo"
            className="hidden animate-bounce-once dark:block hover:animate-bounce"
          />
          <Image
            src={LogoBlack}
            height={32}
            alt="logo"
            className="block animate-bounce-once dark:hidden hover:animate-bounce"
          />
          <div className="overflow-hidden w-auto">
            <h1 className="text-md font-medium text-center animate-slide-right">
              BlinkMessage
            </h1>
          </div>
        </a>
      </div>
      <div className="flex items-center justify-end space-x-2">
        <SwitchButton />
        <ProfileDropdown />
      </div>
    </header>
  );
}
