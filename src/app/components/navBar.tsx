"use client";

import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("DASHBOARD");

  return (
    <nav className="w-64 min-h-screen bg-gray-800 text-white flex flex-col shadow-lg">
      <h2 className="text-xl font-bold mb-4 px-4">Menu</h2>

      {["DASHBOARD", "CLASSES", "RECORDS", "QUIZZES"].map((item) => (
        <a
          key={item}
          href="#"
          onClick={() => setActive(item)}
          className={`py-3 px-4 rounded-l-md transition w-full ${
            active === item
              ?  "bg-white text-black hover:bg-gray-700 hover:text-white"  
              :"bg-gray-800 text-white"
          }`}
        >
          {item}
        </a>
      ))}
    </nav>
  );
}
