# Lesson 06: Next.js 프로젝트 - Easy Count

## 🚀 실행 방법

### 1. 의존성 설치
```bash
cd lesson-06
npm install
```

### 2. 개발 서버 실행
```bash
npm run dev
```

브라우저에서 http://localhost:3000 열기

### 3. 프로덕션 빌드
```bash
npm run build
npm start
```

## 📚 프로젝트 구조

```
lesson-06/
├── src/
│   ├── app/                    # App Router 페이지
│   │   ├── layout.tsx         # 루트 레이아웃
│   │   ├── page.tsx           # 홈페이지
│   │   ├── date/
│   │   │   ├── dday/          # 디데이 계산기
│   │   │   └── birthday/      # 생일 계산기
│   │   ├── salary/            # 연봉 계산기
│   │   └── shopping/          # 쇼핑 계산기
│   ├── components/            # React 컴포넌트
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   └── calculators/       # 계산기 컴포넌트
│   ├── lib/                   # 비즈니스 로직
│   │   ├── calculations/      # 계산 함수
│   │   └── utils/            # 유틸리티 함수
│   └── types/                 # TypeScript 타입
└── public/                    # 정적 파일
```

## ✨ 주요 기능

### 💕 커플 디데이 계산기
- 100일, 200일, 500일, 1000일 기념일 계산
- D-day 또는 지난 일수 표시
- 예쁜 그라데이션 카드 UI

### 🎂 살아온 날 계산기
- 총 일수, 주수, 개월수, 년수 계산
- 다음 생일까지 남은 일수
- 컬러풀한 통계 표시

### 💰 연봉 실수령액 계산기
- 2025년 최신 세율 적용
- 4대보험 자동 계산 (국민연금, 건강보험, 장기요양, 고용보험)
- 소득세 누진세율 적용
- 부양가족 수에 따른 공제
- 월/연 실수령액 표시

### 🛍️ 쇼핑 계산기
- **할인율 계산기**: 원가와 할인율로 최종 가격 계산
- **부가세 계산기**: 공급가액 ↔ 부가세 포함 금액 변환

## 🛠️ 기술 스택

- **Next.js 14** - App Router 사용
- **TypeScript** - 타입 안정성
- **Tailwind CSS** - 유틸리티 기반 스타일링
- **React 18** - 최신 React 기능

## 📖 Next.js 핵심 개념

### 1. 파일 기반 라우팅
```
app/page.tsx              → /
app/date/dday/page.tsx    → /date/dday
app/salary/page.tsx       → /salary
```

### 2. 서버 vs 클라이언트 컴포넌트
```typescript
// 서버 컴포넌트 (기본)
export default function Page() { ... }

// 클라이언트 컴포넌트 (상태 관리 필요)
'use client'
export default function Calculator() { ... }
```

### 3. TypeScript 타입 시스템
```typescript
// 타입 정의
interface DDayResult {
  day100: Date;
  daysTo100: number;
}

// 타입 사용
const result: DDayResult = calculateDDay(date);
```

### 4. Tailwind CSS
```typescript
// 유틸리티 클래스로 빠른 스타일링
<div className="bg-indigo-600 text-white px-4 py-2 rounded-lg 
               hover:bg-indigo-700 transition-colors">
  버튼
</div>
```

## 🎨 디자인 특징

- **그라데이션 배경**: 각 계산기마다 고유한 색상
- **반응형 디자인**: 모바일/태블릿/데스크톱 대응
- **부드러운 애니메이션**: hover, transition 효과
- **직관적인 UI**: 사용자 친화적인 인터페이스

## 📝 학습 포인트

### TypeScript
- 인터페이스로 타입 정의
- 타입 안정성으로 버그 예방
- IDE 자동완성 지원

### Next.js App Router
- 파일 시스템 기반 라우팅
- 서버/클라이언트 컴포넌트 분리
- 레이아웃 공유

### 컴포넌트 구조
- 재사용 가능한 컴포넌트 설계
- 비즈니스 로직과 UI 분리
- Props를 통한 데이터 전달

## 🔍 파일 설명

### 타입 정의 (`src/types/index.ts`)
모든 계산 결과의 TypeScript 타입 정의

### 계산 로직 (`src/lib/calculations/`)
- `date.ts`: 날짜 계산
- `salary.ts`: 연봉/세금 계산
- `discount.ts`: 할인 계산
- `vat.ts`: 부가세 계산

### 유틸리티 (`src/lib/utils/format.ts`)
숫자, 통화, 날짜 포맷팅 함수

### 컴포넌트 (`src/components/`)
- `Header.tsx`: 상단 헤더
- `Footer.tsx`: 하단 푸터
- `Navigation.tsx`: 네비게이션 메뉴
- `calculators/`: 각 계산기 컴포넌트

### 페이지 (`src/app/`)
각 라우트별 페이지 컴포넌트

## 🚀 배포

### Vercel (권장)
```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

### 다른 플랫폼
```bash
# 빌드
npm run build

# 시작
npm start
```

## 📚 다음 단계

Lesson 07에서는 SEO 최적화와 추가 계산기를 구현합니다!

## 💡 개발 팁

1. **타입 체크**: `npm run build`로 TypeScript 오류 확인
2. **핫 리로드**: 코드 수정 시 자동 새로고침
3. **Tailwind IntelliSense**: VSCode 확장 설치 추천


