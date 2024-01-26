"use server";

import prisma from "../../../prisma/globalPrismaClient";
import { BookUser } from "../../types/user";

export default async function createUser(user: BookUser) {
  const userData = user;
  console.log(userData);

  if (!prisma) {
    throw new Error("Prisma is not defined.");
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      clerkid: userData.clerkid,
    },
  });

  if (existingUser) {
    console.log("User already exists.");
    return existingUser;
  }

  const newUser = prisma.user.create({
    data: userData,
  });

  return newUser;
}
