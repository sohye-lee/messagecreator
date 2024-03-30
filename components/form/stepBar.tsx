import { steps } from '@/lib/constants';
import React, { Dispatch, SetStateAction } from 'react';
import StepBarItem from './stepBarItem';

interface props {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}
export default function StepBar({ step, setStep }: props) {
  return (
    <div className="w-full flex gap-1 mb-5">
      {steps.map((s, i) => (
        <StepBarItem
          key={i}
          no={i + 1}
          title={s}
          step={step}
          setStep={setStep}
        />
      ))}
    </div>
  );
}
