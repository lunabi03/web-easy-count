import SalaryCalculator from '@/components/calculators/SalaryCalculator';

export default function SalaryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        💰 연봉 실수령액 계산기
      </h1>
      <p className="text-center text-gray-600 mb-8">
        2026년 최신 세율 적용 - 4대보험 및 소득세 자동 계산
      </p>
      <SalaryCalculator />
    </div>
  );
}


