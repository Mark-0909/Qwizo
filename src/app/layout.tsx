"use client";

import { useState } from "react";
import "./globals.css";
import Navbar from "@/app/components/navBar";
import Dashboard  from "@/app/components/teacherPage/dashboard";
import CreateQuiz from "@/app/components/teacherPage/createQuiz";
import Quizzes from "@/app/components/teacherPage/quizzes";
import Classes from "@/app/components/teacherPage/classes";
import Records from "@/app/components/teacherPage/records";

export default function Page() {
  const [activePage, setActivePage] = useState("DASHBOARD");

  const renderContent = () => {
    switch (activePage) {
      case "DASHBOARD":
        return <Dashboard />;
      case "CLASSES":
        return <Classes />;
      case "QUIZZES":
        return <Quizzes activePage={"QUIZZES"} onChangePage={setActivePage} />;
      case "CREATEQUIZ":
        return <CreateQuiz />;
      case "RECORDS":
        return <Records />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <html lang="en">
      <body>
        <div className="flex">
          <div className="fixed h-screen w-64">
            <Navbar activePage={activePage} onChangePage={setActivePage} />
          </div>
  
          <div className="flex-1 ml-64 p-6 overflow-auto h-screen">
            {renderContent()}
          </div>
        </div>
      </body>
    </html>
  );
  
}
