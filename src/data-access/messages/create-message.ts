"use server";

import { Message } from "@/types/message";
import prisma from "../../../prisma/globalPrismaClient";

export default async function createMessage(message: Message) {
  const messageData = message;

  if (!prisma) {
    throw new Error("Prisma is not defined.");
  }

  await prisma.message.create({
    data: messageData,
  });
}
