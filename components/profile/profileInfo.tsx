"use client";
import React from "react";
import { toast } from "sonner";

export default function ProfileInfo() {
  const notify = () => toast("Test");
  return <button onClick={notify}>Profile</button>;
}
