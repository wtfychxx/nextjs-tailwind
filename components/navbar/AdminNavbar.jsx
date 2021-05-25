import { useState } from "react";

const AdminNavbar = () => {
  return (
    <div className="bg-gradient-to-br from-rose-500 to-pink-500 py-4">
      <div className="flex flex-col lg:flex-row">
        <div className="flex items-center justify-between px-4 py-4 lg:py-0 border-b border-rose-400 lg:border-b-none">
          <div>
            <a href="#" className="uppercase font-semibold text-white">
              {process.env.appName}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
