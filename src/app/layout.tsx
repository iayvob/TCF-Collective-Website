import { Analytics } from "@vercel/analytics/react";

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Content Factory",
  description:
    "TCF is an agency to manage and produce high quality of content and improve arabe digital content",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="font-Roboto font-bold">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
