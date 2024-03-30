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
import Step1 from '@/components/form/step1';
import { MessageInfo } from '@/lib/types';
import StepBar from '@/components/form/stepBar';
import Step2 from '@/components/form/step2';
import Paginator from '@/components/form/paginator';
import Step3 from '@/components/form/step3';
import SmallLoader from '@/components/loading/smallLoader';

const initialState = {
  purpose: '',
  occasion: '',
  relation: '',
  tone: '',
  length: '',
  urgency: '',
  theme: '',
  details: '',
};
export default function ChatPage() {
  const queryClient = new QueryClient();
  const [ready, setReady] = useState<boolean>(false);
  const [step, setStep] = useState<number>(1);
  const [messageInfo, setMessageInfo] = useState<MessageInfo>(initialState);
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
      setMessages((prev) => [...prev, data]);
    },
  });

  const { mutate: initiate, isPending: initiateLoading } = useMutation({
    mutationFn: () => initiateChat(messageInfo),
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
    ready && initiate();
  }, [initiate, ready]);
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className=" w-full overflow-auto flex flex-col items-center">
        <div className="mx-auto w-full sm:max-w-3xl flex flex-col gap-3 py-6">
          <StepBar step={step} setStep={setStep} />
          <div className="py-18 flex justify-center">
            {initiateLoading && <SmallLoader />}
          </div>
          {step == 1 && (
            <Step1 messageInfo={messageInfo} setMessageInfo={setMessageInfo} />
          )}
          {step == 2 && (
            <Step2 messageInfo={messageInfo} setMessageInfo={setMessageInfo} />
          )}
          {step == 3 && (
            <Step3 messageInfo={messageInfo} setMessageInfo={setMessageInfo} />
          )}

          {step == 4 && (
            <div>
              <ChatList messages={messages} />
              <ChatForm
                handleSubmit={handleSubmit}
                question={question}
                setQuestion={setQuestion}
                isLoading={isPending}
              />
            </div>
          )}

          {step < 4 && (
            <Paginator
              step={step}
              setStep={setStep}
              messageInfo={messageInfo}
              setReady={setReady}
            />
          )}
        </div>
      </div>
    </HydrationBoundary>
  );
}
