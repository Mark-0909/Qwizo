"use client";
import { useEffect, useState } from "react";

interface QuizzesProps {
  activePage: string;
  onChangePage: (page: string) => void;
}

const Quizzes: React.FC<QuizzesProps> = ({ activePage, onChangePage }) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/data");
        if (!res.ok) throw new Error("Failed to fetch data");
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError((err as Error).message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Quizzes</h1>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <p>Data: {JSON.stringify(data)}</p>
      )}
      <button
        key="CREATEQUIZ"
        onClick={() => onChangePage("CREATEQUIZ")}
        className="bg-blue-900 p-3 text-white"
      >
        Add quiz
      </button>
    </div>
  );
};

export default Quizzes;
