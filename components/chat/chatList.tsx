'use client';
import React, { FormEvent, useEffect, useState } from 'react';
import ProfileIcon from '../profile/profileIcon';
import ChatItem from './chatItem';
import ChatForm from './chatForm';
import { IconArrowDown } from '@tabler/icons-react';
import { ChatCompletionMessageParam } from 'openai/resources/chat/completions.mjs';

interface props {
  messages: ChatCompletionMessageParam[];
}

export default function ChatList({ messages }: props) {
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

  const goToBottom = () => {};

  useEffect(() => {
    window.addEventListener('scroll', showButton);
    return () => {
      window.removeEventListener('scroll', showButton);
    };
  }, []);
  return (
    <>
      <div className="pb-[10rem]  pt-8  max-w-full w-full overflow-y-auto relative">
        {/* <div className="relative mx-auto w-full sm:max-w-2xl min-h-[calc(100vh-300px)]   ">
          <div className="  overflow-y-auto w-full absolute top-0 left-0 z-1   h-[calc(100vh-240px)]"> */}
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
        {/* </div>
        </div> */}
      </div>
      <button
        className={`flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-brand/50 shadow-sm hover:bg-accent hover:text-accent-foreground size-9 fixed left-[50%] bottom-40 -translate-x-[50%] z-[1000] bg-background transition-opacity duration-300 ${
          visible ? 'opacity-1' : 'opacity-0'
        } `}
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
          });
        }}
      >
        <IconArrowDown width={20} />
        <span className="sr-only">Scroll to bottom</span>
      </button>
    </>
  );
}
