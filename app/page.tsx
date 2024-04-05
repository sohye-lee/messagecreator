import { metadata } from "@/lib/constants";
import Image from "next/image";
import LogoBlack from "@images/logo-black.svg";

import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { auth, SignIn } from "@clerk/nextjs";

export default function Home() {
  const {} = auth();
  return (
    <main className="flex min-h-screen pt-6 pb-16 flex-col items-center p-0 m-0 bg-[#f8f8fd] dark:bg-background justify-center px-4">
      <div className="max-w-[599px] flex items-center justify-center flex-col gap-3">
        <Link href="/" className="flex items-center justify-center flex-col">
          <Image src={LogoBlack} alt="logo" className="w-10 animate-bounce" />
          <p className="text-3xl font-medium">BlinkMessage</p>
        </Link>
        {/* <h1 className="text-lg font-medium text-center mt-1">
          {metadata.tagline}
        </h1> */}
        <p className="text-md font-light text-center max-w-80">
          {metadata.description}
        </p>
        <Link href="/chat">
          <Button className="mt-4">Get Started</Button>
        </Link>
      </div>
    </main>
  );
}
