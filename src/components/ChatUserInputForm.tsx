"use client";

import React, { useState } from "react";
import { FaPlus, FaMicrophone } from "react-icons/fa";
import { FaRegFaceSmile } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";

interface ChatUserInputFormProps {
  sendersId: string;
  receiversId: string;
  sumbitfunction: (
    inputValue: string,
    sendersId: string,
    receiversId: string
  ) => void;
}

const ChatUserInputForm = ({
  sendersId,
  receiversId,
  sumbitfunction,
}: ChatUserInputFormProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  return (
    <form
      className="flex flex-row items-center gap-3 bg-secondary-color p-2 rounded-md border-2 border-tertiary-color"
      onSubmit={(e) => {
        e.preventDefault();
        sumbitfunction(inputValue, sendersId, receiversId);
        setInputValue("");
      }}
    >
      <button>
        <FaRegFaceSmile size={25} />
      </button>
      <button>
        <FaPlus size={25} />
      </button>
      <input
        type="text"
        className="rounded-xl col-start-1 row-start-1 p-2 bg-form-background-color border-2 border-tertiary-color grow"
        value={inputValue}
        onChange={handleInputChange}
      ></input>

      {inputValue.length > 0 ? (
        <button type="submit">
          <FiSend size={25} />
        </button>
      ) : (
        <button>
          <FaMicrophone size={25} />
        </button>
      )}
    </form>
  );
};

export default ChatUserInputForm;
