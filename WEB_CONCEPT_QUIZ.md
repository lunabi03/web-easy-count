# 🎯 웹 개발 개념 퀴즈 - 레슨 1~10

> **웹 개발 기초 개념을 탄탄하게!**
> 
> 각 레슨당 10문제 × 10개 레슨 = 총 100문제
> 
> 문제를 풀고 아래로 스크롤하여 정답을 확인하세요!

---

## 📚 목차

- [레슨 1: 순수 HTML (10문제)](#레슨-1-순수-html)
- [레슨 2: JavaScript 기초 (10문제)](#레슨-2-javascript-기초)
- [레슨 3: CSS 디자인 (10문제)](#레슨-3-css-디자인)
- [레슨 4: 복잡한 계산 로직 (10문제)](#레슨-4-복잡한-계산-로직)
- [레슨 5: Vite & 모듈 시스템 (10문제)](#레슨-5-vite--모듈-시스템)
- [레슨 6: Next.js & TypeScript (10문제)](#레슨-6-nextjs--typescript)
- [레슨 7: SEO 최적화 (10문제)](#레슨-7-seo-최적화)
- [레슨 8: 배포 & 분석 (10문제)](#레슨-8-배포--분석)
- [레슨 9: 데이터베이스 & 인증 (10문제)](#레슨-9-데이터베이스--인증)
- [레슨 10: 프로젝트 완성 (10문제)](#레슨-10-프로젝트-완성)

---

## 레슨 1: 순수 HTML

### 문제

**Q1. HTML 문서의 가장 첫 줄에 작성해야 하는 선언은 무엇인가요?**

a) `<html>`  
b) `<!DOCTYPE html>`  
c) `<head>`  
d) `<meta charset="UTF-8">`

---

**Q2. 다음 중 HTML 문서에서 화면에 보이는 내용을 담는 태그는?**

a) `<head>`  
b) `<meta>`  
c) `<body>`  
d) `<title>`

---

**Q3. 한글이 깨지지 않게 하려면 `<head>` 안에 무엇을 작성해야 하나요?**

a) `<meta name="korean">`  
b) `<meta charset="UTF-8">`  
c) `<meta lang="ko">`  
d) `<charset>UTF-8</charset>`

---

**Q4. 날짜를 선택할 수 있는 input 타입은?**

a) `<input type="text">`  
b) `<input type="calendar">`  
c) `<input type="date">`  
d) `<input type="datetime">`

---

**Q5. 다음 중 `<label>` 태그의 역할은?**

a) 입력 필드에 테두리를 그린다  
b) 입력 필드에 설명을 붙인다  
c) 입력 필드의 값을 저장한다  
d) 입력 필드를 숨긴다

---

**Q6. `<label for="name">`과 연결되는 input의 속성은?**

a) `<input name="name">`  
b) `<input for="name">`  
c) `<input id="name">`  
d) `<input value="name">`

---

**Q7. 버튼을 만들 때 사용하는 태그는?**

a) `<btn>`  
b) `<click>`  
c) `<button>`  
d) `<input type="button">`

---

**Q8. 여러 입력 요소를 그룹화할 때 사용하는 태그는?**

a) `<group>`  
b) `<form>`  
c) `<input>`  
d) `<div>`

---

**Q9. HTML 주석은 어떻게 작성하나요?**

a) `// 주석`  
b) `/* 주석 */`  
c) `<!-- 주석 -->`  
d) `# 주석`

---

**Q10. 다음 중 시맨틱 태그가 아닌 것은?**

a) `<header>`  
b) `<footer>`  
c) `<main>`  
d) `<div>`

---

### 정답

1. **b)** `<!DOCTYPE html>` - HTML5 문서임을 선언
2. **c)** `<body>` - 화면에 보이는 모든 내용을 담음
3. **b)** `<meta charset="UTF-8">` - UTF-8 인코딩으로 한글 지원
4. **c)** `<input type="date">` - 브라우저가 날짜 선택 UI 제공
5. **b)** 입력 필드에 설명을 붙인다 - label은 입력 필드의 라벨
6. **c)** `<input id="name">` - label의 for 속성은 input의 id와 연결
7. **c)** `<button>` - 표준 버튼 태그
8. **b)** `<form>` - 입력 요소를 그룹화하는 태그
9. **c)** `<!-- 주석 -->` - HTML 주석 형식
10. **d)** `<div>` - 의미 없는 범용 컨테이너, 시맨틱 태그 아님

---

## 레슨 2: JavaScript 기초

### 문제

**Q1. JavaScript 파일을 HTML에 연결할 때 어디에 작성하는 것이 좋나요?**

a) `<head>` 태그 안  
b) `<body>` 태그 시작 부분  
c) `<body>` 태그 끝부분 (`</body>` 직전)  
d) `<html>` 태그 밖

---

**Q2. 현재 날짜를 가져오는 코드는?**

a) `const today = Date.now()`  
b) `const today = new Date()`  
c) `const today = getCurrentDate()`  
d) `const today = Date.today()`

---

**Q3. `date.getMonth()`의 반환값이 `0`일 때 실제 월은?**

a) 0월  
b) 1월  
c) 12월  
d) 에러

---

**Q4. 날짜에 100일을 더하는 올바른 코드는?**

