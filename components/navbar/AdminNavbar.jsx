import { useState } from "react";

const AdminNavbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div className="bg-gradient-to-br from-rose-500 to-pink-500">
      <div className="flex flex-col lg:flex-row">
        <div className="flex items-center justify-between px-4 py-4 lg:py-0 border-b border-rose-400 lg:border-b-none">
          <div>
            <a href="#" className="uppercase font-semibold text-white">
              {" "}
              Brand{" "}
            </a>
          </div>
          <div>
            <button
              onClick={() => setIsMobile(!isMobile)}
              className="focus:outline-none text-white block lg:hidden"
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  className={!isMobile ? "block" : "hidden"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
                <path
                  className={isMobile ? "block" : "hidden"}
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
    </div>
  );
};

export default AdminNavbar;
