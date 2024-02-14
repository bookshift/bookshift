"use server";

import { BookUser } from "@/types/user";
import prisma from "../../../prisma/globalPrismaClient";
import { currentUser } from "@clerk/nextjs";

export default async function getUser() {
  const user = await currentUser();

  if (!user) {
    return undefined;
  }

  if (!prisma) {
    throw new Error("Prisma client is not available.");
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      clerkid: user.id,
    },
  });

  if (existingUser) {
    return existingUser;
  }
}
