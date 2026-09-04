import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gity Ghasemi — Frontend Engineer",
  description:
    "Portfolio of Gity (Monireh) Ghasemi, a frontend engineer focused on React, TypeScript, product UI and scalable frontend architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
