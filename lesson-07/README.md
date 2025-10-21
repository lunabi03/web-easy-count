# Lesson 07: SEO 최적화 + BMI 계산기

## 🚀 실행 방법

### 1. 의존성 설치 (이미 설치됨)
```bash
cd lesson-07
npm install
```

### 2. 개발 서버 실행
```bash
npm run dev
```

브라우저에서 http://localhost:3000 열기

### 3. SEO 확인
- http://localhost:3000/sitemap.xml - Sitemap
- http://localhost:3000/robots.txt - Robots.txt
- 페이지 소스 보기 (Ctrl+U) - 메타 태그 확인

## ✨ 새로운 기능

### 💪 BMI 계산기 (/health/bmi)
- 키와 몸무게 입력
- BMI 자동 계산
- 건강 상태 분류 (저체중/정상/과체중/비만)
- 적정 체중 범위 제공
- 시각화된 BMI 바
- 맞춤형 건강 조언

### 🔍 SEO 최적화

#### 1. 메타 태그
- 모든 페이지에 고유한 title, description
- Open Graph 태그 (SNS 공유 최적화)
- Twitter Card 태그
- Keywords 최적화

#### 2. 구조화된 데이터 (JSON-LD)
- 홈페이지: WebApplication 스키마
- 각 계산기: SoftwareApplication 스키마
- 검색 엔진 이해도 향상

#### 3. sitemap.xml
- 모든 페이지 URL 포함
- 우선순위 및 업데이트 주기 설정
- 검색 엔진 크롤링 최적화

#### 4. robots.txt
- 크롤링 허용/거부 설정
- Sitemap 위치 명시

## 📊 SEO 메타데이터

### 홈페이지
```typescript
title: 'Easy Count - 생활 계산기'
description: '날짜, 급여, 할인율, BMI 등 일상생활에 필요한 모든 계산을 한 곳에서!'
```

### 100일 계산기
```typescript
title: '100일 계산기 - 커플 디데이 기념일 계산'
description: '연애 시작일을 입력하면 100일, 200일, 500일, 1000일 기념일 날짜를 자동으로 계산해드립니다.'
```

### 연봉 계산기
```typescript
title: '연봉 실수령액 계산기 - 4대보험·세금 제외 월급 계산'
description: '연봉을 입력하면 4대보험, 소득세를 제외한 실제 월 수령액을 정확하게 계산해드립니다. 2025년 최신 세율 적용.'
```

### BMI 계산기
```typescript
title: 'BMI 계산기 - 체질량지수 및 적정 체중 계산'
description: '키와 몸무게를 입력하면 BMI 지수와 건강 상태를 확인할 수 있습니다. 적정 체중 범위도 함께 제공합니다.'
```

## 🎯 구현된 모든 계산기

1. **💕 커플 디데이** (`/date/dday`)
   - 100일, 200일, 500일, 1000일 계산

2. **🎂 살아온 날** (`/date/birthday`)
   - 총 일수, 주수, 개월수, 년수 계산

3. **💰 연봉 계산기** (`/salary`)
   - 4대보험, 소득세 계산
   - 월/연 실수령액

4. **🛍️ 쇼핑 계산기** (`/shopping`)
   - 할인율 계산
   - 부가세 계산

5. **💪 BMI 계산기** (`/health/bmi`) ⭐ NEW!
   - BMI 지수 계산
   - 건강 상태 분류
   - 적정 체중 범위
   - 시각화 차트

## 📈 SEO 성과 측정 방법

### Google Search Console
1. https://search.google.com/search-console 접속
2. 속성 추가 → URL 입력
3. `sitemap.xml` 제출
4. 색인 생성 요청

### 확인 사항
- 검색 노출 수
- 클릭률 (CTR)
- 평균 게재 순위
- 색인 생성 상태

## 🔍 메타 태그 확인

### 브라우저에서 확인
```html
<!-- 페이지 소스 보기 (Ctrl+U) -->
<meta name="description" content="...">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    ...
  }
</script>
```

### Chrome DevTools
1. F12 → Elements 탭
2. `<head>` 섹션 확인
3. 메타 태그 검증

## 🌐 페이지 경로

- **홈**: http://localhost:3000
- **커플 디데이**: http://localhost:3000/date/dday
- **살아온 날**: http://localhost:3000/date/birthday
- **연봉 계산기**: http://localhost:3000/salary
- **쇼핑 계산기**: http://localhost:3000/shopping
- **BMI 계산기**: http://localhost:3000/health/bmi ⭐ NEW!
- **Sitemap**: http://localhost:3000/sitemap.xml
- **Robots**: http://localhost:3000/robots.txt

## 🎨 BMI 계산기 특징

### 시각화
- 📊 BMI 값에 따른 색상 구분
- 📈 시각적 바 차트
- 🎯 현재 위치 표시

### 건강 분류 (WHO 아시아인 기준)
- 저체중: < 18.5 (파란색)
- 정상: 18.5 ~ 23 (초록색)
- 과체중: 23 ~ 25 (노란색)
- 비만: ≥ 25 (빨간색)

### 제공 정보
- BMI 수치
- 건강 상태 분류
- 적정 체중 범위
- 증량/감량 권장량
- 맞춤형 건강 조언

## 📚 기술 스택

- **Next.js 14** - App Router, Metadata API
- **TypeScript** - 타입 안정성
- **Tailwind CSS** - 스타일링
- **SEO** - Open Graph, JSON-LD, Sitemap
- **React** - 컴포넌트

## 🎓 학습 포인트

### SEO 최적화
- ✅ 메타 태그 최적화
- ✅ Open Graph Protocol
- ✅ JSON-LD 구조화된 데이터
- ✅ Sitemap & Robots.txt
- ✅ 검색 엔진 최적화

### BMI 계산
- ✅ WHO 아시아인 기준 적용
- ✅ 건강 상태 분류 로직
- ✅ 적정 체중 범위 계산
- ✅ 시각화 구현

## ⏭️ 다음 단계

Lesson 08에서는 Vercel에 실제 배포하고 GPA 계산기를 추가합니다!

## 💡 개발 팁

1. **SEO 검증 도구**
   - Google Search Console
   - Bing Webmaster Tools
   - Schema.org Validator

2. **메타 태그 테스트**
   - Facebook Sharing Debugger
   - Twitter Card Validator
   - LinkedIn Post Inspector

3. **성능 측정**
   - Google PageSpeed Insights
   - Lighthouse (Chrome DevTools)
