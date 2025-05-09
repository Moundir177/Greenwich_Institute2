import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import "./styles.css";
import SimpleHeader from "@/components/SimpleHeader";
import SimpleFooter from "@/components/SimpleFooter";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UK Institute - Excellence in Education",
  description: "Leading educational institute in the United Kingdom offering a wide range of courses and certifications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-gray-50`}
      >
        <div className="flex flex-col min-h-screen">
          <SimpleHeader />
          <main className="flex-grow">{children}</main>
          <SimpleFooter />
        </div>
      </body>
    </html>
  );
}
