"use client";
import { MessageInfo } from "@/lib/types";
import React, { Dispatch, SetStateAction } from "react";
import { urgencies } from "@/lib/constants";
import { IconCheck } from "@tabler/icons-react";
import { Textarea } from "../ui/textarea";

export default function Step3({
  messageInfo,
  setMessageInfo,
}: {
  messageInfo: MessageInfo;
  setMessageInfo: Dispatch<SetStateAction<MessageInfo>>;
}) {
  const onUrgencyChange = (urgency: string) => {
    setMessageInfo((prev) => ({ ...prev, urgency }));
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {/* urgency */}
      <div className="  py-5 px-3 rounded-md flex flex-col gap-3 ">
        <div className=" mb-2 flex flex-col gap-3">
          <h3 className="text-3xl font-medium">How urgent is this message?</h3>
        </div>

        <div className="flex w-full flex-wrap gap-3 ">
          {urgencies.map((u, i) => (
            <div key={i} className="flex items-center gap-2 ">
              <button
                onClick={() => onUrgencyChange(u)}
                className={`w-8 h-8   border-2 flex items-center justify-center border-gray-300 rounded-full ${
                  messageInfo.urgency == u &&
                  "border-indigo-400 bg-brand text-white"
                }`}
              >
                {messageInfo.urgency == u && (
                  <IconCheck width={16} className="text-white" />
                )}
              </button>
              <h4 className=" text-xl font-medium">{u}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* details */}
      <div className="  py-5 px-3 rounded-md flex flex-col gap-3">
        <div className=" mb-2 flex flex-col gap-1">
          <h3 className="text-3xl font-medium  ">
            Do you want to add any details?
          </h3>

          <form className="w-full my-3 relative ">
            <Textarea
              rows={3}
              className="pr-16 relative text-md"
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
