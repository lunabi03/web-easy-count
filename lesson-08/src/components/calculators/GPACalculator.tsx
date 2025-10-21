'use client';

import { useState } from 'react';
import { calculateGPA, gradeToPoint } from '@/lib/calculations/academic';
import type { Course, GPAResult } from '@/types';

export default function GPACalculator() {
  const [courses, setCourses] = useState<Course[]>([
    { id: '1', name: '', credit: 3, grade: 'A' }
  ]);
  const [result, setResult] = useState<GPAResult | null>(null);
  
  const addCourse = () => {
    setCourses([...courses, {
      id: Date.now().toString(),
      name: '',
      credit: 3,
      grade: 'A'
    }]);
  };
  
  const removeCourse = (id: string) => {
    if (courses.length > 1) {
      setCourses(courses.filter(c => c.id !== id));
    }
  };
  
  const updateCourse = (id: string, field: keyof Course, value: any) => {
    setCourses(courses.map(c =>
      c.id === id ? { ...c, [field]: value } : c
    ));
  };
  
  const handleCalculate = () => {
    const calculated = calculateGPA(courses);
    setResult(calculated);
  };
  
  const grades = ['A+', 'A', 'B+', 'B', 'C+', 'C', 'D+', 'D', 'F', 'P'];
  
  const getGradeColor = (letterGrade: string) => {
    if (letterGrade.startsWith('A')) return 'text-green-600';
    if (letterGrade.startsWith('B')) return 'text-blue-600';
    if (letterGrade.startsWith('C')) return 'text-yellow-600';
    if (letterGrade.startsWith('D')) return 'text-orange-600';
    return 'text-red-600';
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        {/* 테이블 헤더 */}
        <div className="grid grid-cols-12 gap-4 mb-4 font-semibold text-gray-700 border-b pb-3">
          <div className="col-span-1 text-center">#</div>
          <div className="col-span-5">과목명</div>
          <div className="col-span-2 text-center">학점</div>
          <div className="col-span-3 text-center">성적</div>
          <div className="col-span-1"></div>
        </div>
        
        {/* 과목 입력 */}
        <div className="space-y-3 mb-6 max-h-96 overflow-y-auto">
          {courses.map((course, index) => (
            <div key={course.id} className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-1 text-center font-semibold text-gray-600">
                {index + 1}
              </div>
              <div className="col-span-5">
                <input
                  type="text"
                  value={course.name}
                  onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
                  placeholder="과목명 (예: 자료구조)"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg
                           focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div className="col-span-2">
                <input
                  type="number"
                  value={course.credit}
                  onChange={(e) => updateCourse(course.id, 'credit', parseInt(e.target.value) || 0)}
                  min="1"
                  max="6"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-center
                           focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div className="col-span-3">
                <select
                  value={course.grade}
                  onChange={(e) => updateCourse(course.id, 'grade', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg
                           focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  {grades.map(g => (
                    <option key={g} value={g}>
                      {g} ({gradeToPoint(g).toFixed(1)})
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-span-1 text-center">
                <button
                  onClick={() => removeCourse(course.id)}
                  className="text-red-500 hover:text-red-700 text-xl disabled:opacity-30 disabled:cursor-not-allowed"
                  disabled={courses.length === 1}
                  title="과목 삭제"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* 버튼 */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={addCourse}
            className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg
                     font-semibold hover:bg-gray-300 transition-colors"
          >
            + 과목 추가
          </button>
          <button
            onClick={handleCalculate}
            className="flex-1 bg-indigo-600 text-white py-3 rounded-lg
                     font-semibold hover:bg-indigo-700 transition-colors"
          >
            학점 계산하기
          </button>
        </div>
        
        {/* 결과 표시 */}
        {result && (
          <div className="mt-8 border-t pt-6">
            <div className="text-center mb-6">
              <div className={`text-7xl font-bold ${getGradeColor(result.letterGrade)} mb-3`}>
                {result.gpa}
              </div>
              <div className={`text-3xl font-semibold ${getGradeColor(result.letterGrade)}`}>
                {result.letterGrade} 등급
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-lg text-center border border-blue-200">
                <div className="text-sm text-gray-600 mb-2 font-medium">신청 학점</div>
                <div className="text-3xl font-bold text-blue-600">{result.totalCredits}</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-lg text-center border border-green-200">
                <div className="text-sm text-gray-600 mb-2 font-medium">취득 학점</div>
                <div className="text-3xl font-bold text-green-600">{result.earnedCredits}</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-lg text-center border border-purple-200">
                <div className="text-sm text-gray-600 mb-2 font-medium">총 평점</div>
                <div className="text-3xl font-bold text-purple-600">{result.totalGradePoints}</div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
              <p className="text-sm text-yellow-800">
                💡 <strong>평점 기준:</strong> A+(4.5), A(4.0), B+(3.5), B(3.0), C+(2.5), C(2.0), D+(1.5), D(1.0), F(0.0)
              </p>
              <p className="text-sm text-yellow-800 mt-1">
                📌 P(Pass) 학점은 평점 계산에 포함되지 않으며, F 학점은 취득 학점에 포함되지 않습니다.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


