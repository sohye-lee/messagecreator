"use client";
import React, { FormEvent, useState } from "react";
import ProfileIcon from "../profile/profileIcon";
import ChatItem from "./chatItem";
import ChatForm from "./chatForm";
import { IconArrowDown } from "@tabler/icons-react";
import { ChatCompletionMessageParam } from "openai/resources/chat/completions.mjs";

interface props {
  messages: ChatCompletionMessageParam[];
}

export default function ChatList({ messages }: props) {
  return (
    <div className="pb-[8rem]  pt-8 max-w-full w-full overflow-y-auto relative">
      <div className="relative mx-auto w-full sm:max-w-2xl min-h-[calc(100vh-300px)]   ">
        <div className="  overflow-y-auto w-full absolute top-0 left-0 z-1   h-[calc(100vh-240px)]">
          <div className="flex flex-col h-auto">
            {messages && messages.length > 0 ? (
              messages.map((message, i) => {
                return (
                  <ChatItem
                    key={i}
                    role={message.role}
                    content={message.content}
                  />
                );
              })
            ) : (
              <></>
            )}
          </div>
        </div>
        <button className=" inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input shadow-sm hover:bg-accent hover:text-accent-foreground size-9 absolute right-4 top-8 z-10 bg-background transition-opacity duration-300 sm:right-8 md:top-4 ">
          <IconArrowDown width={20} />
          <span className="sr-only">Scroll to bottom</span>
        </button>
      </div>
      {/* <ChatForm
      // question={question}
      // setQuestion={setQuestion}
      // onSubmit={handleSubmit}
      /> */}
    </div>
  );
}
