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
      <div className="flex items-center justify-between w-full">
        <h1 className="text-3xl font-bold">Quizzes</h1>

        <button
          key="CREATEQUIZ"
          onClick={() => onChangePage("CREATEQUIZ")}
          className="bg-blue-900 p-3 text-white rounded"
        >
          Add quiz
        </button>
      </div>
      <div>
        <hr className="m-5 border-gray-300" />
      </div>
    </div>
  );
};

export default Quizzes;