a) `date + 100`  
b) `date.addDays(100)`  
c) `date.setDate(date.getDate() + 100)`  
d) `date = date + 100`

---

**Q5. ID가 "result"인 요소를 선택하는 코드는?**

a) `document.getElementById('result')`  
b) `document.getElement('result')`  
c) `document.querySelector('#result')`  
d) a와 c 모두 가능

---

**Q6. input 요소의 값을 가져오는 속성은?**

a) `.text`  
b) `.value`  
c) `.content`  
d) `.innerHTML`

---

**Q7. 버튼 클릭 시 함수를 실행하려면?**

a) `button.click(function)`  
b) `button.addEventListener('click', function)`  
c) `button.onClick = function`  
d) `button.on('click', function)`

---

**Q8. 밀리초를 일수로 변환하는 공식은?**

a) `밀리초 / 1000`  
b) `밀리초 / (1000 * 60)`  
c) `밀리초 / (1000 * 60 * 60)`  
d) `밀리초 / (1000 * 60 * 60 * 24)`

---

**Q9. 템플릿 리터럴에서 사용하는 기호는?**

a) 작은따옴표 `'`  
b) 큰따옴표 `"`  
c) 백틱 `` ` ``  
d) 슬래시 `/`

---

**Q10. `Math.abs(-5)`의 결과는?**

a) -5  
b) 5  
c) 0  
d) 에러

---

### 정답

1. **c)** `</body>` 직전 - HTML 요소가 먼저 로드되어야 JavaScript가 접근 가능
2. **b)** `new Date()` - 현재 날짜와 시간 객체 생성
3. **b)** 1월 - getMonth()는 0부터 시작 (0=1월, 11=12월)
4. **c)** `date.setDate(date.getDate() + 100)` - 날짜에 일수 더하기
5. **d)** 둘 다 가능 - getElementById와 querySelector 모두 사용 가능
6. **b)** `.value` - input 요소의 입력값을 가져오는 속성
7. **b)** `addEventListener('click', function)` - 표준 이벤트 리스너
8. **d)** `밀리초 / (1000 * 60 * 60 * 24)` - 밀리초 → 초 → 분 → 시간 → 일
9. **c)** 백틱 `` ` `` - 템플릿 리터럴은 백틱으로 감싸기
10. **b)** 5 - Math.abs()는 절댓값 반환

---

## 레슨 3: CSS 디자인

### 문제

**Q1. CSS 파일을 HTML에 연결할 때 사용하는 태그는?**

a) `<css src="style.css">`  
b) `<link rel="stylesheet" href="style.css">`  
c) `<style src="style.css">`  
d) `<import>style.css</import>`

---

**Q2. CSS 변수를 정의하는 위치는?**

a) `body { }`  
b) `* { }`  
c) `:root { }`  
d) `html { }`

---

**Q3. CSS 변수를 사용하는 올바른 문법은?**

a) `color: $primary-color`  
b) `color: var(--primary-color)`  
c) `color: @primary-color`  
d) `color: {primary-color}`

---

**Q4. 모든 요소의 여백을 0으로 초기화하는 선택자는?**

a) `all { margin: 0; }`  
b) `* { margin: 0; }`  
c) `body { margin: 0; }`  
d) `reset { margin: 0; }`

---

**Q5. Flexbox를 활성화하는 CSS 속성은?**

a) `flexbox: true`  
b) `display: flexbox`  
c) `display: flex`  
d) `layout: flex`

---

**Q6. Flexbox에서 자식 요소를 세로로 배치하려면?**

a) `flex-direction: vertical`  
b) `flex-direction: column`  
c) `flex-direction: down`  
d) `direction: column`

---

**Q7. 마우스를 올렸을 때 스타일을 적용하는 의사 클래스는?**

a) `:click`  
b) `:over`  
c) `:hover`  
d) `:mouse`

---

**Q8. 화면 너비가 768px 이하일 때 스타일을 적용하려면?**

a) `@media (width: 768px) { }`  
b) `@media (min-width: 768px) { }`  
c) `@media (max-width: 768px) { }`  
d) `@screen (768px) { }`

---

**Q9. 다음 중 그림자 효과를 주는 속성은?**

a) `shadow: 0 10px 20px`  
b) `box-shadow: 0 10px 20px rgba(0,0,0,0.1)`  
c) `drop-shadow: 0 10px 20px`  
d) `filter: shadow(0 10px 20px)`

---

**Q10. `100vh`의 의미는?**

a) 100 vertical height  
b) 100 viewport height (화면 높이의 100%)  
c) 100 view horizontal  
d) 100 pixel height

---

### 정답

1. **b)** `<link rel="stylesheet" href="style.css">` - 외부 CSS 연결
2. **c)** `:root { }` - CSS 변수는 :root에 정의
3. **b)** `var(--primary-color)` - CSS 변수 사용 문법
4. **b)** `* { margin: 0; }` - 전체 선택자 (*)
5. **c)** `display: flex` - Flexbox 활성화
6. **b)** `flex-direction: column` - 세로 배치
7. **c)** `:hover` - 마우스 올렸을 때
8. **c)** `@media (max-width: 768px)` - 768px 이하일 때
9. **b)** `box-shadow: 0 10px 20px rgba(0,0,0,0.1)` - 박스 그림자
10. **b)** 100 viewport height - 화면 높이의 100%

