import type { Metadata } from "next";
import type { ReactNode } from "react";

import { SITE_NAME, SITE_URL } from "@/lib/seo";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Rewrite Organizational DNA`,
    template: `%s｜${SITE_NAME}`,
  },
  description:
    "Read Regenic free: encode insight as shared judgment standards and shared context.",
  applicationName: SITE_NAME,
  authors: [{ name: "Jeson Li" }],
  creator: "Jeson Li",
  publisher: SITE_NAME,
  formatDetection: {
    address: false,
    email: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
