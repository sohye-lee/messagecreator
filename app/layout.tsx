import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import React from "react";
import { Providers } from "./providers";
import Footer from "@/components/footer";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Blinkless AI Message Generator | Multi-Format Chatbot Conversations",
  description:
    "Elevate your communication with our AI Message Generator. Harness the power of Chat GPT to create engaging, diverse messages across multiple formats instantly. Ideal for emails, chats, social media, and more. Boost your productivity and creativity with our user-friendly web app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="favicon/site.webmanifest" />
          <link
            rel="mask-icon"
            href="favicon/safari-pinned-tab.svg"
            color="#113ede"
          />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff"></meta>
        </head>
        <body className={`${GeistSans.className} ${GeistMono.variable} p-0`}>
          <Providers>
            <Toaster richColors closeButton />
            {children}
            <Footer />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