---

## 레슨 4: 복잡한 계산 로직

### 문제

**Q1. 문자열 "50000"을 숫자 50000으로 변환하는 함수는?**

a) `Number("50000")`  
b) `parseInt("50000")`  
c) `parseFloat("50000")`  
d) 모두 가능

---

**Q2. `Math.floor(4.9)`의 결과는?**

a) 4  
b) 5  
c) 4.9  
d) 에러

---

**Q3. `Math.ceil(4.1)`의 결과는?**

a) 4  
b) 5  
c) 4.1  
d) 에러

---

**Q4. 4.5%를 소수로 나타내면?**

a) 4.5  
b) 0.45  
c) 0.045  
d) 45

---

**Q5. 연봉이 5,000만원일 때 월급은? (소수점 버림)**

a) 4,166,666원  
b) 4,166,667원  
c) 4,200,000원  
d) 5,000,000원

---

**Q6. `Math.max(0, -100)`의 결과는?**

a) -100  
b) 0  
c) 100  
d) 에러

---

**Q7. 숫자 1234567에 천단위 콤마를 추가하려면?**

a) `number.addComma()`  
b) `number.format()`  
c) `number.toLocaleString()`  
d) `number.toString(',')`

---

**Q8. HTML 테이블의 헤더 영역을 나타내는 태그는?**

a) `<header>`  
b) `<thead>`  
c) `<th>`  
d) `<head>`

---

**Q9. 테이블의 데이터 셀을 나타내는 태그는?**

a) `<data>`  
b) `<cell>`  
c) `<td>`  
d) `<dc>`

---

**Q10. 여러 값을 한 번에 반환하려면 어떤 형태로 반환하나요?**

a) 배열 `return [value1, value2]`  
b) 객체 `return { value1, value2 }`  
c) 문자열 `return "value1,value2"`  
d) a와 b 모두 가능

---

### 정답

1. **d)** 모두 가능 - Number(), parseInt(), parseFloat() 모두 사용 가능
2. **a)** 4 - Math.floor()는 내림
3. **b)** 5 - Math.ceil()은 올림
4. **c)** 0.045 - 4.5 ÷ 100 = 0.045
5. **a)** 4,166,666원 - Math.floor(50000000 / 12)
6. **b)** 0 - Math.max()는 최댓값 반환, 0과 -100 중 0이 큼
7. **c)** `toLocaleString()` - 천단위 콤마 자동 추가
8. **b)** `<thead>` - 테이블 헤더 영역
9. **c)** `<td>` - table data (데이터 셀)
10. **d)** 둘 다 가능 - 배열이나 객체로 반환 가능

---

## 레슨 5: Vite & 모듈 시스템

### 문제

**Q1. pnpm 프로젝트를 초기화하는 명령어는?**

a) `pnpm start`  
b) `pnpm init`  
c) `pnpm create`  
d) `pnpm new`

---

**Q2. Vite 개발 서버의 기본 포트는?**

a) 3000  
b) 8080  
c) 5173  
d) 4000

---

**Q3. 함수를 다른 파일에서 사용할 수 있게 내보내려면?**

a) `export function calculate() { }`  
b) `module.exports = calculate`  
c) `return function calculate() { }`  
d) `public function calculate() { }`

---

**Q4. 다른 파일의 함수를 가져오는 올바른 문법은?**

a) `import { calculate } from './module.js'`  
b) `require('./module.js')`  
c) `include './module.js'`  
d) `use './module.js'`

---

**Q5. HMR의 뜻은?**

a) Hot Module Replacement  
b) HTML Module Rendering  
c) High Memory Rate  
d) Hyper Module Reload

---

**Q6. package.json의 "scripts" 섹션은 무엇을 정의하나요?**

a) JavaScript 파일 목록  
b) 실행 가능한 명령어  
c) 패키지 버전  
d) 프로젝트 설명

---

**Q7. 부가세 10%를 계산하는 올바른 코드는?**

a) `amount * 10`  
b) `amount * 0.10`  
c) `amount / 10`  
d) `amount + 10%`

---

**Q8. 부가세 포함 금액 110,000원의 공급가액은? (110,000 ÷ 1.1)**

a) 99,000원  
b) 100,000원  
c) 10,000원  
d) 110,000원

---

**Q9. try-catch 문의 역할은?**

a) 코드를 반복 실행  
b) 에러를 잡아서 처리  
c) 조건문 실행  
d) 함수 호출

---

**Q10. throw new Error('메시지')의 역할은?**

a) 에러를 발생시킴  
b) 에러를 무시함  
c) 에러를 수정함  
d) 에러를 출력함

---

### 정답

1. **b)** `pnpm init` - package.json 생성
2. **c)** 5173 - Vite 기본 포트
3. **a)** `export function calculate() { }` - ES6 모듈 내보내기
4. **a)** `import { calculate } from './module.js'` - ES6 모듈 가져오기
5. **a)** Hot Module Replacement - 코드 변경 시 자동 새로고침
6. **b)** 실행 가능한 명령어 - dev, build 등의 스크립트 정의
7. **b)** `amount * 0.10` - 10% = 0.10
8. **b)** 100,000원 - Math.floor(110000 / 1.1)
9. **b)** 에러를 잡아서 처리 - 예외 처리
10. **a)** 에러를 발생시킨다 - 의도적으로 에러 발생

