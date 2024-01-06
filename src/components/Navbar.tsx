import React from "react";
import Button from "./Button";

const Navbar = () => {
  const btnclasses =
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl";

  return (
    <nav className="bg-amber-400 p-2 rounded-3xl w-[calc(100%-2rem)] max-w-24">
      <div className="container mx-auto flex  justify-between items-center">
        <Button url="/" btnclass="">
          logo
        </Button>

        <div className="flex gap-2 items-center grid grid-cols-1 grid-rows-1  w-100%">
          <input
            type="text"
            className="rounded-3xl col-start-1 row-start-1 p-2 "
          />
          <svg
            className="col-start-1 row-start-1 justify-self-end me-2"
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="16"
            viewBox="0 0 512 512"
          >
            {/* Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </div>
        <div className="flex gap-x-5 ">
          <Button url="/" btnclass={btnclasses}>
            Requests
          </Button>

          <Button url="/" btnclass={btnclasses}>
            Library
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
