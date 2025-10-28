// 날짜 계산 결과 타입
export interface DDayResult {
  day100: Date;
  day200: Date;
  day500: Date;
  day1000: Date;
  daysTo100: number;
  daysTo200: number;
  daysTo500: number;
  daysTo1000: number;
}

export interface BirthdayResult {
  totalDays: number;
  totalWeeks: number;
  totalMonths: number;
  totalYears: number;
  daysToNextBirthday: number;
}

// 연봉 계산 결과 타입
export interface InsuranceResult {
  nationalPension: number;
  healthInsurance: number;
  longTermCare: number;
  employmentInsurance: number;
  total: number;
}

export interface TaxResult {
  incomeTax: number;
  localTax: number;
  total: number;
}

export interface SalaryResult {
  monthlySalary: number;
  insurance: InsuranceResult;
  tax: TaxResult;
  totalDeduction: number;
  netSalary: number;
  annualNet: number;
}

// 할인/부가세 타입
export interface DiscountResult {
  originalPrice: number;
  discountRate: number;
  discountAmount: number;
  finalPrice: number;
  savedAmount: number;
}

export interface VATResult {
  type: string;
  supplyAmount: number;
  vatAmount: number;
  totalAmount: number;
  vatRate: number;
}

// 전기 요금 계산 타입
export interface ElectricityTier {
  range: string; // 요금 구간 라벨
  minKwh: number; // 최소 사용량
  maxKwh: number; // 최대 사용량 (무한대 가능)
  baseCharge: number; // 기본요금(원)
  unitPrice: number; // kWh당 단가(원)
}

export interface ElectricityResult {
  usage: number; // 사용량(kWh)
  tier: string; // 적용 구간
  baseCharge: number; // 기본요금
  usageCharge: number; // 전력량 요금
  climateCharge: number; // 기후환경요금
  subtotal: number; // 부가세/기금 이전 합계
  vat: number; // 부가가치세
  fund: number; // 전력산업기반기금
  totalCharge: number; // 최종 청구금액
  dailyAverage: number; // 일평균 비용(30일 기준)
  yearlyEstimate: number; // 연간 추정 비용
  averageUnitPrice: number; // kWh당 평균 단가
}


