"use server";

import { BookUser } from "@/types/user";
import { SignOutButton, useUser } from "@clerk/nextjs";
import { User, Email } from "@clerk/nextjs/server";
import { Sign } from "crypto";
import prisma from "../../../../prisma/globalPrismaClient";
import React, { useEffect } from "react";
import createUser from "./createUser";

async function AlreadyRegistered() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!prisma) {
    throw new Error("Prisma is not defined.");
  }

  if (!user) {
    return null;
  }

  const alreadyRegistered = await prisma.user.findUnique({
    where: { clerkid: user.id },
  });

  if (!alreadyRegistered) {
    const pushdata: BookUser = {
      firstname: user.firstName ?? "",
      lastname: user.lastName ?? "",
      email: user.emailAddresses[0].emailAddress,
      username: user.username || user.emailAddresses[0].emailAddress,
      clerkid: user.id,
    };

    createUser(pushdata);
  }

  return alreadyRegistered;
}

export default AlreadyRegistered;
