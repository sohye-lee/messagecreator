import {
  IconChevronLeft,
  IconChevronRight,
  IconMessageChatbot,
} from '@tabler/icons-react';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { Button } from '../ui/button';
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
} from '@/components/ui/alert-dialog';
import { MessageInfo } from '@/lib/types';

interface props {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  messageInfo: MessageInfo;
  setReady: Dispatch<SetStateAction<boolean>>;
}

export default function Paginator({
  step,
  setStep,
  messageInfo,
  setReady,
}: props) {
  const startChat = () => {
    setStep(4);
    setReady(true);
  };
  return (
    <>
      <div className="flex py-8 items-center justify-between w-full">
        <button
          className={`rounded-md py-2 px-3 flex items-center space-x-3 hover:text-brand ${
            step <= 1 && 'opacity-10'
          }`}
          disabled={step <= 1}
          onClick={() => {
            step > 1 && setStep((prev) => prev - 1);
            window.scrollTo({ top: 0 });
          }}
        >
          <IconChevronLeft />
          <span>Previous</span>
        </button>
        {step < 3 ? (
          <button
            className={`rounded-md py-2 px-3 flex items-center space-x-3 hover:text-brand ${
              step >= 4 && 'opacity-10'
            }`}
            disabled={step >= 4}
            onClick={() => {
              step < 4 && setStep((prev) => prev + 1);
              window.scrollTo({ top: 0 });
            }}
          >
            <span>Next</span>
            <IconChevronRight />
          </button>
        ) : (
          <AlertDialog>
            <AlertDialogTrigger>
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
                      <span className="font-semibold">Purpose</span>:{' '}
                      <span className="text-brand">{messageInfo.purpose}</span>
                    </li>
                    <li>
                      <span className="font-semibold">Occasion</span>:{' '}
                      <span className="text-brand">{messageInfo.occasion}</span>
                    </li>
                    <li>
                      <span className="font-semibold">Relation</span>:{' '}
                      <span className="text-brand">{messageInfo.relation}</span>
                    </li>
                    <li>
                      <span className="font-semibold">Tone</span>:{' '}
                      <span className="text-brand">{messageInfo.tone}</span>
                    </li>
                    <li>
                      <span className="font-semibold">Length</span>:{' '}
                      <span className="text-brand">{messageInfo.length}</span>
                    </li>
                    <li>
                      <span className="font-semibold">Urgency</span>:{' '}
                      <span className="text-brand">{messageInfo.urgency}</span>
                    </li>
                    <li>
                      <span className="font-semibold">Theme</span>:{' '}
                      <span className="text-brand">{messageInfo.theme}</span>
                    </li>
                    <li>
                      <span className="font-semibold">Purpose</span>:{' '}
                      <span className="text-brand">{messageInfo.details}</span>
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
    </>
  );
}
