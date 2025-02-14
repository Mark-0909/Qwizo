"use client";
import { useEffect, useState } from "react";

export default function Quizzes() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => { // ✅ CORRECT: Async function inside useEffect
      const res = await fetch("/api/data");
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, []);

  return <div>Quizzes</div>;
}
