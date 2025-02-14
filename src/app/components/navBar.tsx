"use client";

import React from "react";

interface NavbarProps {
  activePage: string;
  onChangePage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, onChangePage }) => {
  return (
    <nav className="w-64 min-h-screen bg-gray-800 text-white flex flex-col shadow-lg">
      <h2 className="text-xl font-bold mb-4 px-4">Menu</h2>

      {["DASHBOARD", "CLASSES", "RECORDS", "QUIZZES"].map((item) => (
        <button
          key={item}
          onClick={() => onChangePage(item)}
          className={`py-3 px-4 rounded-l-md transition w-full text-left ${
            activePage === item
              ? "bg-white text-black hover:bg-gray-700 hover:text-white" 
              : "bg-gray-800 text-white hover:bg-gray-700"
          }`}
        >
          {item}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
