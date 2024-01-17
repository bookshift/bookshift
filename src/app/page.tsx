import Navbar from '@/components/Navbar';
import { getUser } from '@/data-access/users/get-user';

export default async function Home() {
  await getUser();
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Navbar />
      <h1>Bookshift</h1>
    </main>
  );
}
