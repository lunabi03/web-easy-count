'use client';

import { useState } from 'react';
import { calculateNetSalary } from '@/lib/calculations/salary';
import { formatCurrency } from '@/lib/utils/format';
import type { SalaryResult } from '@/types';

export default function SalaryCalculator() {
  const [annualSalary, setAnnualSalary] = useState('');
  const [dependents, setDependents] = useState('1');
  const [result, setResult] = useState<SalaryResult | null>(null);
  
  const handleCalculate = () => {
    const salary = parseInt(annualSalary);
    const deps = parseInt(dependents);
    
    if (!salary || salary <= 0) {
      alert('연봉을 올바르게 입력해주세요!');
      return;
    }
    
    if (!deps || deps < 1) {
      alert('부양가족 수는 최소 1명(본인)입니다!');
      return;
    }
    
    const calculated = calculateNetSalary(salary, deps);
    setResult(calculated);
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              연봉 (세전)
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={annualSalary}
                onChange={(e) => setAnnualSalary(e.target.value)}
                placeholder="50000000"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg
                         focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <span className="text-gray-600 font-medium">원</span>
            </div>
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              부양가족 수 (본인 포함)
            </label>
            <input
              type="number"
              value={dependents}
              onChange={(e) => setDependents(e.target.value)}
              min="1"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        
        <button
          onClick={handleCalculate}
          className="w-full bg-blue-600 text-white py-3 rounded-lg
                   font-semibold hover:bg-blue-700 transition-colors"
        >
          실수령액 계산하기
        </button>
        
        {result && (
          <div className="mt-8">
            <h3 className="text-xl font-bold text-center mb-6">
              📊 계산 결과
            </h3>
            
            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">월 세전 급여</span>
                <span className="text-xl font-bold text-blue-600">
                  {formatCurrency(result.monthlySalary)}
                </span>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-center mb-4 text-gray-700">
                ───── 공제 내역 ─────
              </h4>
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 text-gray-600">항목</th>
                    <th className="text-right py-2 text-gray-600">금액</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b">
                    <td className="py-2">국민연금 (4.5%)</td>
                    <td className="text-right">{formatCurrency(result.insurance.nationalPension)}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">건강보험 (3.545%)</td>
                    <td className="text-right">{formatCurrency(result.insurance.healthInsurance)}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">장기요양보험</td>
                    <td className="text-right">{formatCurrency(result.insurance.longTermCare)}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">고용보험 (0.9%)</td>
                    <td className="text-right">{formatCurrency(result.insurance.employmentInsurance)}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">소득세</td>
                    <td className="text-right">{formatCurrency(result.tax.incomeTax)}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">지방소득세</td>
                    <td className="text-right">{formatCurrency(result.tax.localTax)}</td>
                  </tr>
                  <tr className="bg-gray-100 font-semibold">
                    <td className="py-3">총 공제액</td>
                    <td className="text-right">{formatCurrency(result.totalDeduction)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="space-y-3">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium">💰 월 실수령액</span>
                  <span className="text-2xl font-bold">{formatCurrency(result.netSalary)}</span>
                </div>
              </div>
              
              <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium">💵 연 실수령액</span>
                  <span className="text-2xl font-bold">{formatCurrency(result.annualNet)}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
              <p className="text-sm text-yellow-800">※ 2025년 기준 간이세액표 적용</p>
              <p className="text-sm text-yellow-800">※ 실제 금액과 다소 차이가 있을 수 있습니다</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

