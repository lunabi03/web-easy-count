'use client';

import { useState } from 'react';
import { calculateBirthday } from '@/lib/calculations/date';
import { formatNumber } from '@/lib/utils/format';
import type { BirthdayResult } from '@/types';

export default function BirthdayCalculator() {
  const [birthday, setBirthday] = useState('');
  const [result, setResult] = useState<BirthdayResult | null>(null);
  
  const handleCalculate = () => {
    if (!birthday) {
      alert('생년월일을 입력해주세요!');
      return;
    }
    
    const birthDate = new Date(birthday);
    const today = new Date();
    
    if (birthDate > today) {
      alert('미래 날짜는 입력할 수 없습니다!');
      return;
    }
    
    const calculated = calculateBirthday(birthDate);
    setResult(calculated);
  };
  
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            생년월일
          </label>
          <input
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg
                     focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
        
        <button
          onClick={handleCalculate}
          className="w-full bg-purple-600 text-white py-3 rounded-lg
                   font-semibold hover:bg-purple-700 transition-colors"
        >
          살아온 날 계산하기
        </button>
        
        {result && (
          <div className="mt-8">
            <h3 className="text-xl font-bold text-center mb-6">
              🎂 당신은 지금까지...
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                <div className="text-gray-600 mb-1">📅 총 일수</div>
                <div className="text-2xl font-bold text-purple-600">
                  {formatNumber(result.totalDays)}일
                </div>
              </div>
              
              <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                <div className="text-gray-600 mb-1">📆 총 주수</div>
                <div className="text-2xl font-bold text-blue-600">
                  {formatNumber(result.totalWeeks)}주
                </div>
              </div>
              
              <div className="p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg">
                <div className="text-gray-600 mb-1">🗓️ 총 개월수</div>
                <div className="text-2xl font-bold text-green-600">
                  {result.totalMonths}개월
                </div>
              </div>
              
              <div className="p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg">
                <div className="text-gray-600 mb-1">🎉 총 년수</div>
                <div className="text-2xl font-bold text-orange-600">
                  {result.totalYears}년
                </div>
              </div>
              
              <div className="p-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg text-center">
                <div className="font-semibold">
                  🎁 다음 생일까지 {result.daysToNextBirthday}일 남았습니다!
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


