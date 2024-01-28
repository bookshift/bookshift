import { BookUser } from "@/types/user";
import { currentUser } from "@clerk/nextjs";

export const getUser = async (): Promise<BookUser | null> => {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  const { firstName, lastName, username, id, emailAddresses } = user;
  const emailAddress = emailAddresses[0]?.emailAddress || "";

  const userData: BookUser = {
    firstname: firstName !== null ? firstName : "",
    lastname: lastName ?? "",
    username: username || emailAddress,
    clerkid: id,
    email: emailAddress,
  };

  console.log(userData);

  return userData;
};
