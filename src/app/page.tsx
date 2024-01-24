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

  //const alreadyRegistered = await userRegistered(user.id);

  // console.log(alreadyRegistered);

  // if (!alreadyRegistered) {
  //   const pushdata: BookUser = {
  //     firstname: user.firstName ?? "",
  //     lastname: user.lastName ?? "",
  //     email: user.emailAddresses[0].emailAddress,
  //     username: user.username || user.emailAddresses[0].emailAddress,
  //     clerkid: user.id,
  //   };

  //   createUser(pushdata);
  // }

  // if (alreadyRegistered) {
  //   return (
  //     <main className="flex min-h-screen flex-col items-center justify-between p-24">
  //       <h1>Bookshift</h1>

  //       <h1>User Profile</h1>
  //       <p>
  //         Name: {alreadyRegistered?.firstname} {alreadyRegistered?.lastname}
  //       </p>
  //       <p>Email: {alreadyRegistered?.email}</p>

  //       <h1> Sign out </h1>
  //       <SignOutButton />
  //     </main>
  //   );
  // }
}
