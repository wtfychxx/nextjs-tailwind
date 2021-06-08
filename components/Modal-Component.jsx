import React from "react";

import { useStoreModal } from "../lib";

export default function ModalComponent({ children }) {
  const { open, hideModal } = useStoreModal();

  return (
    <React.Fragment>
      {open ? (
        <React.Fragment>
          <div
            className={`fixed z-10 inset-0 bg-white overflow-auto md:bg-black md:bg-opacity-50`}
          >
            <div className="flex justify-end mr-7 mt-5 outline-none">
              <span
                onClick={hideModal}
                className={`text-gray-500 text-4xl cursor-pointer border-gray-200 border-2 rounded-full border-opacity-50 md:text-white md:border-white`}
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
              </span>
            </div>
            <div className="mb-12 flex justify-center">{children}</div>
          </div>
        </React.Fragment>
      ) : (
        <div></div>
      )}
    </React.Fragment>
  );
}
