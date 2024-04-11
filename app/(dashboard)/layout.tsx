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
      <main className="flex min-h-screen flex-col items-center p-0 m-0 pb-10 pt-16 px-4 light:bg-[#f8f8fd] dark:bg-background relative">
        <Image
          fill
          src={BgImg}
          alt="background"
          className="w-full absolute top-0 left-0 object-cover z-0 opacity-50 dark:hidden"
        />
        <div className="relative z-10 w-full h-full flex flex-col items-center">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
