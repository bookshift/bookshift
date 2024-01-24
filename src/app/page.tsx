"use client";

import { useUser, SignOutButton } from "@clerk/nextjs";
import createUser from "./pages/api/createUser";
import { BookUser } from "../types/user";
import userRegistered from "./pages/api/AlreadyRegistered";

export default async function Home() {
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

  const alreadyRegistered = async () => {
    const resgisteredResult = userRegistered(user.id);

    if (await resgisteredResult) {
      const returnedUser = await resgisteredResult.then((res) => res);

      return returnedUser;
    }
  };

  const registedUser = await alreadyRegistered();

  if (!registedUser) {
    const pushdata: BookUser = {
      firstname: user.firstName ?? "",
      lastname: user.lastName ?? "",
      email: user.emailAddresses[0].emailAddress,
      username: user.username || user.emailAddresses[0].emailAddress,
      clerkid: user.id,
    };

    createUser(pushdata);
  }

  if (await registedUser) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Bookshift</h1>

        <h1>User Profile</h1>
        <p>
          Name: {registedUser?.firstname} {registedUser?.lastName}
        </p>
        <p>Email: {registedUser?.emailAddress}</p>

        <h1> Sign out </h1>
        <SignOutButton />
      </main>
    );
  }
}
