import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Dashboard } from "@/app/components/teacherPage/dashboard";
import { CreateQuiz } from "@/app/components/teacherPage/createQuiz";
import Navbar from "@/app/components/navBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Account",
  description: "Page for creating Account.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen">
          <Navbar />
          <div className="flex-1 p-6">
            <CreateQuiz />
          </div>
        </div>
      </body>
    </html>
  );
}
