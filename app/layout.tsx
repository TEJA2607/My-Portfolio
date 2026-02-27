import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { PageTransition } from '@/components/animations/PageTransition';
import { SmoothScroll } from '@/components/animations/SmoothScroll';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Morla Teja | Backend Engineer',
  description: 'Backend Engineer specializing in Java and Spring Boot. Building secure, scalable systems with clean architecture.',
  keywords: ['Backend Engineer', 'Java', 'Spring Boot', 'REST APIs', 'Microservices', 'Software Engineer'],
  authors: [{ name: 'Morla Teja' }],
  openGraph: {
    title: 'Morla Teja | Backend Engineer',
    description: 'Backend Engineer specializing in Java and Spring Boot',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <SmoothScroll />
        <PageTransition>
          <Navbar />
          {children}
          <Footer />
        </PageTransition>
      </body>
    </html>
  );
}
