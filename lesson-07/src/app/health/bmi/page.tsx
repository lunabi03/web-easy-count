import type { Metadata } from 'next';
import BMICalculator from '@/components/calculators/BMICalculator';

export const metadata: Metadata = {
  title: 'BMI 계산기 - 체질량지수 및 적정 체중 계산',
  description: '키와 몸무게를 입력하면 BMI 지수와 건강 상태를 확인할 수 있습니다. 적정 체중 범위도 함께 제공합니다. WHO 아시아인 기준 적용.',
  keywords: ['BMI계산기', '체질량지수', 'BMI', '적정체중', '비만도', '건강', '체중관리'],
  openGraph: {
    title: 'BMI 계산기 - 체질량지수',
    description: '나의 건강 상태를 확인하세요!',
    url: '/health/bmi',
  },
  alternates: {
    canonical: '/health/bmi',
  },
};

export default function BMIPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'BMI 계산기',
    applicationCategory: 'UtilityApplication',
    description: '체질량지수(BMI) 및 적정 체중 계산기',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'KRW',
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
          💪 BMI 계산기
        </h1>
        <p className="text-center text-gray-600 mb-8">
          체질량지수(BMI)로 건강 상태를 확인하세요
        </p>
        <BMICalculator />
      </div>
    </>
  );
}


