import getMessages from "@/data-access/messages/get-user-messages";
import React, { use, useEffect } from "react";
import Message from "./Message";

interface MessageWindowProps {
  sendersId: string;
  receiversId: string;
}

const MessageWindow = ({ sendersId, receiversId }: MessageWindowProps) => {
  if (!sendersId || !receiversId) {
    return <div>MessageWindow</div>;
  }

  console.log("sendersId:", sendersId);
  console.log("receiversId:", receiversId);

  const baseStyle =
    "m-7 rounded-md bg-pink-alt-color border-1 border-tertiary-color justify-self-start max-w-md p-4 border-2 rounded-md";
  const left = baseStyle + " bg-pink-alt-color";
  const right = baseStyle + " bg-background-color ml-auto";

  const messages = use(getMessages(sendersId, receiversId));

  return (
    <div>
      {messages?.map((message) => (
        <Message
          key={message.id}
          messageBody={message.messageBody}
          read={message.read}
          sentTimestamp={message.sentTimestamp}
          className={message.sendingUser.id === sendersId ? right : left}
        />
      ))}
    </div>

    // <div className="flex flex-col h-full w-full overflow-y-auto p-2 rounded-md">
    //   <Message
    //     key="1"
    //     messageBody="Hello"
    //     read={false}
    //     sentTimestamp={new Date("2021-09-01T15:00:00Z")}
    //     className={left}
    //   />
    //   <Message
    //     key="2"
    //     messageBody="How are you?"
    //     read={false}
    //     sentTimestamp={new Date("2021-09-01T00:00:00Z")}
    //     className={right}
    //   />
    //   <Message
    //     key="3"
    //     messageBody="I'm good, thanks!"
    //     read={false}
    //     sentTimestamp={new Date("2021-09-01T20:00:00Z")}
    //     className={left}
    //   />
    // </div>
  );
};

export default MessageWindow;
