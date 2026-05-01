import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Name — Portfolio",
  description: "Frontend Developer · UI/UX Designer · Full Stack Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
