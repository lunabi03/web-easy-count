import ElectricityCalculator from '@/components/calculators/ElectricityCalculator';

export const metadata = {
  title: '전기 요금 계산기',
  description: '월 전기 사용량으로 전기 요금을 계산합니다.',
};

export default function ElectricityPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-50 mb-6">전기 요금 계산기</h1>
      <p className="text-gray-300 mb-6">월 사용량(kWh)을 입력하면 예상 청구 금액을 계산해드립니다.</p>
      <ElectricityCalculator />
    </main>
  );
}


