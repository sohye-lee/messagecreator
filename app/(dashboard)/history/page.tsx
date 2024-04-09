"use client";
import React, { useEffect, useState } from "react";
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
  useMutation,
} from "@tanstack/react-query";
import { getChatList } from "@/utils/action";
import { Chat } from "@/lib/types";
import Link from "next/link";
import FullLoader from "@/components/loading/fullLoader";

export default function HistoryPage() {
  const queryClient = new QueryClient();
  const [chats, setChats] = useState<Chat[] | null>();
  const {
    mutate: loadChats,
    isPending,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: () => getChatList(),
    onSuccess: (data) => {
      console.log(data?.chats);
      data?.chats && setChats(data?.chats);
    },
  });

  const renderChat =
    chats && chats.length > 0 ? (
      chats?.map((chat) => {
        return (
          <Link
            key={chat.id}
            href={`/chats/${chat.id}`}
            className="px-4 py-2 border rounded w-full flex flex-col"
          >
            <span className="text-xs text-gray-500">
              {chat.createdAt.toLocaleDateString()}
              {"  "}
              {chat.createdAt.toLocaleTimeString()}
            </span>
            <span>
              {chat.purpose == null || chat.purpose != ""
                ? chat.purpose
                : "Chat"}
            </span>
          </Link>
        );
      })
    ) : (
      <FullLoader />
    );

  useEffect(() => {
    !chats && loadChats();
  }, []);
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="pt-12 grid grid-cols-2 gap-3 items-stretch">
        {renderChat}
      </div>
    </HydrationBoundary>
  );
}
