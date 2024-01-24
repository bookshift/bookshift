'use client';

import { SignOutButton, useAuth, useUser } from '@clerk/nextjs';
import createUser from './pages/api/createUser';
import { BookUser } from '../types/user';
import userRegistered from './pages/api/AlreadyRegistered';

export default async function Home() {
  const { isLoaded, isSignedIn, user } = useUser();

  // In case the user signs out while on the page.
  if (!isLoaded || !isSignedIn || !user) {
    return (
      <main>
        <h1>Please sign in</h1>
      </main>
    );
  }

  if (user) {
    const alreadyRegistered = await userRegistered(user.id);
    if (alreadyRegistered) {
      console.log(alreadyRegistered);
      console.log('User already registered');
      return null;
    }

    const pushdata: BookUser = {
      firstname: user.firstName ?? '',
      lastname: user.lastName ?? '',
      email: user.emailAddresses[0].emailAddress,
      username: user.username ?? user.emailAddresses[0].emailAddress,
      clerkid: user.id,
    };

    createUser(pushdata);
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>Bookshift</h1>

      <h1>User Profile</h1>
      <p>
        Name: {user.firstName} {user.lastName}
      </p>
      <p>Email: {user.emailAddresses[0].emailAddress}</p>

      <h1> Sign out </h1>
      <SignOutButton />
    </main>
  );
}
