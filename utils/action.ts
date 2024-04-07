'use server';
import { env } from '@/lib/env';
import { MessageInfo } from '@/lib/types';
import { db } from '@/prisma/db';
import { auth } from '@clerk/nextjs';
import OpenAi from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources/chat/completions.mjs';

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
          role: 'system',
          content:
            'You are a helpful assistant who helps with writing other messages for email, cards and texts',
        },
        ...chatMessages,
      ],
      model: 'gpt-3.5-turbo',
      temperature: 1,
    });
    return response.choices[0].message as ChatCompletionMessageParam;
  } catch (err) {
    console.log((err as any).message);
    return { role: 'assistant', content: 'null' } as ChatCompletionMessageParam;
  }
};

export const initiateChat = async (messageInfo: MessageInfo) => {
  try {
    const response = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `You are a helpful assistant who helps with writing other messages for email, cards and texts. Please remind the list below: 
            1. Return without any explanation or question. Please return only a list. 
            2. Return all the responses in HTML format, and when you return a list of answers (1,2,3,), please return it as a HTML list (<ul><li></li></ul>).
            3. Don't answer to any other questions or requests else than creating a message..`,
        },
        {
          role: 'assistant',
          content: `Please say hi to the user who just entered in 1-2 sentences. 
            Introduce yourself as an assistant who help write messages for cards, emails, letters or texts in any occasion, event or purpose. 
            Create your own way to say hi. \n
            Then provide  10 numbered list of the messages you create based on the information on the message given below:\n
            Purpose: ${messageInfo.purpose}, 
            Occasion: ${messageInfo.occasion}, 
            Relation of the user to the person that receives this message: ${messageInfo.relation}, 
            Tone: ${messageInfo.tone}, 
            Length: ${messageInfo.length},
            Urgency: ${messageInfo.urgency}, 
            Theme: ${messageInfo.theme}, 
            Other details from user: ${messageInfo.details}, \n
            And then please ask the user if there is any other thing to discuss or modify or edit on the message list that you provided.
            Please be friendly and *important: Please provide your response in HTML code, and for the list of the message, please number each them in HTML numbered list(<ol><li></li></ol>) and give some double space between them.
            `,
        },
      ],
      model: 'gpt-3.5-turbo',
      temperature: 1,
    });
    return response.choices[0].message as ChatCompletionMessageParam;
  } catch (error) {
    console.log((error as any).message);
    return {
      role: 'assistant',
      content: 'Something went wrong on our end...',
    } as ChatCompletionMessageParam;
  }
};

export const getUserInfo = async () => {
  try {
    const { userId } = auth();
    if (!userId) return { ok: false, message: 'No user Id' };
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

export const saveChat = async (messages: string) => {
  try {
    const { userId } = auth();
    if (!userId) return { ok: false, message: 'Not a valid request.' };

    const chat = await db.chat.create({
      data: {
        messages,
        userId,
      },
    });
    return { ok: true, chat };
  } catch (error) {
    console.log((error as any).message);
    return { ok: false, user: null, message: 'Something went wrong...' };
  }
};
