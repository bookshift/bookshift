"use client";

import getAllUsers from "@/data-access/users/get-all-users";
import React, { useEffect, useState } from "react";
import ChatUser from "./ChatUser";
import { BookUser } from "@/types/user";
import { FaSearch } from "react-icons/fa";

interface ChatUserListProps {
  className: string;
}

const ChatUserList = ({ className }: ChatUserListProps) => {
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
      <div className={className}>
        <div>
          <div className="h-16 w-16 rounded-full bg-primary-grey-color border-2 border-tertiary-color"></div>
        </div>
        <div className="gap-2 items-center grid grid-cols-1 grid-rows-1  w-full ">
          <input
            type="text"
            className="rounded-xl col-start-1 row-start-1 p-2 bg-form-background-color border-2 border-tertiary-color"
          />

          <FaSearch className="col-start-1 row-start-1 justify-self-end me-2" />
        </div>

        {users.map((user) => (
          <React.Fragment key={user.id}>
            <ChatUser user={user} lastMessage="hello" />
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default ChatUserList;
