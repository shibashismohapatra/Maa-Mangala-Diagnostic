import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smiles by Dr. Annu",
  description: "Maa Mangala Diagnostic clinic website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
