"use client";
import createUser from "@/data-access/users/create-user";
import getUser from "@/data-access/users/get-user";
import { BookUser } from "@/types/user";
import { SignOutButton, useUser } from "@clerk/nextjs";

export default async function Home() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    );
  }

  // In case the user signs out while on the page.
  if (!isSignedIn || !user) {
    return (
      <main>
        <h1>Please sign in</h1>
      </main>
    );
  }

  if (user) {
    const pushdata: BookUser = {
      firstname: user.firstName ?? "",
      lastname: user.lastName ?? "",
      email: user.emailAddresses[0].emailAddress,
      username: user.username ?? user.emailAddresses[0].emailAddress,
      clerkid: user.id,
    };

    createUser(pushdata);

    const logedInUser = await getUser();

    if (logedInUser) {
      return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <h1>Bookshift</h1>

          <h1>User Profile</h1>
          <p>
            Name: {logedInUser?.firstname} {logedInUser?.lastname}
          </p>
          <p>Email: {logedInUser?.email}</p>

          <h1> Sign out </h1>
          <SignOutButton />
        </main>
      );
    }
  }
}
