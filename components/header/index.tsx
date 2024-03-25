import React from 'react';
import LogoBlack from '@images/logo-black.svg';
import LogoBlackLong from '@images/logo-black-long.svg';
import LogoWhite from '@images/logo-white.svg';
import LogoWhiteLong from '@images/logo-white-long.svg';
import Image from 'next/image';
import { IconLogin } from '@tabler/icons-react';

export default function Header() {
  return (
    <header className="bg-white fixed top-0 left-0 z-50 flex items-center justify-between w-full h-14 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
      <div className="flex items-center">
        <a rel="nofollow" href="/new">
          <Image
            src={LogoWhiteLong}
            height={24}
            alt="logo"
            className="hidden   mr-2 dark:block"
          />
          <Image
            src={LogoBlackLong}
            height={24}
            alt="logo"
            className="block   mr-2 dark:hidden"
          />
        </a>
      </div>
      <div className="flex items-center justify-end space-x-2">
        <a
          target="_blank"
          href="/auth/signIn"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
        >
          <IconLogin className="size-4 mr-2" />
          <span className="hidden   md:flex">Login</span>
        </a>
      </div>
    </header>
  );
}
