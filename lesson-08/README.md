# Lesson 08: Vercel 배포 + 학점 계산기 (GPA)

## 🚀 실행 방법

### 1. 의존성 설치
```bash
cd lesson-08
npm install
```

### 2. 환경 변수 설정
`.env.example` 파일을 복사하여 `.env.local` 생성

### 3. 개발 서버 실행
```bash
npm run dev
```

브라우저에서 http://localhost:3000 열기

### 4. 프로덕션 빌드
```bash
npm run build
npm start
```

---

## ✨ 새로운 기능

### 📚 학점 계산기 (GPA) - NEW!

**기능:**
- 과목별 학점과 성적 입력
- 평균 학점(GPA) 자동 계산
- 신청 학점 / 취득 학점 / 총 평점 표시
- 등급 분류 (A+, A, B+, B, C+, C, D+, D, F)

**학점 체계:**
- A+ (4.5) - 최우수
- A (4.0) - 우수
- B+ (3.5) - 양호
- B (3.0) - 보통
- C+ (2.5) - 미흡
- C (2.0) - 부족
- D+ (1.5) - 낙제 직전
- D (1.0) - 낙제
- F (0.0) - 낙제
- P (Pass) - 평점 미반영

**사용 예시:**
```
과목1: 자료구조 (3학점, A+) → 13.5점
과목2: 알고리즘 (3학점, A) → 12.0점
과목3: 운영체제 (3학점, B+) → 10.5점

총 신청 학점: 9학점
총 평점: 36.0점
평균 학점(GPA): 4.0 (A 등급)
```

---

## 🌍 Vercel 배포

### 배포 준비 완료!

이 프로젝트는 Vercel에 바로 배포할 수 있도록 준비되었습니다.

**배포 방법:**
1. GitHub에 코드 푸시
2. Vercel에서 Import
3. 환경 변수 설정
4. Deploy 클릭!

자세한 가이드는 `DEPLOYMENT.md` 파일을 참고하세요.

---

## 📁 프로젝트 구조

```
lesson-08/
├── .env.example              # 환경 변수 예시
├── .env.local               # 로컬 환경 변수 (Git 제외)
├── vercel.json              # Vercel 설정
├── DEPLOYMENT.md            # 배포 가이드
├── src/
│   ├── app/
│   │   ├── layout.tsx       # 루트 레이아웃 (Analytics 추가)
│   │   ├── page.tsx         # 홈 (6개 계산기)
│   │   ├── sitemap.ts       # Sitemap 생성
│   │   ├── robots.ts        # Robots.txt 생성
│   │   ├── date/           # 날짜 계산기
│   │   ├── salary/         # 연봉 계산기
│   │   ├── shopping/       # 쇼핑 계산기
│   │   ├── health/bmi/     # BMI 계산기
│   │   └── academic/gpa/   # GPA 계산기 ⭐ NEW!
│   ├── components/
│   │   ├── Analytics.tsx   # Google Analytics ⭐ NEW!
│   │   ├── calculators/
│   │   │   └── GPACalculator.tsx ⭐ NEW!
│   └── lib/calculations/
│       └── academic.ts     # GPA 계산 로직 ⭐ NEW!
└── ...
```

---

## 🎯 모든 계산기 (총 6개)

1. **💕 커플 디데이** - 100일, 500일, 1000일 기념일
2. **🎂 살아온 날** - 총 일수, 주수, 개월수, 년수
3. **💰 연봉 계산기** - 4대보험, 세금, 실수령액
4. **🛍️ 쇼핑 계산기** - 할인율, 부가세
5. **💪 BMI 계산기** - 체질량지수, 건강 상태
6. **📚 학점 계산기** - GPA 평균 학점 ⭐ NEW!

---

## 🌐 페이지 경로

- **홈**: http://localhost:3000
- **커플 디데이**: /date/dday
- **살아온 날**: /date/birthday
- **연봉 계산기**: /salary
- **쇼핑 계산기**: /shopping
- **BMI 계산기**: /health/bmi
- **GPA 계산기**: /academic/gpa ⭐ NEW!

### SEO 확인
- **Sitemap**: /sitemap.xml
- **Robots**: /robots.txt

---

## 🔧 환경 변수

### `.env.example` (Git에 커밋)
템플릿 파일, 어떤 환경 변수가 필요한지 보여줌

### `.env.local` (Git 제외)
실제 개발 환경 변수

### Vercel 환경 변수
프로덕션 배포 시 Vercel 대시보드에서 설정

---

## 📊 성능 최적화

### next.config.mjs 설정
- ✅ 이미지 최적화 (WebP, AVIF)
- ✅ 압축 활성화
- ✅ SWC 미니파이
- ✅ 보안 헤더 설정

### 보안 헤더
- `X-DNS-Prefetch-Control`: DNS 프리페치
- `X-Frame-Options`: 클릭재킹 방지
- `X-Content-Type-Options`: MIME 스니핑 방지
- `Referrer-Policy`: 리퍼러 정책

---

## 📈 Google Analytics (선택사항)

### Step 1: GA4 계정 생성
1. https://analytics.google.com 접속
2. 속성 만들기
3. 측정 ID 복사 (예: G-XXXXXXXXXX)

### Step 2: 환경 변수 설정
```
NEXT_PUBLIC_GA_ID=G-YOUR-ACTUAL-ID
```

### Step 3: 확인
- 실시간 보고서에서 방문자 확인
- 이벤트 추적 확인

---

## 🎓 학습한 내용

### Vercel 배포
- ✅ GitHub 연동 배포
- ✅ 자동 빌드 & 배포
- ✅ 환경 변수 관리
- ✅ 프로덕션 최적화

### GPA 계산기
- ✅ 학점 체계 이해
- ✅ 가중 평균 계산
- ✅ 동적 폼 관리 (과목 추가/삭제)
- ✅ TypeScript 타입 활용

### 성능 최적화
- ✅ Next.js 설정 최적화
- ✅ 이미지 최적화
- ✅ 보안 헤더 설정

---

## 📱 배포 URL 예시

```
https://easy-count.vercel.app
https://easy-count-abc123.vercel.app
```

배포 후 이 URL로 접속하면 전 세계 어디서나 사용 가능합니다!

---

## 🚀 CI/CD 자동화

Vercel의 장점:
- 📦 Git push → 자동 배포
- 🔄 PR 생성 → 프리뷰 배포
- ✅ 빌드 실패 → 자동 롤백
- 📊 실시간 로그 확인

---

## 💡 다음 단계

Lesson 09에서는:
- Supabase 데이터베이스 연동
- 회원가입 & 로그인
- 계산 기록 저장
- 과거 기록 조회

---

## 📚 참고 자료

- [Vercel 공식 문서](https://vercel.com/docs)
- [Next.js 배포 가이드](https://nextjs.org/docs/deployment)
- [Google Search Console](https://search.google.com/search-console)
- [Google Analytics](https://analytics.google.com)
