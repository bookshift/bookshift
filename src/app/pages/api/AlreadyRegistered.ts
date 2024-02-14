"use server";

import prisma from "../../../../prisma/globalPrismaClient";

export default async function userRegistered(id: string) {
  console.log(id);

  if (!prisma) {
    throw new Error("Prisma is not defined.");
  }

  const alreadyRegistered = await prisma.user.findUnique({
    where: { clerkid: id },
  });

  if (!alreadyRegistered) {
    return false;
  }

  return console.log(alreadyRegistered);
}
