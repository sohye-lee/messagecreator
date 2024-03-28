'use client';
import React, { FormEvent, useEffect, useState } from 'react';
import ChatList from '@/components/chat/chatList';
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
  useMutation,
} from '@tanstack/react-query';
import ChatForm from '@/components/chat/chatForm';
import { ChatCompletionMessageParam } from 'openai/resources/chat/completions.mjs';
import { generateChatResponse, initiateChat } from '@/utils/action';
import { toast } from 'sonner';

export default function ChatPage() {
  const queryClient = new QueryClient();
  const [step, setStep] = useState<number>(0);
  
  const [question, setQuestion] = useState<string>('');
  const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([]);
  const { mutate: sendMessages, isPending } = useMutation({
    mutationFn: (query: ChatCompletionMessageParam) =>
      generateChatResponse([...messages, query]),
    onSuccess: (data: ChatCompletionMessageParam) => {
      if (!data) {
        toast.error('Something went wrong.');
        return;
      }
      console.log('received and all:', data);
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
      role: 'user',
      content: question,
    };
    sendMessages(query);
    setMessages((prev) => [...prev, query]);
    setQuestion('');
  };

  useEffect(() => {
    messages.length == 0 && initiate();
  }, [initiate, messages.length]);
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="group w-full overflow-auto flex flex-col items-center">
        <ChatList messages={messages} />
        <ChatForm
          handleSubmit={handleSubmit}
          question={question}
          setQuestion={setQuestion}
          // messages={messages}
          // setMessages={setMessages}
          isLoading={isPending}
        />
      </div>
    </HydrationBoundary>
  );
}
