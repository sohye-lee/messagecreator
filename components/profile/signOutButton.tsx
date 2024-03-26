"use client";
import React from "react";
import { useClerk } from "@clerk/clerk-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignOutButton() {
  const { signOut } = useClerk();
  const router = useRouter();
  return (
    <button
      onClick={() => {
        signOut();
        router.push("/");
      }}
    >
      Logout
    </button>
  );
}
