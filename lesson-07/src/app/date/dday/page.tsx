import type { Metadata } from 'next';
import DDayCalculator from '@/components/calculators/DDayCalculator';

export const metadata: Metadata = {
  title: '100일 계산기 - 커플 디데이 기념일 계산',
  description: '연애 시작일을 입력하면 100일, 200일, 500일, 1000일 기념일 날짜를 자동으로 계산해드립니다. 커플 필수 계산기!',
  keywords: ['100일계산기', '디데이계산기', '커플기념일', '연애기념일', '1000일', '기념일계산'],
  openGraph: {
    title: '100일 계산기 - 커플 디데이',
    description: '연애 기념일을 놓치지 마세요!',
    type: 'website',
    url: '/date/dday',
  },
  alternates: {
    canonical: '/date/dday',
  },
};

export default function DDayPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: '100일 계산기',
    applicationCategory: 'UtilityApplication',
    description: '커플 기념일 계산기',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">
          💕 커플 디데이 계산기
        </h1>
        <DDayCalculator />
      </div>
    </>
  );
}

