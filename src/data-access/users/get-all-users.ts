"use server";

import prisma from "../../../prisma/globalPrismaClient";
import { currentUser } from "@clerk/nextjs";

export default async function getAllUsers() {
  const user = await currentUser();

  if (!user) {
    return undefined;
  }

  if (!prisma) {
    throw new Error("Prisma client is not available.");
  }

  const existingUsers = await prisma.user.findMany();

  if (existingUsers) {
    return existingUsers;
  }
}
