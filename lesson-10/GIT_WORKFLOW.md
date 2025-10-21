# Git 워크플로우 가이드

## 📋 브랜치 전략

### 메인 브랜치
- `main` - 프로덕션 배포 브랜치 (항상 안정적인 상태)
- `develop` - 개발 브랜치 (다음 릴리즈 준비)

### 기능 브랜치
- `feature/*` - 새로운 기능 개발
- `fix/*` - 버그 수정
- `hotfix/*` - 긴급 수정 (main에서 직접 분기)

## 🔄 협업 워크플로우

### 1. 최신 코드 가져오기

```bash
git checkout develop
git pull origin develop
```

### 2. 새 기능 브랜치 생성

```bash
# 기능 추가
git checkout -b feature/bmi-calculator

# 버그 수정
git checkout -b fix/salary-calculation

# 긴급 수정
git checkout -b hotfix/auth-error
```

### 3. 작업 진행

```bash
# 파일 수정...

# 상태 확인
git status

# 변경사항 확인
git diff

# 특정 파일 변경사항 확인
git diff src/app/page.tsx
```

### 4. 스테이징 및 커밋

```bash
# 모든 파일 스테이징
git add .

# 특정 파일만 스테이징
git add src/app/page.tsx

# 커밋 (Conventional Commits)
git commit -m "feat(calculator): BMI 계산기 추가"
git commit -m "fix(salary): 세금 계산 오류 수정"
git commit -m "docs(readme): 설치 가이드 업데이트"
```

### 5. 원격에 푸시

```bash
git push origin feature/bmi-calculator
```

### 6. Pull Request 생성

GitHub에서:
1. "Compare & pull request" 클릭
2. Base: `develop`
3. Compare: `feature/bmi-calculator`
4. 제목: "feat: BMI 계산기 추가"
5. 설명 작성 (템플릿 사용)
6. "Create pull request" 클릭

### 7. CI 통과 확인

- ✅ Lint 통과
- ✅ Build 성공

### 8. 리뷰 및 Merge

- 리뷰어의 코멘트 확인
- 수정 요청 사항 반영
- 승인 후 "Squash and merge"

### 9. 로컬 브랜치 정리

```bash
# develop 브랜치로 전환
git checkout develop

# 최신 코드 가져오기
git pull origin develop

# 머지된 브랜치 삭제
git branch -d feature/bmi-calculator
```

## 📝 Commit 메시지 규칙

### 형식
```
<type>(<scope>): <subject>

<body> (선택)

<footer> (선택)
```

### Type
- `feat`: 새로운 기능
- `fix`: 버그 수정
- `docs`: 문서 변경
- `style`: 코드 포맷팅 (기능 변경 없음)
- `refactor`: 리팩토링
- `test`: 테스트 추가
- `chore`: 빌드, 설정 변경

### Scope (선택)
- `calculator`: 계산기 관련
- `auth`: 인증 관련
- `db`: 데이터베이스 관련
- `ui`: UI/UX 관련
- `seo`: SEO 관련

### 예시

```bash
# 좋은 예
git commit -m "feat(calculator): 100일 계산기 추가"
git commit -m "fix(salary): 국민연금 계산 오류 수정"
git commit -m "docs(readme): 설치 방법 추가"
git commit -m "style(format): Prettier 적용"
git commit -m "refactor(date): 날짜 계산 로직 개선"
git commit -m "chore(deps): Next.js 14.1로 업데이트"

# 나쁜 예
git commit -m "update"
git commit -m "fix bug"
git commit -m "asdf"
```

## 🚨 긴급 수정 (Hotfix)

프로덕션 버그 긴급 수정:

```bash
# main에서 hotfix 브랜치 생성
git checkout main
git pull origin main
git checkout -b hotfix/critical-bug

# 수정 후 커밋
git commit -m "fix(critical): 로그인 오류 긴급 수정"

# main과 develop 모두에 머지
git checkout main
git merge hotfix/critical-bug
git push origin main

git checkout develop
git merge hotfix/critical-bug
git push origin develop

# hotfix 브랜치 삭제
git branch -d hotfix/critical-bug
```

## 🔄 릴리즈 프로세스

### develop → main 병합

```bash
# develop의 최신 코드 확인
git checkout develop
git pull origin develop

# main으로 전환
git checkout main
git pull origin main

# develop 병합
git merge develop

# 태그 생성 (선택)
git tag -a v1.0.0 -m "Release v1.0.0"

# 푸시
git push origin main
git push origin --tags
```

## 📊 유용한 Git 명령어

### 상태 확인
```bash
git status              # 파일 상태
git log                 # 커밋 히스토리
git log --oneline       # 간단한 히스토리
git log --graph         # 그래프로 보기
```

### 변경 취소
```bash
# 작업 디렉토리 변경 취소
git checkout -- file.txt

# 스테이징 취소
git reset HEAD file.txt

# 마지막 커밋 수정
git commit --amend

# 커밋 되돌리기
git revert <commit-hash>
```

### 브랜치 관리
```bash
# 브랜치 목록
git branch
git branch -a           # 원격 포함

# 브랜치 삭제
git branch -d <branch>  # 로컬
git push origin --delete <branch>  # 원격

# 브랜치 이름 변경
git branch -m old-name new-name
```

### Stash (임시 저장)
```bash
# 현재 작업 임시 저장
git stash

# Stash 목록
git stash list

# Stash 적용
git stash pop

# Stash 삭제
git stash drop
```

## 🎯 목표

- 깔끔한 커밋 히스토리 유지
- 의미 있는 커밋 메시지
- 작은 단위로 자주 커밋
- PR은 하나의 목적만 (Single Responsibility)
- 코드 리뷰 적극 참여

## 💬 질문이 있나요?

Issue를 생성하거나 Discussion에서 질문해주세요!

Happy Coding! 🚀

