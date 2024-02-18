import React from "react";
import { FaMicrophone, FaPlus, FaSearch, FaSmile } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

import { FaRegFaceSmile } from "react-icons/fa6";

interface ChatWindowProps {
  className: string;
}

const ChatWindow = ({ className }: ChatWindowProps) => {
  return (
    <>
      <div className={className}>
        <div className="flex flex-col h-full">
          <div className="grow">
            <h1> Message area</h1>
          </div>
          <div className="flex flex-row items-center gap-3 bg-secondary-color p-2 rounded-md border-2 border-tertiary-color">
            <button>
              <FaRegFaceSmile size={25} />
            </button>
            <button>
              <FaPlus size={25} />
            </button>
            <input
              type="text"
              className="rounded-xl col-start-1 row-start-1 p-2 bg-form-background-color border-2 border-tertiary-color grow"
            ></input>
            <button>
              <FaMicrophone size={25} />
              <FiSend size={25} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatWindow;
