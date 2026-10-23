import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sonar Next.js Demoyghg",
  description: "Proyecto pequeño para probar el análisis estático de Sonar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
