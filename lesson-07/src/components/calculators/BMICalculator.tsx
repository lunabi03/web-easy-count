'use client';

import { useState } from 'react';
import { calculateBMI } from '@/lib/calculations/health';
import type { BMIResult } from '@/types';

export default function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState<BMIResult | null>(null);
  
  const handleCalculate = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    
    if (!h || h <= 0 || !w || w <= 0) {
      alert('키와 몸무게를 올바르게 입력해주세요!');
      return;
    }
    
    if (h < 100 || h > 250) {
      alert('키는 100cm ~ 250cm 사이로 입력해주세요!');
      return;
    }
    
    if (w < 20 || w > 300) {
      alert('몸무게는 20kg ~ 300kg 사이로 입력해주세요!');
      return;
    }
    
    const calculated = calculateBMI(h, w);
    setResult(calculated);
  };
  
  const getStatusColor = (status: BMIResult['status']) => {
    const colors = {
      underweight: 'bg-blue-100 text-blue-800 border-blue-300',
      normal: 'bg-green-100 text-green-800 border-green-300',
      overweight: 'bg-yellow-100 text-yellow-800 border-yellow-300',
      obese: 'bg-red-100 text-red-800 border-red-300',
    };
    return colors[status];
  };
  
  const getProgressBarColor = (status: BMIResult['status']) => {
    const colors = {
      underweight: 'bg-blue-500',
      normal: 'bg-green-500',
      overweight: 'bg-yellow-500',
      obese: 'bg-red-500',
    };
    return colors[status];
  };
  
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              키 (cm)
            </label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="170"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg
                       focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              몸무게 (kg)
            </label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="65"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg
                       focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
        </div>
        
        <button
          onClick={handleCalculate}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg
                   font-semibold hover:bg-indigo-700 transition-colors"
        >
          BMI 계산하기
        </button>
        
        {result && (
          <div className="mt-8">
            <div className="text-center mb-6">
              <div className="text-6xl font-bold text-indigo-600 mb-3">
                {result.bmi}
              </div>
              <div className={`inline-block px-6 py-3 rounded-full font-semibold text-lg border-2
                            ${getStatusColor(result.status)}`}>
                {result.category}
              </div>
            </div>
            
            {/* BMI 시각화 바 */}
            <div className="mb-6">
              <div className="relative h-8 bg-gray-200 rounded-full overflow-hidden">
                <div className="absolute h-full flex">
                  <div className="bg-blue-400" style={{ width: '18.5%' }}></div>
                  <div className="bg-green-400" style={{ width: '4.5%' }}></div>
                  <div className="bg-yellow-400" style={{ width: '2%' }}></div>
                  <div className="bg-red-400" style={{ width: '75%' }}></div>
                </div>
                <div 
                  className={`absolute h-full w-1 bg-gray-800`}
                  style={{ left: `${Math.min(result.bmi / 40 * 100, 100)}%` }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                    {result.bmi}
                  </div>
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <span>저체중</span>
                <span>정상</span>
                <span>과체중</span>
                <span>비만</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg border border-indigo-200">
                <div className="text-sm text-gray-600 mb-1 font-medium">적정 체중 범위</div>
                <div className="text-xl font-bold text-indigo-600">
                  {result.healthyWeightRange.min}kg ~ {result.healthyWeightRange.max}kg
                </div>
              </div>
              
              {result.weightDifference > 0 && (
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border border-yellow-300">
                  <div className="font-semibold text-yellow-800 text-center">
                    {result.status === 'underweight' 
                      ? `⬆️ ${result.weightDifference}kg 증량 권장`
                      : `⬇️ ${result.weightDifference}kg 감량 권장`
                    }
                  </div>
                </div>
              )}
              
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-200">
                <div className="text-blue-800 leading-relaxed">
                  <strong>💡 건강 조언:</strong><br/>
                  {result.recommendation}
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600">
                <p className="mb-2"><strong>BMI 기준 (WHO, 아시아인 기준):</strong></p>
                <ul className="space-y-1 ml-4">
                  <li>• 저체중: 18.5 미만</li>
                  <li>• 정상: 18.5 ~ 23 미만</li>
                  <li>• 과체중: 23 ~ 25 미만</li>
                  <li>• 비만: 25 이상</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