---

## 레슨 6: Next.js & TypeScript

### 문제

**Q1. Next.js 프로젝트를 생성하는 명령어는?**

a) `pnpm create next-app`  
b) `pnpm init next`  
c) `pnpm new next-app`  
d) `pnpm install next`

---

**Q2. Next.js에서 파일 기반 라우팅이란?**

a) 파일을 서버에 라우팅  
b) 폴더 구조가 URL이 되는 것  
c) 파일을 자동으로 정렬  
d) 라우팅 파일 생성

---

**Q3. `app/salary/page.tsx` 파일의 URL은?**

a) `/salary`  
b) `/app/salary`  
c) `/page/salary`  
d) `/salary/page`

---

**Q4. 클라이언트 컴포넌트로 만들려면 파일 맨 위에 무엇을 작성하나요?**

a) `'use client'`  
b) `'client side'`  
c) `export client`  
d) `client: true`

---

**Q5. TypeScript에서 변수의 타입을 지정하는 방법은?**

a) `const name = string`  
b) `const name: string = 'value'`  
c) `const name<string> = 'value'`  
d) `string const name = 'value'`

---

**Q6. React에서 상태(state)를 만드는 Hook은?**

a) `useState()`  
b) `createState()`  
c) `makeState()`  
d) `newState()`

---

**Q7. `const [count, setCount] = useState(0)`에서 count를 1 증가시키려면?**

a) `count = count + 1`  
b) `count++`  
c) `setCount(count + 1)`  
d) `count.increment()`

---

**Q8. Tailwind CSS에서 패딩 20px을 주려면?**

a) `className="padding-20"`  
b) `className="p-20"`  
c) `className="pd-20"`  
d) `className="p-5"` (1단위 = 4px, 5 × 4 = 20px)

---

**Q9. TypeScript에서 인터페이스를 정의하는 키워드는?**

a) `type`  
b) `interface`  
c) `class`  
d) a와 b 모두 가능

---

**Q10. Next.js에서 페이지 메타데이터를 설정하려면?**

a) `export const meta = { }`  
b) `export const metadata = { }`  
c) `export default metadata = { }`  
d) `setMetadata({ })`

---

### 정답

1. **a)** `pnpm create next-app` - Next.js 프로젝트 생성
2. **b)** 폴더 구조가 URL이 되는 것 - app/about/page.tsx → /about
3. **a)** `/salary` - app/ 이후의 폴더 구조가 URL
4. **a)** `'use client'` - 클라이언트 컴포넌트 선언
5. **b)** `const name: string = 'value'` - 타입 지정 문법
6. **a)** `useState()` - React 상태 관리 Hook
7. **c)** `setCount(count + 1)` - setter 함수 사용
8. **d)** `p-5` - Tailwind는 1단위 = 4px (5 × 4 = 20px)
9. **d)** 둘 다 가능 - interface와 type 모두 타입 정의 가능
10. **b)** `export const metadata = { }` - 페이지 메타데이터 설정

---

## 레슨 7: SEO 최적화

### 문제

**Q1. SEO의 뜻은?**

a) Search Engine Optimization (검색 엔진 최적화)  
b) Server Engine Operation  
c) Site Engine Optimization  
d) Search Error Operation

---

**Q2. 검색 엔진에게 페이지 목록을 알려주는 파일은?**

a) `robots.txt`  
b) `sitemap.xml`  
c) `index.html`  
d) `pages.json`

---

**Q3. robots.txt의 역할은?**

a) 페이지 제목 설정  
b) 검색 엔진 크롤링 규칙 설정  
c) 사이트맵 생성  
d) 페이지 속도 최적화

---

**Q4. Next.js에서 페이지 제목을 설정하려면 metadata의 어떤 속성을 사용하나요?**

a) `name`  
b) `title`  
c) `heading`  
d) `pageTitle`

---

**Q5. Open Graph 메타데이터는 주로 어디에 표시되나요?**

a) 검색 결과  
b) 브라우저 탭  
c) SNS 공유 시 미리보기  
d) 페이지 헤더

---

**Q6. 검색 엔진에게 페이지 변경 빈도를 알려주는 속성은?**

a) `frequency`  
b) `changeRate`  
c) `changeFrequency`  
d) `updateRate`

---

**Q7. sitemap.xml에서 페이지의 중요도를 나타내는 속성은? (0~1)**

a) `importance`  
b) `priority`  
c) `weight`  
d) `rank`

---

**Q8. 다음 중 SEO에 가장 중요한 것은?**

a) 화려한 디자인  
b) 의미있는 제목과 설명  
c) 많은 이미지  
d) 빠른 애니메이션

---

**Q9. Next.js에서 sitemap.xml을 자동 생성하는 파일명은?**

a) `sitemap.xml`  
b) `sitemap.js`  
c) `sitemap.ts`  
d) `app/sitemap.ts`

---

**Q10. 검색 엔진이 페이지를 수집하는 프로그램을 뭐라고 하나요?**

a) Spider  
b) Crawler (크롤러)  
c) Bot  
d) 모두 맞음

---

### 정답

