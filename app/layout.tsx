import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gity Ghasemi — Frontend Engineer | React & TypeScript",
  description:
    "Portfolio of Gity (Monireh) Ghasemi, a Frontend Engineer with 7+ years of production experience in React, TypeScript, frontend architecture, migrations, design systems and automated testing. Open to remote roles across Europe and relocation.",
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
