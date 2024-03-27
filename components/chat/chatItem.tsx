"use client";
import React, { useCallback, useEffect, useState } from "react";
import { IconRobotFace } from "@tabler/icons-react";
import { ChatCompletionContentPart } from "openai/resources/chat/completions.mjs";
import { useMutation } from "@tanstack/react-query";
import { getUserInfo } from "@/utils/action";
import Image from "next/image";

interface ChatItemProps {
  role: "function" | "system" | "user" | "assistant" | "tool";
  content: string | ChatCompletionContentPart[] | null | undefined;
}

export default function ChatItem({ role, content }: ChatItemProps) {
  const [image, setImage] = useState<string>("");
  const { mutate, isPending } = useMutation({
    mutationFn: () => getUserInfo(),
    onSuccess: (data) => {
      console.log(data?.user);
      setImage(data?.user?.image ?? "");
    },
  });

  useEffect(() => {
    mutate();
  }, []);
  return (
    <div className="group relative flex items-start w-full py-4 px-3 border-t border-t-slate-100 ">
      {role == "user" ? (
        // <ProfileIcon />
        <div
          className={`w-8 h-8 relative border border-gray-300 bg-gray-50 border-md flex items-center justify-center rounded-md bg-brand/25`}
        >
          <Image
            src={image}
            alt=""
            fill
            className="min-w-full min-h-full w-auto h-auto"
          />
        </div>
      ) : (
        <div className="w-8 h-8 border border-gray-300 bg-gray-50 border-md flex items-center justify-center rounded-md">
          <IconRobotFace width={20} />
        </div>
      )}
      <div className="ml-1 pt-1 flex-1  overflow-hidden pl-2">
        {content?.toString()}
      </div>
    </div>
  );
}
