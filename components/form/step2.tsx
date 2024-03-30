'use client';
import { MessageInfo } from '@/lib/types';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { Input } from '../ui/input';
import { occasions, purposes, relations, tones } from '@/lib/constants';
import { Button } from '@nextui-org/react';
import { IconChevronDown, IconCornerDownLeft } from '@tabler/icons-react';

export default function Step2({
  messageInfo,
  setMessageInfo,
}: {
  messageInfo: MessageInfo;
  setMessageInfo: Dispatch<SetStateAction<MessageInfo>>;
}) {
  const [relation, setRelation] = useState('');
  const [tone, setTone] = useState('');

  const onToneChange = (i: number) => {
    setMessageInfo((prev) => ({ ...prev, tone: tones[i] }));
    setTone('');
  };

  const onRelationChange = (relation: string) => {
    setMessageInfo((prev) => ({ ...prev, relation }));
    setRelation('');
  };
  return (
    <div className="w-full flex flex-col gap-4">
      {/* Relation */}
      <div className=" py-5 px-3 rounded-md flex flex-col gap-3 hover:bg-slate-100 dark:hover:bg-slate-800">
        <div className=" mb-2 flex flex-col gap-1">
          <div className="text-xl font-medium  ">Relation</div>
          <div className="py-2 px-3 text-[16px] font-light text-brand bg-gray-100 border border-gray-300 rounded-lg w-3/4 overflow-x-auto overflow-hidden text-wrap break-before-all">
            {messageInfo.relation != ''
              ? messageInfo.relation
              : 'Please select or write below'}
          </div>
        </div>
        <div className="flex flex-wrap items-stretch gap-1">
          {relations.map((r, i) => (
            <div className="relative" key={i}>
              <select
                className="relative appearance-none px-4 py-2 pr-10 rounded-[30px] text-sm bg-black text-white dark:bg-brand dark:hover:bg-gray-600 dark:text-black hover:bg-brand hover:text-white"
                onChange={(e) => onRelationChange(e.currentTarget.value)}
                defaultValue={''}
              >
                <option value="" disabled>
                  {r.category}
                </option>
                {r.list.map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </select>
              <IconChevronDown
                className="absolute top-[50%] right-2 z-[10] text-white dark:text-black -translate-y-[50%] "
                width={16}
              />
            </div>
          ))}
        </div>
        <form
          className="w-full my-3 relative "
          onSubmit={(e) => {
            e.preventDefault();
            setMessageInfo((prev) => ({ ...prev, relation }));
          }}
        >
          <Input
            type="text"
            className="h-[48px] pr-16 relative"
            placeholder="Other "
            value={relation}
            onChange={(e) => setRelation(e.target.value)}
          />
          <Button
            type="submit"
            className="absolute top-[50%] right-2 -translate-y-[50%] bg-black text-white dark:bg-brand dark:hover:bg-gray-600 dark:text-black hover:bg-brand px-2 py-1 rounded-md "
          >
            <IconCornerDownLeft width={20} />
          </Button>
        </form>
      </div>

      {/* Tone */}
      <div className="  py-5 px-3 rounded-md flex flex-col gap-3 hover:bg-slate-100 dark:hover:bg-slate-800">
        <div className=" mb-2 flex flex-col gap-1">
          <div className="text-lg font-medium  ">Tone</div>
          <div className="py-2 px-3 text-[16px] font-light text-brand bg-gray-100 border border-gray-300 rounded-lg w-3/4">
            {messageInfo.tone != ''
              ? messageInfo.tone
              : 'Please select or write below'}
          </div>
        </div>
        <div className="flex flex-wrap items-stretch gap-1">
          {tones.map((t, i) => (
            <button
              key={i}
              onClick={() => onToneChange(i)}
              className="px-4 py-2 rounded-[30px] text-sm bg-black text-white dark:bg-brand dark:text-black dark:hover:bg-gray-600 hover:bg-brand hover:text-white"
            >
              {t}
            </button>
          ))}
        </div>
        <form
          className="w-full my-3 relative "
          onSubmit={(e) => {
            e.preventDefault();
            setMessageInfo((prev) => ({ ...prev, tone }));
          }}
        >
          <Input
            type="text"
            className="h-[48px] pr-16 relative"
            placeholder="Other "
            value={tone}
            onChange={(e) => setTone(e.target.value)}
          />
          <Button
            type="submit"
            className="absolute top-[50%] right-2 -translate-y-[50%] bg-black text-white dark:bg-brand dark:text-black dark:hover:bg-gray-600 hover:bg-brand px-2 py-1 rounded-md "
          >
            <IconCornerDownLeft width={20} />
          </Button>
        </form>
      </div>
    </div>
  );
}
