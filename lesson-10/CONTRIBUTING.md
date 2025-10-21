# 기여 가이드

Easy Count 프로젝트에 기여해주셔서 감사합니다!

## 🌟 기여 방법

### 1. Fork & Clone

```bash
# 저장소 Fork (GitHub에서)
# Fork한 저장소 클론
git clone https://github.com/your-username/easy-count.git
cd easy-count
```

### 2. 개발 환경 설정

```bash
# 의존성 설치
npm install

# 환경 변수 설정
cp .env.example .env.local
# .env.local 파일 수정

# 개발 서버 실행
npm run dev
```

### 3. 브랜치 생성

```bash
# develop 브랜치에서 시작
git checkout develop
git pull origin develop

# 새 기능 브랜치 생성
git checkout -b feature/your-feature-name
```

### 4. 코드 작성

- TypeScript 사용
- ESLint 규칙 준수
- Prettier로 포맷팅
- 의미 있는 변수명 사용

### 5. Commit

Conventional Commits 규칙 준수:

```bash
# 커밋 타입:
# feat: 새로운 기능
# fix: 버그 수정
# docs: 문서 변경
# style: 코드 포맷팅
# refactor: 리팩토링
# test: 테스트 추가
# chore: 빌드, 설정 변경

git add .
git commit -m "feat: 새로운 계산기 추가"
```

### 6. Push & PR

```bash
# 원격에 푸시
git push origin feature/your-feature-name

# GitHub에서 Pull Request 생성
# Base: develop
# Compare: feature/your-feature-name
```

## ✅ PR 체크리스트

PR을 생성하기 전에 확인:

- [ ] `npm run lint` 통과
- [ ] `npm run build` 성공
- [ ] 로컬에서 기능 테스트 완료
- [ ] 의미 있는 커밋 메시지
- [ ] PR 설명 작성 완료
- [ ] 관련 이슈 링크 추가

## 🐛 버그 리포트

버그를 발견하셨나요? Issue를 생성해주세요!

**필수 정보:**
- 버그 설명
- 재현 단계
- 예상 동작
- 실제 동작
- 스크린샷 (가능하면)
- 브라우저/환경 정보

## 💡 기능 제안

새로운 기능 아이디어가 있나요?

- Issue에 제안 내용 작성
- 왜 필요한지 설명
- 예상 사용 사례 공유

## 📝 코드 스타일

### TypeScript
```typescript
// 타입 명시
function calculateSum(a: number, b: number): number {
  return a + b;
}

// 인터페이스 사용
interface User {
  id: string;
  email: string;
}
```

### React 컴포넌트
```typescript
'use client'  // 클라이언트 컴포넌트만

import { useState } from 'react'

export default function MyComponent() {
  const [state, setState] = useState('')
  
  return (
    <div className="...">
      {/* ... */}
    </div>
  )
}
```

### CSS (Tailwind)
```typescript
// 유틸리티 클래스 사용
<div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow">
```

## 🧪 테스트

```bash
# Lint 검사
npm run lint

# 빌드 테스트
npm run build

# 타입 체크
npx tsc --noEmit
```

## 📚 참고 자료

- [Next.js 문서](https://nextjs.org/docs)
- [TypeScript 핸드북](https://www.typescriptlang.org/docs/)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [Supabase 문서](https://supabase.com/docs)

## 🙏 감사합니다!

여러분의 기여가 프로젝트를 더 좋게 만듭니다! 🎉

