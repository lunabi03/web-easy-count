import type { DiscountResult } from '@/types';

/**
 * 할인율 계산
 */
export function calculateDiscount(originalPrice: number, discountRate: number): DiscountResult {
  if (!originalPrice || originalPrice <= 0) {
    throw new Error('원가는 0보다 커야 합니다');
  }
  
  if (discountRate < 0 || discountRate > 100) {
    throw new Error('할인율은 0~100 사이여야 합니다');
  }
  
  const discountAmount = Math.floor(originalPrice * (discountRate / 100));
  const finalPrice = originalPrice - discountAmount;
  
  return {
    originalPrice,
    discountRate,
    discountAmount,
    finalPrice,
    savedAmount: discountAmount
  };
}


