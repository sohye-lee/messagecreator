import { auth, currentUser } from "@clerk/nextjs";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

interface props {
  link?: string;
  long?: boolean;
}
export default async function ProfileIcon({ link, long }: props) {
  const user = await currentUser();

  return (
    <Link href={link ?? "#"} className="flex items-center gap-2">
      <Avatar className="w-8 h-8 border border-white">
        {user?.hasImage && <AvatarImage src={user?.imageUrl} />}
        <AvatarFallback className="text-[9px] text-white bg-gradient-to-br from-brand to-slate-400">
          {user?.firstName ? user?.firstName?.slice(0, 2) : "Me"}
        </AvatarFallback>
      </Avatar>
      {long && (
        <span className="text-sm ">
          {user?.firstName ?? user?.emailAddresses[0].emailAddress}
        </span>
      )}
    </Link>
  );
}
