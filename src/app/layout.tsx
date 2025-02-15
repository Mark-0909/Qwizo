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
        return <Quizzes />;
      case "RECORDS":
        return <Records />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <html>
      <body>
        <div className="flex min-h-screen">
      <Navbar activePage={activePage} onChangePage={setActivePage} />
      <div className="flex-1 p-6">{renderContent()}</div>
    </div>
      </body>
    </html>
    
  );
}