1. **a)** Search Engine Optimization - 검색 엔진 최적화
2. **b)** `sitemap.xml` - 페이지 목록 제공
3. **b)** 검색 엔진 크롤링 규칙 설정
4. **b)** `title` - 페이지 제목
5. **c)** SNS 공유 시 미리보기 - Facebook, Twitter 등
6. **c)** `changeFrequency` - weekly, monthly 등
7. **b)** `priority` - 0.0 ~ 1.0 사이 값
8. **b)** 의미있는 제목과 설명 - SEO의 핵심
9. **d)** `app/sitemap.ts` - Next.js App Router에서
10. **d)** 모두 맞음 - Spider, Crawler, Bot 모두 같은 의미

---

## 레슨 8: 배포 & 분석

### 문제

**Q1. Vercel에서 프리뷰 배포하는 명령어는?**

a) `vercel`  
b) `vercel deploy`  
c) `vercel preview`  
d) `vercel test`

---

**Q2. Vercel에서 프로덕션 배포하는 명령어는?**

a) `vercel`  
b) `vercel --prod`  
c) `vercel production`  
d) `vercel deploy --prod`

---

**Q3. 환경 변수를 저장하는 파일은?**

a) `.env`  
b) `.env.local`  
c) `config.env`  
d) a와 b 모두 가능

---

**Q4. 다음 중 Git에 올리면 안 되는 파일은?**

a) `.env.local`  
b) `package.json`  
c) `README.md`  
d) `src/app/page.tsx`

---

**Q5. Next.js 프로젝트를 빌드하는 명령어는?**

a) `pnpm compile`  
b) `pnpm build`  
c) `pnpm make`  
d) `pnpm deploy`

---

**Q6. 빌드 결과를 로컬에서 실행하는 명령어는?**

a) `pnpm dev`  
b) `pnpm preview`  
c) `pnpm start`  
d) `pnpm run`

---

**Q7. Google Analytics를 연동하는 이유는?**

a) 페이지 속도 향상  
b) 사용자 방문 분석  
c) SEO 순위 향상  
d) 디자인 개선

---

**Q8. 환경 변수 이름이 NEXT_PUBLIC_으로 시작하면?**

a) 서버에서만 사용 가능  
b) 클라이언트에서도 사용 가능  
c) 보안이 강화됨  
d) 자동으로 암호화됨

---

**Q9. Vercel 배포 시 자동으로 실행되는 명령어는?**

a) `pnpm install`  
b) `pnpm build`  
c) `pnpm start`  
d) a와 b 모두

---

**Q10. 배포 전 로컬에서 꼭 확인해야 할 것은?**

a) `pnpm dev`로 개발 서버 작동 확인  
b) `pnpm build`로 빌드 성공 확인  
c) `pnpm start`로 프로덕션 모드 확인  
d) 모두 확인

---

### 정답

1. **a)** `vercel` - 기본 명령어로 프리뷰 배포
2. **b)** `vercel --prod` - 프로덕션 배포
3. **d)** 둘 다 가능 - .env와 .env.local 모두 사용
4. **a)** `.env.local` - 환경 변수는 절대 Git에 올리면 안됨
5. **b)** `pnpm build` - 프로덕션 빌드
6. **c)** `pnpm start` - 빌드 결과 실행 (Next.js)
7. **b)** 사용자 방문 분석 - 방문자 수, 페이지뷰 등 추적
8. **b)** 클라이언트에서도 사용 가능 - 브라우저에 노출됨
9. **d)** 둘 다 - 의존성 설치 후 빌드 자동 실행
10. **d)** 모두 확인 - 빌드 성공 여부가 가장 중요

---

## 레슨 9: 데이터베이스 & 인증

### 문제

**Q1. Supabase는 어떤 데이터베이스를 사용하나요?**

a) MySQL  
b) MongoDB  
c) PostgreSQL  
d) SQLite

---

**Q2. CRUD의 뜻은?**

a) Create, Read, Update, Delete  
b) Copy, Rename, Upload, Download  
c) Connect, Run, Use, Deploy  
d) Code, Review, Update, Debug

---

**Q3. Supabase에서 데이터를 조회하는 메서드는?**

a) `.get()`  
b) `.select()`  
c) `.find()`  
d) `.query()`

---

**Q4. Supabase에서 데이터를 추가하는 메서드는?**

a) `.add()`  
b) `.create()`  
c) `.insert()`  
d) `.push()`

---

**Q5. 사용자 인증 (로그인)을 영어로?**

a) Authorization  
b) Authentication  
c) Verification  
d) Identification

---

**Q6. async/await의 역할은?**

a) 비동기 코드를 동기 코드처럼 작성  
b) 코드를 빠르게 실행  
c) 에러를 방지  
d) 타입을 체크

---

**Q7. `await`는 어떤 함수 안에서만 사용 가능한가요?**

a) 모든 함수  
b) `async` 함수  
c) `sync` 함수  
d) `promise` 함수

---

**Q8. 다음 중 Supabase로 할 수 없는 것은?**

a) 사용자 로그인  
b) 데이터 저장  
c) 파일 저장  
d) 실시간 채팅  
**힌트: 모두 가능합니다!**

---

**Q9. 환경 변수에 저장하면 좋은 것은?**

a) API 키, 비밀번호  
b) 사용자 이름  
c) 페이지 제목  
d) CSS 색상

---

**Q10. `.eq('user_id', userId)`의 의미는?**

