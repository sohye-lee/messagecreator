"use client";
import React, { useState } from "react";
import ProfileIcon from "../profile/profileIcon";
import { Avatar, AvatarFallback } from "../ui/avatar";

interface props {
  text: string;
}

export default function ChatItem() {
  return (
    <div className="group relative flex items-start w-full py-4 px-3 border-t border-t-slate-100 ">
      <Avatar className="w-8 h-8 border border-white">
        {/* {user?.hasImage && <AvatarImage src={user?.imageUrl} />} */}
        <AvatarFallback className="text-[9px] text-white bg-gradient-to-br from-brand to-slate-400">
          Me
        </AvatarFallback>
      </Avatar>
      <div className="ml-1 flex-1  overflow-hidden pl-2">
        what is the price of Tesla stock now?
      </div>
    </div>
  );
}
