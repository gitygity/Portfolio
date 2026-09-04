import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gity Ghasemi — Frontend Engineer",
  description:
    "Gity (Monireh) Ghasemi is a Frontend Engineer with 7 years of production experience in React, TypeScript, frontend architecture, migrations, design systems and automated testing.",
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
