import getAllUsers from "@/data-access/users/get-all-users";
import React, { useEffect, useState } from "react";
import ChatUser from "./chatuser";
import { BookUser } from "@/types/user";

const ChatUserList = () => {
  const [users, setUsers] = useState<BookUser[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const fetchedUsers = await getAllUsers();
      if (fetchedUsers) {
        setUsers(fetchedUsers);
      }
    };
    fetchUsers();
  }, []);

  if (!users || users.length === 0) {
    return <div>No users found</div>;
  }

  return (
    <>
      {users.map((user) => (
        <React.Fragment key={user.id}>
          <ChatUser user={user} lastMessage="hello" />
        </React.Fragment>
      ))}
    </>
  );
};

export default ChatUserList;
