'use client';

import Navbar from '@/components/Navbar';
import getUser from '@/data-access/users/get-user';
import { useUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

export default async function Home() {
  await getUser();
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Navbar />
      <h1>Bookshift</h1>
    </main>
  );
}
