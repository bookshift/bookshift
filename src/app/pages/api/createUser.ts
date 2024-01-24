"use server";

import prisma from "../../../../prisma/globalPrismaClient";
import { BookUser } from "../../../types/user";

export default async function createUser(user: BookUser) {
  const userData = user;

  if (prisma) {
    const newUser = await prisma.user.create({
      data: userData,
    });

    return newUser;
  } else {
    throw new Error("Prisma is not defined.");
  }
}
