'use client';

import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Home() {
  const { isSignedIn, user } = useUser();

  if (!isSignedIn || !user) {
    return redirect("/sign-in");
  }

  // Redirect to dashboard
  return redirect("/home");
}