import ChatItem from "@/components/chat/chatItem";
import ChatList from "@/components/chat/chatList";
import React from "react";

export default function ChatPage() {
  return (
    <div className="group w-full overflow-auto flex flex-col items-center">
      <ChatList />
    </div>
  );
}
