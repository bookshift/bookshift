"use server";

import prisma from "../../../prisma/globalPrismaClient";
import { BookUser } from "../../types/user";
import getUser from "./get-user";

export default async function createUser(user: BookUser) {
  const userData = user;

  if (!prisma) {
    throw new Error("Prisma is not defined.");
  }

  const existingUser = await getUser();

  if (existingUser) {
    return existingUser;
  }

  const newUser = prisma.user.create({
    data: userData,
  });

  return newUser;
}
