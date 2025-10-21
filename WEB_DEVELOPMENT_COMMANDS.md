# 웹 개발 터미널 명령어 완전 정리 (PRD)

> **Product Requirements Document** - 웹사이트 개발 시 사용하는 모든 터미널 명령어 모음
> 
> 초보자부터 실전까지 - 복사해서 바로 사용할 수 있는 명령어 가이드

---

## 📚 목차

**기초 개념**
- [용어 설명 - 꼭 읽어보세요!](#용어-설명---꼭-읽어보세요)

**실전 명령어**
1. [Node.js & 패키지 매니저](#1-nodejs--패키지-매니저)
2. [프로젝트 초기화](#2-프로젝트-초기화)
3. [개발 서버 실행](#3-개발-서버-실행)
4. [패키지 관리](#4-패키지-관리)
5. [빌드 & 배포](#5-빌드--배포)
6. [Git 버전 관리](#6-git-버전-관리)
7. [데이터베이스 (Supabase)](#7-데이터베이스-supabase)
8. [Vercel 배포](#8-vercel-배포)
9. [디버깅 & 테스트](#9-디버깅--테스트)
10. [자주 발생하는 에러 해결](#10-자주-발생하는-에러-해결)

---

## 용어 설명 - 꼭 읽어보세요!

### 📖 기본 개념

#### 터미널 (Terminal) / 커맨드라인 (Command Line)

**터미널**은 컴퓨터에 명령어를 입력하는 검은색 화면입니다.

```
┌────────────────────────────────────┐
│  마우스로 클릭하는 것 = GUI        │
│  명령어를 입력하는 것 = CLI        │
└────────────────────────────────────┘
```

**왜 사용하나요?**
- 웹 개발에서는 프로젝트 생성, 서버 실행, 배포 등을 명령어로 합니다
- GUI(그래픽 인터페이스)보다 빠르고 정확합니다
- 전 세계 개발자들이 같은 방식으로 작업합니다

**어디서 열나요?**
- Windows: `Windows 키 + R` → `cmd` 또는 `powershell`
- Mac: `Command + Space` → `terminal`
- VS Code: `Ctrl + ` (백틱)`

---

### 🟢 Node.js 관련 용어

#### Node.js (노드제이에스)

**Node.js**는 JavaScript를 브라우저 밖에서도 실행할 수 있게 해주는 프로그램입니다.

**쉬운 비유:**
```
원래: JavaScript는 웹 브라우저 안에서만 동작
Node.js: JavaScript를 컴퓨터 어디서든 실행 가능
```

**예시:**
```javascript
// 브라우저: HTML 파일 안에서만 실행
<script>
  console.log('Hello');
</script>

// Node.js: 터미널에서 직접 실행 가능
node script.js
```

**왜 필요한가요?**
- 웹 개발 도구들(Vite, Next.js 등)이 Node.js로 만들어져 있습니다
- 개발 서버를 실행하려면 Node.js가 필요합니다
- npm, pnpm 같은 패키지 매니저를 사용하려면 필수입니다

**설치 확인:**
```bash
node --version
# 출력: v20.10.0 (버전 번호가 나오면 설치됨)
```

---

#### npm (Node Package Manager)

**npm**은 "Node 패키지 관리자"입니다. 다른 사람들이 만든 코드(패키지)를 설치하고 관리하는 도구입니다.

**쉬운 비유:**
```
npm = 앱스토어
패키지 = 앱

앱스토어에서 앱을 다운로드하듯이,
npm으로 패키지를 다운로드합니다.
```

**예시:**
```bash
# React라는 패키지를 설치
npm install react

# 스마트폰으로 치면:
앱스토어 → "React 앱" 검색 → 설치
```

**npm은 언제 사용하나요?**
- 프로젝트를 처음 시작할 때
- 새로운 기능(패키지)이 필요할 때
- 프로젝트를 실행할 때

**특징:**
- Node.js를 설치하면 npm도 자동으로 설치됩니다
- 가장 오래되고 많이 사용되는 패키지 매니저입니다
- 전 세계에 수백만 개의 패키지가 있습니다

---

#### pnpm (performant npm)

**pnpm**은 npm의 개선 버전입니다. npm보다 빠르고 디스크 공간을 적게 사용합니다.

**npm vs pnpm 비교:**

```
npm의 문제점:
- 프로젝트마다 같은 패키지를 중복으로 다운로드
- 느림
- 디스크 공간 낭비

pnpm의 해결책:
- 패키지를 한 곳에 저장하고 링크만 생성
- 빠름 (2-3배)
- 디스크 공간 절약 (최대 50%)
```

**시각적 비교:**

```
npm 방식:
프로젝트A/node_modules/react (100MB)
프로젝트B/node_modules/react (100MB)
프로젝트C/node_modules/react (100MB)
총 300MB 사용

pnpm 방식:
공용저장소/react (100MB)
프로젝트A → 링크
프로젝트B → 링크
프로젝트C → 링크
총 100MB 사용
```

**설치 방법:**
```bash
npm install -g pnpm
```

**명령어 비교:**
```bash
npm install    → pnpm install
npm install react → pnpm add react
npm run dev    → pnpm dev (run 생략 가능!)
```

---

#### yarn (얀)

**yarn**은 Facebook에서 만든 또 다른 패키지 매니저입니다.

**간단 비교:**
- **npm**: 가장 기본, 호환성 좋음
- **pnpm**: 빠르고 효율적 (추천!)
- **yarn**: npm과 pnpm 중간

이 프로젝트에서는 **pnpm**을 사용합니다.

---

### 📦 패키지 관련 용어

#### 패키지 (Package)

**패키지**는 다른 개발자가 만들어 놓은 코드 묶음입니다.

**쉬운 비유:**
```
직접 만들기 vs 사서 쓰기

날짜 계산 기능이 필요하다면?

❌ 직접 만들기: 1000줄 코드 작성
✅ 패키지 사용: pnpm add date-fns (10초 완료)
```

**예시 패키지:**
```bash
react           # 웹 UI 만들기
next            # 웹 프레임워크
date-fns        # 날짜 계산
react-icons     # 아이콘 모음
tailwindcss     # CSS 디자인
```

**패키지 사용 방법:**
```bash
# 1. 설치
pnpm add react-icons

# 2. 코드에서 사용
import { FaHome } from 'react-icons/fa'

# 3. 완료!
```

---

#### 의존성 (Dependency)

**의존성**은 프로젝트가 작동하기 위해 필요한 패키지들입니다.

**쉬운 비유:**
```
요리로 비유:

음식(프로젝트)을 만들려면
재료(패키지)가 필요합니다

비빔밥 = 프로젝트
밥, 야채, 고추장 = 의존성
```

**의존성 종류:**

1. **일반 의존성 (dependencies)**
   - 실제 웹사이트가 작동하는데 필요한 패키지
   - 예: react, next, date-fns
   
   ```bash
   pnpm add react
   ```

2. **개발 의존성 (devDependencies)**
   - 개발할 때만 필요한 패키지
   - 예: typescript, eslint, prettier
   
   ```bash
   pnpm add -D typescript
   # -D = --save-dev (개발 의존성)
   ```

**왜 구분하나요?**
- 배포할 때 개발 의존성은 포함하지 않아 용량이 줄어듭니다
- 실제 웹사이트에는 일반 의존성만 필요합니다

---

#### package.json

**package.json**은 프로젝트의 설명서입니다.

**무엇이 들어있나요?**
```json
{
  "name": "my-project",           // 프로젝트 이름
  "version": "1.0.0",             // 버전
  "scripts": {                    // 실행 명령어
    "dev": "next dev",
    "build": "next build"
  },
  "dependencies": {               // 필요한 패키지 목록
    "react": "^18.2.0",
    "next": "^14.0.0"
  }
}
```

**역할:**
1. **프로젝트 정보 저장**
   - 이름, 버전, 설명

2. **필요한 패키지 목록**
   - 어떤 패키지가 필요한지 기록

3. **실행 명령어 정의**
   - `pnpm dev` 같은 단축 명령어

**왜 중요한가요?**
```bash
# 다른 사람이 프로젝트를 받았을 때

git clone 프로젝트주소
cd 프로젝트
pnpm install  # package.json을 보고 필요한 패키지 자동 설치!
pnpm dev      # package.json의 scripts 보고 실행
```

---

#### node_modules

**node_modules**는 설치된 패키지들이 실제로 저장되는 폴더입니다.

**특징:**
```
📁 node_modules/
  ├─ react/
  ├─ next/
  └─ 수천 개의 폴더들...

💡 용량이 매우 큽니다! (수백 MB ~ GB)
💡 Git에 올리지 않습니다! (.gitignore에 추가)
💡 package.json만 있으면 언제든 재생성 가능
```

**왜 Git에 올리지 않나요?**
```bash
# 용량이 너무 커서!
node_modules/  # 500MB

# 대신 이렇게:
package.json   # 5KB
pnpm install   # package.json 보고 node_modules 재생성
```

---

### 🔧 개발 도구 용어

#### 개발 서버 (Development Server)

**개발 서버**는 코드를 작성하면서 실시간으로 결과를 확인할 수 있게 해주는 서버입니다.

**작동 방식:**
```
1. pnpm dev 실행
2. 개발 서버 시작 (http://localhost:3000)
3. 브라우저에서 확인
4. 코드 수정
5. 자동으로 새로고침 → 변경사항 즉시 반영!
```

**특징:**
- 🔄 **자동 새로고침** (Hot Reload)
- ⚡ **빠른 실행**
- 🐛 **자세한 에러 메시지**
- 🚫 **실제 사용자는 접속 불가** (내 컴퓨터에서만)

**vs 프로덕션 서버:**
```
개발 서버 (pnpm dev):
- 내 컴퓨터에서만 실행
- 디버깅 기능 많음
- 느릴 수 있음

프로덕션 서버 (배포 후):
- 전 세계에서 접속 가능
- 최적화됨
- 빠름
```

---

#### 빌드 (Build)

**빌드**는 개발한 코드를 웹사이트로 사용할 수 있게 변환하는 과정입니다.

**왜 필요한가요?**

```
개발할 때 코드:
- TypeScript (.tsx)
- 주석 많음
- 개발 도구 포함
- 느림

빌드 후 코드:
- JavaScript (.js)
- 주석 제거
- 불필요한 코드 제거
- 최적화됨
- 빠름
```

**빌드 과정:**
```bash
# 1. 빌드 실행
pnpm build

# 2. 변환 과정
TypeScript → JavaScript
SCSS → CSS
이미지 압축
코드 압축 (minify)
불필요한 코드 제거

# 3. 결과물 생성
.next/ 폴더 또는 dist/ 폴더
```

**예시:**
```typescript
// 빌드 전 (개발 코드)
const greeting: string = "Hello, World!";
console.log(greeting);
// 주석: 이것은 인사말입니다

// 빌드 후 (프로덕션 코드)
const a="Hello, World!";console.log(a);
```

---

#### 배포 (Deploy / Deployment)

**배포**는 만든 웹사이트를 인터넷에 올려서 다른 사람들이 볼 수 있게 하는 것입니다.

**배포 과정:**
```
1. 개발 완료
   ↓
2. 빌드 (pnpm build)
   ↓
3. 서버에 업로드
   ↓
4. URL 생성 (https://my-site.vercel.app)
   ↓
5. 전 세계 어디서나 접속 가능!
```

**배포 전 vs 배포 후:**
```
배포 전:
- http://localhost:3000
- 내 컴퓨터에서만 접속 가능
- 개발 모드

배포 후:
- https://my-site.vercel.app
- 전 세계 어디서나 접속 가능
- 프로덕션 모드
```

**주요 배포 서비스:**
- **Vercel** (Next.js에 최적화, 무료)
- **Netlify** (정적 사이트, 무료)
- **GitHub Pages** (GitHub 기반, 무료)

---

### 🔀 Git 관련 용어

#### Git (깃)

**Git**은 코드의 변경 이력을 관리하는 도구입니다.

**쉬운 비유:**
```
Git = 게임 세이브 기능

게임:
- 1단계 클리어 → 세이브
- 2단계 클리어 → 세이브
- 3단계 실패 → 2단계로 돌아가기

코드:
- 로그인 기능 완성 → 커밋
- 회원가입 기능 완성 → 커밋
- 버그 발생 → 이전 커밋으로 돌아가기
```

**Git으로 할 수 있는 것:**
1. **변경 이력 저장** (커밋)
2. **이전 버전으로 되돌리기**
3. **여러 버전 동시 작업** (브랜치)
4. **팀 협업**

**기본 개념:**
```bash
git add .           # 변경사항 선택 (세이브할 파일 선택)
git commit -m "메시지"  # 저장 (세이브 실행)
git push            # 클라우드 업로드 (클라우드 세이브)
```

---

#### 저장소 (Repository / Repo)

**저장소**는 프로젝트 코드와 변경 이력이 저장되는 곳입니다.

**종류:**

1. **로컬 저장소 (Local Repository)**
   - 내 컴퓨터에 있는 저장소
   - `.git` 폴더

2. **원격 저장소 (Remote Repository)**
   - 인터넷(GitHub)에 있는 저장소
   - 백업 + 협업 용도

**관계:**
```
내 컴퓨터 (로컬)         GitHub (원격)
┌─────────────┐         ┌─────────────┐
│  프로젝트    │ push →  │  프로젝트    │
│  .git       │ ← pull  │  코드 저장   │
└─────────────┘         └─────────────┘
```

---

#### 브랜치 (Branch)

**브랜치**는 코드의 분기점입니다. 여러 가지 작업을 동시에 진행할 수 있게 해줍니다.

**쉬운 비유:**
```
평행 우주처럼 여러 버전을 동시에 작업

main 브랜치 (메인 버전):
├─ 로그인 기능
└─ 회원가입 기능

feature/payment 브랜치 (결제 기능 추가 중):
├─ 로그인 기능
├─ 회원가입 기능
└─ 결제 기능 (작업 중...)

feature/design 브랜치 (디자인 변경 중):
├─ 로그인 기능 (디자인 새로움)
└─ 회원가입 기능 (디자인 새로움)
```

**사용 예시:**
```bash
# 새 기능 개발용 브랜치 생성
git checkout -b feature/calculator

# 작업 완료 후 메인에 합치기
git checkout main
git merge feature/calculator
```

---

#### 커밋 (Commit)

**커밋**은 변경사항을 저장하는 것입니다. Git의 "세이브 포인트"입니다.

**구조:**
```
커밋 = 스냅샷 + 메시지

예시:
┌────────────────────────────┐
│ 커밋 #3                     │
│ "feat: Add calculator"     │
│ 파일: calculator.js 추가    │
│ 시간: 2025-01-15 14:30     │
└────────────────────────────┘
         ↑
┌────────────────────────────┐
│ 커밋 #2                     │
│ "fix: Fix login bug"       │
│ 파일: login.js 수정         │
│ 시간: 2025-01-15 10:00     │
└────────────────────────────┘
         ↑
┌────────────────────────────┐
│ 커밋 #1                     │
│ "feat: Add login page"     │
│ 파일: login.js 추가         │
│ 시간: 2025-01-14 16:00     │
└────────────────────────────┘
```

**좋은 커밋 메시지:**
```bash
# ✅ 좋은 예
git commit -m "feat: Add calculator component"
git commit -m "fix: Fix date calculation bug"
git commit -m "docs: Update README"

# ❌ 나쁜 예
git commit -m "수정"
git commit -m "ㅇㅇ"
git commit -m "asdf"
```

---

### 🌐 웹 개발 프레임워크

#### Vite (비트)

**Vite**는 매우 빠른 웹 개발 도구입니다.

**특징:**
- ⚡ 초고속 개발 서버
- 🔥 Hot Module Replacement (HMR)
- 📦 최적화된 빌드

**언제 사용하나요?**
- 간단한 웹사이트
- React/Vue 학습용
- 빠른 프로토타입 제작

```bash
pnpm create vite    # Vite 프로젝트 생성
pnpm dev            # 개발 서버 (초고속!)
pnpm build          # 빌드
```

---

#### Next.js (넥스트제이에스)

**Next.js**는 React 기반의 풀스택 웹 프레임워크입니다.

**특징:**
- 📁 파일 기반 라우팅
- 🚀 서버 사이드 렌더링 (SSR)
- 🔍 SEO 최적화
- 🎨 이미지 최적화 자동

**Vite vs Next.js:**
```
Vite:
- 간단하고 빠름
- 클라이언트만
- 학습용

Next.js:
- 기능이 많음
- 서버 + 클라이언트
- 실전 프로젝트용 (추천!)
```

---

#### TypeScript (타입스크립트)

**TypeScript**는 JavaScript에 타입을 추가한 언어입니다.

**JavaScript vs TypeScript:**
```javascript
// JavaScript (타입 없음)
function add(a, b) {
  return a + b;
}
add(1, 2)        // 3 ✅
add(1, "2")      // "12" ❌ 버그!

// TypeScript (타입 있음)
function add(a: number, b: number): number {
  return a + b;
}
add(1, 2)        // 3 ✅
add(1, "2")      // 에러! 컴파일 안됨 ✅
```

**왜 사용하나요?**
- 🐛 버그를 코드 작성 중에 발견
- 💡 자동 완성 기능 강화
- 📚 코드 가독성 향상

---

### 📊 실전 용어 정리표

| 용어 | 한글 뜻 | 쉬운 설명 | 예시 |
|------|---------|-----------|------|
| **Node.js** | - | JavaScript 실행 환경 | `node script.js` |
| **npm** | Node 패키지 관리자 | 앱스토어 같은 것 | `npm install react` |
| **pnpm** | 빠른 npm | npm의 개선 버전 | `pnpm add react` |
| **패키지** | 묶음 | 남이 만든 코드 | `react`, `next` |
| **의존성** | 필요한 것 | 프로젝트에 필요한 패키지 | `dependencies` |
| **터미널** | 명령창 | 명령어 입력하는 곳 | `Ctrl + `` |
| **빌드** | 변환 | 배포용으로 최적화 | `pnpm build` |
| **배포** | 게시 | 웹에 올리기 | `vercel --prod` |
| **Git** | 깃 | 버전 관리 도구 | `git commit` |
| **커밋** | 저장 | 변경사항 저장 | `git commit -m` |
| **브랜치** | 분기 | 별도 작업 공간 | `git branch` |
| **저장소** | 보관소 | 코드 저장 공간 | GitHub |

---

### 🎯 헷갈리는 용어 비교

#### npm vs pnpm vs yarn

```
목적은 같음: 패키지 설치 및 관리

차이점:
┌─────────┬────────┬────────┬──────────┐
│         │  npm   │  pnpm  │   yarn   │
├─────────┼────────┼────────┼──────────┤
│ 속도    │  느림  │  빠름  │   중간   │
│ 용량    │  큼    │  작음  │   중간   │
│ 인기도  │  최고  │  증가중 │   많음   │
│ 추천도  │  보통  │  ⭐⭐⭐ │   보통   │
└─────────┴────────┴────────┴──────────┘

결론: pnpm 추천!
```

#### 개발 vs 프로덕션

```
개발 환경 (Development):
- 내 컴퓨터에서만
- 디버깅 도구 포함
- 자세한 에러 메시지
- 명령어: pnpm dev

프로덕션 환경 (Production):
- 실제 사용자에게 제공
- 최적화됨
- 에러 메시지 간단
- 명령어: pnpm build → 배포
```

#### 로컬 vs 원격

```
로컬 (Local):
- 내 컴퓨터
- 내 노트북
- 예: C:\Projects\my-app

원격 (Remote):
- 인터넷 서버
- GitHub
- 예: https://github.com/user/repo
```

---

### 💡 초보자 FAQ

**Q: npm과 pnpm 둘 다 설치해야 하나요?**

A: npm은 Node.js 설치 시 자동으로 설치됩니다. pnpm은 별도로 설치하면 됩니다.
```bash
# Node.js 설치 → npm 자동 설치
# 그 다음
npm install -g pnpm  # pnpm 설치
```

**Q: package.json과 node_modules 차이는?**

A: 
- `package.json`: 필요한 패키지 **목록** (설계도)
- `node_modules`: 실제 패키지 **파일들** (건축물)

**Q: Git과 GitHub는 다른가요?**

A:
- **Git**: 내 컴퓨터의 버전 관리 프로그램
- **GitHub**: 인터넷의 코드 저장 웹사이트

```
Git = 워드 프로그램
GitHub = 구글 드라이브
```

**Q: 왜 이렇게 명령어가 많나요?**

A: 각각 다른 역할을 합니다.
```bash
pnpm dev    → 개발 서버 실행 (작업하면서 확인)
pnpm build  → 배포용으로 변환
git commit  → 버전 저장
git push    → GitHub에 백업
```

**Q: 에러가 나면 어떻게 하나요?**

A: 대부분 이 3가지로 해결됩니다:
```bash
# 1. 개발 서버 재시작
Ctrl + C
pnpm dev

# 2. node_modules 재설치
rm -rf node_modules
pnpm install

# 3. 캐시 삭제
rm -rf .next
pnpm dev
```

---

## 📚 다음 섹션으로

이제 기본 용어를 이해했으니 실제 명령어 사용법을 배워봅시다!

👉 [1. Node.js & 패키지 매니저](#1-nodejs--패키지-매니저)로 이동

---

## 1. Node.js & 패키지 매니저

### Node.js 설치 확인

```bash
# Node.js 버전 확인
node --version
# 또는
node -v
# 출력 예시: v20.10.0

# npm 버전 확인
npm --version
# 또는
npm -v
# 출력 예시: 10.2.3
```

### pnpm 설치 및 확인

```bash
# pnpm 설치 (전역)
npm install -g pnpm

# pnpm 버전 확인
pnpm --version
# 또는
pnpm -v

# pnpm 업데이트
pnpm add -g pnpm
```

### 패키지 매니저 비교

| 명령어 | npm | pnpm | yarn |
|--------|-----|------|------|
| 설치 | `npm install` | `pnpm install` | `yarn install` |
| 추가 | `npm install 패키지명` | `pnpm add 패키지명` | `yarn add 패키지명` |
| 제거 | `npm uninstall 패키지명` | `pnpm remove 패키지명` | `yarn remove 패키지명` |
| 실행 | `npm run 스크립트` | `pnpm 스크립트` | `yarn 스크립트` |

---

## 2. 프로젝트 초기화

### HTML/CSS/JavaScript (순수 웹)

```bash
# 폴더 생성
mkdir my-website
cd my-website

# 파일 생성 (Windows)
type nul > index.html
type nul > style.css
type nul > script.js

# 파일 생성 (Mac/Linux)
touch index.html style.css script.js

# VS Code로 열기
code .
```

### Vite 프로젝트 (레슨 5)

```bash
# Vite 프로젝트 생성
npm create vite@latest
# 또는
pnpm create vite

# 프로젝트명 입력: my-vite-app
# 프레임워크 선택: Vanilla (또는 React)
# 언어 선택: JavaScript (또는 TypeScript)

# 프로젝트로 이동
cd my-vite-app

# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev
```

### Next.js 프로젝트 (레슨 6~10)

```bash
# Next.js 프로젝트 생성 (대화형)
npx create-next-app@latest
# 또는
pnpm create next-app

# 옵션 선택:
# ✔ What is your project named? my-app
# ✔ Would you like to use TypeScript? Yes
# ✔ Would you like to use ESLint? Yes
# ✔ Would you like to use Tailwind CSS? Yes
# ✔ Would you like to use `src/` directory? Yes
# ✔ Would you like to use App Router? Yes
# ✔ Would you like to customize the default import alias? No

# 프로젝트로 이동
cd my-app

# 개발 서버 실행
pnpm dev
```

### Next.js 프로젝트 (한 번에 생성)

```bash
# 옵션을 미리 지정하여 생성
pnpm create next-app my-app --typescript --tailwind --app --eslint --src-dir

# 프로젝트로 이동 후 실행
cd my-app
pnpm install
pnpm dev
```

---

## 3. 개발 서버 실행

### 순수 HTML (Live Server 사용)

```bash
# VS Code 확장프로그램 필요: Live Server
# 방법 1: HTML 파일 우클릭 → "Open with Live Server"
# 방법 2: 단축키 Alt+L Alt+O

# Python 사용 (Live Server 대안)
python -m http.server 8000
# 브라우저에서 http://localhost:8000 열기

# Node.js 사용 (http-server)
npx http-server
# 또는
npm install -g http-server
http-server
```

### Vite 개발 서버

```bash
# 개발 서버 시작
pnpm dev
# 기본 포트: http://localhost:5173

# 특정 포트로 실행
pnpm dev --port 3000

# 네트워크에 공개 (다른 기기에서 접속 가능)
pnpm dev --host

# 개발 서버 종료
Ctrl + C
```

### Next.js 개발 서버

```bash
# 개발 서버 시작
pnpm dev
# 기본 포트: http://localhost:3000

# 특정 포트로 실행
pnpm dev -p 3001
# 또는
PORT=3001 pnpm dev

# Turbopack 사용 (더 빠른 빌드)
pnpm dev --turbo

# 개발 서버 종료
Ctrl + C
```

---

## 4. 패키지 관리

### 패키지 설치

```bash
# 의존성 설치 (package.json 기준)
pnpm install
# 줄임말
pnpm i

# 특정 패키지 추가
pnpm add react
pnpm add react-icons
pnpm add @supabase/supabase-js

# 개발 의존성 추가 (-D, --save-dev)
pnpm add -D typescript
pnpm add -D tailwindcss postcss autoprefixer
pnpm add -D @types/react

# 전역 설치 (-g)
pnpm add -g vercel
pnpm add -g typescript

# 여러 패키지 한번에 설치
pnpm add react react-dom next
```

### 패키지 제거

```bash
# 패키지 제거
pnpm remove react-icons
# 줄임말
pnpm rm react-icons

# 여러 패키지 제거
pnpm remove package1 package2 package3
```

### 패키지 업데이트

```bash
# 모든 패키지 업데이트 가능 여부 확인
pnpm outdated

# 모든 패키지 업데이트
pnpm update
# 줄임말
pnpm up

# 특정 패키지 업데이트
pnpm update react

# 최신 버전으로 업데이트 (메이저 버전 포함)
pnpm update --latest
```

### 패키지 정보 확인

```bash
# 설치된 패키지 목록 확인
pnpm list
# 줄임말
pnpm ls

# 특정 패키지 정보 확인
pnpm view react

# 패키지 의존성 트리 확인
pnpm list --depth=0
```

### package.json 스크립트

```bash
# package.json에 정의된 스크립트 실행
pnpm run dev        # 개발 서버
pnpm run build      # 프로덕션 빌드
pnpm run start      # 프로덕션 서버
pnpm run lint       # 코드 검사
pnpm run test       # 테스트 실행

# pnpm은 'run' 생략 가능
pnpm dev
pnpm build
pnpm start
```

---

## 5. 빌드 & 배포

### Vite 빌드

```bash
# 프로덕션 빌드
pnpm build
# 출력 폴더: dist/

# 빌드 결과 미리보기
pnpm preview
# http://localhost:4173

# 빌드 파일 삭제 후 재빌드
rm -rf dist
pnpm build

# Windows에서 빌드 파일 삭제
rmdir /s /q dist
pnpm build
```

### Next.js 빌드

```bash
# 프로덕션 빌드
pnpm build
# 출력 폴더: .next/

# 프로덕션 서버 실행
pnpm start
# http://localhost:3000

# 빌드 분석 (번들 크기 확인)
pnpm build
# package.json에 추가:
# "@next/bundle-analyzer": "^14.0.0"
```

### 정적 파일 내보내기 (Next.js)

```bash
# next.config.js 설정 후
pnpm build

# output: 'export' 설정 시 out/ 폴더 생성
```

---

## 6. Git 버전 관리

### Git 초기 설정

```bash
# Git 설치 확인
git --version

# Git 사용자 정보 설정 (최초 1회)
git config --global user.name "홍길동"
git config --global user.email "your.email@example.com"

# 설정 확인
git config --list
```

### 저장소 초기화

```bash
# 현재 폴더를 Git 저장소로 초기화
git init

# .gitignore 파일 생성 (중요!)
# Node.js 프로젝트용 템플릿 사용
```

### 기본 Git 명령어

```bash
# 현재 상태 확인
git status

# 변경사항 스테이징
git add .                    # 모든 파일
git add index.html          # 특정 파일
git add src/                # 특정 폴더

# 커밋 (변경사항 저장)
git commit -m "feat: Add login page"
git commit -m "fix: Fix calculation bug"
git commit -m "docs: Update README"

# 커밋 메시지 타입
# feat: 새 기능
# fix: 버그 수정
# docs: 문서 변경
# style: 코드 포맷팅
# refactor: 리팩토링
# test: 테스트 추가
# chore: 빌드/설정 변경
```

### 브랜치 관리

```bash
# 브랜치 목록 확인
git branch

# 새 브랜치 생성
git branch feature/new-calculator

# 브랜치 이동
git checkout feature/new-calculator
# 또는 (최신 방식)
git switch feature/new-calculator

# 브랜치 생성 + 이동
git checkout -b feature/new-calculator
# 또는
git switch -c feature/new-calculator

# 브랜치 삭제
git branch -d feature/old-feature

# 브랜치 이름 변경
git branch -m old-name new-name
```

### 원격 저장소 (GitHub)

```bash
# 원격 저장소 연결
git remote add origin https://github.com/username/repo-name.git

# 원격 저장소 확인
git remote -v

# 원격 저장소로 푸시
git push origin main
git push origin feature/new-feature

# 첫 푸시 시 업스트림 설정
git push -u origin main

# 원격 저장소에서 가져오기
git pull origin main

# 원격 저장소 복제
git clone https://github.com/username/repo-name.git
```

### 변경사항 확인

```bash
# 변경사항 확인 (상세)
git diff

# 스테이징된 변경사항 확인
git diff --staged

# 커밋 히스토리 확인
git log
git log --oneline         # 간단하게
git log --graph          # 그래프로
git log --all --graph    # 모든 브랜치
```

### 변경사항 되돌리기

```bash
# 스테이징 취소
git reset HEAD index.html

# 파일 변경사항 취소
git checkout -- index.html
# 또는
git restore index.html

# 마지막 커밋 취소 (변경사항 유지)
git reset --soft HEAD~1

# 마지막 커밋 취소 (변경사항 삭제)
git reset --hard HEAD~1

# 특정 커밋으로 되돌리기
git reset --hard commit-hash
```

### .gitignore 예시

```bash
# .gitignore 파일 생성
touch .gitignore

# .gitignore 내용 (Node.js 프로젝트)
node_modules/
.next/
dist/
build/
.env.local
.env.production.local
.DS_Store
*.log
.vercel
```

---

## 7. 데이터베이스 (Supabase)

### Supabase CLI 설치 및 사용

```bash
# Supabase CLI 설치
pnpm add -g supabase

# Supabase 로그인
supabase login

# 프로젝트 초기화
supabase init

# 로컬 개발 환경 시작
supabase start

# 데이터베이스 마이그레이션 생성
supabase migration new create_users_table

# 마이그레이션 실행
supabase db push

# Supabase 상태 확인
supabase status

# 로컬 환경 중지
supabase stop
```

### 환경 변수 설정

```bash
# .env.local 파일 생성
touch .env.local

# .env.local 내용
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

---

## 8. Vercel 배포

### Vercel CLI 설치 및 사용

```bash
# Vercel CLI 설치
pnpm add -g vercel

# Vercel 로그인
vercel login

# 프로젝트 배포 (첫 배포 - 프리뷰)
vercel

# 프로덕션 배포
vercel --prod

# 환경 변수 설정
vercel env add NEXT_PUBLIC_API_URL
# 값 입력 후 환경 선택 (Production, Preview, Development)

# 환경 변수 목록 확인
vercel env ls

# 프로젝트 정보 확인
vercel list

# 배포 로그 확인
vercel logs

# 프로젝트 제거
vercel remove project-name
```

### Git 연동 배포 (권장)

```bash
# 1. GitHub에 코드 푸시
git add .
git commit -m "deploy: Initial deployment"
git push origin main

# 2. Vercel 웹사이트에서
# - Import Git Repository
# - 프로젝트 선택
# - 자동 배포 시작

# 3. 이후 자동 배포
# - main 브랜치에 푸시하면 자동으로 프로덕션 배포
# - 다른 브랜치에 푸시하면 프리뷰 배포
```

---

## 9. 디버깅 & 테스트

### TypeScript 타입 체크

```bash
# TypeScript 컴파일러 설치
pnpm add -D typescript

# 타입 체크
pnpm tsc --noEmit

# watch 모드 (파일 변경 감지)
pnpm tsc --noEmit --watch
```

### ESLint (코드 검사)

```bash
# ESLint 실행
pnpm lint

# 자동 수정
pnpm lint --fix

# 특정 파일 검사
pnpm eslint src/components/Header.tsx

# 특정 폴더 검사
pnpm eslint src/
```

### Prettier (코드 포맷팅)

```bash
# Prettier 설치
pnpm add -D prettier

# 코드 포맷팅
pnpm prettier --write .

# 특정 파일 포맷팅
pnpm prettier --write src/app/page.tsx

# 포맷팅 확인 (변경 없이)
pnpm prettier --check .
```

### 캐시 삭제 (문제 해결)

```bash
# Next.js 캐시 삭제
rm -rf .next
pnpm dev

# Windows
rmdir /s /q .next
pnpm dev

# node_modules 삭제 후 재설치
rm -rf node_modules pnpm-lock.yaml
pnpm install

# Vite 캐시 삭제
rm -rf node_modules/.vite
pnpm dev
```

---

## 10. 자주 발생하는 에러 해결

### Port 충돌

```bash
# 에러: Port 3000 is already in use

# 해결 1: 다른 포트 사용
pnpm dev -p 3001

# 해결 2: 포트 사용 중인 프로세스 종료 (Windows)
netstat -ano | findstr :3000
taskkill /PID 프로세스번호 /F

# 해결 3: 포트 사용 중인 프로세스 종료 (Mac/Linux)
lsof -i :3000
kill -9 프로세스번호
```

### 의존성 충돌

```bash
# 에러: Cannot find module '...'

# 해결 1: 재설치
rm -rf node_modules pnpm-lock.yaml
pnpm install

# 해결 2: 캐시 삭제
pnpm store prune
pnpm install

# 해결 3: 특정 버전 설치
pnpm add react@18.2.0
```

### Git 충돌 해결

```bash
# 에러: Merge conflict

# 해결 1: 충돌 파일 확인
git status

# 해결 2: 파일 열어서 수동 해결
# <<<<<<< HEAD
# 내 변경사항
# =======
# 다른 사람 변경사항
# >>>>>>> branch-name

# 해결 3: 충돌 해결 후
git add .
git commit -m "fix: Resolve merge conflict"
```

### 빌드 에러

```bash
# 에러: Build failed

# 해결 1: 타입 체크
pnpm tsc --noEmit

# 해결 2: ESLint 확인
pnpm lint

# 해결 3: 의존성 확인
pnpm install

# 해결 4: 캐시 삭제 후 재빌드
rm -rf .next
pnpm build
```

---

## 📋 프로젝트별 필수 명령어 체크리스트

### 레슨 1-4 (순수 HTML/CSS/JS)

```bash
# 파일 생성
mkdir my-project
cd my-project
touch index.html style.css script.js

# VS Code 열기
code .

# Live Server 실행
# VS Code에서 우클릭 → Open with Live Server
```

### 레슨 5 (Vite)

```bash
# 프로젝트 생성
pnpm create vite
cd project-name
pnpm install

# 개발
pnpm dev

# 빌드
pnpm build
pnpm preview
```

### 레슨 6-10 (Next.js)

```bash
# 프로젝트 생성
pnpm create next-app my-app --typescript --tailwind --app --eslint
cd my-app

# 개발
pnpm dev

# 빌드
pnpm build
pnpm start

# 배포
git push origin main  # Vercel 자동 배포
```

---

## 🎯 시나리오별 명령어 플로우

### 새 프로젝트 시작

```bash
# 1. 프로젝트 생성
pnpm create next-app my-awesome-project --typescript --tailwind --app

# 2. 프로젝트 이동
cd my-awesome-project

# 3. 의존성 설치
pnpm install

# 4. Git 초기화 (자동 생성됨)
git status

# 5. 개발 서버 실행
pnpm dev

# 6. 브라우저에서 확인
# http://localhost:3000
```

### 패키지 추가 및 사용

```bash
# 1. 패키지 추가
pnpm add react-icons

# 2. 코드에서 사용
# import { FaHome } from 'react-icons/fa'

# 3. 저장 후 자동 반영 확인
```

### Git 커밋 및 푸시

```bash
# 1. 변경사항 확인
git status

# 2. 스테이징
git add .

# 3. 커밋
git commit -m "feat: Add new feature"

# 4. 푸시
git push origin main

# 5. Vercel 자동 배포 확인
# https://your-project.vercel.app
```

### 에러 발생 시

```bash
# 1. 개발 서버 재시작
Ctrl + C
pnpm dev

# 2. 캐시 삭제
rm -rf .next
pnpm dev

# 3. 의존성 재설치
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm dev

# 4. 타입 체크
pnpm tsc --noEmit

# 5. 린트 체크
pnpm lint
```

---

## 💡 유용한 팁

### 명령어 줄임말

```bash
# pnpm
pnpm i          # pnpm install
pnpm up         # pnpm update
pnpm rm         # pnpm remove
pnpm ls         # pnpm list

# git
git co          # git checkout (별칭 설정 필요)
git br          # git branch
git ci          # git commit
git st          # git status
```

### 별칭 설정 (Windows PowerShell)

```powershell
# PowerShell 프로필 열기
notepad $PROFILE

# 별칭 추가
Set-Alias g git
function dev { pnpm dev }
function build { pnpm build }

# 저장 후 재시작
```

### 별칭 설정 (Mac/Linux)

```bash
# .bashrc 또는 .zshrc 열기
nano ~/.zshrc

# 별칭 추가
alias g='git'
alias pn='pnpm'
alias dev='pnpm dev'
alias build='pnpm build'

# 저장 후
source ~/.zshrc
```

### VS Code 통합 터미널 단축키

```
Ctrl + ` (백틱)  - 터미널 열기/닫기
Ctrl + Shift + ` - 새 터미널
Ctrl + C         - 실행 중인 프로세스 종료
위/아래 화살표   - 이전 명령어 탐색
Tab              - 자동 완성
```

---

## 🔍 명령어 빠른 검색

### 개발 서버

```bash
pnpm dev         # Vite/Next.js 개발 서버
python -m http.server 8000  # 순수 HTML
```

### 빌드

```bash
pnpm build       # 프로덕션 빌드
pnpm start       # 빌드 결과 실행
pnpm preview     # Vite 빌드 미리보기
```

### 패키지

```bash
pnpm add 패키지명      # 패키지 추가
pnpm remove 패키지명   # 패키지 제거
pnpm update           # 패키지 업데이트
pnpm list             # 패키지 목록
```

### Git

```bash
git add .                     # 모든 변경사항 스테이징
git commit -m "메시지"        # 커밋
git push origin main          # 푸시
git pull origin main          # 풀
git status                    # 상태 확인
git log                       # 히스토리
```

### 배포

```bash
vercel              # 프리뷰 배포
vercel --prod       # 프로덕션 배포
git push origin main # Git 연동 자동 배포
```

---

## 📌 프로젝트 단계별 필수 명령어

### 1단계: 프로젝트 생성 (1회)
```bash
pnpm create next-app my-app --typescript --tailwind --app
cd my-app
```

### 2단계: 개발 시작 (매일)
```bash
pnpm dev
```

### 3단계: 패키지 추가 (필요시)
```bash
pnpm add 패키지명
```

### 4단계: Git 커밋 (작업 완료 시)
```bash
git add .
git commit -m "feat: 작업 내용"
git push origin main
```

### 5단계: 배포 (완성 시)
```bash
pnpm build           # 로컬 테스트
git push origin main  # 자동 배포 (Vercel)
```

---

## ⚡ 자주 사용하는 명령어 TOP 10

1. `pnpm dev` - 개발 서버 실행
2. `pnpm add 패키지명` - 패키지 설치
3. `pnpm build` - 프로덕션 빌드
4. `git add .` - 변경사항 스테이징
5. `git commit -m "메시지"` - 커밋
6. `git push origin main` - 푸시
7. `pnpm install` - 의존성 설치
8. `git status` - Git 상태 확인
9. `Ctrl + C` - 서버 종료
10. `code .` - VS Code 열기

---

## 🎓 레슨별 핵심 명령어

### 레슨 1-2 (HTML/JS)
```bash
# 파일 생성만
touch index.html script.js
code .
```

### 레슨 3-4 (CSS 추가)
```bash
touch styles.css
# Live Server로 실행
```

### 레슨 5 (Vite)
```bash
pnpm create vite
pnpm install
pnpm dev
pnpm build
```

### 레슨 6 (Next.js)
```bash
pnpm create next-app --typescript --tailwind --app
pnpm dev
```

### 레슨 7-8 (SEO & 배포)
```bash
pnpm build
vercel --prod
```

### 레슨 9-10 (Supabase & Git)
```bash
pnpm add @supabase/supabase-js
git push origin main
```

---

## 🆘 문제 해결 체크리스트

포트 충돌? 
```bash
→ pnpm dev -p 3001
```

빌드 실패?
```bash
→ rm -rf .next && pnpm build
```

의존성 오류?
```bash
→ rm -rf node_modules pnpm-lock.yaml && pnpm install
```

Git 충돌?
```bash
→ git status (파일 확인 후 수동 해결)
```

---

**🎉 이 명령어 가이드로 웹 개발을 마스터하세요!**

북마크하고 필요할 때마다 찾아보세요.
모든 명령어는 복사해서 바로 사용할 수 있습니다! 💪

