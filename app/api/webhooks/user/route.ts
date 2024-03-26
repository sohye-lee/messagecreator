import { db } from "@/prisma/db";
import { clerkClient } from "@clerk/nextjs/server";
import { IncomingHttpHeaders } from "http";
import { NextApiRequest, NextApiResponse } from "next";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { Webhook, WebhookRequiredHeaders } from "svix";
import { env } from "@/lib/env";

const webhookSecret = env.CLERK_WEBHOOK_SECRET || "";

async function handler(request: Request) {
  const payload = await request.json();
  const headersList = headers();
  const heads = {
    "svix-id": headersList.get("svix-id"),
    "svix-timestamp": headersList.get("svix-timestamp"),
    "svix-signature": headersList.get("svix-signature"),
  };
  const wh = new Webhook(webhookSecret);
  let evt: Event | null = null;

  console.log("update user started");
  try {
    evt = wh.verify(
      JSON.stringify(payload),
      heads as IncomingHttpHeaders & WebhookRequiredHeaders
    ) as Event;
  } catch (err) {
    console.error((err as Error).message);
    return NextResponse.json({}, { status: 400 });
  }

  const eventType: EventType = evt.type;
  if (eventType === "user.created" || eventType === "user.updated") {
    const { id, ...attributes } = evt.data;
    console.log("id:", id);
    console.log("attributes:", attributes);
    const user = await db.user.upsert({
      where: { externalId: id as string },
      create: {
        externalId: id as string,
        attributes,
      },
      update: { attributes },
    });
    return NextResponse.json({ ok: true, user });
  }
  return NextResponse.json({ ok: true });
}

type EventType = "user.created" | "user.updated" | "*";

type Event = {
  data: Record<string, string | number>;
  object: "event";
  type: EventType;
};

export const GET = handler;
export const POST = handler;
export const PUT = handler;
