import { currentUser } from '@clerk/nextjs';

type User = {
  firstName: string | null;
  lastName: string | null;
  username: string | null;
  clerkId: string;
  email: string;
  created: Date;
};

export const getUser = async (): Promise<User | null> => {
  'use server';
  const user = await currentUser();

  if (!user) {
    return null;
  }

  const { firstName, lastName, username, id, emailAddresses, createdAt } = user;
  const emailAddress = emailAddresses[0]?.emailAddress || '';
  const userCreationDate = new Date(createdAt);

  const userData: User = {
    firstName,
    lastName,
    username,
    clerkId: id,
    email: emailAddress,
    created: userCreationDate,
  };

  console.log(userData);

  return userData;
};
