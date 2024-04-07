import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import React, { Dispatch, SetStateAction } from 'react';

import { MessageInfo } from '@/lib/types';

interface props {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  setReady: Dispatch<SetStateAction<boolean>>;
}

export default function Paginator({ step, setStep, setReady }: props) {
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
        <button
          className={`rounded-md py-2 px-3 flex items-center space-x-3 hover:text-brand ${
            step >= 4 && 'opacity-10'
          }`}
          onClick={() => {
            step < 4 && setStep((prev) => prev + 1);
            window.scrollTo({ top: 0 });
          }}
        >
          <span>Next</span>
          <IconChevronRight />
        </button>
      </div>
    </>
  );
}
