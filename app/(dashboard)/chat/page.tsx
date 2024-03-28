"use client";
import React, { FormEvent, useEffect, useState } from "react";
import ChatList from "@/components/chat/chatList";
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
  useMutation,
} from "@tanstack/react-query";
import ChatForm from "@/components/chat/chatForm";
import { ChatCompletionMessageParam } from "openai/resources/chat/completions.mjs";
import { generateChatResponse, initiateChat } from "@/utils/action";
import { toast } from "sonner";
import Step1 from "@/components/form/step1";
import { MessageInfo } from "@/lib/types";
import StepBar from "@/components/form/stepBar";
import Step2 from "@/components/form/step2";

const initialState = {
  purpose: "",
  occasion: "",
  relation: "",
  tone: "",
  length: "",
  urgency: "",
  theme: "",
  details: "",
};
export default function ChatPage() {
  const queryClient = new QueryClient();
  const [step, setStep] = useState<number>(0);
  const [messageInfo, setMessageInfo] = useState<MessageInfo>(initialState);
  const [question, setQuestion] = useState<string>("");
  const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([]);
  const { mutate: sendMessages, isPending } = useMutation({
    mutationFn: (query: ChatCompletionMessageParam) =>
      generateChatResponse([...messages, query]),
    onSuccess: (data: ChatCompletionMessageParam) => {
      if (!data) {
        toast.error("Something went wrong.");
        return;
      }
      console.log("received and all:", data);
      setMessages((prev) => [...prev, data]);
      console.log(messages);
    },
  });

  const { mutate: initiate } = useMutation({
    mutationFn: () => initiateChat(),
    onSuccess: (data: ChatCompletionMessageParam) => {
      if (!data) return;
      messages.length == 0 && setMessages([data]);
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const query: ChatCompletionMessageParam = {
      role: "user",
      content: question,
    };
    sendMessages(query);
    setMessages((prev) => [...prev, query]);
    setQuestion("");
  };

  useEffect(() => {
    messages.length == 0 && initiate();
  }, [initiate, messages.length]);
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className=" w-full overflow-auto flex flex-col items-center">
        <div className="mx-auto w-full sm:max-w-3xl flex flex-col gap-3 pt-6">
          <StepBar step={step} setStep={setStep} />
          {step == 0 && (
            <Step1 messageInfo={messageInfo} setMessageInfo={setMessageInfo} />
          )}
          {step == 1 && (
            <Step2 messageInfo={messageInfo} setMessageInfo={setMessageInfo} />
          )}
        </div>
        {/* <ChatList messages={messages} />
        <ChatForm
          handleSubmit={handleSubmit}
          question={question}
          setQuestion={setQuestion}
          // messages={messages}
          // setMessages={setMessages}
          isLoading={isPending}
        /> */}
      </div>
    </HydrationBoundary>
  );
}
