"use client";
import { MessageInfo } from "@/lib/types";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Input } from "../ui/input";
import { lengths, themes, urgencies } from "@/lib/constants";
import { Button } from "@nextui-org/react";
import { IconCornerDownLeft } from "@tabler/icons-react";
import { Textarea } from "../ui/textarea";

export default function Step3({
  messageInfo,
  setMessageInfo,
}: {
  messageInfo: MessageInfo;
  setMessageInfo: Dispatch<SetStateAction<MessageInfo>>;
}) {
  const [urgency, setUrgency] = useState("");
  const [length, setLength] = useState("");
  const [theme, setTheme] = useState("");
  const [details, setDetails] = useState("");

  const onLengthChange = (length: string) => {
    setMessageInfo((prev) => ({ ...prev, length }));
    setLength("");
  };

  const onUrgencyChange = (urgency: string) => {
    setMessageInfo((prev) => ({ ...prev, urgency }));
    setUrgency("");
  };

  const onThemeChange = (theme: string) => {
    setMessageInfo((prev) => ({ ...prev, theme }));
    setUrgency("");
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {/* length */}
      <div className="  py-5 px-3 rounded-md flex flex-col gap-3 hover:bg-slate-100 dark:hover:bg-slate-800">
        <div className=" mb-2 flex flex-col gap-1">
          <div className="text-lg font-medium  ">Length</div>
          <div className="py-2 px-3 text-[16px] font-light text-brand bg-gray-100 border border-gray-300 rounded-lg w-3/4">
            {messageInfo.length != ""
              ? messageInfo.length
              : "Please select or write below"}
          </div>
        </div>
        <div className="flex flex-wrap items-stretch gap-1">
          {lengths.map((l, i) => (
            <button
              key={i}
              onClick={() => onLengthChange(l)}
              className="px-4 py-2 rounded-[30px] text-sm bg-black text-white dark:bg-brand dark:text-black dark:hover:bg-gray-600 hover:bg-brand hover:text-white"
            >
              {l}
            </button>
          ))}
        </div>
        <form
          className="w-full my-3 relative "
          onSubmit={(e) => {
            e.preventDefault();
            setMessageInfo((prev) => ({ ...prev, length }));
          }}
        >
          <Input
            type="text"
            className="h-[48px] pr-16 relative"
            placeholder="Other "
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <Button
            type="submit"
            className="absolute top-[50%] right-2 -translate-y-[50%] bg-black text-white dark:bg-brand dark:text-black dark:hover:bg-gray-600 hover:bg-brand px-2 py-1 rounded-md "
          >
            <IconCornerDownLeft width={20} />
          </Button>
        </form>
      </div>

      {/* urgency */}
      <div className="  py-5 px-3 rounded-md flex flex-col gap-3 hover:bg-slate-100 dark:hover:bg-slate-800">
        <div className=" mb-2 flex flex-col gap-1">
          <div className="text-lg font-medium  ">Urgency</div>
          <div className="py-2 px-3 text-[16px] font-light text-brand bg-gray-100 border border-gray-300 rounded-lg w-3/4">
            {messageInfo.urgency != ""
              ? messageInfo.urgency
              : "Please select or write below"}
          </div>
        </div>
        <div className="flex flex-wrap items-stretch gap-1">
          {urgencies.map((u, i) => (
            <button
              key={i}
              onClick={() => onUrgencyChange(u)}
              className="px-4 py-2 rounded-[30px] text-sm bg-black text-white dark:bg-brand dark:text-black dark:hover:bg-gray-600 hover:bg-brand hover:text-white"
            >
              {u}
            </button>
          ))}
        </div>
        <form
          className="w-full my-3 relative "
          onSubmit={(e) => {
            e.preventDefault();
            setMessageInfo((prev) => ({ ...prev, urgency }));
          }}
        >
          <Input
            type="text"
            className="h-[48px] pr-16 relative"
            placeholder="Other "
            value={urgency}
            onChange={(e) => setUrgency(e.target.value)}
          />
          <Button
            type="submit"
            className="absolute top-[50%] right-2 -translate-y-[50%] bg-black text-white dark:bg-brand dark:text-black dark:hover:bg-gray-600 hover:bg-brand px-2 py-1 rounded-md "
          >
            <IconCornerDownLeft width={20} />
          </Button>
        </form>
      </div>

      {/* theme */}
      <div className="  py-5 px-3 rounded-md flex flex-col gap-3 hover:bg-slate-100 dark:hover:bg-slate-800">
        <div className=" mb-2 flex flex-col gap-1">
          <div className="text-lg font-medium  ">Theme</div>
          <div className="py-2 px-3 text-[16px] font-light text-brand bg-gray-100 border border-gray-300 rounded-lg w-3/4">
            {messageInfo.theme != ""
              ? messageInfo.theme
              : "Please select or write below"}
          </div>
        </div>
        <div className="flex flex-wrap items-stretch gap-1">
          {themes.map((t, i) => (
            <button
              key={i}
              onClick={() => onThemeChange(t)}
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
            setMessageInfo((prev) => ({ ...prev, theme }));
          }}
        >
          <Input
            type="text"
            className="h-[48px] pr-16 relative"
            placeholder="Other "
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          />
          <Button
            type="submit"
            className="absolute top-[50%] right-2 -translate-y-[50%] bg-black text-white dark:bg-brand dark:text-black dark:hover:bg-gray-600 hover:bg-brand px-2 py-1 rounded-md "
          >
            <IconCornerDownLeft width={20} />
          </Button>
        </form>
      </div>

      {/* details */}
      <div className="  py-5 px-3 rounded-md flex flex-col gap-3 hover:bg-slate-100 dark:hover:bg-slate-800">
        <div className=" mb-2 flex flex-col gap-1">
          <div className="text-lg font-medium  ">Any Other Details</div>

          <form className="w-full my-3 relative ">
            <Textarea
              rows={3}
              className="pr-16 relative"
              placeholder="Please type here"
              value={messageInfo.details}
              onChange={(e) =>
                setMessageInfo((prev) => ({ ...prev, details: e.target.value }))
              }
            ></Textarea>
          </form>
        </div>
      </div>
    </div>
  );
}
