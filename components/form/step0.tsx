"use client";
import { MessageInfo } from "@/lib/types";
import React, { Dispatch, SetStateAction, useState } from "react";
import {
  lengths,
  occasionStrings,
  purposes,
  relationStrings,
  tones,
  types,
} from "@/lib/constants";

export default function Step0({
  messageInfo,
  setMessageInfo,
}: {
  messageInfo: MessageInfo;
  setMessageInfo: Dispatch<SetStateAction<MessageInfo>>;
}) {
  const onLengthChange = (length: string) => {
    setMessageInfo((prev) => ({ ...prev, length }));
  };

  const onTypeChange = (type: string) => {
    setMessageInfo((prev) => ({ ...prev, type }));
  };
  const onPurposeChange = (purpose: string) => {
    setMessageInfo((prev) => ({ ...prev, purpose }));
  };

  const onOccasionChange = (occasion: string) => {
    setMessageInfo((prev) => ({ ...prev, occasion: occasion }));
  };

  const onRelationChange = (relation: string) => {
    setMessageInfo((prev) => ({ ...prev, relation }));
  };

  const onToneChange = (tone: string) => {
    setMessageInfo((prev) => ({ ...prev, tone }));
  };
  return (
    <div className="w-full flex flex-col gap-4">
      <div className=" py-5 px-3 rounded-md flex flex-col gap-">
        <h2 className="text-2xl md:text-4xl leading-[1.6] md:leading-[1.8]">
          Craft me a{" "}
          <select
            className="inline-select inline-block min-w-0 px-3 w-auto border rounded-[50px] border-brand bg-indigo-100 dark:bg-brand"
            onChange={(e) => onLengthChange(e.currentTarget.value)}
          >
            {lengths.map((l, i) => (
              <option key={i} value={l}>
                {l}
              </option>
            ))}
          </select>{" "}
          <select
            className="inline-select inline-block min-w-0 px-3 w-auto border rounded-[50px] border-brand bg-indigo-100  dark:bg-brand"
            onChange={(e) => onTypeChange(e.currentTarget.value)}
          >
            {types.map((t, i) => (
              <option key={i} value={t}>
                {t}
              </option>
            ))}
          </select>{" "}
          to{" "}
          <select
            className="inline-select inline-block min-w-0 px-3 w-auto border rounded-[50px] border-brand bg-indigo-100  dark:bg-brand"
            onChange={(e) => onPurposeChange(e.currentTarget.value)}
          >
            {purposes.map((p, i) => (
              <option key={i} value={p}>
                {p}
              </option>
            ))}
          </select>
          , for{" "}
          <select
            className="inline-select inline-block min-w-0 px-3 w-auto border rounded-[50px] border-brand bg-indigo-100  dark:bg-brand"
            onChange={(e) => onOccasionChange(e.currentTarget.value)}
          >
            {occasionStrings.map((o, i) => (
              <option key={i} value={o}>
                {o}
              </option>
            ))}
          </select>{" "}
          , aimed at my{" "}
          <select
            className="inline-select inline-block min-w-0 px-3 w-auto border rounded-[50px] border-brand bg-indigo-100  dark:bg-brand"
            onChange={(e) => onRelationChange(e.currentTarget.value)}
          >
            {relationStrings.map((r, i) => (
              <option key={i} value={r}>
                {r}
              </option>
            ))}
          </select>{" "}
          with a touch of{" "}
          <select
            className="inline-select inline-block min-w-0 px-3 w-auto border rounded-[50px] border-brand bg-indigo-100  dark:bg-brand"
            onChange={(e) => onToneChange(e.currentTarget.value)}
          >
            {tones.map((t, i) => (
              <option key={i} value={t}>
                {t}
              </option>
            ))}
          </select>{" "}
          flair.
        </h2>
      </div>
    </div>
  );
}
