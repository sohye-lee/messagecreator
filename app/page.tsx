"use client";
import { metadata } from "@/lib/constants";
import Image from "next/image";
import LogoBlack from "@images/logo-black.svg";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
// import { auth } from "@clerk/nextjs";
import { useSession } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import BgImg from "@images/bg-image-2.jpg";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import Heart from "@images/illust_heart.png";
import Target from "@images/illust_target.png";
import Message from "@images/illust_message.png";
import Shape1 from "@images/shape_1.png";
import Shape2 from "@images/shape_2.png";
import Shape3 from "@images/shape_3.png";
import {
  IconArrowRight,
  IconArrowRightTail,
  IconArrowRightToArc,
  IconSignRight,
} from "@tabler/icons-react";

export default function Home() {
  const session = useSession();
  const router = useRouter();
  if (session && session?.isSignedIn) {
    router.push("/chat");
  }

  const queryClient = new QueryClient();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="flex min-h-screen pb-6 pt-18 flex-col items-center p-0 m-0 bg-[#f8f8fd] dark:bg-background md:justify-center px-4 relative">
        <Image
          fill
          src={BgImg}
          alt="background"
          className="w-full absolute top-0 left-0 object-cover z-0 opacity-90 dark:hidden"
        />
        <div className="flex flex-col items-center gap-5 relative z-10 w-full min-h-full">
          <div className="max-w-[599px] pt-20 flex items-center justify-center flex-col gap-3 relative">
            <Link
              href="/"
              className="flex items-center justify-center flex-col"
            >
              <Image
                src={LogoBlack}
                alt="logo"
                className="w-10 animate-bounce"
              />
              <p className="text-3xl font-medium">BlinkMessage</p>
            </Link>

            <p className="text-md font-light text-center max-w-80">
              {metadata.description}
            </p>
            <Link href="/chat">
              <Button className="mt-4 pl-8 pr-6 py-5 text-md space-x-3 gap-3">
                Get Started
                <IconArrowRightToArc />
              </Button>
            </Link>
          </div>
          {/* <div className="md:hidden w-full bg-brand h-[1px] mt-12 opacity-60"></div> */}
          <div className="w-full grid md:grid-cols-3 gap-3 items-stretch pt-24 max-w-[1024px] pb-12">
            <div className="p-5 rounded-lg   flex items-center justify-center flex-col gap-3 group transition-all relative min-h-[280px]">
              <Image
                src={Shape1}
                alt="shape"
                className="absolute z-1 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] opacity-60 w-[300px] h-auto"
              />
              <Image
                src={Target}
                className="relative z-10 transition-all w-[90px] md-[120px] group-hover:scale-125 "
                alt="target"
              />
              <div className="flex flex-col items-center gap-2 relative z-10">
                <h3 className="text-2xl font-[500] text-center text-brand">
                  Flash Formulator
                </h3>

                <p className="text-sm text-center">
                  Get the message you need instantly
                  <br /> - easy and fast.
                </p>
              </div>
            </div>
            <div className="p-5 rounded-lg   flex items-center justify-center flex-col gap-3 group transition-all relative min-h-[280px]">
              <Image
                src={Shape2}
                alt="shape"
                className="absolute z-1 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] opacity-60 w-[300px] h-auto"
              />
              <Image
                src={Message}
                className="relative z-10  transition-all  w-[90px] md-[120px] group-hover:scale-125"
                alt="chat"
              />
              <div className="flex flex-col items-center gap-2  relative z-10">
                <h3 className="text-2xl font-[500] text-center text-brand">
                  Tune with AI
                </h3>

                <p className="text-sm text-center">
                  Talk to our AI to
                  <br />
                  make your messages just right
                </p>
              </div>
            </div>
            <div className="p-5 rounded-lg   flex items-center justify-center flex-col gap-3 group transition-all relative min-h-[280px]">
              <Image
                src={Shape3}
                alt="shape"
                className="absolute z-1 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] opacity-60 w-[300px] h-auto"
              />
              <Image
                src={Heart}
                className="relative z-10  transition-all  w-[90px] md-[120px] group-hover:scale-125"
                alt="target"
              />
              <div className="flex flex-col items-center gap-2 relative z-10">
                <h3 className="text-2xl font-[500] text-center text-brand">
                  Free 10 per day
                </h3>

                <p className="text-sm text-center">
                  Create up to 10 free messages
                  <br />
                  every day
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </HydrationBoundary>
  );
}
