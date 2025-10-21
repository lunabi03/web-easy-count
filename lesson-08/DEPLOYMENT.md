# Vercel 배포 가이드

## 🚀 배포 단계

### Step 1: GitHub에 코드 푸시

```bash
# Git 초기화 (아직 안 했다면)
git init

# 파일 추가
git add .

# 커밋
git commit -m "Initial commit: Easy Count 생활 계산기"

# 메인 브랜치 설정
git branch -M main

# GitHub 저장소 연결 (본인의 저장소로 변경)
git remote add origin https://github.com/your-username/easy-count.git

# 푸시
git push -u origin main
```

### Step 2: Vercel 계정 생성

1. https://vercel.com 접속
2. "Sign Up" 클릭
3. GitHub 계정으로 가입

### Step 3: 프로젝트 Import

1. Vercel 대시보드에서 "New Project" 클릭
2. "Import Git Repository" 선택
3. GitHub 저장소 선택
4. Framework Preset: **Next.js** (자동 인식)
5. Root Directory: `lesson-08` (또는 프로젝트 루트)

### Step 4: 환경 변수 설정

Environment Variables 섹션에 추가:

```
NEXT_PUBLIC_SITE_URL=https://your-project.vercel.app
NEXT_PUBLIC_GA_ID=G-YOUR-GOOGLE-ANALYTICS-ID
```

### Step 5: 배포

1. "Deploy" 버튼 클릭
2. 2-3분 대기
3. 배포 완료! 🎉

배포 URL 예시: `https://easy-count.vercel.app`

---

## 📋 배포 후 확인 사항

### 1. 사이트 접속
- [ ] 홈페이지가 정상 작동하는가?
- [ ] 모든 계산기가 작동하는가?
- [ ] 모바일에서도 잘 보이는가?

### 2. SEO 확인
- [ ] https://your-domain.vercel.app/sitemap.xml 접근 가능?
- [ ] https://your-domain.vercel.app/robots.txt 접근 가능?
- [ ] 페이지 소스 보기에서 메타 태그 확인?

### 3. 성능 확인
- [ ] Lighthouse 점수 확인 (F12 → Lighthouse)
- [ ] 페이지 로딩 속도 체크
- [ ] 이미지 최적화 확인

---

## 🔍 Google Search Console 등록

### Step 1: 사이트 등록
1. https://search.google.com/search-console 접속
2. "속성 추가" 클릭
3. "URL 접두어" 선택
4. Vercel 배포 URL 입력: `https://your-project.vercel.app`

### Step 2: 소유권 확인
방법 1: HTML 태그
```html
<meta name="google-site-verification" content="your-verification-code" />
```
→ `src/app/layout.tsx`의 metadata에 추가

방법 2: DNS 레코드 (커스텀 도메인 사용 시)

### Step 3: Sitemap 제출
1. 좌측 메뉴 → "Sitemaps"
2. 새 사이트맵 추가: `https://your-project.vercel.app/sitemap.xml`
3. "제출" 클릭

### Step 4: 색인 생성 요청
1. 좌측 메뉴 → "URL 검사"
2. 각 페이지 URL 입력
3. "색인 생성 요청" 클릭

---

## 🌏 Naver Search Advisor 등록

### Step 1: 사이트 등록
1. https://searchadvisor.naver.com 접속
2. "웹마스터 도구" → "사이트 등록"
3. Vercel URL 입력

### Step 2: 사이트 소유 확인
- HTML 태그 확인 방법 선택
- 메타 태그를 layout.tsx에 추가

### Step 3: 사이트맵 제출
- 사이트맵 URL 제출: `https://your-project.vercel.app/sitemap.xml`

---

## 📊 성능 최적화 확인

### Lighthouse 점수 목표
- **Performance**: 90점 이상
- **Accessibility**: 90점 이상
- **Best Practices**: 90점 이상
- **SEO**: 100점

### Core Web Vitals
- **LCP** (Largest Contentful Paint): 2.5초 이내
- **FID** (First Input Delay): 100ms 이내
- **CLS** (Cumulative Layout Shift): 0.1 이하

---

## 🔧 배포 문제 해결

### 빌드 실패 시
```bash
# 로컬에서 빌드 테스트
npm run build

# TypeScript 오류 확인
npm run build --verbose
```

### 환경 변수 오류 시
1. Vercel 대시보드 → 프로젝트 → Settings → Environment Variables
2. 변수 재확인 및 수정
3. Redeploy

### 캐시 문제 시
- Vercel 대시보드 → Deployments → ... → Redeploy

---

## 🌟 커스텀 도메인 연결 (선택사항)

### Step 1: 도메인 구입
- Namecheap, GoDaddy, Cloudflare 등

### Step 2: Vercel에서 도메인 추가
1. 프로젝트 → Settings → Domains
2. 도메인 입력 (예: easycount.com)
3. DNS 레코드 설정 안내 확인

### Step 3: DNS 설정
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Step 4: 확인
- 전파 대기 (최대 48시간)
- https://your-domain.com 접속 확인

---

## 📱 공유하기

배포 완료 후:
1. URL을 친구들과 공유
2. SNS에 공유 (Open Graph 태그로 예쁘게 표시됨)
3. 포트폴리오에 추가

---

## 🎯 다음 단계

Lesson 09에서는 Supabase로 회원가입 및 계산 기록 저장 기능을 구현합니다!


