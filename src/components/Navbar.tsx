import Link from 'next/link';
import { FaUser, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const btnclasses =
    'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl';

  return (
    <nav className="bg-amber-400 p-2 rounded-3xl w-[calc(100%-2rem)] max-w-24 ">
      <div className="container mx-auto flex  justify-between items-center gap-9">
        <Link href="/">logo</Link>

        <div className="gap-2 items-center grid grid-cols-1 grid-rows-1  w-full">
          <input
            type="text"
            className="rounded-xl col-start-1 row-start-1 p-2 "
          />

          <FaSearch className="col-start-1 row-start-1 justify-self-end me-2" />
        </div>
        <div className="flex gap-x-5 ">
          <Link href="/" className={btnclasses}>
            Requests
          </Link>

          <Link href="/" className={btnclasses}>
            Library
          </Link>

          <Link href="/chat" className={btnclasses}>
            Chat
          </Link>

          <Link href="/" className={btnclasses}>
            <span className="flex gap-2  items-center">
              Login
              <FaUser />
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
