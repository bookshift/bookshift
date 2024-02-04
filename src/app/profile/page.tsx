import { ClerkProvider, UserButton, UserProfile, useUser } from "@clerk/nextjs";
import React from "react";

const profile = () => {
  return (
    <div className="flex flex-col justify-items-center items-center gap-5 m-5">
      <div>profile</div>

      <UserProfile />
    </div>
  );
};

export default profile;
