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

  return <div>Records</div>;
}
