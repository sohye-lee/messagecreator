"use client";
import ChatItem from "@/components/chat/chatItem";
import FullLoader from "@/components/loading/fullLoader";
import { Button } from "@/components/ui/button";
import { Chat } from "@/lib/types";
import { getSingleChat } from "@/utils/action";
import { IconChevronLeft } from "@tabler/icons-react";
import {
  HydrationBoundary,
  dehydrate,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChatCompletionMessageParam } from "openai/resources/chat/completions.mjs";
import React, { useEffect, useState } from "react";

interface props {
  chat: Chat;
}
export default function ChatPage() {
  const queryClient = useQueryClient();
  const path = usePathname();
  const id = path.split("chats/")[1];
  const [chat, setChat] = useState<Chat | null>();
  const [messages, setMessages] = useState<ChatCompletionMessageParam[]>();
  const { mutate: loadChat, isPending } = useMutation({
    mutationFn: () => getSingleChat(id),
    onSuccess: (data) => {
      setChat(data?.chat);

      if (data?.chat?.messages && data?.chat?.messages != "") {
        setMessages([...JSON.parse(data?.chat?.messages)]);
        console.log(typeof JSON.parse(data?.chat?.messages));
      }
      console.log("messages:", messages);
    },
  });

  const renderMessages =
    messages && messages.length > 0 ? (
      messages.map((message, index) => (
        <ChatItem key={index} role={message.role} content={message.content} />
      ))
    ) : (
      <FullLoader />
    );

  useEffect(() => {
    !messages && loadChat();
  }, []);
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className=" w-full overflow-auto   pt-8">
        <div className="mx-auto w-full sm:max-w-3xl flex flex-col gap-3 py-6">
          <div>
            <Button size={"sm"}>
              <Link href="/history" className="flex items-center gap-2">
                <IconChevronLeft width={16} />
                Go Back
              </Link>
            </Button>
          </div>
          <div className=" max-w-full w-full overflow-y-auto relative">
            <div className="flex flex-col h-auto">{renderMessages}</div>
          </div>
        </div>
      </div>
    </HydrationBoundary>
  );
}
