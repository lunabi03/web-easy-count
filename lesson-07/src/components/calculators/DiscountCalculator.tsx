'use client';

import { useState } from 'react';
import { calculateDiscount } from '@/lib/calculations/discount';
import { formatCurrency } from '@/lib/utils/format';
import type { DiscountResult } from '@/types';

export default function DiscountCalculator() {
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountRate, setDiscountRate] = useState('');
  const [result, setResult] = useState<DiscountResult | null>(null);
  const [error, setError] = useState('');
  
  const handleCalculate = () => {
    try {
      setError('');
      const price = parseInt(originalPrice);
      const rate = parseInt(discountRate);
      
      const calculated = calculateDiscount(price, rate);
      setResult(calculated);
    } catch (err) {
      setError(err instanceof Error ? err.message : '계산 중 오류가 발생했습니다');
      setResult(null);
    }
  };
  
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6 text-green-600">🏷️ 할인율 계산기</h2>
      
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">원가</label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={originalPrice}
              onChange={(e) => setOriginalPrice(e.target.value)}
              placeholder="100000"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg
                       focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <span className="text-gray-600 font-medium">원</span>
          </div>
        </div>
        
        <div>
          <label className="block text-gray-700 font-medium mb-2">할인율</label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={discountRate}
              onChange={(e) => setDiscountRate(e.target.value)}
              placeholder="30"
              min="0"
              max="100"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg
                       focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <span className="text-gray-600 font-medium">%</span>
          </div>
        </div>
      </div>
      
      <button
        onClick={handleCalculate}
        className="w-full bg-green-600 text-white py-3 rounded-lg
                 font-semibold hover:bg-green-700 transition-colors"
      >
        계산하기
      </button>
      
      {error && (
        <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-400 rounded">
          <p className="text-red-700">⚠️ {error}</p>
        </div>
      )}
      
      {result && (
        <div className="mt-6 space-y-3">
          <h4 className="font-bold text-center">📊 계산 결과</h4>
          <div className="space-y-2">
            <div className="flex justify-between p-3 bg-gray-50 rounded">
              <span>원가</span>
              <span className="font-semibold">{formatCurrency(result.originalPrice)}</span>
            </div>
            <div className="flex justify-between p-3 bg-red-50 rounded">
              <span className="text-red-600">할인 금액 ({result.discountRate}%)</span>
              <span className="font-semibold text-red-600">-{formatCurrency(result.discountAmount)}</span>
            </div>
            <div className="flex justify-between p-3 bg-green-50 rounded">
              <span className="font-bold">최종 가격</span>
              <span className="font-bold text-green-600">{formatCurrency(result.finalPrice)}</span>
            </div>
            <div className="p-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg text-center">
              🎉 {formatCurrency(result.savedAmount)} 절약!
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

