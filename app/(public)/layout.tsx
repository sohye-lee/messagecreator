import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";
import BgImg from "@images/bg-image-2.jpg";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main
        className={`flex min-h-screen flex-col items-center  light:bg-[#f8f8fd] dark:bg-background relative `}
      >
        <Image
          fill
          src={BgImg}
          alt="background"
          className="w-full absolute top-0 left-0 object-cover z-0 opacity-30 dark:hidden"
        />
        <div className="relative z-10 w-full">{children}</div>
      </main>
      <Footer />
    </>
  );
}
