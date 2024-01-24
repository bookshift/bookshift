"use client";

import { useUser, SignOutButton } from "@clerk/nextjs";
import createUser from "./pages/api/createUser";
import { BookUser } from "../types/user";
import userRegistered from "./pages/api/AlreadyRegistered";
import { use } from "react";

export default function Home() {
  const { isLoaded, isSignedIn, user } = useUser();

  // In case the user signs out while on the page.

  if (!isLoaded) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    );
  }

  if (!isSignedIn || !user) {
    return (
      <main>
        <h1>Please sign in</h1>
      </main>
    );
  }

  userRegistered();
}
