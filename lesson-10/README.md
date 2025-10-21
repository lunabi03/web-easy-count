# Easy Count - 생활 계산기

일상생활에 필요한 다양한 계산을 한 곳에서!

[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black)](https://vercel.com)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Backend-green)](https://supabase.com/)

## 🚀 기능

- 💕 **커플 디데이** - 100일, 500일, 1000일 기념일 계산
- 🎂 **살아온 날** - 생년월일로 총 일수 계산
- 💰 **연봉 계산기** - 4대보험, 세금 제외 실수령액
- 🛍️ **쇼핑 계산기** - 할인율, 부가세 계산
- 💪 **BMI 계산기** - 체질량지수 및 적정 체중
- 📚 **학점 계산기** - GPA 평점 계산

## ✨ 주요 특징

- 🔐 **회원가입/로그인** - Supabase Auth
- 💾 **계산 기록 저장** - PostgreSQL 데이터베이스
- 📱 **반응형 디자인** - 모바일/태블릿/데스크톱 완벽 대응
- 🔍 **SEO 최적화** - 검색 엔진 노출 극대화
- ⚡ **빠른 성능** - Next.js 14 App Router
- 🎨 **아름다운 UI** - Tailwind CSS

## 🛠️ 기술 스택

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Database**: [Supabase](https://supabase.com/) (PostgreSQL)
- **Authentication**: Supabase Auth
- **Deployment**: [Vercel](https://vercel.com/)
- **CI/CD**: GitHub Actions

## 📦 설치 및 실행

### 필수 요구사항
- Node.js 18+
- npm 또는 pnpm

### 설치

```bash
# 저장소 클론
git clone https://github.com/your-username/easy-count.git
cd easy-count

# 의존성 설치
npm install

# 환경 변수 설정
cp .env.example .env.local
# .env.local 파일을 열어 Supabase 키 등 입력

# 개발 서버 실행
npm run dev
```

브라우저에서 http://localhost:3000 열기

## 🌍 환경 변수

`.env.local` 파일에 다음 내용 추가:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

# Site
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Google Analytics (선택)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 📝 스크립트

- `npm run dev` - 개발 서버 실행 (http://localhost:3000)
- `npm run build` - 프로덕션 빌드
- `npm run start` - 프로덕션 서버 실행
- `npm run lint` - ESLint 검사

## 🗄️ 데이터베이스 설정

Supabase SQL Editor에서 다음 쿼리 실행:

```sql
-- 계산 기록 테이블 생성
CREATE TABLE calculations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  calculator_type VARCHAR(50) NOT NULL,
  title VARCHAR(255),
  input_data JSONB NOT NULL,
  result_data JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL
);

-- 인덱스 생성
CREATE INDEX idx_calculations_user_id ON calculations(user_id);
CREATE INDEX idx_calculations_type ON calculations(calculator_type);
CREATE INDEX idx_calculations_created_at ON calculations(created_at DESC);

-- Row Level Security 활성화
ALTER TABLE calculations ENABLE ROW LEVEL SECURITY;

-- RLS 정책
CREATE POLICY "Users can view own calculations"
  ON calculations FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own calculations"
  ON calculations FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own calculations"
  ON calculations FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own calculations"
  ON calculations FOR DELETE
  USING (auth.uid() = user_id);
```

## 🚀 배포

### Vercel에 배포

1. GitHub 저장소에 코드 푸시
2. [Vercel](https://vercel.com)에서 프로젝트 Import
3. 환경 변수 설정
4. Deploy 클릭!

배포 URL: https://your-project.vercel.app

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Commit 컨벤션

```bash
feat: 새로운 기능 추가
fix: 버그 수정
docs: 문서 변경
style: 코드 포맷팅
refactor: 리팩토링
test: 테스트 추가
chore: 빌드, 설정 변경
```

## 📁 프로젝트 구조

```
lesson-10/
├── .github/
│   └── workflows/
│       └── ci.yml              # GitHub Actions CI/CD
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── auth/              # 인증 페이지
│   │   ├── history/           # 계산 기록
│   │   ├── date/              # 날짜 계산기
│   │   ├── salary/            # 연봉 계산기
│   │   ├── shopping/          # 쇼핑 계산기
│   │   ├── health/bmi/        # BMI 계산기
│   │   └── academic/gpa/      # GPA 계산기
│   ├── components/            # React 컴포넌트
│   │   ├── AuthProvider.tsx  # 인증 상태 관리
│   │   ├── calculators/      # 계산기 컴포넌트
│   │   └── ...
│   ├── lib/
│   │   ├── calculations/     # 계산 로직
│   │   ├── database/         # DB 함수
│   │   ├── supabase/         # Supabase 클라이언트
│   │   └── utils/           # 유틸리티
│   └── types/               # TypeScript 타입
├── package.json
├── tsconfig.json
└── tailwind.config.ts
```

## 📱 페이지 경로

- `/` - 홈 (모든 계산기 목록)
- `/date/dday` - 커플 디데이 계산기
- `/date/birthday` - 살아온 날 계산기
- `/salary` - 연봉 실수령액 계산기
- `/shopping` - 쇼핑 계산기 (할인/부가세)
- `/health/bmi` - BMI 계산기
- `/academic/gpa` - 학점 계산기
- `/auth` - 로그인/회원가입
- `/history` - 계산 기록 (로그인 필요)

## 🔐 보안

- ✅ Row Level Security (RLS) 활성화
- ✅ 환경 변수로 API 키 관리
- ✅ .gitignore에 민감 정보 제외
- ✅ HTTPS 강제 (Vercel 자동)
- ✅ 보안 헤더 설정

## 📄 라이선스

MIT License

## 👤 작성자

웹 개발 학습 프로젝트

## 🙏 감사의 말

- [Next.js](https://nextjs.org/) - React 프레임워크
- [Supabase](https://supabase.com/) - 백엔드 서비스
- [Tailwind CSS](https://tailwindcss.com/) - CSS 프레임워크
- [Vercel](https://vercel.com/) - 배포 플랫폼

## 📚 학습 자료

이 프로젝트는 Lesson 01부터 Lesson 10까지의 단계별 학습 과정을 통해 완성되었습니다:

- **Lesson 01-02**: HTML + JavaScript 기초
- **Lesson 03-04**: CSS 디자인 + 복잡한 계산 로직
- **Lesson 05**: Vite 개발 환경 + 모듈 시스템
- **Lesson 06**: Next.js + TypeScript + Tailwind CSS
- **Lesson 07**: SEO 최적화 + BMI 계산기
- **Lesson 08**: Vercel 배포 + GPA 계산기
- **Lesson 09**: Supabase 인증 + 데이터베이스
- **Lesson 10**: GitHub + CI/CD 파이프라인

---

**⭐ 이 프로젝트가 도움이 되었다면 Star를 눌러주세요!**
