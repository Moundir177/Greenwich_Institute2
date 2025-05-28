import type { Metadata } from 'next';
import './globals.css';
import './styles/navbar-fix.css';
import { Inter, Playfair_Display } from 'next/font/google';
import ClientProviders from './components/ClientProviders';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Greenwich HSTC | World-Class Learning',
  description: 'Transform your career with Greenwich HSTC accredited courses, expert instructors, and global learning community. Discover a world of opportunities.',
  keywords: 'education, online courses, learning, professional development, career growth, certification',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`} suppressHydrationWarning>
        <ClientProviders>
          <Navbar />
          <div className="pt-20">
            {children}
          </div>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
