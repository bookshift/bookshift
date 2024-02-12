'use client';

import React, { Suspense, useEffect, useState } from 'react';
import createUser from '@/data-access/users/create-user';
import getUser from '@/data-access/users/get-user';
import { BookUser } from '@/types/user';
import { useUser } from '@clerk/nextjs';

export default function Home() {
  const { isSignedIn, user } = useUser();
  const [_, setLoggedInUser] = useState<BookUser | null>(null);

  useEffect(() => {
    if (isSignedIn) {
      const fetchData = async () => {
        try {
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

          await createUser(pushdata);
          const fetchedUser = await getUser();
          setLoggedInUser(fetchedUser ?? null);
        } catch (error) {
          console.error('Error in user operations:', error);
        }
      };

      fetchData();
    }
  }, [isSignedIn, user]);

  <div className='flex justify-center items-center h-screen'>
    <Suspense fallback='Loading...'>
      <h2 className='text-center'>This will be the new homepage</h2>
    </Suspense>
  </div>;
}
