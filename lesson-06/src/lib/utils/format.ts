/**
 * 숫자 포맷팅 유틸리티
 */

export function formatNumber(num: number): string {
  return num.toLocaleString('ko-KR');
}

export function formatCurrency(num: number): string {
  return `${formatNumber(num)}원`;
}

export function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}년 ${month}월 ${day}일`;
}

export function formatPercentage(num: number): string {
  return `${num}%`;
}


