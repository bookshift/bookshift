"use client";

import ChatUserList from "@/components/ChatUserList";
import ChatWindow from "@/components/ChatWindow";
import { useUser } from "@clerk/nextjs";
import React, { useState } from "react";

const page = () => {
  const { isSignedIn, user } = useUser();
  const [receivingUserId, setReceiversId] = useState("");

  let sendingUserId = "";

  if (isSignedIn) {
    sendingUserId = user.id;
  }

  //hanldeUserClick function to get passed down to ChatUserList
  const handleUserClick = (userId: string) => {
    console.log("User clicked:", userId);

    setReceiversId(userId);
  };

  return (
    <>
      <div className="bg-primary-color m-7 rounded-md border-1 border-tertiary-color">
        <div className="flex flex-row min-h-screen items-stretch ">
          <ChatUserList
            className="basis-2/6 flex flex-col gap-3 bg-secondary-color p-2 rounded-md border-2 border-tertiary-color grow overflow-y-auto"
            onUserClick={handleUserClick}
          />
          <ChatWindow
            className="basis-4/6"
            sendersId={sendingUserId}
            receiversId={receivingUserId}
          />
        </div>
      </div>
    </>
  );
};

export default page;
