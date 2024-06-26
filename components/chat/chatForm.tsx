"use client";
import React, { FormEvent } from "react";
import { IconCornerDownLeft } from "@tabler/icons-react";
import { Input } from "../ui/input";

interface props {
  question: string;
  setQuestion: (value: string) => void;
  handleSubmit: (e: FormEvent) => void;
  isLoading: boolean;
}

export default function ChatForm({
  question,
  setQuestion,
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
            <div className="relative flex max-h-60 w-full grow flex-col   bg-background p-0 sm:rounded-md  border-none ">
              <Input
                tabIndex={0}
                type="text"
                placeholder="Send a message."
                className="min-h-[60px] w-full resize-none bg-transparent px-4  py-[1.3rem] focus-within:outline-none sm:text-sm h-[62px]  border pr-16 sm:pr-20"
                spellCheck={false}
                autoComplete="off"
                autoCorrect="off"
                name="message"
                value={question ?? ""}
                onChange={(e) => setQuestion(e.target.value)}
              />
              <div className="absolute right-3 top-[13px] sm:right-4">
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
