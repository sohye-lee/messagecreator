"use client";
import React from "react";
import { IconUser } from "@tabler/icons-react";
import { ChatCompletionContentPart } from "openai/resources/chat/completions.mjs";
import Image from "next/image";
import Logo from "@/public/images/logo-black.svg";

interface ChatItemProps {
  role: "function" | "system" | "user" | "assistant" | "tool";
  content: string | ChatCompletionContentPart[] | null | undefined;
}

export default function ChatItem({ role, content }: ChatItemProps) {
  return (
    <div className="group relative flex items-start w-full py-5 px-3 border-b last:border-none border-b-slate-100 dark:border-b-slate-700 ">
      {role == "user" ? (
        <div
          className={`w-8 h-8 relative border border-gray-300 flex items-center justify-center rounded-md bg-gradient-to-r from-brand to-blue-700 text-white`}
        >
          <IconUser width={16} />
        </div>
      ) : (
        <div className="w-8 h-8 border border-gray-300 bg-gray-50  flex items-center justify-center rounded-md  ">
          <Image
            src={Logo}
            alt="bot"
            width={20}
            height={18}
            className="group-last:animate-bounce"
          />
        </div>
      )}
      <div
        dangerouslySetInnerHTML={{ __html: content ?? "" }}
        className="ml-1 pt-1 flex-1  overflow-hidden pl-2"
      ></div>
    </div>
  );
}
