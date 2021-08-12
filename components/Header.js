import Image from "next/image";
import logo from "../public/main.svg";
function Header() {
  return (
    <header className="flex items-center shadow-md p-5 font-mono z-50">
      {/* LOGO */}
      <div className="relative h-12 w-12 px-10">
        <Image
          src={logo}
          layout="fill"
          objectFit="contain"
          className="cursor-pointer"
        />
      </div>
      {/* menu list */}
      <div className="hidden lg:inline-flex">
        <ul className="flex space-x-3 first:pl-10 font-bold cursor-pointer">
          <li>Menu</li>
          <li>Reward</li>
          <li>Gift Card</li>
        </ul>
      </div>
      {/* right section */}
      <div className="flex flex-grow justify-end items-center font-bold space-x-4 pr-10">
        <div className="hidden lg:inline-flex  space-x-2 items-center hover:text-green-800 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <p className=" pr-12">Find a Store</p>
        </div>

        <button className="hidden lg:inline-flex border py-2 px-4 border-black rounded-full text-sm font-semibold hover:bg-gray-100 active:scale-105 transform transition duration-200">
          Sign In
        </button>
        <button className="hidden lg:inline-flex border py-2 px-4 border-black  bg-black rounded-full text-sm font-semibold text-white hover:bg-opacity-80 active:scale-105 transform transition duration-200 ">
          Join now
        </button>
        <div className="lg:hidden sm:inline-flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}

export default Header;
