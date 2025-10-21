# 🌐 웹사이트 개발 완전 공략집
> 처음 배우는 사람을 위한 HTML, CSS, JavaScript 기초부터 실전까지

---

## 📚 목차
1. [웹사이트란 무엇인가?](#1-웹사이트란-무엇인가)
2. [웹 기술 3대 요소](#2-웹-기술-3대-요소)
3. [HTML 기초 명령어](#3-html-기초-명령어)
4. [CSS 기초 명령어](#4-css-기초-명령어)
5. [JavaScript 기초 명령어](#5-javascript-기초-명령어)
6. [레슨 4 핵심 개념](#6-레슨-4-핵심-개념)
7. [자주 쓰는 명령어 치트시트](#7-자주-쓰는-명령어-치트시트)

---

## 1. 웹사이트란 무엇인가?

### 🏠 웹사이트 = 디지털 집

웹사이트를 집으로 비유하면:
- **HTML** = 뼈대 (벽, 기둥, 문, 창문)
- **CSS** = 인테리어 (색상, 가구 배치, 장식)
- **JavaScript** = 가전제품 (전등 스위치, 에어컨, 냉장고)

```
┌─────────────────────────────────┐
│         웹사이트 구조            │
├─────────────────────────────────┤
│  HTML    │  구조와 내용          │
│  CSS     │  디자인과 스타일       │
│  JS      │  동작과 상호작용       │
└─────────────────────────────────┘
```

### 📁 파일 구조
```
프로젝트 폴더/
  ├── index.html      (HTML 파일 - 구조)
  ├── styles.css      (CSS 파일 - 디자인)
  └── script.js       (JavaScript 파일 - 기능)
```

---

## 2. 웹 기술 3대 요소

### 2.1 HTML (HyperText Markup Language)
**역할**: 웹 페이지의 구조와 내용

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>페이지 제목</title>
</head>
<body>
  <h1>제목</h1>
  <p>내용</p>
</body>
</html>
```

**비유**: 건축 설계도
- 제목이 어디에 있는지
- 버튼이 어디에 있는지
- 입력창이 어디에 있는지

### 2.2 CSS (Cascading Style Sheets)
**역할**: 웹 페이지의 디자인과 레이아웃

```css
body {
  background-color: blue;
  font-size: 16px;
}

h1 {
  color: white;
  text-align: center;
}
```

**비유**: 인테리어 디자이너
- 배경색은 무엇으로 할지
- 글자는 얼마나 크게 할지
- 요소를 어떻게 배치할지

### 2.3 JavaScript
**역할**: 웹 페이지의 동작과 상호작용

```javascript
button.addEventListener('click', () => {
  alert('버튼이 클릭되었습니다!');
});
```

**비유**: 전기 기술자
- 버튼을 누르면 무엇이 일어날지
- 계산을 어떻게 할지
- 데이터를 어떻게 처리할지

---

## 3. HTML 기초 명령어

### 3.1 기본 구조 태그

| 태그 | 의미 | 설명 | 예시 |
|------|------|------|------|
| `<!DOCTYPE html>` | 문서 타입 선언 | HTML5 문서임을 알림 | 맨 위에 한 번만 |
| `<html>` | HTML 문서의 시작과 끝 | 모든 내용을 감싸는 최상위 태그 | `<html lang="ko">` |
| `<head>` | 문서 정보 영역 | 제목, 스타일, 메타정보 등 | 화면에 안 보임 |
| `<body>` | 본문 영역 | 실제로 화면에 보이는 내용 | 화면에 보임 |

### 3.2 메타 태그

```html
<!-- 문자 인코딩 설정 (한글 깨짐 방지) -->
<meta charset="UTF-8">

<!-- 모바일 반응형 설정 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- 페이지 제목 (브라우저 탭에 표시) -->
<title>웹사이트 제목</title>
```

### 3.3 내용 태그

| 태그 | 의미 | 사용 예시 |
|------|------|-----------|
| `<h1>~<h6>` | 제목 (Heading) | `<h1>가장 큰 제목</h1>` |
| `<p>` | 단락 (Paragraph) | `<p>문단 내용</p>` |
| `<div>` | 구역 나누기 (Division) | `<div>그룹화된 콘텐츠</div>` |
| `<span>` | 인라인 그룹 | `<span>작은 단위 텍스트</span>` |
| `<button>` | 버튼 | `<button>클릭하세요</button>` |
| `<input>` | 입력 필드 | `<input type="text">` |
| `<label>` | 입력 필드 라벨 | `<label for="name">이름</label>` |
| `<form>` | 입력 폼 | `<form>입력 요소 그룹</form>` |

### 3.4 시맨틱 태그 (의미가 있는 태그)

| 태그 | 의미 | 용도 |
|------|------|------|
| `<header>` | 머리말 | 페이지 상단, 제목 영역 |
| `<main>` | 주요 콘텐츠 | 페이지의 핵심 내용 |
| `<footer>` | 바닥글 | 페이지 하단, 저작권 정보 |
| `<section>` | 섹션 | 콘텐츠의 구역 |
| `<article>` | 독립적 콘텐츠 | 뉴스 기사, 블로그 글 |
| `<nav>` | 네비게이션 | 메뉴, 링크 모음 |

### 3.5 입력 필드 타입

```html
<!-- 텍스트 입력 -->
<input type="text" placeholder="이름을 입력하세요">

<!-- 숫자 입력 -->
<input type="number" min="0" max="100" value="50">

<!-- 날짜 선택 -->
<input type="date">

<!-- 비밀번호 입력 -->
<input type="password">

<!-- 이메일 입력 -->
<input type="email">
```

### 3.6 테이블 (표)

```html
<table>
  <thead>              <!-- 테이블 헤더 -->
    <tr>               <!-- 행(Row) -->
      <th>항목</th>    <!-- 헤더 셀 -->
      <th>금액</th>
    </tr>
  </thead>
  <tbody>              <!-- 테이블 본문 -->
    <tr>
      <td>국민연금</td>  <!-- 데이터 셀 -->
      <td>225,000원</td>
    </tr>
  </tbody>
</table>
```

### 3.7 외부 파일 연결

```html
<!-- CSS 파일 연결 -->
<link rel="stylesheet" href="styles.css">

<!-- JavaScript 파일 연결 -->
<script src="script.js"></script>
```

---

## 4. CSS 기초 명령어

### 4.1 CSS 선택자 (Selector)

| 선택자 | 문법 | 의미 | 예시 |
|--------|------|------|------|
| **태그 선택자** | `태그명` | 해당 태그 모두 선택 | `p { color: blue; }` |
| **클래스 선택자** | `.클래스명` | 같은 클래스를 가진 요소들 | `.card { ... }` |
| **ID 선택자** | `#아이디명` | 특정 ID를 가진 요소 | `#result { ... }` |
| **속성 선택자** | `[속성]` | 특정 속성을 가진 요소 | `input[type="number"]` |
| **의사 클래스** | `:상태` | 특정 상태의 요소 | `button:hover` |

### 4.2 CSS 변수 (Custom Properties)

```css
/* 변수 정의 - :root는 최상위를 의미 */
:root {
  --primary-color: #4F46E5;    /* 메인 색상 */
  --text-color: #1F2937;       /* 텍스트 색상 */
  --border-radius: 16px;       /* 둥근 모서리 크기 */
}

/* 변수 사용 */
.card {
  color: var(--text-color);           /* 변수 적용 */
  background: var(--primary-color);
  border-radius: var(--border-radius);
}
```

### 4.3 색상 지정 방법

```css
/* 1. 색상 이름 */
color: red;
color: blue;

/* 2. HEX 코드 (16진수) */
color: #FF0000;        /* 빨강 */
color: #4F46E5;        /* 보라 */

/* 3. RGB (빨강, 초록, 파랑) */
color: rgb(255, 0, 0);

/* 4. RGBA (투명도 추가) */
color: rgba(255, 0, 0, 0.5);  /* 50% 투명 */

/* 5. 그라디언트 (점진적 변화) */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### 4.4 크기와 간격

```css
/* 너비와 높이 */
width: 100px;           /* 고정 크기 */
width: 50%;             /* 부모의 50% */
width: 100vw;           /* 화면 너비의 100% */
min-height: 100vh;      /* 최소 높이 = 화면 높이 */
max-width: 1200px;      /* 최대 너비 제한 */

/* 여백 (Margin - 바깥 여백) */
margin: 10px;           /* 사방 10px */
margin: 10px 20px;      /* 위아래 10px, 좌우 20px */
margin: 0 auto;         /* 가로 중앙 정렬 */

/* 안쪽 여백 (Padding) */
padding: 20px;          /* 사방 20px */
padding: 20px 30px;     /* 위아래 20px, 좌우 30px */
```

### 4.5 Flexbox (레이아웃)

```css
/* 부모 요소에 적용 */
.container {
  display: flex;              /* Flexbox 활성화 */
  flex-direction: row;        /* 가로 배치 (기본값) */
  flex-direction: column;     /* 세로 배치 */
  gap: 20px;                  /* 자식 요소 간 간격 */
  justify-content: center;    /* 가로 중앙 정렬 */
  align-items: center;        /* 세로 중앙 정렬 */
}

/* 자식 요소에 적용 */
.card {
  flex: 1;                    /* 남은 공간 균등 분배 */
  flex: 2;                    /* 2배 더 많은 공간 차지 */
}
```

### 4.6 박스 모델

```css
* {
  box-sizing: border-box;     /* 패딩, 테두리를 크기에 포함 */
}

.box {
  border: 2px solid black;    /* 테두리 */
  border-radius: 8px;         /* 둥근 모서리 */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);  /* 그림자 */
}
```

**box-shadow 문법**:
```css
box-shadow: x축 y축 흐림 퍼짐 색상;
box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.1);
```

### 4.7 텍스트 스타일

```css
.text {
  font-size: 16px;            /* 글자 크기 */
  font-weight: 600;           /* 글자 두께 (100~900) */
  font-family: 'Pretendard';  /* 글꼴 */
  color: #1F2937;             /* 글자 색상 */
  text-align: center;         /* 정렬 (left, center, right) */
  line-height: 1.6;           /* 줄 간격 */
  letter-spacing: 0.5px;      /* 자간 */
}
```

### 4.8 Hover 효과 (마우스 올렸을 때)

```css
button {
  background: blue;
  transition: all 0.3s;       /* 0.3초 동안 부드럽게 변화 */
}

button:hover {
  background: darkblue;       /* 마우스 올렸을 때 색상 변경 */
  transform: translateY(-2px); /* 위로 2px 이동 */
}

button:active {
  transform: translateY(0);   /* 클릭 시 원래 위치 */
}
```

### 4.9 애니메이션

```css
/* 애니메이션 정의 */
@keyframes fadeIn {
  from {
    opacity: 0;               /* 투명 (시작) */
    transform: translateY(10px);
  }
  to {
    opacity: 1;               /* 불투명 (끝) */
    transform: translateY(0);
  }
}

/* 애니메이션 적용 */
.result-box {
  animation: fadeIn 0.5s ease;  /* 0.5초 동안 fadeIn 실행 */
}
```

### 4.10 반응형 디자인 (Media Query)

```css
/* 기본 스타일 (데스크톱) */
.container {
  display: flex;
  flex-direction: row;
}

/* 화면 너비 768px 이하일 때 (모바일, 태블릿) */
@media (max-width: 768px) {
  .container {
    flex-direction: column;   /* 세로 배치로 변경 */
  }
  
  h1 {
    font-size: 24px;          /* 글자 크기 축소 */
  }
}
```

---

## 5. JavaScript 기초 명령어

### 5.1 변수 선언

```javascript
// const - 상수 (변경 불가능)
const name = '홍길동';
const PI = 3.14159;

// let - 변수 (변경 가능)
let age = 25;
age = 26;  // 변경 가능

// var - 옛날 방식 (사용 X)
```

### 5.2 데이터 타입

```javascript
// 숫자 (Number)
const num = 42;
const price = 50000;

// 문자열 (String)
const text = '안녕하세요';
const name = "홍길동";

// 불린 (Boolean) - 참/거짓
const isTrue = true;
const isFalse = false;

// 배열 (Array)
const numbers = [1, 2, 3, 4, 5];
const names = ['철수', '영희', '민수'];

// 객체 (Object)
const person = {
  name: '홍길동',
  age: 25,
  city: '서울'
};

// null, undefined
const nothing = null;        // 비어있음 (의도적)
let notDefined;              // 정의되지 않음
```

### 5.3 연산자

```javascript
// 산술 연산자
5 + 3   // 8 (더하기)
5 - 3   // 2 (빼기)
5 * 3   // 15 (곱하기)
5 / 3   // 1.666... (나누기)
5 % 3   // 2 (나머지)

// 비교 연산자
5 === 5   // true (같다)
5 !== 3   // true (다르다)
5 > 3     // true (크다)
5 < 3     // false (작다)
5 >= 5    // true (크거나 같다)

// 논리 연산자
true && false   // false (AND - 둘 다 참이어야 참)
true || false   // true (OR - 하나만 참이어도 참)
!true          // false (NOT - 반대)
```

### 5.4 조건문 (if-else)

```javascript
const age = 20;

if (age >= 20) {
  console.log('성인입니다');
} else if (age >= 13) {
  console.log('청소년입니다');
} else {
  console.log('어린이입니다');
}

// 단축 형태
const result = age >= 20 ? '성인' : '미성년자';
```

### 5.5 함수 (Function)

```javascript
// 일반 함수 선언
function add(a, b) {
  return a + b;
}
const sum = add(5, 3);  // 8

// 화살표 함수 (ES6)
const multiply = (a, b) => {
  return a * b;
};

// 화살표 함수 (짧은 형태)
const divide = (a, b) => a / b;
```

### 5.6 DOM 조작 (화면 요소 다루기)

```javascript
// 요소 선택
const button = document.getElementById('myButton');        // ID로 선택
const cards = document.getElementsByClassName('card');    // 클래스로 선택
const element = document.querySelector('.card');          // CSS 선택자로 선택
const elements = document.querySelectorAll('.card');      // 여러 개 선택

// 값 가져오기/설정하기
const inputValue = document.getElementById('name').value;  // 입력값 가져오기
element.textContent = '새로운 텍스트';                    // 텍스트 변경
element.innerHTML = '<p>HTML 코드</p>';                   // HTML 변경

// 스타일 변경
element.style.color = 'red';
element.style.fontSize = '20px';

// 클래스 추가/제거
element.classList.add('active');
element.classList.remove('hidden');
element.classList.toggle('show');  // 있으면 제거, 없으면 추가
```

### 5.7 이벤트 리스너 (사용자 동작 감지)

```javascript
// 클릭 이벤트
button.addEventListener('click', () => {
  alert('버튼이 클릭되었습니다!');
});

// 입력 이벤트
input.addEventListener('input', (event) => {
  console.log('입력값:', event.target.value);
});

// 폼 제출 이벤트
form.addEventListener('submit', (event) => {
  event.preventDefault();  // 기본 동작 막기 (페이지 새로고침 방지)
});
```

### 5.8 Date 객체 (날짜와 시간)

```javascript
// 현재 날짜와 시간
const now = new Date();

// 특정 날짜 생성
const birthday = new Date('2000-01-15');

// 날짜 정보 가져오기
const year = now.getFullYear();        // 2025
const month = now.getMonth() + 1;      // 1~12 (주의: 0부터 시작!)
const day = now.getDate();             // 1~31
const hour = now.getHours();           // 0~23

// 날짜 설정하기
const futureDate = new Date();
futureDate.setDate(now.getDate() + 100);  // 100일 후

// 날짜 계산
const diff = date2 - date1;  // 밀리초 단위 차이
const days = Math.floor(diff / (1000 * 60 * 60 * 24));  // 일수로 변환
```

### 5.9 Math 객체 (수학 함수)

```javascript
Math.floor(4.7);    // 4 (내림)
Math.ceil(4.3);     // 5 (올림)
Math.round(4.5);    // 5 (반올림)
Math.max(1, 5, 3);  // 5 (최댓값)
Math.min(1, 5, 3);  // 1 (최솟값)
Math.abs(-5);       // 5 (절댓값)
Math.random();      // 0~1 사이 난수
```

### 5.10 배열 메서드

```javascript
const numbers = [1, 2, 3, 4, 5];

// 배열 순회
numbers.forEach((num) => {
  console.log(num);
});

// 배열 변환
const doubled = numbers.map((num) => num * 2);  // [2, 4, 6, 8, 10]

// 배열 필터링
const evens = numbers.filter((num) => num % 2 === 0);  // [2, 4]

// 배열 합계
const sum = numbers.reduce((total, num) => total + num, 0);  // 15
```

### 5.11 템플릿 리터럴 (문자열 조합)

```javascript
const name = '홍길동';
const age = 25;

// 옛날 방식
const text1 = '안녕하세요, ' + name + '님! 나이는 ' + age + '세입니다.';

// 템플릿 리터럴 (백틱 ` 사용)
const text2 = `안녕하세요, ${name}님! 나이는 ${age}세입니다.`;

// 여러 줄
const html = `
  <div>
    <h1>${name}</h1>
    <p>나이: ${age}세</p>
  </div>
`;
```

### 5.12 숫자 포맷팅

```javascript
const number = 1234567;

// 천단위 콤마
number.toLocaleString();           // "1,234,567"
number.toLocaleString('ko-KR');    // "1,234,567" (한국 형식)

// 소수점 자리수 지정
const pi = 3.14159;
pi.toFixed(2);  // "3.14"

// 문자열을 숫자로 변환
parseInt('123');      // 123
parseFloat('3.14');   // 3.14
Number('456');        // 456
```

---

## 6. 레슨 4 핵심 개념

### 6.1 레슨 4 개요
**프로젝트**: 연봉 실수령액 계산기
**목표**: 복잡한 계산 로직 구현 + 테이블 활용

### 6.2 핵심 새로운 개념

#### 📌 1. parseInt() - 문자를 정수로 변환

```javascript
// input에서 받은 값은 항상 "문자열"
const value = document.getElementById('salary').value;  // "50000" (문자열)
const number = parseInt(value);  // 50000 (숫자)

// 주의사항
parseInt('50000');    // 50000
parseInt('50000원');  // 50000 (숫자 부분만 추출)
parseInt('abc');      // NaN (Not a Number)
```

#### 📌 2. Math.floor() vs Math.ceil() vs Math.round()

```javascript
const num = 4.7;

Math.floor(num);   // 4 (내림 - 소수점 버림)
Math.ceil(num);    // 5 (올림)
Math.round(num);   // 5 (반올림)

// 실무 예시
const salary = 5000000;
const monthlySalary = Math.floor(salary / 12);  // 416,666원 (내림)
```

**언제 사용할까?**
- `Math.floor()`: 돈 계산 (내림이 안전)
- `Math.ceil()`: D-day 계산 (올림)
- `Math.round()`: 평균 점수 등

#### 📌 3. 객체 반환 (return)

```javascript
// 여러 값을 한 번에 반환하기
function calculateInsurance(salary) {
  const nationalPension = salary * 0.045;
  const healthInsurance = salary * 0.03545;
  
  // 객체로 묶어서 반환
  return {
    nationalPension,      // nationalPension: nationalPension과 같음
    healthInsurance,
    total: nationalPension + healthInsurance
  };
}

// 사용할 때
const result = calculateInsurance(5000000);
console.log(result.nationalPension);  // 225000
console.log(result.healthInsurance);  // 177250
console.log(result.total);            // 402250
```

#### 📌 4. 퍼센트를 소수로 변환

```javascript
// 4.5% → 0.045
const rate = 4.5 / 100;         // 0.045
const betterWay = 0.045;        // 직접 소수로 쓰기 (권장)

// 계산 예시
const salary = 5000000;
const pension = salary * 0.045;  // 225,000원
```

**환산 공식**:
```
4.5% = 4.5 ÷ 100 = 0.045
3.545% = 3.545 ÷ 100 = 0.03545
```

#### 📌 5. 조건문을 이용한 구간 계산 (누진세율)

```javascript
function calculateTax(income) {
  let tax = 0;
  
  if (income <= 14000000) {
    // 1,400만원 이하: 6%
    tax = income * 0.06;
  } else if (income <= 50000000) {
    // 5,000만원 이하: 84만원 + 초과분의 15%
    tax = 840000 + (income - 14000000) * 0.15;
  } else if (income <= 88000000) {
    // 8,800만원 이하: 624만원 + 초과분의 24%
    tax = 6240000 + (income - 50000000) * 0.24;
  }
  
  return tax;
}
```

**이해하기**:
- 연봉 3,000만원 → 1구간 (6%)
- 연봉 6,000만원 → 2구간 (초과분만 15%)
- 각 구간마다 다른 세율 적용

#### 📌 6. Math.max() - 최솟값 보장

```javascript
// 세금이 음수가 되지 않도록
const tax = Math.max(0, calculatedTax - deduction);

// 예시
Math.max(0, 100);   // 100
Math.max(0, -50);   // 0 (음수 방지)
Math.max(5, 10);    // 10
```

#### 📌 7. toLocaleString() - 천단위 콤마

```javascript
const number = 1234567;

// 한국 형식으로 변환
number.toLocaleString('ko-KR');  // "1,234,567"

// HTML에 표시
resultDiv.innerHTML = `
  <p>급여: ${salary.toLocaleString()}원</p>
`;
// 결과: "급여: 5,000,000원"
```

#### 📌 8. HTML 테이블 동적 생성

```javascript
// 템플릿 리터럴로 테이블 HTML 생성
const tableHTML = `
  <table>
    <thead>
      <tr>
        <th>항목</th>
        <th>금액</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>국민연금</td>
        <td>${formatNumber(pension)}원</td>
      </tr>
      <tr>
        <td>건강보험</td>
        <td>${formatNumber(health)}원</td>
      </tr>
    </tbody>
  </table>
`;

// 화면에 표시
document.getElementById('result').innerHTML = tableHTML;
```

#### 📌 9. 입력값 유효성 검증

```javascript
const salary = parseInt(document.getElementById('salary').value);

// 1. 빈 값 체크
if (!salary) {
  alert('연봉을 입력해주세요!');
  return;  // 함수 중단
}

// 2. 범위 체크
if (salary <= 0) {
  alert('연봉은 0보다 커야 합니다!');
  return;
}

// 3. 숫자 여부 체크
if (isNaN(salary)) {
  alert('숫자만 입력해주세요!');
  return;
}
```

### 6.3 연봉 계산 로직 완전 정복

#### 📊 전체 계산 흐름

```
1. 연봉 입력 (예: 50,000,000원)
      ↓
2. 월급 계산 = 연봉 ÷ 12
      ↓
3. 4대보험 계산
   ├─ 국민연금 = 월급 × 4.5%
   ├─ 건강보험 = 월급 × 3.545%
   ├─ 장기요양 = 건강보험 × 12.95%
   └─ 고용보험 = 월급 × 0.9%
      ↓
4. 소득세 계산 (누진세율 적용)
      ↓
5. 지방소득세 = 소득세 × 10%
      ↓
6. 총 공제액 = 4대보험 + 소득세 + 지방소득세
      ↓
7. 실수령액 = 월급 - 총 공제액
```

#### 🧮 계산 예시 (연봉 5,000만원)

```javascript
// 1. 월급 계산
const 연봉 = 50000000;
const 월급 = Math.floor(연봉 / 12);  // 4,166,666원

// 2. 4대보험
const 국민연금 = Math.floor(월급 * 0.045);      // 187,500원
const 건강보험 = Math.floor(월급 * 0.03545);    // 147,708원
const 장기요양 = Math.floor(건강보험 * 0.1295); // 19,128원
const 고용보험 = Math.floor(월급 * 0.009);      // 37,500원
const 보험합계 = 391,836원;

// 3. 소득세 (연봉 5,000만원 = 2구간)
const 연소득 = 월급 * 12;  // 49,999,992원
const 소득세 = 840000 + (연소득 - 14000000) * 0.15;
const 월소득세 = Math.floor(소득세 / 12);  // 520,000원

// 4. 지방소득세
const 지방소득세 = Math.floor(월소득세 * 0.1);  // 52,000원

// 5. 실수령액
const 실수령액 = 월급 - 보험합계 - 월소득세 - 지방소득세;
// 4,166,666 - 391,836 - 520,000 - 52,000 = 3,202,830원
```

### 6.4 CSS 테이블 스타일링

```css
/* 테이블 기본 스타일 */
table {
  width: 100%;                    /* 전체 너비 */
  border-collapse: collapse;      /* 셀 경계선 합치기 */
}

/* 헤더 스타일 */
thead {
  background: #4F46E5;            /* 배경색 */
  color: white;                   /* 글자색 */
}

/* 셀 스타일 */
th, td {
  padding: 14px 16px;             /* 안쪽 여백 */
  text-align: left;               /* 왼쪽 정렬 */
  border-bottom: 1px solid #ddd;  /* 하단 테두리 */
}

/* 마지막 열 오른쪽 정렬 */
td:last-child {
  text-align: right;
  font-weight: 500;
}

/* 행 Hover 효과 */
tbody tr:hover {
  background: #F3F4F6;
  transition: background 0.2s;
}

/* 합계 행 강조 */
.total-row {
  background: #F3F4F6;
  font-weight: 600;
}
```

### 6.5 실전 팁과 주의사항

#### ⚠️ 흔한 실수와 해결법

**1. 문자열과 숫자 혼동**
```javascript
// 잘못된 예
const input = document.getElementById('salary').value;  // "50000" (문자열)
const result = input / 12;  // 자동 변환되지만 위험

// 올바른 예
const input = parseInt(document.getElementById('salary').value);  // 50000 (숫자)
const result = input / 12;
```

**2. 소수점 처리 잊기**
```javascript
// 잘못된 예
const pension = salary * 0.045;  // 187500.5원 (소수점 발생)

// 올바른 예
const pension = Math.floor(salary * 0.045);  // 187500원
```

**3. 객체 접근 오류**
```javascript
const result = calculateInsurance(salary);

// 잘못된 예
console.log(result.nationalPension);  // undefined (오타)

// 올바른 예
console.log(result.nationalPension);  // 정상 작동
```

**4. 유효성 검증 누락**
```javascript
// 위험한 코드 (검증 없음)
const salary = parseInt(input.value);
const result = salary / 12;  // salary가 NaN이면 결과도 NaN

// 안전한 코드 (검증 추가)
const salary = parseInt(input.value);
if (!salary || salary <= 0) {
  alert('올바른 금액을 입력하세요!');
  return;
}
const result = salary / 12;
```

---

## 7. 자주 쓰는 명령어 치트시트

### 7.1 HTML 필수 명령어

```html
<!-- 기본 구조 -->
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>제목</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- 내용 -->
  <script src="script.js"></script>
</body>
</html>

<!-- 자주 쓰는 태그 -->
<h1>제목</h1>
<p>문단</p>
<div>구역</div>
<button>버튼</button>
<input type="text">
<label for="id">라벨</label>

<!-- 테이블 -->
<table>
  <thead>
    <tr><th>헤더</th></tr>
  </thead>
  <tbody>
    <tr><td>데이터</td></tr>
  </tbody>
</table>
```

### 7.2 CSS 필수 명령어

```css
/* 선택자 */
.class { }      /* 클래스 */
#id { }         /* ID */
tag { }         /* 태그 */
tag:hover { }   /* Hover */

/* 자주 쓰는 속성 */
color: #000;
background: #fff;
font-size: 16px;
font-weight: 600;
padding: 20px;
margin: 10px;
border-radius: 8px;
box-shadow: 0 2px 8px rgba(0,0,0,0.1);

/* Flexbox */
display: flex;
gap: 20px;
justify-content: center;
align-items: center;

/* 반응형 */
@media (max-width: 768px) {
  /* 모바일 스타일 */
}
```

### 7.3 JavaScript 필수 명령어

```javascript
// 변수
const name = 'value';
let number = 10;

// 함수
function myFunc() { }
const myFunc = () => { }

// DOM 조작
document.getElementById('id')
document.querySelector('.class')
element.innerHTML = 'HTML'
element.value

// 이벤트
button.addEventListener('click', () => { })

// 조건문
if (condition) { } else { }

// 숫자 변환
parseInt(str)
Math.floor(num)
Math.ceil(num)

// 날짜
new Date()
date.getFullYear()
date.getMonth() + 1
date.getDate()

// 배열
array.forEach(item => { })
array.map(item => { })
array.filter(item => { })

// 템플릿 리터럴
`텍스트 ${변수} 텍스트`

// 숫자 포맷
number.toLocaleString()
```

### 7.4 디버깅 명령어

```javascript
// 콘솔 출력
console.log('메시지');
console.log('변수:', variable);
console.error('에러 메시지');
console.table(array);  // 배열을 표로 출력

// 타입 확인
typeof variable
Array.isArray(arr)
isNaN(num)

// 디버거
debugger;  // 중단점 설정
```

---

## 🎯 학습 로드맵

### 초급 (1~2주차)
- [ ] HTML 기본 태그 20개 암기
- [ ] CSS 기본 속성 30개 암기
- [ ] JavaScript 변수, 함수, 조건문 이해
- [ ] 간단한 계산기 만들어보기

### 중급 (3~4주차)
- [ ] Flexbox 레이아웃 마스터
- [ ] DOM 조작 능숙하게 다루기
- [ ] Date 객체로 날짜 계산하기
- [ ] 반응형 디자인 구현하기

### 고급 (5~6주차)
- [ ] 복잡한 계산 로직 구현 (레슨 4)
- [ ] 여러 계산기 통합하기
- [ ] 모듈화 및 코드 분리
- [ ] API 연동하기

---

## 📖 추가 학습 자료

### 공식 문서
- [MDN Web Docs](https://developer.mozilla.org/ko/) - 최고의 웹 개발 문서
- [W3Schools](https://www.w3schools.com/) - 초보자 친화적 튜토리얼

### 추천 도구
- **VS Code**: 코드 에디터
- **Chrome DevTools (F12)**: 디버깅 도구
- **CodePen**: 온라인 코드 실험
- **Can I Use**: 브라우저 호환성 확인

### 연습 사이트
- [freeCodeCamp](https://www.freecodecamp.org/)
- [코딩도장](https://codingdojang.com/)
- [Programmers](https://programmers.co.kr/)

---

## 💡 마지막 팁

### 학습 방법
1. **따라 치기**: 코드를 직접 타이핑하며 익히기
2. **변형하기**: 예제를 조금씩 바꿔보기
3. **만들기**: 작은 프로젝트 직접 만들어보기
4. **디버깅**: 에러를 두려워하지 말고 고쳐보기

### 기억하기
- **HTML**: 구조 (뼈대)
- **CSS**: 디자인 (외관)
- **JavaScript**: 동작 (기능)

### 막힐 때
1. 콘솔(F12)에서 에러 메시지 확인
2. console.log()로 중간값 출력
3. 구글에 에러 메시지 검색
4. 코드를 작은 단위로 나눠서 테스트

---

## 🎓 공략집 사용법

### 1. 빠른 참조
- 특정 명령어가 기억나지 않을 때
- Ctrl+F로 검색하여 빠르게 찾기

### 2. 체계적 학습
- 처음부터 순서대로 읽으며 학습
- 각 섹션의 예제 직접 실습

### 3. 프로젝트 진행 시
- 레슨별 핵심 개념 섹션 참고
- 치트시트로 빠른 코드 작성

---

**🎉 이 공략집과 함께라면 웹 개발 마스터는 시간문제입니다!**

언제든 돌아와서 필요한 부분을 찾아보세요. 
코딩은 반복과 실습이 핵심입니다. 화이팅! 💪


