import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Analytics from '@/components/Analytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Easy Count - 생활 계산기',
    template: '%s | Easy Count'
  },
  description: '날짜, 급여, 할인율, BMI 등 일상생활에 필요한 모든 계산을 한 곳에서! 무료 온라인 계산기.',
  keywords: ['계산기', '날짜계산', '연봉계산', '디데이', '할인율', 'BMI', '실수령액', '부가세', '생일계산'],
  authors: [{ name: 'Easy Count' }],
  creator: 'Easy Count',
  publisher: 'Easy Count',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://easycount.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://easycount.com',
    title: 'Easy Count - 생활 계산기',
    description: '일상생활에 필요한 모든 계산을 한 곳에서!',
    siteName: 'Easy Count',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Easy Count - 생활 계산기',
    description: '일상생활에 필요한 모든 계산을 한 곳에서!',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Analytics />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

