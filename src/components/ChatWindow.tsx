import React from "react";
import ChatUserInputForm from "./ChatUserInputForm";
import createMessage from "@/data-access/messages/create-message";
import { Message } from "@/types/message";

interface ChatWindowProps {
  className: string;
  sendersId: string;
  receiversId: string;
}

const ChatWindow = ({ className, sendersId, receiversId }: ChatWindowProps) => {
  function handleSubmit(
    inputValue: string,
    sendersId: string,
    receiversId: string
  ) {
    const message: Message = {
      sendingUserId: sendersId,
      receivingUserId: receiversId,
      messageBody: inputValue,
      read: false,
    };

    console.log("Message to be sent:", message);
    createMessage(message);
  }

  return (
    <>
      <div className={className}>
        <div className="flex flex-col h-full">
          <div className="grow">
            <h1> Message area</h1>
          </div>
          <ChatUserInputForm
            sendersId={sendersId}
            receiversId={receiversId}
            sumbitfunction={(
              inputValue: string,
              sendersId: string,
              receiversId: string
            ) => handleSubmit(inputValue, sendersId, receiversId)}
          />
        </div>
      </div>
    </>
  );
};

export default ChatWindow;
