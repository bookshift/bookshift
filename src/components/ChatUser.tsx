import { BookUser } from "@/types/user";
import React from "react";

interface Props {
  user: BookUser;
  lastMessage: string;
}

const ChatUser = ({ user, lastMessage }: Props) => {
  return (
    <div>
      <h3 className="user__username">{user.username}</h3>
      <p className="user__lastmessage">{lastMessage}</p>
    </div>
  );
};

export default ChatUser;