a) user_id가 userId와 같은 데이터  
b) user_id를 userId로 변경  
c) user_id를 삭제  
d) user_id를 업데이트

---

### 정답

1. **c)** PostgreSQL - 오픈소스 관계형 데이터베이스
2. **a)** Create, Read, Update, Delete - 기본 데이터 작업
3. **b)** `.select()` - 데이터 조회
4. **c)** `.insert()` - 데이터 추가
5. **b)** Authentication - 사용자 인증
6. **a)** 비동기 코드를 동기처럼 작성 - 읽기 쉽게
7. **b)** `async` 함수 - async function 안에서만 await 사용 가능
8. **트릭 문제!** 모두 가능 - Supabase는 올인원 백엔드
9. **a)** API 키, 비밀번호 - 민감한 정보
10. **a)** user_id가 userId와 같은 데이터 - WHERE 조건

---

## 레슨 10: 프로젝트 완성

### 문제

**Q1. Git에서 변경사항을 스테이징하는 명령어는?**

a) `git stage .`  
b) `git add .`  
c) `git commit .`  
d) `git push .`

---

**Q2. Git에서 변경사항을 저장(커밋)하는 명령어는?**

a) `git save`  
b) `git commit -m "메시지"`  
c) `git push`  
d) `git add`

---

**Q3. GitHub에 코드를 업로드하는 명령어는?**

a) `git upload`  
b) `git send`  
c) `git push`  
d) `git deploy`

---

**Q4. GitHub에서 코드를 다운로드하는 명령어는?**

a) `git download`  
b) `git pull`  
c) `git clone`  
d) b와 c 모두 상황에 따라 사용

---

**Q5. 커밋 메시지 "feat:"의 의미는?**

a) 수정  
b) 새 기능  
c) 버그 수정  
d) 문서 변경

---

**Q6. 커밋 메시지 "fix:"의 의미는?**

a) 수정  
b) 새 기능  
c) 버그 수정  
d) 문서 변경

---

**Q7. README.md 파일의 역할은?**

a) 프로젝트 설명서  
b) 설정 파일  
c) 데이터 저장  
d) 코드 실행

---

**Q8. 오픈소스 프로젝트에서 LICENSE 파일은 무엇을 정의하나요?**

a) 프로젝트 이름  
b) 사용 권한  
c) 코드 작성자  
d) 설치 방법

---

**Q9. CHANGELOG.md 파일의 용도는?**

a) 버전별 변경 이력 기록  
b) 에러 로그 저장  
c) 사용자 피드백  
d) 코드 주석

---

**Q10. 포트폴리오에 프로젝트를 추가할 때 꼭 포함해야 할 것은?**

a) 배포된 URL  
b) GitHub 저장소 링크  
c) 사용한 기술 스택  
d) 모두 포함

---

### 정답

1. **b)** `git add .` - 변경사항 스테이징
2. **b)** `git commit -m "메시지"` - 커밋
3. **c)** `git push` - 원격 저장소로 푸시
4. **d)** 둘 다 상황에 따라 - clone(최초), pull(업데이트)
5. **b)** 새 기능 - feature
6. **c)** 버그 수정 - fix bug
7. **a)** 프로젝트 설명서 - 프로젝트 소개, 설치, 사용법
8. **b)** 사용 권한 - MIT, Apache 등 라이선스
9. **a)** 버전별 변경 이력 기록 - v1.0.0, v1.1.0 등
10. **d)** 모두 포함 - 실제 작동 URL, 코드, 기술 스택 모두 중요

---

## 🎓 종합 퀴즈 (보너스)

### 문제

**Q1. 웹사이트를 만드는 3가지 기술은?**

a) HTML, CSS, Python  
b) HTML, CSS, JavaScript  
c) HTML, Java, CSS  
d) XML, CSS, JavaScript

---

**Q2. pnpm이 npm보다 빠른 이유는?**

a) 새로운 언어로 작성됨  
b) 패키지를 한 곳에 저장하고 링크만 생성  
c) 서버가 더 빠름  
d) 압축 알고리즘이 좋음

---

**Q3. 다음 중 올바른 개발 워크플로우는?**

a) 빌드 → 개발 → 배포  
b) 배포 → 개발 → 빌드  
c) 개발 → 빌드 → 배포  
d) 개발 → 배포 → 빌드

---

**Q4. localhost:3000은 무엇을 의미하나요?**

a) 인터넷 주소  
b) 내 컴퓨터의 3000번 포트  
c) 서버 IP 주소  
d) GitHub 주소

---

**Q5. node_modules 폴더를 Git에 올리지 않는 이유는?**

a) 용량이 너무 큼  
b) package.json으로 재생성 가능  
c) 보안 문제  
d) a와 b

---

**Q6. TypeScript의 가장 큰 장점은?**

a) 실행 속도가 빠름  
b) 타입 체크로 버그 예방  
c) 코드가 짧아짐  
d) 브라우저 호환성

---

**Q7. "import"와 "export"는 무엇을 위한 키워드인가요?**

a) 데이터 백업  
b) 모듈 시스템 (코드 분리)  
c) 파일 이동  
d) 데이터 변환

---

**Q8. Flexbox는 주로 무엇을 위해 사용하나요?**

a) 색상 변경  
b) 레이아웃 배치  
c) 애니메이션  
d) 폰트 설정

