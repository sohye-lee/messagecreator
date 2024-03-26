import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ProfileIcon from "./profileIcon";
import { currentUser } from "@clerk/nextjs";
import SignOutButton from "./signOutButton";
import Link from "next/link";

export default async function ProfileDropdown() {
  const user = await currentUser();
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <ProfileIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="right-3 mr-3">
          {/* <UserButton  /> */}
          <DropdownMenuLabel>
            <p className="text-sm ">{user?.firstName ?? "Account"}</p>
            <p className="text-sm font-light block">
              {user?.emailAddresses[0].emailAddress}
            </p>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="/profile">Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>History</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignOutButton />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
