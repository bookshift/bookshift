import { BookUser } from "@/types/user";
import React from "react";

interface Props {
  user: BookUser;
  lastMessage: string;
}

const ChatUser = ({ user, lastMessage }: Props) => {
  return (
    <div className="p-2 rounded-md bg-form-background-color border-2 border-tertiary-color cursor-pointer hover:bg-background-color">
      <h3 className="user__username">{user.username}</h3>
      <p className="user__lastmessage">{lastMessage}</p>
    </div>
  );
};

export default ChatUser;
