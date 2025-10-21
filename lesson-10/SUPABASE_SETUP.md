# Supabase 설정 가이드

## 🎯 Supabase 프로젝트 생성

### Step 1: 계정 생성
1. https://supabase.com 접속
2. "Start your project" 클릭
3. GitHub 계정으로 로그인

### Step 2: 새 프로젝트 생성
1. "New project" 클릭
2. 프로젝트 정보 입력:
   - **Name**: easy-count
   - **Database Password**: 안전한 비밀번호 생성
   - **Region**: Northeast Asia (Seoul) - icn1
   - **Pricing Plan**: Free (무료)
3. "Create new project" 클릭
4. 약 2분 대기 (프로젝트 생성 중)

### Step 3: API 키 복사
1. Settings → API 메뉴
2. 복사할 내용:
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon public key**: `eyJhbGci...`

### Step 4: 환경 변수 설정

`.env.local` 파일에 추가:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...
```

---

## 🗄️ 데이터베이스 스키마 생성

### Step 1: SQL Editor 열기
1. Supabase Dashboard → SQL Editor
2. "New query" 클릭

### Step 2: 테이블 생성 쿼리 실행

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

-- 인덱스 생성 (검색 성능 향상)
CREATE INDEX idx_calculations_user_id ON calculations(user_id);
CREATE INDEX idx_calculations_type ON calculations(calculator_type);
CREATE INDEX idx_calculations_created_at ON calculations(created_at DESC);

-- updated_at 자동 업데이트 함수
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc', NOW());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- updated_at 트리거
CREATE TRIGGER update_calculations_updated_at
BEFORE UPDATE ON calculations
FOR EACH ROW
EXECUTE FUNCTION update_updated_at();
```

"Run" 또는 F5 키를 눌러 실행!

### Step 3: Row Level Security (RLS) 설정

```sql
-- RLS 활성화
ALTER TABLE calculations ENABLE ROW LEVEL SECURITY;

-- 정책 1: 사용자는 자신의 계산만 조회
CREATE POLICY "Users can view own calculations"
  ON calculations
  FOR SELECT
  USING (auth.uid() = user_id);

-- 정책 2: 사용자는 자신의 계산만 추가
CREATE POLICY "Users can insert own calculations"
  ON calculations
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- 정책 3: 사용자는 자신의 계산만 수정
CREATE POLICY "Users can update own calculations"
  ON calculations
  FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- 정책 4: 사용자는 자신의 계산만 삭제
CREATE POLICY "Users can delete own calculations"
  ON calculations
  FOR DELETE
  USING (auth.uid() = user_id);
```

---

## 🔐 인증 설정

### Step 1: 이메일 인증 활성화
1. Authentication → Providers
2. Email 활성화 (기본적으로 켜져 있음)

### Step 2: 소셜 로그인 설정 (선택)

#### Google 로그인
1. [Google Cloud Console](https://console.cloud.google.com/)에서 프로젝트 생성
2. OAuth 2.0 클라이언트 ID 생성
3. Supabase에서:
   - Authentication → Providers → Google
   - Client ID, Client Secret 입력
   - "Save" 클릭

#### GitHub 로그인
1. GitHub → Settings → Developer settings → OAuth Apps
2. New OAuth App
3. Callback URL: `https://xxxxx.supabase.co/auth/v1/callback`
4. Supabase에서:
   - Authentication → Providers → GitHub
   - Client ID, Client Secret 입력

### Step 3: Redirect URL 설정

Authentication → URL Configuration:
- Site URL: `http://localhost:3000`
- Redirect URLs:
  - `http://localhost:3000/auth/callback`
  - `https://your-domain.vercel.app/auth/callback` (배포 후)

---

## 🧪 테스트

### 회원가입 테스트
```bash
# 앱 실행
npm run dev

# 브라우저에서
# 1. http://localhost:3000/auth 접속
# 2. 이메일/비밀번호 입력
# 3. "Sign up" 클릭
# 4. 이메일 확인 (받은 편지함)
```

### 데이터 확인
Supabase Dashboard:
1. Table Editor → calculations
2. 저장된 데이터 확인
3. RLS 정책 작동 확인

---

## 🔍 디버깅

### 연결 실패 시
```typescript
// src/lib/supabase/client.ts
console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL)
console.log('Anon Key exists:', !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
```

### RLS 오류 시
```sql
-- RLS 정책 확인
SELECT * FROM pg_policies WHERE tablename = 'calculations';

-- RLS 비활성화 (테스트 목적, 절대 프로덕션 금지!)
ALTER TABLE calculations DISABLE ROW LEVEL SECURITY;
```

### 권한 오류 시
```sql
-- 현재 사용자 ID 확인
SELECT auth.uid();

-- calculations 테이블 확인
SELECT * FROM calculations WHERE user_id = auth.uid();
```

---

## 🚀 프로덕션 배포

### Vercel 환경 변수 설정

Vercel Dashboard → Settings → Environment Variables:

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

### Supabase URL 업데이트

Authentication → URL Configuration:
- Site URL: `https://your-domain.vercel.app`
- Redirect URL 추가: `https://your-domain.vercel.app/auth/callback`

---

## 📊 모니터링

### Supabase Dashboard

1. **Database**
   - Table Editor: 데이터 직접 확인/수정
   - SQL Editor: 쿼리 실행

2. **Authentication**
   - Users: 가입한 사용자 목록
   - Logs: 로그인 기록

3. **Storage** (선택)
   - 파일 업로드용 (이미지 등)

4. **Logs**
   - API 호출 로그
   - 에러 로그

---

## 💡 보안 팁

### ✅ DO
- Row Level Security (RLS) 활성화
- 환경 변수로 API 키 관리
- .gitignore에 .env.local 포함
- HTTPS 사용 (Vercel 자동)

### ❌ DON'T
- API 키를 코드에 하드코딩
- RLS 비활성화 (프로덕션)
- Service Role Key를 클라이언트에서 사용
- .env 파일을 Git에 커밋

---

## 🔗 참고 자료

- [Supabase 공식 문서](https://supabase.com/docs)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)
- [Supabase Auth](https://supabase.com/docs/guides/auth)
- [Next.js + Supabase](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)

---

## 📞 문제 해결

문제가 발생하면:
1. Supabase Logs 확인
2. 브라우저 Console 확인
3. Network 탭에서 API 호출 확인
4. Issue 생성 또는 Discord에 질문

Happy Building! 🎉

