"use client";
import React, { useRef } from "react";

interface Props {
  clickFn?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

const Button = ({ clickFn, children, type }: Props) => {
  let ref = useRef(null);

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl"
      ref={ref}
      onClick={clickFn}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
