import { Inter, Playfair_Display } from "next/font/google";
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

export default function FixedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${inter.variable} ${playfair.variable} antialiased`}>
      <div className="flex flex-col min-h-screen">
        <SimpleHeader />
        <main className="flex-grow">{children}</main>
        <SimpleFooter />
      </div>
    </div>
  );
} 