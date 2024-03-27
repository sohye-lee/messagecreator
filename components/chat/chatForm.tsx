"use client";
import React, { FormEvent, useState } from "react";
import { IconCornerDownLeft } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { generateChatResponse } from "@/utils/action";
import { ChatCompletionMessageParam } from "openai/resources/chat/completions.mjs";
import { toast } from "sonner";

interface props {
  question: string;
  setQuestion: (value: string) => void;
  // messages: ChatCompletionMessageParam[];
  // setMessages: (values: ChatCompletionMessageParam[]) => void;
  handleSubmit: (e: FormEvent) => void;
  isLoading: boolean;
}

export default function ChatForm({
  question,
  setQuestion,
  // messages,
  // setMessages,
  handleSubmit,
  isLoading = false,
}: props) {
  return (
    <div className="fixed inset-x-0 bottom-0 pb-8 w-full  duration-300 ease-in-out animate-in  ">
      <div className="mx-auto sm:max-w-2xl  ">
        <div className="mb-4 grid grid-cols-2 gap-2 px-4 sm:px-0"></div>
        <div className="flex h-12 items-center justify-center">
          <div className="flex space-x-2"></div>
        </div>
        <div className="space-y-4 border-t bg-background px-4 py-2 shadow-lg sm:rounded-t-xl sm:border md:pt-4 pb-7">
          <form onSubmit={handleSubmit}>
            <div className="relative flex max-h-60 w-full grow flex-col overflow-hidden bg-background pr-8 sm:rounded-md sm:border sm:pr-12">
              <textarea
                tabIndex={0}
                placeholder="Send a message."
                className="min-h-[60px] w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none sm:text-sm h-[62px]"
                spellCheck={false}
                autoComplete="off"
                autoCorrect="off"
                name="message"
                rows={1}
                value={question ?? ""}
                onChange={(e) => setQuestion(e.target.value)}
              ></textarea>
              <div className="absolute right-0 top-[13px] sm:right-4">
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 size-9"
                  type="submit"
                  data-state="closed"
                  disabled={isLoading}
                >
                  <IconCornerDownLeft width={20} />

                  <span className="sr-only">Send message</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
