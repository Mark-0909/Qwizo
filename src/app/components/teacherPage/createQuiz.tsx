"use client";
import { useEffect, useState } from "react";

export default function CreateQuiz() {
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
      <h1>Create Quiz</h1>
    </div>
  );
}
