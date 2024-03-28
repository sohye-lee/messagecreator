'use server';
import { env } from '@/lib/env';
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

export const initiateChat = async () => {
  try {
    const response = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content:
            'You are a helpful assistant who helps with writing other messages for email, cards and texts',
        },
        {
          role: 'user',
          content:
            'Please say hi to the user who just entered in 2-3 sentences. Introduce yourself as an assistant who help write messages for cards, emails, letters or texts in any occasion, event or purpose. Create your own way to say hi.',
        },
      ],
      model: 'gpt-3.5-turbo',
      temperature: 1,
    });
    return response.choices[0].message as ChatCompletionMessageParam;
  } catch (error) {
    console.log((error as any).message);
    return { role: 'assistant', content: 'null' } as ChatCompletionMessageParam;
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
