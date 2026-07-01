import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Link — AI Enthusiast & Creator",
  description: "Building tools and telling stories at the intersection of AI, video, and code.",
  openGraph: {
    title: "Link — AI Enthusiast & Creator",
    description: "Building tools and telling stories at the intersection of AI, video, and code.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
