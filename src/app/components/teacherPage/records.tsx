"use client";
import { useEffect, useState } from "react";

export default function Records() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => { 
      const res = await fetch("/api/data");
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between w-full">
        <h1 className="text-3xl font-bold">Records</h1>

      </div>
      <div>
        <hr className="m-5 border-gray-300" />
      </div>
    </div>
  );
}
