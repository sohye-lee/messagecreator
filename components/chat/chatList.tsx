"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import ChatItem from "./chatItem";
import {
  IconArrowDown,
  IconDownload,
  IconMessageChatbot,
  IconReload,
} from "@tabler/icons-react";
import { ChatCompletionMessageParam } from "openai/resources/chat/completions.mjs";
import { Button } from "../ui/button";
import { MessageInfo } from "@/lib/types";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { initiateChat, saveChat } from "@/utils/action";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import SmallLoader from "../loading/smallLoader";
import { toast } from "sonner";
import { initialState } from "@/lib/constants";
interface props {
  messages: ChatCompletionMessageParam[];
  messageInfo: MessageInfo;
  setMessageInfo: Dispatch<SetStateAction<MessageInfo>>;
  setStep: Dispatch<SetStateAction<number>>;
  ready: boolean;
  setReady: Dispatch<SetStateAction<boolean>>;
  setMessages: Dispatch<SetStateAction<ChatCompletionMessageParam[]>>;
}

export default function ChatList({
  messages,
  messageInfo,
  setMessageInfo,
  setStep,
  ready,
  setReady,
  setMessages,
}: props) {
  const router = useRouter();
  const [visible, setVisible] = useState(false);

  const showButton = () => {
    let bodyHeight = document.body.offsetHeight;
    let windowHeight = window.innerHeight;
    let scrollPosition = window.pageYOffset;
    let scrollFromBottom = Math.max(
      bodyHeight - (scrollPosition + windowHeight),
      0
    );
    if (scrollFromBottom > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const { mutate: initiate, isPending: initiateLoading } = useMutation({
    mutationFn: () => initiateChat(messageInfo),
    onSuccess: (data: ChatCompletionMessageParam) => {
      if (!data) return;
      messages.length == 0 && setMessages([data]);
      toast.info(data.toString());
    },
  });

  const { mutate: save, isPending: saveLoading } = useMutation({
    mutationFn: (messages: string) =>
      saveChat(
        messages,
        `${messageInfo.purpose} - ${messageInfo.occasion} - ${messageInfo.relation}`
      ),
    onSuccess: () => {
      toast.success("Your messages have been saved!");
      router.push("/history");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const startChat = () => {
    setReady(true);
    initiate();
  };

  useEffect(() => {
    window.addEventListener("scroll", showButton);
    // console.log(messages);
    return () => {
      window.removeEventListener("scroll", showButton);
    };
  }, [router, messages]);

  return (
    <>
      <div className="pb-[11rem]  pt-8  max-w-full w-full overflow-y-auto relative">
        <div className="flex flex-col h-auto">
          {messages && messages.length > 0 && ready ? (
            <>
              {messages.map((message, i) => {
                // console.log(message);
                return (
                  <ChatItem
                    key={i}
                    role={message.role}
                    content={message.content}
                  />
                );
              })}
              <div className="flex justify-center items-stretch gap-3 mt-8">
                <Button
                  className="hover:bg-brand gap-2 group"
                  onClick={() => {
                    setMessages([]);
                    setReady(false);
                    setMessageInfo(initialState);
                    setStep(1);
                    router.refresh();
                  }}
                >
                  <IconReload width={16} className="group-hover:animate-spin" />
                  Reset
                </Button>
                <Button
                  className="hover:bg-brand gap-2 group"
                  onClick={() => {
                    save(JSON.stringify(messages));
                    console.log(JSON.stringify(messages));
                  }}
                >
                  <IconDownload width={16} />
                  Save Chat
                </Button>
              </div>
            </>
          ) : initiateLoading ? (
            <div className="flex min-h-96 justify-center items-center">
              <SmallLoader />
            </div>
          ) : (
            <AlertDialog>
              <AlertDialogTrigger className="flex justify-center">
                <Button className="bg-brand text-white hover:bg-slate-500 flex items-center gap-2">
                  <span>Chat with AI to Tune</span>
                  <IconMessageChatbot width={20} />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Fine-Tune Your Message with AI!
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    Looks like you&apos;re almost ready to create your perfect
                    message. Would you like to chat with our AI assistant to
                    refine your details? This quick chat can help ensure your
                    message captures exactly what you want to say. Here&apos;s
                    what you&apos;ve selected so far:
                    <ul className="my-3 flex flex-col gap-2">
                      <li>
                        <span className="font-semibold">Purpose</span>:{" "}
                        <span className="text-brand">
                          {messageInfo.purpose}
                        </span>
                      </li>
                      <li>
                        <span className="font-semibold">Occasion</span>:{" "}
                        <span className="text-brand">
                          {messageInfo.occasion}
                        </span>
                      </li>
                      <li>
                        <span className="font-semibold">Relation</span>:{" "}
                        <span className="text-brand">
                          {messageInfo.relation}
                        </span>
                      </li>
                      <li>
                        <span className="font-semibold">Tone</span>:{" "}
                        <span className="text-brand">{messageInfo.tone}</span>
                      </li>
                      <li>
                        <span className="font-semibold">Length</span>:{" "}
                        <span className="text-brand">{messageInfo.length}</span>
                      </li>
                      <li>
                        <span className="font-semibold">Urgency</span>:{" "}
                        <span className="text-brand">
                          {messageInfo.urgency}
                        </span>
                      </li>
                      {/* <li>
                        <span className="font-semibold">Theme</span>:{" "}
                        <span className="text-brand">{messageInfo.theme}</span>
                      </li> */}
                      <li>
                        <span className="font-semibold">Details</span>:{" "}
                        <span className="text-brand">
                          {messageInfo.details}
                        </span>
                      </li>
                    </ul>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Go Back</AlertDialogCancel>
                  <AlertDialogAction onClick={startChat}>
                    Chat Now
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
        </div>
      </div>
      <button
        className={`flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-brand/50 shadow-sm hover:bg-accent hover:text-accent-foreground size-9 fixed left-[50%] bottom-40 -translate-x-[50%] z-[1000] bg-background dark:bg-brand dark:opacity-80 dark:hover:opacity-95 transition-opacity duration-300 ${
          visible ? "opacity-1" : "opacity-0"
        } `}
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });
        }}
      >
        <IconArrowDown width={20} />
        <span className="sr-only">Scroll to bottom</span>
      </button>
    </>
  );
}
