import type { Metadata } from "next";
import "./globals.css";
import Taskbar from "@/components/Taskbar";

export const metadata: Metadata = {
  title: "Windows 11 Clone",
  description: "Windows 11 Clone made by tookender",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-900 text-white">
        <div className="h-screen w-screen flex flex-col justify-between">
          {children}
          <Taskbar />
        </div>
      </body>
    </html>
  );
}
