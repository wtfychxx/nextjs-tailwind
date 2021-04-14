import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import NotificationDropdown from "../dropdown/NotificationDropdown";
import UserDropdown from "../dropdown/UserDropdown";

export default function AdminSidebar() {
  const [collapse, setCollapse] = useState("hidden");
  const router = useRouter();
  return (
    <div className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-no-wrap md:overflow-hidden shadow-xl bg-gradient-to-br from-red-500 to-pink-500 flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
      <div className="md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
        <button
          className="cursor-pointer text-white md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent text-white"
          type="button"
          onClick={() => setCollapse("bg-white m-2 py-3 px-6")}
        >
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
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </button>

        <Link href="/card">
          <a
            href="#"
            className="md:block text-left md:pb-2 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0 text-white"
          >
            S I S
          </a>
        </Link>
        <ul className="md:hidden items-center flex flex-wrap list-none">
          <li className="inline-block relative">
            <NotificationDropdown />
          </li>
          <li className="inline-block relative">
            <UserDropdown />
          </li>
        </ul>
      </div>
    </div>
  );
}
