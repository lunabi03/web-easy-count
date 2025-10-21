import type { Metadata } from 'next';
import SalaryCalculator from '@/components/calculators/SalaryCalculator';

export const metadata: Metadata = {
  title: '연봉 실수령액 계산기 - 4대보험·세금 제외 월급 계산',
  description: '연봉을 입력하면 4대보험, 소득세를 제외한 실제 월 수령액을 정확하게 계산해드립니다. 2025년 최신 세율 적용.',
  keywords: ['연봉계산기', '실수령액', '월급계산', '4대보험', '소득세', '세후급여', '급여계산'],
  openGraph: {
    title: '연봉 실수령액 계산기',
    description: '정확한 월 실수령액을 확인하세요!',
    url: '/salary',
  },
  alternates: {
    canonical: '/salary',
  },
};

export default function SalaryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        💰 연봉 실수령액 계산기
      </h1>
      <p className="text-center text-gray-600 mb-8">
        2025년 최신 세율 적용 - 4대보험 및 소득세 자동 계산
      </p>
      <SalaryCalculator />
    </div>
  );
}

