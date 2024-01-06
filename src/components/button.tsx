import Link from "next/link";
import React, { Children } from "react";

interface Props {
  url?: string;
  clickFn?: () => void;
  children: React.ReactNode;
  btnclass: string;
}

const Button = ({ url, clickFn, children, btnclass }: Props) => {
  const component = url ? (
    <Link href={url} className={btnclass}>
      {children}
    </Link>
  ) : (
    <button className={btnclass} onClick={clickFn}>
      {children}
    </button>
  );

  return component;
};

export default Button;
