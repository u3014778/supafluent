"use client"
import { GeistSans } from "geist/font/sans";

import { FluentProvider, webLightTheme } from "@fluentui/react-components";
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <main className="min-h-screen flex flex-col items-center">
        <FluentProvider theme={webLightTheme}>
          {children}
          </FluentProvider>
        </main>
      </body>
    </html>
  );
}
