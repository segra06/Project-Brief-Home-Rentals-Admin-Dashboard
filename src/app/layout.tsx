import type { Metadata } from "next";
import "./globals.css";
import AuthGuard from "@/components/AuthGuard";

export const metadata: Metadata = {
  title: "Miami Rentals Dashboard",
  description: "Administrative dashboard for rental property management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50 min-h-screen">
        <AuthGuard>
          {children}
        </AuthGuard>
      </body>
    </html>
  );
}
