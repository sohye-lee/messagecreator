import { metadata } from '@/lib/constants';
import Image from 'next/image';
import LogoBlack from '@images/logo-black.svg';
import LogoBlackLong from '@images/logo-black-long.svg';
import LogoWhite from '@images/logo-white.svg';
import LogoWhiteLong from '@images/logo-white-long.svg';
import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex min-h-screen pt-6 pb-16 flex-col items-center p-0 m-0 bg-[#f8f8fd] dark:bg-background justify-center px-4">
      <div className="max-w-[599px] flex items-center justify-center flex-col gap-3">
        <Link href="/" className="flex items-center justify-center gap-2">
          <Image src={LogoBlack} alt="logo" className="w-10 animate-bounce" />
          <p className="text-lg font-medium">BlinkMessage</p>
        </Link>
        <h1 className="text-2xl font-medium text-center mt-4">
          {metadata.title}
        </h1>
        <p className="text-md font-light text-center">{metadata.description}</p>
        <Button className="mt-4">Get Started</Button>
      </div>
    </main>
  );
}
