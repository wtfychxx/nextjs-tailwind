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
          onClick={() => setCollapse("bg-white m-2 py-3 px-6 ")}
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

        <div
          className={
            `md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ` +
            collapse
          }
        >
          <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-300">
            <div className="flex flex-wrap">
              <div className="w-6/12">
                <Link href="/card">
                  <a
                    href="#"
                    className="md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0"
                  >
                    SIS
                  </a>
                </Link>
              </div>
              <div className="w-6/12 flex justify-end">
                <button
                  className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                  onClick={() => setCollapse("hidden")}
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <h6 className="md:min-w-full text-gray-600 lg:text-white text-xs uppercase font-bold pt-1 pb-4 no-underline">
            Admin
          </h6>
          <ul className="md:flex-col md:min-w-full flex flex-col list-none">
            <li className="items-center">
              <Link href="/book">
                <a
                  href="#"
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (router.pathname.indexOf("/book") !== -1
                      ? "text-gray-300 lg:text-gray-200 hover:text-gray-500"
                      : "text-gray-800 lg:text-white hover:text-gray-500")
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={
                      "h-6 w-6 mr-2 text-sm inline-block align-middle mb-1 " +
                      (router.pathname.indexOf("/book") !== -1
                        ? "opacity-75"
                        : "text-gray-400 lg:text-white")
                    }
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  Book
                </a>
              </Link>
            </li>
            <li className="items-center">
              <Link href="/card">
                <a
                  href="#"
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (router.pathname.indexOf("/card") !== -1
                      ? "text-gray-300 lg:text-gray-200 hover:text-gray-500"
                      : "text-gray-800 lg:text-white hover:text-gray-500")
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={
                      "h-6 w-6 mr-2 text-sm inline-block align-middle mb-1 " +
                      (router.pathname.indexOf("/card") !== -1
                        ? "opacity-75"
                        : "text-gray-400 lg:text-white")
                    }
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                  Card
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
