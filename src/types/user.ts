export interface BookUser {
  id: string;
  email: string;
  username: string | null;
  firstname: string | null;
  lastname: string | null;
  clerkid: string;
  createdAt: Date | null;
  updatedAt: Date | null;
}
