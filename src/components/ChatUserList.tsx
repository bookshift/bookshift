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
        // Use React.Fragment to wrap multiple elements being returned from map
        <React.Fragment key={user.id}>
          {/* Render the ChatUser component and user details */}
          <ChatUser user={user} lastMessage="hello" />
        </React.Fragment>
      ))}
    </>
  );
};

export default ChatUserList;
