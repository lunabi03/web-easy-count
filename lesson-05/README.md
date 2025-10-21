# Lesson 05: Vite + 쇼핑 계산기

## 실행 방법

### 1. 의존성 설치
```bash
pnpm install
```

### 2. 개발 서버 실행
```bash
pnpm dev
```

브라우저에서 http://localhost:5173 열기

### 3. 프로덕션 빌드
```bash
pnpm build
```

빌드된 파일은 `dist/` 폴더에 생성됩니다.

### 4. 빌드 미리보기
```bash
pnpm preview
```

## 기능

### 할인율 계산기 🏷️
- 원가와 할인율 입력
- 할인 금액과 최종 가격 계산
- 절약 금액 표시

**예시:**
- 원가: 100,000원
- 할인율: 30%
- 결과: 70,000원 (30,000원 절약!)

### 부가세 계산기 🧾
- **공급가액 → 부가세 포함 금액**
  - 공급가액: 100,000원
  - 부가세: 10,000원
  - 총액: 110,000원

- **부가세 포함 금액 → 공급가액**
  - 총액: 110,000원
  - 공급가액: 100,000원
  - 부가세: 10,000원

## 프로젝트 구조

```
lesson-05/
├── package.json          # 프로젝트 설정 및 의존성
├── index.html            # HTML 진입점
├── README.md             # 프로젝트 설명
└── src/
    ├── main.js           # JavaScript 진입점
    ├── styles/
    │   └── main.css      # 스타일시트
    ├── modules/          # 계산 로직 모듈
    │   ├── discount.js   # 할인율 계산
    │   └── vat.js        # 부가세 계산
    ├── utils/            # 공통 유틸리티
    │   └── format.js     # 숫자 포맷팅
    └── ui/               # UI 업데이트
        └── display.js    # 결과 표시
```

## 모듈 설명

### 📦 modules/discount.js
- `calculateDiscount(원가, 할인율)` - 할인 금액 계산
- `calculateOriginalPrice(할인가, 할인율)` - 원가 역산

### 📦 modules/vat.js
- `calculateVAT(금액, 부가세포함여부)` - 부가세 계산
- `getVATOnly(공급가액)` - 부가세만 계산
- `getSupplyAmountOnly(총액)` - 공급가액만 계산

### 🛠️ utils/format.js
- `formatNumber(숫자)` - 천단위 콤마
- `formatCurrency(숫자)` - 금액 포맷 (원)
- `formatPercentage(숫자)` - 퍼센트 포맷

### 🎨 ui/display.js
- `displayDiscountResult(결과)` - 할인 결과 표시
- `displayVATResult(결과)` - 부가세 결과 표시
- `showError(요소ID, 메시지)` - 에러 메시지 표시

## 기술 스택

- **Vite 5.0** - 빠른 개발 서버 및 빌드 도구
- **ES6 Modules** - import/export로 모듈화
- **Vanilla JavaScript** - 프레임워크 없이 순수 JS
- **CSS3** - 모던 스타일링

## Vite의 장점

✅ **빠른 개발 서버**
- 번들링 없이 바로 실행
- 즉시 시작 (Cold Start)

✅ **HMR (Hot Module Replacement)**
- 코드 수정 시 자동 새로고침
- 상태 유지하며 모듈만 교체

✅ **최적화된 빌드**
- Rollup 기반 프로덕션 빌드
- 코드 스플리팅 자동 처리
- Tree-shaking으로 사용하지 않는 코드 제거

## 학습 포인트

### ES6 모듈 시스템

**Named Export/Import:**
```javascript
// discount.js
export function calculateDiscount() { ... }

// main.js
import { calculateDiscount } from './modules/discount.js';
```

**CSS Import:**
```javascript
// JavaScript에서 CSS 파일도 import 가능!
import './styles/main.css';
```

### 에러 처리

```javascript
try {
  const result = calculateDiscount(price, rate);
  displayResult(result);
} catch (error) {
  showError('resultDiv', error.message);
}
```

## 개발 팁

1. **콘솔 확인**
   - F12 → Console 탭
   - "🚀 Easy Count 애플리케이션 시작!" 메시지 확인

2. **HMR 테스트**
   - CSS 수정 후 즉시 반영 확인
   - JavaScript 수정 후 상태 유지 확인

3. **빌드 최적화**
   - `pnpm build` 실행 후 `dist/` 폴더 확인
   - 압축된 파일 크기 확인

## 다음 단계

Lesson 06에서는 Next.js로 전환하여 모든 계산기를 통합하고 프로페셔널한 웹 애플리케이션을 만듭니다!


