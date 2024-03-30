import React, { Dispatch, SetStateAction } from 'react';

interface props {
  no: number;
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  title: string;
}

export default function StepBarItem({ no, step, setStep, title }: props) {
  return (
    <div
      className={`flex items-center justify-center px-2 py-3 w-1/4  cursor-pointer border-t-[5px]  ${
        step == no ? 'border-t-brand' : 'border-t-gray-300'
      }`}
      onClick={() => setStep(no)}
    >
      <div className={`text-sm flex flex-col gap-2 items-center font-medium  `}>
        <p
          className={`w-6 h-6 shrink-0 border border-white text-white rounded-full flex items-center justify-center text-sm ${
            step == no ? 'bg-brand' : 'bg-gray-500  '
          }`}
        >
          {no}
        </p>

        <p className={`${step == no ? 'text-brand' : 'text-gray-500  '}`}>
          {title}
        </p>
      </div>
    </div>
  );
}
