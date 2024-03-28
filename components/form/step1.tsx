"use client";
import { MessageInfo } from "@/lib/types";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Input } from "../ui/input";
import { occasions, purposes } from "@/lib/constants";
import { Button } from "@nextui-org/react";
import { IconChevronDown, IconCornerDownLeft } from "@tabler/icons-react";

export default function Step1({
  messageInfo,
  setMessageInfo,
}: {
  messageInfo: MessageInfo;
  setMessageInfo: Dispatch<SetStateAction<MessageInfo>>;
}) {
  const [purpose, setPurpose] = useState("");
  const [occasion, setOccasion] = useState("");

  const onPurposeChange = (i: number) => {
    setMessageInfo((prev) => ({ ...prev, purpose: purposes[i] }));
    setPurpose("");
  };

  const onOccasionChange = (occasion: string) => {
    setMessageInfo((prev) => ({ ...prev, occasion: occasion }));
    setOccasion("");
  };
  return (
    <div className="w-full flex flex-col gap-4">
      {/* Purpose */}
      <div className="border-b py-5 flex flex-col gap-3">
        <div className=" mb-2 flex flex-col gap-1">
          <div className="text-lg font-medium  ">Purpose</div>
          <div className="py-2 px-3 text-[16px] font-light text-brand bg-gray-100 border border-gray-300 rounded-lg w-3/4">
            {messageInfo.purpose != ""
              ? messageInfo.purpose
              : "Please select or write below"}
          </div>
        </div>
        <div className="flex flex-wrap items-stretch gap-1">
          {purposes.map((p, i) => (
            <button
              key={i}
              onClick={() => onPurposeChange(i)}
              className="px-4 py-2 rounded-[30px] text-sm bg-black text-white dark:bg-brand dark:text-black dark:hover:bg-gray-600 hover:bg-brand hover:text-white"
            >
              {p}
            </button>
          ))}
        </div>
        <form
          className="w-full my-3 relative "
          onSubmit={(e) => {
            e.preventDefault();
            setMessageInfo((prev) => ({ ...prev, purpose }));
          }}
        >
          <Input
            type="text"
            className="h-[48px] pr-16 relative"
            placeholder="Other "
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
          />
          <Button
            type="submit"
            className="absolute top-[50%] right-2 -translate-y-[50%] bg-black text-white dark:bg-brand dark:text-black dark:hover:bg-gray-600 hover:bg-brand px-2 py-1 rounded-md "
          >
            <IconCornerDownLeft width={20} />
          </Button>
        </form>
      </div>

      {/* Occasion */}
      <div className=" py-5 flex flex-col gap-3">
        <div className=" mb-2 flex flex-col gap-1">
          <div className="text-xl font-medium  ">Occasion</div>
          <div className="py-2 px-3 text-[16px] font-light text-brand bg-gray-100 border border-gray-300 rounded-lg w-3/4 overflow-x-auto overflow-hidden text-wrap break-before-all">
            {messageInfo.occasion != ""
              ? messageInfo.occasion
              : "Please select or write below"}
          </div>
        </div>
        <div className="flex flex-wrap items-stretch gap-1">
          {occasions.map((o, i) => (
            <div className="relative" key={i}>
              <select
                className="relative appearance-none px-4 py-2 pr-10 rounded-[30px] text-sm bg-black text-white dark:bg-brand dark:hover:bg-gray-600 dark:text-black hover:bg-brand hover:text-white"
                onChange={(e) => onOccasionChange(e.currentTarget.value)}
                defaultValue={""}
              >
                <option value="" disabled>
                  {o.category}
                </option>
                {o.list.map((l) => (
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
            setMessageInfo((prev) => ({ ...prev, occasion }));
          }}
        >
          <Input
            type="text"
            className="h-[48px] pr-16 relative"
            placeholder="Other "
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          />
          <Button
            type="submit"
            className="absolute top-[50%] right-2 -translate-y-[50%] bg-black text-white dark:bg-brand dark:hover:bg-gray-600 dark:text-black hover:bg-brand px-2 py-1 rounded-md "
          >
            <IconCornerDownLeft width={20} />
          </Button>
        </form>
      </div>
    </div>
  );
}
