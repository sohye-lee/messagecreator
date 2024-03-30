'use client';
import React, { useEffect, useState } from 'react';
import { IconRobotFace, IconUser } from '@tabler/icons-react';
import { ChatCompletionContentPart } from 'openai/resources/chat/completions.mjs';
import { useMutation } from '@tanstack/react-query';
import { getUserInfo } from '@/utils/action';
import Image from 'next/image';
import Logo from '@/public/images/logo-black.svg';
import parse from 'html-react-parser';

interface ChatItemProps {
  role: 'function' | 'system' | 'user' | 'assistant' | 'tool';
  content: string | ChatCompletionContentPart[] | null | undefined;
}

export default function ChatItem({ role, content }: ChatItemProps) {
  // const [image, setImage] = useState<string>('');
  // const { mutate, isPending } = useMutation({
  //   mutationFn: () => getUserInfo(),
  //   onSuccess: (data) => {
  //     setImage(data?.user?.image ?? '');
  //   },
  // });

  // useEffect(() => {
  //   image == '' && mutate();
  // }, [image, mutate]);
  return (
    <div className="group relative flex items-start w-full py-4 px-3 border last:border-none border-b-slate-100 dark:border-t-slate-700 ">
      {role == 'user' ? (
        <div
          className={`w-8 h-8 relative border border-gray-300 flex items-center justify-center rounded-md bg-gradient-to-r from-brand to-blue`}
        >
          <IconUser width={20} />
          {/* {image && image != '' && (
            <Image
              src={image}
              alt=""
              fill
              className="min-w-full min-h-full w-auto h-auto group-last:animate-ping"
            />
          )} */}
        </div>
      ) : (
        <div className="w-8 h-8 border border-gray-300 bg-gray-50  flex items-center justify-center rounded-md  ">
          <Image
            src={Logo}
            alt="bot"
            width={20}
            height={18}
            className="group-last:animate-bounce"
          />
        </div>
      )}
      <div
        dangerouslySetInnerHTML={{ __html: content ?? '' }}
        className="ml-1 pt-1 flex-1  overflow-hidden pl-2"
      >
        {/* {content?.toString() ?? ''} */}
      </div>
    </div>
  );
}
