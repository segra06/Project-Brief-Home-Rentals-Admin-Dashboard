import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home Rentals Dashboard",
  description: "Dashboard administrativo para gestión de propiedades de alquiler",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased bg-gray-50 min-h-screen">
        {children}
      </body>
    </html>
  );
}
