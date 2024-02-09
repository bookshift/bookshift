'use client';

import React, { useEffect, useState } from 'react';
import createUser from '@/data-access/users/create-user';
import getUser from '@/data-access/users/get-user';
import { BookUser } from '@/types/user';
import { useUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

export default function Home() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [loggedInUser, setLoggedInUser] = useState<BookUser | null>(null);

  useEffect(() => {
    if (user) {
      const pushdata: BookUser = {
        id: user.id,
        firstname: user.firstName ?? '',
        lastname: user.lastName ?? '',
        email: user.emailAddresses[0].emailAddress,
        username: user.username ?? user.emailAddresses[0].emailAddress,
        clerkid: user.id,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      };

      const createUserAndFetch = async () => {
        try {
          await createUser(pushdata);
          const fetchedUser = await getUser();
          setLoggedInUser(fetchedUser ?? null);
        } catch (error) {
          console.error('Error in user operations:', error);
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

  // Render logged-in user's information
  return redirect('/home');
}
