"use server";
import { env } from "@/lib/env";
import { ContactFormData, MessageInfo } from "@/lib/types";
import { db } from "@/prisma/db";
import { auth } from "@clerk/nextjs";
import OpenAi from "openai";
import { ChatCompletionMessageParam } from "openai/resources/chat/completions.mjs";
import nodemailer from "nodemailer";

const openai = new OpenAi({
  apiKey: env.OPENAI_API_KEY,
});

export const generateChatResponse = async (
  chatMessages: ChatCompletionMessageParam[]
) => {
  try {
    const response = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant who helps with writing other messages for email, cards and texts. For the options, always return list of 5 options, all in HTML code.",
        },
        ...chatMessages,
      ],
      model: "gpt-3.5-turbo",
      temperature: 1,
    });
    return response.choices[0].message as ChatCompletionMessageParam;
  } catch (err) {
    console.log((err as any).message);
    return { role: "assistant", content: "null" } as ChatCompletionMessageParam;
  }
};

export const initiateChat = async (messageInfo: MessageInfo) => {
  try {
    const response = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You are a helpful assistant who helps with writing other messages for email, cards and texts. Please remind the list below: 
            1. Return without any explanation or question.
            2. For the options, return a list of 5.
            3. Return all the responses in HTML format, and when you return a list of options of 5, please return it as a HTML list (<ul><li></li></ul>). Do not use HTML list form inside one block of email or letter.
            4. Don't answer to any other questions or requests else than creating a message..`,
        },
        {
          role: "assistant",
          content: `
            Start by providing a list of 5 messages you create based on the information on the message given below:\n
            Type of message: ${messageInfo.type}
            Purpose: ${messageInfo.purpose}, 
            Occasion: ${messageInfo.occasion}, 
            Relation of the recipient to the writer: ${messageInfo.relation}, 
            Tone: ${messageInfo.tone}, 
            Length: ${messageInfo.length},
            Urgency of reply: ${messageInfo.urgency}, 
            Other details from user: ${messageInfo.details}, \n
            And then please ask the user if there is any other thing to discuss or modify or edit on the message list that you provided.
            Please be friendly and *important: Please provide your response in HTML code, and for the list of the message, please number each them in HTML numbered list(<ol><li></li></ol>) and give some double space between them.
            `,
        },
      ],
      model: "gpt-3.5-turbo",
      temperature: 1,
    });
    return response.choices[0].message as ChatCompletionMessageParam;
  } catch (error) {
    console.log((error as any).message);
    return {
      role: "assistant",
      content: "Something went wrong on our end...",
    } as ChatCompletionMessageParam;
  }
};

export const getUserInfo = async () => {
  try {
    const { userId } = auth();
    if (!userId) return { ok: false, message: "No user Id" };
    const user = await db.user.findUnique({
      where: {
        externalId: userId,
      },
    });
    return { ok: true, user };
  } catch (error) {
    console.log((error as any).message);
    return { ok: false, user: null };
  }
};

export const saveChat = async (messages: string, purpose: string) => {
  try {
    const { userId } = auth();
    if (!userId) return { ok: false, message: "Not a valid request." };
    const user = await db.user.findFirst({ where: { externalId: userId } });

    if (!user) return { ok: false, message: "No user with this ID." };
    const chat = await db.chat.create({
      data: {
        messages,
        purpose,
        userId: user.id,
      },
    });
    return { ok: true, chat };
  } catch (error) {
    console.log((error as any).message);
    return { ok: false, user: null, message: "Something went wrong..." };
  }
};

export const getChatList = async () => {
  try {
    const { userId } = auth();
    if (!userId) return { ok: false, message: "Please login first." };
    const user = await db.user.findFirst({ where: { externalId: userId } });

    if (!user) return { ok: false, message: "No user with this ID." };
    const chats = await db.chat.findMany({
      where: {
        userId: user.id,
      },
    });

    return { ok: true, chats };
  } catch (error) {
    console.log((error as any).message);
    return { ok: false, chats: null, message: "Something went wrong..." };
  }
};

export const getSingleChat = async (id: string) => {
  try {
    if (!id) return { ok: false, message: "Not a valid url." };
    const chat = await db.chat.findUnique({
      where: {
        id,
      },
    });

    if (!chat) return { ok: false, message: "No chat found." };

    return { ok: true, chat };
  } catch (error) {
    console.log((error as any).message);
    return { ok: false, chat: null, message: "Something went wrong..." };
  }
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  auth: {
    user: env.GOOGLE_EMAIL,
    pass: env.GOOGLE_PASSWORD,
  },
});

export const sendEmail = async (formData: ContactFormData) => {
  try {
    console.log("form data received:", formData);
    const mailOptions = {
      from: "noreply@blinkmessage.app",
      to: formData.email,
      subject: `A message from ${formData.name ?? formData.email}`,
      text: `${formData.message}`,
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) console.log(err);
      console.log("info:", info);
      console.log("Email sent:");
    });
  } catch (error) {
    console.log(error);
  }
};
