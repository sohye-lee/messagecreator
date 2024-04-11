import { IconMail } from "@tabler/icons-react";
import React, { Dispatch, SetStateAction } from "react";

interface props {
  no: number;
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  title: string;
}

export default function StepBarItem({ no, step, setStep, title }: props) {
  return (
    <div
      className={`relative flex items-center justify-center px-2 py-3 w-1/3 cursor-pointer border-t-[5px]  ${
        step == no
          ? "border-t-brand"
          : "border-t-gray-500 dark:border-t-gray-700 opacity-80"
      }`}
      onClick={() => setStep(no)}
    >
      <div className={`text-sm flex flex-col gap-2 items-center font-medium  `}>
        <p
          className={`${
            step == no
              ? "text-brand text-xl animate-pulse"
              : "text-gray-500 dark:text-gray-700 font-light"
          }`}
        >
          {title}
        </p>
      </div>
      {step == no && (
        <div className="absolute -right-2 -top-0 -translate-y-[50%] bg-brand text-white w-8 h-8 flex items-center justify-center rounded-full z-[40] rotate-3">
          <IconMail width={16} className="animate-bounce translate-y-2" />
        </div>
      )}
    </div>
  );
}