---

**Q9. 반응형 디자인이란?**

a) 버튼을 누르면 반응하는 디자인  
b) 화면 크기에 따라 레이아웃이 변하는 디자인  
c) 빠르게 반응하는 디자인  
d) 애니메이션이 많은 디자인

---

**Q10. 다음 중 프로덕션 환경에서 실행되면 안 되는 코드는?**

a) `console.log('디버깅 메시지')`  
b) `const result = calculate()`  
c) `return data`  
d) `setResult(value)`

---

### 정답

1. **b)** HTML, CSS, JavaScript - 웹의 3대 기술
2. **b)** 패키지를 한 곳에 저장하고 링크만 생성 - 중복 제거
3. **c)** 개발 → 빌드 → 배포 - 정상적인 순서
4. **b)** 내 컴퓨터의 3000번 포트 - localhost = 내 컴퓨터
5. **d)** a와 b - 용량 크고 재생성 가능
6. **b)** 타입 체크로 버그 예방 - 컴파일 시점에 에러 발견
7. **b)** 모듈 시스템 - 코드를 파일별로 분리하고 연결
8. **b)** 레이아웃 배치 - 요소 정렬과 배치
9. **b)** 화면 크기에 따라 레이아웃이 변함 - 모바일/데스크톱 대응
10. **a)** `console.log()` - 디버깅용, 프로덕션에서는 제거 권장

---

## 📊 점수 평가

### 레슨별 채점

```
각 레슨 10문제 × 10점 = 100점 만점

90점 이상: 🏆 완벽 이해! 다음 레슨으로
70-89점:  ✅ 잘했어요! 틀린 문제 복습하기
50-69점:  📚 부족해요. 해당 레슨 다시 학습
50점 미만: 🔄 처음부터 다시 공부하기
```

### 전체 채점

```
총 100문제 × 1점 = 100점 만점

90점 이상: 🎉 웹 개발 기초 마스터!
70-89점:  💪 조금만 더! 틀린 부분 복습
50-69점:  📖 기초 개념 다시 학습 필요
50점 미만: 🌱 천천히 처음부터 다시
```

---

## 💡 퀴즈 활용 방법

### 학습 전 (사전 테스트)

```bash
1. 레슨 학습 전 퀴즈 먼저 풀기
2. 맞힌 문제: 이미 아는 개념
3. 틀린 문제: 집중해서 학습할 부분
4. 레슨 학습 시작
```

### 학습 후 (복습 테스트)

```bash
1. 레슨 학습 완료
2. 퀴즈 풀어보기
3. 틀린 문제: 해당 개념 다시 복습
4. 100% 맞을 때까지 반복
```

### 전체 복습

```bash
1. 모든 레슨 완료 후
2. 전체 퀴즈 다시 풀기
3. 약한 부분 파악
4. 해당 레슨 재학습
```

---

## 🎯 개념 강화 학습법

### 틀린 문제 복습하기

```javascript
// 예시: Q3번 틀렸다면

// 1. 정답 확인
정답 = "b) getMonth()는 0부터 시작";

// 2. 관련 가이드 찾기
가이드 = "WEB_BASICS_GUIDE.md";
섹션 = "5.8 Date 객체";

// 3. 코드로 직접 테스트
const date = new Date('2025-01-15');
console.log(date.getMonth());  // 0 (1월)
console.log(date.getMonth() + 1);  // 1 (보정)

// 4. 문제 다시 풀기
다시풀기();
```

### 암기 카드 만들기

```
앞면: getMonth()의 반환값은?
뒷면: 0~11 (0=1월, 11=12월)

앞면: Math.floor()의 역할은?
뒷면: 소수점 내림 (4.9 → 4)

앞면: pnpm의 장점은?
뒷면: npm보다 2-3배 빠르고 용량 적음
```

---

## 📚 학습 자료 연계

### 틀린 문제별 참고 자료

**HTML 관련 틀렸다면:**
→ `WEB_BASICS_GUIDE.md` - 섹션 3 (HTML 기초 명령어)
→ `LESSONS_COMPLETE_GUIDE.md` - 레슨 1

**JavaScript 관련 틀렸다면:**
→ `WEB_BASICS_GUIDE.md` - 섹션 5 (JavaScript 기초 명령어)
→ `LESSONS_COMPLETE_GUIDE.md` - 레슨 2

**CSS 관련 틀렸다면:**
→ `WEB_BASICS_GUIDE.md` - 섹션 4 (CSS 기초 명령어)
→ `LESSONS_COMPLETE_GUIDE.md` - 레슨 3

**터미널 명령어 틀렸다면:**
→ `WEB_DEVELOPMENT_COMMANDS.md` - 용어 설명 섹션

---

## 🏆 레벨업 체크리스트

```
□ 레슨 1 퀴즈 10/10 ✅
□ 레슨 2 퀴즈 10/10 ✅
□ 레슨 3 퀴즈 10/10 ✅
□ 레슨 4 퀴즈 10/10 ✅
□ 레슨 5 퀴즈 10/10 ✅
□ 레슨 6 퀴즈 10/10 ✅
□ 레슨 7 퀴즈 10/10 ✅
□ 레슨 8 퀴즈 10/10 ✅
□ 레슨 9 퀴즈 10/10 ✅
□ 레슨 10 퀴즈 10/10 ✅

모두 완료 시:
🎉 웹 개발 기초 개념 마스터!
🚀 실전 프로젝트 준비 완료!
```

