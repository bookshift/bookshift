"use client";

import React, { useEffect, useState } from "react";
import createUser from "@/data-access/users/create-user";
import getUser from "@/data-access/users/get-user";
import { BookUser } from "@/types/user";
import { SignOutButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    if (user) {
      const pushdata: BookUser = {
        firstname: user.firstName ?? "",
        lastname: user.lastName ?? "",
        email: user.emailAddresses[0].emailAddress,
        username: user.username ?? user.emailAddresses[0].emailAddress,
        clerkid: user.id,
      };

      const createUserAndFetch = async () => {
        try {
          await createUser(pushdata);
          const fetchedUser = await getUser();
          setLoggedInUser(fetchedUser);
        } catch (error) {
          console.error("Error in user operations:", error);
        }
      };

      createUserAndFetch();
    }
  }, [user]);

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

  if (!loggedInUser) {
    return (
      <main>
        <h1>Loading User Data...</h1>
      </main>
    );
  }

  // Render logged-in user's information
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Bookshift</h1>
      <h1>User Profile</h1>
      <p>
        Name: {loggedInUser.firstname} {loggedInUser.lastname}
      </p>
      <p>Email: {loggedInUser.email}</p>

      <Link href="/profile">Go to Profile</Link>
      <h1>Sign out</h1>
      <SignOutButton />
    </main>
  );
}
