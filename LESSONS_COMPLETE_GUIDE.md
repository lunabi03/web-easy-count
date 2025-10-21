# 📚 Easy Count 프로젝트 - 레슨 1~10 완전 정리

> **웹 개발 초보자부터 실전 배포까지** - 단계별 학습 가이드
> 
> 이 문서는 언제든 다시 보면서 공부할 수 있도록 레슨 1~10의 핵심 명령어와 코드를 정리한 학습 자료입니다.

---

## 📖 목차

1. [학습 로드맵 개요](#학습-로드맵-개요)
2. [레슨 1: 순수 HTML](#레슨-1-순수-html)
3. [레슨 2: JavaScript 기초](#레슨-2-javascript-기초)
4. [레슨 3: CSS 디자인](#레슨-3-css-디자인)
5. [레슨 4: 복잡한 계산 로직](#레슨-4-복잡한-계산-로직)
6. [레슨 5: Vite & 모듈 시스템](#레슨-5-vite--모듈-시스템)
7. [레슨 6: Next.js & TypeScript](#레슨-6-nextjs--typescript)
8. [레슨 7: SEO 최적화](#레슨-7-seo-최적화)
9. [레슨 8: 배포 & 분석](#레슨-8-배포--분석)
10. [레슨 9: 데이터베이스 & 인증](#레슨-9-데이터베이스--인증)
11. [레슨 10: 프로젝트 완성](#레슨-10-프로젝트-완성)
12. [핵심 명령어 치트시트](#핵심-명령어-치트시트)

---

## 학습 로드맵 개요

```
레슨 1-2   │ HTML + JavaScript 기초  │ 순수 웹 기술
레슨 3-4   │ CSS + 계산 로직        │ 디자인 + 실전 로직
레슨 5     │ Vite + 모듈화          │ 개발 환경 구축
레슨 6     │ Next.js + TypeScript   │ 프레임워크 전환
레슨 7     │ SEO 최적화            │ 검색엔진 최적화
레슨 8     │ Vercel 배포          │ 실서버 배포
레슨 9     │ Supabase 연동        │ 데이터베이스
레슨 10    │ 프로젝트 완성        │ 실전 프로젝트
```

### 🎯 전체 학습 목표

- **기초**: HTML, CSS, JavaScript 마스터
- **중급**: React/Next.js, TypeScript 활용
- **고급**: 데이터베이스, 배포, SEO
- **실전**: 포트폴리오용 프로젝트 완성

---

## 레슨 1: 순수 HTML

### 📌 학습 목표
- HTML 기본 구조 이해
- Form 요소 사용법
- 날짜 입력 필드 활용

### 🔧 핵심 코드

#### HTML 기본 구조
```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <!-- 문자 인코딩 (한글 지원) -->
  <meta charset="UTF-8">
  
  <!-- 모바일 반응형 -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- 페이지 제목 -->
  <title>100일 계산기</title>
</head>
<body>
  <!-- 본문 내용 -->
</body>
</html>
```

#### 입력 폼 구조
```html
<form>
  <!-- 라벨 -->
  <label for="startDate">시작 날짜:</label>
  
  <!-- 날짜 입력 필드 -->
  <input type="date" id="startDate" name="startDate">
  
  <!-- 버튼 -->
  <button type="button">계산하기</button>
</form>

<!-- 결과 표시 영역 -->
<div id="result">
  <p>계산 결과가 여기 표시됩니다</p>
</div>
```

### 📝 주요 태그 정리

| 태그 | 용도 | 예시 |
|------|------|------|
| `<input type="date">` | 날짜 선택 | `<input type="date" id="birthday">` |
| `<label>` | 입력 필드 설명 | `<label for="name">이름</label>` |
| `<button>` | 버튼 | `<button type="button">클릭</button>` |
| `<div>` | 구역 나누기 | `<div id="result"></div>` |

### ✅ 핵심 개념
- **시맨틱 HTML**: `<header>`, `<main>`, `<footer>` 등 의미있는 태그 사용
- **Form 요소**: 사용자 입력을 그룹화
- **ID 속성**: JavaScript에서 요소 접근 시 사용

---

## 레슨 2: JavaScript 기초

### 📌 학습 목표
- JavaScript 기본 문법
- Date 객체로 날짜 계산
- DOM 조작 (화면 업데이트)
- 이벤트 리스너로 버튼 클릭 처리

### 🔧 핵심 코드

#### JavaScript 파일 연결
```html
<!-- HTML 파일의 </body> 직전에 배치 -->
<script src="script.js"></script>
```

#### Date 객체 사용
```javascript
// 현재 날짜
const today = new Date();

// 특정 날짜 생성
const birthday = new Date('2000-01-15');

// 날짜 정보 추출
const year = birthday.getFullYear();        // 2000
const month = birthday.getMonth() + 1;      // 1 (주의: 0부터 시작!)
const day = birthday.getDate();             // 15
```

#### 날짜 계산
```javascript
function calculateAnniversaries(startDate) {
  const start = new Date(startDate);
  
  // 100일 후 계산
  const day100 = new Date(start);
  day100.setDate(start.getDate() + 100);
  
  // 500일 후 계산
  const day500 = new Date(start);
  day500.setDate(start.getDate() + 500);
  
  return { day100, day500 };
}
```

#### D-day 계산
```javascript
function getDday(targetDate) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);  // 시간 제거
  
  const target = new Date(targetDate);
  target.setHours(0, 0, 0, 0);
  
  // 밀리초 차이 계산
  const diff = target - today;
  
  // 일수로 변환
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  
  if (days > 0) return `D-${days}`;
  else if (days === 0) return "D-day!";
  else return `${Math.abs(days)}일 전`;
}
```

#### DOM 조작
```javascript
// 요소 선택
const button = document.getElementById('calculateBtn');
const input = document.getElementById('startDate');
const result = document.getElementById('result');

// 입력값 가져오기
const value = input.value;  // "2024-10-01"

// 결과 표시
result.innerHTML = `<p>100일: ${formatDate(day100)}</p>`;
```

#### 이벤트 리스너
```javascript
document.getElementById('calculateBtn').addEventListener('click', () => {
  const startDate = document.getElementById('startDate').value;
  
  // 입력값 검증
  if (!startDate) {
    alert('날짜를 입력해주세요!');
    return;
  }
  
  // 계산
  const result = calculateAnniversaries(startDate);
  
  // 결과 표시
  displayResult(result);
});
```

#### 템플릿 리터럴
```javascript
function formatDate(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  
  // 백틱(`)과 ${} 사용
  return `${year}년 ${month}월 ${day}일`;
}
```

### 📝 주요 함수 정리

| 함수/메서드 | 용도 | 예시 |
|-------------|------|------|
| `new Date()` | 날짜 객체 생성 | `new Date('2024-01-01')` |
| `getFullYear()` | 연도 가져오기 | `2024` |
| `getMonth()` | 월 가져오기 (0~11) | `0` = 1월 |
| `getDate()` | 일 가져오기 | `1~31` |
| `setDate()` | 일 설정하기 | `date.setDate(15)` |
| `Math.ceil()` | 올림 | `Math.ceil(4.1)` = `5` |
| `Math.abs()` | 절댓값 | `Math.abs(-5)` = `5` |

### ✅ 핵심 개념
- **변수 선언**: `const` (상수), `let` (변수)
- **날짜 계산**: 밀리초 → 일수 변환 (`/ (1000 * 60 * 60 * 24)`)
- **이벤트**: 사용자 행동에 반응하는 코드

---

## 레슨 3: CSS 디자인

### 📌 학습 목표
- CSS로 UI 꾸미기
- Flexbox 레이아웃
- 반응형 디자인
- 두 번째 계산기 추가

### 🔧 핵심 코드

#### CSS 파일 연결
```html
<head>
  <link rel="stylesheet" href="styles.css">
</head>
```

#### CSS 변수 정의
```css
:root {
  --primary-color: #4F46E5;      /* 메인 색상 */
  --secondary-color: #F3F4F6;    /* 배경 색상 */
  --text-color: #1F2937;         /* 텍스트 색상 */
  --border-radius: 16px;         /* 둥근 모서리 */
}

/* 변수 사용 */
.card {
  background: var(--secondary-color);
  border-radius: var(--border-radius);
  color: var(--text-color);
}
```

#### 초기화 및 기본 스타일
```css
/* 모든 요소 초기화 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;  /* 패딩 포함 크기 계산 */
}

/* body 스타일 */
body {
  font-family: 'Pretendard', -apple-system, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;  /* 최소 높이 = 화면 전체 */
}
```

#### Flexbox 레이아웃
```css
.container {
  display: flex;           /* Flexbox 활성화 */
  gap: 30px;              /* 자식 요소 간 간격 */
  max-width: 1200px;      /* 최대 너비 */
  margin: 0 auto;         /* 가로 중앙 정렬 */
}

.card {
  flex: 1;                /* 공간 균등 분배 */
}
```

#### 카드 디자인
```css
.card {
  background: white;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;  /* 애니메이션 */
}

.card:hover {
  transform: translateY(-5px);  /* 위로 5px 이동 */
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}
```

#### 버튼 스타일
```css
button {
  width: 100%;
  padding: 14px 24px;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

button:hover {
  background: #4338CA;
  transform: translateY(-2px);
}

button:active {
  transform: translateY(0);
}
```

#### 반응형 디자인
```css
/* 기본: 데스크톱 (가로 배치) */
.container {
  display: flex;
  flex-direction: row;
}

/* 모바일 (세로 배치) */
@media (max-width: 768px) {
  .container {
    flex-direction: column;  /* 세로 배치로 변경 */
  }
  
  h1 {
    font-size: 24px;  /* 글자 크기 축소 */
  }
}
```

#### 애니메이션
```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.result-box {
  animation: fadeIn 0.5s ease;  /* 0.5초 동안 나타남 */
}
```

### 📝 Flexbox 주요 속성

| 속성 | 값 | 의미 |
|------|-----|------|
| `display` | `flex` | Flexbox 활성화 |
| `flex-direction` | `row` / `column` | 가로 / 세로 배치 |
| `gap` | `20px` | 자식 요소 간격 |
| `justify-content` | `center` | 가로 중앙 정렬 |
| `align-items` | `center` | 세로 중앙 정렬 |
| `flex` | `1` | 공간 균등 분배 |

### ✅ 핵심 개념
- **CSS 변수**: 색상/크기를 한 곳에서 관리
- **Flexbox**: 레이아웃을 쉽게 만드는 도구
- **Hover 효과**: 사용자 경험 향상
- **미디어 쿼리**: 화면 크기에 따라 스타일 변경

---

## 레슨 4: 복잡한 계산 로직

### 📌 학습 목표
- 4대보험 및 세금 계산
- HTML 테이블로 데이터 시각화
- 입력값 유효성 검증
- 숫자 포맷팅

### 🔧 핵심 코드

#### 4대보험 계산
```javascript
function calculateInsurance(monthlySalary) {
  // 2025년 기준 요율
  const rates = {
    nationalPension: 0.045,      // 국민연금 4.5%
    healthInsurance: 0.03545,    // 건강보험 3.545%
    longTermCare: 0.1295,        // 장기요양 12.95%
    employmentInsurance: 0.009   // 고용보험 0.9%
  };
  
  // 각 보험료 계산 (원 단위 내림)
  const nationalPension = Math.floor(monthlySalary * rates.nationalPension);
  const healthInsurance = Math.floor(monthlySalary * rates.healthInsurance);
  const longTermCare = Math.floor(healthInsurance * rates.longTermCare);
  const employmentInsurance = Math.floor(monthlySalary * rates.employmentInsurance);
  
  return {
    nationalPension,
    healthInsurance,
    longTermCare,
    employmentInsurance,
    total: nationalPension + healthInsurance + longTermCare + employmentInsurance
  };
}
```

#### 소득세 계산 (누진세율)
```javascript
function calculateIncomeTax(monthlySalary, dependents) {
  let tax = 0;
  const yearlyIncome = monthlySalary * 12;
  
  // 누진세율 적용
  if (yearlyIncome <= 14000000) {
    tax = yearlyIncome * 0.06;  // 6%
  } else if (yearlyIncome <= 50000000) {
    tax = 840000 + (yearlyIncome - 14000000) * 0.15;  // 15%
  } else if (yearlyIncome <= 88000000) {
    tax = 6240000 + (yearlyIncome - 50000000) * 0.24;  // 24%
  } else if (yearlyIncome <= 150000000) {
    tax = 15360000 + (yearlyIncome - 88000000) * 0.35;  // 35%
  } else {
    tax = 37060000 + (yearlyIncome - 150000000) * 0.38;  // 38%
  }
  
  // 부양가족 공제
  const deduction = (dependents - 1) * 150000 * 12;
  tax = Math.max(0, tax - deduction);  // 음수 방지
  
  const monthlyTax = Math.floor(tax / 12);
  const localTax = Math.floor(monthlyTax * 0.1);  // 지방소득세 10%
  
  return {
    incomeTax: monthlyTax,
    localTax: localTax,
    total: monthlyTax + localTax
  };
}
```

#### 전체 계산 함수
```javascript
function calculateNetSalary(annualSalary, dependents) {
  const monthlySalary = Math.floor(annualSalary / 12);
  
  // 4대보험 계산
  const insurance = calculateInsurance(monthlySalary);
  
  // 소득세 계산
  const tax = calculateIncomeTax(monthlySalary, dependents);
  
  // 총 공제액
  const totalDeduction = insurance.total + tax.total;
  
  // 실수령액
  const netSalary = monthlySalary - totalDeduction;
  
  return {
    monthlySalary,
    insurance,
    tax,
    totalDeduction,
    netSalary,
    annualNet: netSalary * 12
  };
}
```

#### 숫자 포맷팅
```javascript
function formatNumber(num) {
  return num.toLocaleString('ko-KR');  // "1,234,567"
}
```

#### HTML 테이블 동적 생성
```javascript
function displayResult(result) {
  const resultDiv = document.getElementById('result');
  
  resultDiv.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>항목</th>
          <th>금액</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>국민연금 (4.5%)</td>
          <td>${formatNumber(result.insurance.nationalPension)}원</td>
        </tr>
        <tr>
          <td>건강보험 (3.545%)</td>
          <td>${formatNumber(result.insurance.healthInsurance)}원</td>
        </tr>
        <tr class="total-row">
          <td><strong>총 공제액</strong></td>
          <td><strong>${formatNumber(result.totalDeduction)}원</strong></td>
        </tr>
      </tbody>
    </table>
    
    <div class="net-salary">
      <span>💰 월 실수령액</span>
      <span class="amount">${formatNumber(result.netSalary)}원</span>
    </div>
  `;
}
```

#### 입력값 검증
```javascript
document.getElementById('calculateBtn').addEventListener('click', () => {
  const annualSalary = parseInt(document.getElementById('annualSalary').value);
  const dependents = parseInt(document.getElementById('dependents').value);
  
  // 빈 값 체크
  if (!annualSalary || annualSalary <= 0) {
    alert('연봉을 올바르게 입력해주세요!');
    return;
  }
  
  // 범위 체크
  if (!dependents || dependents < 1) {
    alert('부양가족 수는 최소 1명(본인)입니다!');
    return;
  }
  
  // 계산 및 표시
  const result = calculateNetSalary(annualSalary, dependents);
  displayResult(result);
});
```

### 📝 핵심 함수 정리

| 함수 | 용도 | 예시 |
|------|------|------|
| `parseInt()` | 문자 → 정수 | `parseInt("50000")` = `50000` |
| `Math.floor()` | 내림 | `Math.floor(4.7)` = `4` |
| `Math.ceil()` | 올림 | `Math.ceil(4.1)` = `5` |
| `Math.max()` | 최댓값 | `Math.max(0, -5)` = `0` |
| `toLocaleString()` | 천단위 콤마 | `1234567` → `"1,234,567"` |

### ✅ 핵심 개념
- **객체 반환**: 여러 값을 한 번에 반환
- **누진세율**: 구간별로 다른 세율 적용
- **Math.floor()**: 돈 계산은 항상 내림
- **Math.max()**: 음수 방지

---

## 레슨 5: Vite & 모듈 시스템

### 📌 학습 목표
- Node.js와 pnpm 이해
- Vite 빌드 도구 활용
- ES6 모듈 시스템 (import/export)
- 코드를 모듈로 구조화

### 🔧 핵심 코드

#### 프로젝트 초기화
```bash
# 프로젝트 폴더로 이동
cd lesson-05

# package.json 생성
pnpm init

# Vite 설치
pnpm install vite --save-dev

# 개발 서버 실행
pnpm dev
```

#### package.json
```json
{
  "name": "easy-count-lesson-05",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",          // 개발 서버 실행
    "build": "vite build",  // 프로덕션 빌드
    "preview": "vite preview"  // 빌드 결과 미리보기
  },
  "devDependencies": {
    "vite": "^5.0.0"
  }
}
```

#### 프로젝트 구조
```
lesson-05/
  ├── package.json
  ├── index.html         (진입점)
  └── src/
      ├── main.js        (메인 파일)
      ├── styles/
      │   └── main.css
      ├── modules/       (계산 로직)
      │   ├── discount.js
      │   └── vat.js
      ├── utils/         (공통 유틸리티)
      │   └── format.js
      └── ui/            (UI 업데이트)
          └── display.js
```

#### export (내보내기)
```javascript
// discount.js

// Named export (여러 개 가능)
export function calculateDiscount(originalPrice, discountRate) {
  const discountAmount = Math.floor(originalPrice * (discountRate / 100));
  const finalPrice = originalPrice - discountAmount;
  
  return {
    originalPrice,
    discountRate,
    discountAmount,
    finalPrice,
    savedAmount: discountAmount
  };
}

// 역산 함수
export function calculateOriginalPrice(finalPrice, discountRate) {
  return Math.ceil(finalPrice / (1 - discountRate / 100));
}
```

#### import (가져오기)
```javascript
// main.js

// Named import
import { calculateDiscount } from './modules/discount.js';
import { calculateVAT } from './modules/vat.js';
import { displayDiscountResult, displayVATResult } from './ui/display.js';

// CSS도 import 가능
import './styles/main.css';

console.log('앱 시작!');
```

#### 부가세 계산 모듈
```javascript
// vat.js

const VAT_RATE = 0.1;  // 10%

export function calculateVAT(amount, includesVAT = false) {
  if (includesVAT) {
    // 부가세 포함 금액 → 공급가액 분리
    const supplyAmount = Math.floor(amount / 1.1);
    const vatAmount = amount - supplyAmount;
    
    return {
      type: '부가세 포함',
      totalAmount: amount,
      supplyAmount,
      vatAmount,
      vatRate: VAT_RATE
    };
  } else {
    // 공급가액 → 부가세 계산
    const supplyAmount = amount;
    const vatAmount = Math.floor(amount * VAT_RATE);
    const totalAmount = supplyAmount + vatAmount;
    
    return {
      type: '공급가액',
      supplyAmount,
      vatAmount,
      totalAmount,
      vatRate: VAT_RATE
    };
  }
}
```

#### UI 업데이트 모듈
```javascript
// display.js

import { formatCurrency, formatPercentage } from '../utils/format.js';

export function displayDiscountResult(result) {
  const resultDiv = document.getElementById('discountResult');
  
  resultDiv.innerHTML = `
    <div class="result-box">
      <h4>📊 계산 결과</h4>
      <div class="result-item">
        <span>원가</span>
        <span>${formatCurrency(result.originalPrice)}</span>
      </div>
      <div class="result-item discount">
        <span>할인 금액 (${formatPercentage(result.discountRate)})</span>
        <span>-${formatCurrency(result.discountAmount)}</span>
      </div>
      <div class="result-item final">
        <span>최종 가격</span>
        <span>${formatCurrency(result.finalPrice)}</span>
      </div>
      <div class="savings">
        🎉 ${formatCurrency(result.savedAmount)} 절약!
      </div>
    </div>
  `;
}

export function showError(elementId, message) {
  const element = document.getElementById(elementId);
  element.innerHTML = `
    <div class="error-message">
      ⚠️ ${message}
    </div>
  `;
}
```

#### 포맷팅 유틸리티
```javascript
// format.js

export function formatNumber(num) {
  if (typeof num !== 'number' || isNaN(num)) {
    return '0';
  }
  return num.toLocaleString('ko-KR');
}

export function formatCurrency(num) {
  return `${formatNumber(num)}원`;
}

export function formatPercentage(num) {
  return `${num}%`;
}
```

#### 메인 진입점
```javascript
// main.js

import { calculateDiscount } from './modules/discount.js';
import { calculateVAT } from './modules/vat.js';
import { displayDiscountResult, displayVATResult, showError } from './ui/display.js';
import './styles/main.css';

// 할인율 계산기 이벤트
document.getElementById('discountBtn').addEventListener('click', () => {
  try {
    const originalPrice = parseInt(document.getElementById('originalPrice').value);
    const discountRate = parseInt(document.getElementById('discountRate').value);
    
    const result = calculateDiscount(originalPrice, discountRate);
    displayDiscountResult(result);
  } catch (error) {
    showError('discountResult', error.message);
  }
});

// HMR (Hot Module Replacement)
if (import.meta.hot) {
  import.meta.hot.accept();  // 변경 시 자동 새로고침
}
```

### 📝 모듈 시스템 정리

| 키워드 | 의미 | 예시 |
|--------|------|------|
| `export` | 함수/변수 내보내기 | `export function calculate() {}` |
| `import` | 함수/변수 가져오기 | `import { calculate } from './module.js'` |
| `export default` | 기본 내보내기 | `export default Calculator` |
| `import ... from` | 기본 가져오기 | `import Calculator from './Calculator.js'` |

### ✅ 핵심 개념
- **모듈화**: 코드를 기능별로 분리
- **재사용성**: 모듈을 여러 곳에서 사용
- **Vite**: 빠른 개발 서버 (HMR 지원)
- **import/export**: ES6 모듈 시스템

---

## 레슨 6: Next.js & TypeScript

### 📌 학습 목표
- Next.js 프레임워크 이해
- 파일 기반 라우팅
- TypeScript 기본 문법
- 컴포넌트 기반 아키텍처

### 🔧 핵심 코드

#### Next.js 프로젝트 생성
```bash
pnpm create next-app lesson-06 --typescript --tailwind --app --eslint
cd lesson-06
pnpm install
pnpm dev  # http://localhost:3000
```

#### 프로젝트 구조
```
lesson-06/
  ├── src/
  │   ├── app/                  (페이지)
  │   │   ├── layout.tsx        (루트 레이아웃)
  │   │   ├── page.tsx          (홈페이지)
  │   │   ├── date/
  │   │   │   ├── dday/page.tsx
  │   │   │   └── birthday/page.tsx
  │   │   ├── salary/page.tsx
  │   │   └── shopping/page.tsx
  │   ├── components/           (컴포넌트)
  │   │   ├── Header.tsx
  │   │   ├── Footer.tsx
  │   │   └── calculators/
  │   ├── lib/                  (로직)
  │   │   ├── calculations/
  │   │   └── utils/
  │   └── types/                (타입 정의)
  │       └── index.ts
  └── public/                   (정적 파일)
```

#### TypeScript 타입 정의
```typescript
// types/index.ts

export interface DDayResult {
  day100: Date;
  day200: Date;
  day500: Date;
  day1000: Date;
  daysTo100: number;
  daysTo200: number;
  daysTo500: number;
  daysTo1000: number;
}

export interface SalaryResult {
  monthlySalary: number;
  insurance: InsuranceResult;
  tax: TaxResult;
  totalDeduction: number;
  netSalary: number;
  annualNet: number;
}

export interface InsuranceResult {
  nationalPension: number;
  healthInsurance: number;
  longTermCare: number;
  employmentInsurance: number;
  total: number;
}
```

#### 루트 레이아웃
```typescript
// app/layout.tsx

import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Easy Count - 생활 계산기',
  description: '일상생활에 필요한 다양한 계산을 한 곳에서!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
```

#### 파일 기반 라우팅
```
app/page.tsx                → /
app/date/dday/page.tsx      → /date/dday
app/salary/page.tsx         → /salary
app/shopping/page.tsx       → /shopping
```

#### 클라이언트 컴포넌트
```typescript
// components/calculators/DDayCalculator.tsx

'use client'  // 클라이언트 컴포넌트 선언

import { useState } from 'react'
import { calculateDDay } from '@/lib/calculations/date'
import type { DDayResult } from '@/types'

export default function DDayCalculator() {
  const [startDate, setStartDate] = useState('')
  const [result, setResult] = useState<DDayResult | null>(null)
  
  const handleCalculate = () => {
    if (!startDate) {
      alert('날짜를 입력해주세요!')
      return
    }
    
    const calculated = calculateDDay(new Date(startDate))
    setResult(calculated)
  }
  
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg"
          />
        </div>
        
        <button
          onClick={handleCalculate}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg"
        >
          기념일 계산하기
        </button>
        
        {result && (
          <div className="mt-8">
            {/* 결과 표시 */}
          </div>
        )}
      </div>
    </div>
  )
}
```

#### 계산 로직 (TypeScript)
```typescript
// lib/calculations/date.ts

import type { DDayResult } from '@/types'

export function calculateDDay(startDate: Date): DDayResult {
  const today = new Date()
  
  const day100 = new Date(startDate)
  day100.setDate(startDate.getDate() + 100)
  
  const day500 = new Date(startDate)
  day500.setDate(startDate.getDate() + 500)
  
  const getDaysTo = (targetDate: Date) => {
    const diff = targetDate.getTime() - today.getTime()
    return Math.ceil(diff / (1000 * 60 * 60 * 24))
  }
  
  return {
    day100,
    day500,
    daysTo100: getDaysTo(day100),
    daysTo500: getDaysTo(day500),
  }
}
```

#### Tailwind CSS 사용
```tsx
<div className="container mx-auto px-4 py-16">
  <h1 className="text-5xl font-bold mb-4">
    Easy Count
  </h1>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {/* 카드 목록 */}
  </div>
</div>
```

### 📝 TypeScript 기본 문법

| 문법 | 의미 | 예시 |
|------|------|------|
| `interface` | 타입 정의 | `interface User { name: string }` |
| `type` | 타입 별칭 | `type ID = string | number` |
| `:` | 타입 지정 | `const age: number = 25` |
| `<T>` | 제네릭 | `useState<string>('')` |
| `?` | 선택적 속성 | `name?: string` |

### ✅ 핵심 개념
- **파일 기반 라우팅**: 폴더 구조가 URL이 됨
- **서버/클라이언트 컴포넌트**: `'use client'` 선언
- **TypeScript**: 타입으로 오류 방지
- **Tailwind CSS**: 유틸리티 클래스로 빠른 스타일링

---

## 레슨 7: SEO 최적화

### 📌 학습 목표
- SEO (검색엔진 최적화)
- Metadata API 활용
- sitemap.xml 생성
- robots.txt 설정

### 🔧 핵심 코드

#### 페이지별 Metadata
```typescript
// app/salary/page.tsx

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '연봉 실수령액 계산기 | Easy Count',
  description: '4대보험, 세금을 제외한 실수령액을 계산하세요. 2025년 최신 세율 적용',
  keywords: ['연봉계산기', '실수령액', '4대보험', '세금계산'],
  openGraph: {
    title: '연봉 실수령액 계산기',
    description: '실제 받는 월급을 정확히 계산하세요',
    images: ['/og-image.jpg'],
  },
}

export default function SalaryPage() {
  return <SalaryCalculator />
}
```

#### sitemap.xml 생성
```typescript
// app/sitemap.ts

import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://easycount.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://easycount.com/salary',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://easycount.com/shopping',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
```

#### robots.txt 생성
```typescript
// app/robots.ts

import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://easycount.com/sitemap.xml',
  }
}
```

### ✅ 핵심 개념
- **SEO**: 검색엔진에서 잘 찾아지도록 최적화
- **Metadata**: 페이지 정보 (제목, 설명, 이미지)
- **sitemap.xml**: 검색엔진에게 페이지 목록 제공
- **robots.txt**: 크롤링 규칙 설정

---

## 레슨 8: 배포 & 분석

### 📌 학습 목표
- Vercel 배포
- Google Analytics 연동
- 환경 변수 설정
- 성능 최적화

### 🔧 핵심 코드

#### Vercel 배포
```bash
# Vercel CLI 설치
pnpm install -g vercel

# 배포
vercel

# 프로덕션 배포
vercel --prod
```

#### 환경 변수 설정
```
# .env.local

NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_API_URL=https://api.example.com
```

#### Google Analytics 연동
```typescript
// components/Analytics.tsx

'use client'

import Script from 'next/script'

export default function Analytics() {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID
  
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  )
}
```

### ✅ 핵심 개념
- **Vercel**: Next.js 최적화 호스팅
- **환경 변수**: 민감한 정보 분리
- **Analytics**: 사용자 행동 분석

---

## 레슨 9: 데이터베이스 & 인증

### 📌 학습 목표
- Supabase 데이터베이스 연동
- 사용자 인증 (로그인)
- 계산 기록 저장
- CRUD 작업

### 🔧 핵심 코드

#### Supabase 클라이언트 설정
```typescript
// lib/supabase/client.ts

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export const supabase = createClientComponentClient()
```

#### 계산 기록 저장
```typescript
async function saveCalculation(userId: string, type: string, data: any) {
  const { data: saved, error } = await supabase
    .from('calculations')
    .insert([
      {
        user_id: userId,
        type: type,
        data: data,
        created_at: new Date().toISOString(),
      }
    ])
  
  if (error) throw error
  return saved
}
```

#### 계산 기록 조회
```typescript
async function getCalculations(userId: string) {
  const { data, error } = await supabase
    .from('calculations')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(10)
  
  if (error) throw error
  return data
}
```

#### 로그인 구현
```typescript
async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  
  if (error) throw error
  return data
}
```

### ✅ 핵심 개념
- **Supabase**: PostgreSQL 기반 백엔드
- **인증**: 사용자 로그인/회원가입
- **CRUD**: Create, Read, Update, Delete

---

## 레슨 10: 프로젝트 완성

### 📌 학습 목표
- 프로젝트 문서화
- Git 워크플로우
- 라이선스 및 기여 가이드
- 포트폴리오 준비

### 🔧 핵심 파일

#### README.md
```markdown
# Easy Count - 생활 계산기

## 기능
- 💕 커플 기념일 계산기
- 🎂 살아온 날 계산기
- 💰 연봉 실수령액 계산기
- 🛍️ 할인/부가세 계산기

## 기술 스택
- Next.js 14
- TypeScript
- Tailwind CSS
- Supabase

## 실행 방법
\`\`\`bash
pnpm install
pnpm dev
\`\`\`

## 배포
- URL: https://easycount.vercel.app
```

#### Git 워크플로우
```bash
# 새 기능 브랜치 생성
git checkout -b feature/new-calculator

# 작업 후 커밋
git add .
git commit -m "feat: Add BMI calculator"

# 푸시
git push origin feature/new-calculator

# Pull Request 생성
```

### ✅ 핵심 개념
- **문서화**: README, CHANGELOG 작성
- **Git**: 버전 관리 및 협업
- **라이선스**: 오픈소스 라이선스 선택

---

## 핵심 명령어 치트시트

### HTML
```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>제목</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <input type="date" id="date">
  <button type="button">클릭</button>
  <div id="result"></div>
  
  <script src="script.js"></script>
</body>
</html>
```

### JavaScript
```javascript
// 변수
const name = 'value'
let number = 10

// 함수
function calculate() {}
const calc = () => {}

// DOM
document.getElementById('id')
element.innerHTML = 'HTML'
element.value

// 이벤트
button.addEventListener('click', () => {})

// Date
new Date()
date.getFullYear()
date.getMonth() + 1
date.getDate()

// 숫자
parseInt(str)
Math.floor(num)
Math.ceil(num)
num.toLocaleString()

// 배열
array.map(item => {})
array.filter(item => {})
```

### CSS
```css
/* 선택자 */
.class {}
#id {}
tag {}
tag:hover {}

/* Flexbox */
display: flex;
gap: 20px;
justify-content: center;
align-items: center;

/* 스타일 */
color: #000;
background: #fff;
font-size: 16px;
padding: 20px;
margin: 10px;
border-radius: 8px;

/* 반응형 */
@media (max-width: 768px) {}
```

### TypeScript
```typescript
// 타입
interface User {
  name: string
  age: number
}

// 함수
function calc(a: number): number {}

// 상태
const [value, setValue] = useState<string>('')
```

### Bash (터미널)
```bash
# pnpm
pnpm init
pnpm install
pnpm dev
pnpm build

# Git
git add .
git commit -m "message"
git push origin main

# Vercel
vercel
vercel --prod
```

---

## 🎓 학습 완료 체크리스트

### 레슨 1-2 (기초)
- [ ] HTML 기본 구조 작성 가능
- [ ] JavaScript로 Date 계산 가능
- [ ] DOM 조작으로 화면 업데이트 가능

### 레슨 3-4 (중급)
- [ ] CSS로 디자인 가능
- [ ] Flexbox 레이아웃 구현 가능
- [ ] 복잡한 계산 로직 작성 가능

### 레슨 5-6 (고급)
- [ ] 모듈 시스템 이해
- [ ] Next.js 프로젝트 생성 가능
- [ ] TypeScript 타입 정의 가능

### 레슨 7-8 (실전)
- [ ] SEO 최적화 적용 가능
- [ ] Vercel 배포 가능
- [ ] Analytics 연동 가능

### 레슨 9-10 (완성)
- [ ] 데이터베이스 연동 가능
- [ ] 사용자 인증 구현 가능
- [ ] Git 워크플로우 이해

---

## 📚 추가 학습 자료

### 공식 문서
- [MDN Web Docs](https://developer.mozilla.org/ko/)
- [Next.js Docs](https://nextjs.org/docs)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)

### 추천 도구
- VS Code (코드 에디터)
- Chrome DevTools (디버깅)
- Figma (디자인)
- Git (버전 관리)

---

## 💡 마지막 팁

### 공부 방법
1. **따라 치기**: 코드를 직접 타이핑
2. **변형하기**: 예제를 조금씩 바꿔보기
3. **만들기**: 새로운 계산기 추가해보기
4. **디버깅**: 에러를 두려워하지 말기

### 포트폴리오 활용
- GitHub에 코드 올리기
- README 잘 작성하기
- 실제 배포 URL 첨부하기
- 기술 스택 명시하기

---

**🎉 이 가이드와 함께 웹 개발자로 성장하세요!**

언제든 돌아와서 필요한 부분을 찾아보세요.
꾸준히 실습하면 누구나 웹 개발을 마스터할 수 있습니다! 💪