---

## 💪 추가 학습 문제

### 실전 응용 문제

**Q1. 연봉 5,000만원의 월급은? (소수점 버림)**

<details>
<summary>정답 보기</summary>

4,166,666원
```javascript
Math.floor(50000000 / 12)
```
</details>

---

**Q2. 2024년 1월 1일부터 100일 후는?**

<details>
<summary>정답 보기</summary>

2024년 4월 10일
```javascript
const start = new Date('2024-01-01');
start.setDate(start.getDate() + 100);
```
</details>

---

**Q3. 다음 코드의 출력은?**
```javascript
const nums = [1, 2, 3];
const result = nums.map(n => n * 2);
console.log(result);
```

<details>
<summary>정답 보기</summary>

`[2, 4, 6]`
- map()은 배열의 각 요소를 변환
</details>

---

**Q4. 다음 CSS의 결과는?**
```css
.container {
  display: flex;
  gap: 20px;
}
```

<details>
<summary>정답 보기</summary>

자식 요소들이 가로로 나란히 배치되고, 요소 간 간격은 20px
</details>

---

**Q5. 다음 코드의 문제점은?**
```javascript
const age = "25";
const nextAge = age + 1;
console.log(nextAge);
```

<details>
<summary>정답 보기</summary>

출력: "251" (문자열 연결)
수정: `const age = parseInt("25")`
</details>

---

## 🎯 학습 목표 달성도

### 기초 개념 (레슨 1-4)
```
□ HTML 구조 이해
□ CSS 선택자 이해
□ JavaScript 변수/함수 이해
□ DOM 조작 이해
□ 이벤트 리스너 이해
```

### 중급 개념 (레슨 5-6)
```
□ 모듈 시스템 이해
□ TypeScript 타입 이해
□ 프레임워크 개념 이해
□ 컴포넌트 개념 이해
```

### 고급 개념 (레슨 7-10)
```
□ SEO 개념 이해
□ 배포 프로세스 이해
□ 데이터베이스 개념 이해
□ Git 워크플로우 이해
```

---

## 📝 오답노트 템플릿

퀴즈를 풀면서 틀린 문제를 정리하세요!

```markdown
### 틀린 문제 정리

**레슨 2 - Q3**
- 문제: getMonth()의 반환값
- 내 답: c) 1월
- 정답: b) 0부터 시작 (0=1월)
- 이유: JavaScript Date는 월을 0부터 시작
- 복습: WEB_BASICS_GUIDE.md - Date 객체 섹션
- 재시도: ✅ 정답!

**레슨 4 - Q7**
- 문제: toLocaleString()의 역할
- 내 답: a) 
- 정답: c) 천단위 콤마
- 이유: 숫자를 현지 형식으로 변환
- 복습: LESSONS_COMPLETE_GUIDE.md - 레슨 4
- 재시도: ✅ 정답!
```

---

## 🎉 완료 후 다음 단계

### 100문제 모두 맞췄다면

```
1. 축하합니다! 기초 개념 완벽 이해! 🎉

2. 다음 단계:
   - 실제 프로젝트 만들어보기
   - 새로운 계산기 추가해보기
   - 포트폴리오 프로젝트 시작

3. 추가 학습:
   - React 심화
   - 데이터베이스 고급
   - 성능 최적화
```

### 90점 이상이라면

```
1. 거의 다 이해했습니다! 👏

2. 약한 부분 집중 학습:
   - 틀린 문제 관련 레슨 복습
   - 해당 가이드 정독
   - 코드로 직접 실습

3. 재시도:
   - 1주일 후 다시 풀어보기
   - 100점 목표!
```

### 70-89점이라면

```
1. 기본은 이해했어요! 📚

2. 추가 학습 필요:
   - 틀린 문제가 많은 레슨 다시 학습
   - 가이드 문서 정독
   - 실습 프로젝트 다시 해보기

3. 1주일 후 재도전!
```

### 70점 미만이라면

```
1. 괜찮아요! 처음이니까요 🌱

2. 학습 전략:
   - 레슨 1부터 천천히 다시
   - 코드를 직접 타이핑하며 학습
   - 하나씩 이해하며 진행

3. 2주 후 재도전!
```

---

## 🔄 반복 학습 계획

### 1주차
```
월: 레슨 1-2 퀴즈 풀기
화: 틀린 문제 복습
수: 레슨 3-4 퀴즈 풀기
목: 틀린 문제 복습
금: 레슨 5-6 퀴즈 풀기
토: 레슨 7-10 퀴즈 풀기
일: 전체 복습
```

### 2주차
```
월: 전체 퀴즈 다시 풀기
화: 약한 부분 집중 학습
수: 실전 응용 문제 풀기
목: 오답노트 정리
금: 최종 점검
토-일: 프로젝트 실습
```

---

**🎓 퀴즈를 통해 개념을 탄탄하게 다지세요!**

개념 이해 → 퀴즈 풀기 → 복습 → 완벽 이해!

한 문제씩 천천히 풀고, 틀린 문제는 반드시 복습하세요.
100문제 모두 맞출 때까지 화이팅! 💪

