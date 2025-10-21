'use client';

import { useState } from 'react';
import { calculateDDay } from '@/lib/calculations/date';
import { formatDate } from '@/lib/utils/format';
import type { DDayResult } from '@/types';

export default function DDayCalculator() {
  const [startDate, setStartDate] = useState('');
  const [result, setResult] = useState<DDayResult | null>(null);
  
  const handleCalculate = () => {
    if (!startDate) {
      alert('날짜를 입력해주세요!');
      return;
    }
    
    const selectedDate = new Date(startDate);
    const today = new Date();
    
    if (selectedDate > today) {
      alert('미래 날짜는 입력할 수 없습니다!');
      return;
    }
    
    const calculated = calculateDDay(selectedDate);
    setResult(calculated);
  };
  
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            연애 시작일 (만난 날)
          </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg
                     focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
        
        <button
          onClick={handleCalculate}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg
                   font-semibold hover:bg-indigo-700 transition-colors"
        >
          기념일 계산하기
        </button>
        
        {result && (
          <div className="mt-8 space-y-4">
            <h3 className="text-xl font-bold text-center mb-4">
              💕 우리의 기념일
            </h3>
            {[
              { days: 100, date: result.day100, daysTo: result.daysTo100, emoji: '💯' },
              { days: 200, date: result.day200, daysTo: result.daysTo200, emoji: '💯' },
              { days: 500, date: result.day500, daysTo: result.daysTo500, emoji: '🎉' },
              { days: 1000, date: result.day1000, daysTo: result.daysTo1000, emoji: '🎊' },
            ].map((item) => (
              <div key={item.days} 
                   className="flex justify-between items-center p-4 
                            bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg
                            hover:shadow-md transition-shadow">
                <span className="font-medium">
                  {item.emoji} {item.days}일 기념일
                </span>
                <div className="text-right">
                  <div className="font-semibold text-indigo-600">{formatDate(item.date)}</div>
                  <div className="text-sm text-gray-600">
                    {item.daysTo > 0 ? `D-${item.daysTo}` : `${Math.abs(item.daysTo)}일 전`}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


