import { ChatCompletionContentPart } from "openai/resources/chat/completions.mjs";

export interface MessageType {
  category: string;
  list: string[];
}

export interface MessageInfo {
  purpose: string;
  occasion: string;
  relation: string;
  tone: string;
  length: string;
  urgency: string;
  theme: string;
  details: string;
}

export interface User {
  id: string;
  externalId: string;
  image: string;
  attributes: JSON;
}

export interface Chat {
  id: string;
  messages: string;
  purpose: string | null;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ChatItemProps {
  role: "function" | "system" | "user" | "assistant" | "tool";
  content: string | ChatCompletionContentPart[] | null | undefined;
}

export interface ContactFormData {
  name?: string;
  email: string;
  phone?: string;
  message?: string;
}
