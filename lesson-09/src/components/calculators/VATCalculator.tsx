'use client';

import { useState } from 'react';
import { calculateVAT } from '@/lib/calculations/vat';
import { formatCurrency } from '@/lib/utils/format';
import type { VATResult } from '@/types';

export default function VATCalculator() {
  const [amount, setAmount] = useState('');
  const [vatType, setVatType] = useState<'exclude' | 'include'>('exclude');
  const [result, setResult] = useState<VATResult | null>(null);
  const [error, setError] = useState('');
  
  const handleCalculate = () => {
    try {
      setError('');
      const value = parseInt(amount);
      const includesVAT = vatType === 'include';
      
      const calculated = calculateVAT(value, includesVAT);
      setResult(calculated);
    } catch (err) {
      setError(err instanceof Error ? err.message : '계산 중 오류가 발생했습니다');
      setResult(null);
    }
  };
  
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">🧾 부가세 계산기</h2>
      
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">금액</label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="100000"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <span className="text-gray-600 font-medium">원</span>
          </div>
        </div>
        
        <div>
          <label className="block text-gray-700 font-medium mb-3">유형 선택</label>
          <div className="space-y-2">
            <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
              <input
                type="radio"
                name="vatType"
                value="exclude"
                checked={vatType === 'exclude'}
                onChange={(e) => setVatType(e.target.value as 'exclude')}
                className="w-4 h-4 text-blue-600"
              />
              <span>공급가액 (부가세 별도)</span>
            </label>
            <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
              <input
                type="radio"
                name="vatType"
                value="include"
                checked={vatType === 'include'}
                onChange={(e) => setVatType(e.target.value as 'include')}
                className="w-4 h-4 text-blue-600"
              />
              <span>부가세 포함 금액</span>
            </label>
          </div>
        </div>
      </div>
      
      <button
        onClick={handleCalculate}
        className="w-full bg-blue-600 text-white py-3 rounded-lg
                 font-semibold hover:bg-blue-700 transition-colors"
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
          <h4 className="font-bold text-center">📊 계산 결과 ({result.type})</h4>
          <div className="space-y-2">
            <div className="flex justify-between p-3 bg-gray-50 rounded">
              <span>공급가액</span>
              <span className="font-semibold">{formatCurrency(result.supplyAmount)}</span>
            </div>
            <div className="flex justify-between p-3 bg-orange-50 rounded">
              <span className="text-orange-600">부가세 (10%)</span>
              <span className="font-semibold text-orange-600">{formatCurrency(result.vatAmount)}</span>
            </div>
            <div className="flex justify-between p-3 bg-blue-50 rounded">
              <span className="font-bold">총 금액</span>
              <span className="font-bold text-blue-600">{formatCurrency(result.totalAmount)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

