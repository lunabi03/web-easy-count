import type { ElectricityResult, ElectricityTier } from '@/types';

// 전기 요금 구간 (주택용 저압, 예시 단가)
const ELECTRICITY_TIERS: ElectricityTier[] = [
  { range: '200kWh 이하', minKwh: 0, maxKwh: 200, baseCharge: 910, unitPrice: 112.0 },
  { range: '201~400kWh', minKwh: 201, maxKwh: 400, baseCharge: 1600, unitPrice: 206.6 },
  { range: '400kWh 초과', minKwh: 401, maxKwh: Infinity, baseCharge: 7300, unitPrice: 299.3 },
];

function getTier(usage: number): ElectricityTier {
  if (usage <= 200) return ELECTRICITY_TIERS[0];
  if (usage <= 400) return ELECTRICITY_TIERS[1];
  return ELECTRICITY_TIERS[2];
}

function calculateUsageCharge(usage: number): number {
  let charge = 0;
  if (usage <= 200) {
    charge = usage * ELECTRICITY_TIERS[0].unitPrice;
  } else if (usage <= 400) {
    charge = 200 * ELECTRICITY_TIERS[0].unitPrice + (usage - 200) * ELECTRICITY_TIERS[1].unitPrice;
  } else {
    charge =
      200 * ELECTRICITY_TIERS[0].unitPrice +
      200 * ELECTRICITY_TIERS[1].unitPrice +
      (usage - 400) * ELECTRICITY_TIERS[2].unitPrice;
  }
  return Math.round(charge);
}

export function calculateElectricity(usage: number): ElectricityResult {
  if (usage < 0) throw new Error('사용량은 0 이상이어야 합니다.');

  const tier = getTier(usage);
  const baseCharge = tier.baseCharge;
  const usageCharge = calculateUsageCharge(usage);
  const climateCharge = Math.round(usage * 9); // kWh당 9원
  const subtotal = baseCharge + usageCharge + climateCharge;
  const vat = Math.round(subtotal * 0.1);
  const fund = Math.round(subtotal * 0.037);
  const totalCharge = subtotal + vat + fund;

  const dailyAverage = Math.round(totalCharge / 30);
  const yearlyEstimate = totalCharge * 12;

  return {
    usage,
    tier: tier.range,
    baseCharge,
    usageCharge,
    climateCharge,
    subtotal,
    vat,
    fund,
    totalCharge,
    dailyAverage,
    yearlyEstimate,
    averageUnitPrice: usage > 0 ? Math.round((totalCharge / usage) * 10) / 10 : 0,
  };
}

export function getSavingTips(usage: number): string[] {
  const tips: string[] = [];
  if (usage > 400) {
    tips.push('💡 400kWh 초과로 3구간 요금이 적용되었습니다. 사용량을 줄이면 절감폭이 큽니다.');
    tips.push('❄️ 냉난방 온도 1~2도 조절 시 약 7% 절감 효과.');
  } else if (usage > 200) {
    tips.push('⚡ 200kWh를 초과하여 2구간이 적용됩니다. 약간만 줄여보세요.');
  } else {
    tips.push('✅ 1구간으로 효율적으로 사용 중입니다.');
  }
  tips.push('🔌 대기전력 차단 멀티탭 사용으로 월 5~10% 절감.');
  tips.push('💡 LED 전구로 교체 시 전력 80% 절감.');
  return tips;
}


