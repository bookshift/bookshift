import ChatUserList from "@/components/ChatUserList";
import ChatWindow from "@/components/ChatWindow";
import React from "react";

const page = () => {
  return (
    <>
      <div className="bg-primary-color m-7 rounded-md border-1 border-tertiary-color">
        <div className="flex flex-row min-h-screen items-stretch ">
          <ChatUserList className="basis-2/6 flex flex-col gap-3 bg-secondary-color p-2 rounded-md border-2 border-tertiary-color grow overflow-y-auto" />
          <ChatWindow className="basis-4/6" />
        </div>
      </div>
    </>
  );
};

export default page;
