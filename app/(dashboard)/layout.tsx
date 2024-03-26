import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center p-0 m-0 pb-10 pt-16 px-4 light:bg-[#f8f8fd] dark:bg-background">
        {children}
      </main>
      <Footer />
    </>
  );
}
