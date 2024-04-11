import React from "react";
import NotFoundImg from "@images/404_notfound.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IconHome2 } from "@tabler/icons-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex justify-center items-center pb-12">
      <div className="flex  w-full flex-col justify-center items-center gap-3">
        <Image
          src={NotFoundImg}
          alt="not-found"
          className="w-full max-w-[600px]"
        />
        <Button className="bg-brand">
          <Link href="/" className="flex items-center justify-center gap-2">
            <IconHome2 width={16} />
            Go Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
