"use client";
import { useTheme } from "next-themes";
import React from "react";
import { Switch } from "../ui/switch";

export default function SwitchButton() {
  const { theme, setTheme } = useTheme();

  return (
    <Switch
      onClick={() => (theme == "light" ? setTheme("dark") : setTheme("light"))}
    />
  );
}
