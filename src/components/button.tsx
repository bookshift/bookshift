"use client";

import Link from "next/link";
import React, { useRef } from "react";

interface Props {
  url?: string;
  clickFn?: () => void;
  children: React.ReactNode;
  btnclass: string;
  type?: "button" | "submit" | "reset";
}

const Button = ({ url, clickFn, children, btnclass, type }: Props) => {
  let buttonRef = useRef<HTMLButtonElement>(null);
  let linkRef = useRef<HTMLAnchorElement>(null);

  const component = url ? (
    <Link href={url} passHref legacyBehavior>
      <a ref={linkRef} className={btnclass}>
        {children}
      </a>
    </Link>
  ) : (
    <button className={btnclass} ref={buttonRef} onClick={clickFn} type={type}>
      {children}
    </button>
  );

  return component;
};

export default Button;
