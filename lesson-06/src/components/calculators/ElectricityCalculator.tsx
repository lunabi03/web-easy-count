'use client';

import { useState } from 'react';
import { calculateElectricity, getSavingTips } from '@/lib/calculations/electricity';
import type { ElectricityResult } from '@/types';

export default function ElectricityCalculator() {
  const [usage, setUsage] = useState('');
  const [result, setResult] = useState<ElectricityResult | null>(null);
  const [tips, setTips] = useState<string[]>([]);

  const handleCalculate = () => {
    // 숫자만 허용 (텍스트 입력 시 숫자만 추출)
    const normalized = usage.replace(/[^0-9]/g, '');
    const kwh = parseInt(normalized, 10);
    if (!normalized || isNaN(kwh) || kwh < 0) {
      alert('사용량을 올바르게 입력해주세요 (0 이상 정수).');
      return;
    }
    const r = calculateElectricity(kwh);
    setResult(r);
    setTips(getSavingTips(kwh));
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="mb-6">
          <label className="block text-gray-900 font-medium mb-2">월 사용량 (kWh)</label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              value={usage}
              onChange={(e) => setUsage(e.target.value)}
              placeholder="350"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-400"
            />
            <span className="text-gray-800 font-medium">kWh</span>
          </div>
        </div>

        <button
          onClick={handleCalculate}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          전기 요금 계산하기
        </button>

        {result && (
          <div className="mt-8 space-y-6">
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">적용 구간</span>
                <span className="text-lg font-semibold text-blue-700">{result.tier}</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-center mb-4 text-gray-700">요금 내역</h4>
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 text-gray-600">항목</th>
                    <th className="text-right py-2 text-gray-600">금액(원)</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b">
                    <td className="py-2">기본요금</td>
                    <td className="text-right">{result.baseCharge.toLocaleString()}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">전력량 요금</td>
                    <td className="text-right">{result.usageCharge.toLocaleString()}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">기후환경요금</td>
                    <td className="text-right">{result.climateCharge.toLocaleString()}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">부가가치세(10%)</td>
                    <td className="text-right">{result.vat.toLocaleString()}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">전력산업기반기금(3.7%)</td>
                    <td className="text-right">{result.fund.toLocaleString()}</td>
                  </tr>
                  <tr className="bg-gray-100 font-semibold">
                    <td className="py-3">최종 청구금액</td>
                    <td className="text-right">{result.totalCharge.toLocaleString()}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg">
                <div className="text-sm">kWh당 평균 단가</div>
                <div className="text-2xl font-bold">{result.averageUnitPrice.toLocaleString()}원</div>
              </div>
              <div className="p-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-lg">
                <div className="text-sm">일 평균 비용</div>
                <div className="text-2xl font-bold">{result.dailyAverage.toLocaleString()}원</div>
              </div>
              <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg">
                <div className="text-sm">연간 추정 비용</div>
                <div className="text-2xl font-bold">{result.yearlyEstimate.toLocaleString()}원</div>
              </div>
            </div>

            {tips.length > 0 && (
              <div className="mt-2 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                <ul className="list-disc list-inside text-sm text-yellow-800 space-y-1">
                  {tips.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}


